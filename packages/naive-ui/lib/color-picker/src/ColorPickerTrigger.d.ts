import { HSLA } from 'seemly';
import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        value: {
            type: PropType<string | null>;
            default: null;
        };
        hsla: {
            type: PropType<HSLA | null>;
            default: null;
        };
        disabled: BooleanConstructor;
        onClick: PropType<() => void>;
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
                type: PropType<string | null>;
                default: null;
            };
            hsla: {
                type: PropType<HSLA | null>;
                default: null;
            };
            disabled: BooleanConstructor;
            onClick: PropType<() => void>;
        }>
    >,
    {
        value: string | null;
        disabled: boolean;
        hsla: HSLA | null;
    },
    {}
>;
export default _default;
