import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const resultProps: {
    size: {
        type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        default: string;
    };
    status: {
        type: PropType<
            | '500'
            | 'error'
            | 'info'
            | 'success'
            | 'warning'
            | '404'
            | '403'
            | '418'
        >;
        default: string;
    };
    title: StringConstructor;
    description: StringConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
            'Result',
            {
                lineHeight: string;
                titleFontWeight: string;
                titleTextColor: string;
                textColor: string;
                iconColorError: string;
                iconColorSuccess: string;
                iconColorInfo: string;
                iconColorWarning: string;
                titleFontSizeSmall: string;
                titleFontSizeMedium: string;
                titleFontSizeLarge: string;
                titleFontSizeHuge: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                iconSizeSmall: string;
                iconSizeMedium: string;
                iconSizeLarge: string;
                iconSizeHuge: string;
                iconColor418: undefined;
                iconColor404: undefined;
                iconColor403: undefined;
                iconColor500: undefined;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Result',
                {
                    lineHeight: string;
                    titleFontWeight: string;
                    titleTextColor: string;
                    textColor: string;
                    iconColorError: string;
                    iconColorSuccess: string;
                    iconColorInfo: string;
                    iconColorWarning: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                    iconColor418: undefined;
                    iconColor404: undefined;
                    iconColor403: undefined;
                    iconColor500: undefined;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Result',
                {
                    lineHeight: string;
                    titleFontWeight: string;
                    titleTextColor: string;
                    textColor: string;
                    iconColorError: string;
                    iconColorSuccess: string;
                    iconColorInfo: string;
                    iconColorWarning: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                    iconColor418: undefined;
                    iconColor404: undefined;
                    iconColor403: undefined;
                    iconColor500: undefined;
                },
                any
            >
        >
    >;
};
export type ResultProps = ExtractPublicPropTypes<typeof resultProps>;
declare const _default: import('vue').DefineComponent<
    {
        size: {
            type: PropType<'small' | 'medium' | 'large' | 'huge'>;
            default: string;
        };
        status: {
            type: PropType<
                | '500'
                | 'error'
                | 'info'
                | 'success'
                | 'warning'
                | '404'
                | '403'
                | '418'
            >;
            default: string;
        };
        title: StringConstructor;
        description: StringConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
                'Result',
                {
                    lineHeight: string;
                    titleFontWeight: string;
                    titleTextColor: string;
                    textColor: string;
                    iconColorError: string;
                    iconColorSuccess: string;
                    iconColorInfo: string;
                    iconColorWarning: string;
                    titleFontSizeSmall: string;
                    titleFontSizeMedium: string;
                    titleFontSizeLarge: string;
                    titleFontSizeHuge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                    iconColor418: undefined;
                    iconColor404: undefined;
                    iconColor403: undefined;
                    iconColor500: undefined;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Result',
                    {
                        lineHeight: string;
                        titleFontWeight: string;
                        titleTextColor: string;
                        textColor: string;
                        iconColorError: string;
                        iconColorSuccess: string;
                        iconColorInfo: string;
                        iconColorWarning: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                        iconColor418: undefined;
                        iconColor404: undefined;
                        iconColor403: undefined;
                        iconColor500: undefined;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Result',
                    {
                        lineHeight: string;
                        titleFontWeight: string;
                        titleTextColor: string;
                        textColor: string;
                        iconColorError: string;
                        iconColorSuccess: string;
                        iconColorInfo: string;
                        iconColorWarning: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                        iconColor418: undefined;
                        iconColor404: undefined;
                        iconColor403: undefined;
                        iconColor500: undefined;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-font-size': string;
                  '--n-icon-size': string;
                  '--n-line-height': string;
                  '--n-text-color': string;
                  '--n-title-font-size': string;
                  '--n-title-font-weight': string;
                  '--n-title-text-color': string;
                  '--n-icon-color': string;
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
            size: {
                type: PropType<'small' | 'medium' | 'large' | 'huge'>;
                default: string;
            };
            status: {
                type: PropType<
                    | '500'
                    | 'error'
                    | 'info'
                    | 'success'
                    | 'warning'
                    | '404'
                    | '403'
                    | '418'
                >;
                default: string;
            };
            title: StringConstructor;
            description: StringConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Result',
                    {
                        lineHeight: string;
                        titleFontWeight: string;
                        titleTextColor: string;
                        textColor: string;
                        iconColorError: string;
                        iconColorSuccess: string;
                        iconColorInfo: string;
                        iconColorWarning: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                        iconColor418: undefined;
                        iconColor404: undefined;
                        iconColor403: undefined;
                        iconColor500: undefined;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Result',
                        {
                            lineHeight: string;
                            titleFontWeight: string;
                            titleTextColor: string;
                            textColor: string;
                            iconColorError: string;
                            iconColorSuccess: string;
                            iconColorInfo: string;
                            iconColorWarning: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                            iconColor418: undefined;
                            iconColor404: undefined;
                            iconColor403: undefined;
                            iconColor500: undefined;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Result',
                        {
                            lineHeight: string;
                            titleFontWeight: string;
                            titleTextColor: string;
                            textColor: string;
                            iconColorError: string;
                            iconColorSuccess: string;
                            iconColorInfo: string;
                            iconColorWarning: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                            iconColor418: undefined;
                            iconColor404: undefined;
                            iconColor403: undefined;
                            iconColor500: undefined;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        size: 'small' | 'medium' | 'large' | 'huge';
        status:
            | '500'
            | 'error'
            | 'info'
            | 'success'
            | 'warning'
            | '404'
            | '403'
            | '418';
    },
    {}
>;
export default _default;
