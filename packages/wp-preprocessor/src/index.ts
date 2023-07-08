import utils from './utils';

type Utils = typeof utils;

function preprocessor<T extends object>(data: T): T;
function preprocessor<
    T extends object,
    U extends {
        [P in keyof T]?: keyof Utils | ((value: T[P]) => any) | string[];
    },
    Clear extends boolean
>(
    data: T,
    maps?: U,
    clear?: Clear
): FilterUndefined<
    {
        [P in keyof U | keyof T]: U[P] extends keyof Utils
            ? P extends keyof T
                ? UtilsReturnType<U[P], T[P]>
                : any
            : U[P] extends string[]
            ? Clear extends true
                ? any
                : P extends keyof T
                ? T[P]
                : any
            : U[P] extends (value?: any) => infer V
            ? V
            : P extends keyof T
            ? T[P]
            : any;
    } & {
        [P in string]: any;
    },
    Clear
>;
function preprocessor<T extends object>(
    data: T,
    maps?: {
        [P in keyof T]?: keyof typeof utils | ((value: T[P]) => any) | string[];
    },
    clear: boolean = true
): Record<string, any> {
    if (Object.prototype.toString.call(data) !== '[object Object]') return data;
    const dataBackup: Record<string, any> = { ...data };
    if (maps) {
        for (const key in maps) {
            const map = maps[key];
            if (typeof map === 'string') {
                dataBackup[key] = utils[map as keyof typeof utils](data[key]);
                continue;
            }
            if (Array.isArray(map)) {
                map.forEach((item, index) => {
                    dataBackup[item] = (data[key] as unknown as any[])?.[index];
                });
                if (clear && !map.includes(key)) {
                    delete dataBackup[key];
                }
                continue;
            }
            dataBackup[key] = map?.(data[key]);
        }
    }
    if (clear) {
        for (const key in dataBackup) {
            if (
                typeof dataBackup[key] === 'undefined' ||
                dataBackup[key] === null
            ) {
                delete dataBackup[key];
            }
        }
    }
    return dataBackup;
}

type UtilsReturnType<T extends keyof Utils, P> = T extends 'array'
    ? P[]
    : Utils[T] extends (value?: any) => infer U
    ? U
    : never;
type FilterUndefined<
    T extends object,
    Filter extends boolean
> = Filter extends true
    ? {
          [P in keyof T]: T[P] extends undefined ? never : T[P];
      }
    : T;

export { preprocessor };

export default preprocessor;
