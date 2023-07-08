var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.scrollListProps = exports.NScrollList = void 0;
var ScrollList_1 = require('./src/ScrollList');
Object.defineProperty(exports, 'NScrollList', {
    enumerable: true,
    get: function () {
        return __importDefault(ScrollList_1).default;
    },
});
Object.defineProperty(exports, 'scrollListProps', {
    enumerable: true,
    get: function () {
        return ScrollList_1.scrollListProps;
    },
});
