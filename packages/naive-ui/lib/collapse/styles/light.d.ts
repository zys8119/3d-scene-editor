import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins/use-theme';
export declare const self: (vars: ThemeCommonVars) => {
    titleFontSize: string;
    titleFontWeight: string;
    dividerColor: string;
    titleTextColor: string;
    titleTextColorDisabled: string;
    fontSize: string;
    textColor: string;
    arrowColor: string;
    arrowColorDisabled: string;
    itemMargin: string;
};
export type CollapseThemeVars = ReturnType<typeof self>;
declare const collapseLight: Theme<'Collapse', CollapseThemeVars>;
export default collapseLight;
export type CollapseTheme = typeof collapseLight;
