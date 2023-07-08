Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    const { scrollbarColor, scrollbarColorHover } = vars;
    return {
        color: scrollbarColor,
        colorHover: scrollbarColorHover,
    };
};
exports.self = self;
const scrollbarLight = {
    name: 'Scrollbar',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = scrollbarLight;
