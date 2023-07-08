export function parse(value) {
    if (
        value === void 0 ||
        value === null ||
        (typeof value === 'string' && value.trim() === '')
    ) {
        return null;
    }
    return Number(value);
}
export function isWipValue(value) {
    return (
        value.includes('.') &&
        (/^(-)?\d+.*(\.|0)$/.test(value) || /^\.\d+$/.test(value))
    );
}
export function validator(value) {
    if (value === void 0 || value === null) return true;
    if (Number.isNaN(value)) return false;
    return true;
}
export function format(value, precision) {
    if (value === void 0 || value === null) return '';
    return precision === void 0 ? String(value) : value.toFixed(precision);
}
export function parseNumber(number) {
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
