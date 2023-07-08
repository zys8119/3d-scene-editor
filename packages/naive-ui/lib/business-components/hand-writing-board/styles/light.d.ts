import type { ThemeCommonVars } from '../../../_styles/common';
import { Theme } from '../../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    baseColor: string;
    borderColor: string;
};
export type HandWritingBoardThemeVars = ReturnType<typeof self>;
declare const handWritingBoardLight: Theme<
    'HandWritingBoard',
    HandWritingBoardThemeVars
>;
export default handWritingBoardLight;
export type HandWritingBoardTheme = typeof handWritingBoardLight;
