import type { ThemeCommonVars } from '../../_styles/common';
import { Theme } from '../../_mixins';
export declare const self: (vars: ThemeCommonVars) => {
    labelFontSize: string;
    labelFontWeight: string;
    valueFontWeight: string;
    valueFontSize: string;
    labelTextColor: string;
    valuePrefixTextColor: string;
    valueSuffixTextColor: string;
    valueTextColor: string;
};
export type StatisticThemeVars = ReturnType<typeof self>;
declare const statisticLight: Theme<'Statistic', StatisticThemeVars>;
export default statisticLight;
export type StatisticTheme = typeof statisticLight;
