import { changeColor } from 'seemly';
import { commonLight } from '../../_styles/common';
import { createTheme } from '../../_mixins/use-theme';
import commonVariables from './_common';
import { popoverLight } from '../../popover/styles';
export const self = (vars) => {
    const {
        primaryColor,
        textColor2,
        dividerColor,
        hoverColor,
        popoverColor,
        invertedColor,
        borderRadius,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        heightSmall,
        heightMedium,
        heightLarge,
        heightHuge,
        textColor3,
        opacityDisabled,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        optionHeightSmall: heightSmall,
        optionHeightMedium: heightMedium,
        optionHeightLarge: heightLarge,
        optionHeightHuge: heightHuge,
        borderRadius,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        optionTextColor: textColor2,
        optionTextColorHover: textColor2,
        optionTextColorActive: primaryColor,
        optionTextColorChildActive: primaryColor,
        color: popoverColor,
        dividerColor,
        suffixColor: textColor2,
        prefixColor: textColor2,
        optionColorHover: hoverColor,
        optionColorActive: changeColor(primaryColor, { alpha: 0.1 }),
        groupHeaderTextColor: textColor3,
        optionTextColorInverted: '#BBB',
        optionTextColorHoverInverted: '#FFF',
        optionTextColorActiveInverted: '#FFF',
        optionTextColorChildActiveInverted: '#FFF',
        colorInverted: invertedColor,
        dividerColorInverted: '#BBB',
        suffixColorInverted: '#BBB',
        prefixColorInverted: '#BBB',
        optionColorHoverInverted: primaryColor,
        optionColorActiveInverted: primaryColor,
        groupHeaderTextColorInverted: '#AAA',
        optionOpacityDisabled: opacityDisabled,
    });
};
const dropdownLight = createTheme({
    name: 'Dropdown',
    common: commonLight,
    peers: {
        Popover: popoverLight,
    },
    self,
});
export default dropdownLight;
