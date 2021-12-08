import { computed, defineComponent, PropType } from 'vue'
import './index.less'

const props = {
    vertical: {
        type: Boolean,
        default: false
    },
    wrap: {
        type: Boolean,
        default: true
    },
    size: {
        type: [String, Number, Array] as PropType<string | number | [number | string, number | string]>,
        default: 10
    },
    align: {
        type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
        default: 'start'
    },
    justify: {
        type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
        default: 'start'
    }
}

export default defineComponent({
    name: 'WpSpace',
    props,
    setup(props, context) {
        const slotElements = context.slots.default?.() || []
        /**
         * 获取统一的 size
         */
        const size = computed((): [string, string] => {
            if (typeof props.size === 'number') {
                return [`${props.size}px`, `${props.size}px`]
            } else if (typeof props.size === 'string') {
                return [props.size, props.size]
            } else {
                return props.size.map(size => {
                    return typeof size === 'number' ? `${size}px` : size
                }) as [string, string]
            }
        })
        /**
         * 抵消掉最后的 paddingBottom
         * 如果 paddingBottom 是负的，则不需要抵消
         */
        const parentMarginBottom = computed(() => {
            if (size.value[1].indexOf('-') === 0) {
                return ''
            } else {
                return `-${size.value[1]}`
            }
        })
        const getFlexOption = (option: string) => {
            if (option === 'start') return ''
            if (option === 'end') {
                return `flex-${option}`
            } else {
                return option
            }
        }
        const parentAlignItems = computed(() => getFlexOption(props.align))
        const parentJustifyContent = computed(() => getFlexOption(props.justify))
        return () => (
            <div class={{
                'wp-space': true,
                'wp-space-column': props.vertical,
                'wp-space-wrap': props.wrap
            }} style={{
                marginBottom: parentMarginBottom.value,
                alignItems: parentAlignItems.value,
                justifyContent: parentJustifyContent.value
            }}>
                {
                    slotElements.map((vNode, index) => (
                        <div class="wp-space-item" style={{
                            marginRight: index !== slotElements.length - 1 ? size.value[0] : '',
                            paddingBottom: size.value[1]
                        }}>
                            { vNode }
                        </div>
                    ))
                }
            </div>
        )
    }
})