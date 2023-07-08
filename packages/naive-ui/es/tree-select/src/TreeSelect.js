import {
    h,
    defineComponent,
    ref,
    toRef,
    Transition,
    withDirectives,
    computed,
    provide,
    watchEffect,
} from 'vue';
import { VBinder, VFollower, VTarget } from 'vueuc';
import { useIsMounted, useMergedState } from 'vooks';
import { clickoutside } from 'vdirs';
import { createTreeMate } from 'treemate';
import { getPreciseEventTarget, happensIn } from 'seemly';
import { createTreeMateOptions, treeSharedProps } from '../../tree/src/Tree';
import { NInternalSelection, NBaseFocusDetector } from '../../_internal';
import { NTree } from '../../tree';
import { NEmpty } from '../../empty';
import {
    useConfig,
    useFormItem,
    useLocale,
    useTheme,
    useThemeClass,
} from '../../_mixins';
import {
    call,
    markEventEffectPerformed,
    resolveSlot,
    resolveWrappedSlot,
    useAdjustedTo,
    useOnResize,
    warnOnce,
} from '../../_utils';
import { treeSelectLight } from '../styles';
import { treeSelectInjectionKey } from './interface';
import {
    treeOption2SelectOption,
    treeOption2SelectOptionWithPath,
} from './utils';
import style from './styles/index.cssr';
import { useMergedCheckStrategy } from '../../tree/src/utils';
export const treeSelectProps = Object.assign(
    Object.assign(
        Object.assign(Object.assign({}, useTheme.props), {
            bordered: {
                type: Boolean,
                default: true,
            },
            cascade: Boolean,
            checkable: Boolean,
            clearable: Boolean,
            clearFilterAfterSelect: {
                type: Boolean,
                default: true,
            },
            consistentMenuWidth: {
                type: Boolean,
                default: true,
            },
            defaultShow: Boolean,
            defaultValue: {
                type: [String, Number, Array],
                default: null,
            },
            disabled: {
                type: Boolean,
                default: void 0,
            },
            filterable: Boolean,
            checkStrategy: {
                type: String,
                default: 'all',
            },
            loading: Boolean,
            maxTagCount: [String, Number],
            multiple: Boolean,
            showPath: Boolean,
            separator: {
                type: String,
                default: ' / ',
            },
            options: {
                type: Array,
                default: () => [],
            },
            placeholder: String,
            placement: {
                type: String,
                default: 'bottom-start',
            },
            show: {
                type: Boolean,
                default: void 0,
            },
            size: String,
            value: [String, Number, Array],
            to: useAdjustedTo.propTo,
            menuProps: Object,
            virtualScroll: {
                type: Boolean,
                default: true,
            },
            status: String,
            renderTag: Function,
        }),
        treeSharedProps
    ),
    {
        renderLabel: Function,
        renderPrefix: Function,
        renderSuffix: Function,
        nodeProps: Function,
        onBlur: Function,
        onFocus: Function,
        onLoad: Function,
        onUpdateShow: [Function, Array],
        onUpdateValue: [Function, Array],
        'onUpdate:value': [Function, Array],
        'onUpdate:show': [Function, Array],
        leafOnly: Boolean,
    }
);
export default defineComponent({
    name: 'TreeSelect',
    props: treeSelectProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.leafOnly) {
                    warnOnce(
                        'tree-select',
                        '`leaf-only` is deprecated, please use `check-strategy="child"` instead.'
                    );
                }
            });
        }
        const followerInstRef = ref(null);
        const triggerInstRef = ref(null);
        const treeInstRef = ref(null);
        const menuElRef = ref(null);
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } =
            useConfig(props);
        const { localeRef } = useLocale('Select');
        const {
            mergedSizeRef,
            mergedDisabledRef,
            mergedStatusRef,
            nTriggerFormBlur,
            nTriggerFormChange,
            nTriggerFormFocus,
            nTriggerFormInput,
        } = useFormItem(props);
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const uncontrolledShowRef = ref(props.defaultShow);
        const controlledShowRef = toRef(props, 'show');
        const mergedShowRef = useMergedState(
            controlledShowRef,
            uncontrolledShowRef
        );
        const patternRef = ref('');
        const mergedFilterRef = computed(() => {
            const { filter } = props;
            if (filter) return filter;
            const { labelField } = props;
            return (pattern, node) => {
                if (!pattern.length) return true;
                return node[labelField]
                    .toLowerCase()
                    .includes(pattern.toLowerCase());
            };
        });
        const dataTreeMateRef = computed(() =>
            createTreeMate(
                props.options,
                createTreeMateOptions(
                    props.keyField,
                    props.childrenField,
                    props.disabledField,
                    void 0
                )
            )
        );
        const { value: initMergedValue } = mergedValueRef;
        const pendingNodeKeyRef = ref(
            props.checkable
                ? null
                : Array.isArray(initMergedValue) && initMergedValue.length
                ? initMergedValue[initMergedValue.length - 1]
                : null
        );
        const mergedCascadeRef = computed(() => {
            return props.multiple && props.cascade && props.checkable;
        });
        const uncontrolledExpandedKeysRef = ref(
            props.defaultExpandAll
                ? void 0
                : props.defaultExpandedKeys || props.expandedKeys
        );
        const controlledExpandedKeysRef = toRef(props, 'expandedKeys');
        const mergedExpandedKeysRef = useMergedState(
            controlledExpandedKeysRef,
            uncontrolledExpandedKeysRef
        );
        const focusedRef = ref(false);
        const mergedPlaceholderRef = computed(() => {
            const { placeholder } = props;
            if (placeholder !== void 0) return placeholder;
            return localeRef.value.placeholder;
        });
        const treeSelectedKeysRef = computed(() => {
            if (props.checkable) return [];
            return treeCheckedKeysRef.value;
        });
        const treeCheckedKeysRef = computed(() => {
            const { value: mergedValue } = mergedValueRef;
            if (props.multiple) {
                if (Array.isArray(mergedValue)) return mergedValue;
                else return [];
            } else {
                if (mergedValue === null || Array.isArray(mergedValue))
                    return [];
                else return [mergedValue];
            }
        });
        const selectedOptionRef = computed(() => {
            const { multiple, showPath, separator, labelField } = props;
            if (multiple) return null;
            const { value: mergedValue } = mergedValueRef;
            if (!Array.isArray(mergedValue) && mergedValue !== null) {
                const { value: treeMate } = dataTreeMateRef;
                const tmNode = treeMate.getNode(mergedValue);
                if (tmNode !== null) {
                    return showPath
                        ? treeOption2SelectOptionWithPath(
                              tmNode,
                              treeMate.getPath(mergedValue).treeNodePath,
                              separator,
                              labelField
                          )
                        : treeOption2SelectOption(tmNode, labelField);
                }
            }
            return null;
        });
        const selectedOptionsRef = computed(() => {
            const { multiple, showPath, separator } = props;
            if (!multiple) return null;
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const res = [];
                const { value: treeMate } = dataTreeMateRef;
                const { checkedKeys } = treeMate.getCheckedKeys(mergedValue, {
                    checkStrategy: props.checkStrategy,
                    cascade: mergedCascadeRef.value,
                    allowNotLoaded: props.allowCheckingNotLoaded,
                });
                const { labelField } = props;
                checkedKeys.forEach((value) => {
                    const tmNode = treeMate.getNode(value);
                    if (tmNode !== null) {
                        res.push(
                            showPath
                                ? treeOption2SelectOptionWithPath(
                                      tmNode,
                                      treeMate.getPath(value).treeNodePath,
                                      separator,
                                      labelField
                                  )
                                : treeOption2SelectOption(tmNode, labelField)
                        );
                    }
                });
                return res;
            }
            return [];
        });
        const menuPaddingRef = computed(() => {
            const {
                self: { menuPadding },
            } = themeRef.value;
            return menuPadding;
        });
        function focusSelection() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0
                ? void 0
                : _a.focus();
        }
        function focusSelectionInput() {
            var _a;
            (_a = triggerInstRef.value) === null || _a === void 0
                ? void 0
                : _a.focusInput();
        }
        function doUpdateShow(value) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow) call(onUpdateShow, value);
            if (_onUpdateShow) call(_onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        function doUpdateValue(value, option, meta) {
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue) {
                call(onUpdateValue, value, option, meta);
            }
            if (_onUpdateValue) {
                call(_onUpdateValue, value, option, meta);
            }
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function doUpdateIndeterminateKeys(value, option) {
            const {
                onUpdateIndeterminateKeys,
                'onUpdate:indeterminateKeys': _onUpdateIndeterminateKeys,
            } = props;
            if (onUpdateIndeterminateKeys) {
                call(onUpdateIndeterminateKeys, value, option);
            }
            if (_onUpdateIndeterminateKeys) {
                call(_onUpdateIndeterminateKeys, value, option);
            }
        }
        function doUpdateExpandedKeys(keys, option, meta) {
            const {
                onUpdateExpandedKeys,
                'onUpdate:expandedKeys': _onUpdateExpandedKeys,
            } = props;
            if (onUpdateExpandedKeys) {
                call(onUpdateExpandedKeys, keys, option, meta);
            }
            if (_onUpdateExpandedKeys) {
                call(_onUpdateExpandedKeys, keys, option, meta);
            }
            uncontrolledExpandedKeysRef.value = keys;
        }
        function doFocus(e) {
            const { onFocus } = props;
            if (onFocus) onFocus(e);
            nTriggerFormFocus();
        }
        function doBlur(e) {
            closeMenu();
            const { onBlur } = props;
            if (onBlur) onBlur(e);
            nTriggerFormBlur();
        }
        function closeMenu() {
            doUpdateShow(false);
        }
        function openMenu() {
            if (!mergedDisabledRef.value) {
                patternRef.value = '';
                doUpdateShow(true);
                if (props.filterable) {
                    focusSelectionInput();
                }
            }
        }
        function handleMenuLeave() {
            patternRef.value = '';
        }
        function handleMenuClickoutside(e) {
            var _a;
            if (mergedShowRef.value) {
                if (
                    !((_a = triggerInstRef.value) === null || _a === void 0
                        ? void 0
                        : _a.$el.contains(getPreciseEventTarget(e)))
                ) {
                    closeMenu();
                }
            }
        }
        function handleTriggerClick() {
            if (mergedDisabledRef.value) return;
            if (!mergedShowRef.value) {
                openMenu();
            } else {
                if (!props.filterable) {
                    closeMenu();
                }
            }
        }
        function getOptionsByKeys(keys) {
            const {
                value: { getNode },
            } = dataTreeMateRef;
            return keys.map((key) => {
                var _a;
                return (
                    ((_a = getNode(key)) === null || _a === void 0
                        ? void 0
                        : _a.rawNode) || null
                );
            });
        }
        function handleUpdateCheckedKeys(keys, _, meta) {
            const options = getOptionsByKeys(keys);
            const action = meta.action === 'check' ? 'select' : 'unselect';
            const node = meta.node;
            if (props.multiple) {
                doUpdateValue(keys, options, { node, action });
                if (props.filterable) {
                    focusSelectionInput();
                    if (props.clearFilterAfterSelect) patternRef.value = '';
                }
            } else {
                keys.length
                    ? doUpdateValue(keys[0], options[0] || null, {
                          node,
                          action,
                      })
                    : doUpdateValue(null, null, { node, action });
                closeMenu();
                focusSelection();
            }
        }
        function handleUpdateIndeterminateKeys(keys) {
            if (props.checkable) {
                doUpdateIndeterminateKeys(keys, getOptionsByKeys(keys));
            }
        }
        function handleTriggerFocus(e) {
            var _a;
            if (
                (_a = menuElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget)
            )
                return;
            focusedRef.value = true;
            doFocus(e);
        }
        function handleTriggerBlur(e) {
            var _a;
            if (
                (_a = menuElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget)
            )
                return;
            focusedRef.value = false;
            doBlur(e);
        }
        function handleMenuFocusin(e) {
            var _a, _b, _c;
            if (
                ((_a = menuElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget)) ||
                ((_c =
                    (_b = triggerInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.$el) === null || _c === void 0
                    ? void 0
                    : _c.contains(e.relatedTarget))
            ) {
                return;
            }
            focusedRef.value = true;
            doFocus(e);
        }
        function handleMenuFocusout(e) {
            var _a, _b, _c;
            if (
                ((_a = menuElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(e.relatedTarget)) ||
                ((_c =
                    (_b = triggerInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.$el) === null || _c === void 0
                    ? void 0
                    : _c.contains(e.relatedTarget))
            ) {
                return;
            }
            focusedRef.value = false;
            doBlur(e);
        }
        function handleClear(e) {
            e.stopPropagation();
            const { multiple } = props;
            if (!multiple && props.filterable) {
                closeMenu();
            }
            if (multiple) {
                doUpdateValue([], [], { node: null, action: 'clear' });
            } else {
                doUpdateValue(null, null, { node: null, action: 'clear' });
            }
        }
        function handleDeleteOption(option) {
            const { value: mergedValue } = mergedValueRef;
            if (Array.isArray(mergedValue)) {
                const { value: treeMate } = dataTreeMateRef;
                const { checkedKeys: checkedKeysValue } =
                    treeMate.getCheckedKeys(mergedValue, {
                        cascade: mergedCascadeRef.value,
                        allowNotLoaded: props.allowCheckingNotLoaded,
                    });
                const index = checkedKeysValue.findIndex(
                    (key) => key === option.value
                );
                if (~index) {
                    const checkedKeyToBeRemoved = checkedKeysValue[index];
                    const checkOptionToBeRemoved = getOptionsByKeys([
                        checkedKeyToBeRemoved,
                    ])[0];
                    if (props.checkable) {
                        const { checkedKeys } = treeMate.uncheck(
                            option.value,
                            checkedKeysValue,
                            {
                                checkStrategy: props.checkStrategy,
                                cascade: mergedCascadeRef.value,
                                allowNotLoaded: props.allowCheckingNotLoaded,
                            }
                        );
                        doUpdateValue(
                            checkedKeys,
                            getOptionsByKeys(checkedKeys),
                            {
                                node: checkOptionToBeRemoved,
                                action: 'delete',
                            }
                        );
                    } else {
                        const nextValue = Array.from(checkedKeysValue);
                        nextValue.splice(index, 1);
                        doUpdateValue(nextValue, getOptionsByKeys(nextValue), {
                            node: checkOptionToBeRemoved,
                            action: 'delete',
                        });
                    }
                }
            }
        }
        function handlePatternInput(e) {
            const { value } = e.target;
            patternRef.value = value;
        }
        function treeHandleKeydown(e) {
            const { value: treeInst } = treeInstRef;
            if (treeInst) {
                treeInst.handleKeydown(e);
            }
        }
        function handleKeydown(e) {
            if (e.key === 'Enter') {
                if (mergedShowRef.value) {
                    treeHandleKeydown(e);
                    if (!props.multiple) {
                        closeMenu();
                        focusSelection();
                    }
                } else {
                    openMenu();
                }
                e.preventDefault();
            } else if (e.key === 'Escape') {
                if (mergedShowRef.value) {
                    markEventEffectPerformed(e);
                    closeMenu();
                    focusSelection();
                }
            } else {
                if (mergedShowRef.value) {
                    treeHandleKeydown(e);
                } else if (e.key === 'ArrowDown') {
                    openMenu();
                }
            }
        }
        function handleTabOut() {
            closeMenu();
            focusSelection();
        }
        function handleMenuMousedown(e) {
            if (!happensIn(e, 'action')) e.preventDefault();
        }
        const selectionRenderTagRef = computed(() => {
            const { renderTag } = props;
            if (!renderTag) return void 0;
            return function selectionRenderTag({ option, handleClose }) {
                const { value } = option;
                if (value !== void 0) {
                    const treeOption = dataTreeMateRef.value.getNode(value);
                    if (treeOption) {
                        return renderTag({
                            option: treeOption.rawNode,
                            handleClose,
                        });
                    }
                }
                return value;
            };
        });
        provide(treeSelectInjectionKey, {
            pendingNodeKeyRef,
            dataTreeMate: dataTreeMateRef,
        });
        function handleTriggerOrMenuResize() {
            var _a;
            if (!mergedShowRef.value) return;
            (_a = followerInstRef.value) === null || _a === void 0
                ? void 0
                : _a.syncPosition();
        }
        useOnResize(menuElRef, handleTriggerOrMenuResize);
        const mergedCheckStrategyRef = useMergedCheckStrategy(props);
        const exposedCheckedStatusRef = computed(() => {
            if (props.checkable) {
                const mergedValue = mergedValueRef.value;
                if (props.multiple && Array.isArray(mergedValue)) {
                    return dataTreeMateRef.value.getCheckedKeys(mergedValue, {
                        cascade: props.cascade,
                        checkStrategy: mergedCheckStrategyRef.value,
                        allowNotLoaded: props.allowCheckingNotLoaded,
                    });
                } else {
                    return {
                        checkedKeys:
                            Array.isArray(mergedValue) || mergedValue === null
                                ? []
                                : [mergedValue],
                        indeterminateKeys: [],
                    };
                }
            }
            return {
                checkedKeys: [],
                indeterminateKeys: [],
            };
        });
        const exposedMethods = {
            getCheckedData: () => {
                const { checkedKeys } = exposedCheckedStatusRef.value;
                return {
                    keys: checkedKeys,
                    options: getOptionsByKeys(checkedKeys),
                };
            },
            getIndeterminateData: () => {
                const { indeterminateKeys } = exposedCheckedStatusRef.value;
                return {
                    keys: indeterminateKeys,
                    options: getOptionsByKeys(indeterminateKeys),
                };
            },
            focus: () => {
                var _a;
                return (_a = triggerInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            },
            blur: () => {
                var _a;
                return (_a = triggerInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
            },
        };
        const themeRef = useTheme(
            'TreeSelect',
            '-tree-select',
            style,
            treeSelectLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    menuBoxShadow,
                    menuBorderRadius,
                    menuColor,
                    menuHeight,
                    actionPadding,
                    actionDividerColor,
                    actionTextColor,
                },
            } = themeRef.value;
            return {
                '--n-menu-box-shadow': menuBoxShadow,
                '--n-menu-border-radius': menuBorderRadius,
                '--n-menu-color': menuColor,
                '--n-menu-height': menuHeight,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-action-padding': actionPadding,
                '--n-action-text-color': actionTextColor,
                '--n-action-divider-color': actionDividerColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('tree-select', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(Object.assign({}, exposedMethods), {
            menuElRef,
            mergedStatus: mergedStatusRef,
            triggerInstRef,
            followerInstRef,
            treeInstRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedValue: mergedValueRef,
            mergedShow: mergedShowRef,
            namespace: namespaceRef,
            adjustedTo: useAdjustedTo(props),
            isMounted: useIsMounted(),
            focused: focusedRef,
            menuPadding: menuPaddingRef,
            mergedPlaceholder: mergedPlaceholderRef,
            mergedExpandedKeys: mergedExpandedKeysRef,
            treeSelectedKeys: treeSelectedKeysRef,
            treeCheckedKeys: treeCheckedKeysRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            selectedOption: selectedOptionRef,
            selectedOptions: selectedOptionsRef,
            pattern: patternRef,
            pendingNodeKey: pendingNodeKeyRef,
            mergedCascade: mergedCascadeRef,
            mergedFilter: mergedFilterRef,
            selectionRenderTag: selectionRenderTagRef,
            handleTriggerOrMenuResize,
            doUpdateExpandedKeys,
            handleMenuLeave,
            handleTriggerClick,
            handleMenuClickoutside,
            handleUpdateCheckedKeys,
            handleUpdateIndeterminateKeys,
            handleTriggerFocus,
            handleTriggerBlur,
            handleMenuFocusin,
            handleMenuFocusout,
            handleClear,
            handleDeleteOption,
            handlePatternInput,
            handleKeydown,
            handleTabOut,
            handleMenuMousedown,
            mergedTheme: themeRef,
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
        const { mergedTheme, mergedClsPrefix, $slots } = this;
        return h(
            'div',
            { class: `${mergedClsPrefix}-tree-select` },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () =>
                            h(
                                NInternalSelection,
                                {
                                    ref: 'triggerInstRef',
                                    onResize: this.handleTriggerOrMenuResize,
                                    status: this.mergedStatus,
                                    focused: this.focused,
                                    clsPrefix: mergedClsPrefix,
                                    theme: mergedTheme.peers.InternalSelection,
                                    themeOverrides:
                                        mergedTheme.peerOverrides
                                            .InternalSelection,
                                    renderTag: this.selectionRenderTag,
                                    selectedOption: this.selectedOption,
                                    selectedOptions: this.selectedOptions,
                                    size: this.mergedSize,
                                    bordered: this.bordered,
                                    placeholder: this.mergedPlaceholder,
                                    disabled: this.mergedDisabled,
                                    active: this.mergedShow,
                                    loading: this.loading,
                                    multiple: this.multiple,
                                    maxTagCount: this.maxTagCount,
                                    showArrow: true,
                                    filterable: this.filterable,
                                    clearable: this.clearable,
                                    pattern: this.pattern,
                                    onPatternInput: this.handlePatternInput,
                                    onClear: this.handleClear,
                                    onClick: this.handleTriggerClick,
                                    onFocus: this.handleTriggerFocus,
                                    onBlur: this.handleTriggerBlur,
                                    onDeleteOption: this.handleDeleteOption,
                                    onKeydown: this.handleKeydown,
                                },
                                {
                                    arrow: () => {
                                        var _a, _b;
                                        return [
                                            (_b = (_a = this.$slots).arrow) ===
                                                null || _b === void 0
                                                ? void 0
                                                : _b.call(_a),
                                        ];
                                    },
                                }
                            ),
                    }),
                    h(
                        VFollower,
                        {
                            ref: 'followerInstRef',
                            show: this.mergedShow,
                            placement: this.placement,
                            to: this.adjustedTo,
                            teleportDisabled:
                                this.adjustedTo === useAdjustedTo.tdkey,
                            containerClass: this.namespace,
                            width: this.consistentMenuWidth ? 'target' : void 0,
                            minWidth: 'target',
                        },
                        {
                            default: () =>
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: this.isMounted,
                                        onLeave: this.handleMenuLeave,
                                    },
                                    {
                                        default: () => {
                                            var _a;
                                            if (!this.mergedShow) return null;
                                            const {
                                                mergedClsPrefix:
                                                    mergedClsPrefix2,
                                                checkable,
                                                multiple,
                                                menuProps,
                                                options,
                                            } = this;
                                            (_a = this.onRender) === null ||
                                            _a === void 0
                                                ? void 0
                                                : _a.call(this);
                                            return withDirectives(
                                                h(
                                                    'div',
                                                    Object.assign(
                                                        {},
                                                        menuProps,
                                                        {
                                                            class: [
                                                                `${mergedClsPrefix2}-tree-select-menu`,
                                                                menuProps ===
                                                                    null ||
                                                                menuProps ===
                                                                    void 0
                                                                    ? void 0
                                                                    : menuProps.class,
                                                                this.themeClass,
                                                            ],
                                                            ref: 'menuElRef',
                                                            style: [
                                                                (menuProps ===
                                                                    null ||
                                                                menuProps ===
                                                                    void 0
                                                                    ? void 0
                                                                    : menuProps.style) ||
                                                                    '',
                                                                this.cssVars,
                                                            ],
                                                            tabindex: 0,
                                                            onMousedown:
                                                                this
                                                                    .handleMenuMousedown,
                                                            onKeydown:
                                                                this
                                                                    .handleKeydown,
                                                            onFocusin:
                                                                this
                                                                    .handleMenuFocusin,
                                                            onFocusout:
                                                                this
                                                                    .handleMenuFocusout,
                                                        }
                                                    ),
                                                    h(NTree, {
                                                        ref: 'treeInstRef',
                                                        blockLine: true,
                                                        allowCheckingNotLoaded:
                                                            this
                                                                .allowCheckingNotLoaded,
                                                        showIrrelevantNodes: false,
                                                        animated: false,
                                                        pattern: this.pattern,
                                                        filter: this
                                                            .mergedFilter,
                                                        data: options,
                                                        cancelable: multiple,
                                                        labelField:
                                                            this.labelField,
                                                        keyField: this.keyField,
                                                        disabledField:
                                                            this.disabledField,
                                                        childrenField:
                                                            this.childrenField,
                                                        theme: mergedTheme.peers
                                                            .Tree,
                                                        themeOverrides:
                                                            mergedTheme
                                                                .peerOverrides
                                                                .Tree,
                                                        defaultExpandAll:
                                                            this
                                                                .defaultExpandAll,
                                                        defaultExpandedKeys:
                                                            this
                                                                .defaultExpandedKeys,
                                                        expandedKeys:
                                                            this
                                                                .mergedExpandedKeys,
                                                        checkedKeys:
                                                            this
                                                                .treeCheckedKeys,
                                                        selectedKeys:
                                                            this
                                                                .treeSelectedKeys,
                                                        checkable,
                                                        checkStrategy:
                                                            this.checkStrategy,
                                                        cascade:
                                                            this.mergedCascade,
                                                        leafOnly: this.leafOnly,
                                                        multiple: this.multiple,
                                                        renderLabel:
                                                            this.renderLabel,
                                                        renderPrefix:
                                                            this.renderPrefix,
                                                        renderSuffix:
                                                            this.renderSuffix,
                                                        renderSwitcherIcon:
                                                            this
                                                                .renderSwitcherIcon,
                                                        nodeProps:
                                                            this.nodeProps,
                                                        virtualScroll:
                                                            this
                                                                .consistentMenuWidth &&
                                                            this.virtualScroll,
                                                        internalTreeSelect: true,
                                                        internalUnifySelectCheck: true,
                                                        internalScrollable: true,
                                                        internalScrollablePadding:
                                                            this.menuPadding,
                                                        internalFocusable: false,
                                                        internalCheckboxFocusable: false,
                                                        internalRenderEmpty:
                                                            () =>
                                                                h(
                                                                    'div',
                                                                    {
                                                                        class: `${mergedClsPrefix2}-tree-select-menu__empty`,
                                                                    },
                                                                    resolveSlot(
                                                                        $slots.empty,
                                                                        () => [
                                                                            h(
                                                                                NEmpty,
                                                                                {
                                                                                    theme: mergedTheme
                                                                                        .peers
                                                                                        .Empty,
                                                                                    themeOverrides:
                                                                                        mergedTheme
                                                                                            .peerOverrides
                                                                                            .Empty,
                                                                                }
                                                                            ),
                                                                        ]
                                                                    )
                                                                ),
                                                        onLoad: this.onLoad,
                                                        onUpdateCheckedKeys:
                                                            this
                                                                .handleUpdateCheckedKeys,
                                                        onUpdateIndeterminateKeys:
                                                            this
                                                                .handleUpdateIndeterminateKeys,
                                                        onUpdateExpandedKeys:
                                                            this
                                                                .doUpdateExpandedKeys,
                                                    }),
                                                    resolveWrappedSlot(
                                                        $slots.action,
                                                        (children) => {
                                                            return children
                                                                ? h(
                                                                      'div',
                                                                      {
                                                                          class: `${mergedClsPrefix2}-tree-select-menu__action`,
                                                                          'data-action': true,
                                                                      },
                                                                      children
                                                                  )
                                                                : null;
                                                        }
                                                    ),
                                                    h(NBaseFocusDetector, {
                                                        onFocus:
                                                            this.handleTabOut,
                                                    })
                                                ),
                                                [
                                                    [
                                                        clickoutside,
                                                        this
                                                            .handleMenuClickoutside,
                                                        void 0,
                                                        { capture: true },
                                                    ],
                                                ]
                                            );
                                        },
                                    }
                                ),
                        }
                    ),
                ],
            })
        );
    },
});
