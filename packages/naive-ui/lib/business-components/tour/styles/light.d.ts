import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
    dotColor: string;
    dotSize: string;
    dotColorActive: string;
    dotColorFocus: string;
    boxColor: string;
};
export type TourThemeVars = ReturnType<typeof self>;
declare const tourLight: Theme<'Tour', TourThemeVars>;
export default tourLight;
export type TourTheme = typeof tourLight;
