import { PropType } from 'vue';
import { TagProps } from '../../tag';
declare const _default: import('vue').DefineComponent<
    {
        value: PropType<string | null | undefined>;
        tagProps: {
            type: PropType<Partial<TagProps> & Record<string, any>>;
            default: () => {};
        };
    },
    {
        valueOwn: globalThis.Ref<unknown> | undefined;
        setValue: ((value: string | null | undefined) => void) | undefined;
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
            value: PropType<string | null | undefined>;
            tagProps: {
                type: PropType<Partial<TagProps> & Record<string, any>>;
                default: () => {};
            };
        }>
    >,
    {
        tagProps: Partial<TagProps> & Record<string, any>;
    },
    {}
>;
export default _default;
