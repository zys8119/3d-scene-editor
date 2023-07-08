Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../../_styles/common');
const self = (vars) => {
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
exports.self = self;
const tourLight = {
    name: 'Tour',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = tourLight;
