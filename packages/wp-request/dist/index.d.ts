import { AxiosRequestConfig } from 'axios';
import type { App } from 'vue';
import { RequestPromise, download, dataURIToBlob, cancelAll } from './utils';
import type { Options, RequestResponseType } from './typings';
/**
 * 请求，第二个参数可以设置是否改变全局Loading
 *
 * @example
 * ```ts
 * import request from 'wp-request'
 * app.use(request)
 * ```
 *
 * @example
 * 一个对于 https://example.com 的 Post 请求
 * ```ts
 * import request from 'wp-request'
 * request({
 *   url: 'https://example.com',
 *   method: 'post',
 *   params: {
 *     page: 1,
 *     size: 20
 *   },
 *   data: {
 *     search: 'something'
 *   }
 * })
 * ```
 *
 */
export declare const request: {
    <T = any, Config extends AxiosRequestConfig<any> = {}>(configOrUrl: string | Config, setLoading?: boolean): RequestPromise<RequestResponseType<Config, T>>;
    get: <T_1 = any, Config_1 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_1 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "get";
    } & {
        url: string;
    } & Config_1, T_1>>;
    post: <T_2 = any, Config_2 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_2 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "post";
    } & {
        url: string;
    } & Config_2, T_2>>;
    delete: <T_3 = any, Config_3 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_3 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "delete";
    } & {
        url: string;
    } & Config_3, T_3>>;
    patch: <T_4 = any, Config_4 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_4 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "patch";
    } & {
        url: string;
    } & Config_4, T_4>>;
    put: <T_5 = any, Config_5 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_5 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "put";
    } & {
        url: string;
    } & Config_5, T_5>>;
    options: <T_6 = any, Config_6 extends AxiosRequestConfig<any> = {}>(url: string, config?: Config_6 | undefined, setLoading?: boolean) => RequestPromise<RequestResponseType<{
        method: "options";
    } & {
        url: string;
    } & Config_6, T_6>>;
    install(app: App<Element>, optionsOverride?: Partial<Options> | undefined): void;
};
export declare const $http: import("axios").AxiosStatic;
/**
 * 传入多个 promise 对象，最终只修改一次 loading
 *
 * @example1
 * 同时请求多个接口
 * ```ts
 * import request, { requestAll } from 'wp-request'
 * requestAll([
 *   request({ url: 'https://example1.com' }),
 *   request({ url: 'https://example2.com' }),
 *   request({ url: 'https://example3.com' })
 * ])
 * ```
 *
 * @example2
 * 事实上，只要是一个 promise ，就可以作为参数传入
 * ```ts
 * import request, { requestAll } from 'wp-request'
 * const aPromise = new Promise<void>(resolve => setTimeout(resolve, 500))
 * requestAll([
 *   request({ url: 'https://example1.com' }),
 *   request({ url: 'https://example2.com' }),
 *   request({ url: 'https://example3.com' }),
 *   aPromise
 * ])
 * ```
 */
export declare const requestAll: <T extends [] | readonly unknown[]>(requests: T, setLoading?: boolean) => Promise<{ -readonly [P in keyof T]: Awaited<T[P]>; }>;
/**
 * 附加到 vue 原型上和 window 对象上
 */
declare global {
    interface Window {
        common: {
            readonly axios: typeof request;
            readonly requestAll: typeof requestAll;
            readonly download: typeof download;
            readonly $http: typeof $http;
            readonly dataURIToBlob: typeof dataURIToBlob;
            readonly cancelAll: typeof cancelAll;
        };
    }
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        readonly axios: typeof request;
        readonly download: typeof download;
        readonly requestAll: typeof requestAll;
        readonly $http: typeof $http;
        readonly dataURIToBlob: typeof dataURIToBlob;
        readonly cancelAll: typeof cancelAll;
    }
}
export * from './utils';
export * from './typings';
export default request;
