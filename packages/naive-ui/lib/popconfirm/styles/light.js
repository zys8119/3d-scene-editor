var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.self = void 0;
const styles_1 = require('../../button/styles');
const styles_2 = require('../../popover/styles');
const _mixins_1 = require('../../_mixins');
const common_1 = require('../../_styles/common');
const _common_1 = __importDefault(require('./_common'));
const self = (vars) => {
    const { fontSize, warningColor } = vars;
    return Object.assign(Object.assign({}, _common_1.default), {
        fontSize,
        iconColor: warningColor,
    });
};
exports.self = self;
const popconfirmLight = (0, _mixins_1.createTheme)({
    name: 'Popconfirm',
    common: common_1.commonLight,
    peers: {
        Button: styles_1.buttonLight,
        Popover: styles_2.popoverLight,
    },
    self: exports.self,
});
exports.default = popconfirmLight;
