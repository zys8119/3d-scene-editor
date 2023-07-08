import { PropType, ComponentPublicInstance } from 'vue';
import { TmNode } from './interface';
declare const TreeNode: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        tmNode: {
            type: PropType<TmNode>;
            required: true;
        };
    },
    {
        showDropMark: globalThis.ComputedRef<boolean | undefined>;
        showDropMarkAsParent: globalThis.ComputedRef<boolean>;
        pending: globalThis.ComputedRef<boolean>;
        loading: globalThis.ComputedRef<boolean>;
        highlight: globalThis.ComputedRef<boolean | undefined>;
        checked: globalThis.ComputedRef<boolean>;
        indeterminate: globalThis.ComputedRef<boolean>;
        selected: globalThis.ComputedRef<boolean>;
        expanded: globalThis.ComputedRef<boolean>;
        disabled: globalThis.ComputedRef<boolean>;
        checkable: globalThis.ComputedRef<boolean>;
        mergedCheckOnClick: globalThis.ComputedRef<boolean>;
        checkboxDisabled: globalThis.ComputedRef<boolean>;
        selectable: globalThis.ComputedRef<boolean>;
        expandOnClick: globalThis.Ref<boolean>;
        internalScrollable: globalThis.Ref<boolean>;
        draggable: globalThis.Ref<boolean>;
        blockLine: globalThis.Ref<boolean>;
        nodeProps: globalThis.ComputedRef<
            (import('vue').HTMLAttributes & Record<string, unknown>) | undefined
        >;
        checkboxFocusable: globalThis.Ref<boolean>;
        droppingPosition: globalThis.Ref<
            import('./interface').DropPosition | null
        >;
        droppingOffsetLevel: globalThis.Ref<number>;
        indent: globalThis.Ref<number>;
        checkboxPlacement: 'left' | 'right';
        contentInstRef: globalThis.Ref<ComponentPublicInstance<
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            false,
            import('vue').ComponentOptionsBase<
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                any,
                {},
                {},
                string,
                {}
            >,
            {},
            {}
        > | null>;
        contentElRef: {
            value: HTMLElement | null;
        };
        handleCheck: (checked: boolean) => void;
        handleDrop: (e: DragEvent) => void;
        handleDragStart: (e: DragEvent) => void;
        handleDragEnter: (e: DragEvent) => void;
        handleDragOver: (e: DragEvent) => void;
        handleDragEnd: (e: DragEvent) => void;
        handleDragLeave: (e: DragEvent) => void;
        handleLineClick: (e: MouseEvent) => void;
        handleContentClick: (e: MouseEvent) => void;
        handleSwitcherClick: () => void;
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
                type: PropType<TmNode>;
                required: true;
            };
        }>
    >,
    {},
    {}
>;
export default TreeNode;
