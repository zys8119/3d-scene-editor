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
        textColorDisabled,
        iconColor,
        textColor2,
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        fontSizeSmall,
        fontSizeMedium,
        fontSizeLarge,
        fontSizeHuge,
        textColor: textColorDisabled,
        iconColor,
        extraTextColor: textColor2,
    });
};
exports.self = self;
const emptyLight = {
    name: 'Empty',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = emptyLight;
