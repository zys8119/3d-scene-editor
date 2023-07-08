import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins';
declare const self: (vars: ThemeCommonVars) => {
    color: string;
    colorInfo: string;
    colorSuccess: string;
    colorError: string;
    colorWarning: string;
    fontSize: string;
    fontFamily: string;
};
export type BadgeThemeVars = ReturnType<typeof self>;
declare const badgeLight: Theme<'Badge', BadgeThemeVars>;
export default badgeLight;
export type BadgeTheme = typeof badgeLight;
