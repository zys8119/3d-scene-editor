import utils from './utils';
declare type Utils = typeof utils;
declare function preprocessor<T extends object>(data: T): T;
declare function preprocessor<T extends object, U extends {
    [P in keyof T]?: keyof Utils | ((value: T[P]) => any) | string[];
}, Clear extends boolean>(data: T, maps?: U, clear?: Clear): FilterUndefined<{
    [P in (keyof U | keyof T)]: U[P] extends keyof Utils ? (P extends keyof T ? UtilsReturnType<U[P], T[P]> : any) : (U[P] extends string[] ? Clear extends true ? any : P extends keyof T ? T[P] : any : U[P] extends ((value?: any) => infer V) ? V : P extends keyof T ? T[P] : any);
} & {
    [P in string]: any;
}, Clear>;
declare type UtilsReturnType<T extends keyof Utils, P> = T extends 'array' ? P[] : Utils[T] extends (value?: any) => infer U ? U : never;
declare type FilterUndefined<T extends object, Filter extends boolean> = Filter extends true ? {
    [P in keyof T]: T[P] extends undefined ? never : T[P];
} : T;
export { preprocessor };
export default preprocessor;
