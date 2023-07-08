var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.dropdownProps = exports.NDropdown = void 0;
var Dropdown_1 = require('./src/Dropdown');
Object.defineProperty(exports, 'NDropdown', {
    enumerable: true,
    get: function () {
        return __importDefault(Dropdown_1).default;
    },
});
Object.defineProperty(exports, 'dropdownProps', {
    enumerable: true,
    get: function () {
        return Dropdown_1.dropdownProps;
    },
});
