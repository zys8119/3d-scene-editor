import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { baseColor } = vars;
    return {
        padding: '10px',
        baseColor,
    };
};
const scrollListLight = {
    name: 'ScrollList',
    common: commonLight,
    self,
};
export default scrollListLight;
