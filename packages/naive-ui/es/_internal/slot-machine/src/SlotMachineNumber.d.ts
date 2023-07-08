import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        value: {
            type: PropType<string | number>;
            required: true;
        };
        oldOriginalNumber: {
            type: NumberConstructor;
            default: undefined;
        };
        newOriginalNumber: {
            type: NumberConstructor;
            default: undefined;
        };
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            value: {
                type: PropType<string | number>;
                required: true;
            };
            oldOriginalNumber: {
                type: NumberConstructor;
                default: undefined;
            };
            newOriginalNumber: {
                type: NumberConstructor;
                default: undefined;
            };
        }>
    >,
    {
        oldOriginalNumber: number;
        newOriginalNumber: number;
    },
    {}
>;
export default _default;
