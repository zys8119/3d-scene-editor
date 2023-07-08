var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.mentionProps = exports.NMention = void 0;
var Mention_1 = require('./src/Mention');
Object.defineProperty(exports, 'NMention', {
    enumerable: true,
    get: function () {
        return __importDefault(Mention_1).default;
    },
});
Object.defineProperty(exports, 'mentionProps', {
    enumerable: true,
    get: function () {
        return Mention_1.mentionProps;
    },
});
