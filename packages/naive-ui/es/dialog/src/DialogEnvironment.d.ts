import { PropType, CSSProperties } from 'vue';
export declare const exposedDialogEnvProps: {
    readonly onAfterEnter: PropType<() => void>;
    readonly onAfterLeave: PropType<() => void>;
    readonly transformOrigin: PropType<'center' | 'mouse'>;
    readonly blockScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly closeOnEsc: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onEsc: PropType<() => void>;
    readonly autoFocus: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly internalStyle: PropType<string | CSSProperties>;
    readonly maskClosable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onPositiveClick: PropType<
        (e: MouseEvent) => Promise<unknown> | unknown
    >;
    readonly onNegativeClick: PropType<
        (e: MouseEvent) => Promise<unknown> | unknown
    >;
    readonly onClose: PropType<() => Promise<unknown> | unknown>;
    readonly onMaskClick: PropType<(e: MouseEvent) => void>;
    readonly icon: PropType<() => import('vue').VNodeChild>;
    readonly type: {
        readonly type: PropType<
            'default' | 'error' | 'info' | 'success' | 'warning'
        >;
        readonly default: 'default';
    };
    readonly title: PropType<string | (() => import('vue').VNodeChild)>;
    readonly closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly negativeText: StringConstructor;
    readonly positiveText: StringConstructor;
    readonly positiveButtonProps: PropType<import('../..').ButtonProps>;
    readonly negativeButtonProps: PropType<import('../..').ButtonProps>;
    readonly content: PropType<string | (() => import('vue').VNodeChild)>;
    readonly action: PropType<() => import('vue').VNodeChild>;
    readonly showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly loading: BooleanConstructor;
    readonly bordered: BooleanConstructor;
    readonly iconPlacement: PropType<import('./interface').IconPlacement>;
};
export declare const NDialogEnvironment: import('vue').DefineComponent<
    {
        internalKey: {
            type: StringConstructor;
            required: true;
        };
        to: PropType<string | HTMLElement>;
        onInternalAfterLeave: {
            type: PropType<(key: string) => void>;
            required: true;
        };
        onAfterEnter: PropType<() => void>;
        onAfterLeave: PropType<() => void>;
        transformOrigin: PropType<'center' | 'mouse'>;
        blockScroll: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        closeOnEsc: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        onEsc: PropType<() => void>;
        autoFocus: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        internalStyle: PropType<string | CSSProperties>;
        maskClosable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        onPositiveClick: PropType<
            (e: MouseEvent) => Promise<unknown> | unknown
        >;
        onNegativeClick: PropType<
            (e: MouseEvent) => Promise<unknown> | unknown
        >;
        onClose: PropType<() => Promise<unknown> | unknown>;
        onMaskClick: PropType<(e: MouseEvent) => void>;
        icon: PropType<() => import('vue').VNodeChild>;
        type: {
            readonly type: PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        title: PropType<string | (() => import('vue').VNodeChild)>;
        closable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        negativeText: StringConstructor;
        positiveText: StringConstructor;
        positiveButtonProps: PropType<import('../..').ButtonProps>;
        negativeButtonProps: PropType<import('../..').ButtonProps>;
        content: PropType<string | (() => import('vue').VNodeChild)>;
        action: PropType<() => import('vue').VNodeChild>;
        showIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        loading: BooleanConstructor;
        bordered: BooleanConstructor;
        iconPlacement: PropType<import('./interface').IconPlacement>;
    },
    {
        show: globalThis.Ref<boolean>;
        hide: () => void;
        handleUpdateShow: (value: boolean) => void;
        handleAfterLeave: () => void;
        handleCloseClick: () => void;
        handleNegativeClick: (e: MouseEvent) => void;
        handlePositiveClick: (e: MouseEvent) => void;
        handleMaskClick: (e: MouseEvent) => void;
        handleEsc: () => void;
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
            internalKey: {
                type: StringConstructor;
                required: true;
            };
            to: PropType<string | HTMLElement>;
            onInternalAfterLeave: {
                type: PropType<(key: string) => void>;
                required: true;
            };
            onAfterEnter: PropType<() => void>;
            onAfterLeave: PropType<() => void>;
            transformOrigin: PropType<'center' | 'mouse'>;
            blockScroll: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            closeOnEsc: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            onEsc: PropType<() => void>;
            autoFocus: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            internalStyle: PropType<string | CSSProperties>;
            maskClosable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            onPositiveClick: PropType<
                (e: MouseEvent) => Promise<unknown> | unknown
            >;
            onNegativeClick: PropType<
                (e: MouseEvent) => Promise<unknown> | unknown
            >;
            onClose: PropType<() => Promise<unknown> | unknown>;
            onMaskClick: PropType<(e: MouseEvent) => void>;
            icon: PropType<() => import('vue').VNodeChild>;
            type: {
                readonly type: PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            title: PropType<string | (() => import('vue').VNodeChild)>;
            closable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            negativeText: StringConstructor;
            positiveText: StringConstructor;
            positiveButtonProps: PropType<import('../..').ButtonProps>;
            negativeButtonProps: PropType<import('../..').ButtonProps>;
            content: PropType<string | (() => import('vue').VNodeChild)>;
            action: PropType<() => import('vue').VNodeChild>;
            showIcon: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            loading: BooleanConstructor;
            bordered: BooleanConstructor;
            iconPlacement: PropType<import('./interface').IconPlacement>;
        }>
    >,
    {
        type: 'default' | 'error' | 'info' | 'success' | 'warning';
        autoFocus: boolean;
        loading: boolean;
        bordered: boolean;
        showIcon: boolean;
        closable: boolean;
        blockScroll: boolean;
        closeOnEsc: boolean;
        maskClosable: boolean;
    },
    {}
>;
