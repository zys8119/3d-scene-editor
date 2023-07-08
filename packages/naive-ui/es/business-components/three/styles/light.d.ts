import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    baseColor: string;
};
export type ThreeThemeVars = ReturnType<typeof self>;
declare const threeLight: Theme<'ScrollList', ThreeThemeVars>;
export default threeLight;
export type ThreeTheme = typeof threeLight;
