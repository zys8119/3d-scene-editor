import { inject, computed } from 'vue';
import {
    menuInjectionKey,
    submenuInjectionKey,
    menuItemGroupInjectionKey,
} from './context';
const ICON_MARGIN_RIGHT = 8;
export function useMenuChild(props) {
    const NMenu = inject(menuInjectionKey);
    const { props: menuProps, mergedCollapsedRef } = NMenu;
    const NSubmenu = inject(submenuInjectionKey, null);
    const NMenuOptionGroup = inject(menuItemGroupInjectionKey, null);
    const horizontalRef = computed(() => {
        return menuProps.mode === 'horizontal';
    });
    const dropdownPlacementRef = computed(() => {
        if (horizontalRef.value) {
            return menuProps.dropdownPlacement;
        }
        if ('tmNodes' in props) return 'right-start';
        return 'right';
    });
    const maxIconSizeRef = computed(() => {
        var _a;
        return Math.max(
            (_a = menuProps.collapsedIconSize) !== null && _a !== void 0
                ? _a
                : menuProps.iconSize,
            menuProps.iconSize
        );
    });
    const activeIconSizeRef = computed(() => {
        var _a;
        if (!horizontalRef.value && props.root && mergedCollapsedRef.value) {
            return (_a = menuProps.collapsedIconSize) !== null && _a !== void 0
                ? _a
                : menuProps.iconSize;
        } else {
            return menuProps.iconSize;
        }
    });
    const paddingLeftRef = computed(() => {
        if (horizontalRef.value) return void 0;
        const { collapsedWidth, indent, rootIndent } = menuProps;
        const { root, isGroup } = props;
        const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
        if (root) {
            if (mergedCollapsedRef.value) {
                return collapsedWidth / 2 - maxIconSizeRef.value / 2;
            }
            return mergedRootIndent;
        }
        if (NMenuOptionGroup) {
            return indent / 2 + NMenuOptionGroup.paddingLeftRef.value;
        }
        if (NSubmenu) {
            return (
                (isGroup ? indent / 2 : indent) + NSubmenu.paddingLeftRef.value
            );
        }
        return void 0;
    });
    const iconMarginRightRef = computed(() => {
        const { collapsedWidth, indent, rootIndent } = menuProps;
        const { value: maxIconSize } = maxIconSizeRef;
        const { root } = props;
        if (horizontalRef.value) return ICON_MARGIN_RIGHT;
        if (!root) return ICON_MARGIN_RIGHT;
        if (!mergedCollapsedRef.value) return ICON_MARGIN_RIGHT;
        const mergedRootIndent = rootIndent === void 0 ? indent : rootIndent;
        return (
            mergedRootIndent +
            maxIconSize +
            ICON_MARGIN_RIGHT -
            (collapsedWidth + maxIconSize) / 2
        );
    });
    return {
        dropdownPlacement: dropdownPlacementRef,
        activeIconSize: activeIconSizeRef,
        maxIconSize: maxIconSizeRef,
        paddingLeft: paddingLeftRef,
        iconMarginRight: iconMarginRightRef,
        NMenu,
        NSubmenu,
    };
}
