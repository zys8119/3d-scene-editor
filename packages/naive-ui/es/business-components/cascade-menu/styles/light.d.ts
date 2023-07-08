import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins/use-theme';
declare const self: (vars: ThemeCommonVars) => {
    primaryColor: string;
    primaryColorHover: string;
    neutralCard: string;
};
export type CascadeMenuThemeVars = ReturnType<typeof self>;
declare const cascadeMenuLight: Theme<'CascadeMenu', CascadeMenuThemeVars>;
export default cascadeMenuLight;
export type CascadeMenuTheme = typeof cascadeMenuLight;
