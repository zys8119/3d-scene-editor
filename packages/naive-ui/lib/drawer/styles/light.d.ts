import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    bodyPadding: string;
    headerPadding: string;
    footerPadding: string;
    color: string;
    textColor: string;
    titleTextColor: string;
    titleFontSize: string;
    titleFontWeight: string;
    boxShadow: string;
    lineHeight: string;
    headerBorderBottom: string;
    footerBorderTop: string;
    closeIconColor: string;
    closeIconColorHover: string;
    closeIconColorPressed: string;
    closeSize: string;
    closeIconSize: string;
    closeColorHover: string;
    closeColorPressed: string;
    closeBorderRadius: string;
    resizableTriggerColorHover: string;
};
export type DrawerThemeVars = ReturnType<typeof self>;
declare const drawerLight: import('../../_mixins').Theme<
    'Drawer',
    {
        bodyPadding: string;
        headerPadding: string;
        footerPadding: string;
        color: string;
        textColor: string;
        titleTextColor: string;
        titleFontSize: string;
        titleFontWeight: string;
        boxShadow: string;
        lineHeight: string;
        headerBorderBottom: string;
        footerBorderTop: string;
        closeIconColor: string;
        closeIconColorHover: string;
        closeIconColorPressed: string;
        closeSize: string;
        closeIconSize: string;
        closeColorHover: string;
        closeColorPressed: string;
        closeBorderRadius: string;
        resizableTriggerColorHover: string;
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
export default drawerLight;
export type DrawerTheme = typeof drawerLight;
