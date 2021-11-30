import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes } from '@/router'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export default defineStore('main', {
    state: () => {
        return {
            // all these properties will have their type inferred automatically
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
            token: '',
            requests: new Set() as Set<Promise<any>>,
            routes: [] as RouteRecordRaw[]
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