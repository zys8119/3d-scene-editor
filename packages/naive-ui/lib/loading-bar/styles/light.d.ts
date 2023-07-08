import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';
declare const self: (vars: ThemeCommonVars) => {
    colorError: string;
    colorLoading: string;
    height: string;
};
export type LoadingBarThemeVars = ReturnType<typeof self>;
declare const loadingBarLight: Theme<'LoadingBar', LoadingBarThemeVars>;
export default loadingBarLight;
export type LoadingBarTheme = typeof loadingBarLight;
