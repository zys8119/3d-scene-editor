var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.rotateAlbum3dProps =
    exports.NRotateAlbum3d =
    exports.rotateAlbumProps =
    exports.NRotateAlbum =
        void 0;
var RotateAlbum_1 = require('./src/RotateAlbum');
Object.defineProperty(exports, 'NRotateAlbum', {
    enumerable: true,
    get: function () {
        return __importDefault(RotateAlbum_1).default;
    },
});
Object.defineProperty(exports, 'rotateAlbumProps', {
    enumerable: true,
    get: function () {
        return RotateAlbum_1.rotateAlbumProps;
    },
});
var RotateAlbum3D_1 = require('./src/RotateAlbum3D');
Object.defineProperty(exports, 'NRotateAlbum3d', {
    enumerable: true,
    get: function () {
        return __importDefault(RotateAlbum3D_1).default;
    },
});
Object.defineProperty(exports, 'rotateAlbum3dProps', {
    enumerable: true,
    get: function () {
        return RotateAlbum3D_1.rotateAlbum3dProps;
    },
});
