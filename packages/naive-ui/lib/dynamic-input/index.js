var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dynamicInputProps = exports.NDynamicInput = void 0;
var DynamicInput_1 = require('./src/DynamicInput');
Object.defineProperty(exports, 'NDynamicInput', {
    enumerable: true,
    get: function () {
        return __importDefault(DynamicInput_1).default;
    },
});
Object.defineProperty(exports, 'dynamicInputProps', {
    enumerable: true,
    get: function () {
        return DynamicInput_1.dynamicInputProps;
    },
});
