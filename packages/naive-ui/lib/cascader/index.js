var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cascaderProps = exports.NCascader = void 0;
var Cascader_1 = require('./src/Cascader');
Object.defineProperty(exports, 'NCascader', {
    enumerable: true,
    get: function () {
        return __importDefault(Cascader_1).default;
    },
});
Object.defineProperty(exports, 'cascaderProps', {
    enumerable: true,
    get: function () {
        return Cascader_1.cascaderProps;
    },
});
