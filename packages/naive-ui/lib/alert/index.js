var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.alertProps = exports.NAlert = void 0;
var Alert_1 = require('./src/Alert');
Object.defineProperty(exports, 'NAlert', {
    enumerable: true,
    get: function () {
        return __importDefault(Alert_1).default;
    },
});
Object.defineProperty(exports, 'alertProps', {
    enumerable: true,
    get: function () {
        return Alert_1.alertProps;
    },
});
