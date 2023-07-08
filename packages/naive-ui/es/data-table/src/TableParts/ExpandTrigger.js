import { h, defineComponent } from 'vue';
import { ChevronRightIcon } from '../../../_internal/icons';
import {
    NBaseIcon,
    NBaseLoading,
    NIconSwitchTransition,
} from '../../../_internal';
export default defineComponent({
    name: 'DataTableExpandTrigger',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        expanded: Boolean,
        loading: Boolean,
        onClick: {
            type: Function,
            required: true,
        },
        renderExpandIcon: {
            type: Function,
        },
    },
    render() {
        const { clsPrefix } = this;
        return h(
            'div',
            {
                class: [
                    `${clsPrefix}-data-table-expand-trigger`,
                    this.expanded &&
                        `${clsPrefix}-data-table-expand-trigger--expanded`,
                ],
                onClick: this.onClick,
            },
            h(NIconSwitchTransition, null, {
                default: () => {
                    return this.loading
                        ? h(NBaseLoading, {
                              key: 'loading',
                              clsPrefix: this.clsPrefix,
                              radius: 85,
                              strokeWidth: 15,
                              scale: 0.88,
                          })
                        : this.renderExpandIcon
                        ? this.renderExpandIcon({
                              expanded: this.expanded,
                          })
                        : h(
                              NBaseIcon,
                              { clsPrefix, key: 'base-icon' },
                              {
                                  default: () => h(ChevronRightIcon, null),
                              }
                          );
                },
            })
        );
    },
});
