import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
    baseColor: string;
};
export type ProUploadThemeVars = ReturnType<typeof self>;
declare const proUploadLight: Theme<'ProUpload', ProUploadThemeVars>;
export default proUploadLight;
export type ProUploadTheme = typeof proUploadLight;
