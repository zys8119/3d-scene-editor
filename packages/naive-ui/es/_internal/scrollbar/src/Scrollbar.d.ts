import { PropType, CSSProperties, HTMLAttributes } from 'vue';
import type {
    ExtractInternalPropTypes,
    ExtractPublicPropTypes,
} from '../../../_utils';
export interface ScrollTo {
    (x: number, y: number): void;
    (options: {
        left?: number;
        top?: number;
        behavior?: ScrollBehavior;
        debounce?: boolean;
    }): void;
    (options: {
        el: HTMLElement;
        behavior?: ScrollBehavior;
        debounce?: boolean;
    }): void;
    (options: {
        index: number;
        elSize: number;
        behavior?: ScrollBehavior;
        debounce?: boolean;
    }): void;
    (options: {
        position: 'top' | 'bottom';
        behavior?: ScrollBehavior;
        debounce?: boolean;
    }): void;
}
export interface ScrollBy {
    (x: number, y: number): void;
    (options: { left?: number; top?: number; behavior?: ScrollBehavior }): void;
}
export interface ScrollbarInstMethods {
    syncUnifiedContainer: () => void;
    scrollTo: ScrollTo;
    scrollBy: ScrollBy;
    sync: () => void;
    handleMouseEnterWrapper: () => void;
    handleMouseLeaveWrapper: () => void;
}
export interface ScrollbarInst extends ScrollbarInstMethods {
    $el: HTMLElement;
    containerRef: HTMLElement | null;
    contentRef: HTMLElement | null;
    containerScrollTop: number;
}
declare const scrollbarProps: {
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 5;
    };
    readonly duration: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly scrollable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly xScrollable: BooleanConstructor;
    readonly trigger: {
        readonly type: PropType<'none' | 'hover'>;
        readonly default: 'hover';
    };
    readonly useUnifiedContainer: BooleanConstructor;
    readonly triggerDisplayManually: BooleanConstructor;
    readonly container: PropType<() => HTMLElement | null | undefined>;
    readonly content: PropType<() => HTMLElement | null | undefined>;
    readonly containerClass: StringConstructor;
    readonly containerStyle: PropType<string | CSSProperties>;
    readonly contentClass: StringConstructor;
    readonly contentStyle: PropType<string | CSSProperties>;
    readonly horizontalRailStyle: PropType<string | CSSProperties>;
    readonly verticalRailStyle: PropType<string | CSSProperties>;
    readonly onScroll: PropType<(e: Event) => void>;
    readonly onWheel: PropType<(e: WheelEvent) => void>;
    readonly onResize: PropType<(e: ResizeObserverEntry) => void>;
    readonly internalOnUpdateScrollLeft: PropType<(scrollLeft: number) => void>;
    readonly internalHoistYRail: BooleanConstructor;
    readonly theme: PropType<
        import('../../../_mixins').Theme<
            'Scrollbar',
            {
                color: string;
                colorHover: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Scrollbar',
                {
                    color: string;
                    colorHover: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Scrollbar',
                {
                    color: string;
                    colorHover: string;
                },
                any
            >
        >
    >;
};
export type ScrollbarProps = ExtractPublicPropTypes<typeof scrollbarProps>;
export type ScrollbarInternalProps = ExtractInternalPropTypes<
    typeof scrollbarProps
>;
declare const Scrollbar: import('vue').DefineComponent<
    {
        readonly size: {
            readonly type: NumberConstructor;
            readonly default: 5;
        };
        readonly duration: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly scrollable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly xScrollable: BooleanConstructor;
        readonly trigger: {
            readonly type: PropType<'none' | 'hover'>;
            readonly default: 'hover';
        };
        readonly useUnifiedContainer: BooleanConstructor;
        readonly triggerDisplayManually: BooleanConstructor;
        readonly container: PropType<() => HTMLElement | null | undefined>;
        readonly content: PropType<() => HTMLElement | null | undefined>;
        readonly containerClass: StringConstructor;
        readonly containerStyle: PropType<string | CSSProperties>;
        readonly contentClass: StringConstructor;
        readonly contentStyle: PropType<string | CSSProperties>;
        readonly horizontalRailStyle: PropType<string | CSSProperties>;
        readonly verticalRailStyle: PropType<string | CSSProperties>;
        readonly onScroll: PropType<(e: Event) => void>;
        readonly onWheel: PropType<(e: WheelEvent) => void>;
        readonly onResize: PropType<(e: ResizeObserverEntry) => void>;
        readonly internalOnUpdateScrollLeft: PropType<
            (scrollLeft: number) => void
        >;
        readonly internalHoistYRail: BooleanConstructor;
        readonly theme: PropType<
            import('../../../_mixins').Theme<
                'Scrollbar',
                {
                    color: string;
                    colorHover: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        containerScrollTop: globalThis.Ref<number>;
        wrapperRef: globalThis.Ref<HTMLElement | null>;
        containerRef: globalThis.Ref<HTMLElement | null>;
        contentRef: globalThis.Ref<HTMLElement | null>;
        yRailRef: globalThis.Ref<HTMLElement | null>;
        xRailRef: globalThis.Ref<HTMLElement | null>;
        needYBar: globalThis.ComputedRef<boolean>;
        needXBar: globalThis.ComputedRef<boolean>;
        yBarSizePx: globalThis.ComputedRef<string>;
        xBarSizePx: globalThis.ComputedRef<string>;
        yBarTopPx: globalThis.ComputedRef<string>;
        xBarLeftPx: globalThis.ComputedRef<string>;
        isShowXBar: globalThis.ComputedRef<boolean>;
        isShowYBar: globalThis.ComputedRef<boolean>;
        isIos: boolean;
        handleScroll: (e: Event) => void;
        handleContentResize: () => void;
        handleContainerResize: (e: ResizeObserverEntry) => void;
        handleYScrollMouseDown: (e: MouseEvent) => void;
        handleXScrollMouseDown: (e: MouseEvent) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-scrollbar-bezier': string;
                  '--n-scrollbar-color': string;
                  '--n-scrollbar-color-hover': string;
                  '--n-scrollbar-border-radius': string;
                  '--n-scrollbar-width': string;
                  '--n-scrollbar-height': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        syncUnifiedContainer: () => void;
        scrollTo: ScrollTo;
        scrollBy: ScrollBy;
        sync: () => void;
        handleMouseEnterWrapper: () => void;
        handleMouseLeaveWrapper: () => void;
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
            readonly size: {
                readonly type: NumberConstructor;
                readonly default: 5;
            };
            readonly duration: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly scrollable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly xScrollable: BooleanConstructor;
            readonly trigger: {
                readonly type: PropType<'none' | 'hover'>;
                readonly default: 'hover';
            };
            readonly useUnifiedContainer: BooleanConstructor;
            readonly triggerDisplayManually: BooleanConstructor;
            readonly container: PropType<() => HTMLElement | null | undefined>;
            readonly content: PropType<() => HTMLElement | null | undefined>;
            readonly containerClass: StringConstructor;
            readonly containerStyle: PropType<string | CSSProperties>;
            readonly contentClass: StringConstructor;
            readonly contentStyle: PropType<string | CSSProperties>;
            readonly horizontalRailStyle: PropType<string | CSSProperties>;
            readonly verticalRailStyle: PropType<string | CSSProperties>;
            readonly onScroll: PropType<(e: Event) => void>;
            readonly onWheel: PropType<(e: WheelEvent) => void>;
            readonly onResize: PropType<(e: ResizeObserverEntry) => void>;
            readonly internalOnUpdateScrollLeft: PropType<
                (scrollLeft: number) => void
            >;
            readonly internalHoistYRail: BooleanConstructor;
            readonly theme: PropType<
                import('../../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly size: number;
        readonly duration: number;
        readonly scrollable: boolean;
        readonly xScrollable: boolean;
        readonly trigger: 'none' | 'hover';
        readonly useUnifiedContainer: boolean;
        readonly triggerDisplayManually: boolean;
        readonly internalHoistYRail: boolean;
    },
    {}
>;
type NativeScrollbarProps = Omit<HTMLAttributes, keyof ScrollbarInternalProps>;
type MergedProps = Partial<ScrollbarInternalProps & NativeScrollbarProps>;
export default Scrollbar;
export declare const XScrollbar: new () => {
    $props: MergedProps;
};
