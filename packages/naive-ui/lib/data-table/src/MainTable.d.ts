declare const _default: import('vue').DefineComponent<
    {},
    {
        getHeaderElement: () => HTMLElement | null;
        getBodyElement: () => HTMLElement | null;
        scrollTo: import('../../scrollbar/src/Scrollbar').ScrollTo;
        maxHeight: globalThis.Ref<string | number | undefined>;
        mergedClsPrefix: globalThis.Ref<string>;
        selfElRef: globalThis.Ref<HTMLElement | null>;
        headerInstRef: globalThis.Ref<{
            $el: HTMLElement | null;
        } | null>;
        bodyInstRef: globalThis.Ref<{
            getScrollContainer: () => HTMLElement | null;
            scrollTo: import('../../scrollbar/src/Scrollbar').ScrollTo;
        } | null>;
        bodyStyle: globalThis.ComputedRef<{
            maxHeight: string | undefined;
            minHeight: string | undefined;
        }>;
        flexHeight: globalThis.Ref<boolean>;
        handleBodyResize: (entry: ResizeObserverEntry) => void;
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
