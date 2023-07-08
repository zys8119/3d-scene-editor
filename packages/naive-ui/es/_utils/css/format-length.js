const pureNumberRegex = /^(\d|\.)+$/;
const numberRegex = /(\d|\.)+/;
export function formatLength(
    length,
    { c = 1, offset = 0, attachPx = true } = {}
) {
    if (typeof length === 'number') {
        const result = (length + offset) * c;
        if (result === 0) return '0';
        return `${result}px`;
    } else if (typeof length === 'string') {
        if (pureNumberRegex.test(length)) {
            const result = (Number(length) + offset) * c;
            if (attachPx) {
                if (result === 0) return '0';
                return `${result}px`;
            } else {
                return `${result}`;
            }
        } else {
            const result = numberRegex.exec(length);
            if (!result) return length;
            return length.replace(
                numberRegex,
                String((Number(result[0]) + offset) * c)
            );
        }
    }
    return length;
}
