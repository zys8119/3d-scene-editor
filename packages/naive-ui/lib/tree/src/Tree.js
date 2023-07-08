var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.treeProps =
    exports.treeSharedProps =
    exports.createTreeMateOptions =
        void 0;
const vue_1 = require('vue');
const treemate_1 = require('treemate');
const vooks_1 = require('vooks');
const vueuc_1 = require('vueuc');
const seemly_1 = require('seemly');
const interface_1 = require('../../tree-select/src/interface');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const _internal_1 = require('../../_internal');
const styles_1 = require('../styles');
const empty_1 = require('../../empty');
const TreeNode_1 = __importDefault(require('./TreeNode'));
const utils_1 = require('./utils');
const keyboard_1 = require('./keyboard');
const interface_2 = require('./interface');
const MotionWrapper_1 = __importDefault(require('./MotionWrapper'));
const dnd_1 = require('./dnd');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
const ITEM_SIZE = 30;
function createTreeMateOptions(
    keyField,
    childrenField,
    disabledField,
    getChildren
) {
    const settledGetChildren =
        getChildren ||
        ((node) => {
            return node[childrenField];
        });
    return {
        getIsGroup() {
            return false;
        },
        getKey(node) {
            return node[keyField];
        },
        getChildren: settledGetChildren,
        getDisabled(node) {
            return !!(node[disabledField] || node.checkboxDisabled);
        },
    };
}
exports.createTreeMateOptions = createTreeMateOptions;
exports.treeSharedProps = {
    allowCheckingNotLoaded: Boolean,
    filter: Function,
    defaultExpandAll: Boolean,
    expandedKeys: Array,
    keyField: {
        type: String,
        default: 'key',
    },
    labelField: {
        type: String,
        default: 'label',
    },
    childrenField: {
        type: String,
        default: 'children',
    },
    disabledField: {
        type: String,
        default: 'disabled',
    },
    defaultExpandedKeys: {
        type: Array,
        default: () => [],
    },
    indeterminateKeys: Array,
    renderSwitcherIcon: Function,
    onUpdateIndeterminateKeys: [Function, Array],
    'onUpdate:indeterminateKeys': [Function, Array],
    onUpdateExpandedKeys: [Function, Array],
    'onUpdate:expandedKeys': [Function, Array],
};
exports.treeProps = Object.assign(
    Object.assign(
        Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
            accordion: Boolean,
            showIrrelevantNodes: { type: Boolean, default: true },
            data: {
                type: Array,
                default: () => [],
            },
            expandOnDragenter: {
                type: Boolean,
                default: true,
            },
            expandOnClick: Boolean,
            checkOnClick: {
                type: [Boolean, Function],
                default: false,
            },
            cancelable: {
                type: Boolean,
                default: true,
            },
            checkable: Boolean,
            draggable: Boolean,
            blockNode: Boolean,
            blockLine: Boolean,
            disabled: Boolean,
            checkedKeys: Array,
            defaultCheckedKeys: {
                type: Array,
                default: () => [],
            },
            selectedKeys: Array,
            defaultSelectedKeys: {
                type: Array,
                default: () => [],
            },
            multiple: Boolean,
            pattern: {
                type: String,
                default: '',
            },
            onLoad: Function,
            cascade: Boolean,
            selectable: {
                type: Boolean,
                default: true,
            },
            indent: {
                type: Number,
                default: 16,
            },
            allowDrop: {
                type: Function,
                default: dnd_1.defaultAllowDrop,
            },
            animated: {
                type: Boolean,
                default: true,
            },
            checkboxPlacement: {
                type: String,
                default: 'left',
            },
            virtualScroll: Boolean,
            watchProps: Array,
            renderLabel: Function,
            renderPrefix: Function,
            renderSuffix: Function,
            nodeProps: Function,
            keyboard: {
                type: Boolean,
                default: true,
            },
            getChildren: Function,
            onDragenter: [Function, Array],
            onDragleave: [Function, Array],
            onDragend: [Function, Array],
            onDragstart: [Function, Array],
            onDragover: [Function, Array],
            onDrop: [Function, Array],
            onUpdateCheckedKeys: [Function, Array],
            'onUpdate:checkedKeys': [Function, Array],
            onUpdateSelectedKeys: [Function, Array],
            'onUpdate:selectedKeys': [Function, Array],
        }),
        exports.treeSharedProps
    ),
    {
        internalTreeSelect: Boolean,
        internalScrollable: Boolean,
        internalScrollablePadding: String,
        internalRenderEmpty: Function,
        internalHighlightKeySet: Object,
        internalUnifySelectCheck: Boolean,
        internalCheckboxFocusable: {
            type: Boolean,
            default: true,
        },
        internalFocusable: {
            type: Boolean,
            default: true,
        },
        checkStrategy: {
            type: String,
            default: 'all',
        },
        leafOnly: Boolean,
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Tree',
    props: exports.treeProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.leafOnly) {
                    (0, _utils_1.warnOnce)(
                        'tree',
                        '`leaf-only` is deprecated, please use `check-strategy="child"` instead'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } = (0,
        _mixins_1.useConfig)(props);
        const rtlEnabledRef = (0, _mixins_1.useRtl)(
            'Tree',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const themeRef = (0, _mixins_1.useTheme)(
            'Tree',
            '-tree',
            index_cssr_1.default,
            styles_1.treeLight,
            props,
            mergedClsPrefixRef
        );
        const selfElRef = (0, vue_1.ref)(null);
        const scrollbarInstRef = (0, vue_1.ref)(null);
        const virtualListInstRef = (0, vue_1.ref)(null);
        function getScrollContainer() {
            var _a;
            return (_a = virtualListInstRef.value) === null || _a === void 0
                ? void 0
                : _a.listElRef;
        }
        function getScrollContent() {
            var _a;
            return (_a = virtualListInstRef.value) === null || _a === void 0
                ? void 0
                : _a.itemsElRef;
        }
        const mergedFilterRef = (0, vue_1.computed)(() => {
            const { filter } = props;
            if (filter) return filter;
            const { labelField } = props;
            return (pattern, node) => {
                if (!pattern.length) return true;
                const label = node[labelField];
                if (typeof label === 'string') {
                    return label.toLowerCase().includes(pattern.toLowerCase());
                }
                return false;
            };
        });
        const filteredTreeInfoRef = (0, vue_1.computed)(() => {
            const { pattern } = props;
            if (!pattern) {
                return {
                    filteredTree: props.data,
                    highlightKeySet: null,
                    expandedKeys: void 0,
                };
            }
            if (!pattern.length || !mergedFilterRef.value) {
                return {
                    filteredTree: props.data,
                    highlightKeySet: null,
                    expandedKeys: void 0,
                };
            }
            return (0, utils_1.filterTree)(
                props.data,
                mergedFilterRef.value,
                pattern,
                props.keyField,
                props.childrenField
            );
        });
        const displayTreeMateRef = (0, vue_1.computed)(() =>
            (0, treemate_1.createTreeMate)(
                props.showIrrelevantNodes
                    ? props.data
                    : filteredTreeInfoRef.value.filteredTree,
                createTreeMateOptions(
                    props.keyField,
                    props.childrenField,
                    props.disabledField,
                    props.getChildren
                )
            )
        );
        const treeSelectInjection = (0, vue_1.inject)(
            interface_1.treeSelectInjectionKey,
            null
        );
        const dataTreeMateRef = props.internalTreeSelect
            ? treeSelectInjection.dataTreeMate
            : displayTreeMateRef;
        const { watchProps } = props;
        const uncontrolledCheckedKeysRef = (0, vue_1.ref)([]);
        if (
            watchProps === null || watchProps === void 0
                ? void 0
                : watchProps.includes('defaultCheckedKeys')
        ) {
            (0, vue_1.watchEffect)(() => {
                uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
            });
        } else {
            uncontrolledCheckedKeysRef.value = props.defaultCheckedKeys;
        }
        const controlledCheckedKeysRef = (0, vue_1.toRef)(props, 'checkedKeys');
        const mergedCheckedKeysRef = (0, vooks_1.useMergedState)(
            controlledCheckedKeysRef,
            uncontrolledCheckedKeysRef
        );
        const checkedStatusRef = (0, vue_1.computed)(() => {
            const value = dataTreeMateRef.value.getCheckedKeys(
                mergedCheckedKeysRef.value,
                {
                    cascade: props.cascade,
                    allowNotLoaded: props.allowCheckingNotLoaded,
                }
            );
            return value;
        });
        const mergedCheckStrategyRef = (0, utils_1.useMergedCheckStrategy)(
            props
        );
        const displayedCheckedKeysRef = (0, vue_1.computed)(() => {
            return checkedStatusRef.value.checkedKeys;
        });
        const displayedIndeterminateKeysRef = (0, vue_1.computed)(() => {
            const { indeterminateKeys } = props;
            if (indeterminateKeys !== void 0) return indeterminateKeys;
            return checkedStatusRef.value.indeterminateKeys;
        });
        const uncontrolledSelectedKeysRef = (0, vue_1.ref)([]);
        if (
            watchProps === null || watchProps === void 0
                ? void 0
                : watchProps.includes('defaultSelectedKeys')
        ) {
            (0, vue_1.watchEffect)(() => {
                uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
            });
        } else {
            uncontrolledSelectedKeysRef.value = props.defaultSelectedKeys;
        }
        const controlledSelectedKeysRef = (0, vue_1.toRef)(
            props,
            'selectedKeys'
        );
        const mergedSelectedKeysRef = (0, vooks_1.useMergedState)(
            controlledSelectedKeysRef,
            uncontrolledSelectedKeysRef
        );
        const uncontrolledExpandedKeysRef = (0, vue_1.ref)([]);
        const initUncontrolledExpandedKeys = (keys) => {
            uncontrolledExpandedKeysRef.value = props.defaultExpandAll
                ? dataTreeMateRef.value.getNonLeafKeys()
                : keys === void 0
                ? props.defaultExpandedKeys
                : keys;
        };
        if (
            watchProps === null || watchProps === void 0
                ? void 0
                : watchProps.includes('defaultExpandedKeys')
        ) {
            (0, vue_1.watchEffect)(() => initUncontrolledExpandedKeys(void 0));
        } else {
            (0, vue_1.watchEffect)(() =>
                initUncontrolledExpandedKeys(props.defaultExpandedKeys)
            );
        }
        const controlledExpandedKeysRef = (0, vue_1.toRef)(
            props,
            'expandedKeys'
        );
        const mergedExpandedKeysRef = (0, vooks_1.useMergedState)(
            controlledExpandedKeysRef,
            uncontrolledExpandedKeysRef
        );
        const fNodesRef = (0, vue_1.computed)(() =>
            displayTreeMateRef.value.getFlattenedNodes(
                mergedExpandedKeysRef.value
            )
        );
        const { pendingNodeKeyRef, handleKeydown } = (0,
        keyboard_1.useKeyboard)({
            props,
            mergedSelectedKeysRef,
            fNodesRef,
            mergedExpandedKeysRef,
            handleSelect,
            handleSwitcherClick,
        });
        let expandTimerId = null;
        let nodeKeyToBeExpanded = null;
        const uncontrolledHighlightKeySetRef = (0, vue_1.ref)(
            /* @__PURE__ */ new Set()
        );
        const controlledHighlightKeySetRef = (0, vue_1.computed)(() => {
            return (
                props.internalHighlightKeySet ||
                filteredTreeInfoRef.value.highlightKeySet
            );
        });
        const mergedHighlightKeySetRef = (0, vooks_1.useMergedState)(
            controlledHighlightKeySetRef,
            uncontrolledHighlightKeySetRef
        );
        const loadingKeysRef = (0, vue_1.ref)(/* @__PURE__ */ new Set());
        const expandedNonLoadingKeysRef = (0, vue_1.computed)(() => {
            return mergedExpandedKeysRef.value.filter(
                (key) => !loadingKeysRef.value.has(key)
            );
        });
        let dragStartX = 0;
        const draggingNodeRef = (0, vue_1.ref)(null);
        const droppingNodeRef = (0, vue_1.ref)(null);
        const droppingMouseNodeRef = (0, vue_1.ref)(null);
        const droppingPositionRef = (0, vue_1.ref)(null);
        const droppingOffsetLevelRef = (0, vue_1.ref)(0);
        const droppingNodeParentRef = (0, vue_1.computed)(() => {
            const { value: droppingNode } = droppingNodeRef;
            if (!droppingNode) return null;
            return droppingNode.parent;
        });
        (0, vue_1.watch)(
            (0, vue_1.toRef)(props, 'data'),
            () => {
                loadingKeysRef.value.clear();
                pendingNodeKeyRef.value = null;
                resetDndState();
            },
            {
                deep: false,
            }
        );
        let expandAnimationDisabled = false;
        const disableExpandAnimationForOneTick = () => {
            expandAnimationDisabled = true;
            void (0, vue_1.nextTick)(() => {
                expandAnimationDisabled = false;
            });
        };
        let memoizedExpandedKeys;
        (0, vue_1.watch)(
            (0, vue_1.toRef)(props, 'pattern'),
            (value, oldValue) => {
                if (props.showIrrelevantNodes) {
                    memoizedExpandedKeys = void 0;
                    if (value) {
                        const {
                            expandedKeys: expandedKeysAfterChange,
                            highlightKeySet,
                        } = (0, utils_1.keysWithFilter)(
                            props.data,
                            props.pattern,
                            props.keyField,
                            props.childrenField,
                            mergedFilterRef.value
                        );
                        uncontrolledHighlightKeySetRef.value = highlightKeySet;
                        disableExpandAnimationForOneTick();
                        doUpdateExpandedKeys(
                            expandedKeysAfterChange,
                            getOptionsByKeys(expandedKeysAfterChange),
                            { node: null, action: 'filter' }
                        );
                    } else {
                        uncontrolledHighlightKeySetRef.value =
                            /* @__PURE__ */ new Set();
                    }
                } else {
                    if (!value.length) {
                        if (memoizedExpandedKeys !== void 0) {
                            disableExpandAnimationForOneTick();
                            doUpdateExpandedKeys(
                                memoizedExpandedKeys,
                                getOptionsByKeys(memoizedExpandedKeys),
                                { node: null, action: 'filter' }
                            );
                        }
                    } else {
                        if (!oldValue.length) {
                            memoizedExpandedKeys = mergedExpandedKeysRef.value;
                        }
                        const { expandedKeys } = filteredTreeInfoRef.value;
                        if (expandedKeys !== void 0) {
                            disableExpandAnimationForOneTick();
                            doUpdateExpandedKeys(
                                expandedKeys,
                                getOptionsByKeys(expandedKeys),
                                {
                                    node: null,
                                    action: 'filter',
                                }
                            );
                        }
                    }
                }
            }
        );
        function triggerLoading(node) {
            return __awaiter(this, void 0, void 0, function* () {
                const { onLoad } = props;
                if (!onLoad) {
                    if (process.env.NODE_ENV !== 'production') {
                        (0, _utils_1.warn)(
                            'tree',
                            'There is unloaded node in data but props.onLoad is not specified.'
                        );
                    }
                    return yield Promise.resolve();
                }
                const { value: loadingKeys } = loadingKeysRef;
                if (!loadingKeys.has(node.key)) {
                    loadingKeys.add(node.key);
                    try {
                        const loadResult = yield onLoad(node.rawNode);
                        if (loadResult === false) {
                            resetDragExpandState();
                        }
                    } catch (loadError) {
                        console.error(loadError);
                        resetDragExpandState();
                    }
                    loadingKeys.delete(node.key);
                }
            });
        }
        (0, vue_1.watchEffect)(() => {
            var _a;
            const { value: displayTreeMate } = displayTreeMateRef;
            if (!displayTreeMate) return;
            const { getNode } = displayTreeMate;
            (_a = mergedExpandedKeysRef.value) === null || _a === void 0
                ? void 0
                : _a.forEach((key) => {
                      const node = getNode(key);
                      if (node && !node.shallowLoaded) {
                          void triggerLoading(node);
                      }
                  });
        });
        const aipRef = (0, vue_1.ref)(false);
        const afNodesRef = (0, vue_1.ref)([]);
        (0, vue_1.watch)(expandedNonLoadingKeysRef, (value, prevValue) => {
            if (!props.animated || expandAnimationDisabled) {
                void (0, vue_1.nextTick)(syncScrollbar);
                return;
            }
            const prevVSet = new Set(prevValue);
            let addedKey = null;
            let removedKey = null;
            for (const expandedKey of value) {
                if (!prevVSet.has(expandedKey)) {
                    if (addedKey !== null) return;
                    addedKey = expandedKey;
                }
            }
            const currentVSet = new Set(value);
            for (const expandedKey of prevValue) {
                if (!currentVSet.has(expandedKey)) {
                    if (removedKey !== null) return;
                    removedKey = expandedKey;
                }
            }
            if (addedKey === null && removedKey === null) {
                return;
            }
            const { virtualScroll } = props;
            const viewportHeight = (
                virtualScroll
                    ? virtualListInstRef.value.listElRef
                    : selfElRef.value
            ).offsetHeight;
            const viewportItemCount = Math.ceil(viewportHeight / ITEM_SIZE) + 1;
            let baseExpandedKeys;
            if (addedKey !== null) {
                baseExpandedKeys = prevValue;
            }
            if (removedKey !== null) {
                if (baseExpandedKeys === void 0) {
                    baseExpandedKeys = value;
                } else {
                    baseExpandedKeys = baseExpandedKeys.filter(
                        (key) => key !== removedKey
                    );
                }
            }
            aipRef.value = true;
            afNodesRef.value =
                displayTreeMateRef.value.getFlattenedNodes(baseExpandedKeys);
            if (addedKey !== null) {
                const expandedNodeIndex = afNodesRef.value.findIndex(
                    (node) => node.key === addedKey
                );
                if (~expandedNodeIndex) {
                    const children =
                        afNodesRef.value[expandedNodeIndex].children;
                    if (children) {
                        const expandedChildren = (0, treemate_1.flatten)(
                            children,
                            value
                        );
                        afNodesRef.value.splice(expandedNodeIndex + 1, 0, {
                            __motion: true,
                            mode: 'expand',
                            height: virtualScroll
                                ? expandedChildren.length * ITEM_SIZE
                                : void 0,
                            nodes: virtualScroll
                                ? expandedChildren.slice(0, viewportItemCount)
                                : expandedChildren,
                        });
                    }
                }
            }
            if (removedKey !== null) {
                const collapsedNodeIndex = afNodesRef.value.findIndex(
                    (node) => node.key === removedKey
                );
                if (~collapsedNodeIndex) {
                    const collapsedNodeChildren =
                        afNodesRef.value[collapsedNodeIndex].children;
                    if (!collapsedNodeChildren) return;
                    aipRef.value = true;
                    const collapsedChildren = (0, treemate_1.flatten)(
                        collapsedNodeChildren,
                        value
                    );
                    afNodesRef.value.splice(collapsedNodeIndex + 1, 0, {
                        __motion: true,
                        mode: 'collapse',
                        height: virtualScroll
                            ? collapsedChildren.length * ITEM_SIZE
                            : void 0,
                        nodes: virtualScroll
                            ? collapsedChildren.slice(0, viewportItemCount)
                            : collapsedChildren,
                    });
                }
            }
        });
        const getFIndexRef = (0, vue_1.computed)(() => {
            return (0, treemate_1.createIndexGetter)(fNodesRef.value);
        });
        const mergedFNodesRef = (0, vue_1.computed)(() => {
            if (aipRef.value) return afNodesRef.value;
            else return fNodesRef.value;
        });
        function syncScrollbar() {
            const { value: scrollbarInst } = scrollbarInstRef;
            if (scrollbarInst) scrollbarInst.sync();
        }
        function handleAfterEnter() {
            aipRef.value = false;
            if (props.virtualScroll) {
                void (0, vue_1.nextTick)(syncScrollbar);
            }
        }
        function getOptionsByKeys(keys) {
            const { getNode } = dataTreeMateRef.value;
            return keys.map((key) => {
                var _a;
                return (
                    ((_a = getNode(key)) === null || _a === void 0
                        ? void 0
                        : _a.rawNode) || null
                );
            });
        }
        function doUpdateExpandedKeys(value, option, meta) {
            const {
                'onUpdate:expandedKeys': _onUpdateExpandedKeys,
                onUpdateExpandedKeys,
            } = props;
            uncontrolledExpandedKeysRef.value = value;
            if (_onUpdateExpandedKeys) {
                (0, _utils_1.call)(_onUpdateExpandedKeys, value, option, meta);
            }
            if (onUpdateExpandedKeys) {
                (0, _utils_1.call)(onUpdateExpandedKeys, value, option, meta);
            }
        }
        function doUpdateCheckedKeys(value, option, meta) {
            const {
                'onUpdate:checkedKeys': _onUpdateCheckedKeys,
                onUpdateCheckedKeys,
            } = props;
            uncontrolledCheckedKeysRef.value = value;
            if (onUpdateCheckedKeys) {
                (0, _utils_1.call)(onUpdateCheckedKeys, value, option, meta);
            }
            if (_onUpdateCheckedKeys) {
                (0, _utils_1.call)(_onUpdateCheckedKeys, value, option, meta);
            }
        }
        function doUpdateIndeterminateKeys(value, option) {
            const {
                'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys,
                onUpdateIndeterminateKeys,
            } = props;
            if (_onUpdateIndeterminateKeys) {
                (0, _utils_1.call)(_onUpdateIndeterminateKeys, value, option);
            }
            if (onUpdateIndeterminateKeys) {
                (0, _utils_1.call)(onUpdateIndeterminateKeys, value, option);
            }
        }
        function doUpdateSelectedKeys(value, option, meta) {
            const {
                'onUpdate:selectedKeys': _onUpdateSelectedKeys,
                onUpdateSelectedKeys,
            } = props;
            uncontrolledSelectedKeysRef.value = value;
            if (onUpdateSelectedKeys) {
                (0, _utils_1.call)(onUpdateSelectedKeys, value, option, meta);
            }
            if (_onUpdateSelectedKeys) {
                (0, _utils_1.call)(_onUpdateSelectedKeys, value, option, meta);
            }
        }
        function doDragEnter(info) {
            const { onDragenter } = props;
            if (onDragenter) (0, _utils_1.call)(onDragenter, info);
        }
        function doDragLeave(info) {
            const { onDragleave } = props;
            if (onDragleave) (0, _utils_1.call)(onDragleave, info);
        }
        function doDragEnd(info) {
            const { onDragend } = props;
            if (onDragend) (0, _utils_1.call)(onDragend, info);
        }
        function doDragStart(info) {
            const { onDragstart } = props;
            if (onDragstart) (0, _utils_1.call)(onDragstart, info);
        }
        function doDragOver(info) {
            const { onDragover } = props;
            if (onDragover) (0, _utils_1.call)(onDragover, info);
        }
        function doDrop(info) {
            const { onDrop } = props;
            if (onDrop) (0, _utils_1.call)(onDrop, info);
        }
        function resetDndState() {
            resetDragState();
            resetDropState();
        }
        function resetDragState() {
            draggingNodeRef.value = null;
        }
        function resetDropState() {
            droppingOffsetLevelRef.value = 0;
            droppingNodeRef.value = null;
            droppingMouseNodeRef.value = null;
            droppingPositionRef.value = null;
            resetDragExpandState();
        }
        function resetDragExpandState() {
            if (expandTimerId) {
                window.clearTimeout(expandTimerId);
                expandTimerId = null;
            }
            nodeKeyToBeExpanded = null;
        }
        function handleCheck(node, checked) {
            if (
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            if (props.internalUnifySelectCheck && !props.multiple) {
                handleSelect(node);
                return;
            }
            const checkedAction = checked ? 'check' : 'uncheck';
            const { checkedKeys, indeterminateKeys } = dataTreeMateRef.value[
                checkedAction
            ](node.key, displayedCheckedKeysRef.value, {
                cascade: props.cascade,
                checkStrategy: mergedCheckStrategyRef.value,
                allowNotLoaded: props.allowCheckingNotLoaded,
            });
            doUpdateCheckedKeys(checkedKeys, getOptionsByKeys(checkedKeys), {
                node: node.rawNode,
                action: checkedAction,
            });
            doUpdateIndeterminateKeys(
                indeterminateKeys,
                getOptionsByKeys(indeterminateKeys)
            );
        }
        function toggleExpand(node) {
            if (props.disabled) return;
            const { key } = node;
            const { value: mergedExpandedKeys } = mergedExpandedKeysRef;
            const index = mergedExpandedKeys.findIndex(
                (expandNodeId) => expandNodeId === key
            );
            if (~index) {
                const expandedKeysAfterChange = Array.from(mergedExpandedKeys);
                expandedKeysAfterChange.splice(index, 1);
                doUpdateExpandedKeys(
                    expandedKeysAfterChange,
                    getOptionsByKeys(expandedKeysAfterChange),
                    {
                        node: node.rawNode,
                        action: 'collapse',
                    }
                );
            } else {
                const nodeToBeExpanded = displayTreeMateRef.value.getNode(key);
                if (!nodeToBeExpanded || nodeToBeExpanded.isLeaf) {
                    return;
                }
                let nextKeys;
                if (props.accordion) {
                    const siblingKeySet = new Set(
                        node.siblings.map(({ key: key2 }) => key2)
                    );
                    nextKeys = mergedExpandedKeys.filter((expandedKey) => {
                        return !siblingKeySet.has(expandedKey);
                    });
                    nextKeys.push(key);
                } else {
                    nextKeys = mergedExpandedKeys.concat(key);
                }
                doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
                    node: node.rawNode,
                    action: 'expand',
                });
            }
        }
        function handleSwitcherClick(node) {
            if (props.disabled || aipRef.value) return;
            toggleExpand(node);
        }
        function handleSelect(node) {
            if (props.disabled || !props.selectable) {
                return;
            }
            pendingNodeKeyRef.value = node.key;
            if (props.internalUnifySelectCheck) {
                const {
                    value: { checkedKeys, indeterminateKeys },
                } = checkedStatusRef;
                if (props.multiple) {
                    handleCheck(
                        node,
                        !(
                            checkedKeys.includes(node.key) ||
                            indeterminateKeys.includes(node.key)
                        )
                    );
                } else {
                    doUpdateCheckedKeys(
                        [node.key],
                        getOptionsByKeys([node.key]),
                        {
                            node: node.rawNode,
                            action: 'check',
                        }
                    );
                }
            }
            if (props.multiple) {
                const selectedKeys = Array.from(mergedSelectedKeysRef.value);
                const index = selectedKeys.findIndex((key) => key === node.key);
                if (~index) {
                    if (props.cancelable) {
                        selectedKeys.splice(index, 1);
                    }
                } else if (!~index) {
                    selectedKeys.push(node.key);
                }
                doUpdateSelectedKeys(
                    selectedKeys,
                    getOptionsByKeys(selectedKeys),
                    {
                        node: node.rawNode,
                        action: ~index ? 'unselect' : 'select',
                    }
                );
            } else {
                const selectedKeys = mergedSelectedKeysRef.value;
                if (selectedKeys.includes(node.key)) {
                    if (props.cancelable) {
                        doUpdateSelectedKeys([], [], {
                            node: node.rawNode,
                            action: 'unselect',
                        });
                    }
                } else {
                    doUpdateSelectedKeys(
                        [node.key],
                        getOptionsByKeys([node.key]),
                        {
                            node: node.rawNode,
                            action: 'select',
                        }
                    );
                }
            }
        }
        function expandDragEnterNode(node) {
            if (expandTimerId) {
                window.clearTimeout(expandTimerId);
                expandTimerId = null;
            }
            if (node.isLeaf) return;
            nodeKeyToBeExpanded = node.key;
            const expand = () => {
                if (nodeKeyToBeExpanded !== node.key) return;
                const { value: droppingMouseNode } = droppingMouseNodeRef;
                if (
                    droppingMouseNode &&
                    droppingMouseNode.key === node.key &&
                    !mergedExpandedKeysRef.value.includes(node.key)
                ) {
                    const nextKeys = mergedExpandedKeysRef.value.concat(
                        node.key
                    );
                    doUpdateExpandedKeys(nextKeys, getOptionsByKeys(nextKeys), {
                        node: node.rawNode,
                        action: 'expand',
                    });
                }
                expandTimerId = null;
                nodeKeyToBeExpanded = null;
            };
            if (!node.shallowLoaded) {
                expandTimerId = window.setTimeout(() => {
                    void triggerLoading(node).then(() => {
                        expand();
                    });
                }, 1e3);
            } else {
                expandTimerId = window.setTimeout(() => {
                    expand();
                }, 1e3);
            }
        }
        function handleDragEnter({ event, node }) {
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            handleDragOver({ event, node }, false);
            doDragEnter({ event, node: node.rawNode });
        }
        function handleDragLeave({ event, node }) {
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            doDragLeave({ event, node: node.rawNode });
        }
        function handleDragLeaveTree(e) {
            if (e.target !== e.currentTarget) return;
            resetDropState();
        }
        function handleDragEnd({ event, node }) {
            resetDndState();
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            doDragEnd({ event, node: node.rawNode });
        }
        function handleDragStart({ event, node }) {
            var _a;
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            utils_1.emptyImage &&
                ((_a = event.dataTransfer) === null || _a === void 0
                    ? void 0
                    : _a.setDragImage(utils_1.emptyImage, 0, 0));
            dragStartX = event.clientX;
            draggingNodeRef.value = node;
            doDragStart({ event, node: node.rawNode });
        }
        function handleDragOver({ event, node }, emit = true) {
            var _a;
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            const { value: draggingNode } = draggingNodeRef;
            if (!draggingNode) return;
            const { allowDrop, indent } = props;
            if (emit) doDragOver({ event, node: node.rawNode });
            const el = event.currentTarget;
            const { height: elOffsetHeight, top: elClientTop } =
                el.getBoundingClientRect();
            const eventOffsetY = event.clientY - elClientTop;
            let mousePosition;
            const allowDropInside = allowDrop({
                node: node.rawNode,
                dropPosition: 'inside',
                phase: 'drag',
            });
            if (allowDropInside) {
                if (eventOffsetY <= 8) {
                    mousePosition = 'before';
                } else if (eventOffsetY >= elOffsetHeight - 8) {
                    mousePosition = 'after';
                } else {
                    mousePosition = 'inside';
                }
            } else {
                if (eventOffsetY <= elOffsetHeight / 2) {
                    mousePosition = 'before';
                } else {
                    mousePosition = 'after';
                }
            }
            const { value: getFindex } = getFIndexRef;
            let finalDropNode;
            let finalDropPosition;
            const hoverNodeFIndex = getFindex(node.key);
            if (hoverNodeFIndex === null) {
                resetDropState();
                return;
            }
            let mouseAtExpandedNonLeafNode = false;
            if (mousePosition === 'inside') {
                finalDropNode = node;
                finalDropPosition = 'inside';
            } else {
                if (mousePosition === 'before') {
                    if (node.isFirstChild) {
                        finalDropNode = node;
                        finalDropPosition = 'before';
                    } else {
                        finalDropNode = fNodesRef.value[hoverNodeFIndex - 1];
                        finalDropPosition = 'after';
                    }
                } else {
                    finalDropNode = node;
                    finalDropPosition = 'after';
                }
            }
            if (
                !finalDropNode.isLeaf &&
                mergedExpandedKeysRef.value.includes(finalDropNode.key)
            ) {
                mouseAtExpandedNonLeafNode = true;
                if (finalDropPosition === 'after') {
                    finalDropNode = fNodesRef.value[hoverNodeFIndex + 1];
                    if (!finalDropNode) {
                        finalDropNode = node;
                        finalDropPosition = 'inside';
                    } else {
                        finalDropPosition = 'before';
                    }
                }
            }
            const droppingMouseNode = finalDropNode;
            droppingMouseNodeRef.value = droppingMouseNode;
            if (
                !mouseAtExpandedNonLeafNode &&
                draggingNode.isLastChild &&
                draggingNode.key === finalDropNode.key
            ) {
                finalDropPosition = 'after';
            }
            if (finalDropPosition === 'after') {
                let offset = dragStartX - event.clientX;
                let offsetLevel = 0;
                while (
                    offset >= indent / 2 &&
                    finalDropNode.parent !== null &&
                    finalDropNode.isLastChild &&
                    offsetLevel < 1
                ) {
                    offset -= indent;
                    offsetLevel += 1;
                    finalDropNode = finalDropNode.parent;
                }
                droppingOffsetLevelRef.value = offsetLevel;
            } else {
                droppingOffsetLevelRef.value = 0;
            }
            if (
                draggingNode.contains(finalDropNode) ||
                (finalDropPosition === 'inside' &&
                    ((_a = draggingNode.parent) === null || _a === void 0
                        ? void 0
                        : _a.key) === finalDropNode.key)
            ) {
                if (
                    draggingNode.key === droppingMouseNode.key &&
                    draggingNode.key === finalDropNode.key
                ) {
                } else {
                    resetDropState();
                    return;
                }
            }
            if (
                !allowDrop({
                    node: finalDropNode.rawNode,
                    dropPosition: finalDropPosition,
                    phase: 'drag',
                })
            ) {
                resetDropState();
                return;
            }
            if (draggingNode.key === finalDropNode.key) {
                resetDragExpandState();
            } else {
                if (nodeKeyToBeExpanded !== finalDropNode.key) {
                    if (finalDropPosition === 'inside') {
                        if (props.expandOnDragenter) {
                            expandDragEnterNode(finalDropNode);
                            if (
                                !finalDropNode.shallowLoaded &&
                                nodeKeyToBeExpanded !== finalDropNode.key
                            ) {
                                resetDndState();
                                return;
                            }
                        } else {
                            if (!finalDropNode.shallowLoaded) {
                                resetDndState();
                                return;
                            }
                        }
                    } else {
                        resetDragExpandState();
                    }
                } else {
                    if (finalDropPosition !== 'inside') {
                        resetDragExpandState();
                    }
                }
            }
            droppingPositionRef.value = finalDropPosition;
            droppingNodeRef.value = finalDropNode;
        }
        function handleDrop({ event, node, dropPosition }) {
            if (
                !props.draggable ||
                props.disabled ||
                (0, utils_1.isNodeDisabled)(node, props.disabledField)
            ) {
                return;
            }
            const { value: draggingNode } = draggingNodeRef;
            const { value: droppingNode } = droppingNodeRef;
            const { value: droppingPosition } = droppingPositionRef;
            if (!draggingNode || !droppingNode || !droppingPosition) {
                return;
            }
            if (
                !props.allowDrop({
                    node: droppingNode.rawNode,
                    dropPosition: droppingPosition,
                    phase: 'drag',
                })
            ) {
                return;
            }
            if (draggingNode.key === droppingNode.key) {
                return;
            }
            if (droppingPosition === 'before') {
                const nextNode = draggingNode.getNext({
                    includeDisabled: true,
                });
                if (nextNode) {
                    if (nextNode.key === droppingNode.key) {
                        resetDropState();
                        return;
                    }
                }
            }
            if (droppingPosition === 'after') {
                const prevNode = draggingNode.getPrev({
                    includeDisabled: true,
                });
                if (prevNode) {
                    if (prevNode.key === droppingNode.key) {
                        resetDropState();
                        return;
                    }
                }
            }
            doDrop({
                event,
                node: droppingNode.rawNode,
                dragNode: draggingNode.rawNode,
                dropPosition,
            });
            resetDndState();
        }
        function handleScroll() {
            syncScrollbar();
        }
        function handleResize() {
            syncScrollbar();
        }
        function handleFocusout(e) {
            var _a;
            if (props.virtualScroll || props.internalScrollable) {
                const { value: scrollbarInst } = scrollbarInstRef;
                if (
                    (_a =
                        scrollbarInst === null || scrollbarInst === void 0
                            ? void 0
                            : scrollbarInst.containerRef) === null ||
                    _a === void 0
                        ? void 0
                        : _a.contains(e.relatedTarget)
                ) {
                    return;
                }
                pendingNodeKeyRef.value = null;
            } else {
                const { value: selfEl } = selfElRef;
                if (
                    selfEl === null || selfEl === void 0
                        ? void 0
                        : selfEl.contains(e.relatedTarget)
                )
                    return;
                pendingNodeKeyRef.value = null;
            }
        }
        (0, vue_1.watch)(pendingNodeKeyRef, (value) => {
            var _a, _b;
            if (value === null) return;
            if (props.virtualScroll) {
                (_a = virtualListInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.scrollTo({ key: value });
            } else if (props.internalScrollable) {
                const { value: scrollbarInst } = scrollbarInstRef;
                if (scrollbarInst === null) return;
                const targetEl =
                    (_b = scrollbarInst.contentRef) === null || _b === void 0
                        ? void 0
                        : _b.querySelector(
                              `[data-key="${(0, _utils_1.createDataKey)(
                                  value
                              )}"]`
                          );
                if (!targetEl) return;
                scrollbarInst.scrollTo({
                    el: targetEl,
                });
            }
        });
        (0, vue_1.provide)(interface_2.treeInjectionKey, {
            loadingKeysRef,
            highlightKeySetRef: mergedHighlightKeySetRef,
            displayedCheckedKeysRef,
            displayedIndeterminateKeysRef,
            mergedSelectedKeysRef,
            mergedExpandedKeysRef,
            mergedThemeRef: themeRef,
            mergedCheckStrategyRef,
            nodePropsRef: (0, vue_1.toRef)(props, 'nodeProps'),
            disabledRef: (0, vue_1.toRef)(props, 'disabled'),
            checkableRef: (0, vue_1.toRef)(props, 'checkable'),
            selectableRef: (0, vue_1.toRef)(props, 'selectable'),
            expandOnClickRef: (0, vue_1.toRef)(props, 'expandOnClick'),
            onLoadRef: (0, vue_1.toRef)(props, 'onLoad'),
            draggableRef: (0, vue_1.toRef)(props, 'draggable'),
            blockLineRef: (0, vue_1.toRef)(props, 'blockLine'),
            indentRef: (0, vue_1.toRef)(props, 'indent'),
            cascadeRef: (0, vue_1.toRef)(props, 'cascade'),
            checkOnClickRef: (0, vue_1.toRef)(props, 'checkOnClick'),
            checkboxPlacementRef: props.checkboxPlacement,
            droppingMouseNodeRef,
            droppingNodeParentRef,
            draggingNodeRef,
            droppingPositionRef,
            droppingOffsetLevelRef,
            fNodesRef,
            pendingNodeKeyRef,
            disabledFieldRef: (0, vue_1.toRef)(props, 'disabledField'),
            internalScrollableRef: (0, vue_1.toRef)(
                props,
                'internalScrollable'
            ),
            internalCheckboxFocusableRef: (0, vue_1.toRef)(
                props,
                'internalCheckboxFocusable'
            ),
            internalTreeSelect: props.internalTreeSelect,
            renderLabelRef: (0, vue_1.toRef)(props, 'renderLabel'),
            renderPrefixRef: (0, vue_1.toRef)(props, 'renderPrefix'),
            renderSuffixRef: (0, vue_1.toRef)(props, 'renderSuffix'),
            renderSwitcherIconRef: (0, vue_1.toRef)(
                props,
                'renderSwitcherIcon'
            ),
            labelFieldRef: (0, vue_1.toRef)(props, 'labelField'),
            multipleRef: (0, vue_1.toRef)(props, 'multiple'),
            handleSwitcherClick,
            handleDragEnd,
            handleDragEnter,
            handleDragLeave,
            handleDragStart,
            handleDrop,
            handleDragOver,
            handleSelect,
            handleCheck,
        });
        function scrollTo(options) {
            var _a;
            (_a = virtualListInstRef.value) === null || _a === void 0
                ? void 0
                : _a.scrollTo(options);
        }
        const exposedMethods = {
            handleKeydown,
            scrollTo,
            getCheckedData: () => {
                if (!props.checkable) return { keys: [], options: [] };
                const { checkedKeys } = checkedStatusRef.value;
                return {
                    keys: checkedKeys,
                    options: getOptionsByKeys(checkedKeys),
                };
            },
            getIndeterminateData: () => {
                if (!props.checkable) return { keys: [], options: [] };
                const { indeterminateKeys } = checkedStatusRef.value;
                return {
                    keys: indeterminateKeys,
                    options: getOptionsByKeys(indeterminateKeys),
                };
            },
        };
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    fontSize,
                    nodeBorderRadius,
                    nodeColorHover,
                    nodeColorPressed,
                    nodeColorActive,
                    arrowColor,
                    loadingColor,
                    nodeTextColor,
                    nodeTextColorDisabled,
                    dropMarkColor,
                },
            } = themeRef.value;
            return {
                '--n-arrow-color': arrowColor,
                '--n-loading-color': loadingColor,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-font-size': fontSize,
                '--n-node-border-radius': nodeBorderRadius,
                '--n-node-color-active': nodeColorActive,
                '--n-node-color-hover': nodeColorHover,
                '--n-node-color-pressed': nodeColorPressed,
                '--n-node-text-color': nodeTextColor,
                '--n-node-text-color-disabled': nodeTextColorDisabled,
                '--n-drop-mark-color': dropMarkColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)('tree', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(Object.assign({}, exposedMethods), {
            mergedClsPrefix: mergedClsPrefixRef,
            mergedTheme: themeRef,
            rtlEnabled: rtlEnabledRef,
            fNodes: mergedFNodesRef,
            aip: aipRef,
            selfElRef,
            virtualListInstRef,
            scrollbarInstRef,
            handleFocusout,
            handleDragLeaveTree,
            handleScroll,
            getScrollContainer,
            getScrollContent,
            handleAfterEnter,
            handleResize,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        });
    },
    render() {
        var _a;
        const { fNodes, internalRenderEmpty } = this;
        if (!fNodes.length && internalRenderEmpty) {
            return internalRenderEmpty();
        }
        const {
            mergedClsPrefix,
            blockNode,
            blockLine,
            draggable,
            disabled,
            internalFocusable,
            checkable,
            handleKeydown,
            rtlEnabled,
            handleFocusout,
        } = this;
        const mergedFocusable = internalFocusable && !disabled;
        const tabindex = mergedFocusable ? '0' : void 0;
        const treeClass = [
            `${mergedClsPrefix}-tree`,
            rtlEnabled && `${mergedClsPrefix}-tree--rtl`,
            checkable && `${mergedClsPrefix}-tree--checkable`,
            (blockLine || blockNode) && `${mergedClsPrefix}-tree--block-node`,
            blockLine && `${mergedClsPrefix}-tree--block-line`,
        ];
        const createNode = (tmNode) => {
            return '__motion' in tmNode
                ? (0, vue_1.h)(MotionWrapper_1.default, {
                      height: tmNode.height,
                      nodes: tmNode.nodes,
                      clsPrefix: mergedClsPrefix,
                      mode: tmNode.mode,
                      onAfterEnter: this.handleAfterEnter,
                  })
                : (0, vue_1.h)(
                      TreeNode_1.default,
                      { key: tmNode.key, tmNode, clsPrefix: mergedClsPrefix },
                      { prefix: this.$slots.prefix, suffix: this.$slots.suffix }
                  );
        };
        if (this.virtualScroll) {
            const { mergedTheme, internalScrollablePadding } = this;
            const padding = (0, seemly_1.getPadding)(
                internalScrollablePadding || '0'
            );
            return (0, vue_1.h)(
                _internal_1.NxScrollbar,
                {
                    ref: 'scrollbarInstRef',
                    onDragleave: draggable ? this.handleDragLeaveTree : void 0,
                    container: this.getScrollContainer,
                    content: this.getScrollContent,
                    class: treeClass,
                    theme: mergedTheme.peers.Scrollbar,
                    themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                    tabindex,
                    onKeydown: mergedFocusable ? handleKeydown : void 0,
                    onFocusout: mergedFocusable ? handleFocusout : void 0,
                },
                {
                    default: () => {
                        var _a2;
                        (_a2 = this.onRender) === null || _a2 === void 0
                            ? void 0
                            : _a2.call(this);
                        return (0, vue_1.h)(
                            vueuc_1.VVirtualList,
                            {
                                ref: 'virtualListInstRef',
                                items: this.fNodes,
                                itemSize: ITEM_SIZE,
                                ignoreItemResize: this.aip,
                                paddingTop: padding.top,
                                paddingBottom: padding.bottom,
                                class: this.themeClass,
                                style: [
                                    this.cssVars,
                                    {
                                        paddingLeft: padding.left,
                                        paddingRight: padding.right,
                                    },
                                ],
                                onScroll: this.handleScroll,
                                onResize: this.handleResize,
                                showScrollbar: false,
                                itemResizable: true,
                            },
                            {
                                default: ({ item }) => createNode(item),
                            }
                        );
                    },
                }
            );
        }
        const { internalScrollable } = this;
        treeClass.push(this.themeClass);
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        if (internalScrollable) {
            return (0, vue_1.h)(
                _internal_1.NxScrollbar,
                {
                    class: treeClass,
                    tabindex,
                    onKeydown: mergedFocusable ? handleKeydown : void 0,
                    onFocusout: mergedFocusable ? handleFocusout : void 0,
                    style: this.cssVars,
                    contentStyle: { padding: this.internalScrollablePadding },
                },
                {
                    default: () =>
                        (0, vue_1.h)(
                            'div',
                            {
                                onDragleave: draggable
                                    ? this.handleDragLeaveTree
                                    : void 0,
                                ref: 'selfElRef',
                            },
                            this.fNodes.map(createNode)
                        ),
                }
            );
        } else {
            return (0, vue_1.h)(
                'div',
                {
                    class: treeClass,
                    tabindex,
                    ref: 'selfElRef',
                    style: this.cssVars,
                    onKeydown: mergedFocusable ? handleKeydown : void 0,
                    onFocusout: mergedFocusable ? handleFocusout : void 0,
                    onDragleave: draggable ? this.handleDragLeaveTree : void 0,
                },
                !fNodes.length
                    ? (0, _utils_1.resolveSlot)(this.$slots.empty, () => [
                          (0, vue_1.h)(empty_1.NEmpty, {
                              class: `${mergedClsPrefix}-tree__empty`,
                              theme: this.mergedTheme.peers.Empty,
                              themeOverrides:
                                  this.mergedTheme.peerOverrides.Empty,
                          }),
                      ])
                    : fNodes.map(createNode)
            );
        }
    },
});
