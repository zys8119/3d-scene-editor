import { h, defineComponent, toRef } from 'vue';
import { useStyle } from '../../../_mixins';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'BaseIcon',
    props: {
        role: String,
        ariaLabel: String,
        ariaDisabled: {
            type: Boolean,
            default: void 0,
        },
        ariaHidden: {
            type: Boolean,
            default: void 0,
        },
        clsPrefix: {
            type: String,
            required: true,
        },
        onClick: Function,
        onMousedown: Function,
        onMouseup: Function,
    },
    setup(props) {
        useStyle('-base-icon', style, toRef(props, 'clsPrefix'));
    },
    render() {
        return h(
            'i',
            {
                class: `${this.clsPrefix}-base-icon`,
                onClick: this.onClick,
                onMousedown: this.onMousedown,
                onMouseup: this.onMouseup,
                role: this.role,
                'aria-label': this.ariaLabel,
                'aria-hidden': this.ariaHidden,
                'aria-disabled': this.ariaDisabled,
            },
            this.$slots
        );
    },
});
