import type { CSSProperties, PropType, Ref, TransitionProps, VNode } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type {
    ArrowScopedSlotProps,
    DotScopedSlotProps,
    Size,
} from './interface';
declare const transitionProperties: readonly [
    'transitionDuration',
    'transitionTimingFunction'
];
type TransitionStyle = Partial<
    Pick<CSSProperties, (typeof transitionProperties)[number]>
>;
export declare const carouselProps: {
    defaultIndex: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: NumberConstructor;
    showArrow: BooleanConstructor;
    dotType: {
        type: PropType<'dot' | 'line'>;
        default: string;
    };
    dotPlacement: {
        type: PropType<'left' | 'right' | 'bottom' | 'top'>;
        default: string;
    };
    slidesPerView: {
        type: PropType<number | 'auto'>;
        default: number;
    };
    spaceBetween: {
        type: NumberConstructor;
        default: number;
    };
    centeredSlides: BooleanConstructor;
    direction: {
        type: PropType<'horizontal' | 'vertical'>;
        default: string;
    };
    autoplay: BooleanConstructor;
    interval: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: PropType<'card' | 'slide' | 'fade' | 'custom'>;
        default: string;
    };
    showDots: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: PropType<'click' | 'hover'>;
        default: string;
    };
    transitionStyle: {
        type: PropType<
            Partial<
                Pick<
                    CSSProperties,
                    'transitionDuration' | 'transitionTimingFunction'
                >
            >
        >;
        default: () => TransitionStyle;
    };
    transitionProps: PropType<TransitionProps>;
    draggable: BooleanConstructor;
    prevSlideStyle: PropType<string | CSSProperties>;
    nextSlideStyle: PropType<string | CSSProperties>;
    touchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    mousewheel: BooleanConstructor;
    keyboard: BooleanConstructor;
    'onUpdate:currentIndex': PropType<
        (currentIndex: number, lastIndex: number) => void
    >;
    onUpdateCurrentIndex: PropType<
        (currentIndex: number, lastIndex: number) => void
    >;
    theme: PropType<
        import('../../_mixins').Theme<
            'Carousel',
            {
                dotSize: string;
                dotColor: string;
                dotColorActive: string;
                dotColorFocus: string;
                dotLineWidth: string;
                dotLineWidthActive: string;
                arrowColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Carousel',
                {
                    dotSize: string;
                    dotColor: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    dotLineWidth: string;
                    dotLineWidthActive: string;
                    arrowColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Carousel',
                {
                    dotSize: string;
                    dotColor: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    dotLineWidth: string;
                    dotLineWidthActive: string;
                    arrowColor: string;
                },
                any
            >
        >
    >;
};
export type CarouselProps = ExtractPublicPropTypes<typeof carouselProps>;
declare const _default: import('vue').DefineComponent<
    {
        defaultIndex: {
            type: NumberConstructor;
            default: number;
        };
        currentIndex: NumberConstructor;
        showArrow: BooleanConstructor;
        dotType: {
            type: PropType<'dot' | 'line'>;
            default: string;
        };
        dotPlacement: {
            type: PropType<'left' | 'right' | 'bottom' | 'top'>;
            default: string;
        };
        slidesPerView: {
            type: PropType<number | 'auto'>;
            default: number;
        };
        spaceBetween: {
            type: NumberConstructor;
            default: number;
        };
        centeredSlides: BooleanConstructor;
        direction: {
            type: PropType<'horizontal' | 'vertical'>;
            default: string;
        };
        autoplay: BooleanConstructor;
        interval: {
            type: NumberConstructor;
            default: number;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        effect: {
            type: PropType<'card' | 'slide' | 'fade' | 'custom'>;
            default: string;
        };
        showDots: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: PropType<'click' | 'hover'>;
            default: string;
        };
        transitionStyle: {
            type: PropType<
                Partial<
                    Pick<
                        CSSProperties,
                        'transitionDuration' | 'transitionTimingFunction'
                    >
                >
            >;
            default: () => Partial<
                Pick<
                    CSSProperties,
                    'transitionDuration' | 'transitionTimingFunction'
                >
            >;
        };
        transitionProps: PropType<TransitionProps>;
        draggable: BooleanConstructor;
        prevSlideStyle: PropType<string | CSSProperties>;
        nextSlideStyle: PropType<string | CSSProperties>;
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        mousewheel: BooleanConstructor;
        keyboard: BooleanConstructor;
        'onUpdate:currentIndex': PropType<
            (currentIndex: number, lastIndex: number) => void
        >;
        onUpdateCurrentIndex: PropType<
            (currentIndex: number, lastIndex: number) => void
        >;
        theme: PropType<
            import('../../_mixins').Theme<
                'Carousel',
                {
                    dotSize: string;
                    dotColor: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    dotLineWidth: string;
                    dotLineWidthActive: string;
                    arrowColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Carousel',
                    {
                        dotSize: string;
                        dotColor: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        dotLineWidth: string;
                        dotLineWidthActive: string;
                        arrowColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Carousel',
                    {
                        dotSize: string;
                        dotColor: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        dotLineWidth: string;
                        dotLineWidthActive: string;
                        arrowColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-dot-color': string;
                  '--n-dot-color-focus': string;
                  '--n-dot-color-active': string;
                  '--n-dot-size': string;
                  '--n-dot-line-width': string;
                  '--n-dot-line-width-active': string;
                  '--n-arrow-color': string;
              }>
            | undefined;
        themeClass: Ref<string> | undefined;
        onRender: (() => void) | undefined;
        getCurrentIndex: () => number;
        to: (index: number) => void;
        prev: () => void;
        next: () => void;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        selfElRef: Ref<HTMLDivElement | null>;
        slidesElRef: Ref<HTMLDivElement | null>;
        slideVNodes: {
            value: VNode<
                import('vue').RendererNode,
                import('vue').RendererElement,
                {
                    [key: string]: any;
                }
            >[];
        };
        duplicatedable: globalThis.ComputedRef<boolean>;
        userWantsControl: globalThis.ComputedRef<boolean>;
        autoSlideSize: globalThis.ComputedRef<boolean>;
        displayIndex: globalThis.ComputedRef<number>;
        realIndex: globalThis.ComputedRef<number>;
        slideStyles: globalThis.ComputedRef<
            CSSProperties[] | (Partial<Size> | undefined)[]
        >;
        translateStyle: Ref<CSSProperties>;
        slidesControlListeners: globalThis.ComputedRef<{
            onTouchstartPassive:
                | ((event: MouseEvent | TouchEvent) => void)
                | undefined;
            onMousedown: ((event: MouseEvent | TouchEvent) => void) | undefined;
            onWheel: ((event: WheelEvent) => void) | undefined;
        }>;
        handleTransitionEnd: () => void;
        handleResize: () => void;
        handleSlideResize: () => void;
        handleMouseenter: () => void;
        handleMouseleave: () => void;
        isActive: (index: number) => boolean;
        arrowSlotProps: globalThis.ComputedRef<ArrowScopedSlotProps>;
        dotSlotProps: globalThis.ComputedRef<DotScopedSlotProps>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            defaultIndex: {
                type: NumberConstructor;
                default: number;
            };
            currentIndex: NumberConstructor;
            showArrow: BooleanConstructor;
            dotType: {
                type: PropType<'dot' | 'line'>;
                default: string;
            };
            dotPlacement: {
                type: PropType<'left' | 'right' | 'bottom' | 'top'>;
                default: string;
            };
            slidesPerView: {
                type: PropType<number | 'auto'>;
                default: number;
            };
            spaceBetween: {
                type: NumberConstructor;
                default: number;
            };
            centeredSlides: BooleanConstructor;
            direction: {
                type: PropType<'horizontal' | 'vertical'>;
                default: string;
            };
            autoplay: BooleanConstructor;
            interval: {
                type: NumberConstructor;
                default: number;
            };
            loop: {
                type: BooleanConstructor;
                default: boolean;
            };
            effect: {
                type: PropType<'card' | 'slide' | 'fade' | 'custom'>;
                default: string;
            };
            showDots: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: PropType<'click' | 'hover'>;
                default: string;
            };
            transitionStyle: {
                type: PropType<
                    Partial<
                        Pick<
                            CSSProperties,
                            'transitionDuration' | 'transitionTimingFunction'
                        >
                    >
                >;
                default: () => Partial<
                    Pick<
                        CSSProperties,
                        'transitionDuration' | 'transitionTimingFunction'
                    >
                >;
            };
            transitionProps: PropType<TransitionProps>;
            draggable: BooleanConstructor;
            prevSlideStyle: PropType<string | CSSProperties>;
            nextSlideStyle: PropType<string | CSSProperties>;
            touchable: {
                type: BooleanConstructor;
                default: boolean;
            };
            mousewheel: BooleanConstructor;
            keyboard: BooleanConstructor;
            'onUpdate:currentIndex': PropType<
                (currentIndex: number, lastIndex: number) => void
            >;
            onUpdateCurrentIndex: PropType<
                (currentIndex: number, lastIndex: number) => void
            >;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Carousel',
                    {
                        dotSize: string;
                        dotColor: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        dotLineWidth: string;
                        dotLineWidthActive: string;
                        arrowColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Carousel',
                        {
                            dotSize: string;
                            dotColor: string;
                            dotColorActive: string;
                            dotColorFocus: string;
                            dotLineWidth: string;
                            dotLineWidthActive: string;
                            arrowColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Carousel',
                        {
                            dotSize: string;
                            dotColor: string;
                            dotColorActive: string;
                            dotColorFocus: string;
                            dotLineWidth: string;
                            dotLineWidthActive: string;
                            arrowColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        direction: 'horizontal' | 'vertical';
        draggable: boolean;
        autoplay: boolean;
        loop: boolean;
        trigger: 'click' | 'hover';
        showArrow: boolean;
        keyboard: boolean;
        defaultIndex: number;
        dotType: 'dot' | 'line';
        dotPlacement: 'left' | 'right' | 'bottom' | 'top';
        slidesPerView: number | 'auto';
        spaceBetween: number;
        centeredSlides: boolean;
        interval: number;
        effect: 'card' | 'slide' | 'fade' | 'custom';
        showDots: boolean;
        transitionStyle: Partial<
            Pick<
                CSSProperties,
                'transitionDuration' | 'transitionTimingFunction'
            >
        >;
        touchable: boolean;
        mousewheel: boolean;
    },
    {}
>;
export default _default;
