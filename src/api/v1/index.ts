import ok from './ok'
import test from './test'
export default {
    test2() {
        return window.common.axios<string>({
            url: ''
        })
    },
    ok,
    test
}