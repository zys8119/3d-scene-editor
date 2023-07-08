Object.defineProperty(exports, '__esModule', { value: true });
exports.createPressedColor = exports.createHoverColor = void 0;
const seemly_1 = require('seemly');
function createHoverColor(rgb) {
    return (0, seemly_1.composite)(rgb, [255, 255, 255, 0.16]);
}
exports.createHoverColor = createHoverColor;
function createPressedColor(rgb) {
    return (0, seemly_1.composite)(rgb, [0, 0, 0, 0.12]);
}
exports.createPressedColor = createPressedColor;
