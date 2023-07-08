import { VNodeChild, PropType } from 'vue';
import type { MessageType, MessageRenderMessage } from './types';
declare const _default: import('vue').DefineComponent<
    {
        render: PropType<MessageRenderMessage>;
        icon: PropType<() => VNodeChild>;
        type: {
            readonly type: PropType<MessageType>;
            readonly default: 'info';
        };
        content: PropType<string | number | (() => VNodeChild)>;
        showIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        closable: BooleanConstructor;
        keepAliveOnHover: BooleanConstructor;
        onClose: PropType<() => void>;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
    },
    {
        mergedClsPrefix: globalThis.Ref<string>;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        messageProviderProps: import('./MessageProvider').MessageProviderSetupProps;
        handleClose(): void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-margin': string;
                  '--n-padding': string;
                  '--n-max-width': string;
                  '--n-font-size': string;
                  '--n-icon-margin': string;
                  '--n-icon-size': string;
                  '--n-close-icon-size': string;
                  '--n-close-border-radius': string;
                  '--n-close-size': string;
                  '--n-close-margin': string;
                  '--n-text-color': string;
                  '--n-color': string;
                  '--n-box-shadow': string;
                  '--n-icon-color-info': string;
                  '--n-icon-color-success': string;
                  '--n-icon-color-warning': string;
                  '--n-icon-color-error': string;
                  '--n-icon-color-loading': string;
                  '--n-close-color-hover': string;
                  '--n-close-color-pressed': string;
                  '--n-close-icon-color': string;
                  '--n-close-icon-color-pressed': string;
                  '--n-close-icon-color-hover': string;
                  '--n-line-height': string;
                  '--n-border-radius': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        placement:
            | 'bottom'
            | 'top'
            | 'top-left'
            | 'top-right'
            | 'bottom-left'
            | 'bottom-right';
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
            render: PropType<MessageRenderMessage>;
            icon: PropType<() => VNodeChild>;
            type: {
                readonly type: PropType<MessageType>;
                readonly default: 'info';
            };
            content: PropType<string | number | (() => VNodeChild)>;
            showIcon: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            closable: BooleanConstructor;
            keepAliveOnHover: BooleanConstructor;
            onClose: PropType<() => void>;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
        }>
    >,
    {
        type: MessageType;
        showIcon: boolean;
        closable: boolean;
        keepAliveOnHover: boolean;
    },
    {}
>;
export default _default;
