export const usePromise = <T>(promise: Promise<T> | (() => Promise<T>)) => {
    const loading = ref(true)
    const resolve = ref(false)
    const reject = ref(false)
    const error = ref<unknown>()
    const result = ref<T>()
    const doPromise = () => {
        /** get Promise object */
        const promiseMap = typeof promise === 'function' ? promise() : promise
        if (typeof promise !== 'function') {
            console.warn('If you wanna use replay, please use function as param')
            return
        }
        /** reset the value */
        resolve.value = false
        reject.value = false
        loading.value = true
        /** do Promise */
        promiseMap
            .then(res => {
                resolve.value = true
                result.value = res
            })
            .catch(err => {
                reject.value = true
                error.value = err
            })
            .finally(() => {
                loading.value = false
            })
    }
    doPromise()
    return { loading, resolve, reject, result, error, replay: doPromise }
}