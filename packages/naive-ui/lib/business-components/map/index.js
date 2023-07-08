var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mapProps = exports.NMap = void 0;
var Map_1 = require('./src/Map');
Object.defineProperty(exports, 'NMap', {
    enumerable: true,
    get: function () {
        return __importDefault(Map_1).default;
    },
});
Object.defineProperty(exports, 'mapProps', {
    enumerable: true,
    get: function () {
        return Map_1.mapProps;
    },
});
