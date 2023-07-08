Object.defineProperty(exports, '__esModule', { value: true });
exports.createDataKey = void 0;
function createDataKey(key) {
    return typeof key === 'string' ? `s-${key}` : `n-${key}`;
}
exports.createDataKey = createDataKey;
