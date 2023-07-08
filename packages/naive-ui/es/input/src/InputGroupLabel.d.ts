import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { Size } from './interface';
export declare const inputGroupLabelProps: {
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: 'medium';
    };
    readonly bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Input',
            {
                countTextColorDisabled: string;
                countTextColor: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                lineHeight: string;
                lineHeightTextarea: string;
                borderRadius: string;
                iconSize: string;
                groupLabelColor: string;
                groupLabelTextColor: string;
                textColor: string;
                textColorDisabled: string;
                textDecorationColor: string;
                caretColor: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                color: string;
                colorDisabled: string;
                colorFocus: string;
                groupLabelBorder: string;
                border: string;
                borderHover: string;
                borderDisabled: string;
                borderFocus: string;
                boxShadowFocus: string;
                loadingColor: string;
                loadingColorWarning: string;
                borderWarning: string;
                borderHoverWarning: string;
                colorFocusWarning: string;
                borderFocusWarning: string;
                boxShadowFocusWarning: string;
                caretColorWarning: string;
                loadingColorError: string;
                borderError: string;
                borderHoverError: string;
                colorFocusError: string;
                borderFocusError: string;
                boxShadowFocusError: string;
                caretColorError: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                iconColor: string;
                iconColorDisabled: string;
                iconColorHover: string;
                iconColorPressed: string;
                suffixTextColor: string;
                paddingTiny: string;
                paddingSmall: string;
                paddingMedium: string;
                paddingLarge: string;
                clearSize: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Input',
                {
                    countTextColorDisabled: string;
                    countTextColor: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    lineHeight: string;
                    lineHeightTextarea: string;
                    borderRadius: string;
                    iconSize: string;
                    groupLabelColor: string;
                    groupLabelTextColor: string;
                    textColor: string;
                    textColorDisabled: string;
                    textDecorationColor: string;
                    caretColor: string;
                    placeholderColor: string;
                    placeholderColorDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorFocus: string;
                    groupLabelBorder: string;
                    border: string;
                    borderHover: string;
                    borderDisabled: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    loadingColor: string;
                    loadingColorWarning: string;
                    borderWarning: string;
                    borderHoverWarning: string;
                    colorFocusWarning: string;
                    borderFocusWarning: string;
                    boxShadowFocusWarning: string;
                    caretColorWarning: string;
                    loadingColorError: string;
                    borderError: string;
                    borderHoverError: string;
                    colorFocusError: string;
                    borderFocusError: string;
                    boxShadowFocusError: string;
                    caretColorError: string;
                    clearColor: string;
                    clearColorHover: string;
                    clearColorPressed: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    suffixTextColor: string;
                    paddingTiny: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    clearSize: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Input',
                {
                    countTextColorDisabled: string;
                    countTextColor: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    lineHeight: string;
                    lineHeightTextarea: string;
                    borderRadius: string;
                    iconSize: string;
                    groupLabelColor: string;
                    groupLabelTextColor: string;
                    textColor: string;
                    textColorDisabled: string;
                    textDecorationColor: string;
                    caretColor: string;
                    placeholderColor: string;
                    placeholderColorDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorFocus: string;
                    groupLabelBorder: string;
                    border: string;
                    borderHover: string;
                    borderDisabled: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    loadingColor: string;
                    loadingColorWarning: string;
                    borderWarning: string;
                    borderHoverWarning: string;
                    colorFocusWarning: string;
                    borderFocusWarning: string;
                    boxShadowFocusWarning: string;
                    caretColorWarning: string;
                    loadingColorError: string;
                    borderError: string;
                    borderHoverError: string;
                    colorFocusError: string;
                    borderFocusError: string;
                    boxShadowFocusError: string;
                    caretColorError: string;
                    clearColor: string;
                    clearColorHover: string;
                    clearColorPressed: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    suffixTextColor: string;
                    paddingTiny: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    clearSize: string;
                },
                any
            >
        >
    >;
};
export type InputGroupLabelProps = ExtractPublicPropTypes<
    typeof inputGroupLabelProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly size: {
            readonly type: PropType<Size>;
            readonly default: 'medium';
        };
        readonly bordered: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Input',
                {
                    countTextColorDisabled: string;
                    countTextColor: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    lineHeight: string;
                    lineHeightTextarea: string;
                    borderRadius: string;
                    iconSize: string;
                    groupLabelColor: string;
                    groupLabelTextColor: string;
                    textColor: string;
                    textColorDisabled: string;
                    textDecorationColor: string;
                    caretColor: string;
                    placeholderColor: string;
                    placeholderColorDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorFocus: string;
                    groupLabelBorder: string;
                    border: string;
                    borderHover: string;
                    borderDisabled: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    loadingColor: string;
                    loadingColorWarning: string;
                    borderWarning: string;
                    borderHoverWarning: string;
                    colorFocusWarning: string;
                    borderFocusWarning: string;
                    boxShadowFocusWarning: string;
                    caretColorWarning: string;
                    loadingColorError: string;
                    borderError: string;
                    borderHoverError: string;
                    colorFocusError: string;
                    borderFocusError: string;
                    boxShadowFocusError: string;
                    caretColorError: string;
                    clearColor: string;
                    clearColorHover: string;
                    clearColorPressed: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    suffixTextColor: string;
                    paddingTiny: string;
                    paddingSmall: string;
                    paddingMedium: string;
                    paddingLarge: string;
                    clearSize: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Input',
                    {
                        countTextColorDisabled: string;
                        countTextColor: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        lineHeight: string;
                        lineHeightTextarea: string;
                        borderRadius: string;
                        iconSize: string;
                        groupLabelColor: string;
                        groupLabelTextColor: string;
                        textColor: string;
                        textColorDisabled: string;
                        textDecorationColor: string;
                        caretColor: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorFocus: string;
                        groupLabelBorder: string;
                        border: string;
                        borderHover: string;
                        borderDisabled: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        loadingColor: string;
                        loadingColorWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        colorFocusWarning: string;
                        borderFocusWarning: string;
                        boxShadowFocusWarning: string;
                        caretColorWarning: string;
                        loadingColorError: string;
                        borderError: string;
                        borderHoverError: string;
                        colorFocusError: string;
                        borderFocusError: string;
                        boxShadowFocusError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        suffixTextColor: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        clearSize: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Input',
                    {
                        countTextColorDisabled: string;
                        countTextColor: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        lineHeight: string;
                        lineHeightTextarea: string;
                        borderRadius: string;
                        iconSize: string;
                        groupLabelColor: string;
                        groupLabelTextColor: string;
                        textColor: string;
                        textColorDisabled: string;
                        textDecorationColor: string;
                        caretColor: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorFocus: string;
                        groupLabelBorder: string;
                        border: string;
                        borderHover: string;
                        borderDisabled: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        loadingColor: string;
                        loadingColorWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        colorFocusWarning: string;
                        borderFocusWarning: string;
                        boxShadowFocusWarning: string;
                        caretColorWarning: string;
                        loadingColorError: string;
                        borderError: string;
                        borderHoverError: string;
                        colorFocusError: string;
                        borderFocusError: string;
                        boxShadowFocusError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        suffixTextColor: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        clearSize: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedBordered: globalThis.ComputedRef<boolean>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-group-label-color': string;
                  '--n-group-label-border': string;
                  '--n-border-radius': string;
                  '--n-group-label-text-color': string;
                  '--n-font-size': string;
                  '--n-line-height': string;
                  '--n-height': string;
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
            readonly size: {
                readonly type: PropType<Size>;
                readonly default: 'medium';
            };
            readonly bordered: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Input',
                    {
                        countTextColorDisabled: string;
                        countTextColor: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        lineHeight: string;
                        lineHeightTextarea: string;
                        borderRadius: string;
                        iconSize: string;
                        groupLabelColor: string;
                        groupLabelTextColor: string;
                        textColor: string;
                        textColorDisabled: string;
                        textDecorationColor: string;
                        caretColor: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorFocus: string;
                        groupLabelBorder: string;
                        border: string;
                        borderHover: string;
                        borderDisabled: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        loadingColor: string;
                        loadingColorWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        colorFocusWarning: string;
                        borderFocusWarning: string;
                        boxShadowFocusWarning: string;
                        caretColorWarning: string;
                        loadingColorError: string;
                        borderError: string;
                        borderHoverError: string;
                        colorFocusError: string;
                        borderFocusError: string;
                        boxShadowFocusError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        suffixTextColor: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        clearSize: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Input',
                        {
                            countTextColorDisabled: string;
                            countTextColor: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            lineHeight: string;
                            lineHeightTextarea: string;
                            borderRadius: string;
                            iconSize: string;
                            groupLabelColor: string;
                            groupLabelTextColor: string;
                            textColor: string;
                            textColorDisabled: string;
                            textDecorationColor: string;
                            caretColor: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorFocus: string;
                            groupLabelBorder: string;
                            border: string;
                            borderHover: string;
                            borderDisabled: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            loadingColor: string;
                            loadingColorWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            colorFocusWarning: string;
                            borderFocusWarning: string;
                            boxShadowFocusWarning: string;
                            caretColorWarning: string;
                            loadingColorError: string;
                            borderError: string;
                            borderHoverError: string;
                            colorFocusError: string;
                            borderFocusError: string;
                            boxShadowFocusError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            iconColor: string;
                            iconColorDisabled: string;
                            iconColorHover: string;
                            iconColorPressed: string;
                            suffixTextColor: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            clearSize: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Input',
                        {
                            countTextColorDisabled: string;
                            countTextColor: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            lineHeight: string;
                            lineHeightTextarea: string;
                            borderRadius: string;
                            iconSize: string;
                            groupLabelColor: string;
                            groupLabelTextColor: string;
                            textColor: string;
                            textColorDisabled: string;
                            textDecorationColor: string;
                            caretColor: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorFocus: string;
                            groupLabelBorder: string;
                            border: string;
                            borderHover: string;
                            borderDisabled: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            loadingColor: string;
                            loadingColorWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            colorFocusWarning: string;
                            borderFocusWarning: string;
                            boxShadowFocusWarning: string;
                            caretColorWarning: string;
                            loadingColorError: string;
                            borderError: string;
                            borderHoverError: string;
                            colorFocusError: string;
                            borderFocusError: string;
                            boxShadowFocusError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            iconColor: string;
                            iconColorDisabled: string;
                            iconColorHover: string;
                            iconColorPressed: string;
                            suffixTextColor: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            clearSize: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly size: Size;
        readonly bordered: boolean | undefined;
    },
    {}
>;
export default _default;
