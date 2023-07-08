import type { VNode } from 'vue';
export declare const isCarouselItem: (child: VNode) => boolean;
declare const _default: import('vue').DefineComponent<
    {},
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        selfElRef: globalThis.Ref<HTMLElement | undefined>;
        isPrev: globalThis.ComputedRef<boolean>;
        isNext: globalThis.ComputedRef<boolean>;
        isActive: globalThis.ComputedRef<boolean>;
        index: globalThis.ComputedRef<number>;
        style: globalThis.ComputedRef<
            string | Record<string, string | number> | undefined
        >;
        handleClick: (event: MouseEvent) => void;
    },
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<import('vue').ExtractPropTypes<{}>>,
    {},
    {}
>;
export default _default;
