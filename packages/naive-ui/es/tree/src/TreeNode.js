import { h, inject, computed, defineComponent, ref, onMounted } from 'vue';
import { useMemo } from 'vooks';
import { happensIn, repeat } from 'seemly';
import { createDataKey } from '../../_utils';
import NTreeNodeSwitcher from './TreeNodeSwitcher';
import NTreeNodeCheckbox from './TreeNodeCheckbox';
import NTreeNodeContent from './TreeNodeContent';
import { treeInjectionKey } from './interface';
import { renderDropMark } from './dnd';
import { isNodeDisabled } from './utils';
const TreeNode = defineComponent({
    name: 'TreeNode',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        tmNode: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const NTree = inject(treeInjectionKey);
        const {
            droppingNodeParentRef,
            droppingMouseNodeRef,
            draggingNodeRef,
            droppingPositionRef,
            droppingOffsetLevelRef,
            nodePropsRef,
            indentRef,
            blockLineRef,
            checkboxPlacementRef,
            checkOnClickRef,
            disabledFieldRef,
        } = NTree;
        const checkboxDisabledRef = useMemo(
            () => !!props.tmNode.rawNode.checkboxDisabled
        );
        const nodeIsDisabledRef = useMemo(() => {
            return isNodeDisabled(props.tmNode, disabledFieldRef.value);
        });
        const disabledRef = useMemo(
            () => NTree.disabledRef.value || nodeIsDisabledRef.value
        );
        const resolvedNodePropsRef = computed(() => {
            const { value: nodeProps } = nodePropsRef;
            if (!nodeProps) return void 0;
            return nodeProps({ option: props.tmNode.rawNode });
        });
        const contentInstRef = ref(null);
        const contentElRef = { value: null };
        onMounted(() => {
            contentElRef.value = contentInstRef.value.$el;
        });
        function handleSwitcherClick() {
            const { tmNode } = props;
            if (!tmNode.isLeaf && !tmNode.shallowLoaded) {
                if (!NTree.loadingKeysRef.value.has(tmNode.key)) {
                    NTree.loadingKeysRef.value.add(tmNode.key);
                } else {
                    return;
                }
                const {
                    onLoadRef: { value: onLoad },
                } = NTree;
                if (onLoad) {
                    void onLoad(tmNode.rawNode)
                        .then((value) => {
                            if (value !== false) {
                                NTree.handleSwitcherClick(tmNode);
                            }
                        })
                        .finally(() => {
                            NTree.loadingKeysRef.value.delete(tmNode.key);
                        });
                }
            } else {
                NTree.handleSwitcherClick(tmNode);
            }
        }
        const selectableRef = useMemo(
            () =>
                !nodeIsDisabledRef.value &&
                NTree.selectableRef.value &&
                (NTree.internalTreeSelect
                    ? NTree.mergedCheckStrategyRef.value !== 'child' ||
                      (NTree.multipleRef.value && NTree.cascadeRef.value) ||
                      props.tmNode.isLeaf
                    : true)
        );
        const checkableRef = useMemo(
            () =>
                NTree.checkableRef.value &&
                (NTree.cascadeRef.value ||
                    NTree.mergedCheckStrategyRef.value !== 'child' ||
                    props.tmNode.isLeaf)
        );
        const checkedRef = useMemo(() =>
            NTree.displayedCheckedKeysRef.value.includes(props.tmNode.key)
        );
        const mergedCheckOnClickRef = useMemo(() => {
            const { value: checkable } = checkableRef;
            if (!checkable) return false;
            const { value: checkOnClick } = checkOnClickRef;
            if (typeof checkOnClick === 'boolean') {
                return checkOnClick;
            }
            return checkOnClick(props.tmNode.rawNode);
        });
        function _handleClick(e) {
            const { value: expandOnClick } = NTree.expandOnClickRef;
            const { value: selectable } = selectableRef;
            const { value: mergedCheckOnClick } = mergedCheckOnClickRef;
            if (!selectable && !expandOnClick && !mergedCheckOnClick) return;
            if (happensIn(e, 'checkbox') || happensIn(e, 'switcher')) return;
            const { tmNode } = props;
            if (selectable) {
                NTree.handleSelect(tmNode);
            }
            if (expandOnClick && !tmNode.isLeaf) {
                handleSwitcherClick();
            }
            if (mergedCheckOnClick) {
                handleCheck(!checkedRef.value);
            }
        }
        function handleContentClick(e) {
            var _a, _b;
            if (blockLineRef.value) return;
            if (!disabledRef.value) _handleClick(e);
            (_b =
                (_a = resolvedNodePropsRef.value) === null || _a === void 0
                    ? void 0
                    : _a.onClick) === null || _b === void 0
                ? void 0
                : _b.call(_a, e);
        }
        function handleLineClick(e) {
            var _a, _b;
            if (!blockLineRef.value) return;
            if (!disabledRef.value) {
                _handleClick(e);
            }
            (_b =
                (_a = resolvedNodePropsRef.value) === null || _a === void 0
                    ? void 0
                    : _a.onClick) === null || _b === void 0
                ? void 0
                : _b.call(_a, e);
        }
        function handleCheck(checked) {
            NTree.handleCheck(props.tmNode, checked);
        }
        function handleDragStart(e) {
            NTree.handleDragStart({
                event: e,
                node: props.tmNode,
            });
        }
        function handleDragEnter(e) {
            if (e.currentTarget !== e.target) {
                return;
            }
            NTree.handleDragEnter({
                event: e,
                node: props.tmNode,
            });
        }
        function handleDragOver(e) {
            e.preventDefault();
            NTree.handleDragOver({
                event: e,
                node: props.tmNode,
            });
        }
        function handleDragEnd(e) {
            NTree.handleDragEnd({
                event: e,
                node: props.tmNode,
            });
        }
        function handleDragLeave(e) {
            if (e.currentTarget !== e.target) {
                return;
            }
            NTree.handleDragLeave({
                event: e,
                node: props.tmNode,
            });
        }
        function handleDrop(e) {
            e.preventDefault();
            if (droppingPositionRef.value !== null) {
                NTree.handleDrop({
                    event: e,
                    node: props.tmNode,
                    dropPosition: droppingPositionRef.value,
                });
            }
        }
        return {
            showDropMark: useMemo(() => {
                const { value: draggingNode } = draggingNodeRef;
                if (!draggingNode) return;
                const { value: droppingPosition } = droppingPositionRef;
                if (!droppingPosition) return;
                const { value: droppingMouseNode } = droppingMouseNodeRef;
                if (!droppingMouseNode) {
                    return;
                }
                const { tmNode } = props;
                if (tmNode.key === droppingMouseNode.key) return true;
                return false;
            }),
            showDropMarkAsParent: useMemo(() => {
                const { value: droppingNodeParent } = droppingNodeParentRef;
                if (!droppingNodeParent) return false;
                const { tmNode } = props;
                const { value: droppingPosition } = droppingPositionRef;
                if (
                    droppingPosition === 'before' ||
                    droppingPosition === 'after'
                ) {
                    return droppingNodeParent.key === tmNode.key;
                }
                return false;
            }),
            pending: useMemo(
                () => NTree.pendingNodeKeyRef.value === props.tmNode.key
            ),
            loading: useMemo(() =>
                NTree.loadingKeysRef.value.has(props.tmNode.key)
            ),
            highlight: useMemo(() => {
                var _a;
                return (_a = NTree.highlightKeySetRef.value) === null ||
                    _a === void 0
                    ? void 0
                    : _a.has(props.tmNode.key);
            }),
            checked: checkedRef,
            indeterminate: useMemo(() =>
                NTree.displayedIndeterminateKeysRef.value.includes(
                    props.tmNode.key
                )
            ),
            selected: useMemo(() =>
                NTree.mergedSelectedKeysRef.value.includes(props.tmNode.key)
            ),
            expanded: useMemo(() =>
                NTree.mergedExpandedKeysRef.value.includes(props.tmNode.key)
            ),
            disabled: disabledRef,
            checkable: checkableRef,
            mergedCheckOnClick: mergedCheckOnClickRef,
            checkboxDisabled: checkboxDisabledRef,
            selectable: selectableRef,
            expandOnClick: NTree.expandOnClickRef,
            internalScrollable: NTree.internalScrollableRef,
            draggable: NTree.draggableRef,
            blockLine: blockLineRef,
            nodeProps: resolvedNodePropsRef,
            checkboxFocusable: NTree.internalCheckboxFocusableRef,
            droppingPosition: droppingPositionRef,
            droppingOffsetLevel: droppingOffsetLevelRef,
            indent: indentRef,
            checkboxPlacement: checkboxPlacementRef,
            contentInstRef,
            contentElRef,
            handleCheck,
            handleDrop,
            handleDragStart,
            handleDragEnter,
            handleDragOver,
            handleDragEnd,
            handleDragLeave,
            handleLineClick,
            handleContentClick,
            handleSwitcherClick,
        };
    },
    render() {
        const {
            tmNode,
            clsPrefix,
            checkable,
            expandOnClick,
            selectable,
            selected,
            checked,
            highlight,
            draggable,
            blockLine,
            indent,
            disabled,
            pending,
            internalScrollable,
            nodeProps,
            checkboxPlacement,
        } = this;
        const dragEventHandlers =
            draggable && !disabled
                ? {
                      onDragenter: this.handleDragEnter,
                      onDragleave: this.handleDragLeave,
                      onDragend: this.handleDragEnd,
                      onDrop: this.handleDrop,
                      onDragover: this.handleDragOver,
                  }
                : void 0;
        const dataKey = internalScrollable ? createDataKey(tmNode.key) : void 0;
        const checkboxOnRight = checkboxPlacement === 'right';
        const checkboxNode = checkable
            ? h(NTreeNodeCheckbox, {
                  right: checkboxOnRight,
                  focusable: this.checkboxFocusable,
                  disabled: disabled || this.checkboxDisabled,
                  clsPrefix,
                  checked: this.checked,
                  indeterminate: this.indeterminate,
                  onCheck: this.handleCheck,
              })
            : null;
        return h(
            'div',
            Object.assign(
                { class: `${clsPrefix}-tree-node-wrapper` },
                dragEventHandlers
            ),
            h(
                'div',
                Object.assign({}, blockLine ? nodeProps : void 0, {
                    class: [
                        `${clsPrefix}-tree-node`,
                        {
                            [`${clsPrefix}-tree-node--selected`]: selected,
                            [`${clsPrefix}-tree-node--checkable`]: checkable,
                            [`${clsPrefix}-tree-node--highlight`]: highlight,
                            [`${clsPrefix}-tree-node--pending`]: pending,
                            [`${clsPrefix}-tree-node--disabled`]: disabled,
                            [`${clsPrefix}-tree-node--selectable`]: selectable,
                            [`${clsPrefix}-tree-node--clickable`]:
                                selectable ||
                                expandOnClick ||
                                this.mergedCheckOnClick,
                        },
                        nodeProps === null || nodeProps === void 0
                            ? void 0
                            : nodeProps.class,
                    ],
                    'data-key': dataKey,
                    draggable: draggable && blockLine,
                    onClick: this.handleLineClick,
                    onDragstart:
                        draggable && blockLine && !disabled
                            ? this.handleDragStart
                            : void 0,
                }),
                repeat(
                    tmNode.level,
                    h(
                        'div',
                        { class: `${clsPrefix}-tree-node-indent` },
                        h('div', { style: { width: `${indent}px` } })
                    )
                ),
                h(NTreeNodeSwitcher, {
                    clsPrefix,
                    expanded: this.expanded,
                    selected,
                    loading: this.loading,
                    hide: tmNode.isLeaf,
                    onClick: this.handleSwitcherClick,
                }),
                !checkboxOnRight ? checkboxNode : null,
                h(
                    NTreeNodeContent,
                    {
                        ref: 'contentInstRef',
                        clsPrefix,
                        checked,
                        selected,
                        onClick: this.handleContentClick,
                        nodeProps: blockLine ? void 0 : nodeProps,
                        onDragstart:
                            draggable && !blockLine && !disabled
                                ? this.handleDragStart
                                : void 0,
                        tmNode,
                    },
                    { prefix: this.$slots.prefix, suffix: this.$slots.suffix }
                ),
                draggable
                    ? this.showDropMark
                        ? renderDropMark({
                              el: this.contentElRef.value,
                              position: this.droppingPosition,
                              offsetLevel: this.droppingOffsetLevel,
                              indent,
                          })
                        : this.showDropMarkAsParent
                        ? renderDropMark({
                              el: this.contentElRef.value,
                              position: 'inside',
                              offsetLevel: this.droppingOffsetLevel,
                              indent,
                          })
                        : null
                    : null,
                checkboxOnRight ? checkboxNode : null
            )
        );
    },
});
export default TreeNode;
