import type { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        onResizeStart: FunctionConstructor;
        onResize: PropType<(displacementX: number) => void>;
        onResizeEnd: FunctionConstructor;
    },
    {
        mergedClsPrefix: globalThis.Ref<string>;
        active: globalThis.Ref<boolean>;
        handleMousedown: (e: MouseEvent) => void;
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
            onResizeStart: FunctionConstructor;
            onResize: PropType<(displacementX: number) => void>;
            onResizeEnd: FunctionConstructor;
        }>
    >,
    {},
    {}
>;
export default _default;
