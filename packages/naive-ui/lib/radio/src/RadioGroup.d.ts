import { PropType } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import { OnUpdateValue } from './interface';
export declare const radioGroupProps: {
    readonly name: StringConstructor;
    readonly value: PropType<string | number | boolean | null>;
    readonly defaultValue: {
        readonly type: PropType<string | number | boolean | null>;
        readonly default: null;
    };
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Radio',
            {
                labelLineHeight: string;
                buttonHeightSmall: string;
                buttonHeightMedium: string;
                buttonHeightLarge: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                boxShadow: string;
                boxShadowActive: string;
                boxShadowFocus: string;
                boxShadowHover: string;
                boxShadowDisabled: string;
                color: string;
                colorDisabled: string;
                colorActive: string;
                textColor: string;
                textColorDisabled: string;
                dotColorActive: string;
                dotColorDisabled: string;
                buttonBorderColor: string;
                buttonBorderColorActive: string;
                buttonBorderColorHover: string;
                buttonColor: string;
                buttonColorActive: string;
                buttonTextColor: string;
                buttonTextColorActive: string;
                buttonTextColorHover: string;
                opacityDisabled: string;
                buttonBoxShadowFocus: string;
                buttonBoxShadowHover: string;
                buttonBoxShadow: string;
                buttonBorderRadius: string;
                radioSizeSmall: string;
                radioSizeMedium: string;
                radioSizeLarge: string;
                labelPadding: string;
                labelFontWeight: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Radio',
                {
                    labelLineHeight: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    boxShadow: string;
                    boxShadowActive: string;
                    boxShadowFocus: string;
                    boxShadowHover: string;
                    boxShadowDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorActive: string;
                    textColor: string;
                    textColorDisabled: string;
                    dotColorActive: string;
                    dotColorDisabled: string;
                    buttonBorderColor: string;
                    buttonBorderColorActive: string;
                    buttonBorderColorHover: string;
                    buttonColor: string;
                    buttonColorActive: string;
                    buttonTextColor: string;
                    buttonTextColorActive: string;
                    buttonTextColorHover: string;
                    opacityDisabled: string;
                    buttonBoxShadowFocus: string;
                    buttonBoxShadowHover: string;
                    buttonBoxShadow: string;
                    buttonBorderRadius: string;
                    radioSizeSmall: string;
                    radioSizeMedium: string;
                    radioSizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Radio',
                {
                    labelLineHeight: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    boxShadow: string;
                    boxShadowActive: string;
                    boxShadowFocus: string;
                    boxShadowHover: string;
                    boxShadowDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorActive: string;
                    textColor: string;
                    textColorDisabled: string;
                    dotColorActive: string;
                    dotColorDisabled: string;
                    buttonBorderColor: string;
                    buttonBorderColorActive: string;
                    buttonBorderColorHover: string;
                    buttonColor: string;
                    buttonColorActive: string;
                    buttonTextColor: string;
                    buttonTextColorActive: string;
                    buttonTextColorHover: string;
                    opacityDisabled: string;
                    buttonBoxShadowFocus: string;
                    buttonBoxShadowHover: string;
                    buttonBoxShadow: string;
                    buttonBorderRadius: string;
                    radioSizeSmall: string;
                    radioSizeMedium: string;
                    radioSizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
};
export type RadioGroupProps = ExtractPublicPropTypes<typeof radioGroupProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly name: StringConstructor;
        readonly value: PropType<string | number | boolean | null>;
        readonly defaultValue: {
            readonly type: PropType<string | number | boolean | null>;
            readonly default: null;
        };
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Radio',
                {
                    labelLineHeight: string;
                    buttonHeightSmall: string;
                    buttonHeightMedium: string;
                    buttonHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    boxShadow: string;
                    boxShadowActive: string;
                    boxShadowFocus: string;
                    boxShadowHover: string;
                    boxShadowDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorActive: string;
                    textColor: string;
                    textColorDisabled: string;
                    dotColorActive: string;
                    dotColorDisabled: string;
                    buttonBorderColor: string;
                    buttonBorderColorActive: string;
                    buttonBorderColorHover: string;
                    buttonColor: string;
                    buttonColorActive: string;
                    buttonTextColor: string;
                    buttonTextColorActive: string;
                    buttonTextColorHover: string;
                    opacityDisabled: string;
                    buttonBoxShadowFocus: string;
                    buttonBoxShadowHover: string;
                    buttonBoxShadow: string;
                    buttonBorderRadius: string;
                    radioSizeSmall: string;
                    radioSizeMedium: string;
                    radioSizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Radio',
                    {
                        labelLineHeight: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        boxShadow: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        boxShadowHover: string;
                        boxShadowDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        textColor: string;
                        textColorDisabled: string;
                        dotColorActive: string;
                        dotColorDisabled: string;
                        buttonBorderColor: string;
                        buttonBorderColorActive: string;
                        buttonBorderColorHover: string;
                        buttonColor: string;
                        buttonColorActive: string;
                        buttonTextColor: string;
                        buttonTextColorActive: string;
                        buttonTextColorHover: string;
                        opacityDisabled: string;
                        buttonBoxShadowFocus: string;
                        buttonBoxShadowHover: string;
                        buttonBoxShadow: string;
                        buttonBorderRadius: string;
                        radioSizeSmall: string;
                        radioSizeMedium: string;
                        radioSizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Radio',
                    {
                        labelLineHeight: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        boxShadow: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        boxShadowHover: string;
                        boxShadowDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        textColor: string;
                        textColorDisabled: string;
                        dotColorActive: string;
                        dotColorDisabled: string;
                        buttonBorderColor: string;
                        buttonBorderColorActive: string;
                        buttonBorderColorHover: string;
                        buttonColor: string;
                        buttonColorActive: string;
                        buttonTextColor: string;
                        buttonTextColorActive: string;
                        buttonTextColorHover: string;
                        opacityDisabled: string;
                        buttonBoxShadowFocus: string;
                        buttonBoxShadowHover: string;
                        buttonBoxShadow: string;
                        buttonBorderRadius: string;
                        radioSizeSmall: string;
                        radioSizeMedium: string;
                        radioSizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
    },
    {
        selfElRef: globalThis.Ref<HTMLDivElement | null>;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedValue: globalThis.ComputedRef<string | number | boolean | null>;
        handleFocusout: (e: FocusEvent) => void;
        handleFocusin: (e: FocusEvent) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-bezier': string;
                  '--n-button-border-color': string;
                  '--n-button-border-color-active': string;
                  '--n-button-border-radius': string;
                  '--n-button-box-shadow': string;
                  '--n-button-box-shadow-focus': string;
                  '--n-button-box-shadow-hover': string;
                  '--n-button-color-active': string;
                  '--n-button-text-color': string;
                  '--n-button-text-color-hover': string;
                  '--n-button-text-color-active': string;
                  '--n-height': string;
                  '--n-opacity-disabled': string;
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
            readonly name: StringConstructor;
            readonly value: PropType<string | number | boolean | null>;
            readonly defaultValue: {
                readonly type: PropType<string | number | boolean | null>;
                readonly default: null;
            };
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Radio',
                    {
                        labelLineHeight: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        boxShadow: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        boxShadowHover: string;
                        boxShadowDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        textColor: string;
                        textColorDisabled: string;
                        dotColorActive: string;
                        dotColorDisabled: string;
                        buttonBorderColor: string;
                        buttonBorderColorActive: string;
                        buttonBorderColorHover: string;
                        buttonColor: string;
                        buttonColorActive: string;
                        buttonTextColor: string;
                        buttonTextColorActive: string;
                        buttonTextColorHover: string;
                        opacityDisabled: string;
                        buttonBoxShadowFocus: string;
                        buttonBoxShadowHover: string;
                        buttonBoxShadow: string;
                        buttonBorderRadius: string;
                        radioSizeSmall: string;
                        radioSizeMedium: string;
                        radioSizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Radio',
                        {
                            labelLineHeight: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            boxShadow: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            boxShadowHover: string;
                            boxShadowDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            textColor: string;
                            textColorDisabled: string;
                            dotColorActive: string;
                            dotColorDisabled: string;
                            buttonBorderColor: string;
                            buttonBorderColorActive: string;
                            buttonBorderColorHover: string;
                            buttonColor: string;
                            buttonColorActive: string;
                            buttonTextColor: string;
                            buttonTextColorActive: string;
                            buttonTextColorHover: string;
                            opacityDisabled: string;
                            buttonBoxShadowFocus: string;
                            buttonBoxShadowHover: string;
                            buttonBoxShadow: string;
                            buttonBorderRadius: string;
                            radioSizeSmall: string;
                            radioSizeMedium: string;
                            radioSizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Radio',
                        {
                            labelLineHeight: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            boxShadow: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            boxShadowHover: string;
                            boxShadowDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            textColor: string;
                            textColorDisabled: string;
                            dotColorActive: string;
                            dotColorDisabled: string;
                            buttonBorderColor: string;
                            buttonBorderColorActive: string;
                            buttonBorderColorHover: string;
                            buttonColor: string;
                            buttonColorActive: string;
                            buttonTextColor: string;
                            buttonTextColorActive: string;
                            buttonTextColorHover: string;
                            opacityDisabled: string;
                            buttonBoxShadowFocus: string;
                            buttonBoxShadowHover: string;
                            buttonBoxShadow: string;
                            buttonBorderRadius: string;
                            radioSizeSmall: string;
                            radioSizeMedium: string;
                            radioSizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly disabled: boolean | undefined;
        readonly defaultValue: string | number | boolean | null;
    },
    {}
>;
export default _default;
