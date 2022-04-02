import router, { asyncRoutes, commonRoutes } from './index'
import useStore from '@/store/modules/main'
import useTagViewsStore from '@/store/modules/tagViews'
import configHooks from '@/config/configHooks'
import config from '@/config/config'
import baseConfig from '@/config/base'
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
        if (routeMap.component) {
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
                children: undefined,
                path: getPath,
                meta: route.meta ? {
                    ...route.meta
                } : {}
            }
            newRoute.meta.breadcrumbs = [...breadcrumbs, newRoute]
            if (route.children) {
                flatRoutes(route.children, getPath, newRoute.meta.breadcrumbs)
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

export const getUserinfo = async() => {
    await configHooks.router.getUserinfo()
}

let firstTimeEnter = true

router.beforeEach(async(to, from, next) => {
    try {
        if (to.meta?.title) document.title = to.meta.title
        if (firstTimeEnter) {
            configHooks.router.firstTimeEnter()
            firstTimeEnter = false
        }
        configHooks.router.beforeEach(to, from)
        /**
         * 需要登录才需要判断 token 是否存在
         */
        if (config.router.needLogin) {
            const store = useStore()
            /**
             * Storage 检查是否有 token
             * 有的话说明是第一次访问页面，则调用 getUserInfo 获取用户信息
             */
            if (!store.token) {
                const storage = config.router.session ? sessionStorage : localStorage
                store.token = storage.getItem(baseConfig.unique + 'token') || ''
            }
            /**
             * 如果仍然拿不到 token，这里排除白名单避免无限循环
             * @tip 不取名字的统统当作需要登录处理
             */
            if (
                !store.token &&
                (
                    to.name &&
                    !config.router.whiteList.includes(to.name)
                )
            ) {
                return next({ name: 'login' })
            }
        }
        /**
         * 页签
         */
        if (!config.tagViews.disabled && (to.meta?.title || (to.name && to.name !== 'index'))) {
            const tagViewsStore = useTagViewsStore()
            if (!to.meta.hiddenInTag) {
                if (typeof to.fullPath === 'string') tagViewsStore.push(to)
            }
            tagViewsStore.active = to.fullPath
        }
        /**
         * 第一次进入，一般会先获取权限
         */
        if (
            status.registerRouteFresh &&
            !config.router.whiteList.includes(to.name || '')
        ) {
            if (config.router.needLogin) {
                await getUserinfo()
                await setRoutes()
            } else {
                await setRoutes(false)
            }
            next({ ...to, replace: true })
        } else {
            next()
        }
    } catch {
        // 请求出问题了？
        // token 可能失效了，清除一下
        return next({ name: 'login' })
    }
})