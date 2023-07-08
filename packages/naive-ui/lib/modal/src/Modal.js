var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.modalProps = void 0;
const vue_1 = require('vue');
const vdirs_1 = require('vdirs');
const vooks_1 = require('vooks');
const vueuc_1 = require('vueuc');
const seemly_1 = require('seemly');
const context_1 = require('../../dialog/src/context');
const _mixins_1 = require('../../_mixins');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const presetProps_1 = require('./presetProps');
const BodyWrapper_1 = __importDefault(require('./BodyWrapper'));
const interface_1 = require('./interface');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.modalProps = Object.assign(
    Object.assign(
        Object.assign(Object.assign({}, _mixins_1.useTheme.props), {
            show: Boolean,
            unstableShowMask: {
                type: Boolean,
                default: true,
            },
            maskClosable: {
                type: Boolean,
                default: true,
            },
            preset: String,
            to: [String, Object],
            displayDirective: {
                type: String,
                default: 'if',
            },
            transformOrigin: {
                type: String,
                default: 'mouse',
            },
            zIndex: Number,
            autoFocus: {
                type: Boolean,
                default: true,
            },
            trapFocus: {
                type: Boolean,
                default: true,
            },
            closeOnEsc: {
                type: Boolean,
                default: true,
            },
            blockScroll: { type: Boolean, default: true },
        }),
        presetProps_1.presetProps
    ),
    {
        onEsc: Function,
        'onUpdate:show': [Function, Array],
        onUpdateShow: [Function, Array],
        onAfterEnter: Function,
        onBeforeLeave: Function,
        onAfterLeave: Function,
        onClose: Function,
        onPositiveClick: Function,
        onNegativeClick: Function,
        onMaskClick: Function,
        internalDialog: Boolean,
        internalAppear: {
            type: Boolean,
            default: void 0,
        },
        overlayStyle: [String, Object],
        onBeforeHide: Function,
        onAfterHide: Function,
        onHide: Function,
    }
);
exports.default = (0, vue_1.defineComponent)({
    name: 'Modal',
    inheritAttrs: false,
    props: exports.modalProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            if (props.onHide) {
                (0, _utils_1.warnOnce)('modal', '`on-hide` is deprecated.');
            }
            if (props.onAfterHide) {
                (0, _utils_1.warnOnce)(
                    'modal',
                    '`on-after-hide` is deprecated, please use `on-after-leave` instead.'
                );
            }
            if (props.onBeforeHide) {
                (0, _utils_1.warnOnce)(
                    'modal',
                    '`on-before-hide` is deprecated, please use `on-before-leave` instead.'
                );
            }
            if (props.overlayStyle) {
                (0, _utils_1.warnOnce)(
                    'modal',
                    '`overlay-style` is deprecated, please use `style` instead.'
                );
            }
        }
        const containerRef = (0, vue_1.ref)(null);
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } = (0,
        _mixins_1.useConfig)(props);
        const themeRef = (0, _mixins_1.useTheme)(
            'Modal',
            '-modal',
            index_cssr_1.default,
            styles_1.modalLight,
            props,
            mergedClsPrefixRef
        );
        const clickedRef = (0, vooks_1.useClicked)(64);
        const clickedPositionRef = (0, vooks_1.useClickPosition)();
        const isMountedRef = (0, vooks_1.useIsMounted)();
        const NDialogProvider = props.internalDialog
            ? (0, vue_1.inject)(context_1.dialogProviderInjectionKey, null)
            : null;
        const isComposingRef = (0, _utils_1.useIsComposing)();
        function doUpdateShow(show) {
            const {
                onUpdateShow,
                'onUpdate:show': _onUpdateShow,
                onHide,
            } = props;
            if (onUpdateShow) (0, _utils_1.call)(onUpdateShow, show);
            if (_onUpdateShow) (0, _utils_1.call)(_onUpdateShow, show);
            if (onHide && !show) onHide(show);
        }
        function handleCloseClick() {
            const { onClose } = props;
            if (onClose) {
                void Promise.resolve(onClose()).then((value) => {
                    if (value === false) return;
                    doUpdateShow(false);
                });
            } else {
                doUpdateShow(false);
            }
        }
        function handlePositiveClick() {
            const { onPositiveClick } = props;
            if (onPositiveClick) {
                void Promise.resolve(onPositiveClick()).then((value) => {
                    if (value === false) return;
                    doUpdateShow(false);
                });
            } else {
                doUpdateShow(false);
            }
        }
        function handleNegativeClick() {
            const { onNegativeClick } = props;
            if (onNegativeClick) {
                void Promise.resolve(onNegativeClick()).then((value) => {
                    if (value === false) return;
                    doUpdateShow(false);
                });
            } else {
                doUpdateShow(false);
            }
        }
        function handleBeforeLeave() {
            const { onBeforeLeave, onBeforeHide } = props;
            if (onBeforeLeave) (0, _utils_1.call)(onBeforeLeave);
            if (onBeforeHide) onBeforeHide();
        }
        function handleAfterLeave() {
            const { onAfterLeave, onAfterHide } = props;
            if (onAfterLeave) (0, _utils_1.call)(onAfterLeave);
            if (onAfterHide) onAfterHide();
        }
        function handleClickoutside(e) {
            var _a;
            const { onMaskClick } = props;
            if (onMaskClick) {
                onMaskClick(e);
            }
            if (props.maskClosable) {
                if (
                    (_a = containerRef.value) === null || _a === void 0
                        ? void 0
                        : _a.contains((0, seemly_1.getPreciseEventTarget)(e))
                ) {
                    doUpdateShow(false);
                }
            }
        }
        function handleEsc(e) {
            var _a;
            (_a = props.onEsc) === null || _a === void 0
                ? void 0
                : _a.call(props);
            if (
                props.show &&
                props.closeOnEsc &&
                (0, _utils_1.eventEffectNotPerformed)(e)
            ) {
                !isComposingRef.value && doUpdateShow(false);
            }
        }
        (0, vue_1.provide)(interface_1.modalInjectionKey, {
            getMousePosition: () => {
                if (NDialogProvider) {
                    const { clickedRef: clickedRef2, clickPositionRef } =
                        NDialogProvider;
                    if (clickedRef2.value && clickPositionRef.value) {
                        return clickPositionRef.value;
                    }
                }
                if (clickedRef.value) {
                    return clickedPositionRef.value;
                }
                return null;
            },
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            isMountedRef,
            appearRef: (0, vue_1.toRef)(props, 'internalAppear'),
            transformOriginRef: (0, vue_1.toRef)(props, 'transformOrigin'),
        });
        const cssVarsRef = (0, vue_1.computed)(() => {
            const {
                common: { cubicBezierEaseOut },
                self: { boxShadow, color, textColor },
            } = themeRef.value;
            return {
                '--n-bezier-ease-out': cubicBezierEaseOut,
                '--n-box-shadow': boxShadow,
                '--n-color': color,
                '--n-text-color': textColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'theme-class',
                  void 0,
                  cssVarsRef,
                  props
              )
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            namespace: namespaceRef,
            isMounted: isMountedRef,
            containerRef,
            presetProps: (0, vue_1.computed)(() => {
                const pickedProps = (0, _utils_1.keep)(
                    props,
                    presetProps_1.presetPropsKeys
                );
                return pickedProps;
            }),
            handleEsc,
            handleAfterLeave,
            handleClickoutside,
            handleBeforeLeave,
            doUpdateShow,
            handleNegativeClick,
            handlePositiveClick,
            handleCloseClick,
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
        const { mergedClsPrefix } = this;
        return (0, vue_1.h)(
            vueuc_1.VLazyTeleport,
            { to: this.to, show: this.show },
            {
                default: () => {
                    var _a;
                    (_a = this.onRender) === null || _a === void 0
                        ? void 0
                        : _a.call(this);
                    const { unstableShowMask } = this;
                    return (0, vue_1.withDirectives)(
                        (0, vue_1.h)(
                            'div',
                            {
                                role: 'none',
                                ref: 'containerRef',
                                class: [
                                    `${mergedClsPrefix}-modal-container`,
                                    this.themeClass,
                                    this.namespace,
                                ],
                                style: this.cssVars,
                            },
                            (0, vue_1.h)(
                                BodyWrapper_1.default,
                                Object.assign(
                                    { style: this.overlayStyle },
                                    this.$attrs,
                                    {
                                        ref: 'bodyWrapper',
                                        displayDirective: this.displayDirective,
                                        show: this.show,
                                        preset: this.preset,
                                        autoFocus: this.autoFocus,
                                        trapFocus: this.trapFocus,
                                        blockScroll: this.blockScroll,
                                    },
                                    this.presetProps,
                                    {
                                        onEsc: this.handleEsc,
                                        onClose: this.handleCloseClick,
                                        onNegativeClick:
                                            this.handleNegativeClick,
                                        onPositiveClick:
                                            this.handlePositiveClick,
                                        onBeforeLeave: this.handleBeforeLeave,
                                        onAfterEnter: this.onAfterEnter,
                                        onAfterLeave: this.handleAfterLeave,
                                        onClickoutside: unstableShowMask
                                            ? void 0
                                            : this.handleClickoutside,
                                        renderMask: unstableShowMask
                                            ? () => {
                                                  var _a2;
                                                  return (0, vue_1.h)(
                                                      vue_1.Transition,
                                                      {
                                                          name: 'fade-in-transition',
                                                          key: 'mask',
                                                          appear:
                                                              (_a2 =
                                                                  this
                                                                      .internalAppear) !==
                                                                  null &&
                                                              _a2 !== void 0
                                                                  ? _a2
                                                                  : this
                                                                        .isMounted,
                                                      },
                                                      {
                                                          default: () => {
                                                              return this.show
                                                                  ? (0,
                                                                    vue_1.h)(
                                                                        'div',
                                                                        {
                                                                            'aria-hidden': true,
                                                                            ref: 'containerRef',
                                                                            class: `${mergedClsPrefix}-modal-mask`,
                                                                            onClick:
                                                                                this
                                                                                    .handleClickoutside,
                                                                        }
                                                                    )
                                                                  : null;
                                                          },
                                                      }
                                                  );
                                              }
                                            : void 0,
                                    }
                                ),
                                this.$slots
                            )
                        ),
                        [
                            [
                                vdirs_1.zindexable,
                                {
                                    zIndex: this.zIndex,
                                    enabled: this.show,
                                },
                            ],
                        ]
                    );
                },
            }
        );
    },
});
