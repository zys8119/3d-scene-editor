import {
    h,
    ref,
    toRef,
    computed,
    defineComponent,
    Transition,
    withDirectives,
    watchEffect,
} from 'vue';
import { createTreeMate } from 'treemate';
import { VBinder, VTarget, VFollower } from 'vueuc';
import { clickoutside } from 'vdirs';
import { useIsMounted, useMergedState } from 'vooks';
import { getPreciseEventTarget } from 'seemly';
import { createTmOptions } from '../../select/src/utils';
import { useFormItem, useTheme, useConfig, useThemeClass } from '../../_mixins';
import { call, useAdjustedTo, getFirstSlotVNode, warnOnce } from '../../_utils';
import { NInternalSelectMenu } from '../../_internal';
import { NInput } from '../../input';
import { autoCompleteLight } from '../styles';
import { mapAutoCompleteOptionsToSelectOptions } from './utils';
import style from './styles/index.cssr';
export const autoCompleteProps = Object.assign(
    Object.assign({}, useTheme.props),
    {
        to: useAdjustedTo.propTo,
        menuProps: Object,
        bordered: {
            type: Boolean,
            default: void 0,
        },
        clearable: {
            type: Boolean,
            default: void 0,
        },
        defaultValue: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: void 0,
        },
        disabled: {
            type: Boolean,
            default: void 0,
        },
        placeholder: String,
        placement: {
            type: String,
            default: 'bottom-start',
        },
        value: String,
        blurAfterSelect: Boolean,
        clearAfterSelect: Boolean,
        getShow: Function,
        inputProps: Object,
        renderOption: Function,
        renderLabel: Function,
        size: String,
        options: {
            type: Array,
            default: () => [],
        },
        zIndex: Number,
        status: String,
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onSelect: [Function, Array],
        onBlur: [Function, Array],
        onFocus: [Function, Array],
        onInput: [Function, Array],
    }
);
export default defineComponent({
    name: 'AutoComplete',
    props: autoCompleteProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onInput !== void 0) {
                    warnOnce(
                        'auto-complete',
                        '`on-input` is deprecated, please use `on-update:value` instead.'
                    );
                }
            });
        }
        const {
            mergedBorderedRef,
            namespaceRef,
            mergedClsPrefixRef,
            inlineThemeDisabled,
        } = useConfig(props);
        const formItem = useFormItem(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        const triggerElRef = ref(null);
        const menuInstRef = ref(null);
        const uncontrolledValueRef = ref(props.defaultValue);
        const controlledValueRef = toRef(props, 'value');
        const mergedValueRef = useMergedState(
            controlledValueRef,
            uncontrolledValueRef
        );
        const canBeActivatedRef = ref(false);
        const isComposingRef = ref(false);
        const themeRef = useTheme(
            'AutoComplete',
            '-auto-complete',
            style,
            autoCompleteLight,
            props,
            mergedClsPrefixRef
        );
        const selectOptionsRef = computed(() => {
            return mapAutoCompleteOptionsToSelectOptions(props.options);
        });
        const mergedShowOptionsRef = computed(() => {
            const { getShow } = props;
            if (getShow) {
                return getShow(mergedValueRef.value || '');
            }
            return !!mergedValueRef.value;
        });
        const activeRef = computed(() => {
            return (
                mergedShowOptionsRef.value &&
                canBeActivatedRef.value &&
                !!selectOptionsRef.value.length
            );
        });
        const treeMateRef = computed(() =>
            createTreeMate(
                selectOptionsRef.value,
                createTmOptions('value', 'children')
            )
        );
        function doUpdateValue(value) {
            const {
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
                onInput,
            } = props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onUpdateValue) call(onUpdateValue, value);
            if (_onUpdateValue) call(_onUpdateValue, value);
            if (onInput) call(onInput, value);
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function doSelect(value) {
            const { onSelect } = props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onSelect) call(onSelect, value);
            nTriggerFormInput();
            nTriggerFormChange();
        }
        function doBlur(e) {
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur) call(onBlur, e);
            nTriggerFormBlur();
        }
        function doFocus(e) {
            const { onFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus) call(onFocus, e);
            nTriggerFormFocus();
        }
        function handleCompositionStart() {
            isComposingRef.value = true;
        }
        function handleCompositionEnd() {
            window.setTimeout(() => {
                isComposingRef.value = false;
            }, 0);
        }
        function handleKeyDown(e) {
            var _a, _b, _c;
            switch (e.key) {
                case 'Enter':
                    if (!isComposingRef.value) {
                        const pendingOptionTmNode =
                            (_a = menuInstRef.value) === null || _a === void 0
                                ? void 0
                                : _a.getPendingTmNode();
                        if (pendingOptionTmNode) {
                            select(pendingOptionTmNode.rawNode);
                            e.preventDefault();
                        }
                    }
                    break;
                case 'ArrowDown':
                    (_b = menuInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.next();
                    break;
                case 'ArrowUp':
                    (_c = menuInstRef.value) === null || _c === void 0
                        ? void 0
                        : _c.prev();
                    break;
            }
        }
        function select(option) {
            if (
                (option === null || option === void 0
                    ? void 0
                    : option.value) !== void 0
            ) {
                doSelect(option.value);
                if (props.clearAfterSelect) {
                    doUpdateValue(null);
                } else if (option.label !== void 0) {
                    doUpdateValue(option.label);
                }
                canBeActivatedRef.value = false;
                if (props.blurAfterSelect) {
                    blur();
                }
            }
        }
        function handleClear() {
            doUpdateValue(null);
        }
        function handleFocus(e) {
            canBeActivatedRef.value = true;
            doFocus(e);
        }
        function handleBlur(e) {
            canBeActivatedRef.value = false;
            doBlur(e);
        }
        function handleInput(value) {
            canBeActivatedRef.value = true;
            doUpdateValue(value);
        }
        function handleToggle(option) {
            select(option.rawNode);
        }
        function handleClickOutsideMenu(e) {
            var _a;
            if (
                !((_a = triggerElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(getPreciseEventTarget(e)))
            ) {
                canBeActivatedRef.value = false;
            }
        }
        function blur() {
            var _a, _b;
            if (
                (_a = triggerElRef.value) === null || _a === void 0
                    ? void 0
                    : _a.contains(document.activeElement)
            ) {
                (_b = document.activeElement) === null || _b === void 0
                    ? void 0
                    : _b.blur();
            }
        }
        const cssVarsRef = computed(() => {
            const {
                common: { cubicBezierEaseInOut },
                self: { menuBoxShadow },
            } = themeRef.value;
            return {
                '--n-menu-box-shadow': menuBoxShadow,
                '--n-bezier': cubicBezierEaseInOut,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('auto-complete', void 0, cssVarsRef, props)
            : void 0;
        const inputInstRef = ref(null);
        const exposedMethods = {
            focus: () => {
                var _a;
                (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            },
            blur: () => {
                var _a;
                (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
            },
        };
        return {
            focus: exposedMethods.focus,
            blur: exposedMethods.blur,
            inputInstRef,
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            isMounted: useIsMounted(),
            adjustedTo: useAdjustedTo(props),
            menuInstRef,
            triggerElRef,
            treeMate: treeMateRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            active: activeRef,
            mergedStatus: mergedStatusRef,
            handleClear,
            handleFocus,
            handleBlur,
            handleInput,
            handleToggle,
            handleClickOutsideMenu,
            handleCompositionStart,
            handleCompositionEnd,
            handleKeyDown,
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
            mergedBordered: mergedBorderedRef,
            namespace: namespaceRef,
            mergedClsPrefix: mergedClsPrefixRef,
        };
    },
    render() {
        const { mergedClsPrefix } = this;
        return h(
            'div',
            {
                class: `${mergedClsPrefix}-auto-complete`,
                ref: 'triggerElRef',
                onKeydown: this.handleKeyDown,
                onCompositionstart: this.handleCompositionStart,
                onCompositionend: this.handleCompositionEnd,
            },
            h(VBinder, null, {
                default: () => [
                    h(VTarget, null, {
                        default: () => {
                            const defaultSlot = this.$slots.default;
                            if (defaultSlot) {
                                return getFirstSlotVNode(
                                    this.$slots,
                                    'default',
                                    {
                                        handleInput: this.handleInput,
                                        handleFocus: this.handleFocus,
                                        handleBlur: this.handleBlur,
                                        value: this.mergedValue,
                                    }
                                );
                            }
                            const { mergedTheme } = this;
                            return h(
                                NInput,
                                {
                                    ref: 'inputInstRef',
                                    status: this.mergedStatus,
                                    theme: mergedTheme.peers.Input,
                                    themeOverrides:
                                        mergedTheme.peerOverrides.Input,
                                    bordered: this.mergedBordered,
                                    value: this.mergedValue,
                                    placeholder: this.placeholder,
                                    size: this.mergedSize,
                                    disabled: this.mergedDisabled,
                                    clearable: this.clearable,
                                    loading: this.loading,
                                    inputProps: this.inputProps,
                                    onClear: this.handleClear,
                                    onFocus: this.handleFocus,
                                    onUpdateValue: this.handleInput,
                                    onBlur: this.handleBlur,
                                },
                                {
                                    suffix: () => {
                                        var _a, _b;
                                        return (_b = (_a = this.$slots)
                                            .suffix) === null || _b === void 0
                                            ? void 0
                                            : _b.call(_a);
                                    },
                                    prefix: () => {
                                        var _a, _b;
                                        return (_b = (_a = this.$slots)
                                            .prefix) === null || _b === void 0
                                            ? void 0
                                            : _b.call(_a);
                                    },
                                }
                            );
                        },
                    }),
                    h(
                        VFollower,
                        {
                            show: this.active,
                            to: this.adjustedTo,
                            containerClass: this.namespace,
                            zIndex: this.zIndex,
                            teleportDisabled:
                                this.adjustedTo === useAdjustedTo.tdkey,
                            placement: this.placement,
                            width: 'target',
                        },
                        {
                            default: () =>
                                h(
                                    Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: this.isMounted,
                                    },
                                    {
                                        default: () => {
                                            var _a;
                                            (_a = this.onRender) === null ||
                                            _a === void 0
                                                ? void 0
                                                : _a.call(this);
                                            if (!this.active) return null;
                                            const { menuProps } = this;
                                            return withDirectives(
                                                h(
                                                    NInternalSelectMenu,
                                                    Object.assign(
                                                        {},
                                                        menuProps,
                                                        {
                                                            clsPrefix:
                                                                mergedClsPrefix,
                                                            ref: 'menuInstRef',
                                                            theme: this
                                                                .mergedTheme
                                                                .peers
                                                                .InternalSelectMenu,
                                                            themeOverrides:
                                                                this.mergedTheme
                                                                    .peerOverrides
                                                                    .InternalSelectMenu,
                                                            'auto-pending': true,
                                                            class: [
                                                                `${mergedClsPrefix}-auto-complete-menu`,
                                                                this.themeClass,
                                                                menuProps ===
                                                                    null ||
                                                                menuProps ===
                                                                    void 0
                                                                    ? void 0
                                                                    : menuProps.class,
                                                            ],
                                                            style: [
                                                                menuProps ===
                                                                    null ||
                                                                menuProps ===
                                                                    void 0
                                                                    ? void 0
                                                                    : menuProps.style,
                                                                this.cssVars,
                                                            ],
                                                            treeMate:
                                                                this.treeMate,
                                                            multiple: false,
                                                            renderLabel:
                                                                this
                                                                    .renderLabel,
                                                            renderOption:
                                                                this
                                                                    .renderOption,
                                                            size: 'medium',
                                                            onToggle:
                                                                this
                                                                    .handleToggle,
                                                        }
                                                    )
                                                ),
                                                [
                                                    [
                                                        clickoutside,
                                                        this
                                                            .handleClickOutsideMenu,
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
