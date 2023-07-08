import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    textColor: string;
    textColorInverted: string;
    color: string;
    colorEmbedded: string;
    headerColor: string;
    headerColorInverted: string;
    footerColor: string;
    footerColorInverted: string;
    headerBorderColor: string;
    headerBorderColorInverted: string;
    footerBorderColor: string;
    footerBorderColorInverted: string;
    siderBorderColor: string;
    siderBorderColorInverted: string;
    siderColor: string;
    siderColorInverted: string;
    siderToggleButtonBorder: string;
    siderToggleButtonColor: string;
    siderToggleButtonIconColor: string;
    siderToggleButtonIconColorInverted: string;
    siderToggleBarColor: string;
    siderToggleBarColorHover: string;
    __invertScrollbar: string;
};
export type LayoutThemeVars = ReturnType<typeof self>;
declare const layoutLight: import('../../_mixins').Theme<
    'Layout',
    {
        textColor: string;
        textColorInverted: string;
        color: string;
        colorEmbedded: string;
        headerColor: string;
        headerColorInverted: string;
        footerColor: string;
        footerColorInverted: string;
        headerBorderColor: string;
        headerBorderColorInverted: string;
        footerBorderColor: string;
        footerBorderColorInverted: string;
        siderBorderColor: string;
        siderBorderColorInverted: string;
        siderColor: string;
        siderColorInverted: string;
        siderToggleButtonBorder: string;
        siderToggleButtonColor: string;
        siderToggleButtonIconColor: string;
        siderToggleButtonIconColorInverted: string;
        siderToggleBarColor: string;
        siderToggleBarColorHover: string;
        __invertScrollbar: string;
    },
    {
        Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
                color: string;
                colorHover: string;
            },
            any
        >;
    }
>;
export default layoutLight;
export type LayoutTheme = typeof layoutLight;
