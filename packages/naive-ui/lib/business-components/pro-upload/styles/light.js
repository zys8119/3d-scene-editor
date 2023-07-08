Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../../_styles/common');
const self = (vars) => {
    const { textColor2 } = vars;
    return {
        padding: '10px',
        baseColor: textColor2,
    };
};
exports.self = self;
const proUploadLight = {
    name: 'ProUpload',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = proUploadLight;
