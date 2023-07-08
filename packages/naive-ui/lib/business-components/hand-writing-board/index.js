var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NHandWritingBoard = void 0;
var HandWritingBoard_1 = require('./src/HandWritingBoard');
Object.defineProperty(exports, 'NHandWritingBoard', {
    enumerable: true,
    get: function () {
        return __importDefault(HandWritingBoard_1).default;
    },
});
