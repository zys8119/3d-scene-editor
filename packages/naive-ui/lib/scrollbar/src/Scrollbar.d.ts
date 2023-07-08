import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface ScrollTo {
    (x: number, y: number): void;
    (options: { left?: number; top?: number; behavior?: ScrollBehavior }): void;
}
export type ScrollBy = ScrollTo;
export interface ScrollbarInst {
    scrollTo: ScrollTo;
    scrollBy: ScrollBy;
}
export declare const scrollbarProps: {
    readonly trigger: PropType<'none' | 'hover'>;
    readonly xScrollable: BooleanConstructor;
    readonly onScroll: PropType<(e: Event) => void>;
    readonly size: NumberConstructor;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Scrollbar',
            {
                color: string;
                colorHover: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
declare const Scrollbar: import('vue').DefineComponent<
    {
        readonly trigger: PropType<'none' | 'hover'>;
        readonly xScrollable: BooleanConstructor;
        readonly onScroll: PropType<(e: Event) => void>;
        readonly size: NumberConstructor;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Scrollbar',
                {
                    color: string;
                    colorHover: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
        scrollbarInstRef: globalThis.Ref<{
            $el: HTMLElement;
            containerRef: HTMLElement | null;
            contentRef: HTMLElement | null;
            containerScrollTop: number;
            syncUnifiedContainer: () => void;
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo;
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy;
            sync: () => void;
            handleMouseEnterWrapper: () => void;
            handleMouseLeaveWrapper: () => void;
        } | null>;
        scrollTo: ScrollTo;
        scrollBy: ScrollBy;
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
            readonly trigger: PropType<'none' | 'hover'>;
            readonly xScrollable: BooleanConstructor;
            readonly onScroll: PropType<(e: Event) => void>;
            readonly size: NumberConstructor;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
        readonly xScrollable: boolean;
    },
    {}
>;
export default Scrollbar;
