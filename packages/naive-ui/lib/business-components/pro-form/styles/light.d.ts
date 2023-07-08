import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
};
export type ProFormThemeVars = ReturnType<typeof self>;
declare const proFormLight: Theme<'ProForm', ProFormThemeVars>;
export default proFormLight;
export type ProFormTheme = typeof proFormLight;
