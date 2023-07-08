import type { ExtractPublicPropTypes } from '../../_utils';
export declare const tabProps: {
    readonly label: globalThis.PropType<
        | string
        | number
        | globalThis.VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                  [key: string]: any;
              }
          >
        | (() => import('vue').VNodeChild)
    >;
    readonly name: {
        readonly type: globalThis.PropType<string | number>;
        readonly required: true;
    };
    readonly tab: globalThis.PropType<
        | string
        | number
        | globalThis.VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                  [key: string]: any;
              }
          >
        | (() => import('vue').VNodeChild)
    >;
    readonly disabled: BooleanConstructor;
    readonly closable: {
        readonly type: globalThis.PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: globalThis.PropType<import('vue').HTMLAttributes>;
    readonly internalLeftPadded: BooleanConstructor;
    readonly internalAddable: BooleanConstructor;
    readonly internalCreatedByPane: BooleanConstructor;
};
export type TabProps = ExtractPublicPropTypes<typeof tabProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly label: globalThis.PropType<
            | string
            | number
            | globalThis.VNode<
                  import('vue').RendererNode,
                  import('vue').RendererElement,
                  {
                      [key: string]: any;
                  }
              >
            | (() => import('vue').VNodeChild)
        >;
        readonly name: {
            readonly type: globalThis.PropType<string | number>;
            readonly required: true;
        };
        readonly tab: globalThis.PropType<
            | string
            | number
            | globalThis.VNode<
                  import('vue').RendererNode,
                  import('vue').RendererElement,
                  {
                      [key: string]: any;
                  }
              >
            | (() => import('vue').VNodeChild)
        >;
        readonly disabled: BooleanConstructor;
        readonly closable: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly tabProps: globalThis.PropType<import('vue').HTMLAttributes>;
        readonly internalLeftPadded: BooleanConstructor;
        readonly internalAddable: BooleanConstructor;
        readonly internalCreatedByPane: BooleanConstructor;
    },
    {
        trigger: globalThis.Ref<'click' | 'hover'>;
        mergedClosable: globalThis.ComputedRef<boolean>;
        style: globalThis.Ref<string | import('vue').CSSProperties | undefined>;
        clsPrefix: globalThis.Ref<string>;
        value: globalThis.Ref<string | number | null>;
        type: globalThis.Ref<import('./interface').TabsType>;
        handleClose(e: MouseEvent): void;
        activateTab(): void;
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
            readonly label: globalThis.PropType<
                | string
                | number
                | globalThis.VNode<
                      import('vue').RendererNode,
                      import('vue').RendererElement,
                      {
                          [key: string]: any;
                      }
                  >
                | (() => import('vue').VNodeChild)
            >;
            readonly name: {
                readonly type: globalThis.PropType<string | number>;
                readonly required: true;
            };
            readonly tab: globalThis.PropType<
                | string
                | number
                | globalThis.VNode<
                      import('vue').RendererNode,
                      import('vue').RendererElement,
                      {
                          [key: string]: any;
                      }
                  >
                | (() => import('vue').VNodeChild)
            >;
            readonly disabled: BooleanConstructor;
            readonly closable: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly tabProps: globalThis.PropType<
                import('vue').HTMLAttributes
            >;
            readonly internalLeftPadded: BooleanConstructor;
            readonly internalAddable: BooleanConstructor;
            readonly internalCreatedByPane: BooleanConstructor;
        }>
    >,
    {
        readonly disabled: boolean;
        readonly closable: boolean | undefined;
        readonly internalLeftPadded: boolean;
        readonly internalAddable: boolean;
        readonly internalCreatedByPane: boolean;
    },
    {}
>;
export default _default;
