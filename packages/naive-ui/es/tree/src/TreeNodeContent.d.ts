import { PropType, HTMLAttributes } from 'vue';
import { TmNode } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        disabled: BooleanConstructor;
        checked: BooleanConstructor;
        selected: BooleanConstructor;
        onClick: PropType<(e: MouseEvent) => void>;
        onDragstart: PropType<(e: DragEvent) => void>;
        tmNode: {
            type: PropType<TmNode>;
            required: true;
        };
        nodeProps: PropType<HTMLAttributes>;
    },
    {
        selfRef: globalThis.Ref<HTMLElement | null>;
        renderLabel: globalThis.Ref<
            | (({
                  option,
                  checked,
                  selected,
              }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
            | undefined
        >;
        renderPrefix: globalThis.Ref<
            | (({
                  option,
                  checked,
                  selected,
              }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
            | undefined
        >;
        renderSuffix: globalThis.Ref<
            | (({
                  option,
                  checked,
                  selected,
              }: import('./interface').TreeRenderProps) => import('vue').VNodeChild)
            | undefined
        >;
        labelField: globalThis.Ref<string>;
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
            disabled: BooleanConstructor;
            checked: BooleanConstructor;
            selected: BooleanConstructor;
            onClick: PropType<(e: MouseEvent) => void>;
            onDragstart: PropType<(e: DragEvent) => void>;
            tmNode: {
                type: PropType<TmNode>;
                required: true;
            };
            nodeProps: PropType<HTMLAttributes>;
        }>
    >,
    {
        disabled: boolean;
        checked: boolean;
        selected: boolean;
    },
    {}
>;
export default _default;
