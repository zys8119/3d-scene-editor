import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        isButtonTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        disabled: {
            type: BooleanConstructor;
            default: undefined;
        };
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        round: BooleanConstructor;
        onClick: PropType<(e: MouseEvent) => void>;
        absolute: BooleanConstructor;
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
            isButtonTag: {
                type: BooleanConstructor;
                default: boolean;
            };
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            disabled: {
                type: BooleanConstructor;
                default: undefined;
            };
            focusable: {
                type: BooleanConstructor;
                default: boolean;
            };
            round: BooleanConstructor;
            onClick: PropType<(e: MouseEvent) => void>;
            absolute: BooleanConstructor;
        }>
    >,
    {
        round: boolean;
        absolute: boolean;
        disabled: boolean;
        focusable: boolean;
        isButtonTag: boolean;
    },
    {}
>;
export default _default;
