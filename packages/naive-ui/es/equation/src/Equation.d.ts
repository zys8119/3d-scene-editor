import { PropType } from 'vue';
import { KatexOptions } from 'katex';
export declare const equationProps: {
    readonly value: StringConstructor;
    readonly katex: PropType<typeof import('katex').default>;
    readonly katexOptions: PropType<KatexOptions>;
};
export declare const Equation: import('vue').DefineComponent<
    {
        readonly value: StringConstructor;
        readonly katex: PropType<typeof import('katex').default>;
        readonly katexOptions: PropType<KatexOptions>;
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
            readonly value: StringConstructor;
            readonly katex: PropType<typeof import('katex').default>;
            readonly katexOptions: PropType<KatexOptions>;
        }>
    >,
    {},
    {}
>;
