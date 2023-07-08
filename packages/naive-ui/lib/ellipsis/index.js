var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.ellipsisProps = exports.NEllipsis = void 0;
var Ellipsis_1 = require('./src/Ellipsis');
Object.defineProperty(exports, 'NEllipsis', {
    enumerable: true,
    get: function () {
        return __importDefault(Ellipsis_1).default;
    },
});
Object.defineProperty(exports, 'ellipsisProps', {
    enumerable: true,
    get: function () {
        return Ellipsis_1.ellipsisProps;
    },
});
