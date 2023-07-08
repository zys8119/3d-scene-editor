var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NTagSelectOption = exports.tagSelectProps = exports.NTagSelect = void 0;
var TagSelect_1 = require('./src/TagSelect');
Object.defineProperty(exports, 'NTagSelect', {
    enumerable: true,
    get: function () {
        return __importDefault(TagSelect_1).default;
    },
});
Object.defineProperty(exports, 'tagSelectProps', {
    enumerable: true,
    get: function () {
        return TagSelect_1.tagSelectProps;
    },
});
var TagSelectOption_1 = require('./src/TagSelectOption');
Object.defineProperty(exports, 'NTagSelectOption', {
    enumerable: true,
    get: function () {
        return __importDefault(TagSelectOption_1).default;
    },
});
