import router, { asyncRoutes, commonRoutes } from './index'
import useStore from '@/store'

export const getUserinfo = () => {
    const store = useStore()
    return new Promise<void>(resolve => {
        resolve()
    })
        .then(() => {
            asyncRoutes.forEach(route => router.addRoute('index', route))
            commonRoutes.forEach(route => router.addRoute(route))
            store.routes = asyncRoutes
        })
        .catch(() => {
            // 请求出问题了？
            // token 可能失效了，清除一下
            store.setToken()
        })
}

/**
 * 是否已经加载好路由了
 */
let registerRouteFresh = true

router.beforeEach(async(to, from, next) => {
    try {
        const store = useStore()
        /**
         * localStorage 检查是否有 token
         * 有的话说明是第一次访问页面，则调用 getUserInfo 获取用户信息
         */
        if (!store.token) {
            store.token = localStorage.getItem('token') || ''
        }
        /**
         * 如果仍然拿不到 token，这里排除 login 避免无限循环
         */
        if (!store.token && to.name !== 'login') {
            return next({ name: 'login' })
        }
        /**
         * 第一次进入，一般会先获取权限
         */
        if (registerRouteFresh) {
            await getUserinfo()
            next({ ...to, replace: true })
            registerRouteFresh = false
        } else {
            next()
        }
    } catch {
        next('/404')
    }
})