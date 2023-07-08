Object.defineProperty(exports, '__esModule', { value: true });
exports.createKey = void 0;
function createKey(prefix, suffix) {
    return (
        prefix +
        (suffix === 'default'
            ? ''
            : suffix.replace(/^[a-z]/, (startChar) => startChar.toUpperCase()))
    );
}
exports.createKey = createKey;
createKey('abc', 'def');
