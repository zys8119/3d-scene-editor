import type { Options } from 'wp-request'
import type { RouteRecordName } from 'vue-router'

export interface BaseConfig {
    title: string,
    lang: string,
    favicon: string,
    [x: string]: any
}

export interface Config {
    request: Partial<Options>,
    router: {
        history: boolean,
        needLogin: boolean,
        whiteList: RouteRecordName[],
        keepAlive: boolean
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
        menuSelect: (path: string, route?: RouteRecordRaw) => void
    },
    router: {
        beforeEach: (to: RouteLocationNormalized, from: RouteLocationNormalized) => void,
        routesFilter: (routes: RouteRecordRaw[]) => RouteRecordRaw[],
        firstTimeEnter: () => void
    },
    error: {
        handle: (error: GlobalError) => void
    }
}