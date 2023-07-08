import { VNode } from 'vue';
import type { TreeNode } from 'treemate';
import {
    MenuOption,
    MenuGroupOption,
    MenuIgnoredOption,
    MenuMixedOption,
} from './interface';
import type { MenuSetupProps } from './Menu';
export declare function isIgnoredNode(
    rawNode: MenuMixedOption
): rawNode is MenuIgnoredOption;
export declare function isDividerNode(
    rawNode: MenuMixedOption
): rawNode is MenuIgnoredOption;
export declare function itemRenderer(
    tmNode: TreeNode<MenuOption, MenuGroupOption, MenuIgnoredOption>,
    menuProps: MenuSetupProps
): VNode | null;
