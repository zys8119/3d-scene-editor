import axios, { AxiosRequestConfig, Method } from 'axios';
import sha256 from 'crypto-js/sha256';
import aes from 'crypto-js/aes';
import type { App } from 'vue';
import {
    transParams,
    RequestPromise,
    download,
    dataURIToBlob,
    cancelAll,
} from './utils';
import type { Store, Options, RequestResponseType } from './typings';
import { request as zlbReuqest } from './zlbReuqest';

/**
 * 基础配置
 */
const options: Options = {
    baseURL: '',
    useStore: null,
    successCode: [200, 2000],
    logoutCode: [401],
    tokenField: 'Authorization',
    codeField: 'code',
    defaultMessage: '接口调用时遇到错误，请重试',
    messageField: ['errorMsg', 'msg', 'message'],
};

const service = axios.create({
    baseURL: '',
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 600000
});

let store: Store;
/**
 * 请求重构，构造器
 */
service.interceptors.request.use(
    (config) => {
        if (!store && options.useStore) store = options.useStore();

        /**
         * 初始化参数
         */
        if (!config.headers) config.headers = {};
        if (store?.token) config.headers[options.tokenField] = `${store.token}`;
        if (!config.timeout && options.timeout)
            config.timeout = options.timeout;

        // beforeEach Hook
        if (options.beforeEach) options.beforeEach(config);

        // 加密
        if (config.encryptKey) {
            if (typeof config.encryptKey === 'string') {
                if (config.data?.[config.encryptKey])
                    config.data[config.encryptKey] = sha256(
                        config.data[config.encryptKey]
                    ).toString();
                if (config.params?.[config.encryptKey])
                    config.params[config.encryptKey] = sha256(
                        config.params[config.encryptKey]
                    ).toString();
            } else {
                for (const key of config.encryptKey) {
                    if (config.data?.[key])
                        config.data[key] = sha256(config.data[key]).toString();
                    if (config.params?.[key])
                        config.params[key] = sha256(
                            config.params[key]
                        ).toString();
                }
            }
        }

        // 加密
        if (config.aesKey && options.aesStr) {
            const data = aes
                .encrypt(JSON.stringify(config.data), options.aesStr)
                .toString();
            config.data = {};
            config.data[config.aesKey] = data;
        }

        // trim
        const needTrim = 'trim' in config ? config.trim : options.trim;
        if (needTrim) {
            [config.data, config.params].forEach((items) => {
                if (
                    Object.prototype.toString.call(items) ===
                        '[object Object]' ||
                    Object.prototype.toString.call(items) === '[object Array]'
                ) {
                    for (const key in items) {
                        if (typeof items[key] === 'string')
                            items[key] = items[key].trim();
                    }
                }
            });
        }

        /**
         * formData 处理
         */
        if (config.isFormData && !(config.data instanceof FormData)) {
            config.headers[
                'Content-Type'
            ] = `application/x-www-form-urlencoded;charset=UTF-8`;
            if (
                Object.prototype.toString.call(config.data) ===
                '[object Object]'
            ) {
                const formData = new FormData();
                for (const key in config.data) {
                    if (
                        Object.prototype.toString.call(config.data[key]) ===
                            '[object Object]' ||
                        Object.prototype.toString.call(config.data[key]) ===
                            '[object Array]'
                    ) {
                        formData.append(key, JSON.stringify(config.data[key]));
                    } else {
                        formData.append(key, config.data[key]);
                    }
                }
                config.data = formData;
            }
        }

        // get请求映射params参数
        if (config.method === 'get' && config.params) {
            const split = config.url?.includes('?') ? '&' : '?';
            const extra = split + transParams(config.params);
            if (extra !== '?' && extra !== '&') {
                config.url =
                    (config.url || '') + split + transParams(config.params);
            }
            config.params = {};
        }

        // 添加 base url
        config.url =
            (config.baseURL || config.ignoreGlobalBaseURL
                ? ''
                : options.baseURL) + (config.url || '');

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
/**
 * 响应重构
 */
service.interceptors.response.use(
    (response) => {
        if (
            response.config.raw ||
            (typeof response.config.responseType !== 'undefined' &&
                response.config.responseType !== 'json')
        ) {
            return response;
        }
        const res = response.data;

        // if the custom code is not 20000, it is judged as an error.
        // if (!(res?.code)) return response
        let success = false;
        const codes =
            typeof options.codeField === 'string'
                ? [options.codeField]
                : options.codeField;
        if (options.hasOwnProperty('successField') && options.successField) {
            success = !!res[options.successField];
        } else {
            for (const code of codes) {
                success = options.successCode.includes(res[code]);
                if (success) break;
            }
        }
        if (!success) {
            let messageInfo = options.defaultMessage;
            const messageFields =
                typeof options.messageField === 'string'
                    ? [options.messageField]
                    : options.messageField;
            for (const field of messageFields) {
                if (res[field]) {
                    messageInfo = res[field] as string;
                }
            }
            options.errorHandle?.(messageInfo, res);

            for (const code of codes) {
                if (options.logoutCode.includes(res[code])) {
                    options.logout?.(res);
                    break;
                }
            }

            return Promise.reject(messageInfo);
        } else {
            return response;
        }
    },
    (error) => {
        let messageInfo: string = '';
        if (typeof error === 'string') {
            messageInfo = error;
        } else if (error instanceof Error || error.message) {
            messageInfo = error.message;
            if (messageInfo?.includes?.('timeout')) {
                messageInfo = '请求超时，请重试';
            }
        }
        options.errorHandle?.(messageInfo, error?.response?.data);
        return Promise.reject(error);
    }
);

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
export const request = <T = any, Config extends AxiosRequestConfig = {}>(
    configOrUrl: Config | string,
    setLoading = true
) => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const config: AxiosRequestConfig =
        typeof configOrUrl === 'string' ? { url: configOrUrl } : configOrUrl;
    if (!config.cancelToken) {
        config.cancelToken = source.token;
    }
    if (config.zlbApi && options.zlbAppKey) {
        return zlbReuqest<T, Config>(
            config,
            setLoading,
            options,
            source.cancel
        );
    } else {
        const request = service.request<RequestResponseType<Config, T>>(config);
        const finalPromise = new RequestPromise<RequestResponseType<Config, T>>(
            (resolve, reject) => {
                request
                    .then((res) => {
                        if (config.raw) {
                            resolve(res);
                        } else {
                            resolve(res.data);
                        }
                        options.afterEach?.(config, res.data);
                    })
                    .catch((err: unknown) => {
                        reject(err);
                    })
                    .finally(() => {
                        if (store && setLoading)
                            store.requests.delete(finalPromise);
                    });
            },
            source.cancel
        );
        if (setLoading) {
            if (!store && options.useStore) store = options.useStore();
            if (store) store.requests.add(finalPromise);
        }
        return finalPromise;
    }
};

const requestGenerate = <M extends Method>(method: M) => {
    return function <T = any, Config extends AxiosRequestConfig = {}>(
        url: string,
        config?: Config,
        setLoading = true
    ) {
        return request<T, { method: M } & { url: string } & Config>(
            {
                ...config,
                method,
                url,
            } as { method: M } & { url: string } & Config,
            setLoading
        );
    };
};
request.get = requestGenerate('get');
request.post = requestGenerate('post');
request.delete = requestGenerate('delete');
request.patch = requestGenerate('patch');
request.put = requestGenerate('put');
request.options = requestGenerate('options');

export const $http = axios;

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
export const requestAll = <T extends readonly unknown[] | []>(
    requests: T,
    setLoading = true
) => {
    const request = Promise.all(requests);
    if (setLoading) {
        if (!store && options.useStore) store = options.useStore();
        if (store) store.requests.add(request);
    }
    return new Promise<{ -readonly [P in keyof T]: Awaited<T[P]> }>(
        (resolve, reject) => {
            request
                .then(resolve)
                .catch(reject)
                .finally(() => {
                    if (store && setLoading) store.requests.delete(request);
                });
        }
    );
};

request.install = function (
    app: App<Element>,
    optionsOverride?: Partial<Options>
) {
    app.config.globalProperties.axios = request;
    app.config.globalProperties.requestAll = requestAll;
    app.config.globalProperties.download = download;
    app.config.globalProperties.$http = $http;
    app.config.globalProperties.dataURIToBlob = dataURIToBlob;
    app.config.globalProperties.cancelAll = cancelAll;
    window.common = {
        axios: request,
        requestAll,
        download,
        $http,
        dataURIToBlob,
        cancelAll,
    };
    if (optionsOverride) Object.assign(options, optionsOverride);
};

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
    export interface ComponentCustomProperties {
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
