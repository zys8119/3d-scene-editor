var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dynamicTagsProps = exports.NDynamicTags = void 0;
var DynamicTags_1 = require('./src/DynamicTags');
Object.defineProperty(exports, 'NDynamicTags', {
    enumerable: true,
    get: function () {
        return __importDefault(DynamicTags_1).default;
    },
});
Object.defineProperty(exports, 'dynamicTagsProps', {
    enumerable: true,
    get: function () {
        return DynamicTags_1.dynamicTagsProps;
    },
});
