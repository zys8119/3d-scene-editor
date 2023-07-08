Object.defineProperty(exports, '__esModule', { value: true });
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    return {
        primaryColor: vars.primaryColor,
        primaryColorHover: vars.primaryColorHover,
        neutralCard: vars.cardColor,
    };
};
const cascadeMenuDark = {
    name: 'CascadeMenu',
    common: common_1.commonDark,
    self,
};
exports.default = cascadeMenuDark;
