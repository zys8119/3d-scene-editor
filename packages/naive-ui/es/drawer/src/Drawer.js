import {
    h,
    ref,
    defineComponent,
    computed,
    provide,
    withDirectives,
    Transition,
    watchEffect,
    toRef,
} from 'vue';
import { VLazyTeleport } from 'vueuc';
import { zindexable } from 'vdirs';
import { useIsMounted, useMergedState } from 'vooks';
import { useTheme, useConfig, useThemeClass } from '../../_mixins';
import {
    formatLength,
    call,
    warnOnce,
    useIsComposing,
    eventEffectNotPerformed,
} from '../../_utils';
import { drawerLight } from '../styles';
import NDrawerBodyWrapper from './DrawerBodyWrapper';
import { drawerInjectionKey } from './interface';
import style from './styles/index.cssr';
export const drawerProps = Object.assign(Object.assign({}, useTheme.props), {
    show: Boolean,
    width: [Number, String],
    height: [Number, String],
    placement: {
        type: String,
        default: 'right',
    },
    maskClosable: {
        type: Boolean,
        default: true,
    },
    showMask: {
        type: [Boolean, String],
        default: true,
    },
    to: [String, Object],
    displayDirective: {
        type: String,
        default: 'if',
    },
    nativeScrollbar: {
        type: Boolean,
        default: true,
    },
    zIndex: Number,
    onMaskClick: Function,
    scrollbarProps: Object,
    contentStyle: [Object, String],
    trapFocus: {
        type: Boolean,
        default: true,
    },
    onEsc: Function,
    autoFocus: {
        type: Boolean,
        default: true,
    },
    closeOnEsc: {
        type: Boolean,
        default: true,
    },
    blockScroll: {
        type: Boolean,
        default: true,
    },
    resizable: Boolean,
    defaultWidth: {
        type: [Number, String],
        default: 251,
    },
    defaultHeight: {
        type: [Number, String],
        default: 251,
    },
    onUpdateWidth: [Function, Array],
    onUpdateHeight: [Function, Array],
    'onUpdate:width': [Function, Array],
    'onUpdate:height': [Function, Array],
    'onUpdate:show': [Function, Array],
    onUpdateShow: [Function, Array],
    onAfterEnter: Function,
    onAfterLeave: Function,
    drawerStyle: [String, Object],
    drawerClass: String,
    target: null,
    onShow: Function,
    onHide: Function,
});
export default defineComponent({
    name: 'Drawer',
    inheritAttrs: false,
    props: drawerProps,
    setup(props) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.drawerStyle !== void 0) {
                    warnOnce(
                        'drawer',
                        '`drawer-style` is deprecated, please use `style` instead.'
                    );
                }
                if (props.drawerClass !== void 0) {
                    warnOnce(
                        'drawer',
                        '`drawer-class` is deprecated, please use `class` instead.'
                    );
                }
                if (props.target !== void 0) {
                    warnOnce(
                        'drawer',
                        '`target` is deprecated, please use `to` instead.'
                    );
                }
                if (props.onShow !== void 0) {
                    warnOnce(
                        'drawer',
                        '`on-show` is deprecated, please use `on-update:show` instead.'
                    );
                }
                if (props.onHide !== void 0) {
                    warnOnce(
                        'drawer',
                        '`on-hide` is deprecated, please use `on-update:show` instead.'
                    );
                }
            });
        }
        const { mergedClsPrefixRef, namespaceRef, inlineThemeDisabled } =
            useConfig(props);
        const isMountedRef = useIsMounted();
        const themeRef = useTheme(
            'Drawer',
            '-drawer',
            style,
            drawerLight,
            props,
            mergedClsPrefixRef
        );
        const uncontrolledWidthRef = ref(props.defaultWidth);
        const uncontrolledHeightRef = ref(props.defaultHeight);
        const mergedWidthRef = useMergedState(
            toRef(props, 'width'),
            uncontrolledWidthRef
        );
        const mergedHeightRef = useMergedState(
            toRef(props, 'height'),
            uncontrolledHeightRef
        );
        const styleWidthRef = computed(() => {
            const { placement } = props;
            if (placement === 'top' || placement === 'bottom') return '';
            return formatLength(mergedWidthRef.value);
        });
        const styleHeightRef = computed(() => {
            const { placement } = props;
            if (placement === 'left' || placement === 'right') return '';
            return formatLength(mergedHeightRef.value);
        });
        const doUpdateWidth = (value) => {
            const { onUpdateWidth, 'onUpdate:width': _onUpdateWidth } = props;
            if (onUpdateWidth) call(onUpdateWidth, value);
            if (_onUpdateWidth) call(_onUpdateWidth, value);
            uncontrolledWidthRef.value = value;
        };
        const doUpdateHeight = (value) => {
            const { onUpdateHeight, 'onUpdate:width': _onUpdateHeight } = props;
            if (onUpdateHeight) call(onUpdateHeight, value);
            if (_onUpdateHeight) call(_onUpdateHeight, value);
            uncontrolledHeightRef.value = value;
        };
        const mergedBodyStyleRef = computed(() => {
            return [
                {
                    width: styleWidthRef.value,
                    height: styleHeightRef.value,
                },
                props.drawerStyle || '',
            ];
        });
        function handleMaskClick(e) {
            const { onMaskClick, maskClosable } = props;
            if (maskClosable) {
                doUpdateShow(false);
            }
            if (onMaskClick) onMaskClick(e);
        }
        const isComposingRef = useIsComposing();
        function handleEsc(e) {
            var _a;
            (_a = props.onEsc) === null || _a === void 0
                ? void 0
                : _a.call(props);
            if (props.show && props.closeOnEsc && eventEffectNotPerformed(e)) {
                !isComposingRef.value && doUpdateShow(false);
            }
        }
        function doUpdateShow(show) {
            const {
                onHide,
                onUpdateShow,
                'onUpdate:show': _onUpdateShow,
            } = props;
            if (onUpdateShow) call(onUpdateShow, show);
            if (_onUpdateShow) call(_onUpdateShow, show);
            if (onHide && !show) call(onHide, show);
        }
        provide(drawerInjectionKey, {
            isMountedRef,
            mergedThemeRef: themeRef,
            mergedClsPrefixRef,
            doUpdateShow,
            doUpdateHeight,
            doUpdateWidth,
        });
        const cssVarsRef = computed(() => {
            const {
                common: {
                    cubicBezierEaseInOut,
                    cubicBezierEaseIn,
                    cubicBezierEaseOut,
                },
                self: {
                    color,
                    textColor,
                    boxShadow,
                    lineHeight,
                    headerPadding,
                    footerPadding,
                    bodyPadding,
                    titleFontSize,
                    titleTextColor,
                    titleFontWeight,
                    headerBorderBottom,
                    footerBorderTop,
                    closeIconColor,
                    closeIconColorHover,
                    closeIconColorPressed,
                    closeColorHover,
                    closeColorPressed,
                    closeIconSize,
                    closeSize,
                    closeBorderRadius,
                    resizableTriggerColorHover,
                },
            } = themeRef.value;
            return {
                '--n-line-height': lineHeight,
                '--n-color': color,
                '--n-text-color': textColor,
                '--n-box-shadow': boxShadow,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-bezier-out': cubicBezierEaseOut,
                '--n-bezier-in': cubicBezierEaseIn,
                '--n-header-padding': headerPadding,
                '--n-body-padding': bodyPadding,
                '--n-footer-padding': footerPadding,
                '--n-title-text-color': titleTextColor,
                '--n-title-font-size': titleFontSize,
                '--n-title-font-weight': titleFontWeight,
                '--n-header-border-bottom': headerBorderBottom,
                '--n-footer-border-top': footerBorderTop,
                '--n-close-icon-color': closeIconColor,
                '--n-close-icon-color-hover': closeIconColorHover,
                '--n-close-icon-color-pressed': closeIconColorPressed,
                '--n-close-size': closeSize,
                '--n-close-color-hover': closeColorHover,
                '--n-close-color-pressed': closeColorPressed,
                '--n-close-icon-size': closeIconSize,
                '--n-close-border-radius': closeBorderRadius,
                '--n-resize-trigger-color-hover': resizableTriggerColorHover,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('drawer', void 0, cssVarsRef, props)
            : void 0;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            namespace: namespaceRef,
            mergedBodyStyle: mergedBodyStyleRef,
            handleMaskClick,
            handleEsc,
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
            isMounted: isMountedRef,
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
                    return withDirectives(
                        h(
                            'div',
                            {
                                class: [
                                    `${mergedClsPrefix}-drawer-container`,
                                    this.namespace,
                                    this.themeClass,
                                ],
                                style: this.cssVars,
                                role: 'none',
                            },
                            this.showMask
                                ? h(
                                      Transition,
                                      {
                                          name: 'fade-in-transition',
                                          appear: this.isMounted,
                                      },
                                      {
                                          default: () =>
                                              this.show
                                                  ? h('div', {
                                                        'aria-hidden': true,
                                                        class: [
                                                            `${mergedClsPrefix}-drawer-mask`,
                                                            this.showMask ===
                                                                'transparent' &&
                                                                `${mergedClsPrefix}-drawer-mask--invisible`,
                                                        ],
                                                        onClick:
                                                            this
                                                                .handleMaskClick,
                                                    })
                                                  : null,
                                      }
                                  )
                                : null,
                            h(
                                NDrawerBodyWrapper,
                                Object.assign({}, this.$attrs, {
                                    class: [
                                        this.drawerClass,
                                        this.$attrs.class,
                                    ],
                                    style: [
                                        this.mergedBodyStyle,
                                        this.$attrs.style,
                                    ],
                                    blockScroll: this.blockScroll,
                                    contentStyle: this.contentStyle,
                                    placement: this.placement,
                                    scrollbarProps: this.scrollbarProps,
                                    show: this.show,
                                    displayDirective: this.displayDirective,
                                    nativeScrollbar: this.nativeScrollbar,
                                    onAfterEnter: this.onAfterEnter,
                                    onAfterLeave: this.onAfterLeave,
                                    trapFocus: this.trapFocus,
                                    autoFocus: this.autoFocus,
                                    resizable: this.resizable,
                                    showMask: this.showMask,
                                    onEsc: this.handleEsc,
                                    onClickoutside: this.handleMaskClick,
                                }),
                                this.$slots
                            )
                        ),
                        [
                            [
                                zindexable,
                                { zIndex: this.zIndex, enabled: this.show },
                            ],
                        ]
                    );
                },
            }
        );
    },
});
