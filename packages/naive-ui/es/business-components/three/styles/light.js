import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { baseColor } = vars;
    return {
        baseColor,
    };
};
const threeLight = {
    name: 'ScrollList',
    common: commonLight,
    self,
};
export default threeLight;
