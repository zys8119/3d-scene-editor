import type { ExtractPublicPropTypes } from '../../_utils';
export declare const formItemColProps: {
    readonly label: StringConstructor;
    readonly labelWidth: globalThis.PropType<string | number>;
    readonly labelStyle: globalThis.PropType<
        string | import('vue').CSSProperties
    >;
    readonly labelAlign: globalThis.PropType<import('./interface').LabelAlign>;
    readonly labelPlacement: globalThis.PropType<
        import('./interface').LabelPlacement
    >;
    readonly path: StringConstructor;
    readonly first: BooleanConstructor;
    readonly rulePath: StringConstructor;
    readonly required: BooleanConstructor;
    readonly showRequireMark: {
        readonly type: globalThis.PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: globalThis.PropType<
        'left' | 'right' | 'right-hanging'
    >;
    readonly showFeedback: {
        readonly type: globalThis.PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly rule: globalThis.PropType<
        | import('./interface').FormItemRule
        | import('./interface').FormItemRule[]
    >;
    readonly size: globalThis.PropType<'small' | 'medium' | 'large'>;
    readonly ignorePathChange: BooleanConstructor;
    readonly validationStatus: globalThis.PropType<
        'error' | 'success' | 'warning'
    >;
    readonly feedback: StringConstructor;
    readonly showLabel: {
        readonly type: globalThis.PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly labelProps: globalThis.PropType<import('vue').LabelHTMLAttributes>;
    readonly theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Form',
            {
                blankHeightSmall: string;
                blankHeightMedium: string;
                blankHeightLarge: string;
                lineHeight: string;
                labelTextColor: string;
                asteriskColor: string;
                feedbackTextColorError: string;
                feedbackTextColorWarning: string;
                feedbackTextColor: string;
                feedbackPadding: string;
                feedbackHeightSmall: string;
                feedbackHeightMedium: string;
                feedbackHeightLarge: string;
                feedbackFontSizeSmall: string;
                feedbackFontSizeMedium: string;
                feedbackFontSizeLarge: string;
                labelFontSizeLeftSmall: string;
                labelFontSizeLeftMedium: string;
                labelFontSizeLeftLarge: string;
                labelFontSizeTopSmall: string;
                labelFontSizeTopMedium: string;
                labelFontSizeTopLarge: string;
                labelHeightSmall: string;
                labelHeightMedium: string;
                labelHeightLarge: string;
                labelPaddingVertical: string;
                labelPaddingHorizontal: string;
                labelTextAlignVertical: string;
                labelTextAlignHorizontal: string;
                labelFontWeight: string;
            },
            any
        >
    >;
    readonly themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Form',
                {
                    blankHeightSmall: string;
                    blankHeightMedium: string;
                    blankHeightLarge: string;
                    lineHeight: string;
                    labelTextColor: string;
                    asteriskColor: string;
                    feedbackTextColorError: string;
                    feedbackTextColorWarning: string;
                    feedbackTextColor: string;
                    feedbackPadding: string;
                    feedbackHeightSmall: string;
                    feedbackHeightMedium: string;
                    feedbackHeightLarge: string;
                    feedbackFontSizeSmall: string;
                    feedbackFontSizeMedium: string;
                    feedbackFontSizeLarge: string;
                    labelFontSizeLeftSmall: string;
                    labelFontSizeLeftMedium: string;
                    labelFontSizeLeftLarge: string;
                    labelFontSizeTopSmall: string;
                    labelFontSizeTopMedium: string;
                    labelFontSizeTopLarge: string;
                    labelHeightSmall: string;
                    labelHeightMedium: string;
                    labelHeightLarge: string;
                    labelPaddingVertical: string;
                    labelPaddingHorizontal: string;
                    labelTextAlignVertical: string;
                    labelTextAlignHorizontal: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Form',
                {
                    blankHeightSmall: string;
                    blankHeightMedium: string;
                    blankHeightLarge: string;
                    lineHeight: string;
                    labelTextColor: string;
                    asteriskColor: string;
                    feedbackTextColorError: string;
                    feedbackTextColorWarning: string;
                    feedbackTextColor: string;
                    feedbackPadding: string;
                    feedbackHeightSmall: string;
                    feedbackHeightMedium: string;
                    feedbackHeightLarge: string;
                    feedbackFontSizeSmall: string;
                    feedbackFontSizeMedium: string;
                    feedbackFontSizeLarge: string;
                    labelFontSizeLeftSmall: string;
                    labelFontSizeLeftMedium: string;
                    labelFontSizeLeftLarge: string;
                    labelFontSizeTopSmall: string;
                    labelFontSizeTopMedium: string;
                    labelFontSizeTopLarge: string;
                    labelHeightSmall: string;
                    labelHeightMedium: string;
                    labelHeightLarge: string;
                    labelPaddingVertical: string;
                    labelPaddingHorizontal: string;
                    labelTextAlignVertical: string;
                    labelTextAlignHorizontal: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
    readonly span: {
        readonly type: globalThis.PropType<
            import('../../legacy-grid/src/interface').Span
        >;
        readonly default: 1;
    };
    readonly push: {
        readonly type: globalThis.PropType<
            import('../../legacy-grid/src/interface').Span
        >;
        readonly default: 0;
    };
    readonly pull: {
        readonly type: globalThis.PropType<
            import('../../legacy-grid/src/interface').Span
        >;
        readonly default: 0;
    };
    readonly offset: {
        readonly type: globalThis.PropType<
            import('../../legacy-grid/src/interface').Span
        >;
        readonly default: 0;
    };
};
export declare const formItemColPropKeys: (
    | 'label'
    | 'push'
    | 'size'
    | 'first'
    | 'offset'
    | 'span'
    | 'required'
    | 'path'
    | 'theme'
    | 'themeOverrides'
    | 'builtinThemeOverrides'
    | 'labelWidth'
    | 'labelAlign'
    | 'labelPlacement'
    | 'showRequireMark'
    | 'requireMarkPlacement'
    | 'showFeedback'
    | 'showLabel'
    | 'labelStyle'
    | 'rulePath'
    | 'rule'
    | 'ignorePathChange'
    | 'validationStatus'
    | 'feedback'
    | 'labelProps'
    | 'pull'
)[];
export type FormItemColProps = ExtractPublicPropTypes<typeof formItemColProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly label: StringConstructor;
        readonly labelWidth: globalThis.PropType<string | number>;
        readonly labelStyle: globalThis.PropType<
            string | import('vue').CSSProperties
        >;
        readonly labelAlign: globalThis.PropType<
            import('./interface').LabelAlign
        >;
        readonly labelPlacement: globalThis.PropType<
            import('./interface').LabelPlacement
        >;
        readonly path: StringConstructor;
        readonly first: BooleanConstructor;
        readonly rulePath: StringConstructor;
        readonly required: BooleanConstructor;
        readonly showRequireMark: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly requireMarkPlacement: globalThis.PropType<
            'left' | 'right' | 'right-hanging'
        >;
        readonly showFeedback: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly rule: globalThis.PropType<
            | import('./interface').FormItemRule
            | import('./interface').FormItemRule[]
        >;
        readonly size: globalThis.PropType<'small' | 'medium' | 'large'>;
        readonly ignorePathChange: BooleanConstructor;
        readonly validationStatus: globalThis.PropType<
            'error' | 'success' | 'warning'
        >;
        readonly feedback: StringConstructor;
        readonly showLabel: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly labelProps: globalThis.PropType<
            import('vue').LabelHTMLAttributes
        >;
        readonly theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Form',
                {
                    blankHeightSmall: string;
                    blankHeightMedium: string;
                    blankHeightLarge: string;
                    lineHeight: string;
                    labelTextColor: string;
                    asteriskColor: string;
                    feedbackTextColorError: string;
                    feedbackTextColorWarning: string;
                    feedbackTextColor: string;
                    feedbackPadding: string;
                    feedbackHeightSmall: string;
                    feedbackHeightMedium: string;
                    feedbackHeightLarge: string;
                    feedbackFontSizeSmall: string;
                    feedbackFontSizeMedium: string;
                    feedbackFontSizeLarge: string;
                    labelFontSizeLeftSmall: string;
                    labelFontSizeLeftMedium: string;
                    labelFontSizeLeftLarge: string;
                    labelFontSizeTopSmall: string;
                    labelFontSizeTopMedium: string;
                    labelFontSizeTopLarge: string;
                    labelHeightSmall: string;
                    labelHeightMedium: string;
                    labelHeightLarge: string;
                    labelPaddingVertical: string;
                    labelPaddingHorizontal: string;
                    labelTextAlignVertical: string;
                    labelTextAlignHorizontal: string;
                    labelFontWeight: string;
                },
                any
            >
        >;
        readonly themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Form',
                    {
                        blankHeightSmall: string;
                        blankHeightMedium: string;
                        blankHeightLarge: string;
                        lineHeight: string;
                        labelTextColor: string;
                        asteriskColor: string;
                        feedbackTextColorError: string;
                        feedbackTextColorWarning: string;
                        feedbackTextColor: string;
                        feedbackPadding: string;
                        feedbackHeightSmall: string;
                        feedbackHeightMedium: string;
                        feedbackHeightLarge: string;
                        feedbackFontSizeSmall: string;
                        feedbackFontSizeMedium: string;
                        feedbackFontSizeLarge: string;
                        labelFontSizeLeftSmall: string;
                        labelFontSizeLeftMedium: string;
                        labelFontSizeLeftLarge: string;
                        labelFontSizeTopSmall: string;
                        labelFontSizeTopMedium: string;
                        labelFontSizeTopLarge: string;
                        labelHeightSmall: string;
                        labelHeightMedium: string;
                        labelHeightLarge: string;
                        labelPaddingVertical: string;
                        labelPaddingHorizontal: string;
                        labelTextAlignVertical: string;
                        labelTextAlignHorizontal: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Form',
                    {
                        blankHeightSmall: string;
                        blankHeightMedium: string;
                        blankHeightLarge: string;
                        lineHeight: string;
                        labelTextColor: string;
                        asteriskColor: string;
                        feedbackTextColorError: string;
                        feedbackTextColorWarning: string;
                        feedbackTextColor: string;
                        feedbackPadding: string;
                        feedbackHeightSmall: string;
                        feedbackHeightMedium: string;
                        feedbackHeightLarge: string;
                        feedbackFontSizeSmall: string;
                        feedbackFontSizeMedium: string;
                        feedbackFontSizeLarge: string;
                        labelFontSizeLeftSmall: string;
                        labelFontSizeLeftMedium: string;
                        labelFontSizeLeftLarge: string;
                        labelFontSizeTopSmall: string;
                        labelFontSizeTopMedium: string;
                        labelFontSizeTopLarge: string;
                        labelHeightSmall: string;
                        labelHeightMedium: string;
                        labelHeightLarge: string;
                        labelPaddingVertical: string;
                        labelPaddingHorizontal: string;
                        labelTextAlignVertical: string;
                        labelTextAlignHorizontal: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
        readonly span: {
            readonly type: globalThis.PropType<
                import('../../legacy-grid/src/interface').Span
            >;
            readonly default: 1;
        };
        readonly push: {
            readonly type: globalThis.PropType<
                import('../../legacy-grid/src/interface').Span
            >;
            readonly default: 0;
        };
        readonly pull: {
            readonly type: globalThis.PropType<
                import('../../legacy-grid/src/interface').Span
            >;
            readonly default: 0;
        };
        readonly offset: {
            readonly type: globalThis.PropType<
                import('../../legacy-grid/src/interface').Span
            >;
            readonly default: 0;
        };
    },
    {
        formItemInstRef: globalThis.Ref<{
            validate: import('./interface').FormItemValidate;
            restoreValidation: () => void;
            path?: string | undefined;
            internalValidate: import('./interface').FormItemInternalValidate;
        } | null>;
        validate: import('./interface').FormItemValidate;
        restoreValidation: () => void;
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
            readonly label: StringConstructor;
            readonly labelWidth: globalThis.PropType<string | number>;
            readonly labelStyle: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            readonly labelAlign: globalThis.PropType<
                import('./interface').LabelAlign
            >;
            readonly labelPlacement: globalThis.PropType<
                import('./interface').LabelPlacement
            >;
            readonly path: StringConstructor;
            readonly first: BooleanConstructor;
            readonly rulePath: StringConstructor;
            readonly required: BooleanConstructor;
            readonly showRequireMark: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly requireMarkPlacement: globalThis.PropType<
                'left' | 'right' | 'right-hanging'
            >;
            readonly showFeedback: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly rule: globalThis.PropType<
                | import('./interface').FormItemRule
                | import('./interface').FormItemRule[]
            >;
            readonly size: globalThis.PropType<'small' | 'medium' | 'large'>;
            readonly ignorePathChange: BooleanConstructor;
            readonly validationStatus: globalThis.PropType<
                'error' | 'success' | 'warning'
            >;
            readonly feedback: StringConstructor;
            readonly showLabel: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly labelProps: globalThis.PropType<
                import('vue').LabelHTMLAttributes
            >;
            readonly theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Form',
                    {
                        blankHeightSmall: string;
                        blankHeightMedium: string;
                        blankHeightLarge: string;
                        lineHeight: string;
                        labelTextColor: string;
                        asteriskColor: string;
                        feedbackTextColorError: string;
                        feedbackTextColorWarning: string;
                        feedbackTextColor: string;
                        feedbackPadding: string;
                        feedbackHeightSmall: string;
                        feedbackHeightMedium: string;
                        feedbackHeightLarge: string;
                        feedbackFontSizeSmall: string;
                        feedbackFontSizeMedium: string;
                        feedbackFontSizeLarge: string;
                        labelFontSizeLeftSmall: string;
                        labelFontSizeLeftMedium: string;
                        labelFontSizeLeftLarge: string;
                        labelFontSizeTopSmall: string;
                        labelFontSizeTopMedium: string;
                        labelFontSizeTopLarge: string;
                        labelHeightSmall: string;
                        labelHeightMedium: string;
                        labelHeightLarge: string;
                        labelPaddingVertical: string;
                        labelPaddingHorizontal: string;
                        labelTextAlignVertical: string;
                        labelTextAlignHorizontal: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Form',
                        {
                            blankHeightSmall: string;
                            blankHeightMedium: string;
                            blankHeightLarge: string;
                            lineHeight: string;
                            labelTextColor: string;
                            asteriskColor: string;
                            feedbackTextColorError: string;
                            feedbackTextColorWarning: string;
                            feedbackTextColor: string;
                            feedbackPadding: string;
                            feedbackHeightSmall: string;
                            feedbackHeightMedium: string;
                            feedbackHeightLarge: string;
                            feedbackFontSizeSmall: string;
                            feedbackFontSizeMedium: string;
                            feedbackFontSizeLarge: string;
                            labelFontSizeLeftSmall: string;
                            labelFontSizeLeftMedium: string;
                            labelFontSizeLeftLarge: string;
                            labelFontSizeTopSmall: string;
                            labelFontSizeTopMedium: string;
                            labelFontSizeTopLarge: string;
                            labelHeightSmall: string;
                            labelHeightMedium: string;
                            labelHeightLarge: string;
                            labelPaddingVertical: string;
                            labelPaddingHorizontal: string;
                            labelTextAlignVertical: string;
                            labelTextAlignHorizontal: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Form',
                        {
                            blankHeightSmall: string;
                            blankHeightMedium: string;
                            blankHeightLarge: string;
                            lineHeight: string;
                            labelTextColor: string;
                            asteriskColor: string;
                            feedbackTextColorError: string;
                            feedbackTextColorWarning: string;
                            feedbackTextColor: string;
                            feedbackPadding: string;
                            feedbackHeightSmall: string;
                            feedbackHeightMedium: string;
                            feedbackHeightLarge: string;
                            feedbackFontSizeSmall: string;
                            feedbackFontSizeMedium: string;
                            feedbackFontSizeLarge: string;
                            labelFontSizeLeftSmall: string;
                            labelFontSizeLeftMedium: string;
                            labelFontSizeLeftLarge: string;
                            labelFontSizeTopSmall: string;
                            labelFontSizeTopMedium: string;
                            labelFontSizeTopLarge: string;
                            labelHeightSmall: string;
                            labelHeightMedium: string;
                            labelHeightLarge: string;
                            labelPaddingVertical: string;
                            labelPaddingHorizontal: string;
                            labelTextAlignVertical: string;
                            labelTextAlignHorizontal: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
            readonly span: {
                readonly type: globalThis.PropType<
                    import('../../legacy-grid/src/interface').Span
                >;
                readonly default: 1;
            };
            readonly push: {
                readonly type: globalThis.PropType<
                    import('../../legacy-grid/src/interface').Span
                >;
                readonly default: 0;
            };
            readonly pull: {
                readonly type: globalThis.PropType<
                    import('../../legacy-grid/src/interface').Span
                >;
                readonly default: 0;
            };
            readonly offset: {
                readonly type: globalThis.PropType<
                    import('../../legacy-grid/src/interface').Span
                >;
                readonly default: 0;
            };
        }>
    >,
    {
        readonly push: import('../../legacy-grid/src/interface').Span;
        readonly first: boolean;
        readonly offset: import('../../legacy-grid/src/interface').Span;
        readonly span: import('../../legacy-grid/src/interface').Span;
        readonly required: boolean;
        readonly showRequireMark: boolean | undefined;
        readonly showFeedback: boolean | undefined;
        readonly showLabel: boolean | undefined;
        readonly ignorePathChange: boolean;
        readonly pull: import('../../legacy-grid/src/interface').Span;
    },
    {}
>;
export default _default;
