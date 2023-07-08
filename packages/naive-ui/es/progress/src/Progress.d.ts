import { PropType, CSSProperties } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
import { Status } from './interface';
export declare const progressProps: {
    readonly processing: BooleanConstructor;
    readonly type: {
        readonly type: PropType<
            'circle' | 'line' | 'multiple-circle' | 'dashboard'
        >;
        readonly default: 'line';
    };
    readonly gapDegree: NumberConstructor;
    readonly gapOffsetDegree: NumberConstructor;
    readonly status: {
        readonly type: PropType<Status>;
        readonly default: 'default';
    };
    readonly railColor: PropType<string | string[]>;
    readonly railStyle: PropType<
        string | CSSProperties | (string | CSSProperties)[]
    >;
    readonly color: PropType<string | string[]>;
    readonly viewBoxWidth: {
        readonly type: NumberConstructor;
        readonly default: 100;
    };
    readonly strokeWidth: {
        readonly type: NumberConstructor;
        readonly default: 7;
    };
    readonly percentage: PropType<number | number[]>;
    readonly unit: {
        readonly type: StringConstructor;
        readonly default: '%';
    };
    readonly showIndicator: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly indicatorPosition: {
        readonly type: PropType<'inside' | 'outside'>;
        readonly default: 'outside';
    };
    readonly indicatorPlacement: {
        readonly type: PropType<'inside' | 'outside'>;
        readonly default: 'outside';
    };
    readonly indicatorTextColor: StringConstructor;
    readonly circleGap: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly height: NumberConstructor;
    readonly borderRadius: PropType<string | number>;
    readonly fillBorderRadius: PropType<string | number>;
    readonly offsetDegree: NumberConstructor;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Progress',
            {
                fontSize: string;
                fontSizeCircle: string;
                fontWeightCircle: string;
                railColor: string;
                railHeight: string;
                iconSizeCircle: string;
                iconSizeLine: string;
                iconColor: string;
                iconColorInfo: string;
                iconColorSuccess: string;
                iconColorWarning: string;
                iconColorError: string;
                textColorCircle: string;
                textColorLineInner: string;
                textColorLineOuter: string;
                fillColor: string;
                fillColorInfo: string;
                fillColorSuccess: string;
                fillColorWarning: string;
                fillColorError: string;
                lineBgProcessing: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Progress',
                {
                    fontSize: string;
                    fontSizeCircle: string;
                    fontWeightCircle: string;
                    railColor: string;
                    railHeight: string;
                    iconSizeCircle: string;
                    iconSizeLine: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    textColorCircle: string;
                    textColorLineInner: string;
                    textColorLineOuter: string;
                    fillColor: string;
                    fillColorInfo: string;
                    fillColorSuccess: string;
                    fillColorWarning: string;
                    fillColorError: string;
                    lineBgProcessing: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Progress',
                {
                    fontSize: string;
                    fontSizeCircle: string;
                    fontWeightCircle: string;
                    railColor: string;
                    railHeight: string;
                    iconSizeCircle: string;
                    iconSizeLine: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    textColorCircle: string;
                    textColorLineInner: string;
                    textColorLineOuter: string;
                    fillColor: string;
                    fillColorInfo: string;
                    fillColorSuccess: string;
                    fillColorWarning: string;
                    fillColorError: string;
                    lineBgProcessing: string;
                },
                any
            >
        >
    >;
};
export type ProgressProps = ExtractPublicPropTypes<typeof progressProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly processing: BooleanConstructor;
        readonly type: {
            readonly type: PropType<
                'circle' | 'line' | 'multiple-circle' | 'dashboard'
            >;
            readonly default: 'line';
        };
        readonly gapDegree: NumberConstructor;
        readonly gapOffsetDegree: NumberConstructor;
        readonly status: {
            readonly type: PropType<Status>;
            readonly default: 'default';
        };
        readonly railColor: PropType<string | string[]>;
        readonly railStyle: PropType<
            string | CSSProperties | (string | CSSProperties)[]
        >;
        readonly color: PropType<string | string[]>;
        readonly viewBoxWidth: {
            readonly type: NumberConstructor;
            readonly default: 100;
        };
        readonly strokeWidth: {
            readonly type: NumberConstructor;
            readonly default: 7;
        };
        readonly percentage: PropType<number | number[]>;
        readonly unit: {
            readonly type: StringConstructor;
            readonly default: '%';
        };
        readonly showIndicator: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly indicatorPosition: {
            readonly type: PropType<'inside' | 'outside'>;
            readonly default: 'outside';
        };
        readonly indicatorPlacement: {
            readonly type: PropType<'inside' | 'outside'>;
            readonly default: 'outside';
        };
        readonly indicatorTextColor: StringConstructor;
        readonly circleGap: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly height: NumberConstructor;
        readonly borderRadius: PropType<string | number>;
        readonly fillBorderRadius: PropType<string | number>;
        readonly offsetDegree: NumberConstructor;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Progress',
                {
                    fontSize: string;
                    fontSizeCircle: string;
                    fontWeightCircle: string;
                    railColor: string;
                    railHeight: string;
                    iconSizeCircle: string;
                    iconSizeLine: string;
                    iconColor: string;
                    iconColorInfo: string;
                    iconColorSuccess: string;
                    iconColorWarning: string;
                    iconColorError: string;
                    textColorCircle: string;
                    textColorLineInner: string;
                    textColorLineOuter: string;
                    fillColor: string;
                    fillColorInfo: string;
                    fillColorSuccess: string;
                    fillColorWarning: string;
                    fillColorError: string;
                    lineBgProcessing: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Progress',
                    {
                        fontSize: string;
                        fontSizeCircle: string;
                        fontWeightCircle: string;
                        railColor: string;
                        railHeight: string;
                        iconSizeCircle: string;
                        iconSizeLine: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        textColorCircle: string;
                        textColorLineInner: string;
                        textColorLineOuter: string;
                        fillColor: string;
                        fillColorInfo: string;
                        fillColorSuccess: string;
                        fillColorWarning: string;
                        fillColorError: string;
                        lineBgProcessing: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Progress',
                    {
                        fontSize: string;
                        fontSizeCircle: string;
                        fontWeightCircle: string;
                        railColor: string;
                        railHeight: string;
                        iconSizeCircle: string;
                        iconSizeLine: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        textColorCircle: string;
                        textColorLineInner: string;
                        textColorLineOuter: string;
                        fillColor: string;
                        fillColorInfo: string;
                        fillColorSuccess: string;
                        fillColorWarning: string;
                        fillColorError: string;
                        lineBgProcessing: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedIndicatorPlacement: globalThis.ComputedRef<'inside' | 'outside'>;
        gapDeg: globalThis.ComputedRef<number | undefined>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-fill-color': string;
                  '--n-font-size': string;
                  '--n-font-size-circle': string;
                  '--n-font-weight-circle': string;
                  '--n-icon-color': string;
                  '--n-icon-size-circle': string;
                  '--n-icon-size-line': string;
                  '--n-line-bg-processing': string;
                  '--n-rail-color': string;
                  '--n-rail-height': string;
                  '--n-text-color-circle': string;
                  '--n-text-color-line-inner': string;
                  '--n-text-color-line-outer': string;
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
            readonly processing: BooleanConstructor;
            readonly type: {
                readonly type: PropType<
                    'circle' | 'line' | 'multiple-circle' | 'dashboard'
                >;
                readonly default: 'line';
            };
            readonly gapDegree: NumberConstructor;
            readonly gapOffsetDegree: NumberConstructor;
            readonly status: {
                readonly type: PropType<Status>;
                readonly default: 'default';
            };
            readonly railColor: PropType<string | string[]>;
            readonly railStyle: PropType<
                string | CSSProperties | (string | CSSProperties)[]
            >;
            readonly color: PropType<string | string[]>;
            readonly viewBoxWidth: {
                readonly type: NumberConstructor;
                readonly default: 100;
            };
            readonly strokeWidth: {
                readonly type: NumberConstructor;
                readonly default: 7;
            };
            readonly percentage: PropType<number | number[]>;
            readonly unit: {
                readonly type: StringConstructor;
                readonly default: '%';
            };
            readonly showIndicator: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly indicatorPosition: {
                readonly type: PropType<'inside' | 'outside'>;
                readonly default: 'outside';
            };
            readonly indicatorPlacement: {
                readonly type: PropType<'inside' | 'outside'>;
                readonly default: 'outside';
            };
            readonly indicatorTextColor: StringConstructor;
            readonly circleGap: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly height: NumberConstructor;
            readonly borderRadius: PropType<string | number>;
            readonly fillBorderRadius: PropType<string | number>;
            readonly offsetDegree: NumberConstructor;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Progress',
                    {
                        fontSize: string;
                        fontSizeCircle: string;
                        fontWeightCircle: string;
                        railColor: string;
                        railHeight: string;
                        iconSizeCircle: string;
                        iconSizeLine: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        textColorCircle: string;
                        textColorLineInner: string;
                        textColorLineOuter: string;
                        fillColor: string;
                        fillColorInfo: string;
                        fillColorSuccess: string;
                        fillColorWarning: string;
                        fillColorError: string;
                        lineBgProcessing: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Progress',
                        {
                            fontSize: string;
                            fontSizeCircle: string;
                            fontWeightCircle: string;
                            railColor: string;
                            railHeight: string;
                            iconSizeCircle: string;
                            iconSizeLine: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            textColorCircle: string;
                            textColorLineInner: string;
                            textColorLineOuter: string;
                            fillColor: string;
                            fillColorInfo: string;
                            fillColorSuccess: string;
                            fillColorWarning: string;
                            fillColorError: string;
                            lineBgProcessing: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Progress',
                        {
                            fontSize: string;
                            fontSizeCircle: string;
                            fontWeightCircle: string;
                            railColor: string;
                            railHeight: string;
                            iconSizeCircle: string;
                            iconSizeLine: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            textColorCircle: string;
                            textColorLineInner: string;
                            textColorLineOuter: string;
                            fillColor: string;
                            fillColorInfo: string;
                            fillColorSuccess: string;
                            fillColorWarning: string;
                            fillColorError: string;
                            lineBgProcessing: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly type: 'circle' | 'line' | 'multiple-circle' | 'dashboard';
        readonly strokeWidth: number;
        readonly status: Status;
        readonly processing: boolean;
        readonly indicatorPlacement: 'inside' | 'outside';
        readonly unit: string;
        readonly showIndicator: boolean;
        readonly viewBoxWidth: number;
        readonly circleGap: number;
        readonly indicatorPosition: 'inside' | 'outside';
    },
    {}
>;
export default _default;
