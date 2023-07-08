import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
};
export type MapThemeVars = ReturnType<typeof self>;
declare const mapLight: Theme<'Map', MapThemeVars>;
export default mapLight;
export type MapTheme = typeof mapLight;
