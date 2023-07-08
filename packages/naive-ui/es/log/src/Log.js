import {
    h,
    Transition,
    defineComponent,
    computed,
    provide,
    nextTick,
    ref,
    toRef,
} from 'vue';
import { throttle } from 'lodash-es';
import { useTheme, useHljs, useConfig, useThemeClass } from '../../_mixins';
import { warn } from '../../_utils';
import { NScrollbar } from '../../_internal';
import { NCode } from '../../code';
import { logLight } from '../styles';
import NLogLoader from './LogLoader';
import NLogLine from './LogLine';
import { logInjectionKey } from './context';
import style from './styles/index.cssr';
export const logProps = Object.assign(Object.assign({}, useTheme.props), {
    loading: Boolean,
    trim: Boolean,
    log: String,
    fontSize: {
        type: Number,
        default: 14,
    },
    lines: {
        type: Array,
        default: () => [],
    },
    lineHeight: {
        type: Number,
        default: 1.25,
    },
    language: String,
    rows: {
        type: Number,
        default: 15,
    },
    offsetTop: {
        type: Number,
        default: 0,
    },
    offsetBottom: {
        type: Number,
        default: 0,
    },
    hljs: Object,
    onReachTop: Function,
    onReachBottom: Function,
    onRequireMore: Function,
});
export default defineComponent({
    name: 'Log',
    props: logProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const slientRef = ref(false);
        const highlightRef = computed(() => {
            return props.language !== void 0;
        });
        const styleHeightRef = computed(() => {
            return `calc(${Math.round(
                props.rows * props.lineHeight * props.fontSize
            )}px)`;
        });
        const mergedLinesRef = computed(() => {
            const { log } = props;
            if (log) {
                return log.split('\n');
            }
            return props.lines;
        });
        const scrollbarRef = ref(null);
        const themeRef = useTheme(
            'Log',
            '-log',
            style,
            logLight,
            props,
            mergedClsPrefixRef
        );
        function handleScroll(e) {
            const container = e.target;
            const content = container.firstElementChild;
            if (slientRef.value) {
                void nextTick(() => {
                    slientRef.value = false;
                });
                return;
            }
            const containerHeight = container.offsetHeight;
            const containerScrollTop = container.scrollTop;
            const contentHeight = content.offsetHeight;
            const scrollTop = containerScrollTop;
            const scrollBottom =
                contentHeight - containerScrollTop - containerHeight;
            if (scrollTop <= props.offsetTop) {
                const { onReachTop, onRequireMore } = props;
                if (onRequireMore) onRequireMore('top');
                if (onReachTop) onReachTop();
            }
            if (scrollBottom <= props.offsetBottom) {
                const { onReachBottom, onRequireMore } = props;
                if (onRequireMore) onRequireMore('bottom');
                if (onReachBottom) onReachBottom();
            }
        }
        const handleWheel = throttle(_handleWheel, 300);
        function _handleWheel(e) {
            if (slientRef.value) {
                void nextTick(() => {
                    slientRef.value = false;
                });
                return;
            }
            if (scrollbarRef.value) {
                const { containerRef, contentRef } = scrollbarRef.value;
                if (containerRef && contentRef) {
                    const containerHeight = containerRef.offsetHeight;
                    const containerScrollTop = containerRef.scrollTop;
                    const contentHeight = contentRef.offsetHeight;
                    const scrollTop = containerScrollTop;
                    const scrollBottom =
                        contentHeight - containerScrollTop - containerHeight;
                    const deltaY = e.deltaY;
                    if (scrollTop === 0 && deltaY < 0) {
                        const { onRequireMore } = props;
                        if (onRequireMore) onRequireMore('top');
                    }
                    if (scrollBottom <= 0 && deltaY > 0) {
                        const { onRequireMore } = props;
                        if (onRequireMore) onRequireMore('bottom');
                    }
                }
            }
        }
        function scrollTo(options) {
            const { value: scrollbarInst } = scrollbarRef;
            if (!scrollbarInst) return;
            const { slient, top, position } = options;
            if (slient) {
                slientRef.value = true;
            }
            if (top !== void 0) {
                scrollbarInst.scrollTo({ left: 0, top });
            } else if (position === 'bottom' || position === 'top') {
                scrollbarInst.scrollTo({ position });
            }
        }
        function scrollToTop(slient = false) {
            warn(
                'log',
                "`scrollToTop` is deprecated, please use `scrollTo({ position: 'top'})` instead."
            );
            scrollTo({
                position: 'top',
                slient,
            });
        }
        function scrollToBottom(slient = false) {
            warn(
                'log',
                "`scrollToTop` is deprecated, please use `scrollTo({ position: 'bottom'})` instead."
            );
            scrollTo({
                position: 'bottom',
                slient,
            });
        }
        provide(logInjectionKey, {
            languageRef: toRef(props, 'language'),
            mergedHljsRef: useHljs(props, highlightRef),
            trimRef: toRef(props, 'trim'),
            highlightRef,
        });
        const exportedMethods = {
            scrollTo,
        };
        const cssVarsRef = computed(() => {
            const {
                self: {
                    loaderFontSize,
                    loaderTextColor,
                    loaderColor,
                    loaderBorder,
                    loadingColor,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            return {
                '--n-bezier': cubicBezierEaseInOut,
                '--n-loader-font-size': loaderFontSize,
                '--n-loader-border': loaderBorder,
                '--n-loader-color': loaderColor,
                '--n-loader-text-color': loaderTextColor,
                '--n-loading-color': loadingColor,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('log', void 0, cssVarsRef, props)
            : void 0;
        return Object.assign(Object.assign({}, exportedMethods), {
            mergedClsPrefix: mergedClsPrefixRef,
            scrollbarRef,
            mergedTheme: themeRef,
            styleHeight: styleHeightRef,
            mergedLines: mergedLinesRef,
            scrollToTop,
            scrollToBottom,
            handleWheel,
            handleScroll,
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
        const { mergedClsPrefix, mergedTheme, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return h(
            'div',
            {
                class: [`${mergedClsPrefix}-log`, this.themeClass],
                style: [
                    {
                        lineHeight: this.lineHeight,
                        height: this.styleHeight,
                    },
                    this.cssVars,
                ],
                onWheelPassive: this.handleWheel,
            },
            [
                h(
                    NScrollbar,
                    {
                        ref: 'scrollbarRef',
                        theme: mergedTheme.peers.Scrollbar,
                        themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                        onScroll: this.handleScroll,
                    },
                    {
                        default: () =>
                            h(
                                NCode,
                                {
                                    internalNoHighlight: true,
                                    internalFontSize: this.fontSize,
                                    theme: mergedTheme.peers.Code,
                                    themeOverrides:
                                        mergedTheme.peerOverrides.Code,
                                },
                                {
                                    default: () =>
                                        this.mergedLines.map((line, index) => {
                                            return h(NLogLine, {
                                                key: index,
                                                line,
                                            });
                                        }),
                                }
                            ),
                    }
                ),
                h(
                    Transition,
                    { name: 'fade-in-scale-up-transition' },
                    {
                        default: () =>
                            this.loading
                                ? h(NLogLoader, { clsPrefix: mergedClsPrefix })
                                : null,
                    }
                ),
            ]
        );
    },
});
