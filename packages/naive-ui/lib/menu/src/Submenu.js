var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.NSubmenu = exports.submenuProps = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const _internal_1 = require('../../_internal');
const dropdown_1 = require('../../dropdown');
const MenuOptionContent_1 = __importDefault(require('./MenuOptionContent'));
const utils_1 = require('./utils');
const use_menu_child_1 = require('./use-menu-child');
const use_menu_child_props_1 = require('./use-menu-child-props');
const context_1 = require('./context');
exports.submenuProps = Object.assign(
    Object.assign({}, use_menu_child_props_1.useMenuChildProps),
    {
        rawNodes: {
            type: Array,
            default: () => [],
        },
        tmNodes: {
            type: Array,
            default: () => [],
        },
        tmNode: {
            type: Object,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        icon: Function,
        onClick: Function,
    }
);
exports.NSubmenu = (0, vue_1.defineComponent)({
    name: 'Submenu',
    props: exports.submenuProps,
    setup(props) {
        const MenuChild = (0, use_menu_child_1.useMenuChild)(props);
        const { NMenu, NSubmenu } = MenuChild;
        const { props: menuProps, mergedCollapsedRef, mergedThemeRef } = NMenu;
        const mergedDisabledRef = (0, vue_1.computed)(() => {
            const { disabled } = props;
            if (
                NSubmenu === null || NSubmenu === void 0
                    ? void 0
                    : NSubmenu.mergedDisabledRef.value
            )
                return true;
            if (menuProps.disabled) return true;
            return disabled;
        });
        const dropdownShowRef = (0, vue_1.ref)(false);
        (0, vue_1.provide)(context_1.submenuInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft,
            mergedDisabledRef,
        });
        (0, vue_1.provide)(context_1.menuItemGroupInjectionKey, null);
        function doClick() {
            const { onClick } = props;
            if (onClick) onClick();
        }
        function handleClick() {
            if (!mergedDisabledRef.value) {
                if (!mergedCollapsedRef.value) {
                    NMenu.toggleExpand(props.internalKey);
                }
                doClick();
            }
        }
        function handlePopoverShowChange(value) {
            dropdownShowRef.value = value;
        }
        return {
            menuProps,
            mergedTheme: mergedThemeRef,
            doSelect: NMenu.doSelect,
            inverted: NMenu.invertedRef,
            isHorizontal: NMenu.isHorizontalRef,
            mergedClsPrefix: NMenu.mergedClsPrefixRef,
            maxIconSize: MenuChild.maxIconSize,
            activeIconSize: MenuChild.activeIconSize,
            iconMarginRight: MenuChild.iconMarginRight,
            dropdownPlacement: MenuChild.dropdownPlacement,
            dropdownShow: dropdownShowRef,
            paddingLeft: MenuChild.paddingLeft,
            mergedDisabled: mergedDisabledRef,
            mergedValue: NMenu.mergedValueRef,
            childActive: (0, vooks_1.useMemo)(() => {
                return NMenu.activePathRef.value.includes(props.internalKey);
            }),
            collapsed: (0, vue_1.computed)(() => {
                if (menuProps.mode === 'horizontal') return false;
                if (mergedCollapsedRef.value) {
                    return true;
                }
                return !NMenu.mergedExpandedKeysRef.value.includes(
                    props.internalKey
                );
            }),
            dropdownEnabled: (0, vue_1.computed)(() => {
                return (
                    !mergedDisabledRef.value &&
                    (menuProps.mode === 'horizontal' ||
                        mergedCollapsedRef.value)
                );
            }),
            handlePopoverShowChange,
            handleClick,
        };
    },
    render() {
        var _a;
        const {
            mergedClsPrefix,
            menuProps: { renderIcon, renderLabel },
        } = this;
        const createSubmenuItem = () => {
            const {
                isHorizontal,
                paddingLeft,
                collapsed,
                mergedDisabled,
                maxIconSize,
                activeIconSize,
                title,
                childActive,
                icon,
                handleClick,
                menuProps: { nodeProps },
                dropdownShow,
                iconMarginRight,
                tmNode,
                mergedClsPrefix: mergedClsPrefix2,
            } = this;
            const attrs =
                nodeProps === null || nodeProps === void 0
                    ? void 0
                    : nodeProps(tmNode.rawNode);
            return (0, vue_1.h)(
                'div',
                Object.assign({}, attrs, {
                    class: [
                        `${mergedClsPrefix2}-menu-item`,
                        attrs === null || attrs === void 0
                            ? void 0
                            : attrs.class,
                    ],
                    role: 'menuitem',
                }),
                (0, vue_1.h)(MenuOptionContent_1.default, {
                    tmNode,
                    paddingLeft,
                    collapsed,
                    disabled: mergedDisabled,
                    iconMarginRight,
                    maxIconSize,
                    activeIconSize,
                    title,
                    extra: this.extra,
                    showArrow: !isHorizontal,
                    childActive,
                    clsPrefix: mergedClsPrefix2,
                    icon,
                    hover: dropdownShow,
                    onClick: handleClick,
                })
            );
        };
        const createSubmenuChildren = () => {
            return (0, vue_1.h)(_internal_1.NFadeInExpandTransition, null, {
                default: () => {
                    const { tmNodes, collapsed } = this;
                    return !collapsed
                        ? (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-submenu-children`,
                                  role: 'menu',
                              },
                              tmNodes.map((item) =>
                                  (0, utils_1.itemRenderer)(
                                      item,
                                      this.menuProps
                                  )
                              )
                          )
                        : null;
                },
            });
        };
        return this.root
            ? (0, vue_1.h)(
                  dropdown_1.NDropdown,
                  Object.assign(
                      { size: 'large', trigger: 'hover' },
                      (_a = this.menuProps) === null || _a === void 0
                          ? void 0
                          : _a.dropdownProps,
                      {
                          themeOverrides:
                              this.mergedTheme.peerOverrides.Dropdown,
                          theme: this.mergedTheme.peers.Dropdown,
                          builtinThemeOverrides: {
                              fontSizeLarge: '14px',
                              optionIconSizeLarge: '18px',
                          },
                          value: this.mergedValue,
                          disabled: !this.dropdownEnabled,
                          placement: this.dropdownPlacement,
                          keyField: this.menuProps.keyField,
                          labelField: this.menuProps.labelField,
                          childrenField: this.menuProps.childrenField,
                          onUpdateShow: this.handlePopoverShowChange,
                          options: this.rawNodes,
                          onSelect: this.doSelect,
                          inverted: this.inverted,
                          renderIcon,
                          renderLabel,
                      }
                  ),
                  {
                      default: () =>
                          (0, vue_1.h)(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-submenu`,
                                  role: 'menuitem',
                                  'aria-expanded': !this.collapsed,
                              },
                              createSubmenuItem(),
                              this.isHorizontal ? null : createSubmenuChildren()
                          ),
                  }
              )
            : (0, vue_1.h)(
                  'div',
                  {
                      class: `${mergedClsPrefix}-submenu`,
                      role: 'menuitem',
                      'aria-expanded': !this.collapsed,
                  },
                  createSubmenuItem(),
                  createSubmenuChildren()
              );
    },
});
