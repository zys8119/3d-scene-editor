Object.defineProperty(exports, '__esModule', { value: true });
exports.getTitleAttribute = void 0;
function getTitleAttribute(value) {
    switch (typeof value) {
        case 'string':
            return value || void 0;
        case 'number':
            return String(value);
        default:
            return void 0;
    }
}
exports.getTitleAttribute = getTitleAttribute;
