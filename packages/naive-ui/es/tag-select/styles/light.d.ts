import { Theme } from '../../_mixins';
import { ThemeCommonVars } from '../../_styles/common';
declare const self: (vars: ThemeCommonVars) => {
    tagSelectHandleColor: string;
    itemHeight: string;
};
export type TagSelectThemeVars = ReturnType<typeof self>;
declare const tagSelectLight: Theme<'TagSelect', TagSelectThemeVars>;
export default tagSelectLight;
export type TagSelectTheme = typeof tagSelectLight;
