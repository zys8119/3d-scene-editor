var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.autoCompleteProps = exports.NAutoComplete = void 0;
var AutoComplete_1 = require('./src/AutoComplete');
Object.defineProperty(exports, 'NAutoComplete', {
    enumerable: true,
    get: function () {
        return __importDefault(AutoComplete_1).default;
    },
});
Object.defineProperty(exports, 'autoCompleteProps', {
    enumerable: true,
    get: function () {
        return AutoComplete_1.autoCompleteProps;
    },
});
