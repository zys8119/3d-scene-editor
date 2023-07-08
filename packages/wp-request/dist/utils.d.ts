import { Canceler } from 'axios';
/**
 * 可以将一个对象转为 encodeURIComponent 后的 params
 *
 * @example
 * ```ts
 * import { transParams } from 'wp-request'
 * transParams({ a: 'nothing', b: 'something'  })
 * // 'a=nothing&b=something'
 * ```
 *
 */
export declare function transParams(params: Record<string, any>): string;
export declare class RequestPromise<T = any> extends Promise<T> {
    cancel: Canceler;
    constructor(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void, cancel: Canceler);
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null): RequestPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null): RequestPromise<T | TResult>;
    finally(onfinally?: (() => void) | null): RequestPromise<T>;
}
export declare type AccpetPromise = Promise<any> | RequestPromise<any>;
export declare const cancelAll: (promises: Set<AccpetPromise> | AccpetPromise[], message?: string | undefined) => void;
/**
 * 通用下载方法
 * @param data URL 地址 / base64 / Blob / File
 * @param filename 文件名
 * @param isLink 第一个参数使用的是否是 URL 地址
 */
export declare function download(data: string | Blob | File, filename: string, isLink?: boolean): void;
export declare function dataURIToBlob(dataURI: string): Blob;
