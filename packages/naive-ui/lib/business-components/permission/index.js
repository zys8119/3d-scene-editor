var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NPermission = void 0;
var Permission_1 = require('./src/Permission');
Object.defineProperty(exports, 'NPermission', {
    enumerable: true,
    get: function () {
        return __importDefault(Permission_1).default;
    },
});
