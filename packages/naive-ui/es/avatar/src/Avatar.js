import {
    h,
    ref,
    computed,
    defineComponent,
    inject,
    watch,
    watchEffect,
    onMounted,
    onBeforeUnmount,
} from 'vue';
import { VResizeObserver } from 'vueuc';
import { isImageSupportNativeLazy } from '../../_utils/env/is-native-lazy-load';
import { observeIntersection } from '../../image/src/utils';
import { tagInjectionKey } from '../../tag/src/Tag';
import { useConfig, useTheme, useThemeClass } from '../../_mixins';
import {
    createKey,
    color2Class,
    resolveWrappedSlot,
    resolveSlot,
} from '../../_utils';
import { avatarLight } from '../styles';
import { avatarGroupInjectionKey } from './context';
import style from './styles/index.cssr';
export const avatarProps = Object.assign(Object.assign({}, useTheme.props), {
    size: [String, Number],
    src: String,
    circle: {
        type: Boolean,
        default: void 0,
    },
    objectFit: String,
    round: {
        type: Boolean,
        default: void 0,
    },
    bordered: {
        type: Boolean,
        default: void 0,
    },
    onError: Function,
    fallbackSrc: String,
    intersectionObserverOptions: Object,
    lazy: Boolean,
    onLoad: Function,
    renderPlaceholder: Function,
    renderFallback: Function,
    imgProps: Object,
    color: String,
});
export default defineComponent({
    name: 'Avatar',
    props: avatarProps,
    setup(props) {
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig(props);
        const hasLoadErrorRef = ref(false);
        let memoedTextHtml = null;
        const textRef = ref(null);
        const selfRef = ref(null);
        const fitTextTransform = () => {
            const { value: textEl } = textRef;
            if (textEl) {
                if (
                    memoedTextHtml === null ||
                    memoedTextHtml !== textEl.innerHTML
                ) {
                    memoedTextHtml = textEl.innerHTML;
                    const { value: selfEl } = selfRef;
                    if (selfEl) {
                        const { offsetWidth: elWidth, offsetHeight: elHeight } =
                            selfEl;
                        const {
                            offsetWidth: textWidth,
                            offsetHeight: textHeight,
                        } = textEl;
                        const radix = 0.9;
                        const ratio = Math.min(
                            (elWidth / textWidth) * radix,
                            (elHeight / textHeight) * radix,
                            1
                        );
                        textEl.style.transform = `translateX(-50%) translateY(-50%) scale(${ratio})`;
                    }
                }
            }
        };
        const NAvatarGroup = inject(avatarGroupInjectionKey, null);
        const mergedSizeRef = computed(() => {
            const { size } = props;
            if (size) return size;
            const { size: avatarGroupSize } = NAvatarGroup || {};
            if (avatarGroupSize) return avatarGroupSize;
            return 'medium';
        });
        const themeRef = useTheme(
            'Avatar',
            '-avatar',
            style,
            avatarLight,
            props,
            mergedClsPrefixRef
        );
        const TagInjection = inject(tagInjectionKey, null);
        const mergedRoundRef = computed(() => {
            if (NAvatarGroup) return true;
            const { round, circle } = props;
            if (round !== void 0 || circle !== void 0) return round || circle;
            if (TagInjection) {
                return TagInjection.roundRef.value;
            }
            return false;
        });
        const mergedBorderedRef = computed(() => {
            if (NAvatarGroup) return true;
            return props.bordered || false;
        });
        const handleError = (e) => {
            var _a;
            if (!shouldStartLoadingRef.value) return;
            hasLoadErrorRef.value = true;
            const { onError, imgProps } = props;
            (_a =
                imgProps === null || imgProps === void 0
                    ? void 0
                    : imgProps.onError) === null || _a === void 0
                ? void 0
                : _a.call(imgProps, e);
            if (onError) {
                onError(e);
            }
        };
        watch(
            () => props.src,
            () => (hasLoadErrorRef.value = false)
        );
        const cssVarsRef = computed(() => {
            const size = mergedSizeRef.value;
            const round = mergedRoundRef.value;
            const bordered = mergedBorderedRef.value;
            const { color: propColor } = props;
            const {
                self: {
                    borderRadius,
                    fontSize,
                    color,
                    border,
                    colorModal,
                    colorPopover,
                },
                common: { cubicBezierEaseInOut },
            } = themeRef.value;
            let height;
            if (typeof size === 'number') {
                height = `${size}px`;
            } else {
                height = themeRef.value.self[createKey('height', size)];
            }
            return {
                '--n-font-size': fontSize,
                '--n-border': bordered ? border : 'none',
                '--n-border-radius': round ? '50%' : borderRadius,
                '--n-color': propColor || color,
                '--n-color-modal': propColor || colorModal,
                '--n-color-popover': propColor || colorPopover,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-merged-size': `var(--n-avatar-size-override, ${height})`,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass(
                  'avatar',
                  computed(() => {
                      const size = mergedSizeRef.value;
                      const round = mergedRoundRef.value;
                      const bordered = mergedBorderedRef.value;
                      const { color } = props;
                      let hash = '';
                      if (size) {
                          if (typeof size === 'number') {
                              hash += `a${size}`;
                          } else {
                              hash += size[0];
                          }
                      }
                      if (round) {
                          hash += 'b';
                      }
                      if (bordered) {
                          hash += 'c';
                      }
                      if (color) {
                          hash += color2Class(color);
                      }
                      return hash;
                  }),
                  cssVarsRef,
                  props
              )
            : void 0;
        const shouldStartLoadingRef = ref(!props.lazy);
        onMounted(() => {
            if (isImageSupportNativeLazy) {
                return;
            }
            let unobserve;
            const stopWatchHandle = watchEffect(() => {
                unobserve === null || unobserve === void 0
                    ? void 0
                    : unobserve();
                unobserve = void 0;
                if (props.lazy) {
                    unobserve = observeIntersection(
                        selfRef.value,
                        props.intersectionObserverOptions,
                        shouldStartLoadingRef
                    );
                }
            });
            onBeforeUnmount(() => {
                stopWatchHandle();
                unobserve === null || unobserve === void 0
                    ? void 0
                    : unobserve();
            });
        });
        const loadedRef = ref(!props.lazy);
        return {
            textRef,
            selfRef,
            mergedRoundRef,
            mergedClsPrefix: mergedClsPrefixRef,
            fitTextTransform,
            cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
            themeClass:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.themeClass,
            onRender:
                themeClassHandle === null || themeClassHandle === void 0
                    ? void 0
                    : themeClassHandle.onRender,
            hasLoadError: hasLoadErrorRef,
            handleError,
            shouldStartLoading: shouldStartLoadingRef,
            loaded: loadedRef,
            mergedOnLoad: (e) => {
                var _a;
                const { onLoad, imgProps } = props;
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
                (_a =
                    imgProps === null || imgProps === void 0
                        ? void 0
                        : imgProps.onLoad) === null || _a === void 0
                    ? void 0
                    : _a.call(imgProps, e);
                loadedRef.value = true;
            },
        };
    },
    render() {
        var _a, _b;
        const {
            $slots,
            src,
            mergedClsPrefix,
            lazy,
            onRender,
            mergedOnLoad,
            shouldStartLoading,
            loaded,
            hasLoadError,
        } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        let img;
        const placeholderNode =
            !loaded &&
            !hasLoadError &&
            (this.renderPlaceholder
                ? this.renderPlaceholder()
                : (_b = (_a = this.$slots).placeholder) === null ||
                  _b === void 0
                ? void 0
                : _b.call(_a));
        if (this.hasLoadError) {
            img = this.renderFallback
                ? this.renderFallback()
                : resolveSlot($slots.fallback, () => [
                      h('img', {
                          src: this.fallbackSrc,
                          style: { objectFit: this.objectFit },
                      }),
                  ]);
        } else {
            img = resolveWrappedSlot($slots.default, (children) => {
                if (children) {
                    return h(
                        VResizeObserver,
                        { onResize: this.fitTextTransform },
                        {
                            default: () =>
                                h(
                                    'span',
                                    {
                                        ref: 'textRef',
                                        class: `${mergedClsPrefix}-avatar__text`,
                                    },
                                    children
                                ),
                        }
                    );
                } else if (src) {
                    const { imgProps } = this;
                    return h(
                        'img',
                        Object.assign(Object.assign({}, imgProps), {
                            loading:
                                isImageSupportNativeLazy &&
                                !this.intersectionObserverOptions &&
                                lazy
                                    ? 'lazy'
                                    : 'eager',
                            src: isImageSupportNativeLazy
                                ? src
                                : shouldStartLoading || loaded
                                ? src
                                : void 0,
                            onLoad: mergedOnLoad,
                            'data-image-src': src,
                            onError: this.handleError,
                            style: [
                                imgProps === null || imgProps === void 0
                                    ? void 0
                                    : imgProps.style,
                                { objectFit: this.objectFit },
                                placeholderNode
                                    ? {
                                          height: '0',
                                          width: '0',
                                          visibility: 'hidden',
                                          position: 'absolute',
                                      }
                                    : '',
                            ],
                        })
                    );
                }
            });
        }
        return h(
            'span',
            {
                ref: 'selfRef',
                class: [`${mergedClsPrefix}-avatar`, this.themeClass],
                style: this.cssVars,
            },
            img,
            lazy && placeholderNode
        );
    },
});
