Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { textColor1, dividerColor, fontWeightStrong } = vars;
    return {
        textColor: textColor1,
        color: dividerColor,
        fontWeight: fontWeightStrong,
    };
};
exports.self = self;
const dividerLight = {
    name: 'Divider',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = dividerLight;
