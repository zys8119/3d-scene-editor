interface Options {
    base: number;
    baseHeight: number;
    fixed: number | false;
}
export declare const fz: (rem: number | string | TemplateStringsArray) => string;
export declare const fh: (rem: number | string | TemplateStringsArray) => string;
export declare const remReplace: (string: string) => string;
export declare const rem: (optionsMap?: Partial<Options>) => {
    name: string;
    transform(code: string, id: string, ssr?: boolean | undefined): {
        code: string;
    };
};
export declare const remPreset: {
    'vite-plugin-fz': string[];
};
export {};
