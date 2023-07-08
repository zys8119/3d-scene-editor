Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { textColor1, textColor2, fontWeightStrong, fontSize } = vars;
    return {
        fontSize,
        titleTextColor: textColor1,
        textColor: textColor2,
        titleFontWeight: fontWeightStrong,
    };
};
exports.self = self;
const thingLight = {
    name: 'Thing',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = thingLight;
