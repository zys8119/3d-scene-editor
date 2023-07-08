import type { ExtractPublicPropTypes } from '../../../_utils';
declare const tourDotsProps: {
    total: {
        type: NumberConstructor;
        default: number;
    };
    currentIndex: {
        type: NumberConstructor;
        default: number;
    };
};
export type TourDotsProps = ExtractPublicPropTypes<typeof tourDotsProps>;
declare const _default: import('vue').DefineComponent<
    {
        total: {
            type: NumberConstructor;
            default: number;
        };
        currentIndex: {
            type: NumberConstructor;
            default: number;
        };
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        dotEls: globalThis.Ref<HTMLElement[]>;
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
            total: {
                type: NumberConstructor;
                default: number;
            };
            currentIndex: {
                type: NumberConstructor;
                default: number;
            };
        }>
    >,
    {
        total: number;
        currentIndex: number;
    },
    {}
>;
export default _default;
