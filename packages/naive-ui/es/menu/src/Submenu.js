import { h, ref, defineComponent, provide, computed } from 'vue';
import { useMemo } from 'vooks';
import { NFadeInExpandTransition } from '../../_internal';
import { NDropdown } from '../../dropdown';
import NMenuOptionContent from './MenuOptionContent';
import { itemRenderer } from './utils';
import { useMenuChild } from './use-menu-child';
import { useMenuChildProps } from './use-menu-child-props';
import { menuItemGroupInjectionKey, submenuInjectionKey } from './context';
export const submenuProps = Object.assign(
    Object.assign({}, useMenuChildProps),
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
export const NSubmenu = defineComponent({
    name: 'Submenu',
    props: submenuProps,
    setup(props) {
        const MenuChild = useMenuChild(props);
        const { NMenu, NSubmenu: NSubmenu2 } = MenuChild;
        const { props: menuProps, mergedCollapsedRef, mergedThemeRef } = NMenu;
        const mergedDisabledRef = computed(() => {
            const { disabled } = props;
            if (
                NSubmenu2 === null || NSubmenu2 === void 0
                    ? void 0
                    : NSubmenu2.mergedDisabledRef.value
            )
                return true;
            if (menuProps.disabled) return true;
            return disabled;
        });
        const dropdownShowRef = ref(false);
        provide(submenuInjectionKey, {
            paddingLeftRef: MenuChild.paddingLeft,
            mergedDisabledRef,
        });
        provide(menuItemGroupInjectionKey, null);
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
            childActive: useMemo(() => {
                return NMenu.activePathRef.value.includes(props.internalKey);
            }),
            collapsed: computed(() => {
                if (menuProps.mode === 'horizontal') return false;
                if (mergedCollapsedRef.value) {
                    return true;
                }
                return !NMenu.mergedExpandedKeysRef.value.includes(
                    props.internalKey
                );
            }),
            dropdownEnabled: computed(() => {
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
            return h(
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
                h(NMenuOptionContent, {
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
            return h(NFadeInExpandTransition, null, {
                default: () => {
                    const { tmNodes, collapsed } = this;
                    return !collapsed
                        ? h(
                              'div',
                              {
                                  class: `${mergedClsPrefix}-submenu-children`,
                                  role: 'menu',
                              },
                              tmNodes.map((item) =>
                                  itemRenderer(item, this.menuProps)
                              )
                          )
                        : null;
                },
            });
        };
        return this.root
            ? h(
                  NDropdown,
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
                          h(
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
            : h(
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
