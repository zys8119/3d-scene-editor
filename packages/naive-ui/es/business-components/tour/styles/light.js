import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { primaryColor, popoverColor } = vars;
    return {
        padding: '10px',
        dotColor: 'rgba(217, 217, 217, 1)',
        dotSize: '8px',
        dotColorActive: primaryColor,
        dotColorFocus: 'rgba(217, 217, 217, .8)',
        boxColor: popoverColor,
    };
};
const tourLight = {
    name: 'Tour',
    common: commonLight,
    self,
};
export default tourLight;
