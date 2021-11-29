import ok from './ok'
export default {
    test(data?: {
        info: string
    }) {
        return window.common.axios({
            url: ''
        })
    },
    test2() {
        return window.common.axios<string>({
            url: ''
        })
    },
    ok
}