var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.codeProps = exports.NCode = void 0;
var Code_1 = require('./src/Code');
Object.defineProperty(exports, 'NCode', {
    enumerable: true,
    get: function () {
        return __importDefault(Code_1).default;
    },
});
Object.defineProperty(exports, 'codeProps', {
    enumerable: true,
    get: function () {
        return Code_1.codeProps;
    },
});
