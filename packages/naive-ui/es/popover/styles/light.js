import { commonLight } from '../../_styles/common';
import commonVariables from './_common';
export const self = (vars) => {
    const {
        boxShadow2,
        popoverColor,
        textColor2,
        borderRadius,
        fontSize,
        dividerColor,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        fontSize,
        borderRadius,
        color: popoverColor,
        dividerColor,
        textColor: textColor2,
        boxShadow: boxShadow2,
    });
};
const popoverLight = {
    name: 'Popover',
    common: commonLight,
    self,
};
export default popoverLight;
