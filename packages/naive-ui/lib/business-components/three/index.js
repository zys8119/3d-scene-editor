var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.threeProps = exports.BaseThreeClass = exports.NThree = void 0;
var three_1 = require('./src/three');
Object.defineProperty(exports, 'NThree', {
    enumerable: true,
    get: function () {
        return __importDefault(three_1).default;
    },
});
Object.defineProperty(exports, 'BaseThreeClass', {
    enumerable: true,
    get: function () {
        return three_1.BaseThreeClass;
    },
});
Object.defineProperty(exports, 'threeProps', {
    enumerable: true,
    get: function () {
        return three_1.propsBaseThree;
    },
});
