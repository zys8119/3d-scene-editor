import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    color: string;
    opacity1Depth: string;
    opacity2Depth: string;
    opacity3Depth: string;
    opacity4Depth: string;
    opacity5Depth: string;
};
export type IconThemeVars = ReturnType<typeof self>;
declare const iconLight: Theme<'Icon', IconThemeVars>;
export default iconLight;
export type IconTheme = typeof iconLight;
