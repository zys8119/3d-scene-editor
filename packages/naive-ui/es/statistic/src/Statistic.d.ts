import type { ExtractPublicPropTypes } from '../../_utils';
export declare const statisticProps: {
    tabularNums: BooleanConstructor;
    label: StringConstructor;
    value: (StringConstructor | NumberConstructor)[];
    theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Statistic',
            {
                labelFontSize: string;
                labelFontWeight: string;
                valueFontWeight: string;
                valueFontSize: string;
                labelTextColor: string;
                valuePrefixTextColor: string;
                valueSuffixTextColor: string;
                valueTextColor: string;
            },
            any
        >
    >;
    themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Statistic',
                {
                    labelFontSize: string;
                    labelFontWeight: string;
                    valueFontWeight: string;
                    valueFontSize: string;
                    labelTextColor: string;
                    valuePrefixTextColor: string;
                    valueSuffixTextColor: string;
                    valueTextColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Statistic',
                {
                    labelFontSize: string;
                    labelFontWeight: string;
                    valueFontWeight: string;
                    valueFontSize: string;
                    labelTextColor: string;
                    valuePrefixTextColor: string;
                    valueSuffixTextColor: string;
                    valueTextColor: string;
                },
                any
            >
        >
    >;
};
export type StatisticProps = ExtractPublicPropTypes<typeof statisticProps>;
declare const _default: import('vue').DefineComponent<
    {
        tabularNums: BooleanConstructor;
        label: StringConstructor;
        value: (StringConstructor | NumberConstructor)[];
        theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Statistic',
                {
                    labelFontSize: string;
                    labelFontWeight: string;
                    valueFontWeight: string;
                    valueFontSize: string;
                    labelTextColor: string;
                    valuePrefixTextColor: string;
                    valueSuffixTextColor: string;
                    valueTextColor: string;
                },
                any
            >
        >;
        themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Statistic',
                    {
                        labelFontSize: string;
                        labelFontWeight: string;
                        valueFontWeight: string;
                        valueFontSize: string;
                        labelTextColor: string;
                        valuePrefixTextColor: string;
                        valueSuffixTextColor: string;
                        valueTextColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Statistic',
                    {
                        labelFontSize: string;
                        labelFontWeight: string;
                        valueFontWeight: string;
                        valueFontSize: string;
                        labelTextColor: string;
                        valuePrefixTextColor: string;
                        valueSuffixTextColor: string;
                        valueTextColor: string;
                    },
                    any
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
                  '--n-bezier': string;
                  '--n-label-font-size': string;
                  '--n-label-font-weight': string;
                  '--n-label-text-color': string;
                  '--n-value-font-weight': string;
                  '--n-value-font-size': string;
                  '--n-value-prefix-text-color': string;
                  '--n-value-suffix-text-color': string;
                  '--n-value-text-color': string;
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
            tabularNums: BooleanConstructor;
            label: StringConstructor;
            value: (StringConstructor | NumberConstructor)[];
            theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Statistic',
                    {
                        labelFontSize: string;
                        labelFontWeight: string;
                        valueFontWeight: string;
                        valueFontSize: string;
                        labelTextColor: string;
                        valuePrefixTextColor: string;
                        valueSuffixTextColor: string;
                        valueTextColor: string;
                    },
                    any
                >
            >;
            themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Statistic',
                        {
                            labelFontSize: string;
                            labelFontWeight: string;
                            valueFontWeight: string;
                            valueFontSize: string;
                            labelTextColor: string;
                            valuePrefixTextColor: string;
                            valueSuffixTextColor: string;
                            valueTextColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Statistic',
                        {
                            labelFontSize: string;
                            labelFontWeight: string;
                            valueFontWeight: string;
                            valueFontSize: string;
                            labelTextColor: string;
                            valuePrefixTextColor: string;
                            valueSuffixTextColor: string;
                            valueTextColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        tabularNums: boolean;
    },
    {}
>;
export default _default;
