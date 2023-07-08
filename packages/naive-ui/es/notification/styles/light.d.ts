import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    borderRadius: string;
    lineHeight: string;
    fontSize: string;
    headerFontWeight: string;
    iconColor: string;
    iconColorSuccess: string;
    iconColorInfo: string;
    iconColorWarning: string;
    iconColorError: string;
    color: string;
    textColor: string;
    closeIconColor: string;
    closeIconColorHover: string;
    closeIconColorPressed: string;
    closeBorderRadius: string;
    closeColorHover: string;
    closeColorPressed: string;
    headerTextColor: string;
    descriptionTextColor: string;
    actionTextColor: string;
    boxShadow: string;
    closeMargin: string;
    closeSize: string;
    closeIconSize: string;
    width: string;
    padding: string;
    titleFontSize: string;
    metaFontSize: string;
    descriptionFontSize: string;
};
export type NotificationThemeVars = ReturnType<typeof self>;
declare const notificationLight: import('../../_mixins').Theme<
    'Notification',
    {
        borderRadius: string;
        lineHeight: string;
        fontSize: string;
        headerFontWeight: string;
        iconColor: string;
        iconColorSuccess: string;
        iconColorInfo: string;
        iconColorWarning: string;
        iconColorError: string;
        color: string;
        textColor: string;
        closeIconColor: string;
        closeIconColorHover: string;
        closeIconColorPressed: string;
        closeBorderRadius: string;
        closeColorHover: string;
        closeColorPressed: string;
        headerTextColor: string;
        descriptionTextColor: string;
        actionTextColor: string;
        boxShadow: string;
        closeMargin: string;
        closeSize: string;
        closeIconSize: string;
        width: string;
        padding: string;
        titleFontSize: string;
        metaFontSize: string;
        descriptionFontSize: string;
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
export default notificationLight;
export type NotificationTheme = typeof notificationLight;
