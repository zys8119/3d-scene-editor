import ok from './ok'
import test from './test'
import user from './user'
export default {
    test2() {
        return window.common.axios<string>({
            url: ''
        })
    },
    ok,
    test,
    user
}