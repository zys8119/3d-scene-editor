var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.proFormProps = exports.NProForm = void 0;
var ProForm_1 = require('./src/ProForm');
Object.defineProperty(exports, 'NProForm', {
    enumerable: true,
    get: function () {
        return __importDefault(ProForm_1).default;
    },
});
Object.defineProperty(exports, 'proFormProps', {
    enumerable: true,
    get: function () {
        return ProForm_1.proFormProps;
    },
});
