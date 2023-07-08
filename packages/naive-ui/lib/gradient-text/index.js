var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.gradientTextProps = exports.NGradientText = void 0;
var GradientText_1 = require('./src/GradientText');
Object.defineProperty(exports, 'NGradientText', {
    enumerable: true,
    get: function () {
        return __importDefault(GradientText_1).default;
    },
});
Object.defineProperty(exports, 'gradientTextProps', {
    enumerable: true,
    get: function () {
        return GradientText_1.gradientTextProps;
    },
});
