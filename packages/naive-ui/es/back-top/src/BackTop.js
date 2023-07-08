import {
    h,
    ref,
    computed,
    toRef,
    watch,
    nextTick,
    defineComponent,
    mergeProps,
    Transition,
    onMounted,
    onBeforeUnmount,
    watchEffect,
} from 'vue';
import { VLazyTeleport } from 'vueuc';
import { useIsMounted, useMergedState } from 'vooks';
import { getScrollParent, unwrapElement } from 'seemly';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import { NBaseIcon } from '../../_internal';
import {
    lockHtmlScrollRightCompensationRef,
    formatLength,
    resolveSlot,
    isDocument,
    warn,
    warnOnce,
} from '../../_utils';
import { backTopLight } from '../styles';
import BackTopIcon from './BackTopIcon';
import style from './styles/index.cssr';
export const backTopProps = Object.assign(Object.assign({}, useTheme.props), {
    show: {
        type: Boolean,
        default: void 0,
    },
    right: {
        type: [Number, String],
        default: 40,
    },
    bottom: {
        type: [Number, String],
        default: 40,
    },
    to: {
        type: [String, Object],
        default: 'body',
    },
    visibilityHeight: {
        type: Number,
        default: 180,
    },
    listenTo: [String, Object, Function],
    'onUpdate:show': {
        type: Function,
        default: () => {},
    },
    target: Function,
    onShow: Function,
    onHide: Function,
});
export default defineComponent({
    name: 'BackTop',
    inheritAttrs: false,
    props: backTopProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.target !== void 0) {
                    warnOnce(
                        'back-top',
                        '`target` is deprecated, please use `listen-to` instead.'
                    );
                }
                if (props.onShow !== void 0) {
                    warnOnce(
                        'back-top',
                        '`on-show` is deprecated, please use `on-update:show` instead.'
                    );
                }
                if (props.onHide !== void 0) {
                    warnOnce(
                        'back-top',
                        '`on-hide` is deprecated, please use `on-update:show` instead.'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const scrollTopRef = ref(null);
        const uncontrolledShowRef = ref(false);
        watchEffect(() => {
            const { value: scrollTop } = scrollTopRef;
            if (scrollTop === null) {
                uncontrolledShowRef.value = false;
                return;
            }
            uncontrolledShowRef.value = scrollTop >= props.visibilityHeight;
        });
        const DomInfoReadyRef = ref(false);
        watch(uncontrolledShowRef, (value) => {
            var _a;
            if (DomInfoReadyRef.value) {
                (_a = props['onUpdate:show']) === null || _a === void 0
                    ? void 0
                    : _a.call(props, value);
            }
        });
        const controlledShowRef = toRef(props, 'show');
        const mergedShowRef = useMergedState(
            controlledShowRef,
            uncontrolledShowRef
        );
        const transitionDisabledRef = ref(true);
        const placeholderRef = ref(null);
        const styleRef = computed(() => {
            return {
                right: `calc(${formatLength(props.right)} + ${
                    lockHtmlScrollRightCompensationRef.value
                })`,
                bottom: formatLength(props.bottom),
            };
        });
        let scrollElement;
        let scrollListenerRegistered;
        watch(mergedShowRef, (value) => {
            var _a, _b;
            if (DomInfoReadyRef.value) {
                if (value) {
                    (_a = props.onShow) === null || _a === void 0
                        ? void 0
                        : _a.call(props);
                }
                (_b = props.onHide) === null || _b === void 0
                    ? void 0
                    : _b.call(props);
            }
        });
        const themeRef = useTheme(
            'BackTop',
            '-back-top',
            style,
            backTopLight,
            props,
            mergedClsPrefixRef
        );
        function init() {
            var _a;
            if (scrollListenerRegistered) return;
            scrollListenerRegistered = true;
            const scrollEl =
                ((_a = props.target) === null || _a === void 0
                    ? void 0
                    : _a.call(props)) ||
                unwrapElement(props.listenTo) ||
                getScrollParent(placeholderRef.value);
            if (!scrollEl) {
                if (process.env.NODE_ENV !== 'production') {
                    warn(
                        'back-top',
                        'Container of back-top element is not found. This could be a bug of naive-ui.'
                    );
                }
                return;
            }
            scrollElement =
                scrollEl === document.documentElement ? document : scrollEl;
            const { to } = props;
            const target =
                typeof to === 'string' ? document.querySelector(to) : to;
            if (process.env.NODE_ENV !== 'production' && !target) {
                warn('back-top', 'Target is not found.');
            }
            scrollElement.addEventListener('scroll', handleScroll);
            handleScroll();
        }
        function handleClick() {
            (isDocument(scrollElement)
                ? document.documentElement
                : scrollElement
            ).scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
        function handleScroll() {
            scrollTopRef.value = (
                isDocument(scrollElement)
                    ? document.documentElement
                    : scrollElement
            ).scrollTop;
            if (!DomInfoReadyRef.value) {
                void nextTick(() => {
                    DomInfoReadyRef.value = true;
                });
            }
        }
        function handleAfterEnter() {
            transitionDisabledRef.value = false;
        }
        onMounted(() => {
            init();
            transitionDisabledRef.value = mergedShowRef.value;
        });
        onBeforeUnmount(() => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        });
        const cssVarsRef = computed(() => {
            const {
                self: {
                    color,
                    boxShadow,
                    boxShadowHover,
                    boxShadowPressed,
                    iconColor,
                    iconColorHover,
                    iconColorPressed,
                    width,
                    height,
                    iconSize,
                    borderRadius,
                    textColor,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-height': height,
                '--n-width': width,
                '--n-box-shadow': boxShadow,
                '--n-box-shadow-hover': boxShadowHover,
                '--n-box-shadow-pressed': boxShadowPressed,
                '--n-color': color,
                '--n-icon-size': iconSize,
                '--n-icon-color': iconColor,
                '--n-icon-color-hover': iconColorHover,
                '--n-icon-color-pressed': iconColorPressed,
                '--n-text-color': textColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('back-top', void 0, cssVarsRef, props)
            : void 0;
        return {
            placeholderRef,
            style: styleRef,
            mergedShow: mergedShowRef,
            isMounted: useIsMounted(),
            scrollElement: ref(null),
            scrollTop: scrollTopRef,
            DomInfoReady: DomInfoReadyRef,
            transitionDisabled: transitionDisabledRef,
            mergedClsPrefix: mergedClsPrefixRef,
            handleAfterEnter,
            handleScroll,
            handleClick,
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
            'div',
            {
                ref: 'placeholderRef',
                class: `${mergedClsPrefix}-back-top-placeholder`,
                style: 'display: none',
                'aria-hidden': true,
            },
            h(
                VLazyTeleport,
                { to: this.to, show: this.mergedShow },
                {
                    default: () =>
                        h(
                            Transition,
                            {
                                name: 'fade-in-scale-up-transition',
                                appear: this.isMounted,
                                onAfterEnter: this.handleAfterEnter,
                            },
                            {
                                default: () => {
                                    var _a;
                                    (_a = this.onRender) === null ||
                                    _a === void 0
                                        ? void 0
                                        : _a.call(this);
                                    return this.mergedShow
                                        ? h(
                                              'div',
                                              mergeProps(this.$attrs, {
                                                  class: [
                                                      `${mergedClsPrefix}-back-top`,
                                                      this.themeClass,
                                                      this.transitionDisabled &&
                                                          `${mergedClsPrefix}-back-top--transition-disabled`,
                                                  ],
                                                  style: [
                                                      this.style,
                                                      this.cssVars,
                                                  ],
                                                  onClick: this.handleClick,
                                              }),
                                              resolveSlot(
                                                  this.$slots.default,
                                                  () => [
                                                      h(
                                                          NBaseIcon,
                                                          {
                                                              clsPrefix:
                                                                  mergedClsPrefix,
                                                          },
                                                          {
                                                              default: () =>
                                                                  BackTopIcon,
                                                          }
                                                      ),
                                                  ]
                                              )
                                          )
                                        : null;
                                },
                            }
                        ),
                }
            )
        );
    },
});
