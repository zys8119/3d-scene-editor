import useStore from '@/store/modules/main'
import type { Config } from './typings'

export default {
    base: {
        title: '不知道取什么名字'
    },
    request: {
        baseURL: '',
        successCode: [0],
        // successField: 'success',
        logoutCode: [401],
        useStore
    },
    router: {
        history: true
    }
} as Config