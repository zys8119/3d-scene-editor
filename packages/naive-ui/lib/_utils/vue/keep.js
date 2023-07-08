Object.defineProperty(exports, '__esModule', { value: true });
exports.keep = void 0;
function keep(object, keys = [], rest) {
    const keepedObject = {};
    keys.forEach((key) => {
        keepedObject[key] = object[key];
    });
    return Object.assign(keepedObject, rest);
}
exports.keep = keep;
