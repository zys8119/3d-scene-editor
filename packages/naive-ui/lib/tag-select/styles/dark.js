var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../styles');
const _common_1 = __importDefault(require('./_common'));
const tagSelectDark = {
    name: 'TagSelect',
    common: styles_1.commonDark,
    self(vars) {
        const { primaryColor } = vars;
        return Object.assign(Object.assign({}, _common_1.default), {
            tagSelectHandleColor: primaryColor,
        });
    },
};
exports.default = tagSelectDark;
