var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dividerProps = exports.NDivider = void 0;
var Divider_1 = require('./src/Divider');
Object.defineProperty(exports, 'NDivider', {
    enumerable: true,
    get: function () {
        return __importDefault(Divider_1).default;
    },
});
Object.defineProperty(exports, 'dividerProps', {
    enumerable: true,
    get: function () {
        return Divider_1.dividerProps;
    },
});
