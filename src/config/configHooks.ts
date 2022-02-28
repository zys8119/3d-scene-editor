import useStore from '@/store/modules/main'
import router from '../router'
import type { ConfigHooks } from './typings'

import baseConfig from './base'
import config from './config'
import { closeAllModals } from 'wisdom-plus'

export default {
    /**
     * 请求相关
     */
    request: {
        beforeEach(config) {
            if (!config) return
            if (!config.headers) config.headers = {}
            // config.headers['unit'] = 'it is a test'
        },
        afterEach(config, data) {
            if (!config) return
            // const store = useStore()
            // store.requestResults[`${(config.method || 'get').toUpperCase()}@${config.url}}`] = data
        },
        errorHandle(msg) {
            ElMessage({
                type: 'error',
                message: msg
            })
        },
        logout() {
            router.push({ name: 'login' })
        }
    },
    validate: {
        alert(message, type: 'info' | 'success' | 'warning' | 'error') {
            ElMessage({
                message,
                type
            })
        }
    },
    /**
     * 布局相关
     */
    layout: {
        menuSelect(route) {
            if (!route) return
            if (route?.meta?.url) {
                const meta = route.meta
                if (meta?.target) {
                    window.open(meta.url, meta.target)
                } else {
                    location.href = meta.url || '#'
                }
            } else {
                router.push({ name: route.name })
            }
        }
    },
    /**
     * 全局路由相关
     */
    router: {
        firstTimeEnter() {
            const storage = config.router.session ? sessionStorage : localStorage
            const userinfo = storage.getItem(baseConfig.unique + 'userinfo')
            if (userinfo) {
                const store = useStore()
                store.userinfo = JSON.parse(userinfo)
            }
        },
        beforeEach(to, from) {
            // 每个路由进入前发起一个请求
            closeAllModals()
        },
        /**
         * 用于 登录 / 第一次进入页面时获取权限
         */
        async getUserinfo() {
            const store = useStore()
            if (!store.token || !store.userinfo.refresh_token) throw new Error('Token 不存在')
            /**
             * 验证 token 是否有效
             */
            const { data: { token_validated } } = await window.api.v1.user.verify(store.token.split(' ')[1])
            if (token_validated) return
            /**
             * 如果 token 无效，尝试续期
             */
            const { data: { authorization: token } } = await window.api.v1.user.tokenRefresh(store.userinfo.refresh_token)
            store.setToken(token)
        },
        /**
         * 过滤路由，流程在 getUserinfo 之后
         */
        routesFilter(routes) {
            return routes
        }
    },
    /**
     * 错误处理
     */
    error: {
        handle(error) {
            console.log(error)
        }
    }
} as ConfigHooks