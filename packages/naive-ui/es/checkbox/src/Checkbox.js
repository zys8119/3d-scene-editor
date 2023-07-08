import {
    h,
    defineComponent,
    computed,
    inject,
    ref,
    toRef,
    watchEffect,
} from 'vue';
import { useMergedState, useMemo } from 'vooks';
import { createId } from 'seemly';
import { on } from 'evtd';
import { useConfig, useFormItem, useTheme, useThemeClass } from '../../_mixins';
import { NIconSwitchTransition } from '../../_internal';
import { call, createKey, warnOnce } from '../../_utils';
import { checkboxLight } from '../styles';
import CheckMark from './CheckMark';
import LineMark from './LineMark';
import { checkboxGroupInjectionKey } from './CheckboxGroup';
import style from './styles/index.cssr';
import { useRtl } from '../../_mixins/use-rtl';
export const checkboxProps = Object.assign(Object.assign({}, useTheme.props), {
    size: String,
    checked: {
        type: [Boolean, String, Number],
        default: void 0,
    },
    defaultChecked: {
        type: [Boolean, String, Number],
        default: false,
    },
    value: [String, Number],
    disabled: {
        type: Boolean,
        default: void 0,
    },
    indeterminate: Boolean,
    label: String,
    focusable: {
        type: Boolean,
        default: true,
    },
    checkedValue: {
        type: [Boolean, String, Number],
        default: true,
    },
    uncheckedValue: {
        type: [Boolean, String, Number],
        default: false,
    },
    'onUpdate:checked': [Function, Array],
    onUpdateChecked: [Function, Array],
    privateInsideTable: Boolean,
    onChange: [Function, Array],
});
export default defineComponent({
    name: 'Checkbox',
    props: checkboxProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onChange) {
                    warnOnce(
                        'checkbox',
                        '`on-change` is deprecated, please use `on-update:checked` instead.'
                    );
                }
            });
        }
        const selfRef = ref(null);
        const { mergedClsPrefixRef, inlineThemeDisabled, mergedRtlRef } =
            useConfig(props);
        const formItem = useFormItem(props, {
            mergedSize(NFormItem) {
                const { size } = props;
                if (size !== void 0) return size;
                if (NCheckboxGroup) {
                    const { value: mergedSize } = NCheckboxGroup.mergedSizeRef;
                    if (mergedSize !== void 0) {
                        return mergedSize;
                    }
                }
                if (NFormItem) {
                    const { mergedSize } = NFormItem;
                    if (mergedSize !== void 0) return mergedSize.value;
                }
                return 'medium';
            },
            mergedDisabled(NFormItem) {
                const { disabled } = props;
                if (disabled !== void 0) return disabled;
                if (NCheckboxGroup) {
                    if (NCheckboxGroup.disabledRef.value) return true;
                    const {
                        maxRef: { value: max },
                        checkedCountRef,
                    } = NCheckboxGroup;
                    if (
                        max !== void 0 &&
                        checkedCountRef.value >= max &&
                        !renderedCheckedRef.value
                    ) {
                        return true;
                    }
                    const {
                        minRef: { value: min },
                    } = NCheckboxGroup;
                    if (
                        min !== void 0 &&
                        checkedCountRef.value <= min &&
                        renderedCheckedRef.value
                    ) {
                        return true;
                    }
                }
                if (NFormItem) {
                    return NFormItem.disabled.value;
                }
                return false;
            },
        });
        const { mergedDisabledRef, mergedSizeRef } = formItem;
        const NCheckboxGroup = inject(checkboxGroupInjectionKey, null);
        const uncontrolledCheckedRef = ref(props.defaultChecked);
        const controlledCheckedRef = toRef(props, 'checked');
        const mergedCheckedRef = useMergedState(
            controlledCheckedRef,
            uncontrolledCheckedRef
        );
        const renderedCheckedRef = useMemo(() => {
            if (NCheckboxGroup) {
                const groupValueSet = NCheckboxGroup.valueSetRef.value;
                if (groupValueSet && props.value !== void 0) {
                    return groupValueSet.has(props.value);
                }
                return false;
            } else {
                return mergedCheckedRef.value === props.checkedValue;
            }
        });
        const themeRef = useTheme(
            'Checkbox',
            '-checkbox',
            style,
            checkboxLight,
            props,
            mergedClsPrefixRef
        );
        function toggle(e) {
            if (NCheckboxGroup && props.value !== void 0) {
                NCheckboxGroup.toggleCheckbox(
                    !renderedCheckedRef.value,
                    props.value
                );
            } else {
                const {
                    onChange,
                    'onUpdate:checked': _onUpdateCheck,
                    onUpdateChecked,
                } = props;
                const { nTriggerFormInput, nTriggerFormChange } = formItem;
                const nextChecked = renderedCheckedRef.value
                    ? props.uncheckedValue
                    : props.checkedValue;
                if (_onUpdateCheck) {
                    call(_onUpdateCheck, nextChecked, e);
                }
                if (onUpdateChecked) {
                    call(onUpdateChecked, nextChecked, e);
                }
                if (onChange) call(onChange, nextChecked, e);
                nTriggerFormInput();
                nTriggerFormChange();
                uncontrolledCheckedRef.value = nextChecked;
            }
        }
        function handleClick(e) {
            if (!mergedDisabledRef.value) {
                toggle(e);
            }
        }
        function handleKeyUp(e) {
            if (mergedDisabledRef.value) return;
            switch (e.key) {
                case ' ':
                case 'Enter':
                    toggle(e);
            }
        }
        function handleKeyDown(e) {
            switch (e.key) {
                case ' ':
                    e.preventDefault();
            }
        }
        const exposedMethods = {
            focus: () => {
                var _a;
                (_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            },
            blur: () => {
                var _a;
                (_a = selfRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
            },
        };
        const rtlEnabledRef = useRtl(
            'Checkbox',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { value: mergedSize } = mergedSizeRef;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    borderRadius,
                    color,
                    colorChecked,
                    colorDisabled,
                    colorTableHeader,
                    colorTableHeaderModal,
                    colorTableHeaderPopover,
                    checkMarkColor,
                    checkMarkColorDisabled,
                    border,
                    borderFocus,
                    borderDisabled,
                    borderChecked,
                    boxShadowFocus,
                    textColor,
                    textColorDisabled,
                    checkMarkColorDisabledChecked,
                    colorDisabledChecked,
                    borderDisabledChecked,
                    labelPadding,
                    labelLineHeight,
                    labelFontWeight,
                    [createKey('fontSize', mergedSize)]: fontSize,
                    [createKey('size', mergedSize)]: size,
                },
            } = themeRef.value;
            return {
                '--n-label-line-height': labelLineHeight,
                '--n-label-font-weight': labelFontWeight,
                '--n-size': size,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-border': border,
                '--n-border-checked': borderChecked,
                '--n-border-focus': borderFocus,
                '--n-border-disabled': borderDisabled,
                '--n-border-disabled-checked': borderDisabledChecked,
                '--n-box-shadow-focus': boxShadowFocus,
                '--n-color': color,
                '--n-color-checked': colorChecked,
                '--n-color-table': colorTableHeader,
                '--n-color-table-modal': colorTableHeaderModal,
                '--n-color-table-popover': colorTableHeaderPopover,
                '--n-color-disabled': colorDisabled,
                '--n-color-disabled-checked': colorDisabledChecked,
                '--n-text-color': textColor,
                '--n-text-color-disabled': textColorDisabled,
                '--n-check-mark-color': checkMarkColor,
                '--n-check-mark-color-disabled': checkMarkColorDisabled,
                '--n-check-mark-color-disabled-checked':
                    checkMarkColorDisabledChecked,
                '--n-font-size': fontSize,
                '--n-label-padding': labelPadding,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'checkbox',
                  computed(() => mergedSizeRef.value[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        return Object.assign(formItem, exposedMethods, {
            rtlEnabled: rtlEnabledRef,
            selfRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedDisabled: mergedDisabledRef,
            renderedChecked: renderedCheckedRef,
            mergedTheme: themeRef,
            labelId: createId(),
            handleClick,
            handleKeyUp,
            handleKeyDown,
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
        const {
            $slots,
            renderedChecked,
            mergedDisabled,
            indeterminate,
            privateInsideTable,
            cssVars,
            labelId,
            label,
            mergedClsPrefix,
            focusable,
            handleKeyUp,
            handleKeyDown,
            handleClick,
        } = this;
        (_a = this.onRender) === null || _a === void 0 ? void 0 : _a.call(this);
        return h(
            'div',
            {
                ref: 'selfRef',
                class: [
                    `${mergedClsPrefix}-checkbox`,
                    this.themeClass,
                    this.rtlEnabled && `${mergedClsPrefix}-checkbox--rtl`,
                    renderedChecked && `${mergedClsPrefix}-checkbox--checked`,
                    mergedDisabled && `${mergedClsPrefix}-checkbox--disabled`,
                    indeterminate &&
                        `${mergedClsPrefix}-checkbox--indeterminate`,
                    privateInsideTable &&
                        `${mergedClsPrefix}-checkbox--inside-table`,
                ],
                tabindex: mergedDisabled || !focusable ? void 0 : 0,
                role: 'checkbox',
                'aria-checked': indeterminate ? 'mixed' : renderedChecked,
                'aria-labelledby': labelId,
                style: cssVars,
                onKeyup: handleKeyUp,
                onKeydown: handleKeyDown,
                onClick: handleClick,
                onMousedown: () => {
                    on(
                        'selectstart',
                        window,
                        (e) => {
                            e.preventDefault();
                        },
                        {
                            once: true,
                        }
                    );
                },
            },
            h(
                'div',
                { class: `${mergedClsPrefix}-checkbox-box-wrapper` },
                '\xA0',
                h(
                    'div',
                    { class: `${mergedClsPrefix}-checkbox-box` },
                    h(NIconSwitchTransition, null, {
                        default: () =>
                            this.indeterminate
                                ? h(
                                      'div',
                                      {
                                          key: 'indeterminate',
                                          class: `${mergedClsPrefix}-checkbox-icon`,
                                      },
                                      LineMark
                                  )
                                : h(
                                      'div',
                                      {
                                          key: 'check',
                                          class: `${mergedClsPrefix}-checkbox-icon`,
                                      },
                                      CheckMark
                                  ),
                    }),
                    h('div', {
                        class: `${mergedClsPrefix}-checkbox-box__border`,
                    })
                )
            ),
            label !== null || $slots.default
                ? h(
                      'span',
                      {
                          class: `${mergedClsPrefix}-checkbox__label`,
                          id: labelId,
                      },
                      $slots.default ? $slots.default() : label
                  )
                : null
        );
    },
});
