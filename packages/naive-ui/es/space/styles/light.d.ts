import type { Theme } from '../../_mixins';
declare const self: () => {
    gapSmall: string;
    gapMedium: string;
    gapLarge: string;
};
export type SpaceThemeVars = ReturnType<typeof self>;
declare const spaceLight: Theme<'Space', SpaceThemeVars>;
export default spaceLight;
export type SpaceTheme = typeof spaceLight;
