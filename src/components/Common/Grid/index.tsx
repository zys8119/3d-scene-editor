import { computed, defineComponent, PropType, provide } from 'vue'
import './index.less'

const gridProps = {
    gap: {
        type: [Number, Array] as PropType<number | string | [number | string, number | string]>,
        default: 0
    },
    cols: {
        type: Number,
        default: 24
    },
    defaultSpan: {
        type: Number,
        default: 1
    }
}

export default defineComponent({
    name: 'WpGrid',
    props: gridProps,
    setup(props, { slots }) {
        /**
         * 计算 gap，默认单位 px
         */
        const gapMap = computed<[string, string]>(() => {
            if (typeof props.gap === 'number') {
                return [`${props.gap}px`, `${props.gap}px`]
            } else if (typeof props.gap === 'string') {
                return [props.gap, props.gap]
            } else {
                return props.gap.map(gap => {
                    gap = typeof gap === 'number' ? `${gap}px` : gap
                    return gap
                }) as [string, string]
            }
        })
        /**
         * provide 给子 gridItem defaultSpan
         */
        provide('defaultSpan', props.defaultSpan || 1)
        return () => (
            <div class="wp-grid" style={{
                gridGap: gapMap.value.join(' '),
                gridTemplateColumns: `repeat(${props.cols}, 1fr)`
            }}>
                { slots.default?.() }
            </div>
        )
    }
})