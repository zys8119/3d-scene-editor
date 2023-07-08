Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    const { baseColor, borderColor } = vars;
    return {
        baseColor,
        borderColor,
    };
};
exports.self = self;
const handWritingBoardLight = {
    name: 'HandWritingBoard',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = handWritingBoardLight;
