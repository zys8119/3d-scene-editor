"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataURIToBlob = exports.download = exports.cancelAll = exports.RequestPromise = exports.transParams = void 0;
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
function transParams(params) {
    const result = Object.entries(params).filter(([key, value]) => {
        return !Object.is(value, undefined) && !Object.is(value, null) && !Object.is(JSON.stringify(value), '{}');
    }).map(([key, value]) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
    });
    return result.join('&');
}
exports.transParams = transParams;
class RequestPromise extends Promise {
    constructor(executor, cancel) {
        super(executor);
        this.cancel = cancel;
    }
    then(onfulfilled, onrejected) {
        const thenRequest = super.then(onfulfilled, onrejected);
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
    catch(onrejected) {
        const thenRequest = super.catch(onrejected);
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
    finally(onfinally) {
        const thenRequest = super.finally(onfinally);
        thenRequest.cancel = this.cancel;
        return thenRequest;
    }
}
exports.RequestPromise = RequestPromise;
const cancelAll = (promises, message) => {
    for (const promise of promises) {
        if (promise.cancel) {
            promise.cancel(message);
        }
    }
};
exports.cancelAll = cancelAll;
/**
 * 通用下载方法
 * @param data URL 地址 / base64 / Blob / File
 * @param filename 文件名
 * @param isLink 第一个参数使用的是否是 URL 地址
 */
function download(data, filename, isLink = false) {
    let blob;
    if (typeof data === 'string') {
        const content = data;
        blob = new Blob([String(content)]);
    }
    else {
        blob = data;
    }
    const elink = document.createElement('a');
    if ('download' in elink) {
        elink.download = filename;
        elink.style.display = 'none';
        elink.href = isLink && typeof data === 'string' ? data : URL.createObjectURL(blob);
        document.body.appendChild(elink);
        elink.click();
        URL.revokeObjectURL(elink.href);
        document.body.removeChild(elink);
    }
    else {
        navigator.msSaveBlob(blob, filename);
    }
}
exports.download = download;
function dataURIToBlob(dataURI) {
    const splitDataURI = dataURI.split(',');
    const byteString = splitDataURI[0].indexOf('base64') >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
    const mimeString = splitDataURI[0].split(':')[1].split(';')[0];
    const ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++)
        ia[i] = byteString.charCodeAt(i);
    return new Blob([ia], { type: mimeString });
}
exports.dataURIToBlob = dataURIToBlob;
