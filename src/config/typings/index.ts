import type { Options } from 'wp-request'
import type { RouteRecordName } from 'vue-router'
import type { Options as ValidateOptions } from 'wp-validate'

export interface BaseConfig {
    /**
    * 基础地址，router和vite均会采用此项配置
    * 使用空字符串设置可以使用相对地址
    * 如果使用 history api，可能需要配置此项
    */
    base: string,
    title: string,
    lang: string,
    unique?: string,
    [x: string]: any
}

export interface Config {
    request: Partial<Options>,
    router: {
        remote: boolean,
        history: boolean,
        needLogin: boolean,
        whiteList: RouteRecordName[],
        keepAlive: boolean,
        session: boolean
    },
    tagViews: {
        disabled?: boolean,
        max?: number
    }
}

import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'
export interface GlobalError {
    type: 'global' | 'vue',
    msg?: string | Event,
    url?: string,
    line?: number,
    col?: number,
    error?: unknown,
    vm?: any
}

export interface ConfigHooks {
    request: Pick<Options, 'afterEach' | 'beforeEach' | 'logout' | 'errorHandle'>,
    layout: {
        menuSelect: (route?: RouteRecordRaw) => void
    },
    router: {
        beforeEach: (to: RouteLocationNormalized, from: RouteLocationNormalized) => void,
        routesFilter: (routes: RouteRecordRaw[]) => RouteRecordRaw[],
        getUserinfo: () => Promise<any>,
        firstTimeEnter: () => void
    },
    error: {
        handle: (error: GlobalError) => void
    },
    validate: Partial<ValidateOptions>
}