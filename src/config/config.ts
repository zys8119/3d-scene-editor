import useStore from '@/store/modules/main'
import type { Config } from './typings'

export default {
    request: {
        baseURL: import.meta.env.VITE_API,
        successCode: [0],
        // successField: 'success',
        logoutCode: [2],
        useStore,
        trim: true
    },
    router: {
        history: false,
        /**
         * 系统是否需要登录
         */
        needLogin: true,
        /**
         * 是否使用 SessionStorage 记录登录状态
         * 如果为 false 则使用 LocalStorage
         */
        session: false,
        /**
         * 白名单，用于排除不需要登录的页面
         */
        whiteList: ['login'],
        /**
         * 是否保持 alive 状态，如果启用 tagViews，则只会缓存页签中的类目
         */
        keepAlive: true
    },
    /**
     * 页签配置
     */
    tagViews: {
        disabled: false,
        max: 10
    }
} as Config