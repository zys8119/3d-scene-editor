import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins/use-theme';
export declare const self: (vars: ThemeCommonVars) => {
    bezier: string;
};
export type CollapseTransitionThemeVars = ReturnType<typeof self>;
declare const collapseTransitionLight: Theme<
    'CollapseTransition',
    CollapseTransitionThemeVars
>;
export default collapseTransitionLight;
export type CollapseTransitionTheme = typeof collapseTransitionLight;
