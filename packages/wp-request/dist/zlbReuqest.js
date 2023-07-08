"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const wp_zheliban_request_1 = require("wp-zheliban-request");
const utils_1 = require("./utils");
const aes_1 = __importDefault(require("crypto-js/aes"));
let store = null;
function request(config, setLoading, options, cancel) {
    if (!store && options.useStore)
        store = options.useStore();
    const finalPromise = new utils_1.RequestPromise((resolve, reject) => {
        if (!options.zlbAppKey) {
            if (store && setLoading)
                store.requests.delete(finalPromise);
            return reject('zlbAppKey is not defined');
        }
        headerHandle(config, options);
        (0, wp_zheliban_request_1.mgop)({
            api: config.zlbApi || '',
            host: options.zlbHost || 'https://mapi.zjzwfw.gov.cn',
            appKey: options.zlbAppKey || '',
            type: 'POST',
            dataType: 'JSON',
            data: config.data,
            header: config.headers,
            onSuccess(response) {
                var _a, _b;
                if (config.raw) {
                    if (store && setLoading)
                        store.requests.delete(finalPromise);
                    resolve(response);
                    return;
                }
                const res = response.data;
                // if the custom code is not 20000, it is judged as an error.
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
                if (store && setLoading)
                    store.requests.delete(finalPromise);
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
                    return reject(messageInfo);
                }
                else {
                    return resolve(res);
                }
            },
            onFail(error) {
                var _a, _b;
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
                (_b = options.errorHandle) === null || _b === void 0 ? void 0 : _b.call(options, messageInfo);
                if (store && setLoading)
                    store.requests.delete(finalPromise);
                return reject(error);
            }
        });
    }, cancel);
    if (setLoading) {
        if (store)
            store.requests.add(finalPromise);
    }
    return finalPromise;
}
exports.request = request;
function headerHandle(config, options) {
    /**
    * Header handle
    */
    if (!config.headers)
        config.headers = {};
    if (store === null || store === void 0 ? void 0 : store.token)
        config.headers[options.tokenField] = `${store.token}`;
    if (options.beforeEach)
        options.beforeEach(config);
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
    return config;
}
