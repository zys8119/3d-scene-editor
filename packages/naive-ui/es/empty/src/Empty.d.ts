import { PropType, VNodeChild } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const emptyProps: {
    description: StringConstructor;
    showDescription: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        default: string;
    };
    renderIcon: PropType<() => VNodeChild>;
    theme: PropType<
        import('../../_mixins').Theme<
            'Empty',
            {
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                textColor: string;
                iconColor: string;
                extraTextColor: string;
                iconSizeSmall: string;
                iconSizeMedium: string;
                iconSizeLarge: string;
                iconSizeHuge: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Empty',
                {
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    textColor: string;
                    iconColor: string;
                    extraTextColor: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Empty',
                {
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    textColor: string;
                    iconColor: string;
                    extraTextColor: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                },
                any
            >
        >
    >;
};
export type EmptyProps = ExtractPublicPropTypes<typeof emptyProps>;
declare const _default: import('vue').DefineComponent<
    {
        description: StringConstructor;
        showDescription: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<'small' | 'medium' | 'large' | 'huge'>;
            default: string;
        };
        renderIcon: PropType<() => VNodeChild>;
        theme: PropType<
            import('../../_mixins').Theme<
                'Empty',
                {
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    fontSizeHuge: string;
                    textColor: string;
                    iconColor: string;
                    extraTextColor: string;
                    iconSizeSmall: string;
                    iconSizeMedium: string;
                    iconSizeLarge: string;
                    iconSizeHuge: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Empty',
                    {
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        textColor: string;
                        iconColor: string;
                        extraTextColor: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Empty',
                    {
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        textColor: string;
                        iconColor: string;
                        extraTextColor: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedRenderIcon: globalThis.ComputedRef<() => VNodeChild>;
        localizedDescription: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-icon-size': string;
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-text-color': string;
                  '--n-icon-color': string;
                  '--n-extra-text-color': string;
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
            description: StringConstructor;
            showDescription: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            size: {
                type: PropType<'small' | 'medium' | 'large' | 'huge'>;
                default: string;
            };
            renderIcon: PropType<() => VNodeChild>;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Empty',
                    {
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        textColor: string;
                        iconColor: string;
                        extraTextColor: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        iconSizeHuge: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Empty',
                        {
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            textColor: string;
                            iconColor: string;
                            extraTextColor: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Empty',
                        {
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            textColor: string;
                            iconColor: string;
                            extraTextColor: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            iconSizeHuge: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        size: 'small' | 'medium' | 'large' | 'huge';
        showDescription: boolean;
        showIcon: boolean;
    },
    {}
>;
export default _default;
