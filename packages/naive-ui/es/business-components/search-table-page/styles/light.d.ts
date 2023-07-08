import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    baseColor: string;
};
export type SearchTablePageThemeVars = ReturnType<typeof self>;
declare const searchTablePageLight: Theme<
    'SearchTablePage',
    SearchTablePageThemeVars
>;
export default searchTablePageLight;
export type SearchTablePageTheme = typeof searchTablePageLight;
