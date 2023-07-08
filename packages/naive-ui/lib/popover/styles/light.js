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
        boxShadow2,
        popoverColor,
        textColor2,
        borderRadius,
        fontSize,
        dividerColor,
    } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        fontSize,
        borderRadius,
        color: popoverColor,
        dividerColor,
        textColor: textColor2,
        boxShadow: boxShadow2,
    });
};
exports.self = self;
const popoverLight = {
    name: 'Popover',
    common: common_1.commonLight,
    self: exports.self,
};
exports.default = popoverLight;
