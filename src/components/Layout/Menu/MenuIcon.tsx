import { h, defineComponent, PropType } from 'vue'
import { ElIcon } from 'element-plus'

export default defineComponent({
    name: 'MenuIcon',
    props: {
        icon: {
            type: [Object, String, Number] as PropType<any>,
            required: true
        }
    },
    setup(props) {
        return () => h(ElIcon, null, {
            default: () => h(props.icon)
        })
    }
})