import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        displayDirective: {
            type: PropType<'show' | 'if'>;
            required: true;
        };
        show: BooleanConstructor;
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
    },
    {
        onceTrue: Readonly<globalThis.Ref<boolean>>;
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
            displayDirective: {
                type: PropType<'show' | 'if'>;
                required: true;
            };
            show: BooleanConstructor;
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
        }>
    >,
    {
        show: boolean;
    },
    {}
>;
export default _default;
