declare const _default: import('vue').DefineComponent<
    {
        line: {
            type: StringConstructor;
            default: string;
        };
    },
    {
        highlight: globalThis.Ref<boolean>;
        selfRef: globalThis.Ref<HTMLElement | null>;
        maybeTrimmedLines: globalThis.ComputedRef<string>;
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
            line: {
                type: StringConstructor;
                default: string;
            };
        }>
    >,
    {
        line: string;
    },
    {}
>;
export default _default;
