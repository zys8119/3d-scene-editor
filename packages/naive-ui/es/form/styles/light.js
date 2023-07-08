import { commonLight } from '../../_styles/common';
import commonVariables from './_common';
export const self = (vars) => {
    const {
        heightSmall,
        heightMedium,
        heightLarge,
        textColor1,
        errorColor,
        warningColor,
        lineHeight,
        textColor3,
    } = vars;
    return Object.assign(Object.assign({}, commonVariables), {
        blankHeightSmall: heightSmall,
        blankHeightMedium: heightMedium,
        blankHeightLarge: heightLarge,
        lineHeight,
        labelTextColor: textColor1,
        asteriskColor: errorColor,
        feedbackTextColorError: errorColor,
        feedbackTextColorWarning: warningColor,
        feedbackTextColor: textColor3,
    });
};
const formLight = {
    name: 'Form',
    common: commonLight,
    self,
};
export default formLight;
