Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const icons_1 = require('../../_internal/icons');
const _internal_1 = require('../../_internal');
const interface_1 = require('./interface');
exports.default = (0, vue_1.defineComponent)({
    name: 'NTreeSwitcher',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        expanded: Boolean,
        selected: Boolean,
        hide: Boolean,
        loading: Boolean,
        onClick: Function,
    },
    setup(props) {
        const { renderSwitcherIconRef } = (0, vue_1.inject)(
            interface_1.treeInjectionKey,
            null
        );
        return () => {
            const { clsPrefix } = props;
            return (0, vue_1.h)(
                'span',
                {
                    'data-switcher': true,
                    class: [
                        `${clsPrefix}-tree-node-switcher`,
                        props.expanded &&
                            `${clsPrefix}-tree-node-switcher--expanded`,
                        props.hide && `${clsPrefix}-tree-node-switcher--hide`,
                    ],
                    onClick: props.onClick,
                },
                (0, vue_1.h)(
                    'div',
                    { class: `${clsPrefix}-tree-node-switcher__icon` },
                    (0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
                        default: () => {
                            if (props.loading) {
                                return (0, vue_1.h)(_internal_1.NBaseLoading, {
                                    clsPrefix,
                                    key: 'loading',
                                    radius: 85,
                                    strokeWidth: 20,
                                });
                            }
                            const { value: renderSwitcherIcon } =
                                renderSwitcherIconRef;
                            return renderSwitcherIcon
                                ? renderSwitcherIcon({
                                      expanded: props.expanded,
                                      selected: props.selected,
                                  })
                                : (0, vue_1.h)(
                                      _internal_1.NBaseIcon,
                                      { clsPrefix, key: 'switcher' },
                                      {
                                          default: () =>
                                              (0, vue_1.h)(
                                                  icons_1.SwitcherIcon,
                                                  null
                                              ),
                                      }
                                  );
                        },
                    })
                )
            );
        };
    },
});
