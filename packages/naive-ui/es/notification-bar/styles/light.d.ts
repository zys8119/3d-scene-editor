import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
};
export type NotificationBarThemeVars = ReturnType<typeof self>;
declare const notificationBarLight: Theme<
    'NotificationBar',
    NotificationBarThemeVars
>;
export default notificationBarLight;
export type NotificationBarTheme = typeof notificationBarLight;
