import { composite } from 'seemly';
import { commonLight } from '../../_styles/common';
import commonVariables from './_common';
import { createTheme } from '../../_mixins';
import { buttonLight } from '../../button/styles';
export const self = (vars) => {
    const {
        borderRadius,
        fontSize,
        lineHeight,
        textColor2,
        textColor1,
        textColorDisabled,
        dividerColor,
        fontWeightStrong,
        primaryColor,
        baseColor,
        hoverColor,
        cardColor,
        modalColor,
        popoverColor,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        borderRadius,
        borderColor: composite(cardColor, dividerColor),
        borderColorModal: composite(modalColor, dividerColor),
        borderColorPopover: composite(popoverColor, dividerColor),
        textColor: textColor2,
        titleFontWeight: fontWeightStrong,
        titleTextColor: textColor1,
        dayTextColor: textColorDisabled,
        fontSize,
        lineHeight,
        dateColorCurrent: primaryColor,
        dateTextColorCurrent: baseColor,
        cellColorHover: composite(cardColor, hoverColor),
        cellColorHoverModal: composite(modalColor, hoverColor),
        cellColorHoverPopover: composite(popoverColor, hoverColor),
        cellColor: cardColor,
        cellColorModal: modalColor,
        cellColorPopover: popoverColor,
        barColor: primaryColor,
    });
};
const calendarLight = createTheme({
    name: 'Calendar',
    common: commonLight,
    peers: {
        Button: buttonLight,
    },
    self,
});
export default calendarLight;
