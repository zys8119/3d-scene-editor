import {
    h,
    ref,
    onMounted,
    computed,
    defineComponent,
    toRef,
    provide,
    nextTick,
    watch,
    onBeforeUnmount,
} from 'vue';
import { createIndexGetter } from 'treemate';
import { VirtualList } from 'vueuc';
import { depx, getPadding, happensIn } from 'seemly';
import { NEmpty } from '../../../empty';
import { NScrollbar } from '../../scrollbar';
import { resolveSlot, resolveWrappedSlot, useOnResize } from '../../../_utils';
import { createKey } from '../../../_utils/cssr';
import { useThemeClass, useTheme } from '../../../_mixins';
import NInternalLoading from '../../loading';
import NFocusDetector from '../../focus-detector';
import { internalSelectMenuLight } from '../styles';
import NSelectOption from './SelectOption';
import NSelectGroupHeader from './SelectGroupHeader';
import {
    internalSelectionMenuInjectionKey,
    internalSelectionMenuBodyInjectionKey,
} from './interface';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'InternalSelectMenu',
    props: Object.assign(Object.assign({}, useTheme.props), {
        clsPrefix: {
            type: String,
            required: true,
        },
        scrollable: {
            type: Boolean,
            default: true,
        },
        treeMate: {
            type: Object,
            required: true,
        },
        multiple: Boolean,
        size: {
            type: String,
            default: 'medium',
        },
        value: {
            type: [String, Number, Array],
            default: null,
        },
        autoPending: Boolean,
        virtualScroll: {
            type: Boolean,
            default: true,
        },
        show: {
            type: Boolean,
            default: true,
        },
        labelField: {
            type: String,
            default: 'label',
        },
        valueField: {
            type: String,
            default: 'value',
        },
        loading: Boolean,
        focusable: Boolean,
        renderLabel: Function,
        renderOption: Function,
        nodeProps: Function,
        showCheckmark: { type: Boolean, default: true },
        onMousedown: Function,
        onScroll: Function,
        onFocus: Function,
        onBlur: Function,
        onKeyup: Function,
        onKeydown: Function,
        onTabOut: Function,
        onMouseenter: Function,
        onMouseleave: Function,
        onResize: Function,
        resetMenuOnOptionsChange: {
            type: Boolean,
            default: true,
        },
        inlineThemeDisabled: Boolean,
        onToggle: Function,
    }),
    setup(props) {
        const themeRef = useTheme(
            'InternalSelectMenu',
            '-internal-select-menu',
            style,
            internalSelectMenuLight,
            props,
            toRef(props, 'clsPrefix')
        );
        const selfRef = ref(null);
        const virtualListRef = ref(null);
        const scrollbarRef = ref(null);
        const flattenedNodesRef = computed(() =>
            props.treeMate.getFlattenedNodes()
        );
        const fIndexGetterRef = computed(() =>
            createIndexGetter(flattenedNodesRef.value)
        );
        const pendingNodeRef = ref(null);
        function initPendingNode() {
            const { treeMate } = props;
            let defaultPendingNode = null;
            const { value } = props;
            if (value === null) {
                defaultPendingNode = treeMate.getFirstAvailableNode();
            } else {
                if (props.multiple) {
                    defaultPendingNode = treeMate.getNode(
                        (value || [])[(value || []).length - 1]
                    );
                } else {
                    defaultPendingNode = treeMate.getNode(value);
                }
                if (!defaultPendingNode || defaultPendingNode.disabled) {
                    defaultPendingNode = treeMate.getFirstAvailableNode();
                }
            }
            if (defaultPendingNode) {
                setPendingTmNode(defaultPendingNode);
            } else {
                setPendingTmNode(null);
            }
        }
        function clearPendingNodeIfInvalid() {
            const { value: pendingNode } = pendingNodeRef;
            if (pendingNode && !props.treeMate.getNode(pendingNode.key)) {
                pendingNodeRef.value = null;
            }
        }
        let initPendingNodeWatchStopHandle;
        watch(
            () => props.show,
            (show) => {
                if (show) {
                    initPendingNodeWatchStopHandle = watch(
                        () => props.treeMate,
                        () => {
                            if (props.resetMenuOnOptionsChange) {
                                if (props.autoPending) {
                                    initPendingNode();
                                } else {
                                    clearPendingNodeIfInvalid();
                                }
                                void nextTick(scrollToPendingNode);
                            } else {
                                clearPendingNodeIfInvalid();
                            }
                        },
                        {
                            immediate: true,
                        }
                    );
                } else {
                    initPendingNodeWatchStopHandle === null ||
                    initPendingNodeWatchStopHandle === void 0
                        ? void 0
                        : initPendingNodeWatchStopHandle();
                }
            },
            {
                immediate: true,
            }
        );
        onBeforeUnmount(() => {
            initPendingNodeWatchStopHandle === null ||
            initPendingNodeWatchStopHandle === void 0
                ? void 0
                : initPendingNodeWatchStopHandle();
        });
        const itemSizeRef = computed(() => {
            return depx(
                themeRef.value.self[createKey('optionHeight', props.size)]
            );
        });
        const paddingRef = computed(() => {
            return getPadding(
                themeRef.value.self[createKey('padding', props.size)]
            );
        });
        const valueSetRef = computed(() => {
            if (props.multiple && Array.isArray(props.value)) {
                return new Set(props.value);
            }
            return /* @__PURE__ */ new Set();
        });
        const emptyRef = computed(() => {
            const tmNodes = flattenedNodesRef.value;
            return tmNodes && tmNodes.length === 0;
        });
        function doToggle(tmNode) {
            const { onToggle } = props;
            if (onToggle) onToggle(tmNode);
        }
        function doScroll(e) {
            const { onScroll } = props;
            if (onScroll) onScroll(e);
        }
        function handleVirtualListScroll(e) {
            var _a;
            (_a = scrollbarRef.value) === null || _a === void 0
                ? void 0
                : _a.sync();
            doScroll(e);
        }
        function handleVirtualListResize() {
            var _a;
            (_a = scrollbarRef.value) === null || _a === void 0
                ? void 0
                : _a.sync();
        }
        function getPendingTmNode() {
            const { value: pendingTmNode } = pendingNodeRef;
            if (pendingTmNode) return pendingTmNode;
            return null;
        }
        function handleOptionMouseEnter(e, tmNode) {
            if (tmNode.disabled) return;
            setPendingTmNode(tmNode, false);
        }
        function handleOptionClick(e, tmNode) {
            if (tmNode.disabled) return;
            doToggle(tmNode);
        }
        function handleKeyUp(e) {
            var _a;
            if (happensIn(e, 'action')) return;
            (_a = props.onKeyup) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
        }
        function handleKeyDown(e) {
            var _a;
            if (happensIn(e, 'action')) return;
            (_a = props.onKeydown) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
        }
        function handleMouseDown(e) {
            var _a;
            (_a = props.onMousedown) === null || _a === void 0
                ? void 0
                : _a.call(props, e);
            if (props.focusable) return;
            e.preventDefault();
        }
        function next() {
            const { value: pendingTmNode } = pendingNodeRef;
            if (pendingTmNode) {
                setPendingTmNode(pendingTmNode.getNext({ loop: true }), true);
            }
        }
        function prev() {
            const { value: pendingTmNode } = pendingNodeRef;
            if (pendingTmNode) {
                setPendingTmNode(pendingTmNode.getPrev({ loop: true }), true);
            }
        }
        function setPendingTmNode(tmNode, doScroll2 = false) {
            pendingNodeRef.value = tmNode;
            if (doScroll2) scrollToPendingNode();
        }
        function scrollToPendingNode() {
            var _a, _b;
            const tmNode = pendingNodeRef.value;
            if (!tmNode) return;
            const fIndex = fIndexGetterRef.value(tmNode.key);
            if (fIndex === null) return;
            if (props.virtualScroll) {
                (_a = virtualListRef.value) === null || _a === void 0
                    ? void 0
                    : _a.scrollTo({ index: fIndex });
            } else {
                (_b = scrollbarRef.value) === null || _b === void 0
                    ? void 0
                    : _b.scrollTo({
                          index: fIndex,
                          elSize: itemSizeRef.value,
                      });
            }
        }
        function handleFocusin(e) {
            var _a, _b;
            if (
                (_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.target)
            ) {
                (_b = props.onFocus) === null || _b === void 0
                    ? void 0
                    : _b.call(props, e);
            }
        }
        function handleFocusout(e) {
            var _a, _b;
            if (
                !((_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget))
            ) {
                (_b = props.onBlur) === null || _b === void 0
                    ? void 0
                    : _b.call(props, e);
            }
        }
        provide(internalSelectionMenuInjectionKey, {
            handleOptionMouseEnter,
            handleOptionClick,
            valueSetRef,
            pendingTmNodeRef: pendingNodeRef,
            nodePropsRef: toRef(props, 'nodeProps'),
            showCheckmarkRef: toRef(props, 'showCheckmark'),
            multipleRef: toRef(props, 'multiple'),
            valueRef: toRef(props, 'value'),
            renderLabelRef: toRef(props, 'renderLabel'),
            renderOptionRef: toRef(props, 'renderOption'),
            labelFieldRef: toRef(props, 'labelField'),
            valueFieldRef: toRef(props, 'valueField'),
        });
        provide(internalSelectionMenuBodyInjectionKey, selfRef);
        onMounted(() => {
            const { value } = scrollbarRef;
            if (value) value.sync();
        });
        const cssVarsRef = computed(() => {
            const { size } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    height,
                    borderRadius,
                    color,
                    groupHeaderTextColor,
                    actionDividerColor,
                    optionTextColorPressed,
                    optionTextColor,
                    optionTextColorDisabled,
                    optionTextColorActive,
                    optionOpacityDisabled,
                    optionCheckColor,
                    actionTextColor,
                    optionColorPending,
                    optionColorActive,
                    loadingColor,
                    loadingSize,
                    optionColorActivePending,
                    [createKey('optionFontSize', size)]: fontSize,
                    [createKey('optionHeight', size)]: optionHeight,
                    [createKey('optionPadding', size)]: optionPadding,
                },
            } = themeRef.value;
            return {
                '--n-height': height,
                '--n-action-divider-color': actionDividerColor,
                '--n-action-text-color': actionTextColor,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-color': color,
                '--n-option-font-size': fontSize,
                '--n-group-header-text-color': groupHeaderTextColor,
                '--n-option-check-color': optionCheckColor,
                '--n-option-color-pending': optionColorPending,
                '--n-option-color-active': optionColorActive,
                '--n-option-color-active-pending': optionColorActivePending,
                '--n-option-height': optionHeight,
                '--n-option-opacity-disabled': optionOpacityDisabled,
                '--n-option-text-color': optionTextColor,
                '--n-option-text-color-active': optionTextColorActive,
                '--n-option-text-color-disabled': optionTextColorDisabled,
                '--n-option-text-color-pressed': optionTextColorPressed,
                '--n-option-padding': optionPadding,
                '--n-option-padding-left': getPadding(optionPadding, 'left'),
                '--n-option-padding-right': getPadding(optionPadding, 'right'),
                '--n-loading-color': loadingColor,
                '--n-loading-size': loadingSize,
            };
        });
        const { inlineThemeDisabled } = props;
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'internal-select-menu',
                  computed(() => props.size[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        const exposedProps = {
            selfRef,
            next,
            prev,
            getPendingTmNode,
        };
        useOnResize(selfRef, props.onResize);
        return Object.assign(
            {
                mergedTheme: themeRef,
                virtualListRef,
                scrollbarRef,
                itemSize: itemSizeRef,
                padding: paddingRef,
                flattenedNodes: flattenedNodesRef,
                empty: emptyRef,
                virtualListContainer() {
                    const { value } = virtualListRef;
                    return value === null || value === void 0
                        ? void 0
                        : value.listElRef;
                },
                virtualListContent() {
                    const { value } = virtualListRef;
                    return value === null || value === void 0
                        ? void 0
                        : value.itemsElRef;
                },
                doScroll,
                handleFocusin,
                handleFocusout,
                handleKeyUp,
                handleKeyDown,
                handleMouseDown,
                handleVirtualListResize,
                handleVirtualListScroll,
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            },
            exposedProps
        );
    },
    render() {
        const {
            $slots,
            virtualScroll,
            clsPrefix,
            mergedTheme,
            themeClass,
            onRender,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                ref: 'selfRef',
                tabindex: this.focusable ? 0 : -1,
                class: [
                    `${clsPrefix}-base-select-menu`,
                    themeClass,
                    this.multiple && `${clsPrefix}-base-select-menu--multiple`,
                ],
                style: this.cssVars,
                onFocusin: this.handleFocusin,
                onFocusout: this.handleFocusout,
                onKeyup: this.handleKeyUp,
                onKeydown: this.handleKeyDown,
                onMousedown: this.handleMouseDown,
                onMouseenter: this.onMouseenter,
                onMouseleave: this.onMouseleave,
            },
            this.loading
                ? h(
                      'div',
                      { class: `${clsPrefix}-base-select-menu__loading` },
                      h(NInternalLoading, { clsPrefix, strokeWidth: 20 })
                  )
                : !this.empty
                ? h(
                      NScrollbar,
                      {
                          ref: 'scrollbarRef',
                          theme: mergedTheme.peers.Scrollbar,
                          themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                          scrollable: this.scrollable,
                          container: virtualScroll
                              ? this.virtualListContainer
                              : void 0,
                          content: virtualScroll
                              ? this.virtualListContent
                              : void 0,
                          onScroll: virtualScroll ? void 0 : this.doScroll,
                      },
                      {
                          default: () => {
                              return virtualScroll
                                  ? h(
                                        VirtualList,
                                        {
                                            ref: 'virtualListRef',
                                            class: `${clsPrefix}-virtual-list`,
                                            items: this.flattenedNodes,
                                            itemSize: this.itemSize,
                                            showScrollbar: false,
                                            paddingTop: this.padding.top,
                                            paddingBottom: this.padding.bottom,
                                            onResize:
                                                this.handleVirtualListResize,
                                            onScroll:
                                                this.handleVirtualListScroll,
                                            itemResizable: true,
                                        },
                                        {
                                            default: ({ item: tmNode }) => {
                                                return tmNode.isGroup
                                                    ? h(NSelectGroupHeader, {
                                                          key: tmNode.key,
                                                          clsPrefix,
                                                          tmNode,
                                                      })
                                                    : tmNode.ignored
                                                    ? null
                                                    : h(NSelectOption, {
                                                          clsPrefix,
                                                          key: tmNode.key,
                                                          tmNode,
                                                      });
                                            },
                                        }
                                    )
                                  : h(
                                        'div',
                                        {
                                            class: `${clsPrefix}-base-select-menu-option-wrapper`,
                                            style: {
                                                paddingTop: this.padding.top,
                                                paddingBottom:
                                                    this.padding.bottom,
                                            },
                                        },
                                        this.flattenedNodes.map((tmNode) =>
                                            tmNode.isGroup
                                                ? h(NSelectGroupHeader, {
                                                      key: tmNode.key,
                                                      clsPrefix,
                                                      tmNode,
                                                  })
                                                : h(NSelectOption, {
                                                      clsPrefix,
                                                      key: tmNode.key,
                                                      tmNode,
                                                  })
                                        )
                                    );
                          },
                      }
                  )
                : h(
                      'div',
                      {
                          class: `${clsPrefix}-base-select-menu__empty`,
                          'data-empty': true,
                      },
                      resolveSlot($slots.empty, () => [
                          h(NEmpty, {
                              theme: mergedTheme.peers.Empty,
                              themeOverrides: mergedTheme.peerOverrides.Empty,
                          }),
                      ])
                  ),
            resolveWrappedSlot(
                $slots.action,
                (children) =>
                    children && [
                        h(
                            'div',
                            {
                                class: `${clsPrefix}-base-select-menu__action`,
                                'data-action': true,
                                key: 'action',
                            },
                            children
                        ),
                        h(NFocusDetector, {
                            onFocus: this.onTabOut,
                            key: 'focus-detector',
                        }),
                    ]
            )
        );
    },
});
