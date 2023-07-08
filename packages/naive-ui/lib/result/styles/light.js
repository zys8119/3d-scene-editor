var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const _common_1 = __importDefault(require('./_common'));
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const {
        textColor2,
        textColor1,
        errorColor,
        successColor,
        infoColor,
        warningColor,
        lineHeight,
        fontWeightStrong,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        lineHeight,
        titleFontWeight: fontWeightStrong,
        titleTextColor: textColor1,
        textColor: textColor2,
        iconColorError: errorColor,
        iconColorSuccess: successColor,
        iconColorInfo: infoColor,
        iconColorWarning: warningColor,
    });
};
exports.self = self;
const resultLight = {
    name: 'Result',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = resultLight;
