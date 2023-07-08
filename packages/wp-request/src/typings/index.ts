import type { AxiosRequestConfig } from 'axios';

export interface Store {
    token: string;
    requests: Set<Promise<any>>;
}

export interface Options {
    baseURL: string;
    useStore: null | (() => Store);
    successCode: number[];
    /**
     * 成功字段，如果填写了本字段，则不会判断 successCode
     */
    successField?: string;
    codeField: string | string[];
    messageField: string | string[];
    defaultMessage: string;
    logoutCode: number[];
    logout?: (data: ResponseType) => void;
    timeout?: number;
    aesStr?: string;
    /**
     * 全局是否过滤两端空格
     */
    trim?: boolean;
    /**
     * beforeEach，全局前置钩子
     */
    beforeEach?: (config?: AxiosRequestConfig) => void;
    /**
     * afterEach，全局后置钩子
     *
     * @example
     * 在 state 缓存每一个请求的结果
     * ```ts
     * import useStore from '@/store'
     * import { mount } from 'wp-request'
     * mount(app, {
     *   afterEach(config, data) {
     *     const store = useStore()
     *     // store.requestResults is as Record<string, any>
     *     store.requestResults[`${(config.method || 'get').toUpperCase()}@${config.url}}`] = data
     *   }
     * })
     * ```
     */
    afterEach?: (config?: AxiosRequestConfig, data?: any) => void;
    errorHandle?: (msg: string, data?: ResponseType) => void;
    tokenField: string;
    zlbHost?: string;
    zlbAppKey?: string;
}

export interface ResponseType<T = any> {
    code: number;
    msg?: string;
    message?: string;
    state?: number;
    data: T;
    success?: boolean;
}

export type RequestResponseType<
    Config extends AxiosRequestConfig,
    T extends any
> = Config['raw'] extends true
    ? T
    : Config['responseType'] extends
          | 'arraybuffer'
          | 'blob'
          | 'document'
          | 'text'
          | 'stream'
    ? T
    : ResponseType<T>;
declare module 'axios' {
    export interface AxiosRequestConfig {
        isFormData?: boolean;
        encryptKey?: string | string[];
        trim?: boolean;
        aesKey?: string;
        raw?: boolean;
        ignoreGlobalBaseURL?: boolean;
        zlbApi?: string;
    }
}
