import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    padding: string;
};
export type QrCodeThemeVars = ReturnType<typeof self>;
declare const qrCodeLight: Theme<'QrCode', QrCodeThemeVars>;
export default qrCodeLight;
export type QrCodeTheme = typeof qrCodeLight;
