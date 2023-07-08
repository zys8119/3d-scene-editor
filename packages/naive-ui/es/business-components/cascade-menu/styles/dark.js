import { commonDark } from '../../../_styles/common';
const self = (vars) => {
    return {
        primaryColor: vars.primaryColor,
        primaryColorHover: vars.primaryColorHover,
        neutralCard: vars.cardColor,
    };
};
const cascadeMenuDark = {
    name: 'CascadeMenu',
    common: commonDark,
    self,
};
export default cascadeMenuDark;
