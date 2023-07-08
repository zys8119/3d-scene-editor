Object.defineProperty(exports, '__esModule', { value: true });
exports.createTheme = void 0;
function createTheme(name, componentThemes) {
    const nameIsString = typeof name === 'string';
    const theme = {
        name: nameIsString ? name : 'customized-theme',
    };
    if (nameIsString) {
        if (componentThemes) {
            for (const cTheme of componentThemes) {
                theme[cTheme.name] = cTheme;
            }
        }
    } else {
        for (const cTheme of name) {
            theme[cTheme.name] = cTheme;
        }
    }
    return theme;
}
exports.createTheme = createTheme;
