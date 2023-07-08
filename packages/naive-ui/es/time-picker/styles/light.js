import commonVars from './_common';
import { scrollbarLight } from '../../_internal/scrollbar/styles';
import { commonLight } from '../../_styles/common';
import { buttonLight } from '../../button/styles';
import { createTheme } from '../../_mixins';
import { inputLight } from '../../input/styles';
export const self = (vars) => {
    const {
        popoverColor,
        textColor2,
        primaryColor,
        hoverColor,
        dividerColor,
        opacityDisabled,
        boxShadow2,
        borderRadius,
        iconColor,
        iconColorDisabled,
    } = vars;
    return Object.assign(Object.assign({}, commonVars), {
        panelColor: popoverColor,
        panelBoxShadow: boxShadow2,
        panelDividerColor: dividerColor,
        itemTextColor: textColor2,
        itemTextColorActive: primaryColor,
        itemColorHover: hoverColor,
        itemOpacityDisabled: opacityDisabled,
        itemBorderRadius: borderRadius,
        borderRadius,
        iconColor,
        iconColorDisabled,
    });
};
const timePickerLight = createTheme({
    name: 'TimePicker',
    common: commonLight,
    peers: {
        Scrollbar: scrollbarLight,
        Button: buttonLight,
        Input: inputLight,
    },
    self,
});
export default timePickerLight;
