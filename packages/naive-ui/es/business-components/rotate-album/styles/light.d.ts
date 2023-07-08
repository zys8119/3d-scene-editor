import { Theme } from '../../../_mixins';
import { ThemeCommonVars } from '../../../_styles/common';
declare const self: (vars: ThemeCommonVars) => {};
export type RotateAlbumThemeVars = ReturnType<typeof self>;
declare const rotateAlbumLight: Theme<'RotateAlbum', RotateAlbumThemeVars>;
export default rotateAlbumLight;
export type RotateAlbumTheme = typeof rotateAlbumLight;
