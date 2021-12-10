import { computed, defineComponent, inject } from 'vue'

const gridItemProps = {
    span: Number,
    rowSpan: Number,
    offset: {
        type: Number,
        default: 0
    },
    offsetRight: {
        type: Number,
        default: 0
    }
}

export default defineComponent({
    props: gridItemProps,
    setup(props, { slots }) {
        const span = computed(() => {
            const defaultSpan = inject<number>('defaultSpan')
            return props.span || defaultSpan || 1
        })
        return () => (
            <>
                {
                    props.offset ? (
                        <div class="wp-grid-item__offset" style={{
                            gridColumn: `span ${props.offset} / span ${props.offset}`
                        }} />
                    ) : ''
                }
                <div class="wp-grid-item" style={{
                    gridColumn: `span ${span.value} / span ${span.value}`,
                    gridRow: `span ${props.rowSpan || 1} / span ${props.rowSpan || 1}`
                }}>
                    { slots.default?.() }
                </div>
                {
                    props.offsetRight ? (
                        <div class="wp-grid-item__offset wp-grid-item__offset-right" style={{
                            gridColumn: `span ${props.offsetRight} / span ${props.offsetRight}`
                        }} />
                    ) : ''
                }
            </>
        )
    }
})