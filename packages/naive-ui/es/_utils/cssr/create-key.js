export function createKey(prefix, suffix) {
    return (
        prefix +
        (suffix === 'default'
            ? ''
            : suffix.replace(/^[a-z]/, (startChar) => startChar.toUpperCase()))
    );
}
createKey('abc', 'def');
