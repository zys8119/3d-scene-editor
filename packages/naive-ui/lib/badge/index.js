var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.badgeProps = exports.NBadge = void 0;
var Badge_1 = require('./src/Badge');
Object.defineProperty(exports, 'NBadge', {
    enumerable: true,
    get: function () {
        return __importDefault(Badge_1).default;
    },
});
Object.defineProperty(exports, 'badgeProps', {
    enumerable: true,
    get: function () {
        return Badge_1.badgeProps;
    },
});
