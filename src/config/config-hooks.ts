import useStore from '@/store/modules/main'
import router from '../router'
import type {ConfigHooks} from './typings'
import baseConfig from './base'
import config from './config'
export const views = import.meta.glob('../views/**/**')

import {createDiscreteApi} from 'naive-ui'
const {message} = createDiscreteApi(['message'])

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
        afterEach(config) {
            if (!config) return
        },
        errorHandle(msg) {
            message.error(msg)
        },
        logout() {
            router.push({ name: 'login' })
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
        beforeEach() {
            // 每个路由进入前发起一个请求
        },
        /**
         * 用于 登录 / 第一次进入页面时获取权限
         * 可验证token是否有效及续期
         */
        async getUserinfo() {
            const store = useStore()
            if (!store.token) throw new Error('Token 不存在')
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