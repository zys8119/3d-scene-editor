import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        size: {
            type: PropType<'small' | 'medium' | 'large'>;
            required: true;
        };
        source: BooleanConstructor;
        onCheckedAll: PropType<() => void>;
        onClearAll: PropType<() => void>;
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
            size: {
                type: PropType<'small' | 'medium' | 'large'>;
                required: true;
            };
            source: BooleanConstructor;
            onCheckedAll: PropType<() => void>;
            onClearAll: PropType<() => void>;
            title: StringConstructor;
        }>
    >,
    {
        source: boolean;
    },
    {}
>;
export default _default;
