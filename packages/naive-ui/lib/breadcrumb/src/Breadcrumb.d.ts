import { Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface BreadcrumbInjection {
    separatorRef: Ref<string>;
    mergedClsPrefixRef: Ref<string>;
}
export declare const breadcrumbInjectionKey: globalThis.InjectionKey<BreadcrumbInjection>;
export declare const breadcrumbProps: {
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: '/';
    };
    readonly theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Breadcrumb',
            {
                fontSize: string;
                itemLineHeight: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorPressed: string;
                itemTextColorActive: string;
                itemBorderRadius: string;
                itemColorHover: string;
                itemColorPressed: string;
                separatorColor: string;
                fontWeightActive: string;
            },
            any
        >
    >;
    readonly themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Breadcrumb',
                {
                    fontSize: string;
                    itemLineHeight: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemBorderRadius: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    separatorColor: string;
                    fontWeightActive: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Breadcrumb',
                {
                    fontSize: string;
                    itemLineHeight: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemBorderRadius: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    separatorColor: string;
                    fontWeightActive: string;
                },
                any
            >
        >
    >;
};
export type BreadcrumbProps = ExtractPublicPropTypes<typeof breadcrumbProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: '/';
        };
        readonly theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Breadcrumb',
                {
                    fontSize: string;
                    itemLineHeight: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemBorderRadius: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    separatorColor: string;
                    fontWeightActive: string;
                },
                any
            >
        >;
        readonly themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Breadcrumb',
                    {
                        fontSize: string;
                        itemLineHeight: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemBorderRadius: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        separatorColor: string;
                        fontWeightActive: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Breadcrumb',
                    {
                        fontSize: string;
                        itemLineHeight: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemBorderRadius: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        separatorColor: string;
                        fontWeightActive: string;
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
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-item-text-color': string;
                  '--n-item-text-color-hover': string;
                  '--n-item-text-color-pressed': string;
                  '--n-item-text-color-active': string;
                  '--n-separator-color': string;
                  '--n-item-color-hover': string;
                  '--n-item-color-pressed': string;
                  '--n-item-border-radius': string;
                  '--n-font-weight-active': string;
                  '--n-item-line-height': string;
              }>
            | undefined;
        themeClass: Ref<string> | undefined;
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
            readonly separator: {
                readonly type: StringConstructor;
                readonly default: '/';
            };
            readonly theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Breadcrumb',
                    {
                        fontSize: string;
                        itemLineHeight: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemBorderRadius: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        separatorColor: string;
                        fontWeightActive: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Breadcrumb',
                        {
                            fontSize: string;
                            itemLineHeight: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorPressed: string;
                            itemTextColorActive: string;
                            itemBorderRadius: string;
                            itemColorHover: string;
                            itemColorPressed: string;
                            separatorColor: string;
                            fontWeightActive: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Breadcrumb',
                        {
                            fontSize: string;
                            itemLineHeight: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorPressed: string;
                            itemTextColorActive: string;
                            itemBorderRadius: string;
                            itemColorHover: string;
                            itemColorPressed: string;
                            separatorColor: string;
                            fontWeightActive: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly separator: string;
    },
    {}
>;
export default _default;
