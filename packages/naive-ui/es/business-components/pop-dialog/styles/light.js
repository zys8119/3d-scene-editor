import { popoverLight } from '../../../popover/styles';
import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const {
        textColor2,
        textColor6,
        textColor7,
        popoverColor,
        primaryColor,
        pressedColor,
        primaryColorPressed,
        primaryColorSuppl,
    } = vars;
    return {
        leftColor: textColor2,
        leftBackgroundColor: popoverColor,
        leftActiveBackgroundColor: pressedColor,
        rightColor: textColor7,
        rightBackgroundColor: primaryColor,
        rightActiveBackgroundColor: primaryColorPressed,
        rightFileHoverColor: primaryColorSuppl,
        titleColor: textColor6,
        borderRadius: '10px',
        titleFontSize: '12px',
        fontSize: '14px',
        arrowSize: '8px',
    };
};
const popDialogLight = {
    name: 'PopDialog',
    common: commonLight,
    peers: {
        Popover: popoverLight,
    },
    self,
};
export default popDialogLight;
