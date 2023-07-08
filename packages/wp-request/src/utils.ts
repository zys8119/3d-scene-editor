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
export function transParams(params: Record<string, any>) {
    const result = Object.entries(params)
        .filter(([key, value]) => {
            return (
                !Object.is(value, undefined) &&
                !Object.is(value, null) &&
                !Object.is(JSON.stringify(value), '{}')
            );
        })
        .map(([key, value]) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        });
    return result.join('&');
}

export class RequestPromise<T = any> extends Promise<T> {
    cancel: Canceler;
    constructor(
        executor: (
            resolve: (value: any) => void,
            reject: (reason?: any) => void
        ) => void,
        cancel: Canceler
    ) {
        super(executor);
        this.cancel = cancel;
    }
    then<TResult1 = T, TResult2 = never>(
        onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
        onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null
    ): RequestPromise<TResult1 | TResult2> {
        const thenRequest = super.then(
            onfulfilled,
            onrejected
        ) as RequestPromise;
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
    catch<TResult = never>(
        onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null
    ): RequestPromise<T | TResult> {
        const thenRequest = super.catch(onrejected) as RequestPromise;
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
    finally(onfinally?: (() => void) | null): RequestPromise<T> {
        const thenRequest = super.finally(onfinally) as RequestPromise;
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
}

export type AccpetPromise = Promise<any> | RequestPromise<any>;
export const cancelAll = (
    promises: Set<AccpetPromise> | AccpetPromise[],
    message?: string
) => {
    for (const promise of promises) {
        if ((promise as RequestPromise<any>).cancel) {
            (promise as RequestPromise<any>).cancel(message);
        }
    }
};

/**
 * 通用下载方法
 * @param data URL 地址 / base64 / Blob / File
 * @param filename 文件名
 * @param isLink 第一个参数使用的是否是 URL 地址
 */
export function download(
    data: string | Blob | File,
    filename: string,
    isLink: boolean = false
) {
    let blob: Blob | File;
    if (typeof data === 'string') {
        const content = data;
        blob = new Blob([String(content)]);
    } else {
        blob = data;
    }
    const elink = document.createElement('a');
    if ('download' in elink) {
        elink.download = filename;
        elink.style.display = 'none';
        elink.href =
            isLink && typeof data === 'string'
                ? data
                : URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
    } else {
        (navigator as any).msSaveBlob(blob, filename);
    }
}

export function dataURIToBlob(dataURI: string) {
    const splitDataURI = dataURI.split(',');
    const byteString =
        splitDataURI[0].indexOf('base64') >= 0
            ? atob(splitDataURI[1])
            : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i);

    return new Blob([ia], { type: mimeString });
}
