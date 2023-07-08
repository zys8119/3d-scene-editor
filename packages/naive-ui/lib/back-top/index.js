var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.backTopProps = exports.NBackTop = void 0;
var BackTop_1 = require('./src/BackTop');
Object.defineProperty(exports, 'NBackTop', {
    enumerable: true,
    get: function () {
        return __importDefault(BackTop_1).default;
    },
});
Object.defineProperty(exports, 'backTopProps', {
    enumerable: true,
    get: function () {
        return BackTop_1.backTopProps;
    },
});
