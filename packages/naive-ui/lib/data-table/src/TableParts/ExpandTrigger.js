Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const icons_1 = require('../../../_internal/icons');
const _internal_1 = require('../../../_internal');
exports.default = (0, vue_1.defineComponent)({
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
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${clsPrefix}-data-table-expand-trigger`,
                    this.expanded &&
                        `${clsPrefix}-data-table-expand-trigger--expanded`,
                ],
                onClick: this.onClick,
            },
            (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
                default: () => {
                    return this.loading
                        ? (0, vue_1.h)(_internal_1.NBaseLoading, {
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
                        : (0, vue_1.h)(
                              _internal_1.NBaseIcon,
                              { clsPrefix, key: 'base-icon' },
                              {
                                  default: () =>
                                      (0, vue_1.h)(
                                          icons_1.ChevronRightIcon,
                                          null
                                      ),
                              }
                          );
                },
            })
        );
    },
});
