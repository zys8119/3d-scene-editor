import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    menuPadding: string;
    menuColor: string;
    menuBoxShadow: string;
    menuBorderRadius: string;
    menuHeight: string;
    actionDividerColor: string;
    actionTextColor: string;
    actionPadding: string;
};
export type TreeSelectThemeVars = ReturnType<typeof self>;
declare const treeSelectLight: import('../../_mixins/use-theme').Theme<
    'TreeSelect',
    {
        menuPadding: string;
        menuColor: string;
        menuBoxShadow: string;
        menuBorderRadius: string;
        menuHeight: string;
        actionDividerColor: string;
        actionTextColor: string;
        actionPadding: string;
    },
    {
        Tree: import('../../_mixins/use-theme').Theme<
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
        InternalSelection: import('../../_mixins/use-theme').Theme<
            'InternalSelection',
            {
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                borderRadius: string;
                textColor: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                color: string;
                colorDisabled: string;
                colorActive: string;
                border: string;
                borderHover: string;
                borderActive: string;
                borderFocus: string;
                boxShadowHover: string;
                boxShadowActive: string;
                boxShadowFocus: string;
                caretColor: string;
                arrowColor: string;
                arrowColorDisabled: string;
                loadingColor: string;
                borderWarning: string;
                borderHoverWarning: string;
                borderActiveWarning: string;
                borderFocusWarning: string;
                boxShadowHoverWarning: string;
                boxShadowActiveWarning: string;
                boxShadowFocusWarning: string;
                colorActiveWarning: string;
                caretColorWarning: string;
                borderError: string;
                borderHoverError: string;
                borderActiveError: string;
                borderFocusError: string;
                boxShadowHoverError: string;
                boxShadowActiveError: string;
                boxShadowFocusError: string;
                colorActiveError: string;
                caretColorError: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                paddingSingle: string;
                paddingMultiple: string;
                clearSize: string;
                arrowSize: string;
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
    }
>;
export default treeSelectLight;
export type TreeSelectTheme = typeof treeSelectLight;
