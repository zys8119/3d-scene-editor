import useStore from '@/store/main'
import router from '../router'
import type { ConfigHooks } from './typings'
import { ElMessage } from 'element-plus'

export default {
    /**
     * 请求相关
     */
    request: {
        beforeEach(config) {
            if (!config) return
            if (!config.headers) config.headers = {}
            config.headers['unit'] = 'it is a test'
        },
        afterEach(config, data) {
            if (!config) return
            const store = useStore()
            store.requestResults[`${(config.method || 'get').toUpperCase()}@${config.url}}`] = data
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
    /**
     * 布局相关
     */
    layout: {
        menuSelect(path, route) {
            if (path.startsWith('/')) {
                router.push(path)
            } else {
                if (route) {
                    const meta = route.meta
                    if (meta?.target) {
                        window.open(path, meta.target)
                    } else {
                        location.href = path
                    }
                } else {
                    location.href = path
                }
            }
        }
    },
    /**
     * 全局路由相关
     */
    router: {
        beforeEach(to, from) {
            // 每个路由进入前发起一个请求
        },
        /**
         * 过滤路由
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