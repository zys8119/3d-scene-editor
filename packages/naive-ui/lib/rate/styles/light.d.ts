import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins';
declare const self: (vars: ThemeCommonVars) => {
    itemColor: string;
    itemColorActive: string;
    sizeSmall: string;
    sizeMedium: string;
    sizeLarge: string;
};
export type RateThemeVars = ReturnType<typeof self>;
declare const themeLight: Theme<'Rate', RateThemeVars>;
export default themeLight;
export type RateTheme = typeof themeLight;
