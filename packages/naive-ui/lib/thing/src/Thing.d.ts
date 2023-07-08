import { CSSProperties, PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const thingProps: {
    title: StringConstructor;
    titleExtra: StringConstructor;
    description: StringConstructor;
    descriptionStyle: PropType<string | CSSProperties>;
    content: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    contentIndented: BooleanConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
            'Thing',
            {
                fontSize: string;
                titleTextColor: string;
                textColor: string;
                titleFontWeight: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Thing',
                {
                    fontSize: string;
                    titleTextColor: string;
                    textColor: string;
                    titleFontWeight: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Thing',
                {
                    fontSize: string;
                    titleTextColor: string;
                    textColor: string;
                    titleFontWeight: string;
                },
                any
            >
        >
    >;
};
export type ThingProps = ExtractPublicPropTypes<typeof thingProps>;
declare const _default: import('vue').DefineComponent<
    {
        title: StringConstructor;
        titleExtra: StringConstructor;
        description: StringConstructor;
        descriptionStyle: PropType<string | CSSProperties>;
        content: StringConstructor;
        contentStyle: PropType<string | CSSProperties>;
        contentIndented: BooleanConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
                'Thing',
                {
                    fontSize: string;
                    titleTextColor: string;
                    textColor: string;
                    titleFontWeight: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Thing',
                    {
                        fontSize: string;
                        titleTextColor: string;
                        textColor: string;
                        titleFontWeight: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Thing',
                    {
                        fontSize: string;
                        titleTextColor: string;
                        textColor: string;
                        titleFontWeight: string;
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
            title: StringConstructor;
            titleExtra: StringConstructor;
            description: StringConstructor;
            descriptionStyle: PropType<string | CSSProperties>;
            content: StringConstructor;
            contentStyle: PropType<string | CSSProperties>;
            contentIndented: BooleanConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Thing',
                    {
                        fontSize: string;
                        titleTextColor: string;
                        textColor: string;
                        titleFontWeight: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Thing',
                        {
                            fontSize: string;
                            titleTextColor: string;
                            textColor: string;
                            titleFontWeight: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Thing',
                        {
                            fontSize: string;
                            titleTextColor: string;
                            textColor: string;
                            titleFontWeight: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        contentIndented: boolean;
    },
    {}
>;
export default _default;
