import { PropType, Ref } from 'vue';
import { TreeNode } from 'treemate';
import type { SelectOption } from '../../../select/src/interface';
import { RenderLabelImpl, RenderOptionImpl } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        tmNode: {
            type: PropType<TreeNode<SelectOption, SelectOption, SelectOption>>;
            required: true;
        };
    },
    {
        multiple: Ref<boolean>;
        isGrouped: globalThis.ComputedRef<boolean | null>;
        showCheckmark: Ref<boolean>;
        nodeProps: Ref<import('./interface').NodeProps | undefined>;
        isPending: globalThis.ComputedRef<boolean>;
        isSelected: globalThis.ComputedRef<boolean>;
        labelField: Ref<string>;
        renderLabel: Ref<RenderLabelImpl | undefined>;
        renderOption: Ref<RenderOptionImpl | undefined>;
        handleMouseMove: (e: MouseEvent) => void;
        handleMouseEnter: (e: MouseEvent) => void;
        handleClick: (e: MouseEvent) => void;
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
                    TreeNode<SelectOption, SelectOption, SelectOption>
                >;
                required: true;
            };
        }>
    >,
    {},
    {}
>;
export default _default;
