var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.itemRenderer = exports.isDividerNode = exports.isIgnoredNode = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const MenuOptionGroup_1 = require('./MenuOptionGroup');
const Submenu_1 = require('./Submenu');
const MenuOption_1 = require('./MenuOption');
const MenuDivider_1 = __importDefault(require('./MenuDivider'));
const groupPropKeys = (0, _utils_1.keysOf)(
    MenuOptionGroup_1.menuItemGroupProps
);
const itemPropKeys = (0, _utils_1.keysOf)(MenuOption_1.menuItemProps);
const submenuPropKeys = (0, _utils_1.keysOf)(Submenu_1.submenuProps);
function isIgnoredNode(rawNode) {
    return rawNode.type === 'divider' || rawNode.type === 'render';
}
exports.isIgnoredNode = isIgnoredNode;
function isDividerNode(rawNode) {
    return rawNode.type === 'divider';
}
exports.isDividerNode = isDividerNode;
function itemRenderer(tmNode, menuProps) {
    const { rawNode } = tmNode;
    const { show } = rawNode;
    if (show === false) {
        return null;
    }
    if (isIgnoredNode(rawNode)) {
        if (isDividerNode(rawNode)) {
            return (0, vue_1.h)(
                MenuDivider_1.default,
                Object.assign({ key: tmNode.key }, rawNode.props)
            );
        }
        return null;
    }
    const { labelField } = menuProps;
    const { key, level, isGroup } = tmNode;
    const props = Object.assign(Object.assign({}, rawNode), {
        title: rawNode.title || rawNode[labelField],
        extra: rawNode.titleExtra || rawNode.extra,
        key,
        internalKey: key,
        level,
        root: level === 0,
        isGroup,
    });
    if (tmNode.children) {
        if (tmNode.isGroup) {
            return (0, vue_1.h)(
                MenuOptionGroup_1.NMenuOptionGroup,
                (0, _utils_1.keep)(props, groupPropKeys, {
                    tmNode,
                    tmNodes: tmNode.children,
                    key,
                })
            );
        }
        return (0, vue_1.h)(
            Submenu_1.NSubmenu,
            (0, _utils_1.keep)(props, submenuPropKeys, {
                key,
                rawNodes: rawNode[menuProps.childrenField],
                tmNodes: tmNode.children,
                tmNode,
            })
        );
    } else {
        return (0, vue_1.h)(
            MenuOption_1.NMenuOption,
            (0, _utils_1.keep)(props, itemPropKeys, {
                key,
                tmNode,
            })
        );
    }
}
exports.itemRenderer = itemRenderer;
