import router, { asyncRoutes, commonRoutes } from './index'
import useStore from '@/store/modules/main'
import configHooks from '@/config/configHooks'
import type { RouteRecordRaw } from 'vue-router'
import { createAsyncComponent } from '@/utils/route'

/**
 * 自动给路由 name
 */
export const setRoutesName = (routes: RouteRecordRaw[]) => {
    return routes.map(route => {
        const routeMap: RouteRecordRaw = {
            name: route.meta?.title || Symbol('AnonymousRouter'),
            ...route
        }
        if (routeMap.component) routeMap.component = createAsyncComponent(routeMap.name, routeMap.component)
        if (routeMap.meta?.icon) routeMap.meta.icon = markRaw(routeMap.meta.icon)
        if (routeMap.component && typeof routeMap.props === 'undefined') {
            routeMap.props = (route) => {
                return {
                    ...route.params,
                    ...route.query
                }
            }
        }
        if (Array.isArray(route.children) && route.children.length > 0) {
            routeMap.children = setRoutesName(route.children)
        }
        return routeMap
    })
}

/**
 * 扁平化路由
 */
export const flatRoutes = (routes: RouteRecordRaw[]) => {
    const finalRoutes: (RouteRecordRaw)[] = []
    const flatRoutes = (routes: RouteRecordRaw[], path = '', breadcrumbs: RouteRecordRaw[] = []) => {
        routes.forEach(route => {
            const getPath = route.path.indexOf('/') === 0 ? route.path : path + '/' + route.path
            const newRoute = {
                ...route,
                children: undefined as undefined | RouteRecordRaw[],
                path: getPath,
                meta: route.meta ? {
                    ...route.meta
                } : {}
            }
            newRoute.meta.breadcrumbs = [...breadcrumbs, newRoute]
            if (route.children && !route.meta?.notFlat) {
                flatRoutes(route.children, getPath, newRoute.meta.breadcrumbs)
            } else {
                newRoute.children = route.children
            }
            finalRoutes.push(newRoute)
        })
    }
    flatRoutes(routes)
    return finalRoutes
}

/**
 * 是否已经加载好路由了
 */
export const status = {
    registerRouteFresh: true
}

export const setRoutes = async(filter = true) => {
    const store = useStore()
    /**
     * 存储路由
     */
    const asyncRoutesWithName = setRoutesName(asyncRoutes)
    const asyncRoutesFilter = filter ? await configHooks.router.routesFilter(asyncRoutesWithName) : asyncRoutesWithName
    store.routes = asyncRoutesFilter
    store.flatRoutes = flatRoutes(asyncRoutesFilter)
    store.flatRoutes.forEach(route => router.addRoute('index', route))
    commonRoutes.forEach(route => router.addRoute(route))
    status.registerRouteFresh = false
}