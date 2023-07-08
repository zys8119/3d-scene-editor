import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const pageHeaderProps: {
    title: StringConstructor;
    subtitle: StringConstructor;
    extra: StringConstructor;
    onBack: PropType<() => void>;
    theme: PropType<
        import('../../_mixins').Theme<
            'PageHeader',
            {
                titleFontWeight: string;
                fontSize: string;
                titleTextColor: string;
                backColor: string;
                backColorHover: string;
                backColorPressed: string;
                subtitleTextColor: string;
                titleFontSize: string;
                backSize: string;
            },
            unknown
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'PageHeader',
                {
                    titleFontWeight: string;
                    fontSize: string;
                    titleTextColor: string;
                    backColor: string;
                    backColorHover: string;
                    backColorPressed: string;
                    subtitleTextColor: string;
                    titleFontSize: string;
                    backSize: string;
                },
                unknown
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'PageHeader',
                {
                    titleFontWeight: string;
                    fontSize: string;
                    titleTextColor: string;
                    backColor: string;
                    backColorHover: string;
                    backColorPressed: string;
                    subtitleTextColor: string;
                    titleFontSize: string;
                    backSize: string;
                },
                unknown
            >
        >
    >;
};
export type PageHeaderProps = ExtractPublicPropTypes<typeof pageHeaderProps>;
declare const _default: import('vue').DefineComponent<
    {
        title: StringConstructor;
        subtitle: StringConstructor;
        extra: StringConstructor;
        onBack: PropType<() => void>;
        theme: PropType<
            import('../../_mixins').Theme<
                'PageHeader',
                {
                    titleFontWeight: string;
                    fontSize: string;
                    titleTextColor: string;
                    backColor: string;
                    backColorHover: string;
                    backColorPressed: string;
                    subtitleTextColor: string;
                    titleFontSize: string;
                    backSize: string;
                },
                unknown
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'PageHeader',
                    {
                        titleFontWeight: string;
                        fontSize: string;
                        titleTextColor: string;
                        backColor: string;
                        backColorHover: string;
                        backColorPressed: string;
                        subtitleTextColor: string;
                        titleFontSize: string;
                        backSize: string;
                    },
                    unknown
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'PageHeader',
                    {
                        titleFontWeight: string;
                        fontSize: string;
                        titleTextColor: string;
                        backColor: string;
                        backColorHover: string;
                        backColorPressed: string;
                        subtitleTextColor: string;
                        titleFontSize: string;
                        backSize: string;
                    },
                    unknown
                >
            >
        >;
    },
    {
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-title-text-color': string;
                  '--n-title-font-size': string;
                  '--n-title-font-weight': string;
                  '--n-font-size': string;
                  '--n-back-size': string;
                  '--n-subtitle-text-color': string;
                  '--n-back-color': string;
                  '--n-back-color-hover': string;
                  '--n-back-color-pressed': string;
                  '--n-bezier': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
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
            title: StringConstructor;
            subtitle: StringConstructor;
            extra: StringConstructor;
            onBack: PropType<() => void>;
            theme: PropType<
                import('../../_mixins').Theme<
                    'PageHeader',
                    {
                        titleFontWeight: string;
                        fontSize: string;
                        titleTextColor: string;
                        backColor: string;
                        backColorHover: string;
                        backColorPressed: string;
                        subtitleTextColor: string;
                        titleFontSize: string;
                        backSize: string;
                    },
                    unknown
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'PageHeader',
                        {
                            titleFontWeight: string;
                            fontSize: string;
                            titleTextColor: string;
                            backColor: string;
                            backColorHover: string;
                            backColorPressed: string;
                            subtitleTextColor: string;
                            titleFontSize: string;
                            backSize: string;
                        },
                        unknown
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'PageHeader',
                        {
                            titleFontWeight: string;
                            fontSize: string;
                            titleTextColor: string;
                            backColor: string;
                            backColorHover: string;
                            backColorPressed: string;
                            subtitleTextColor: string;
                            titleFontSize: string;
                            backSize: string;
                        },
                        unknown
                    >
                >
            >;
        }>
    >,
    {},
    {}
>;
export default _default;
