import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
    baseColor: string;
};
export type ScrollListThemeVars = ReturnType<typeof self>;
declare const scrollListLight: Theme<'ScrollList', ScrollListThemeVars>;
export default scrollListLight;
export type ScrollListTheme = typeof scrollListLight;
