export interface BaseWaveRef {
    play: () => void;
}
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
    },
    {
        active: globalThis.Ref<boolean>;
        selfRef: globalThis.Ref<HTMLElement | null>;
        play(): void;
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
        }>
    >,
    {},
    {}
>;
export default _default;
