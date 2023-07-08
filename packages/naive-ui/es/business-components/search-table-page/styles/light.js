import { commonLight } from '../../../_styles/common';
export const self = (vars) => {
    const { baseColor } = vars;
    return {
        baseColor,
    };
};
const searchTablePageLight = {
    name: 'SearchTablePage',
    common: commonLight,
    self,
};
export default searchTablePageLight;
