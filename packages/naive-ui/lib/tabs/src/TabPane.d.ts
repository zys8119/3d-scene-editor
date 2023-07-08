import { PropType, VNodeChild, VNode, HTMLAttributes } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const tabPaneProps: {
    readonly tab: PropType<
        | string
        | number
        | VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                  [key: string]: any;
              }
          >
        | (() => VNodeChild)
    >;
    readonly name: {
        readonly type: PropType<string | number>;
        readonly required: true;
    };
    readonly disabled: BooleanConstructor;
    readonly displayDirective: {
        readonly type: PropType<'show' | 'if' | 'show:lazy'>;
        readonly default: 'if';
    };
    readonly closable: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly tabProps: PropType<HTMLAttributes>;
    /** @deprecated */
    readonly label: PropType<
        | string
        | number
        | VNode<
              import('vue').RendererNode,
              import('vue').RendererElement,
              {
                  [key: string]: any;
              }
          >
        | (() => VNodeChild)
    >;
};
export type TabPaneProps = ExtractPublicPropTypes<typeof tabPaneProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly tab: PropType<
            | string
            | number
            | VNode<
                  import('vue').RendererNode,
                  import('vue').RendererElement,
                  {
                      [key: string]: any;
                  }
              >
            | (() => VNodeChild)
        >;
        readonly name: {
            readonly type: PropType<string | number>;
            readonly required: true;
        };
        readonly disabled: BooleanConstructor;
        readonly displayDirective: {
            readonly type: PropType<'show' | 'if' | 'show:lazy'>;
            readonly default: 'if';
        };
        readonly closable: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly tabProps: PropType<HTMLAttributes>;
        /** @deprecated */
        readonly label: PropType<
            | string
            | number
            | VNode<
                  import('vue').RendererNode,
                  import('vue').RendererElement,
                  {
                      [key: string]: any;
                  }
              >
            | (() => VNodeChild)
        >;
    },
    {
        style: globalThis.Ref<string | import('vue').CSSProperties | undefined>;
        class: globalThis.Ref<string | undefined>;
        mergedClsPrefix: globalThis.Ref<string>;
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
            readonly tab: PropType<
                | string
                | number
                | VNode<
                      import('vue').RendererNode,
                      import('vue').RendererElement,
                      {
                          [key: string]: any;
                      }
                  >
                | (() => VNodeChild)
            >;
            readonly name: {
                readonly type: PropType<string | number>;
                readonly required: true;
            };
            readonly disabled: BooleanConstructor;
            readonly displayDirective: {
                readonly type: PropType<'show' | 'if' | 'show:lazy'>;
                readonly default: 'if';
            };
            readonly closable: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly tabProps: PropType<HTMLAttributes>;
            /** @deprecated */
            readonly label: PropType<
                | string
                | number
                | VNode<
                      import('vue').RendererNode,
                      import('vue').RendererElement,
                      {
                          [key: string]: any;
                      }
                  >
                | (() => VNodeChild)
            >;
        }>
    >,
    {
        readonly disabled: boolean;
        readonly closable: boolean | undefined;
        readonly displayDirective: 'show' | 'if' | 'show:lazy';
    },
    {}
>;
export default _default;
