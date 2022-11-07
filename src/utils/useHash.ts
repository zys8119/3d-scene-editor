/**
 * @param hash Hash of the current location. If present, starts with a #. Support Array or Set.
 * @param back Select to push the router or back to the router.
 */
export function useHash(hash: Hash | Hash[] | Set<Hash>, back: boolean = true) {
    const route = useRoute()
    const router = useRouter()
    const hashArray = Array.isArray(hash) || hash instanceof Set ? hash : [hash]
    function isCurrentHash() {
        for (const singleHash of hashArray) {
            if (typeof singleHash === 'string') {
                if (route.hash === singleHash) return true
            } else {
                if (singleHash.test(route.hash)) return true
            }
        }
        return false
    }
    const hashRef = computed({
        get() {
            return isCurrentHash()
        },
        set(value) {
            if (
                value &&
                !isCurrentHash()
            ) {
                /**
                 * If there are RegExp only, set the value should be invalid.
                 * If find any string, push the string to router.
                 */
                for (const singleHash of hashArray) {
                    if (typeof singleHash === 'string') {
                        router.push({ hash: singleHash })
                        return
                    }
                }
            } else {
                if (back) {
                    router.back()
                } else {
                    router.push({ hash: '' })
                }
            }
        }
    })
    return hashRef
}

export type Hash = string | RegExp