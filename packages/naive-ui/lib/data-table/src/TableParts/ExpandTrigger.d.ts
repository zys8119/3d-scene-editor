import { PropType } from 'vue';
import { RenderExpandIcon } from '../interface';
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        expanded: BooleanConstructor;
        loading: BooleanConstructor;
        onClick: {
            type: PropType<() => void>;
            required: true;
        };
        renderExpandIcon: {
            type: PropType<RenderExpandIcon>;
        };
    },
    unknown,
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
            loading: BooleanConstructor;
            onClick: {
                type: PropType<() => void>;
                required: true;
            };
            renderExpandIcon: {
                type: PropType<RenderExpandIcon>;
            };
        }>
    >,
    {
        expanded: boolean;
        loading: boolean;
    },
    {}
>;
export default _default;
