import { commonLight } from '../../../_styles/common';
const self = (vars) => {
    return {
        primaryColor: vars.primaryColor,
        primaryColorHover: vars.primaryColorHover,
        neutralCard: vars.cardColor,
    };
};
const cascadeMenuLight = {
    name: 'CascadeMenu',
    common: commonLight,
    self,
};
export default cascadeMenuLight;
