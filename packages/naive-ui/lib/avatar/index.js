var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.avatarProps = exports.NAvatar = void 0;
var Avatar_1 = require('./src/Avatar');
Object.defineProperty(exports, 'NAvatar', {
    enumerable: true,
    get: function () {
        return __importDefault(Avatar_1).default;
    },
});
Object.defineProperty(exports, 'avatarProps', {
    enumerable: true,
    get: function () {
        return Avatar_1.avatarProps;
    },
});
