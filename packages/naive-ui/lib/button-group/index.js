var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.buttonGroupProps = exports.NButtonGroup = void 0;
var ButtonGroup_1 = require('./src/ButtonGroup');
Object.defineProperty(exports, 'NButtonGroup', {
    enumerable: true,
    get: function () {
        return __importDefault(ButtonGroup_1).default;
    },
});
Object.defineProperty(exports, 'buttonGroupProps', {
    enumerable: true,
    get: function () {
        return ButtonGroup_1.buttonGroupProps;
    },
});
