import { PropType } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        duration: {
            type: NumberConstructor;
            default: number;
        };
        onAfterLeave: FunctionConstructor;
        onLeave: FunctionConstructor;
        internalKey: {
            type: StringConstructor;
            required: true;
        };
        onInternalAfterLeave: PropType<(key: string) => void>;
        onHide: FunctionConstructor;
        onAfterHide: FunctionConstructor;
        icon: PropType<() => import('vue').VNodeChild>;
        type: {
            readonly type: PropType<import('./types').MessageType>;
            readonly default: 'info';
        };
        content: PropType<string | number | (() => import('vue').VNodeChild)>;
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
        show: globalThis.Ref<boolean>;
        hide: () => void;
        handleClose: () => void;
        handleAfterLeave: () => void;
        handleMouseleave: (e: MouseEvent) => void;
        handleMouseenter: (e: MouseEvent) => void;
        deactivate: () => void;
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
            duration: {
                type: NumberConstructor;
                default: number;
            };
            onAfterLeave: FunctionConstructor;
            onLeave: FunctionConstructor;
            internalKey: {
                type: StringConstructor;
                required: true;
            };
            onInternalAfterLeave: PropType<(key: string) => void>;
            onHide: FunctionConstructor;
            onAfterHide: FunctionConstructor;
            icon: PropType<() => import('vue').VNodeChild>;
            type: {
                readonly type: PropType<import('./types').MessageType>;
                readonly default: 'info';
            };
            content: PropType<
                string | number | (() => import('vue').VNodeChild)
            >;
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
        type: import('./types').MessageType;
        duration: number;
        showIcon: boolean;
        closable: boolean;
        keepAliveOnHover: boolean;
    },
    {}
>;
export default _default;
