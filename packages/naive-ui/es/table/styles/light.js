import { composite } from 'seemly';
import sizeVariables from './_common';
import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const {
        dividerColor,
        cardColor,
        modalColor,
        popoverColor,
        tableHeaderColor,
        tableColorStriped,
        textColor1,
        textColor2,
        borderRadius,
        fontWeightStrong,
        lineHeight,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
    } = vars;
    return Object.assign(Object.assign({}, sizeVariables), {
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        lineHeight,
        borderRadius,
        borderColor: composite(cardColor, dividerColor),
        borderColorModal: composite(modalColor, dividerColor),
        borderColorPopover: composite(popoverColor, dividerColor),
        tdColor: cardColor,
        tdColorModal: modalColor,
        tdColorPopover: popoverColor,
        tdColorStriped: composite(cardColor, tableColorStriped),
        tdColorStripedModal: composite(modalColor, tableColorStriped),
        tdColorStripedPopover: composite(popoverColor, tableColorStriped),
        thColor: composite(cardColor, tableHeaderColor),
        thColorModal: composite(modalColor, tableHeaderColor),
        thColorPopover: composite(popoverColor, tableHeaderColor),
        thTextColor: textColor1,
        tdTextColor: textColor2,
        thFontWeight: fontWeightStrong,
    });
};
const tableLight = {
    name: 'Table',
    common: commonLight,
    self,
};
export default tableLight;
