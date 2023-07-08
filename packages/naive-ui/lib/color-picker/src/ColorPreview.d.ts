import { PropType } from 'vue';
import { ColorPickerMode } from './utils';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        mode: {
            type: PropType<ColorPickerMode>;
            required: true;
        };
        color: {
            type: PropType<string | null>;
            default: null;
            validator: (value: string) => boolean;
        };
        onUpdateColor: {
            type: PropType<(value: string) => void>;
            required: true;
        };
    },
    {
        handleChange: (e: Event) => void;
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<ColorPickerMode>;
                required: true;
            };
            color: {
                type: PropType<string | null>;
                default: null;
                validator: (value: string) => boolean;
            };
            onUpdateColor: {
                type: PropType<(value: string) => void>;
                required: true;
            };
        }>
    >,
    {
        color: string | null;
    },
    {}
>;
export default _default;
