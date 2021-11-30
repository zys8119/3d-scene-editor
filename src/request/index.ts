import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

/**
 * 基础配置
 */
// const apiPrefixDevelopment = '/'
// const apiPrefixProduction = '/'
// const baseURL = import.meta.env.MODE === 'development' ? apiPrefixDevelopment : apiPrefixProduction
interface Store {
    token: string;
    loading: boolean;
    requests: Set<Promise<any>>;
}
interface Options {
    baseURL: string;
    useStore: null | (() => Store);
    successCode: number[];
}
const options: Options = {
    baseURL: '',
    useStore: null,
    successCode: [200, 2000]
}

const service = axios.create({
    baseURL: '',
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 25000
})

export function transParams(params: Record<string, any>) {
    let result = ''
    Object.keys(params).forEach((key) => {
        if (!Object.is(params[key], undefined) && !Object.is(params[key], null) && !Object.is(JSON.stringify(params[key]), '{}')) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
        }
    })
    return result
}

let store: Store
/**
 * 请求重构
 */
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (!store && options.useStore) store = options.useStore()
        if (!config.headers) config.headers = {}
        if (store) config.headers['Authorization'] = `Bearer ${store.token}`
        // get请求映射params参数
        if (config.method === 'get' && config.params) {
            config.url = options.baseURL + config.url + '?' + transParams(config.params)
            config.params = {}
        }
        return config
    },
    error => {
        // do something with request error
        return Promise.reject(error)
    }
)
/**
 * 响应重构
 */
service.interceptors.response.use(
    response => {
        const res = response.data as any

        // if the custom code is not 20000, it is judged as an error.
        if (!(res?.code)) return response
        if (options.successCode.includes(res.code)) {
        const messageInfo = res.errorMsg || res.msg || res.message || '接口调用时遇到错误，请重试'

        ElMessage({
            type: 'error',
            message: messageInfo
        })

        // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        // if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //   // to re-login
        //   MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //     confirmButtonText: 'Re-Login',
        //     cancelButtonText: 'Cancel',
        //     type: 'warning'
        //   }).then(() => {
        //     store.dispatch('user/resetToken').then(() => {
        //       location.reload()
        //     })
        //   })
        // }
            return Promise.reject(res.errorMsg || res.msg || res.message || '接口调用时遇到错误，请重试')
        } else {
            return response
        }
    },
    error => {
        let messageInfo = error.message
        if (messageInfo.includes('timeout')) {
            messageInfo = '请求超时，请重试'
        }
        ElMessage({
            type: 'error',
            message: messageInfo
        })
        return Promise.reject(error)
    }
)

export interface ResponseType<T = any> {
    code: number;
    errorMsg?: string;
    data: T;
    success?: boolean;
}

/**
 * 请求，第二个参数可以设置是否改变全局Loading
 */
const request = async <T = any>(config: AxiosRequestConfig, setLoading = true): Promise<ResponseType<T>> => {
    const request = service.request<ResponseType<T>>(config)
    if (setLoading) {
        if (!store && options.useStore) store = options.useStore()
        if (store) store.requests.add(request)
    }
    return new Promise<ResponseType<T>>((resolve, reject) => {
        request
            .then(({ data }) => {
                resolve(data)
            })
            .catch((err: unknown) => {
                reject(err)
            })
            .finally(() => {
                if (store && setLoading) store.requests.delete(request)
            })
    })
}

export const $http = service

/**
 * 传入多个 promise 对象，最终只修改一次 loading
 */
export const requestAll = (requests: Promise<any>[], setLoading = true) => {
    const request = Promise.all(requests)
    if (setLoading) {
        if (!store && options.useStore) store = options.useStore()
        if (store) store.requests.add(request)
    }
    return new Promise<any[]>((resolve, reject) => {
        request
            .then((values) => {
                resolve(values)
            })
            .catch((err: unknown) => {
                reject(err)
            })
            .finally(() => {
                if (store && setLoading) store.requests.delete(request)
            })
    })
}

/**
 * 通用下载方法
 */
export function download(url: string, params: Record<string, any>, filename: string) {
    return service.post(url, params, {
        transformRequest: [(params) => {
            return transParams(params)
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        responseType: 'blob'
    }).then((data) => {
        const content = data
        const blob = new Blob([String(content)])
        if ('download' in document.createElement('a')) {
            const elink = document.createElement('a')
            elink.download = filename
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href)
            document.body.removeChild(elink)
        } else {
            (navigator as any).msSaveBlob(blob, filename)
        }
    }).catch((r) => {
        console.error(r)
    })
}

import { App } from 'vue'

export function mount(app: App<Element>, optionsOverride?: Partial<Options>) {
    app.config.globalProperties.axios = request
    app.config.globalProperties.requestAll = requestAll
    app.config.globalProperties.download = download
    window.common = {
        axios: request,
        requestAll,
        download
    }
    if (optionsOverride) Object.assign(options, optionsOverride)
}

/**
 * 附加到 vue 原型上和 window 对象上
 */
declare global {
    interface Window {
        common: {
            readonly axios: typeof request,
            readonly requestAll: typeof requestAll,
            readonly download: typeof download
        }
    }
}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        readonly axios: typeof request;
        readonly download: typeof download;
        readonly requestAll: typeof requestAll;
    }
}

export default request
