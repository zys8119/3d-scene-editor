import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    fontSize: string;
    titleTextColor: string;
    textColor: string;
    titleFontWeight: string;
};
export type ThingThemeVars = ReturnType<typeof self>;
declare const thingLight: Theme<'Thing', ThingThemeVars>;
export default thingLight;
export type ThingTheme = typeof thingLight;
