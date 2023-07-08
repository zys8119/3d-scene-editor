var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.proUploadProps = exports.NProUpload = void 0;
var ProUpload_1 = require('./src/ProUpload');
Object.defineProperty(exports, 'NProUpload', {
    enumerable: true,
    get: function () {
        return __importDefault(ProUpload_1).default;
    },
});
Object.defineProperty(exports, 'proUploadProps', {
    enumerable: true,
    get: function () {
        return ProUpload_1.proUploadProps;
    },
});
