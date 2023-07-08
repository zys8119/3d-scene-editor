interface Options {
    base: number;
    baseHeight: number;
    fixed: number | false;
}

const options: Options = {
    base: 1920,
    baseHeight: 1080,
    fixed: false,
};

export const fz = (rem: number | string | TemplateStringsArray) => {
    const number = (Number(rem) / options.base) * 100;
    return `${
        options.fixed !== false && options.fixed >= 0
            ? number.toFixed(options.fixed)
            : number
    }vw`;
};

export const fh = (rem: number | string | TemplateStringsArray) => {
    const number = (Number(rem) / options.baseHeight) * 100;
    return `${
        options.fixed !== false && options.fixed >= 0
            ? number.toFixed(options.fixed)
            : number
    }vh`;
};

export const remReplace = (string: string) => {
    return string.replace(
        /([0-9.]+?)(f[zh])/gim,
        (match, $1, $2: 'fz' | 'fh') => {
            return $2 === 'fz' ? fz($1) : fh($1);
        }
    );
};

export const rem = (optionsMap: Partial<Options> = {}) => {
    Object.assign(options, optionsMap);
    return {
        name: 'rem',
        transform(code: string, id: string, ssr?: boolean) {
            if (/\.vue$|\.tsx$/.test(id)) {
                code = code.replace(
                    /(\{ style: {(.*)?} \})/gi,
                    (match, $1: string) => {
                        return remReplace($1);
                    }
                );
                return { code };
            }
            if (!/\.scss|\.css|\.less$/.test(id)) return { code };
            return {
                code: remReplace(code),
            };
        },
    };
};

export const remPreset = {
    'vite-plugin-fz': ['fz', 'fh'],
};
