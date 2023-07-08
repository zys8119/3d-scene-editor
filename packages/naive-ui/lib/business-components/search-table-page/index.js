var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.searchTablePageProps = exports.NSearchTablePage = void 0;
var SearchTablePage_1 = require('./src/SearchTablePage');
Object.defineProperty(exports, 'NSearchTablePage', {
    enumerable: true,
    get: function () {
        return __importDefault(SearchTablePage_1).default;
    },
});
Object.defineProperty(exports, 'searchTablePageProps', {
    enumerable: true,
    get: function () {
        return SearchTablePage_1.searchTablePageProps;
    },
});
