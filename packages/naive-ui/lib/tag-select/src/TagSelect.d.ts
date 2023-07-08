import { PropType, ExtractPropTypes, CSSProperties } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const tagSelectProps: {
    spaceProps: PropType<
        ExtractPropTypes<{
            readonly align: PropType<
                | 'start'
                | 'end'
                | 'stretch'
                | 'center'
                | 'flex-end'
                | 'flex-start'
                | 'baseline'
            >;
            readonly justify: {
                readonly type: PropType<
                    import('../../space/src/Space').Justify
                >;
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
    >;
    modelValue: {
        type: StringConstructor;
        default: undefined;
    };
    expandable: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'TagSelect',
            {
                tagSelectHandleColor: string;
                itemHeight: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'TagSelect',
                {
                    tagSelectHandleColor: string;
                    itemHeight: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'TagSelect',
                {
                    tagSelectHandleColor: string;
                    itemHeight: string;
                },
                any
            >
        >
    >;
};
export declare const tagInputEmits: {
    'update:modelValue': (
        value: string | string[]
    ) => string | boolean | string[];
    change: (value: string | null | undefined) => string | null | undefined;
};
export type TagSelectProps = ExtractPublicPropTypes<typeof tagSelectProps>;
declare const _default: import('vue').DefineComponent<
    {
        spaceProps: PropType<
            ExtractPropTypes<{
                readonly align: PropType<
                    | 'start'
                    | 'end'
                    | 'stretch'
                    | 'center'
                    | 'flex-end'
                    | 'flex-start'
                    | 'baseline'
                >;
                readonly justify: {
                    readonly type: PropType<
                        import('../../space/src/Space').Justify
                    >;
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
        >;
        modelValue: {
            type: StringConstructor;
            default: undefined;
        };
        expandable: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'TagSelect',
                {
                    tagSelectHandleColor: string;
                    itemHeight: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'TagSelect',
                    {
                        tagSelectHandleColor: string;
                        itemHeight: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'TagSelect',
                    {
                        tagSelectHandleColor: string;
                        itemHeight: string;
                    },
                    any
                >
            >
        >;
    },
    {
        value: any;
        expand: globalThis.Ref<boolean>;
        hideTags: globalThis.Ref<boolean>;
        tagSelectRef: globalThis.Ref<HTMLElement | undefined>;
        spaceRef: globalThis.Ref<HTMLElement | undefined>;
        getState: () => void;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars: globalThis.ComputedRef<{
            '--n-tag-select-item-height': string;
            '--n-tag-select-handle-text-color': string;
        }>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        'update:modelValue': (
            value: string | string[]
        ) => string | boolean | string[];
        change: (value: string | null | undefined) => string | null | undefined;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        ExtractPropTypes<{
            spaceProps: PropType<
                ExtractPropTypes<{
                    readonly align: PropType<
                        | 'start'
                        | 'end'
                        | 'stretch'
                        | 'center'
                        | 'flex-end'
                        | 'flex-start'
                        | 'baseline'
                    >;
                    readonly justify: {
                        readonly type: PropType<
                            import('../../space/src/Space').Justify
                        >;
                        readonly default: 'start';
                    };
                    readonly inline: BooleanConstructor;
                    readonly vertical: BooleanConstructor;
                    readonly size: {
                        readonly type: PropType<
                            | number
                            | [number, number]
                            | 'small'
                            | 'medium'
                            | 'large'
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
            >;
            modelValue: {
                type: StringConstructor;
                default: undefined;
            };
            expandable: {
                type: BooleanConstructor;
                default: boolean;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'TagSelect',
                    {
                        tagSelectHandleColor: string;
                        itemHeight: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'TagSelect',
                        {
                            tagSelectHandleColor: string;
                            itemHeight: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'TagSelect',
                        {
                            tagSelectHandleColor: string;
                            itemHeight: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onChange?: ((value: string | null | undefined) => any) | undefined;
        'onUpdate:modelValue'?: ((value: string | string[]) => any) | undefined;
    },
    {
        expandable: boolean;
        modelValue: string;
    },
    {}
>;
export default _default;
