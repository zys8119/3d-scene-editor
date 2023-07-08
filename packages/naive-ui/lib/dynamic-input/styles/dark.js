var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const styles_1 = require('../../input/styles');
const styles_2 = require('../../button/styles');
const common_1 = require('../../_styles/common');
const _common_1 = __importDefault(require('./_common'));
const dynamicInputDark = {
    name: 'DynamicInput',
    common: common_1.commonDark,
    peers: {
        Input: styles_1.inputDark,
        Button: styles_2.buttonDark,
    },
    self() {
        return _common_1.default;
    },
};
exports.default = dynamicInputDark;
