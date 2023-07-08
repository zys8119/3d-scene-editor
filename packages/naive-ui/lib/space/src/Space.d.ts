import { PropType, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
type Align =
    | 'stretch'
    | 'baseline'
    | 'start'
    | 'end'
    | 'center'
    | 'flex-end'
    | 'flex-start';
export type Justify =
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly';
export declare const spaceProps: {
    readonly align: PropType<Align>;
    readonly justify: {
        readonly type: PropType<Justify>;
        readonly default: 'start';
    };
    readonly inline: BooleanConstructor;
    readonly vertical: BooleanConstructor;
    readonly size: {
        readonly type: PropType<
            number | [number, number] | 'small' | 'medium' | 'large'
        >;
        readonly default: 'medium';
    };
    readonly wrapItem: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly itemStyle: PropType<string | CSSProperties>;
    readonly wrap: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalUseGap: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Space',
            {
                gapSmall: string;
                gapMedium: string;
                gapLarge: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Space',
                {
                    gapSmall: string;
                    gapMedium: string;
                    gapLarge: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Space',
                {
                    gapSmall: string;
                    gapMedium: string;
                    gapLarge: string;
                },
                any
            >
        >
    >;
};
export type SpaceProps = ExtractPublicPropTypes<typeof spaceProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly align: PropType<Align>;
        readonly justify: {
            readonly type: PropType<Justify>;
            readonly default: 'start';
        };
        readonly inline: BooleanConstructor;
        readonly vertical: BooleanConstructor;
        readonly size: {
            readonly type: PropType<
                number | [number, number] | 'small' | 'medium' | 'large'
            >;
            readonly default: 'medium';
        };
        readonly wrapItem: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly itemStyle: PropType<string | CSSProperties>;
        readonly wrap: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly internalUseGap: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Space',
                {
                    gapSmall: string;
                    gapMedium: string;
                    gapLarge: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Space',
                    {
                        gapSmall: string;
                        gapMedium: string;
                        gapLarge: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Space',
                    {
                        gapSmall: string;
                        gapMedium: string;
                        gapLarge: string;
                    },
                    any
                >
            >
        >;
    },
    {
        useGap: boolean;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        margin: globalThis.ComputedRef<{
            horizontal: number;
            vertical: number;
        }>;
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
            readonly align: PropType<Align>;
            readonly justify: {
                readonly type: PropType<Justify>;
                readonly default: 'start';
            };
            readonly inline: BooleanConstructor;
            readonly vertical: BooleanConstructor;
            readonly size: {
                readonly type: PropType<
                    number | [number, number] | 'small' | 'medium' | 'large'
                >;
                readonly default: 'medium';
            };
            readonly wrapItem: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly itemStyle: PropType<string | CSSProperties>;
            readonly wrap: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly internalUseGap: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Space',
                    {
                        gapSmall: string;
                        gapMedium: string;
                        gapLarge: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Space',
                        {
                            gapSmall: string;
                            gapMedium: string;
                            gapLarge: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Space',
                        {
                            gapSmall: string;
                            gapMedium: string;
                            gapLarge: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly inline: boolean;
        readonly size: number | [number, number] | 'small' | 'medium' | 'large';
        readonly wrap: boolean;
        readonly vertical: boolean;
        readonly justify: Justify;
        readonly wrapItem: boolean;
        readonly internalUseGap: boolean;
    },
    {}
>;
export default _default;
