import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    textColor: string;
    color: string;
    fontWeight: string;
};
export type DividerThemeVars = ReturnType<typeof self>;
declare const dividerLight: Theme<'Divider', DividerThemeVars>;
export default dividerLight;
export type DividerTheme = typeof dividerLight;
