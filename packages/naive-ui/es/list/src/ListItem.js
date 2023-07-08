import { h, defineComponent, inject } from 'vue';
import { throwError } from '../../_utils';
import { listInjectionKey } from './List';
import { useDragDrop } from '../../_mixins/use-drag-drop';
export default defineComponent({
    name: 'ListItem',
    props: Object.assign(Object.assign({}, useDragDrop.props), {
        onClick: [Function, Array],
    }),
    setup(props) {
        const listInjection = inject(listInjectionKey, null);
        if (!listInjection) {
            throwError(
                'list-item',
                '`n-list-item` must be placed in `n-list`.'
            );
        }
        return {
            dragProps: useDragDrop(props),
            showDivider: listInjection.showDividerRef,
            mergedClsPrefix: listInjection.mergedClsPrefixRef,
        };
    },
    render() {
        const { $slots, mergedClsPrefix } = this;
        return h(
            'li',
            Object.assign({}, this.dragProps, {
                class: `${mergedClsPrefix}-list-item`,
                onClick: (e) => this.$emit('click', e),
            }),
            $slots.prefix
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__prefix` },
                      $slots.prefix()
                  )
                : null,
            $slots.default
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__main` },
                      $slots
                  )
                : null,
            $slots.suffix
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__suffix` },
                      $slots.suffix()
                  )
                : null,
            this.showDivider &&
                h('div', { class: `${mergedClsPrefix}-list-item__divider` })
        );
    },
});
