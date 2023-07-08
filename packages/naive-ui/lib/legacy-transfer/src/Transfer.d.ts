import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
import type { MaybeArray } from '../../_utils';
import { OptionValue, Option, Filter, OnUpdateValue } from './interface';
export declare const transferProps: {
    readonly value: PropType<OptionValue[] | null>;
    readonly defaultValue: {
        readonly type: PropType<OptionValue[] | null>;
        readonly default: null;
    };
    readonly options: {
        readonly type: PropType<Option[]>;
        readonly default: () => never[];
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly virtualScroll: BooleanConstructor;
    readonly sourceTitle: StringConstructor;
    readonly targetTitle: StringConstructor;
    readonly filterable: BooleanConstructor;
    readonly sourceFilterPlaceholder: StringConstructor;
    readonly targetFilterPlaceholder: StringConstructor;
    readonly filter: {
        readonly type: PropType<Filter>;
        readonly default: (pattern: string, option: Option) => number | true;
    };
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly onChange: PropType<MaybeArray<OnUpdateValue>>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Transfer',
            {
                itemHeightSmall: string;
                itemHeightMedium: string;
                itemHeightLarge: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderRadius: string;
                borderColor: string;
                listColor: string;
                headerColor: string;
                titleTextColor: string;
                titleTextColorDisabled: string;
                extraTextColor: string;
                filterDividerColor: string;
                itemTextColor: string;
                itemTextColorDisabled: string;
                itemColorPending: string;
                titleFontWeight: string;
                iconColor: string;
                iconColorDisabled: string;
                extraFontSize: string;
                width: string;
            },
            {
                Checkbox: import('../../_mixins').Theme<
                    'Checkbox',
                    {
                        labelLineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        color: string;
                        colorChecked: string;
                        colorDisabled: string;
                        colorDisabledChecked: string;
                        colorTableHeader: string;
                        colorTableHeaderModal: string;
                        colorTableHeaderPopover: string;
                        checkMarkColor: string;
                        checkMarkColorDisabled: string;
                        checkMarkColorDisabledChecked: string;
                        border: string;
                        borderDisabled: string;
                        borderDisabledChecked: string;
                        borderChecked: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        textColor: string;
                        textColorDisabled: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >;
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Input: import('../../_mixins').Theme<
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
                >;
                Empty: import('../../_mixins').Theme<
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
                >;
                Button: import('../../_mixins').Theme<
                    'Button',
                    {
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadiusTiny: string;
                        borderRadiusSmall: string;
                        borderRadiusMedium: string;
                        borderRadiusLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        opacityDisabled: string;
                        colorOpacitySecondary: string;
                        colorOpacitySecondaryHover: string;
                        colorOpacitySecondaryPressed: string;
                        colorSecondary: string;
                        colorSecondaryHover: string;
                        colorSecondaryPressed: string;
                        colorTertiary: string;
                        colorTertiaryHover: string;
                        colorTertiaryPressed: string;
                        colorQuaternary: string;
                        colorQuaternaryHover: string;
                        colorQuaternaryPressed: string;
                        color: string;
                        colorHover: string;
                        colorPressed: string;
                        colorFocus: string;
                        colorDisabled: string;
                        textColor: string;
                        textColorTertiary: string;
                        textColorHover: string;
                        textColorPressed: string;
                        textColorFocus: string;
                        textColorDisabled: string;
                        textColorText: string;
                        textColorTextHover: string;
                        textColorTextPressed: string;
                        textColorTextFocus: string;
                        textColorTextDisabled: string;
                        textColorGhost: string;
                        textColorGhostHover: string;
                        textColorGhostPressed: string;
                        textColorGhostFocus: string;
                        textColorGhostDisabled: string;
                        border: string;
                        borderHover: string;
                        borderPressed: string;
                        borderFocus: string;
                        borderDisabled: string;
                        rippleColor: string;
                        colorPrimary: string;
                        colorHoverPrimary: string;
                        colorPressedPrimary: string;
                        colorFocusPrimary: string;
                        colorDisabledPrimary: string;
                        textColorPrimary: string;
                        textColorHoverPrimary: string;
                        textColorPressedPrimary: string;
                        textColorFocusPrimary: string;
                        textColorDisabledPrimary: string;
                        textColorTextPrimary: string;
                        textColorTextHoverPrimary: string;
                        textColorTextPressedPrimary: string;
                        textColorTextFocusPrimary: string;
                        textColorTextDisabledPrimary: string;
                        textColorGhostPrimary: string;
                        textColorGhostHoverPrimary: string;
                        textColorGhostPressedPrimary: string;
                        textColorGhostFocusPrimary: string;
                        textColorGhostDisabledPrimary: string;
                        borderPrimary: string;
                        borderHoverPrimary: string;
                        borderPressedPrimary: string;
                        borderFocusPrimary: string;
                        borderDisabledPrimary: string;
                        rippleColorPrimary: string;
                        colorInfo: string;
                        colorHoverInfo: string;
                        colorPressedInfo: string;
                        colorFocusInfo: string;
                        colorDisabledInfo: string;
                        textColorInfo: string;
                        textColorHoverInfo: string;
                        textColorPressedInfo: string;
                        textColorFocusInfo: string;
                        textColorDisabledInfo: string;
                        textColorTextInfo: string;
                        textColorTextHoverInfo: string;
                        textColorTextPressedInfo: string;
                        textColorTextFocusInfo: string;
                        textColorTextDisabledInfo: string;
                        textColorGhostInfo: string;
                        textColorGhostHoverInfo: string;
                        textColorGhostPressedInfo: string;
                        textColorGhostFocusInfo: string;
                        textColorGhostDisabledInfo: string;
                        borderInfo: string;
                        borderHoverInfo: string;
                        borderPressedInfo: string;
                        borderFocusInfo: string;
                        borderDisabledInfo: string;
                        rippleColorInfo: string;
                        colorSuccess: string;
                        colorHoverSuccess: string;
                        colorPressedSuccess: string;
                        colorFocusSuccess: string;
                        colorDisabledSuccess: string;
                        textColorSuccess: string;
                        textColorHoverSuccess: string;
                        textColorPressedSuccess: string;
                        textColorFocusSuccess: string;
                        textColorDisabledSuccess: string;
                        textColorTextSuccess: string;
                        textColorTextHoverSuccess: string;
                        textColorTextPressedSuccess: string;
                        textColorTextFocusSuccess: string;
                        textColorTextDisabledSuccess: string;
                        textColorGhostSuccess: string;
                        textColorGhostHoverSuccess: string;
                        textColorGhostPressedSuccess: string;
                        textColorGhostFocusSuccess: string;
                        textColorGhostDisabledSuccess: string;
                        borderSuccess: string;
                        borderHoverSuccess: string;
                        borderPressedSuccess: string;
                        borderFocusSuccess: string;
                        borderDisabledSuccess: string;
                        rippleColorSuccess: string;
                        colorWarning: string;
                        colorHoverWarning: string;
                        colorPressedWarning: string;
                        colorFocusWarning: string;
                        colorDisabledWarning: string;
                        textColorWarning: string;
                        textColorHoverWarning: string;
                        textColorPressedWarning: string;
                        textColorFocusWarning: string;
                        textColorDisabledWarning: string;
                        textColorTextWarning: string;
                        textColorTextHoverWarning: string;
                        textColorTextPressedWarning: string;
                        textColorTextFocusWarning: string;
                        textColorTextDisabledWarning: string;
                        textColorGhostWarning: string;
                        textColorGhostHoverWarning: string;
                        textColorGhostPressedWarning: string;
                        textColorGhostFocusWarning: string;
                        textColorGhostDisabledWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderPressedWarning: string;
                        borderFocusWarning: string;
                        borderDisabledWarning: string;
                        rippleColorWarning: string;
                        colorError: string;
                        colorHoverError: string;
                        colorPressedError: string;
                        colorFocusError: string;
                        colorDisabledError: string;
                        textColorError: string;
                        textColorHoverError: string;
                        textColorPressedError: string;
                        textColorFocusError: string;
                        textColorDisabledError: string;
                        textColorTextError: string;
                        textColorTextHoverError: string;
                        textColorTextPressedError: string;
                        textColorTextFocusError: string;
                        textColorTextDisabledError: string;
                        textColorGhostError: string;
                        textColorGhostHoverError: string;
                        textColorGhostPressedError: string;
                        textColorGhostFocusError: string;
                        textColorGhostDisabledError: string;
                        borderError: string;
                        borderHoverError: string;
                        borderPressedError: string;
                        borderFocusError: string;
                        borderDisabledError: string;
                        rippleColorError: string;
                        waveOpacity: string;
                        fontWeight: string;
                        fontWeightStrong: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingRoundTiny: string;
                        paddingRoundSmall: string;
                        paddingRoundMedium: string;
                        paddingRoundLarge: string;
                        iconMarginTiny: string;
                        iconMarginSmall: string;
                        iconMarginMedium: string;
                        iconMarginLarge: string;
                        iconSizeTiny: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        rippleDuration: string;
                    },
                    any
                >;
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Transfer',
                {
                    itemHeightSmall: string;
                    itemHeightMedium: string;
                    itemHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    borderColor: string;
                    listColor: string;
                    headerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    extraTextColor: string;
                    filterDividerColor: string;
                    itemTextColor: string;
                    itemTextColorDisabled: string;
                    itemColorPending: string;
                    titleFontWeight: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    extraFontSize: string;
                    width: string;
                },
                {
                    Checkbox: import('../../_mixins').Theme<
                        'Checkbox',
                        {
                            labelLineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            color: string;
                            colorChecked: string;
                            colorDisabled: string;
                            colorDisabledChecked: string;
                            colorTableHeader: string;
                            colorTableHeaderModal: string;
                            colorTableHeaderPopover: string;
                            checkMarkColor: string;
                            checkMarkColorDisabled: string;
                            checkMarkColorDisabledChecked: string;
                            border: string;
                            borderDisabled: string;
                            borderDisabledChecked: string;
                            borderChecked: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            textColor: string;
                            textColorDisabled: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Input: import('../../_mixins').Theme<
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
                    >;
                    Empty: import('../../_mixins').Theme<
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
                    >;
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Transfer',
                {
                    itemHeightSmall: string;
                    itemHeightMedium: string;
                    itemHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    borderColor: string;
                    listColor: string;
                    headerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    extraTextColor: string;
                    filterDividerColor: string;
                    itemTextColor: string;
                    itemTextColorDisabled: string;
                    itemColorPending: string;
                    titleFontWeight: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    extraFontSize: string;
                    width: string;
                },
                {
                    Checkbox: import('../../_mixins').Theme<
                        'Checkbox',
                        {
                            labelLineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            color: string;
                            colorChecked: string;
                            colorDisabled: string;
                            colorDisabledChecked: string;
                            colorTableHeader: string;
                            colorTableHeaderModal: string;
                            colorTableHeaderPopover: string;
                            checkMarkColor: string;
                            checkMarkColorDisabled: string;
                            checkMarkColorDisabledChecked: string;
                            border: string;
                            borderDisabled: string;
                            borderDisabledChecked: string;
                            borderChecked: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            textColor: string;
                            textColorDisabled: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Input: import('../../_mixins').Theme<
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
                    >;
                    Empty: import('../../_mixins').Theme<
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
                    >;
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
};
export type TransferProps = ExtractPublicPropTypes<typeof transferProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly value: PropType<OptionValue[] | null>;
        readonly defaultValue: {
            readonly type: PropType<OptionValue[] | null>;
            readonly default: null;
        };
        readonly options: {
            readonly type: PropType<Option[]>;
            readonly default: () => never[];
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly virtualScroll: BooleanConstructor;
        readonly sourceTitle: StringConstructor;
        readonly targetTitle: StringConstructor;
        readonly filterable: BooleanConstructor;
        readonly sourceFilterPlaceholder: StringConstructor;
        readonly targetFilterPlaceholder: StringConstructor;
        readonly filter: {
            readonly type: PropType<Filter>;
            readonly default: (
                pattern: string,
                option: Option
            ) => number | true;
        };
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly onChange: PropType<MaybeArray<OnUpdateValue>>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Transfer',
                {
                    itemHeightSmall: string;
                    itemHeightMedium: string;
                    itemHeightLarge: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    borderColor: string;
                    listColor: string;
                    headerColor: string;
                    titleTextColor: string;
                    titleTextColorDisabled: string;
                    extraTextColor: string;
                    filterDividerColor: string;
                    itemTextColor: string;
                    itemTextColorDisabled: string;
                    itemColorPending: string;
                    titleFontWeight: string;
                    iconColor: string;
                    iconColorDisabled: string;
                    extraFontSize: string;
                    width: string;
                },
                {
                    Checkbox: import('../../_mixins').Theme<
                        'Checkbox',
                        {
                            labelLineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            color: string;
                            colorChecked: string;
                            colorDisabled: string;
                            colorDisabledChecked: string;
                            colorTableHeader: string;
                            colorTableHeaderModal: string;
                            colorTableHeaderPopover: string;
                            checkMarkColor: string;
                            checkMarkColorDisabled: string;
                            checkMarkColorDisabledChecked: string;
                            border: string;
                            borderDisabled: string;
                            borderDisabledChecked: string;
                            borderChecked: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            textColor: string;
                            textColorDisabled: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Input: import('../../_mixins').Theme<
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
                    >;
                    Empty: import('../../_mixins').Theme<
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
                    >;
                    Button: import('../../_mixins').Theme<
                        'Button',
                        {
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadiusTiny: string;
                            borderRadiusSmall: string;
                            borderRadiusMedium: string;
                            borderRadiusLarge: string;
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            opacityDisabled: string;
                            colorOpacitySecondary: string;
                            colorOpacitySecondaryHover: string;
                            colorOpacitySecondaryPressed: string;
                            colorSecondary: string;
                            colorSecondaryHover: string;
                            colorSecondaryPressed: string;
                            colorTertiary: string;
                            colorTertiaryHover: string;
                            colorTertiaryPressed: string;
                            colorQuaternary: string;
                            colorQuaternaryHover: string;
                            colorQuaternaryPressed: string;
                            color: string;
                            colorHover: string;
                            colorPressed: string;
                            colorFocus: string;
                            colorDisabled: string;
                            textColor: string;
                            textColorTertiary: string;
                            textColorHover: string;
                            textColorPressed: string;
                            textColorFocus: string;
                            textColorDisabled: string;
                            textColorText: string;
                            textColorTextHover: string;
                            textColorTextPressed: string;
                            textColorTextFocus: string;
                            textColorTextDisabled: string;
                            textColorGhost: string;
                            textColorGhostHover: string;
                            textColorGhostPressed: string;
                            textColorGhostFocus: string;
                            textColorGhostDisabled: string;
                            border: string;
                            borderHover: string;
                            borderPressed: string;
                            borderFocus: string;
                            borderDisabled: string;
                            rippleColor: string;
                            colorPrimary: string;
                            colorHoverPrimary: string;
                            colorPressedPrimary: string;
                            colorFocusPrimary: string;
                            colorDisabledPrimary: string;
                            textColorPrimary: string;
                            textColorHoverPrimary: string;
                            textColorPressedPrimary: string;
                            textColorFocusPrimary: string;
                            textColorDisabledPrimary: string;
                            textColorTextPrimary: string;
                            textColorTextHoverPrimary: string;
                            textColorTextPressedPrimary: string;
                            textColorTextFocusPrimary: string;
                            textColorTextDisabledPrimary: string;
                            textColorGhostPrimary: string;
                            textColorGhostHoverPrimary: string;
                            textColorGhostPressedPrimary: string;
                            textColorGhostFocusPrimary: string;
                            textColorGhostDisabledPrimary: string;
                            borderPrimary: string;
                            borderHoverPrimary: string;
                            borderPressedPrimary: string;
                            borderFocusPrimary: string;
                            borderDisabledPrimary: string;
                            rippleColorPrimary: string;
                            colorInfo: string;
                            colorHoverInfo: string;
                            colorPressedInfo: string;
                            colorFocusInfo: string;
                            colorDisabledInfo: string;
                            textColorInfo: string;
                            textColorHoverInfo: string;
                            textColorPressedInfo: string;
                            textColorFocusInfo: string;
                            textColorDisabledInfo: string;
                            textColorTextInfo: string;
                            textColorTextHoverInfo: string;
                            textColorTextPressedInfo: string;
                            textColorTextFocusInfo: string;
                            textColorTextDisabledInfo: string;
                            textColorGhostInfo: string;
                            textColorGhostHoverInfo: string;
                            textColorGhostPressedInfo: string;
                            textColorGhostFocusInfo: string;
                            textColorGhostDisabledInfo: string;
                            borderInfo: string;
                            borderHoverInfo: string;
                            borderPressedInfo: string;
                            borderFocusInfo: string;
                            borderDisabledInfo: string;
                            rippleColorInfo: string;
                            colorSuccess: string;
                            colorHoverSuccess: string;
                            colorPressedSuccess: string;
                            colorFocusSuccess: string;
                            colorDisabledSuccess: string;
                            textColorSuccess: string;
                            textColorHoverSuccess: string;
                            textColorPressedSuccess: string;
                            textColorFocusSuccess: string;
                            textColorDisabledSuccess: string;
                            textColorTextSuccess: string;
                            textColorTextHoverSuccess: string;
                            textColorTextPressedSuccess: string;
                            textColorTextFocusSuccess: string;
                            textColorTextDisabledSuccess: string;
                            textColorGhostSuccess: string;
                            textColorGhostHoverSuccess: string;
                            textColorGhostPressedSuccess: string;
                            textColorGhostFocusSuccess: string;
                            textColorGhostDisabledSuccess: string;
                            borderSuccess: string;
                            borderHoverSuccess: string;
                            borderPressedSuccess: string;
                            borderFocusSuccess: string;
                            borderDisabledSuccess: string;
                            rippleColorSuccess: string;
                            colorWarning: string;
                            colorHoverWarning: string;
                            colorPressedWarning: string;
                            colorFocusWarning: string;
                            colorDisabledWarning: string;
                            textColorWarning: string;
                            textColorHoverWarning: string;
                            textColorPressedWarning: string;
                            textColorFocusWarning: string;
                            textColorDisabledWarning: string;
                            textColorTextWarning: string;
                            textColorTextHoverWarning: string;
                            textColorTextPressedWarning: string;
                            textColorTextFocusWarning: string;
                            textColorTextDisabledWarning: string;
                            textColorGhostWarning: string;
                            textColorGhostHoverWarning: string;
                            textColorGhostPressedWarning: string;
                            textColorGhostFocusWarning: string;
                            textColorGhostDisabledWarning: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderPressedWarning: string;
                            borderFocusWarning: string;
                            borderDisabledWarning: string;
                            rippleColorWarning: string;
                            colorError: string;
                            colorHoverError: string;
                            colorPressedError: string;
                            colorFocusError: string;
                            colorDisabledError: string;
                            textColorError: string;
                            textColorHoverError: string;
                            textColorPressedError: string;
                            textColorFocusError: string;
                            textColorDisabledError: string;
                            textColorTextError: string;
                            textColorTextHoverError: string;
                            textColorTextPressedError: string;
                            textColorTextFocusError: string;
                            textColorTextDisabledError: string;
                            textColorGhostError: string;
                            textColorGhostHoverError: string;
                            textColorGhostPressedError: string;
                            textColorGhostFocusError: string;
                            textColorGhostDisabledError: string;
                            borderError: string;
                            borderHoverError: string;
                            borderPressedError: string;
                            borderFocusError: string;
                            borderDisabledError: string;
                            rippleColorError: string;
                            waveOpacity: string;
                            fontWeight: string;
                            fontWeightStrong: string;
                            paddingTiny: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingRoundTiny: string;
                            paddingRoundSmall: string;
                            paddingRoundMedium: string;
                            paddingRoundLarge: string;
                            iconMarginTiny: string;
                            iconMarginSmall: string;
                            iconMarginMedium: string;
                            iconMarginLarge: string;
                            iconSizeTiny: string;
                            iconSizeSmall: string;
                            iconSizeMedium: string;
                            iconSizeLarge: string;
                            rippleDuration: string;
                        },
                        any
                    >;
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Transfer',
                    {
                        itemHeightSmall: string;
                        itemHeightMedium: string;
                        itemHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        borderColor: string;
                        listColor: string;
                        headerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        extraTextColor: string;
                        filterDividerColor: string;
                        itemTextColor: string;
                        itemTextColorDisabled: string;
                        itemColorPending: string;
                        titleFontWeight: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        extraFontSize: string;
                        width: string;
                    },
                    {
                        Checkbox: import('../../_mixins').Theme<
                            'Checkbox',
                            {
                                labelLineHeight: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                borderRadius: string;
                                color: string;
                                colorChecked: string;
                                colorDisabled: string;
                                colorDisabledChecked: string;
                                colorTableHeader: string;
                                colorTableHeaderModal: string;
                                colorTableHeaderPopover: string;
                                checkMarkColor: string;
                                checkMarkColorDisabled: string;
                                checkMarkColorDisabledChecked: string;
                                border: string;
                                borderDisabled: string;
                                borderDisabledChecked: string;
                                borderChecked: string;
                                borderFocus: string;
                                boxShadowFocus: string;
                                textColor: string;
                                textColorDisabled: string;
                                sizeSmall: string;
                                sizeMedium: string;
                                sizeLarge: string;
                                labelPadding: string;
                                labelFontWeight: string;
                            },
                            any
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Input: import('../../_mixins').Theme<
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
                        >;
                        Empty: import('../../_mixins').Theme<
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
                        >;
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Transfer',
                    {
                        itemHeightSmall: string;
                        itemHeightMedium: string;
                        itemHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        borderColor: string;
                        listColor: string;
                        headerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        extraTextColor: string;
                        filterDividerColor: string;
                        itemTextColor: string;
                        itemTextColorDisabled: string;
                        itemColorPending: string;
                        titleFontWeight: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        extraFontSize: string;
                        width: string;
                    },
                    {
                        Checkbox: import('../../_mixins').Theme<
                            'Checkbox',
                            {
                                labelLineHeight: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                borderRadius: string;
                                color: string;
                                colorChecked: string;
                                colorDisabled: string;
                                colorDisabledChecked: string;
                                colorTableHeader: string;
                                colorTableHeaderModal: string;
                                colorTableHeaderPopover: string;
                                checkMarkColor: string;
                                checkMarkColorDisabled: string;
                                checkMarkColorDisabledChecked: string;
                                border: string;
                                borderDisabled: string;
                                borderDisabledChecked: string;
                                borderChecked: string;
                                borderFocus: string;
                                boxShadowFocus: string;
                                textColor: string;
                                textColorDisabled: string;
                                sizeSmall: string;
                                sizeMedium: string;
                                sizeLarge: string;
                                labelPadding: string;
                                labelFontWeight: string;
                            },
                            any
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Input: import('../../_mixins').Theme<
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
                        >;
                        Empty: import('../../_mixins').Theme<
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
                        >;
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
    },
    {
        locale: globalThis.Ref<{
            sourceTitle: string;
            targetTitle: string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        itemSize: globalThis.ComputedRef<number>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        isInputing: globalThis.Ref<boolean>;
        mergedTheme: globalThis.ComputedRef<{
            common: {
                baseColor: string;
                primaryColor: string;
                primaryColorHover: string;
                primaryColorPressed: string;
                primaryColorSuppl: string;
                infoColor: string;
                infoColorHover: string;
                infoColorPressed: string;
                infoColorSuppl: string;
                successColor: string;
                successColorHover: string;
                successColorPressed: string;
                successColorSuppl: string;
                warningColor: string;
                warningColorHover: string;
                warningColorPressed: string;
                warningColorSuppl: string;
                errorColor: string;
                errorColorHover: string;
                errorColorPressed: string;
                errorColorSuppl: string;
                textColorBase: string;
                textColor1: string;
                textColor2: string;
                textColor3: string;
                textColor6: string;
                textColor7: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                iconColor: string;
                iconColorHover: string;
                iconColorPressed: string;
                iconColorDisabled: string;
                opacity1: string;
                opacity2: string;
                opacity3: string;
                opacity4: string;
                opacity5: string;
                dividerColor: string;
                borderColor: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                scrollbarColor: string;
                scrollbarColorHover: string;
                scrollbarWidth: string;
                scrollbarHeight: string;
                scrollbarBorderRadius: string;
                progressRailColor: string;
                railColor: string;
                popoverColor: string;
                tableColor: string;
                cardColor: string;
                modalColor: string;
                bodyColor: string;
                tagColor: string;
                avatarColor: string;
                invertedColor: string;
                inputColor: string;
                codeColor: string;
                tabColor: string;
                actionColor: string;
                tableHeaderColor: string;
                hoverColor: string;
                tableColorHover: string;
                tableColorStriped: string;
                pressedColor: string;
                opacityDisabled: string;
                inputColorDisabled: string;
                buttonColor2: string;
                buttonColor2Hover: string;
                buttonColor2Pressed: string;
                boxShadow1: string;
                boxShadow2: string;
                boxShadow3: string;
                fontFamily: string;
                fontFamilyMono: string;
                fontWeight: string;
                fontWeightStrong: string;
                cubicBezierEaseInOut: string;
                cubicBezierEaseOut: string;
                cubicBezierEaseIn: string;
                borderRadius: string;
                borderRadiusSmall: string;
                fontSize: string;
                fontSizeMini: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                lineHeight: string;
                heightMini: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                heightHuge: string;
                name: 'common';
            };
            self: {
                itemHeightSmall: string;
                itemHeightMedium: string;
                itemHeightLarge: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderRadius: string;
                borderColor: string;
                listColor: string;
                headerColor: string;
                titleTextColor: string;
                titleTextColorDisabled: string;
                extraTextColor: string;
                filterDividerColor: string;
                itemTextColor: string;
                itemTextColorDisabled: string;
                itemColorPending: string;
                titleFontWeight: string;
                iconColor: string;
                iconColorDisabled: string;
                extraFontSize: string;
                width: string;
            };
            peers: {
                Checkbox: import('../../_mixins').Theme<
                    'Checkbox',
                    {
                        labelLineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        color: string;
                        colorChecked: string;
                        colorDisabled: string;
                        colorDisabledChecked: string;
                        colorTableHeader: string;
                        colorTableHeaderModal: string;
                        colorTableHeaderPopover: string;
                        checkMarkColor: string;
                        checkMarkColorDisabled: string;
                        checkMarkColorDisabledChecked: string;
                        border: string;
                        borderDisabled: string;
                        borderDisabledChecked: string;
                        borderChecked: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        textColor: string;
                        textColorDisabled: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >;
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Input: import('../../_mixins').Theme<
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
                >;
                Empty: import('../../_mixins').Theme<
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
                >;
                Button: import('../../_mixins').Theme<
                    'Button',
                    {
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadiusTiny: string;
                        borderRadiusSmall: string;
                        borderRadiusMedium: string;
                        borderRadiusLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        opacityDisabled: string;
                        colorOpacitySecondary: string;
                        colorOpacitySecondaryHover: string;
                        colorOpacitySecondaryPressed: string;
                        colorSecondary: string;
                        colorSecondaryHover: string;
                        colorSecondaryPressed: string;
                        colorTertiary: string;
                        colorTertiaryHover: string;
                        colorTertiaryPressed: string;
                        colorQuaternary: string;
                        colorQuaternaryHover: string;
                        colorQuaternaryPressed: string;
                        color: string;
                        colorHover: string;
                        colorPressed: string;
                        colorFocus: string;
                        colorDisabled: string;
                        textColor: string;
                        textColorTertiary: string;
                        textColorHover: string;
                        textColorPressed: string;
                        textColorFocus: string;
                        textColorDisabled: string;
                        textColorText: string;
                        textColorTextHover: string;
                        textColorTextPressed: string;
                        textColorTextFocus: string;
                        textColorTextDisabled: string;
                        textColorGhost: string;
                        textColorGhostHover: string;
                        textColorGhostPressed: string;
                        textColorGhostFocus: string;
                        textColorGhostDisabled: string;
                        border: string;
                        borderHover: string;
                        borderPressed: string;
                        borderFocus: string;
                        borderDisabled: string;
                        rippleColor: string;
                        colorPrimary: string;
                        colorHoverPrimary: string;
                        colorPressedPrimary: string;
                        colorFocusPrimary: string;
                        colorDisabledPrimary: string;
                        textColorPrimary: string;
                        textColorHoverPrimary: string;
                        textColorPressedPrimary: string;
                        textColorFocusPrimary: string;
                        textColorDisabledPrimary: string;
                        textColorTextPrimary: string;
                        textColorTextHoverPrimary: string;
                        textColorTextPressedPrimary: string;
                        textColorTextFocusPrimary: string;
                        textColorTextDisabledPrimary: string;
                        textColorGhostPrimary: string;
                        textColorGhostHoverPrimary: string;
                        textColorGhostPressedPrimary: string;
                        textColorGhostFocusPrimary: string;
                        textColorGhostDisabledPrimary: string;
                        borderPrimary: string;
                        borderHoverPrimary: string;
                        borderPressedPrimary: string;
                        borderFocusPrimary: string;
                        borderDisabledPrimary: string;
                        rippleColorPrimary: string;
                        colorInfo: string;
                        colorHoverInfo: string;
                        colorPressedInfo: string;
                        colorFocusInfo: string;
                        colorDisabledInfo: string;
                        textColorInfo: string;
                        textColorHoverInfo: string;
                        textColorPressedInfo: string;
                        textColorFocusInfo: string;
                        textColorDisabledInfo: string;
                        textColorTextInfo: string;
                        textColorTextHoverInfo: string;
                        textColorTextPressedInfo: string;
                        textColorTextFocusInfo: string;
                        textColorTextDisabledInfo: string;
                        textColorGhostInfo: string;
                        textColorGhostHoverInfo: string;
                        textColorGhostPressedInfo: string;
                        textColorGhostFocusInfo: string;
                        textColorGhostDisabledInfo: string;
                        borderInfo: string;
                        borderHoverInfo: string;
                        borderPressedInfo: string;
                        borderFocusInfo: string;
                        borderDisabledInfo: string;
                        rippleColorInfo: string;
                        colorSuccess: string;
                        colorHoverSuccess: string;
                        colorPressedSuccess: string;
                        colorFocusSuccess: string;
                        colorDisabledSuccess: string;
                        textColorSuccess: string;
                        textColorHoverSuccess: string;
                        textColorPressedSuccess: string;
                        textColorFocusSuccess: string;
                        textColorDisabledSuccess: string;
                        textColorTextSuccess: string;
                        textColorTextHoverSuccess: string;
                        textColorTextPressedSuccess: string;
                        textColorTextFocusSuccess: string;
                        textColorTextDisabledSuccess: string;
                        textColorGhostSuccess: string;
                        textColorGhostHoverSuccess: string;
                        textColorGhostPressedSuccess: string;
                        textColorGhostFocusSuccess: string;
                        textColorGhostDisabledSuccess: string;
                        borderSuccess: string;
                        borderHoverSuccess: string;
                        borderPressedSuccess: string;
                        borderFocusSuccess: string;
                        borderDisabledSuccess: string;
                        rippleColorSuccess: string;
                        colorWarning: string;
                        colorHoverWarning: string;
                        colorPressedWarning: string;
                        colorFocusWarning: string;
                        colorDisabledWarning: string;
                        textColorWarning: string;
                        textColorHoverWarning: string;
                        textColorPressedWarning: string;
                        textColorFocusWarning: string;
                        textColorDisabledWarning: string;
                        textColorTextWarning: string;
                        textColorTextHoverWarning: string;
                        textColorTextPressedWarning: string;
                        textColorTextFocusWarning: string;
                        textColorTextDisabledWarning: string;
                        textColorGhostWarning: string;
                        textColorGhostHoverWarning: string;
                        textColorGhostPressedWarning: string;
                        textColorGhostFocusWarning: string;
                        textColorGhostDisabledWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderPressedWarning: string;
                        borderFocusWarning: string;
                        borderDisabledWarning: string;
                        rippleColorWarning: string;
                        colorError: string;
                        colorHoverError: string;
                        colorPressedError: string;
                        colorFocusError: string;
                        colorDisabledError: string;
                        textColorError: string;
                        textColorHoverError: string;
                        textColorPressedError: string;
                        textColorFocusError: string;
                        textColorDisabledError: string;
                        textColorTextError: string;
                        textColorTextHoverError: string;
                        textColorTextPressedError: string;
                        textColorTextFocusError: string;
                        textColorTextDisabledError: string;
                        textColorGhostError: string;
                        textColorGhostHoverError: string;
                        textColorGhostPressedError: string;
                        textColorGhostFocusError: string;
                        textColorGhostDisabledError: string;
                        borderError: string;
                        borderHoverError: string;
                        borderPressedError: string;
                        borderFocusError: string;
                        borderDisabledError: string;
                        rippleColorError: string;
                        waveOpacity: string;
                        fontWeight: string;
                        fontWeightStrong: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingRoundTiny: string;
                        paddingRoundSmall: string;
                        paddingRoundMedium: string;
                        paddingRoundLarge: string;
                        iconMarginTiny: string;
                        iconMarginSmall: string;
                        iconMarginMedium: string;
                        iconMarginLarge: string;
                        iconSizeTiny: string;
                        iconSizeSmall: string;
                        iconSizeMedium: string;
                        iconSizeLarge: string;
                        rippleDuration: string;
                    },
                    any
                >;
            };
            peerOverrides: {
                Checkbox?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Scrollbar?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Input?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Empty?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Button?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        filteredSrcOpts: globalThis.ComputedRef<Option[]>;
        filteredTgtOpts: globalThis.ComputedRef<any[]>;
        srcPattern: globalThis.Ref<string>;
        tgtPattern: globalThis.Ref<string>;
        toButtonDisabled: globalThis.ComputedRef<boolean>;
        fromButtonDisabled: globalThis.ComputedRef<boolean>;
        handleSrcHeaderCheck: (value: boolean) => void;
        handleTgtHeaderCheck: () => void;
        handleToSrcClick: () => void;
        handleToTgtClick: () => void;
        handleInputFocus: () => void;
        handleInputBlur: () => void;
        handleTgtFilterUpdateValue: (value: string | null) => void;
        handleSrcFilterUpdateValue: (value: string | null) => void;
        cssVars: globalThis.ComputedRef<{
            '--n-bezier': string;
            '--n-bezier-ease-in': string;
            '--n-bezier-ease-out': string;
            '--n-border-color': string;
            '--n-border-radius': string;
            '--n-extra-font-size': string;
            '--n-filter-divider-color': string;
            '--n-font-size': string;
            '--n-header-color': string;
            '--n-header-extra-text-color': string;
            '--n-header-font-weight': string;
            '--n-header-text-color': string;
            '--n-header-text-color-disabled': string;
            '--n-item-color-pending': string;
            '--n-item-height': string;
            '--n-item-text-color': string;
            '--n-item-text-color-disabled': string;
            '--n-list-color': string;
            '--n-width': string;
            '--n-icon-color': string;
            '--n-icon-color-disabled': string;
        }>;
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
            readonly value: PropType<OptionValue[] | null>;
            readonly defaultValue: {
                readonly type: PropType<OptionValue[] | null>;
                readonly default: null;
            };
            readonly options: {
                readonly type: PropType<Option[]>;
                readonly default: () => never[];
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly virtualScroll: BooleanConstructor;
            readonly sourceTitle: StringConstructor;
            readonly targetTitle: StringConstructor;
            readonly filterable: BooleanConstructor;
            readonly sourceFilterPlaceholder: StringConstructor;
            readonly targetFilterPlaceholder: StringConstructor;
            readonly filter: {
                readonly type: PropType<Filter>;
                readonly default: (
                    pattern: string,
                    option: Option
                ) => number | true;
            };
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly onChange: PropType<MaybeArray<OnUpdateValue>>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Transfer',
                    {
                        itemHeightSmall: string;
                        itemHeightMedium: string;
                        itemHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        borderColor: string;
                        listColor: string;
                        headerColor: string;
                        titleTextColor: string;
                        titleTextColorDisabled: string;
                        extraTextColor: string;
                        filterDividerColor: string;
                        itemTextColor: string;
                        itemTextColorDisabled: string;
                        itemColorPending: string;
                        titleFontWeight: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        extraFontSize: string;
                        width: string;
                    },
                    {
                        Checkbox: import('../../_mixins').Theme<
                            'Checkbox',
                            {
                                labelLineHeight: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                borderRadius: string;
                                color: string;
                                colorChecked: string;
                                colorDisabled: string;
                                colorDisabledChecked: string;
                                colorTableHeader: string;
                                colorTableHeaderModal: string;
                                colorTableHeaderPopover: string;
                                checkMarkColor: string;
                                checkMarkColorDisabled: string;
                                checkMarkColorDisabledChecked: string;
                                border: string;
                                borderDisabled: string;
                                borderDisabledChecked: string;
                                borderChecked: string;
                                borderFocus: string;
                                boxShadowFocus: string;
                                textColor: string;
                                textColorDisabled: string;
                                sizeSmall: string;
                                sizeMedium: string;
                                sizeLarge: string;
                                labelPadding: string;
                                labelFontWeight: string;
                            },
                            any
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Input: import('../../_mixins').Theme<
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
                        >;
                        Empty: import('../../_mixins').Theme<
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
                        >;
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Transfer',
                        {
                            itemHeightSmall: string;
                            itemHeightMedium: string;
                            itemHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            borderColor: string;
                            listColor: string;
                            headerColor: string;
                            titleTextColor: string;
                            titleTextColorDisabled: string;
                            extraTextColor: string;
                            filterDividerColor: string;
                            itemTextColor: string;
                            itemTextColorDisabled: string;
                            itemColorPending: string;
                            titleFontWeight: string;
                            iconColor: string;
                            iconColorDisabled: string;
                            extraFontSize: string;
                            width: string;
                        },
                        {
                            Checkbox: import('../../_mixins').Theme<
                                'Checkbox',
                                {
                                    labelLineHeight: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    borderRadius: string;
                                    color: string;
                                    colorChecked: string;
                                    colorDisabled: string;
                                    colorDisabledChecked: string;
                                    colorTableHeader: string;
                                    colorTableHeaderModal: string;
                                    colorTableHeaderPopover: string;
                                    checkMarkColor: string;
                                    checkMarkColorDisabled: string;
                                    checkMarkColorDisabledChecked: string;
                                    border: string;
                                    borderDisabled: string;
                                    borderDisabledChecked: string;
                                    borderChecked: string;
                                    borderFocus: string;
                                    boxShadowFocus: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    sizeSmall: string;
                                    sizeMedium: string;
                                    sizeLarge: string;
                                    labelPadding: string;
                                    labelFontWeight: string;
                                },
                                any
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Input: import('../../_mixins').Theme<
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
                            >;
                            Empty: import('../../_mixins').Theme<
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
                            >;
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Transfer',
                        {
                            itemHeightSmall: string;
                            itemHeightMedium: string;
                            itemHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            borderColor: string;
                            listColor: string;
                            headerColor: string;
                            titleTextColor: string;
                            titleTextColorDisabled: string;
                            extraTextColor: string;
                            filterDividerColor: string;
                            itemTextColor: string;
                            itemTextColorDisabled: string;
                            itemColorPending: string;
                            titleFontWeight: string;
                            iconColor: string;
                            iconColorDisabled: string;
                            extraFontSize: string;
                            width: string;
                        },
                        {
                            Checkbox: import('../../_mixins').Theme<
                                'Checkbox',
                                {
                                    labelLineHeight: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    borderRadius: string;
                                    color: string;
                                    colorChecked: string;
                                    colorDisabled: string;
                                    colorDisabledChecked: string;
                                    colorTableHeader: string;
                                    colorTableHeaderModal: string;
                                    colorTableHeaderPopover: string;
                                    checkMarkColor: string;
                                    checkMarkColorDisabled: string;
                                    checkMarkColorDisabledChecked: string;
                                    border: string;
                                    borderDisabled: string;
                                    borderDisabledChecked: string;
                                    borderChecked: string;
                                    borderFocus: string;
                                    boxShadowFocus: string;
                                    textColor: string;
                                    textColorDisabled: string;
                                    sizeSmall: string;
                                    sizeMedium: string;
                                    sizeLarge: string;
                                    labelPadding: string;
                                    labelFontWeight: string;
                                },
                                any
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Input: import('../../_mixins').Theme<
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
                            >;
                            Empty: import('../../_mixins').Theme<
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
                            >;
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly filter: Filter;
        readonly disabled: boolean | undefined;
        readonly options: Option[];
        readonly virtualScroll: boolean;
        readonly filterable: boolean;
        readonly defaultValue: OptionValue[] | null;
    },
    {}
>;
export default _default;
