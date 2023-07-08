Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const List_1 = require('./List');
const use_drag_drop_1 = require('../../_mixins/use-drag-drop');
exports.default = (0, vue_1.defineComponent)({
    name: 'ListItem',
    props: Object.assign(Object.assign({}, use_drag_drop_1.useDragDrop.props), {
        onClick: [Function, Array],
    }),
    setup(props) {
        const listInjection = (0, vue_1.inject)(List_1.listInjectionKey, null);
        if (!listInjection) {
            (0, _utils_1.throwError)(
                'list-item',
                '`n-list-item` must be placed in `n-list`.'
            );
        }
        return {
            dragProps: (0, use_drag_drop_1.useDragDrop)(props),
            showDivider: listInjection.showDividerRef,
            mergedClsPrefix: listInjection.mergedClsPrefixRef,
        };
    },
    render() {
        const { $slots, mergedClsPrefix } = this;
        return (0, vue_1.h)(
            'li',
            Object.assign({}, this.dragProps, {
                class: `${mergedClsPrefix}-list-item`,
                onClick: (e) => this.$emit('click', e),
            }),
            $slots.prefix
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__prefix` },
                      $slots.prefix()
                  )
                : null,
            $slots.default
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__main` },
                      $slots
                  )
                : null,
            $slots.suffix
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-list-item__suffix` },
                      $slots.suffix()
                  )
                : null,
            this.showDivider &&
                (0, vue_1.h)('div', {
                    class: `${mergedClsPrefix}-list-item__divider`,
                })
        );
    },
});
