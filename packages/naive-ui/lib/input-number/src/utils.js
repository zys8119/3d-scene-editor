Object.defineProperty(exports, '__esModule', { value: true });
exports.parseNumber =
    exports.format =
    exports.validator =
    exports.isWipValue =
    exports.parse =
        void 0;
function parse(value) {
    if (
        value === void 0 ||
        value === null ||
        (typeof value === 'string' && value.trim() === '')
    ) {
        return null;
    }
    return Number(value);
}
exports.parse = parse;
function isWipValue(value) {
    return (
        value.includes('.') &&
        (/^(-)?\d+.*(\.|0)$/.test(value) || /^\.\d+$/.test(value))
    );
}
exports.isWipValue = isWipValue;
function validator(value) {
    if (value === void 0 || value === null) return true;
    if (Number.isNaN(value)) return false;
    return true;
}
exports.validator = validator;
function format(value, precision) {
    if (value === void 0 || value === null) return '';
    return precision === void 0 ? String(value) : value.toFixed(precision);
}
exports.format = format;
function parseNumber(number) {
    if (number === null) return null;
    if (typeof number === 'number') {
        return number;
    } else {
        const parsedNumber = Number(number);
        if (Number.isNaN(parsedNumber)) return null;
        else {
            return parsedNumber;
        }
    }
}
exports.parseNumber = parseNumber;
