import { PropType } from 'vue';
import { RenderSorter, SortOrder } from '../interface';
declare const _default: import('vue').DefineComponent<
    {
        render: {
            type: PropType<RenderSorter>;
            required: true;
        };
        order: {
            type: PropType<SortOrder>;
            default: boolean;
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
            render: {
                type: PropType<RenderSorter>;
                required: true;
            };
            order: {
                type: PropType<SortOrder>;
                default: boolean;
            };
        }>
    >,
    {
        order: SortOrder;
    },
    {}
>;
export default _default;
