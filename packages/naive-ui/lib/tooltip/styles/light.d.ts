import type { ThemeCommonVars } from '../../_styles/common';
declare const self: (vars: ThemeCommonVars) => {
    borderRadius: string;
    boxShadow: string;
    color: string;
    textColor: string;
    padding: string;
};
export type TooltipThemeVars = ReturnType<typeof self>;
declare const tooltipLight: import('../../_mixins/use-theme').Theme<
    'Tooltip',
    {
        borderRadius: string;
        boxShadow: string;
        color: string;
        textColor: string;
        padding: string;
    },
    {
        Popover: import('../../_mixins/use-theme').Theme<
            'Popover',
            {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            },
            any
        >;
    }
>;
export default tooltipLight;
export type TooltipTheme = typeof tooltipLight;
