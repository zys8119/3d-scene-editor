var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.colorPickerProps = exports.NColorPicker = void 0;
var ColorPicker_1 = require('./src/ColorPicker');
Object.defineProperty(exports, 'NColorPicker', {
    enumerable: true,
    get: function () {
        return __importDefault(ColorPicker_1).default;
    },
});
Object.defineProperty(exports, 'colorPickerProps', {
    enumerable: true,
    get: function () {
        return ColorPicker_1.colorPickerProps;
    },
});
