import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    fontSize: string;
    lineHeight: string;
    borderRadius: string;
    draggerColor: string;
    draggerBorder: string;
    draggerBorderHover: string;
    itemColorHover: string;
    itemColorHoverError: string;
    itemTextColor: string;
    itemTextColorError: string;
    itemTextColorSuccess: string;
    itemIconColor: string;
    itemDisabledOpacity: string;
    itemBorderImageCardError: string;
    itemBorderImageCard: string;
};
export type UploadThemeVars = ReturnType<typeof self>;
declare const uploadLight: import('../../_mixins').Theme<
    'Upload',
    {
        fontSize: string;
        lineHeight: string;
        borderRadius: string;
        draggerColor: string;
        draggerBorder: string;
        draggerBorderHover: string;
        itemColorHover: string;
        itemColorHoverError: string;
        itemTextColor: string;
        itemTextColorError: string;
        itemTextColorSuccess: string;
        itemIconColor: string;
        itemDisabledOpacity: string;
        itemBorderImageCardError: string;
        itemBorderImageCard: string;
    },
    {
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
        Progress: import('../../_mixins').Theme<
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
        >;
    }
>;
export default uploadLight;
export type UploadTheme = typeof uploadLight;