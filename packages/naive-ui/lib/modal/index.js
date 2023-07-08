var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.modalProps = exports.NModal = void 0;
var Modal_1 = require('./src/Modal');
Object.defineProperty(exports, 'NModal', {
    enumerable: true,
    get: function () {
        return __importDefault(Modal_1).default;
    },
});
Object.defineProperty(exports, 'modalProps', {
    enumerable: true,
    get: function () {
        return Modal_1.modalProps;
    },
});
