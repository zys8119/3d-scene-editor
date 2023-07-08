export function getTitleAttribute(value) {
    switch (typeof value) {
        case 'string':
            return value || void 0;
        case 'number':
            return String(value);
        default:
            return void 0;
    }
}
