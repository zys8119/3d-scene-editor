/**
 * Keep scroll position when changing page
 */
export function useKeepScroll(
    elRef: Parameters<typeof useScroll>[0],
    options?: { x?: boolean, y?: boolean } & Parameters<typeof useScroll>[1]
) {
    let scrollTopRecord: number | undefined
    let scrollLeftRecord: number | undefined
    const { x, y } = useScroll(elRef, options)
    const optionsMap = Object.assign({ x: true, y: true }, options)
    onDeactivated(() => {
        scrollLeftRecord = x.value
        scrollTopRecord = y.value
    })
    onActivated(() => {
        const el = unref(elRef)
        if (el instanceof Document || !el) return
        el.scrollTo({
            top: optionsMap.y ? (scrollTopRecord || 0) : 0,
            left: optionsMap.x ? (scrollLeftRecord || 0) : 0
        })
    })
}