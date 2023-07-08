var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.colorPickerProps = void 0;
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const vooks_1 = require('vooks');
const vueuc_1 = require('vueuc');
const vdirs_1 = require('vdirs');
const styles_1 = require('../styles');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const button_1 = require('../../button');
const HueSlider_1 = __importDefault(require('./HueSlider'));
const AlphaSlider_1 = __importDefault(require('./AlphaSlider'));
const Pallete_1 = __importDefault(require('./Pallete'));
const ColorInput_1 = __importDefault(require('./ColorInput'));
const ColorPickerTrigger_1 = __importDefault(require('./ColorPickerTrigger'));
const utils_1 = require('./utils');
const ColorPickerSwatches_1 = __importDefault(require('./ColorPickerSwatches'));
const ColorPreview_1 = __importDefault(require('./ColorPreview'));
const context_1 = require('./context');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.colorPickerProps = Object.assign(
    Object.assign({}, _mixins_1.useTheme.props),
    {
        value: String,
        show: {
            type: Boolean,
            default: void 0,
        },
        defaultShow: Boolean,
        defaultValue: String,
        modes: {
            type: Array,
            default: () => ['rgb', 'hex', 'hsl'],
        },
        placement: {
            type: String,
            default: 'bottom-start',
        },
        to: _utils_1.useAdjustedTo.propTo,
        showAlpha: {
            type: Boolean,
            default: true,
        },
        showPreview: Boolean,
        swatches: Array,
        disabled: {
            type: Boolean,
            default: void 0,
        },
        actions: {
            type: Array,
            default: null,
        },
        internalActions: Array,
        size: String,
        renderLabel: Function,
        onComplete: Function,
        onConfirm: Function,
        'onUpdate:show': [Function, Array],
        onUpdateShow: [Function, Array],
        'onUpdate:value': [Function, Array],
        onUpdateValue: [Function, Array],
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'ColorPicker',
    props: exports.colorPickerProps,
    setup(props, { slots }) {
        const selfRef = (0, vue_1.ref)(null);
        let upcomingValue = null;
        const formItem = (0, _mixins_1.useFormItem)(props);
        const { mergedSizeRef, mergedDisabledRef } = formItem;
        const { localeRef } = (0, _mixins_1.useLocale)('global');
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'ColorPicker',
            '-color-picker',
            index_cssr_1.default,
            styles_1.colorPickerLight,
            props,
            mergedClsPrefixRef
        );
        (0, vue_1.provide)(context_1.colorPickerInjectionKey, {
            themeRef,
            renderLabelRef: (0, vue_1.toRef)(props, 'renderLabel'),
            colorPickerSlots: slots,
        });
        const uncontrolledShowRef = (0, vue_1.ref)(props.defaultShow);
        const mergedShowRef = (0, vooks_1.useMergedState)(
            (0, vue_1.toRef)(props, 'show'),
            uncontrolledShowRef
        );
        function doUpdateShow(value) {
            const { onUpdateShow, 'onUpdate:show': _onUpdateShow } = props;
            if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, value);
            if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, value);
            uncontrolledShowRef.value = value;
        }
        const { defaultValue } = props;
        const uncontrolledValueRef = (0, vue_1.ref)(
            defaultValue === void 0
                ? (0, utils_1.deriveDefaultValue)(props.modes, props.showAlpha)
                : defaultValue
        );
        const mergedValueRef = (0, vooks_1.useMergedState)(
            (0, vue_1.toRef)(props, 'value'),
            uncontrolledValueRef
        );
        const undoStackRef = (0, vue_1.ref)([mergedValueRef.value]);
        const valueIndexRef = (0, vue_1.ref)(0);
        const valueModeRef = (0, vue_1.computed)(() =>
            (0, utils_1.getModeFromValue)(mergedValueRef.value)
        );
        const { modes } = props;
        const displayedModeRef = (0, vue_1.ref)(
            (0, utils_1.getModeFromValue)(mergedValueRef.value) ||
                modes[0] ||
                'rgb'
        );
        function handleUpdateDisplayedMode() {
            const { modes: modes2 } = props;
            const { value: displayedMode } = displayedModeRef;
            const currentModeIndex = modes2.findIndex(
                (mode) => mode === displayedMode
            );
            if (~currentModeIndex) {
                displayedModeRef.value =
                    modes2[(currentModeIndex + 1) % modes2.length];
            } else {
                displayedModeRef.value = 'rgb';
            }
        }
        let _h, s, l, v, r, g, b, a;
        const hsvaRef = (0, vue_1.computed)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (!mergedValue) return null;
            switch (valueModeRef.value) {
                case 'hsv':
                    return (0, seemly_1.hsva)(mergedValue);
                case 'hsl':
                    [_h, s, l, a] = (0, seemly_1.hsla)(mergedValue);
                    return [...(0, seemly_1.hsl2hsv)(_h, s, l), a];
                case 'rgb':
                case 'hex':
                    [r, g, b, a] = (0, seemly_1.rgba)(mergedValue);
                    return [...(0, seemly_1.rgb2hsv)(r, g, b), a];
            }
        });
        const rgbaRef = (0, vue_1.computed)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (!mergedValue) return null;
            switch (valueModeRef.value) {
                case 'rgb':
                case 'hex':
                    return (0, seemly_1.rgba)(mergedValue);
                case 'hsv':
                    [_h, s, v, a] = (0, seemly_1.hsva)(mergedValue);
                    return [...(0, seemly_1.hsv2rgb)(_h, s, v), a];
                case 'hsl':
                    [_h, s, l, a] = (0, seemly_1.hsla)(mergedValue);
                    return [...(0, seemly_1.hsl2rgb)(_h, s, l), a];
            }
        });
        const hslaRef = (0, vue_1.computed)(() => {
            const { value: mergedValue } = mergedValueRef;
            if (!mergedValue) return null;
            switch (valueModeRef.value) {
                case 'hsl':
                    return (0, seemly_1.hsla)(mergedValue);
                case 'hsv':
                    [_h, s, v, a] = (0, seemly_1.hsva)(mergedValue);
                    return [...(0, seemly_1.hsv2hsl)(_h, s, v), a];
                case 'rgb':
                case 'hex':
                    [r, g, b, a] = (0, seemly_1.rgba)(mergedValue);
                    return [...(0, seemly_1.rgb2hsl)(r, g, b), a];
            }
        });
        const mergedValueArrRef = (0, vue_1.computed)(() => {
            switch (displayedModeRef.value) {
                case 'rgb':
                case 'hex':
                    return rgbaRef.value;
                case 'hsv':
                    return hsvaRef.value;
                case 'hsl':
                    return hslaRef.value;
            }
        });
        const displayedHueRef = (0, vue_1.ref)(0);
        const displayedAlphaRef = (0, vue_1.ref)(1);
        const displayedSvRef = (0, vue_1.ref)([0, 0]);
        function handleUpdateSv(s2, v2) {
            const { value: hsvaArr } = hsvaRef;
            const hue = displayedHueRef.value;
            const alpha = hsvaArr ? hsvaArr[3] : 1;
            displayedSvRef.value = [s2, v2];
            const { showAlpha } = props;
            switch (displayedModeRef.value) {
                case 'hsv':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHsvaString
                            : seemly_1.toHsvString)([hue, s2, v2, alpha]),
                        'cursor'
                    );
                    break;
                case 'hsl':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHslaString
                            : seemly_1.toHslString)([
                            ...(0, seemly_1.hsv2hsl)(hue, s2, v2),
                            alpha,
                        ]),
                        'cursor'
                    );
                    break;
                case 'rgb':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toRgbaString
                            : seemly_1.toRgbString)([
                            ...(0, seemly_1.hsv2rgb)(hue, s2, v2),
                            alpha,
                        ]),
                        'cursor'
                    );
                    break;
                case 'hex':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHexaString
                            : seemly_1.toHexString)([
                            ...(0, seemly_1.hsv2rgb)(hue, s2, v2),
                            alpha,
                        ]),
                        'cursor'
                    );
                    break;
            }
        }
        function handleUpdateHue(hue) {
            displayedHueRef.value = hue;
            const { value: hsvaArr } = hsvaRef;
            if (!hsvaArr) {
                return;
            }
            const [, s2, v2, a2] = hsvaArr;
            const { showAlpha } = props;
            switch (displayedModeRef.value) {
                case 'hsv':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHsvaString
                            : seemly_1.toHsvString)([hue, s2, v2, a2]),
                        'cursor'
                    );
                    break;
                case 'rgb':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toRgbaString
                            : seemly_1.toRgbString)([
                            ...(0, seemly_1.hsv2rgb)(hue, s2, v2),
                            a2,
                        ]),
                        'cursor'
                    );
                    break;
                case 'hex':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHexaString
                            : seemly_1.toHexString)([
                            ...(0, seemly_1.hsv2rgb)(hue, s2, v2),
                            a2,
                        ]),
                        'cursor'
                    );
                    break;
                case 'hsl':
                    doUpdateValue(
                        (showAlpha
                            ? seemly_1.toHslaString
                            : seemly_1.toHslString)([
                            ...(0, seemly_1.hsv2hsl)(hue, s2, v2),
                            a2,
                        ]),
                        'cursor'
                    );
                    break;
            }
        }
        function handleUpdateAlpha(alpha) {
            switch (displayedModeRef.value) {
                case 'hsv':
                    [_h, s, v] = hsvaRef.value;
                    doUpdateValue(
                        (0, seemly_1.toHsvaString)([_h, s, v, alpha]),
                        'cursor'
                    );
                    break;
                case 'rgb':
                    [r, g, b] = rgbaRef.value;
                    doUpdateValue(
                        (0, seemly_1.toRgbaString)([r, g, b, alpha]),
                        'cursor'
                    );
                    break;
                case 'hex':
                    [r, g, b] = rgbaRef.value;
                    doUpdateValue(
                        (0, seemly_1.toHexaString)([r, g, b, alpha]),
                        'cursor'
                    );
                    break;
                case 'hsl':
                    [_h, s, l] = hslaRef.value;
                    doUpdateValue(
                        (0, seemly_1.toHslaString)([_h, s, l, alpha]),
                        'cursor'
                    );
                    break;
            }
            displayedAlphaRef.value = alpha;
        }
        function doUpdateValue(value, updateSource) {
            if (updateSource === 'cursor') {
                upcomingValue = value;
            } else {
                upcomingValue = null;
            }
            const { nTriggerFormChange, nTriggerFormInput } = formItem;
            const { onUpdateValue, 'onUpdate:value': _onUpdateValue } = props;
            if (onUpdateValue) (0, _utils_1.call)(onUpdateValue, value);
            if (_onUpdateValue) (0, _utils_1.call)(_onUpdateValue, value);
            nTriggerFormChange();
            nTriggerFormInput();
            uncontrolledValueRef.value = value;
        }
        function handleInputUpdateValue(value) {
            doUpdateValue(value, 'input');
            void (0, vue_1.nextTick)(handleComplete);
        }
        function handleComplete(pushStack = true) {
            const { value } = mergedValueRef;
            if (value) {
                const { nTriggerFormChange, nTriggerFormInput } = formItem;
                const { onComplete } = props;
                if (onComplete) {
                    onComplete(value);
                }
                const { value: undoStack } = undoStackRef;
                const { value: valueIndex } = valueIndexRef;
                if (pushStack) {
                    undoStack.splice(valueIndex + 1, undoStack.length, value);
                    valueIndexRef.value = valueIndex + 1;
                }
                nTriggerFormChange();
                nTriggerFormInput();
            }
        }
        function undo() {
            const { value: valueIndex } = valueIndexRef;
            if (valueIndex - 1 < 0) return;
            doUpdateValue(undoStackRef.value[valueIndex - 1], 'input');
            handleComplete(false);
            valueIndexRef.value = valueIndex - 1;
        }
        function redo() {
            const { value: valueIndex } = valueIndexRef;
            if (valueIndex < 0 || valueIndex + 1 >= undoStackRef.value.length)
                return;
            doUpdateValue(undoStackRef.value[valueIndex + 1], 'input');
            handleComplete(false);
            valueIndexRef.value = valueIndex + 1;
        }
        function handleClear() {
            doUpdateValue(null, 'input');
            doUpdateShow(false);
        }
        function handleConfirm() {
            const { value } = mergedValueRef;
            const { onConfirm } = props;
            if (onConfirm) {
                onConfirm(value);
            }
            doUpdateShow(false);
        }
        const undoableRef = (0, vue_1.computed)(() => valueIndexRef.value >= 1);
        const redoableRef = (0, vue_1.computed)(() => {
            const { value: undoStack } = undoStackRef;
            return (
                undoStack.length > 1 &&
                valueIndexRef.value < undoStack.length - 1
            );
        });
        (0, vue_1.watch)(mergedShowRef, (value) => {
            if (!value) {
                undoStackRef.value = [mergedValueRef.value];
                valueIndexRef.value = 0;
            }
        });
        (0, vue_1.watchEffect)(() => {
            if (upcomingValue && upcomingValue === mergedValueRef.value) {
            } else {
                const { value } = hsvaRef;
                if (value) {
                    displayedHueRef.value = value[0];
                    displayedAlphaRef.value = value[3];
                    displayedSvRef.value = [value[1], value[2]];
                }
            }
            upcomingValue = null;
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { value: mergedSize } = mergedSizeRef;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    textColor,
                    color,
                    panelFontSize,
                    boxShadow,
                    border,
                    borderRadius,
                    dividerColor,
                    [(0, _utils_1.createKey)('height', mergedSize)]: height,
                    [(0, _utils_1.createKey)('fontSize', mergedSize)]: fontSize,
                },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-color': color,
                '--n-panel-font-size': panelFontSize,
                '--n-font-size': fontSize,
                '--n-box-shadow': boxShadow,
                '--n-border': border,
                '--n-border-radius': borderRadius,
                '--n-height': height,
                '--n-divider-color': dividerColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'color-picker',
                  (0, vue_1.computed)(() => {
                      return mergedSizeRef.value[0];
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        function renderPanel() {
            var _a;
            const { value: rgba } = rgbaRef;
            const { value: displayedHue } = displayedHueRef;
            const { internalActions, modes: modes2, actions } = props;
            const { value: mergedTheme } = themeRef;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            return (0, vue_1.h)(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-color-picker-panel`,
                        themeClassHandle === null || themeClassHandle === void 0
                            ? void 0
                            : themeClassHandle.themeClass.value,
                    ],
                    onDragstart: (e) => {
                        e.preventDefault();
                    },
                    style: inlineThemeDisabled ? void 0 : cssVarsRef.value,
                },
                (0, vue_1.h)(
                    'div',
                    { class: `${mergedClsPrefix}-color-picker-control` },
                    (0, vue_1.h)(Pallete_1.default, {
                        clsPrefix: mergedClsPrefix,
                        rgba,
                        displayedHue,
                        displayedSv: displayedSvRef.value,
                        onUpdateSV: handleUpdateSv,
                        onComplete: handleComplete,
                    }),
                    (0, vue_1.h)(
                        'div',
                        { class: `${mergedClsPrefix}-color-picker-preview` },
                        (0, vue_1.h)(
                            'div',
                            {
                                class: `${mergedClsPrefix}-color-picker-preview__sliders`,
                            },
                            (0, vue_1.h)(HueSlider_1.default, {
                                clsPrefix: mergedClsPrefix,
                                hue: displayedHue,
                                onUpdateHue: handleUpdateHue,
                                onComplete: handleComplete,
                            }),
                            props.showAlpha
                                ? (0, vue_1.h)(AlphaSlider_1.default, {
                                      clsPrefix: mergedClsPrefix,
                                      rgba,
                                      alpha: displayedAlphaRef.value,
                                      onUpdateAlpha: handleUpdateAlpha,
                                      onComplete: handleComplete,
                                  })
                                : null
                        ),
                        props.showPreview
                            ? (0, vue_1.h)(ColorPreview_1.default, {
                                  clsPrefix: mergedClsPrefix,
                                  mode: displayedModeRef.value,
                                  color:
                                      rgbaRef.value &&
                                      (0, seemly_1.toHexString)(rgbaRef.value),
                                  onUpdateColor: (color) =>
                                      doUpdateValue(color, 'input'),
                              })
                            : null
                    ),
                    (0, vue_1.h)(ColorInput_1.default, {
                        clsPrefix: mergedClsPrefix,
                        showAlpha: props.showAlpha,
                        mode: displayedModeRef.value,
                        modes: modes2,
                        onUpdateMode: handleUpdateDisplayedMode,
                        value: mergedValueRef.value,
                        valueArr: mergedValueArrRef.value,
                        onUpdateValue: handleInputUpdateValue,
                    }),
                    ((_a = props.swatches) === null || _a === void 0
                        ? void 0
                        : _a.length) &&
                        (0, vue_1.h)(ColorPickerSwatches_1.default, {
                            clsPrefix: mergedClsPrefix,
                            mode: displayedModeRef.value,
                            swatches: props.swatches,
                            onUpdateColor: (color) =>
                                doUpdateValue(color, 'input'),
                        })
                ),
                (
                    actions === null || actions === void 0
                        ? void 0
                        : actions.length
                )
                    ? (0, vue_1.h)(
                          'div',
                          { class: `${mergedClsPrefix}-color-picker-action` },
                          actions.includes('confirm') &&
                              (0, vue_1.h)(
                                  button_1.NButton,
                                  {
                                      size: 'small',
                                      onClick: handleConfirm,
                                      theme: mergedTheme.peers.Button,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Button,
                                  },
                                  { default: () => localeRef.value.confirm }
                              ),
                          actions.includes('clear') &&
                              (0, vue_1.h)(
                                  button_1.NButton,
                                  {
                                      size: 'small',
                                      onClick: handleClear,
                                      disabled: !mergedValueRef.value,
                                      theme: mergedTheme.peers.Button,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Button,
                                  },
                                  { default: () => localeRef.value.clear }
                              )
                      )
                    : null,
                slots.action
                    ? (0, vue_1.h)(
                          'div',
                          { class: `${mergedClsPrefix}-color-picker-action` },
                          { default: slots.action }
                      )
                    : internalActions
                    ? (0, vue_1.h)(
                          'div',
                          { class: `${mergedClsPrefix}-color-picker-action` },
                          internalActions.includes('undo') &&
                              (0, vue_1.h)(
                                  button_1.NButton,
                                  {
                                      size: 'small',
                                      onClick: undo,
                                      disabled: !undoableRef.value,
                                      theme: mergedTheme.peers.Button,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Button,
                                  },
                                  { default: () => localeRef.value.undo }
                              ),
                          internalActions.includes('redo') &&
                              (0, vue_1.h)(
                                  button_1.NButton,
                                  {
                                      size: 'small',
                                      onClick: redo,
                                      disabled: !redoableRef.value,
                                      theme: mergedTheme.peers.Button,
                                      themeOverrides:
                                          mergedTheme.peerOverrides.Button,
                                  },
                                  { default: () => localeRef.value.redo }
                              )
                      )
                    : null
            );
        }
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            namespace: namespaceRef,
            selfRef,
            hsla: hslaRef,
            rgba: rgbaRef,
            mergedShow: mergedShowRef,
            mergedDisabled: mergedDisabledRef,
            isMounted: (0, vooks_1.useIsMounted)(),
            adjustedTo: (0, _utils_1.useAdjustedTo)(props),
            mergedValue: mergedValueRef,
            handleTriggerClick() {
                doUpdateShow(true);
            },
            handleClickOutside(e) {
                var _a;
                if (
                    (_a = selfRef.value) === null || _a === void 0
                        ? void 0
                        : _a.contains((0, seemly_1.getPreciseEventTarget)(e))
                ) {
                    return;
                }
                doUpdateShow(false);
            },
            renderPanel,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
        };
    },
    render() {
        const { $slots, mergedClsPrefix, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return (0, vue_1.h)(
            'div',
            {
                class: [this.themeClass, `${mergedClsPrefix}-color-picker`],
                ref: 'selfRef',
                style: this.cssVars,
            },
            (0, vue_1.h)(vueuc_1.VBinder, null, {
                default: () => [
                    (0, vue_1.h)(vueuc_1.VTarget, null, {
                        default: () =>
                            (0, vue_1.h)(
                                ColorPickerTrigger_1.default,
                                {
                                    clsPrefix: mergedClsPrefix,
                                    value: this.mergedValue,
                                    hsla: this.hsla,
                                    disabled: this.mergedDisabled,
                                    onClick: this.handleTriggerClick,
                                },
                                {
                                    label: $slots.label,
                                }
                            ),
                    }),
                    (0, vue_1.h)(
                        vueuc_1.VFollower,
                        {
                            placement: this.placement,
                            show: this.mergedShow,
                            containerClass: this.namespace,
                            teleportDisabled:
                                this.adjustedTo ===
                                _utils_1.useAdjustedTo.tdkey,
                            to: this.adjustedTo,
                        },
                        {
                            default: () =>
                                (0, vue_1.h)(
                                    vue_1.Transition,
                                    {
                                        name: 'fade-in-scale-up-transition',
                                        appear: this.isMounted,
                                    },
                                    {
                                        default: () =>
                                            this.mergedShow
                                                ? (0, vue_1.withDirectives)(
                                                      this.renderPanel(),
                                                      [
                                                          [
                                                              vdirs_1.clickoutside,
                                                              this
                                                                  .handleClickOutside,
                                                              void 0,
                                                              { capture: true },
                                                          ],
                                                      ]
                                                  )
                                                : null,
                                    }
                                ),
                        }
                    ),
                ],
            })
        );
    },
});
