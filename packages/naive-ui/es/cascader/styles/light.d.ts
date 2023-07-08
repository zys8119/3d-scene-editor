import type { ThemeCommonVars } from '../../_styles/common';
export declare const self: (vars: ThemeCommonVars) => {
    menuBorderRadius: string;
    menuColor: string;
    menuBoxShadow: string;
    menuDividerColor: string;
    menuHeight: string;
    optionArrowColor: string;
    optionHeight: string;
    optionFontSize: string;
    optionColorHover: string;
    optionTextColor: string;
    optionTextColorActive: string;
    optionTextColorDisabled: string;
    optionCheckMarkColor: string;
    loadingColor: string;
    columnWidth: string;
};
export type CascaderThemeVars = ReturnType<typeof self>;
declare const cascaderLight: import('../../_mixins').Theme<
    'Cascader',
    {
        menuBorderRadius: string;
        menuColor: string;
        menuBoxShadow: string;
        menuDividerColor: string;
        menuHeight: string;
        optionArrowColor: string;
        optionHeight: string;
        optionFontSize: string;
        optionColorHover: string;
        optionTextColor: string;
        optionTextColorActive: string;
        optionTextColorDisabled: string;
        optionCheckMarkColor: string;
        loadingColor: string;
        columnWidth: string;
    },
    {
        InternalSelectMenu: import('../../_mixins').Theme<
            'InternalSelectMenu',
            {
                optionFontSizeSmall: string;
                optionFontSizeMedium: string;
                optionFontSizeLarge: string;
                optionFontSizeHuge: string;
                optionHeightSmall: string;
                optionHeightMedium: string;
                optionHeightLarge: string;
                optionHeightHuge: string;
                borderRadius: string;
                color: string;
                groupHeaderTextColor: string;
                actionDividerColor: string;
                optionTextColor: string;
                optionTextColorPressed: string;
                optionTextColorDisabled: string;
                optionTextColorActive: string;
                optionOpacityDisabled: string;
                optionCheckColor: string;
                optionColorPending: string;
                optionColorActive: string;
                optionColorActivePending: string;
                actionTextColor: string;
                loadingColor: string;
                height: string;
                paddingSmall: string;
                paddingMedium: string;
                paddingLarge: string;
                paddingHuge: string;
                optionPaddingSmall: string;
                optionPaddingMedium: string;
                optionPaddingLarge: string;
                optionPaddingHuge: string;
                loadingSize: string;
            },
            {
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Empty: import('../../_mixins').Theme<
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
        InternalSelection: import('../../_mixins').Theme<
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
                Popover: import('../../_mixins').Theme<
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
        Scrollbar: import('../../_mixins').Theme<
            'Scrollbar',
            {
                color: string;
                colorHover: string;
            },
            any
        >;
        Checkbox: import('../../_mixins').Theme<
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
        Empty: import('../../_mixins').Theme<
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
export default cascaderLight;
export type CascaderTheme = typeof cascaderLight;
