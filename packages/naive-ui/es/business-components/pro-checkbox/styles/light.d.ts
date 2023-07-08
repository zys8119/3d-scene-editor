import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
};
export type ProCheckboxThemeVars = ReturnType<typeof self>;
declare const proCheckboxLight: Theme<'ProCheckbox', ProCheckboxThemeVars>;
export default proCheckboxLight;
export type ProCheckboxTheme = typeof proCheckboxLight;
