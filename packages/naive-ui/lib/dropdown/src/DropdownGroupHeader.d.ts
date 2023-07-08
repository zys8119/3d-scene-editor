declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        tmNode: {
            type: ObjectConstructor;
            required: true;
        };
    },
    {
        labelField: globalThis.Ref<string>;
        showIcon: globalThis.Ref<boolean>;
        hasSubmenu: globalThis.Ref<boolean>;
        renderLabel: globalThis.Ref<
            import('./interface').RenderLabelImpl | undefined
        >;
        nodeProps: globalThis.Ref<import('../..').MenuNodeProps | undefined>;
        renderOption: globalThis.Ref<
            import('./interface').RenderOptionImpl | undefined
        >;
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
            tmNode: {
                type: ObjectConstructor;
                required: true;
            };
        }>
    >,
    {},
    {}
>;
export default _default;
