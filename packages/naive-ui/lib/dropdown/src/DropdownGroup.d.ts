import { PropType } from 'vue';
import { TreeNode } from 'treemate';
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
    },
    unknown,
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
        }>
    >,
    {
        parentKey: string | number | null;
    },
    {}
>;
export default _default;
