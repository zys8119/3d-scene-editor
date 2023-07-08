Object.defineProperty(exports, '__esModule', { value: true });
exports.color2Class = void 0;
function color2Class(color) {
    return color.replace(/#|\(|\)|,|\s/g, '_');
}
exports.color2Class = color2Class;
