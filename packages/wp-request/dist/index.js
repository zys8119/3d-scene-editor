"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestAll = exports.$http = exports.request = void 0;
const axios_1 = __importDefault(require("axios"));
const sha256_1 = __importDefault(require("crypto-js/sha256"));
const aes_1 = __importDefault(require("crypto-js/aes"));
const utils_1 = require("./utils");
const zlbReuqest_1 = require("./zlbReuqest");
/**
 * 基础配置
 */
const options = {
    baseURL: '',
    useStore: null,
    successCode: [200, 2000],
    logoutCode: [401],
    tokenField: 'Authorization',
    codeField: 'code',
    defaultMessage: '接口调用时遇到错误，请重试',
    messageField: ['errorMsg', 'msg', 'message'],
};
const service = axios_1.default.create({
    baseURL: '',
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 600000
});
let store;
/**
 * 请求重构，构造器
 */
service.interceptors.request.use(config => {
    var _a, _b, _c, _d, _e;
    if (!store && options.useStore)
        store = options.useStore();
    /**
     * 初始化参数
     */
    if (!config.headers)
        config.headers = {};
    if (store === null || store === void 0 ? void 0 : store.token)
        config.headers[options.tokenField] = `${store.token}`;
    if (!config.timeout && options.timeout)
        config.timeout = options.timeout;
    // beforeEach Hook
    if (options.beforeEach)
        options.beforeEach(config);
    // 加密
    if (config.encryptKey) {
        if (typeof config.encryptKey === 'string') {
            if ((_a = config.data) === null || _a === void 0 ? void 0 : _a[config.encryptKey])
                config.data[config.encryptKey] = (0, sha256_1.default)(config.data[config.encryptKey]).toString();
            if ((_b = config.params) === null || _b === void 0 ? void 0 : _b[config.encryptKey])
                config.params[config.encryptKey] = (0, sha256_1.default)(config.params[config.encryptKey]).toString();
        }
        else {
            for (const key of config.encryptKey) {
                if ((_c = config.data) === null || _c === void 0 ? void 0 : _c[key])
                    config.data[key] = (0, sha256_1.default)(config.data[key]).toString();
                if ((_d = config.params) === null || _d === void 0 ? void 0 : _d[key])
                    config.params[key] = (0, sha256_1.default)(config.params[key]).toString();
            }
        }
    }
    // 加密
    if (config.aesKey && options.aesStr) {
        const data = aes_1.default.encrypt(JSON.stringify(config.data), options.aesStr).toString();
        config.data = {};
        config.data[config.aesKey] = data;
    }
    // trim
    const needTrim = 'trim' in config ? config.trim : options.trim;
    if (needTrim) {
        [config.data, config.params].forEach(items => {
            if (Object.prototype.toString.call(items) === '[object Object]' ||
                Object.prototype.toString.call(items) === '[object Array]') {
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
        config.headers['Content-Type'] = `application/x-www-form-urlencoded;charset=UTF-8`;
        if (Object.prototype.toString.call(config.data) === '[object Object]') {
            const formData = new FormData();
            for (const key in config.data) {
                if (Object.prototype.toString.call(config.data[key]) === "[object Object]" ||
                    Object.prototype.toString.call(config.data[key]) === "[object Array]") {
                    formData.append(key, JSON.stringify(config.data[key]));
                }
                else {
                    formData.append(key, config.data[key]);
                }
            }
            config.data = formData;
        }
    }
    // get请求映射params参数
    if (config.method === 'get' && config.params) {
        const split = ((_e = config.url) === null || _e === void 0 ? void 0 : _e.includes('?')) ? '&' : '?';
        const extra = split + (0, utils_1.transParams)(config.params);
        if (extra !== '?' && extra !== '&') {
            config.url = (config.url || '') + split + (0, utils_1.transParams)(config.params);
        }
        config.params = {};
    }
    // 添加 base url
    config.url = (config.baseURL || config.ignoreGlobalBaseURL ? '' : options.baseURL) + (config.url || '');
    return config;
}, error => {
    return Promise.reject(error);
});
/**
 * 响应重构
 */
service.interceptors.response.use(response => {
    var _a, _b;
    if (response.config.raw || (typeof response.config.responseType !== 'undefined' && response.config.responseType !== 'json')) {
        return response;
    }
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    // if (!(res?.code)) return response
    let success = false;
    const codes = typeof options.codeField === 'string' ? [options.codeField] : options.codeField;
    if (options.hasOwnProperty('successField') && options.successField) {
        success = !!res[options.successField];
    }
    else {
        for (const code of codes) {
            success = options.successCode.includes(res[code]);
            if (success)
                break;
        }
    }
    if (!success) {
        let messageInfo = options.defaultMessage;
        const messageFields = typeof options.messageField === 'string' ? [options.messageField] : options.messageField;
        for (const field of messageFields) {
            if (res[field]) {
                messageInfo = res[field];
            }
        }
        (_a = options.errorHandle) === null || _a === void 0 ? void 0 : _a.call(options, messageInfo, res);
        for (const code of codes) {
            if (options.logoutCode.includes(res[code])) {
                (_b = options.logout) === null || _b === void 0 ? void 0 : _b.call(options, res);
                break;
            }
        }
        return Promise.reject(messageInfo);
    }
    else {
        return response;
    }
}, error => {
    var _a, _b, _c;
    let messageInfo = '';
    if (typeof error === 'string') {
        messageInfo = error;
    }
    else if (error instanceof Error || error.message) {
        messageInfo = error.message;
        if ((_a = messageInfo === null || messageInfo === void 0 ? void 0 : messageInfo.includes) === null || _a === void 0 ? void 0 : _a.call(messageInfo, 'timeout')) {
            messageInfo = '请求超时，请重试';
        }
    }
    (_b = options.errorHandle) === null || _b === void 0 ? void 0 : _b.call(options, messageInfo, (_c = error === null || error === void 0 ? void 0 : error.response) === null || _c === void 0 ? void 0 : _c.data);
    return Promise.reject(error);
});
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
const request = (configOrUrl, setLoading = true) => {
    const CancelToken = axios_1.default.CancelToken;
    const source = CancelToken.source();
    const config = typeof configOrUrl === 'string' ? { url: configOrUrl } : configOrUrl;
    if (!config.cancelToken) {
        config.cancelToken = source.token;
    }
    if (config.zlbApi && options.zlbAppKey) {
        return (0, zlbReuqest_1.request)(config, setLoading, options, source.cancel);
    }
    else {
        const request = service.request(config);
        const finalPromise = new utils_1.RequestPromise((resolve, reject) => {
            request
                .then((res) => {
                var _a;
                if (config.raw) {
                    resolve(res);
                }
                else {
                    resolve(res.data);
                }
                (_a = options.afterEach) === null || _a === void 0 ? void 0 : _a.call(options, config, res.data);
            })
                .catch((err) => {
                reject(err);
            })
                .finally(() => {
                if (store && setLoading)
                    store.requests.delete(finalPromise);
            });
        }, source.cancel);
        if (setLoading) {
            if (!store && options.useStore)
                store = options.useStore();
            if (store)
                store.requests.add(finalPromise);
        }
        return finalPromise;
    }
};
exports.request = request;
const requestGenerate = (method) => {
    return function (url, config, setLoading = true) {
        return (0, exports.request)({
            ...config,
            method,
            url
        }, setLoading);
    };
};
exports.request.get = requestGenerate('get');
exports.request.post = requestGenerate('post');
exports.request.delete = requestGenerate('delete');
exports.request.patch = requestGenerate('patch');
exports.request.put = requestGenerate('put');
exports.request.options = requestGenerate('options');
exports.$http = axios_1.default;
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
const requestAll = (requests, setLoading = true) => {
    const request = Promise.all(requests);
    if (setLoading) {
        if (!store && options.useStore)
            store = options.useStore();
        if (store)
            store.requests.add(request);
    }
    return new Promise((resolve, reject) => {
        request
            .then(resolve)
            .catch(reject)
            .finally(() => {
            if (store && setLoading)
                store.requests.delete(request);
        });
    });
};
exports.requestAll = requestAll;
exports.request.install = function (app, optionsOverride) {
    app.config.globalProperties.axios = exports.request;
    app.config.globalProperties.requestAll = exports.requestAll;
    app.config.globalProperties.download = utils_1.download;
    app.config.globalProperties.$http = exports.$http;
    app.config.globalProperties.dataURIToBlob = utils_1.dataURIToBlob;
    app.config.globalProperties.cancelAll = utils_1.cancelAll;
    window.common = {
        axios: exports.request,
        requestAll: exports.requestAll,
        download: utils_1.download,
        $http: exports.$http,
        dataURIToBlob: utils_1.dataURIToBlob,
        cancelAll: utils_1.cancelAll
    };
    if (optionsOverride)
        Object.assign(options, optionsOverride);
};
__exportStar(require("./utils"), exports);
__exportStar(require("./typings"), exports);
exports.default = exports.request;
