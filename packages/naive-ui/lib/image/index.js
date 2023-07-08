var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.imageGroupProps =
    exports.NImageGroup =
    exports.imageProps =
    exports.NImage =
        void 0;
var Image_1 = require('./src/Image');
Object.defineProperty(exports, 'NImage', {
    enumerable: true,
    get: function () {
        return __importDefault(Image_1).default;
    },
});
Object.defineProperty(exports, 'imageProps', {
    enumerable: true,
    get: function () {
        return Image_1.imageProps;
    },
});
var ImageGroup_1 = require('./src/ImageGroup');
Object.defineProperty(exports, 'NImageGroup', {
    enumerable: true,
    get: function () {
        return __importDefault(ImageGroup_1).default;
    },
});
Object.defineProperty(exports, 'imageGroupProps', {
    enumerable: true,
    get: function () {
        return ImageGroup_1.imageGroupProps;
    },
});
