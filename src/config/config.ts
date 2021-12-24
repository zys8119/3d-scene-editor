import useStore from '@/store/modules/main'
import type { Config } from './typings'

export default {
    request: {
        baseURL: '',
        successCode: [0],
        // successField: 'success',
        logoutCode: [401],
        useStore
    },
    router: {
        history: true,
        /**
         * 系统是否需要登录
         */
        needLogin: true,
        /**
         * 白名单，用于排除不需要登录的页面
         */
        whiteList: ['login']
    }
} as Config