import { ExtractPublicPropTypes } from '../../_utils';
export declare const iconWrapperProps: {
    readonly size: {
        readonly type: NumberConstructor;
        readonly default: 24;
    };
    readonly borderRadius: {
        readonly type: NumberConstructor;
        readonly default: 6;
    };
    readonly color: StringConstructor;
    readonly iconColor: StringConstructor;
    readonly theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'IconWrapper',
            {
                color: string;
                iconColor: string;
            },
            any
        >
    >;
    readonly themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'IconWrapper',
                {
                    color: string;
                    iconColor: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'IconWrapper',
                {
                    color: string;
                    iconColor: string;
                },
                any
            >
        >
    >;
};
export type IconWrapperProps = ExtractPublicPropTypes<typeof iconWrapperProps>;
export declare const NIconWrapper: import('vue').DefineComponent<
    {
        readonly size: {
            readonly type: NumberConstructor;
            readonly default: 24;
        };
        readonly borderRadius: {
            readonly type: NumberConstructor;
            readonly default: 6;
        };
        readonly color: StringConstructor;
        readonly iconColor: StringConstructor;
        readonly theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'IconWrapper',
                {
                    color: string;
                    iconColor: string;
                },
                any
            >
        >;
        readonly themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'IconWrapper',
                    {
                        color: string;
                        iconColor: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'IconWrapper',
                    {
                        color: string;
                        iconColor: string;
                    },
                    any
                >
            >
        >;
    },
    () => JSX.Element,
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
                readonly default: 24;
            };
            readonly borderRadius: {
                readonly type: NumberConstructor;
                readonly default: 6;
            };
            readonly color: StringConstructor;
            readonly iconColor: StringConstructor;
            readonly theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'IconWrapper',
                    {
                        color: string;
                        iconColor: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'IconWrapper',
                        {
                            color: string;
                            iconColor: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'IconWrapper',
                        {
                            color: string;
                            iconColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly size: number;
        readonly borderRadius: number;
    },
    {}
>;
