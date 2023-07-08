import { PropType, Ref, CSSProperties } from 'vue';
import { TreeNode } from 'treemate';
export interface NDropdownMenuInjection {
    showIconRef: Ref<boolean>;
    hasSubmenuRef: Ref<boolean>;
}
declare const _default: import('vue').DefineComponent<
    {
        scrollable: BooleanConstructor;
        showArrow: BooleanConstructor;
        arrowStyle: PropType<string | CSSProperties>;
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        tmNodes: {
            type: PropType<
                TreeNode<
                    import('../..').MenuOption,
                    import('../..').MenuGroupOption,
                    import('../../menu/src/interface').MenuIgnoredOption
                >[]
            >;
            default: () => never[];
        };
        parentKey: {
            type: (StringConstructor | NumberConstructor)[];
            default: null;
        };
    },
    {
        bodyRef: Ref<HTMLElement | null>;
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
            scrollable: BooleanConstructor;
            showArrow: BooleanConstructor;
            arrowStyle: PropType<string | CSSProperties>;
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            tmNodes: {
                type: PropType<
                    TreeNode<
                        import('../..').MenuOption,
                        import('../..').MenuGroupOption,
                        import('../../menu/src/interface').MenuIgnoredOption
                    >[]
                >;
                default: () => never[];
            };
            parentKey: {
                type: (StringConstructor | NumberConstructor)[];
                default: null;
            };
        }>
    >,
    {
        scrollable: boolean;
        showArrow: boolean;
        parentKey: string | number;
        tmNodes: TreeNode<
            import('../..').MenuOption,
            import('../..').MenuGroupOption,
            import('../../menu/src/interface').MenuIgnoredOption
        >[];
    },
    {}
>;
export default _default;
