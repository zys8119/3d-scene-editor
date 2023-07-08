import { h, defineComponent } from 'vue';
import { NBaseIcon } from '../../_internal';
import { ChevronRightIcon } from '../../_internal/icons';
export default defineComponent({
    name: 'LayoutToggleButton',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        onClick: Function,
    },
    render() {
        const { clsPrefix } = this;
        return h(
            'div',
            {
                class: `${clsPrefix}-layout-toggle-button`,
                onClick: this.onClick,
            },
            h(
                NBaseIcon,
                { clsPrefix },
                {
                    default: () => h(ChevronRightIcon, null),
                }
            )
        );
    },
});
