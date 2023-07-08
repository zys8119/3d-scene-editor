Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { primaryColor, baseColor } = vars;
    return {
        color: primaryColor,
        iconColor: baseColor,
    };
};
exports.self = self;
const iconWrapperLight = {
    name: 'IconWrapper',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = iconWrapperLight;
