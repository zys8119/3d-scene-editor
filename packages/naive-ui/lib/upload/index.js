var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NUploadFileList =
    exports.NUploadTrigger =
    exports.NUploadDragger =
    exports.uploadProps =
    exports.NUpload =
        void 0;
var Upload_1 = require('./src/Upload');
Object.defineProperty(exports, 'NUpload', {
    enumerable: true,
    get: function () {
        return __importDefault(Upload_1).default;
    },
});
Object.defineProperty(exports, 'uploadProps', {
    enumerable: true,
    get: function () {
        return Upload_1.uploadProps;
    },
});
var UploadDragger_1 = require('./src/UploadDragger');
Object.defineProperty(exports, 'NUploadDragger', {
    enumerable: true,
    get: function () {
        return __importDefault(UploadDragger_1).default;
    },
});
var UploadTrigger_1 = require('./src/UploadTrigger');
Object.defineProperty(exports, 'NUploadTrigger', {
    enumerable: true,
    get: function () {
        return __importDefault(UploadTrigger_1).default;
    },
});
var UploadFileList_1 = require('./src/UploadFileList');
Object.defineProperty(exports, 'NUploadFileList', {
    enumerable: true,
    get: function () {
        return __importDefault(UploadFileList_1).default;
    },
});
