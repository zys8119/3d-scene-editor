import { RouteRecordRaw } from 'vue-router'
import config from '@/config/config'
import baseConfig from '@/config/base'

const useStore = defineStore('main', {
    state: () => {
        return {
            userinfo: {
                username: ''
            } as Record<any, string>,
            /**
             * 可编辑，菜单是否折叠
             */
            collapse: false,
            /**
             * 请求相关
             */
            token: '',
            requests: new Set() as Set<Promise<any>>,
            requestResults: {} as Record<string, any>,
            /**
             * 有权限的路由，用于菜单的生成
             */
            routes: [] as RouteRecordRaw[],
            flatRoutes: [] as RouteRecordRaw[],
            /**
             * 是否是 H5 页面
             */
            isH5: false,
            /**
             * H5 页面的最大宽度
             */
            isH5Max: 700
        }
    },
    getters: {
        loading(state) {
            return state.requests.size > 0
        },
        /**
         * 只读，菜单是否折叠，在 H5 页面下永远为 true
         */
        isCollapse(state) {
            return state.isH5 || state.collapse
        }
    },
    actions: {
        setToken(token = '') {
            const storage = config.router.session ? sessionStorage : localStorage
            return new Promise<void>(resolve => {
                this.token = token
                storage.setItem(baseConfig.unique + 'token', token)
                resolve()
            })
        },
        setUserinfo(userinfo?: Record<any, string>) {
            const storage = config.router.session ? sessionStorage : localStorage
            if (!userinfo) {
                this.userinfo = {}
                storage.removeItem(baseConfig.unique + 'userinfo')
            } else {
                this.userinfo = userinfo
                storage.setItem(baseConfig.unique + 'userinfo', JSON.stringify(userinfo))
            }
        }
    }
})

export default useStore