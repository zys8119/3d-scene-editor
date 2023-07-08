Object.defineProperty(exports, '__esModule', { value: true });
exports.NMenuOptionGroup = exports.menuItemGroupProps = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const use_menu_child_1 = require('./use-menu-child');
const use_menu_child_props_1 = require('./use-menu-child-props');
const utils_1 = require('./utils');
const context_1 = require('./context');
exports.menuItemGroupProps = Object.assign(
    Object.assign({}, use_menu_child_props_1.useMenuChildProps),
    {
        tmNode: {
            type: Object,
            required: true,
        },
        tmNodes: {
            type: Array,
            required: true,
        },
    }
);
exports.NMenuOptionGroup = (0, vue_1.defineComponent)({
    name: 'MenuOptionGroup',
    props: exports.menuItemGroupProps,
    setup(props) {
        (0, vue_1.provide)(context_1.submenuInjectionKey, null);
        const MenuChild = (0, use_menu_child_1.useMenuChild)(props);
        (0, vue_1.provide)(context_1.menuItemGroupInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft,
        });
        const { mergedClsPrefixRef, props: menuProps } = (0, vue_1.inject)(
            context_1.menuInjectionKey
        );
        return function () {
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const paddingLeft = MenuChild.paddingLeft.value;
            const { nodeProps } = menuProps;
            const attrs =
                nodeProps === null || nodeProps === void 0
                    ? void 0
                    : nodeProps(props.tmNode.rawNode);
            return (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-menu-item-group`, role: 'group' },
                (0, vue_1.h)(
                    'div',
                    Object.assign({}, attrs, {
                        class: [
                            `${mergedClsPrefix}-menu-item-group-title`,
                            attrs === null || attrs === void 0
                                ? void 0
                                : attrs.class,
                        ],
                        style: [
                            (attrs === null || attrs === void 0
                                ? void 0
                                : attrs.style) || '',
                            paddingLeft !== void 0
                                ? `padding-left: ${paddingLeft}px;`
                                : '',
                        ],
                    }),
                    (0, _utils_1.render)(props.title),
                    props.extra
                        ? (0, vue_1.h)(
                              vue_1.Fragment,
                              null,
                              ' ',
                              (0, _utils_1.render)(props.extra)
                          )
                        : null
                ),
                (0, vue_1.h)(
                    'div',
                    null,
                    props.tmNodes.map((tmNode) =>
                        (0, utils_1.itemRenderer)(tmNode, menuProps)
                    )
                )
            );
        };
    },
});
