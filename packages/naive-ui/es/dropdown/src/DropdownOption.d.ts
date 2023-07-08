import { PropType, Ref, HTMLAttributes } from 'vue';
import { FollowerPlacement } from 'vueuc';
import { TreeNode } from 'treemate';
export interface NDropdownOptionInjection {
    enteringSubmenuRef: Ref<boolean>;
}
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        tmNode: {
            type: PropType<
                TreeNode<
                    import('../..').MenuOption,
                    import('../..').MenuGroupOption,
                    import('../../menu/src/interface').MenuIgnoredOption
                >
            >;
            required: true;
        };
        parentKey: {
            type: PropType<string | number | null>;
            default: null;
        };
        placement: {
            type: PropType<FollowerPlacement>;
            default: string;
        };
        props: PropType<HTMLAttributes>;
        scrollable: BooleanConstructor;
    },
    {
        labelField: Ref<string>;
        renderLabel: Ref<import('./interface').RenderLabelImpl | undefined>;
        renderIcon: Ref<import('./interface').RenderIconImpl | undefined>;
        siblingHasIcon: Ref<boolean>;
        siblingHasSubmenu: Ref<boolean>;
        menuProps: Ref<import('./interface').DropdownMenuProps | undefined>;
        popoverBody: Ref<HTMLElement | null>;
        animated: Ref<boolean>;
        mergedShowSubmenu: globalThis.ComputedRef<boolean>;
        rawNode: globalThis.ComputedRef<
            | import('../..').MenuOption
            | import('../..').MenuGroupOption
            | import('../../menu/src/interface').MenuIgnoredOption
        >;
        hasSubmenu: globalThis.ComputedRef<boolean>;
        pending: globalThis.ComputedRef<boolean>;
        childActive: globalThis.ComputedRef<boolean>;
        active: globalThis.ComputedRef<boolean>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        renderOption: Ref<import('./interface').RenderOptionImpl | undefined>;
        nodeProps: Ref<import('../..').MenuNodeProps | undefined>;
        handleClick: () => void;
        handleMouseMove: () => void;
        handleMouseEnter: () => void;
        handleMouseLeave: (e: MouseEvent) => void;
        handleSubmenuBeforeEnter: () => void;
        handleSubmenuAfterEnter: () => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            tmNode: {
                type: PropType<
                    TreeNode<
                        import('../..').MenuOption,
                        import('../..').MenuGroupOption,
                        import('../../menu/src/interface').MenuIgnoredOption
                    >
                >;
                required: true;
            };
            parentKey: {
                type: PropType<string | number | null>;
                default: null;
            };
            placement: {
                type: PropType<FollowerPlacement>;
                default: string;
            };
            props: PropType<HTMLAttributes>;
            scrollable: BooleanConstructor;
        }>
    >,
    {
        placement: FollowerPlacement;
        scrollable: boolean;
        parentKey: string | number | null;
    },
    {}
>;
export default _default;
