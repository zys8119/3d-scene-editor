var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.popDialogProps = exports.NPopDialog = void 0;
var PopDialog_1 = require('./src/PopDialog');
Object.defineProperty(exports, 'NPopDialog', {
    enumerable: true,
    get: function () {
        return __importDefault(PopDialog_1).default;
    },
});
Object.defineProperty(exports, 'popDialogProps', {
    enumerable: true,
    get: function () {
        return PopDialog_1.popDialogProps;
    },
});
