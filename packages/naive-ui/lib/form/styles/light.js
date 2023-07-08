var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const common_1 = require('../../_styles/common');
const _common_1 = __importDefault(require('./_common'));
const self = (vars) => {
    const {
        heightSmall,
        heightMedium,
        heightLarge,
        textColor1,
        errorColor,
        warningColor,
        lineHeight,
        textColor3,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        blankHeightSmall: heightSmall,
        blankHeightMedium: heightMedium,
        blankHeightLarge: heightLarge,
        lineHeight,
        labelTextColor: textColor1,
        asteriskColor: errorColor,
        feedbackTextColorError: errorColor,
        feedbackTextColorWarning: warningColor,
        feedbackTextColor: textColor3,
    });
};
exports.self = self;
const formLight = {
    name: 'Form',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = formLight;
