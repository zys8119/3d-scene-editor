import commonVars from './_common';
import { commonLight } from '../../_styles/common';
export const self = (vars) => {
    const {
        textColorDisabled,
        iconColor,
        textColor2,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
    } = vars;
    return Object.assign(Object.assign({}, commonVars), {
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        textColor: textColorDisabled,
        iconColor,
        extraTextColor: textColor2,
    });
};
const emptyLight = {
    name: 'Empty',
    common: commonLight,
    self,
};
export default emptyLight;
