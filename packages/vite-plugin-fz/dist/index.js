"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remPreset = exports.rem = exports.remReplace = exports.fh = exports.fz = void 0;
const options = {
    base: 1920,
    baseHeight: 1080,
    fixed: false
};
const fz = (rem) => {
    const number = Number(rem) / options.base * 100;
    return `${options.fixed !== false && options.fixed >= 0 ? number.toFixed(options.fixed) : number}vw`;
};
exports.fz = fz;
const fh = (rem) => {
    const number = Number(rem) / options.baseHeight * 100;
    return `${options.fixed !== false && options.fixed >= 0 ? number.toFixed(options.fixed) : number}vh`;
};
exports.fh = fh;
const remReplace = (string) => {
    return string.replace(/([0-9.]+?)(f[zh])/img, (match, $1, $2) => {
        return $2 === 'fz' ? (0, exports.fz)($1) : (0, exports.fh)($1);
    });
};
exports.remReplace = remReplace;
const rem = (optionsMap = {}) => {
    Object.assign(options, optionsMap);
    return {
        name: 'rem',
        transform(code, id, ssr) {
            if (/\.vue$|\.tsx$/.test(id)) {
                code = code.replace(/(\{ style: {(.*)?} \})/ig, (match, $1) => {
                    return (0, exports.remReplace)($1);
                });
                return { code };
            }
            if (!/\.scss|\.css|\.less$/.test(id))
                return { code };
            return {
                code: (0, exports.remReplace)(code)
            };
        }
    };
};
exports.rem = rem;
exports.remPreset = {
    'vite-plugin-fz': [
        'fz',
        'fh'
    ]
};
