import { ExtractPropTypes } from 'vue';
import { SpaceProps } from '../../../space';
import { CheckboxMixedOption } from './interface';
export declare const proCheckboxProps: {
    readonly options: globalThis.PropType<CheckboxMixedOption[]>;
    readonly space: globalThis.PropType<SpaceProps>;
    readonly theme: globalThis.PropType<
        import('../../../_mixins').Theme<
            'ProCheckbox',
            {
                padding: string;
            },
            any
        >
    >;
    readonly themeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProCheckbox',
                {
                    padding: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProCheckbox',
                {
                    padding: string;
                },
                any
            >
        >
    >;
};
export type ProCheckboxProps = ExtractPropTypes<typeof proCheckboxProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly options: globalThis.PropType<CheckboxMixedOption[]>;
        readonly space: globalThis.PropType<SpaceProps>;
        readonly theme: globalThis.PropType<
            import('../../../_mixins').Theme<
                'ProCheckbox',
                {
                    padding: string;
                },
                any
            >
        >;
        readonly themeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProCheckbox',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProCheckbox',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
        ExtractPropTypes<{
            readonly options: globalThis.PropType<CheckboxMixedOption[]>;
            readonly space: globalThis.PropType<SpaceProps>;
            readonly theme: globalThis.PropType<
                import('../../../_mixins').Theme<
                    'ProCheckbox',
                    {
                        padding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProCheckbox',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProCheckbox',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {},
    {}
>;
export default _default;
