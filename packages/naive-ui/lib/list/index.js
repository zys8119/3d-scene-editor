var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NListItem = exports.listProps = exports.NList = void 0;
var List_1 = require('./src/List');
Object.defineProperty(exports, 'NList', {
    enumerable: true,
    get: function () {
        return __importDefault(List_1).default;
    },
});
Object.defineProperty(exports, 'listProps', {
    enumerable: true,
    get: function () {
        return List_1.listProps;
    },
});
var ListItem_1 = require('./src/ListItem');
Object.defineProperty(exports, 'NListItem', {
    enumerable: true,
    get: function () {
        return __importDefault(ListItem_1).default;
    },
});
