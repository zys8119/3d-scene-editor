import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        source: {
            type: BooleanConstructor;
            default: boolean;
        };
        onChange: {
            type: PropType<(value: boolean) => void>;
            required: true;
        };
        title: StringConstructor;
    },
    () => JSX.Element,
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
            source: {
                type: BooleanConstructor;
                default: boolean;
            };
            onChange: {
                type: PropType<(value: boolean) => void>;
                required: true;
            };
            title: StringConstructor;
        }>
    >,
    {
        source: boolean;
    },
    {}
>;
export default _default;
