import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes } from '@/router'

export default defineStore('main', {
    state: () => {
        return {
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
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
            /**
             * 是否是 H5 页面
             * isH5Max 代表 H5 页面的最大宽度
             */
            isH5: false,
            isH5Max: 700
        }
    },
    getters: {
        loading(state) {
            return state.requests.size > 0
        }
    },
    actions: {
        setToken(token = '') {
            this.token = token
            localStorage.setItem('token', token)
        },
        login(username: string, password: string) {
            return new Promise<void>(reslove => {
                this.setToken(username + password)
                this.getUserinfo()
                    .then(() => {
                        reslove()
                    })
            })
        },
        getUserinfo() {
            return new Promise<void>(resolve => {
                this.name = 'Test'
                resolve()
            })
                .then(() => {
                    this.routes = asyncRoutes
                })
                .catch(() => {
                    // token 可能失效了，清除一下
                    this.setToken()
                })
        },
        logout() {
            this.setToken()
        }
    }
})