var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.cardProps = exports.NCard = void 0;
var Card_1 = require('./src/Card');
Object.defineProperty(exports, 'NCard', {
    enumerable: true,
    get: function () {
        return __importDefault(Card_1).default;
    },
});
Object.defineProperty(exports, 'cardProps', {
    enumerable: true,
    get: function () {
        return Card_1.cardProps;
    },
});
