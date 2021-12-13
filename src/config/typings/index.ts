import type { Options } from 'wp-request'

export interface Config {
    base: {
        title: string
    },
    request: Partial<Options>
}

import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router'

export interface ConfigHooks {
    request: Pick<Options, 'afterEach' | 'beforeEach' | 'logout'>,
    layout: {
        menuSelect: (path: string, route?: RouteRecordRaw) => void
    },
    router: {
        beforeEach: (to: RouteLocationNormalized, from: RouteLocationNormalized) => void,
        routesFilter: (routes: RouteRecordRaw[]) => RouteRecordRaw[]
    }
}