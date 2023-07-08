import { PropType } from 'vue';
export declare const NInjectionExtractor: import('vue').DefineComponent<
    {
        onSetup: PropType<() => void>;
    },
    () =>
        | globalThis.VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                  [key: string]: any;
              }
          >[]
        | undefined,
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
            onSetup: PropType<() => void>;
        }>
    >,
    {},
    {}
>;
