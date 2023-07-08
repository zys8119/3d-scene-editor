var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.proCheckboxProps = exports.NProCheckbox = void 0;
var ProCheckbox_1 = require('./src/ProCheckbox');
Object.defineProperty(exports, 'NProCheckbox', {
    enumerable: true,
    get: function () {
        return __importDefault(ProCheckbox_1).default;
    },
});
Object.defineProperty(exports, 'proCheckboxProps', {
    enumerable: true,
    get: function () {
        return ProCheckbox_1.proCheckboxProps;
    },
});
