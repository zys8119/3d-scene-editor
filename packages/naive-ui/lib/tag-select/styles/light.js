var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const _common_1 = __importDefault(require('./_common'));
const common_1 = require('../../_styles/common');
const self = (vars) => {
    const { primaryColor } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        tagSelectHandleColor: primaryColor,
    });
};
const tagSelectLight = {
    name: 'TagSelect',
    common: common_1.commonLight,
    self,
};
exports.default = tagSelectLight;
