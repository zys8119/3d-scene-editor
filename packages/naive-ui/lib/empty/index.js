var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.emptyProps = exports.NEmpty = void 0;
var Empty_1 = require('./src/Empty');
Object.defineProperty(exports, 'NEmpty', {
    enumerable: true,
    get: function () {
        return __importDefault(Empty_1).default;
    },
});
Object.defineProperty(exports, 'emptyProps', {
    enumerable: true,
    get: function () {
        return Empty_1.emptyProps;
    },
});
