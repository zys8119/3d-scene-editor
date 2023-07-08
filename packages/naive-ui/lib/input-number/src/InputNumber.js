var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.inputNumberProps = void 0;
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const vooks_1 = require('vooks');
const evtd_1 = require('evtd');
const icons_1 = require('../../_internal/icons');
const input_1 = require('../../input');
const _internal_1 = require('../../_internal');
const button_1 = require('../../button');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const utils_1 = require('./utils');
const input_number_cssr_1 = __importDefault(
    require('./styles/input-number.cssr')
);
const use_rtl_1 = require('../../_mixins/use-rtl');
const HOLDING_CHANGE_THRESHOLD = 800;
const HOLDING_CHANGE_INTERVAL = 100;
exports.inputNumberProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        autofocus: Boolean,
        loading: {
            type: Boolean,
            default: void 0,
        },
        placeholder: String,
        defaultValue: {
            type: Number,
            default: null,
        },
        value: Number,
        step: {
            type: [Number, String],
            default: 1,
        },
        min: [Number, String],
        max: [Number, String],
        size: String,
        disabled: {
            type: Boolean,
            default: void 0,
        },
        validator: Function,
        bordered: {
            type: Boolean,
            default: void 0,
        },
        showButton: {
            type: Boolean,
            default: true,
        },
        buttonPlacement: {
            type: String,
            default: 'right',
        },
        readonly: Boolean,
        clearable: Boolean,
        keyboard: {
            type: Object,
            default: {},
        },
        updateValueOnInput: {
            type: Boolean,
            default: true,
        },
        parse: Function,
        format: Function,
        precision: Number,
        status: String,
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
        onFocus: [Function, Array],
        onBlur: [Function, Array],
        onClear: [Function, Array],
        onChange: [Function, Array],
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'InputNumber',
    props: exports.inputNumberProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.onChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'input-number',
                        '`on-change` is deprecated, please use `on-update:value` instead'
                    );
                }
            });
        }
        const { mergedBorderedRef, mergedClsPrefixRef, mergedRtlRef } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'InputNumber',
            '-input-number',
            input_number_cssr_1.default,
            styles_1.inputNumberLight,
            props,
            mergedClsPrefixRef
        );
        const { localeRef } = (0, _mixins_1.useLocale)('InputNumber');
        const formItem = (0, _mixins_1.useFormItem)(props);
        const { mergedSizeRef, mergedDisabledRef, mergedStatusRef } = formItem;
        const inputInstRef = (0, vue_1.ref)(null);
        const minusButtonInstRef = (0, vue_1.ref)(null);
        const addButtonInstRef = (0, vue_1.ref)(null);
        const uncontrolledValueRef = (0, vue_1.ref)(props.defaultValue);
        const controlledValueRef = (0, vue_1.toRef)(props, 'value');
        const mergedValueRef = (0, vooks_1.useMergedState)(
            controlledValueRef,
            uncontrolledValueRef
        );
        const displayedValueRef = (0, vue_1.ref)('');
        const getPrecision = (value) => {
            const fraction = String(value).split('.')[1];
            return fraction ? fraction.length : 0;
        };
        const getMaxPrecision = (currentValue) => {
            const precisions = [
                props.min,
                props.max,
                props.step,
                currentValue,
            ].map((value) => {
                if (value === void 0) return 0;
                return getPrecision(value);
            });
            return Math.max(...precisions);
        };
        const mergedPlaceholderRef = (0, vooks_1.useMemo)(() => {
            const { placeholder } = props;
            if (placeholder !== void 0) return placeholder;
            return localeRef.value.placeholder;
        });
        const mergedStepRef = (0, vooks_1.useMemo)(() => {
            const parsedNumber = (0, utils_1.parseNumber)(props.step);
            if (parsedNumber !== null) {
                return parsedNumber === 0 ? 1 : Math.abs(parsedNumber);
            }
            return 1;
        });
        const mergedMinRef = (0, vooks_1.useMemo)(() => {
            const parsedNumber = (0, utils_1.parseNumber)(props.min);
            if (parsedNumber !== null) return parsedNumber;
            else return null;
        });
        const mergedMaxRef = (0, vooks_1.useMemo)(() => {
            const parsedNumber = (0, utils_1.parseNumber)(props.max);
            if (parsedNumber !== null) return parsedNumber;
            else return null;
        });
        const doUpdateValue = (value) => {
            const { value: mergedValue } = mergedValueRef;
            if (value === mergedValue) {
                deriveDisplayedValueFromValue();
                return;
            }
            const {
                'onUpdate:value': _onUpdateValue,
                onUpdateValue,
                onChange,
            } = props;
            const { nTriggerFormInput, nTriggerFormChange } = formItem;
            if (onChange) (0, _utils_1.call)(onChange, value);
            if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value);
            if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value);
            uncontrolledValueRef.value = value;
            nTriggerFormInput();
            nTriggerFormChange();
        };
        const deriveValueFromDisplayedValue = ({
            offset,
            doUpdateIfValid,
            fixPrecision,
            isInputing,
        }) => {
            const { value: displayedValue } = displayedValueRef;
            if (isInputing && (0, utils_1.isWipValue)(displayedValue)) {
                return false;
            }
            const parsedValue = (props.parse || utils_1.parse)(displayedValue);
            if (parsedValue === null) {
                if (doUpdateIfValid) doUpdateValue(null);
                return null;
            }
            if ((0, utils_1.validator)(parsedValue)) {
                const currentPrecision = getPrecision(parsedValue);
                const { precision } = props;
                if (
                    precision !== void 0 &&
                    precision < currentPrecision &&
                    !fixPrecision
                ) {
                    return false;
                }
                let nextValue = parseFloat(
                    (parsedValue + offset).toFixed(
                        precision !== null && precision !== void 0
                            ? precision
                            : getMaxPrecision(parsedValue)
                    )
                );
                if ((0, utils_1.validator)(nextValue)) {
                    const { value: mergedMax } = mergedMaxRef;
                    const { value: mergedMin } = mergedMinRef;
                    if (mergedMax !== null && nextValue > mergedMax) {
                        if (!doUpdateIfValid || isInputing) return false;
                        nextValue = mergedMax;
                    }
                    if (mergedMin !== null && nextValue < mergedMin) {
                        if (!doUpdateIfValid || isInputing) return false;
                        nextValue = mergedMin;
                    }
                    if (props.validator && !props.validator(nextValue))
                        return false;
                    if (doUpdateIfValid) doUpdateValue(nextValue);
                    return nextValue;
                }
            }
            return false;
        };
        const deriveDisplayedValueFromValue = () => {
            const { value: mergedValue } = mergedValueRef;
            if ((0, utils_1.validator)(mergedValue)) {
                const { format: formatProp, precision } = props;
                if (formatProp) {
                    displayedValueRef.value = formatProp(mergedValue);
                } else {
                    if (
                        mergedValue === null ||
                        precision === void 0 ||
                        getPrecision(mergedValue) > precision
                    ) {
                        displayedValueRef.value = (0, utils_1.format)(
                            mergedValue,
                            void 0
                        );
                    } else {
                        displayedValueRef.value = (0, utils_1.format)(
                            mergedValue,
                            precision
                        );
                    }
                }
            } else {
                displayedValueRef.value = String(mergedValue);
            }
        };
        deriveDisplayedValueFromValue();
        const displayedValueInvalidRef = (0, vooks_1.useMemo)(() => {
            const derivedValue = deriveValueFromDisplayedValue({
                offset: 0,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false,
            });
            return derivedValue === false;
        });
        const minusableRef = (0, vooks_1.useMemo)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (props.validator && mergedValue === null) {
                return false;
            }
            const { value: mergedStep } = mergedStepRef;
            const derivedNextValue = deriveValueFromDisplayedValue({
                offset: -mergedStep,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false,
            });
            return derivedNextValue !== false;
        });
        const addableRef = (0, vooks_1.useMemo)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (props.validator && mergedValue === null) {
                return false;
            }
            const { value: mergedStep } = mergedStepRef;
            const derivedNextValue = deriveValueFromDisplayedValue({
                offset: +mergedStep,
                doUpdateIfValid: false,
                isInputing: false,
                fixPrecision: false,
            });
            return derivedNextValue !== false;
        });
        function doFocus(e) {
            const { onFocus } = props;
            const { nTriggerFormFocus } = formItem;
            if (onFocus) (0, _utils_1.call)(onFocus, e);
            nTriggerFormFocus();
        }
        function doBlur(e) {
            var _a, _b;
            if (
                e.target ===
                ((_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.wrapperElRef)
            ) {
                return;
            }
            const value = deriveValueFromDisplayedValue({
                offset: 0,
                doUpdateIfValid: true,
                isInputing: false,
                fixPrecision: true,
            });
            if (value !== false) {
                const inputElRef =
                    (_b = inputInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.inputElRef;
                if (inputElRef) {
                    inputElRef.value = String(value || '');
                }
                if (mergedValueRef.value === value) {
                    deriveDisplayedValueFromValue();
                }
            } else {
                deriveDisplayedValueFromValue();
            }
            const { onBlur } = props;
            const { nTriggerFormBlur } = formItem;
            if (onBlur) (0, _utils_1.call)(onBlur, e);
            nTriggerFormBlur();
            void (0, vue_1.nextTick)(() => {
                deriveDisplayedValueFromValue();
            });
        }
        function doClear(e) {
            const { onClear } = props;
            if (onClear) (0, _utils_1.call)(onClear, e);
        }
        function doAdd() {
            const { value: addable } = addableRef;
            if (!addable) {
                clearAddHoldTimeout();
                return;
            }
            const { value: mergedValue } = mergedValueRef;
            if (mergedValue === null) {
                if (!props.validator) {
                    doUpdateValue(createValidValue());
                }
            } else {
                const { value: mergedStep } = mergedStepRef;
                deriveValueFromDisplayedValue({
                    offset: mergedStep,
                    doUpdateIfValid: true,
                    isInputing: false,
                    fixPrecision: true,
                });
            }
        }
        function doMinus() {
            const { value: minusable } = minusableRef;
            if (!minusable) {
                clearMinusHoldTimeout();
                return;
            }
            const { value: mergedValue } = mergedValueRef;
            if (mergedValue === null) {
                if (!props.validator) {
                    doUpdateValue(createValidValue());
                }
            } else {
                const { value: mergedStep } = mergedStepRef;
                deriveValueFromDisplayedValue({
                    offset: -mergedStep,
                    doUpdateIfValid: true,
                    isInputing: false,
                    fixPrecision: true,
                });
            }
        }
        const handleFocus = doFocus;
        const handleBlur = doBlur;
        function createValidValue() {
            if (props.validator) return null;
            const { value: mergedMin } = mergedMinRef;
            const { value: mergedMax } = mergedMaxRef;
            if (mergedMin !== null) {
                return Math.max(0, mergedMin);
            } else if (mergedMax !== null) {
                return Math.min(0, mergedMax);
            } else {
                return 0;
            }
        }
        function handleClear(e) {
            doClear(e);
            doUpdateValue(null);
        }
        function handleMouseDown(e) {
            var _a, _b, _c;
            if (
                (_a = addButtonInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.$el.contains(e.target)
            ) {
                e.preventDefault();
            }
            if (
                (_b = minusButtonInstRef.value) === null || _b === void 0
                    ? void 0
                    : _b.$el.contains(e.target)
            ) {
                e.preventDefault();
            }
            (_c = inputInstRef.value) === null || _c === void 0
                ? void 0
                : _c.activate();
        }
        function handleWheel(e) {
            e.preventDefault();
            e.deltaY < 0 ? doAdd() : doMinus();
        }
        let minusHoldStateIntervalId = null;
        let addHoldStateIntervalId = null;
        let firstMinusMousedownId = null;
        function clearMinusHoldTimeout() {
            if (firstMinusMousedownId) {
                window.clearTimeout(firstMinusMousedownId);
                firstMinusMousedownId = null;
            }
            if (minusHoldStateIntervalId) {
                window.clearInterval(minusHoldStateIntervalId);
                minusHoldStateIntervalId = null;
            }
        }
        function clearAddHoldTimeout() {
            if (firstAddMousedownId) {
                window.clearTimeout(firstAddMousedownId);
                firstAddMousedownId = null;
            }
            if (addHoldStateIntervalId) {
                window.clearInterval(addHoldStateIntervalId);
                addHoldStateIntervalId = null;
            }
        }
        function handleMinusMousedown() {
            clearMinusHoldTimeout();
            firstMinusMousedownId = window.setTimeout(() => {
                minusHoldStateIntervalId = window.setInterval(() => {
                    doMinus();
                }, HOLDING_CHANGE_INTERVAL);
            }, HOLDING_CHANGE_THRESHOLD);
            (0, evtd_1.on)('mouseup', document, clearMinusHoldTimeout, {
                once: true,
            });
        }
        let firstAddMousedownId = null;
        function handleAddMousedown() {
            clearAddHoldTimeout();
            firstAddMousedownId = window.setTimeout(() => {
                addHoldStateIntervalId = window.setInterval(() => {
                    doAdd();
                }, HOLDING_CHANGE_INTERVAL);
            }, HOLDING_CHANGE_THRESHOLD);
            (0, evtd_1.on)('mouseup', document, clearAddHoldTimeout, {
                once: true,
            });
        }
        const handleAddClick = () => {
            if (addHoldStateIntervalId) return;
            doAdd();
        };
        const handleMinusClick = () => {
            if (minusHoldStateIntervalId) return;
            doMinus();
        };
        function handleKeyDown(e) {
            var _a, _b;
            if (e.key === 'Enter') {
                if (
                    e.target ===
                    ((_a = inputInstRef.value) === null || _a === void 0
                        ? void 0
                        : _a.wrapperElRef)
                ) {
                    return;
                }
                const value = deriveValueFromDisplayedValue({
                    offset: 0,
                    doUpdateIfValid: true,
                    isInputing: false,
                    fixPrecision: true,
                });
                if (value !== false) {
                    (_b = inputInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.deactivate();
                }
            } else if (e.key === 'ArrowUp') {
                if (!addableRef.value) return;
                if (props.keyboard.ArrowUp === false) return;
                e.preventDefault();
                const value = deriveValueFromDisplayedValue({
                    offset: 0,
                    doUpdateIfValid: true,
                    isInputing: false,
                    fixPrecision: true,
                });
                if (value !== false) {
                    doAdd();
                }
            } else if (e.key === 'ArrowDown') {
                if (!minusableRef.value) return;
                if (props.keyboard.ArrowDown === false) return;
                e.preventDefault();
                const value = deriveValueFromDisplayedValue({
                    offset: 0,
                    doUpdateIfValid: true,
                    isInputing: false,
                    fixPrecision: true,
                });
                if (value !== false) {
                    doMinus();
                }
            }
        }
        function handleUpdateDisplayedValue(value) {
            displayedValueRef.value = value;
            if (
                props.updateValueOnInput &&
                !props.format &&
                !props.parse &&
                props.precision === void 0
            ) {
                deriveValueFromDisplayedValue({
                    offset: 0,
                    doUpdateIfValid: true,
                    isInputing: true,
                    fixPrecision: false,
                });
            }
        }
        (0, vue_1.watch)(mergedValueRef, () => {
            deriveDisplayedValueFromValue();
        });
        const exposedMethods = {
            focus: () => {
                var _a;
                return (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.focus();
            },
            blur: () => {
                var _a;
                return (_a = inputInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.blur();
            },
        };
        const rtlEnabledRef = (0, use_rtl_1.useRtl)(
            'InputNumber',
            mergedRtlRef,
            mergedClsPrefixRef
        );
        return Object.assign(Object.assign({}, exposedMethods), {
            rtlEnabled: rtlEnabledRef,
            inputInstRef,
            minusButtonInstRef,
            addButtonInstRef,
            mergedClsPrefix: mergedClsPrefixRef,
            mergedBordered: mergedBorderedRef,
            uncontrolledValue: uncontrolledValueRef,
            mergedValue: mergedValueRef,
            mergedPlaceholder: mergedPlaceholderRef,
            displayedValueInvalid: displayedValueInvalidRef,
            mergedSize: mergedSizeRef,
            mergedDisabled: mergedDisabledRef,
            displayedValue: displayedValueRef,
            addable: addableRef,
            minusable: minusableRef,
            mergedStatus: mergedStatusRef,
            handleFocus,
            handleBlur,
            handleClear,
            handleMouseDown,
            handleWheel,
            handleAddClick,
            handleMinusClick,
            handleAddMousedown,
            handleMinusMousedown,
            handleKeyDown,
            handleUpdateDisplayedValue,
            mergedTheme: themeRef,
            inputThemeOverrides: {
                paddingSmall: '0 8px 0 10px',
                paddingMedium: '0 8px 0 12px',
                paddingLarge: '0 8px 0 14px',
            },
            buttonThemeOverrides: (0, vue_1.computed)(() => {
                const {
                    self: { iconColorDisabled },
                } = themeRef.value;
                const [r, g, b, a] = (0, seemly_1.rgba)(iconColorDisabled);
                return {
                    textColorTextDisabled: `rgb(${r}, ${g}, ${b})`,
                    opacityDisabled: `${a}`,
                };
            }),
        });
    },
    render() {
        const { mergedClsPrefix, $slots } = this;
        const renderMinusButton = () => {
            return (0, vue_1.h)(
                button_1.NxButton,
                {
                    text: true,
                    disabled:
                        !this.minusable || this.mergedDisabled || this.readonly,
                    focusable: false,
                    theme: this.mergedTheme.peers.Button,
                    themeOverrides: this.mergedTheme.peerOverrides.Button,
                    builtinThemeOverrides: this.buttonThemeOverrides,
                    onClick: this.handleMinusClick,
                    onMousedown: this.handleMinusMousedown,
                    ref: 'minusButtonInstRef',
                },
                {
                    icon: () =>
                        (0, _utils_1.resolveSlot)($slots['minus-icon'], () => [
                            (0, vue_1.h)(
                                _internal_1.NBaseIcon,
                                { clsPrefix: mergedClsPrefix },
                                {
                                    default: () =>
                                        (0, vue_1.h)(icons_1.RemoveIcon, null),
                                }
                            ),
                        ]),
                }
            );
        };
        const renderAddButton = () => {
            return (0, vue_1.h)(
                button_1.NxButton,
                {
                    text: true,
                    disabled:
                        !this.addable || this.mergedDisabled || this.readonly,
                    focusable: false,
                    theme: this.mergedTheme.peers.Button,
                    themeOverrides: this.mergedTheme.peerOverrides.Button,
                    builtinThemeOverrides: this.buttonThemeOverrides,
                    onClick: this.handleAddClick,
                    onMousedown: this.handleAddMousedown,
                    ref: 'addButtonInstRef',
                },
                {
                    icon: () =>
                        (0, _utils_1.resolveSlot)($slots['add-icon'], () => [
                            (0, vue_1.h)(
                                _internal_1.NBaseIcon,
                                { clsPrefix: mergedClsPrefix },
                                {
                                    default: () =>
                                        (0, vue_1.h)(icons_1.AddIcon, null),
                                }
                            ),
                        ]),
                }
            );
        };
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-input-number`,
                    this.rtlEnabled && `${mergedClsPrefix}-input-number--rtl`,
                ],
            },
            (0, vue_1.h)(
                input_1.NInput,
                {
                    ref: 'inputInstRef',
                    autofocus: this.autofocus,
                    status: this.mergedStatus,
                    bordered: this.mergedBordered,
                    loading: this.loading,
                    value: this.displayedValue,
                    onUpdateValue: this.handleUpdateDisplayedValue,
                    theme: this.mergedTheme.peers.Input,
                    themeOverrides: this.mergedTheme.peerOverrides.Input,
                    builtinThemeOverrides: this.inputThemeOverrides,
                    size: this.mergedSize,
                    placeholder: this.mergedPlaceholder,
                    disabled: this.mergedDisabled,
                    readonly: this.readonly,
                    textDecoration: this.displayedValueInvalid
                        ? 'line-through'
                        : void 0,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onKeydown: this.handleKeyDown,
                    onMousedown: this.handleMouseDown,
                    onWheel: this.handleWheel,
                    onClear: this.handleClear,
                    clearable: this.clearable,
                    internalLoadingBeforeSuffix: true,
                },
                {
                    prefix: () => {
                        var _a;
                        return this.showButton &&
                            this.buttonPlacement === 'both'
                            ? [
                                  renderMinusButton(),
                                  (0, _utils_1.resolveWrappedSlot)(
                                      $slots.prefix,
                                      (children) => {
                                          if (children) {
                                              return (0, vue_1.h)(
                                                  'span',
                                                  {
                                                      class: `${mergedClsPrefix}-input-number-prefix`,
                                                  },
                                                  children
                                              );
                                          }
                                          return null;
                                      }
                                  ),
                              ]
                            : (_a = $slots.prefix) === null || _a === void 0
                            ? void 0
                            : _a.call($slots);
                    },
                    suffix: () => {
                        var _a;
                        return this.showButton
                            ? [
                                  (0, _utils_1.resolveWrappedSlot)(
                                      $slots.suffix,
                                      (children) => {
                                          if (children) {
                                              return (0, vue_1.h)(
                                                  'span',
                                                  {
                                                      class: `${mergedClsPrefix}-input-number-suffix`,
                                                  },
                                                  children
                                              );
                                          }
                                          return null;
                                      }
                                  ),
                                  this.buttonPlacement === 'right'
                                      ? renderMinusButton()
                                      : null,
                                  renderAddButton(),
                              ]
                            : (_a = $slots.suffix) === null || _a === void 0
                            ? void 0
                            : _a.call($slots);
                    },
                }
            )
        );
    },
});
