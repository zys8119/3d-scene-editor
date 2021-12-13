import type { Options } from 'wp-request'

export interface Config {
    base: {
        title: string
    },
    request: Partial<Options>,
    router: {
        history: boolean
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
        routesFilter: (routes: RouteRecordRaw[]) => RouteRecordRaw[]
    },
    error: {
        handle: (error: GlobalError) => void
    }
}