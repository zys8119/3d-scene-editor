import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        appear: BooleanConstructor;
        group: BooleanConstructor;
        mode: PropType<'default' | 'in-out' | 'out-in'>;
        onLeave: FunctionConstructor;
        onAfterLeave: FunctionConstructor;
        onAfterEnter: FunctionConstructor;
        width: BooleanConstructor;
        reverse: BooleanConstructor;
    },
    () => globalThis.VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
            [key: string]: any;
        }
    >,
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
            appear: BooleanConstructor;
            group: BooleanConstructor;
            mode: PropType<'default' | 'in-out' | 'out-in'>;
            onLeave: FunctionConstructor;
            onAfterLeave: FunctionConstructor;
            onAfterEnter: FunctionConstructor;
            width: BooleanConstructor;
            reverse: BooleanConstructor;
        }>
    >,
    {
        reverse: boolean;
        width: boolean;
        appear: boolean;
        group: boolean;
    },
    {}
>;
export default _default;
