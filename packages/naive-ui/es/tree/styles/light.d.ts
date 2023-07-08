import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    fontSize: string;
    nodeBorderRadius: string;
    nodeColorHover: string;
    nodeColorPressed: string;
    nodeColorActive: string;
    arrowColor: string;
    nodeTextColor: string;
    nodeTextColorDisabled: string;
    loadingColor: string;
    dropMarkColor: string;
};
export type TreeThemeVars = ReturnType<typeof self>;
declare const treeLight: import('../../_mixins/use-theme').Theme<
    'Tree',
    {
        fontSize: string;
        nodeBorderRadius: string;
        nodeColorHover: string;
        nodeColorPressed: string;
        nodeColorActive: string;
        arrowColor: string;
        nodeTextColor: string;
        nodeTextColorDisabled: string;
        loadingColor: string;
        dropMarkColor: string;
    },
    {
        Checkbox: import('../../_mixins/use-theme').Theme<
            'Checkbox',
            {
                labelLineHeight: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderRadius: string;
                color: string;
                colorChecked: string;
                colorDisabled: string;
                colorDisabledChecked: string;
                colorTableHeader: string;
                colorTableHeaderModal: string;
                colorTableHeaderPopover: string;
                checkMarkColor: string;
                checkMarkColorDisabled: string;
                checkMarkColorDisabledChecked: string;
                border: string;
                borderDisabled: string;
                borderDisabledChecked: string;
                borderChecked: string;
                borderFocus: string;
                boxShadowFocus: string;
                textColor: string;
                textColorDisabled: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                labelPadding: string;
                labelFontWeight: string;
            },
            any
        >;
        Scrollbar: import('../../_mixins/use-theme').Theme<
            'Scrollbar',
            {
                color: string;
                colorHover: string;
            },
            any
        >;
        Empty: import('../../_mixins/use-theme').Theme<
            'Empty',
            {
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                textColor: string;
                iconColor: string;
                extraTextColor: string;
                iconSizeSmall: string;
                iconSizeMedium: string;
                iconSizeLarge: string;
                iconSizeHuge: string;
            },
            any
        >;
    }
>;
export default treeLight;
export type TreeTheme = typeof treeLight;
