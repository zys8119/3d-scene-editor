var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NEl = exports.elementProps = exports.NElement = void 0;
var Element_1 = require('./src/Element');
Object.defineProperty(exports, 'NElement', {
    enumerable: true,
    get: function () {
        return __importDefault(Element_1).default;
    },
});
Object.defineProperty(exports, 'elementProps', {
    enumerable: true,
    get: function () {
        return Element_1.elementProps;
    },
});
var Element_2 = require('./src/Element');
Object.defineProperty(exports, 'NEl', {
    enumerable: true,
    get: function () {
        return __importDefault(Element_2).default;
    },
});
