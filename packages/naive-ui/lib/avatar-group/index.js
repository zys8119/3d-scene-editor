var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.avatarGroupProps = exports.NAvatarGroup = void 0;
var AvatarGroup_1 = require('./src/AvatarGroup');
Object.defineProperty(exports, 'NAvatarGroup', {
    enumerable: true,
    get: function () {
        return __importDefault(AvatarGroup_1).default;
    },
});
Object.defineProperty(exports, 'avatarGroupProps', {
    enumerable: true,
    get: function () {
        return AvatarGroup_1.avatarGroupProps;
    },
});
