Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    const { baseColor } = vars;
    return {
        padding: '10px',
        baseColor,
    };
};
exports.self = self;
const scrollListLight = {
    name: 'ScrollList',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = scrollListLight;
