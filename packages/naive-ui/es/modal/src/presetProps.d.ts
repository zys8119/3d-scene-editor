declare const presetProps: {
    icon: globalThis.PropType<() => import('vue').VNodeChild>;
    type: {
        readonly type: globalThis.PropType<
            'default' | 'error' | 'info' | 'success' | 'warning'
        >;
        readonly default: 'default';
    };
    title: globalThis.PropType<string | (() => import('vue').VNodeChild)>;
    closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    negativeText: StringConstructor;
    positiveText: StringConstructor;
    positiveButtonProps: globalThis.PropType<import('../..').ButtonProps>;
    negativeButtonProps: globalThis.PropType<import('../..').ButtonProps>;
    content: globalThis.PropType<string | (() => import('vue').VNodeChild)>;
    action: globalThis.PropType<() => import('vue').VNodeChild>;
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    loading: BooleanConstructor;
    bordered: BooleanConstructor;
    iconPlacement: globalThis.PropType<
        import('../../dialog/src/interface').IconPlacement
    >;
    onPositiveClick: globalThis.PropType<(e: MouseEvent) => void>;
    onNegativeClick: globalThis.PropType<(e: MouseEvent) => void>;
    onClose: globalThis.PropType<() => void>;
    contentStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    headerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    headerExtraStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    footerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    embedded: BooleanConstructor;
    segmented: {
        readonly type: globalThis.PropType<
            boolean | import('../../card/src/Card').CardSegmented
        >;
        readonly default: false;
    };
    size: {
        readonly type: globalThis.PropType<
            'small' | 'medium' | 'large' | 'huge'
        >;
        readonly default: 'medium';
    };
    hoverable: BooleanConstructor;
    role: StringConstructor;
    tag: {
        readonly type: globalThis.PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
};
declare const presetPropsKeys: (
    | 'type'
    | 'tag'
    | 'content'
    | 'size'
    | 'icon'
    | 'title'
    | 'role'
    | 'action'
    | 'positiveText'
    | 'negativeText'
    | 'loading'
    | 'bordered'
    | 'showIcon'
    | 'closable'
    | 'contentStyle'
    | 'headerStyle'
    | 'footerStyle'
    | 'iconPlacement'
    | 'onClose'
    | 'hoverable'
    | 'embedded'
    | 'positiveButtonProps'
    | 'negativeButtonProps'
    | 'onPositiveClick'
    | 'onNegativeClick'
    | 'headerExtraStyle'
    | 'segmented'
)[];
export { presetProps, presetPropsKeys };
