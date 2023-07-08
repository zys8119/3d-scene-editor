import { ExtractPropTypes, PropType } from 'vue';
export declare const breadcrumbItemProps: {
    readonly separator: StringConstructor;
    readonly href: StringConstructor;
    readonly clickable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly onClick: PropType<(e: MouseEvent) => void>;
};
export type BreadcrumbItemProps = Partial<
    ExtractPropTypes<typeof breadcrumbItemProps>
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly separator: StringConstructor;
        readonly href: StringConstructor;
        readonly clickable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly onClick: PropType<(e: MouseEvent) => void>;
    },
    (() => null) | (() => JSX.Element),
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
        ExtractPropTypes<{
            readonly separator: StringConstructor;
            readonly href: StringConstructor;
            readonly clickable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly onClick: PropType<(e: MouseEvent) => void>;
        }>
    >,
    {
        readonly clickable: boolean;
    },
    {}
>;
export default _default;
