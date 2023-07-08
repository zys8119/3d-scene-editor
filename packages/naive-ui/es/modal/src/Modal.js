import {
    h,
    withDirectives,
    Transition,
    ref,
    computed,
    defineComponent,
    provide,
    toRef,
    inject,
} from 'vue';
import { zindexable } from 'vdirs';
import { useIsMounted, useClicked, useClickPosition } from 'vooks';
import { VLazyTeleport } from 'vueuc';
import { getPreciseEventTarget } from 'seemly';
import { dialogProviderInjectionKey } from '../../dialog/src/context';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import {
    keep,
    call,
    warnOnce,
    useIsComposing,
    eventEffectNotPerformed,
} from '../../_utils';
import { modalLight } from '../styles';
import { presetProps, presetPropsKeys } from './presetProps';
import NModalBodyWrapper from './BodyWrapper';
import { modalInjectionKey } from './interface';
import style from './styles/index.cssr';
export const modalProps = Object.assign(
    Object.assign(
        Object.assign(Object.assign({}, useTheme.props), {
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
        presetProps
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
export default defineComponent({
    name: 'Modal',
    inheritAttrs: false,
    props: modalProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            if (props.onHide) {
                warnOnce('modal', '`on-hide` is deprecated.');
            }
            if (props.onAfterHide) {
                warnOnce(
                    'modal',
                    '`on-after-hide` is deprecated, please use `on-after-leave` instead.'
                );
            }
            if (props.onBeforeHide) {
                warnOnce(
                    'modal',
                    '`on-before-hide` is deprecated, please use `on-before-leave` instead.'
                );
            }
            if (props.overlayStyle) {
                warnOnce(
                    'modal',
                    '`overlay-style` is deprecated, please use `style` instead.'
                );
            }
        }
        const containerRef = ref(null);
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } =
            useConfig(props);
        const themeRef = useTheme(
            'Modal',
            '-modal',
            style,
            modalLight,
            props,
            mergedClsPrefixRef
        );
        const clickedRef = useClicked(64);
        const clickedPositionRef = useClickPosition();
        const isMountedRef = useIsMounted();
        const NDialogProvider = props.internalDialog
            ? inject(dialogProviderInjectionKey, null)
            : null;
        const isComposingRef = useIsComposing();
        function doUpdateShow(show) {
            const {
                onUpdateShow,
                'onUpdate:show': _onUpdateShow,
                onHide,
            } = props;
            if (onUpdateShow) call(onUpdateShow, show);
            if (_onUpdateShow) call(_onUpdateShow, show);
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
            if (onBeforeLeave) call(onBeforeLeave);
            if (onBeforeHide) onBeforeHide();
        }
        function handleAfterLeave() {
            const { onAfterLeave, onAfterHide } = props;
            if (onAfterLeave) call(onAfterLeave);
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
                        : _a.contains(getPreciseEventTarget(e))
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
            if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
                !isComposingRef.value && doUpdateShow(false);
            }
        }
        provide(modalInjectionKey, {
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
            appearRef: toRef(props, 'internalAppear'),
            transformOriginRef: toRef(props, 'transformOrigin'),
        });
        const cssVarsRef = computed(() => {
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
            ? useThemeClass('theme-class', void 0, cssVarsRef, props)
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            namespace: namespaceRef,
            isMounted: isMountedRef,
            containerRef,
            presetProps: computed(() => {
                const pickedProps = keep(props, presetPropsKeys);
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
        return h(
            VLazyTeleport,
            { to: this.to, show: this.show },
            {
                default: () => {
                    var _a;
                    (_a = this.onRender) === null || _a === void 0
                        ? void 0
                        : _a.call(this);
                    const { unstableShowMask } = this;
                    return withDirectives(
                        h(
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
                            h(
                                NModalBodyWrapper,
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
                                                  return h(
                                                      Transition,
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
                                                                  ? h('div', {
                                                                        'aria-hidden': true,
                                                                        ref: 'containerRef',
                                                                        class: `${mergedClsPrefix}-modal-mask`,
                                                                        onClick:
                                                                            this
                                                                                .handleClickoutside,
                                                                    })
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
                                zindexable,
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
