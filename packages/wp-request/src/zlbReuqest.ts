import { AxiosRequestConfig, Canceler } from 'axios';
import { Options, RequestResponseType, Store } from './typings';
import { mgop } from 'wp-zheliban-request';
import { RequestPromise } from './utils';
import aes from 'crypto-js/aes';

let store: Store | null = null;

export function request<T = any, Config extends AxiosRequestConfig = {}>(
    config: AxiosRequestConfig,
    setLoading: boolean,
    options: Options,
    cancel: Canceler
) {
    if (!store && options.useStore) store = options.useStore();
    const finalPromise = new RequestPromise<RequestResponseType<Config, T>>(
        (resolve, reject) => {
            if (!options.zlbAppKey) {
                if (store && setLoading) store.requests.delete(finalPromise);
                return reject('zlbAppKey is not defined');
            }
            headerHandle(config, options);
            mgop({
                api: config.zlbApi || '',
                host: options.zlbHost || 'https://mapi.zjzwfw.gov.cn',
                appKey: options.zlbAppKey || '',
                type: 'POST',
                dataType: 'JSON',
                data: config.data,
                header: config.headers,
                onSuccess(response) {
                    if (config.raw) {
                        if (store && setLoading)
                            store.requests.delete(finalPromise);
                        resolve(response);
                        return;
                    }
                    const res = response.data;

                    // if the custom code is not 20000, it is judged as an error.
                    let success = false;
                    const codes =
                        typeof options.codeField === 'string'
                            ? [options.codeField]
                            : options.codeField;
                    if (
                        options.hasOwnProperty('successField') &&
                        options.successField
                    ) {
                        success = !!res[options.successField];
                    } else {
                        for (const code of codes) {
                            success = options.successCode.includes(res[code]);
                            if (success) break;
                        }
                    }
                    if (store && setLoading)
                        store.requests.delete(finalPromise);
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

                        return reject(messageInfo);
                    } else {
                        return resolve(res);
                    }
                },
                onFail(error) {
                    let messageInfo: string = '';
                    if (typeof error === 'string') {
                        messageInfo = error;
                    } else if (error instanceof Error || error.message) {
                        messageInfo = error.message;
                        if (messageInfo?.includes?.('timeout')) {
                            messageInfo = '请求超时，请重试';
                        }
                    }
                    options.errorHandle?.(messageInfo);
                    if (store && setLoading)
                        store.requests.delete(finalPromise);
                    return reject(error);
                },
            });
        },
        cancel
    );
    if (setLoading) {
        if (store) store.requests.add(finalPromise);
    }
    return finalPromise;
}

function headerHandle(config: AxiosRequestConfig, options: Options) {
    /**
     * Header handle
     */
    if (!config.headers) config.headers = {};
    if (store?.token) config.headers[options.tokenField] = `${store.token}`;
    if (options.beforeEach) options.beforeEach(config);

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
                Object.prototype.toString.call(items) === '[object Object]' ||
                Object.prototype.toString.call(items) === '[object Array]'
            ) {
                for (const key in items) {
                    if (typeof items[key] === 'string')
                        items[key] = items[key].trim();
                }
            }
        });
    }

    return config;
}

declare module 'wp-zheliban-request/types/mgop/type' {
    export interface IMgopParams {
        type?: string;
        dataType?: string;
    }
}
