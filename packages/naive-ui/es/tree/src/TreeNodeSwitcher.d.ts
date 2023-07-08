import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        expanded: BooleanConstructor;
        selected: BooleanConstructor;
        hide: BooleanConstructor;
        loading: BooleanConstructor;
        onClick: PropType<(e: MouseEvent) => void>;
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
            expanded: BooleanConstructor;
            selected: BooleanConstructor;
            hide: BooleanConstructor;
            loading: BooleanConstructor;
            onClick: PropType<(e: MouseEvent) => void>;
        }>
    >,
    {
        hide: boolean;
        expanded: boolean;
        selected: boolean;
        loading: boolean;
    },
    {}
>;
export default _default;
