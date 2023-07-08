import { PropType, ExtractPropTypes } from 'vue';
import type {
    FormRules,
    LabelAlign,
    LabelPlacement,
    FormInst,
    Size,
    FormValidateMessages,
} from './interface';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const formProps: {
    readonly inline: BooleanConstructor;
    readonly labelWidth: PropType<string | number>;
    readonly labelAlign: PropType<LabelAlign>;
    readonly labelPlacement: {
        readonly type: PropType<LabelPlacement>;
        readonly default: 'top';
    };
    readonly model: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => void;
    };
    readonly rules: PropType<FormRules>;
    readonly disabled: BooleanConstructor;
    readonly size: PropType<Size>;
    readonly showRequireMark: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly requireMarkPlacement: PropType<'left' | 'right' | 'right-hanging'>;
    readonly showFeedback: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onSubmit: {
        readonly type: PropType<(e: Event) => void>;
        readonly default: (e: Event) => void;
    };
    readonly showLabel: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly validateMessages: PropType<Partial<FormValidateMessages>>;
    readonly theme: PropType<
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
    readonly themeOverrides: PropType<
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
    readonly builtinThemeOverrides: PropType<
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
};
export type FormSetupProps = ExtractPropTypes<typeof formProps>;
export type FormProps = ExtractPublicPropTypes<typeof formProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly inline: BooleanConstructor;
        readonly labelWidth: PropType<string | number>;
        readonly labelAlign: PropType<LabelAlign>;
        readonly labelPlacement: {
            readonly type: PropType<LabelPlacement>;
            readonly default: 'top';
        };
        readonly model: {
            readonly type: PropType<Record<string, any>>;
            readonly default: () => void;
        };
        readonly rules: PropType<FormRules>;
        readonly disabled: BooleanConstructor;
        readonly size: PropType<Size>;
        readonly showRequireMark: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly requireMarkPlacement: PropType<
            'left' | 'right' | 'right-hanging'
        >;
        readonly showFeedback: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly onSubmit: {
            readonly type: PropType<(e: Event) => void>;
            readonly default: (e: Event) => void;
        };
        readonly showLabel: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly validateMessages: PropType<Partial<FormValidateMessages>>;
        readonly theme: PropType<
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
        readonly themeOverrides: PropType<
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
        readonly builtinThemeOverrides: PropType<
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
    },
    FormInst & {
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
            readonly inline: BooleanConstructor;
            readonly labelWidth: PropType<string | number>;
            readonly labelAlign: PropType<LabelAlign>;
            readonly labelPlacement: {
                readonly type: PropType<LabelPlacement>;
                readonly default: 'top';
            };
            readonly model: {
                readonly type: PropType<Record<string, any>>;
                readonly default: () => void;
            };
            readonly rules: PropType<FormRules>;
            readonly disabled: BooleanConstructor;
            readonly size: PropType<Size>;
            readonly showRequireMark: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly requireMarkPlacement: PropType<
                'left' | 'right' | 'right-hanging'
            >;
            readonly showFeedback: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly onSubmit: {
                readonly type: PropType<(e: Event) => void>;
                readonly default: (e: Event) => void;
            };
            readonly showLabel: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly validateMessages: PropType<Partial<FormValidateMessages>>;
            readonly theme: PropType<
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
            readonly themeOverrides: PropType<
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
            readonly builtinThemeOverrides: PropType<
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
        }>
    >,
    {
        readonly inline: boolean;
        readonly disabled: boolean;
        readonly onSubmit: (e: Event) => void;
        readonly labelPlacement: LabelPlacement;
        readonly model: Record<string, any>;
        readonly showRequireMark: boolean | undefined;
        readonly showFeedback: boolean;
        readonly showLabel: boolean | undefined;
    },
    {}
>;
export default _default;
