var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.inputNumberProps = exports.NInputNumber = void 0;
var InputNumber_1 = require('./src/InputNumber');
Object.defineProperty(exports, 'NInputNumber', {
    enumerable: true,
    get: function () {
        return __importDefault(InputNumber_1).default;
    },
});
Object.defineProperty(exports, 'inputNumberProps', {
    enumerable: true,
    get: function () {
        return InputNumber_1.inputNumberProps;
    },
});
