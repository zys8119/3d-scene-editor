import type { GlobalIconConfig } from '../../config-provider/src/internal-interface';
export declare function replaceable(
    name: keyof GlobalIconConfig,
    icon: JSX.Element
): import('vue').DefineComponent<
    {},
    () => import('vue').VNodeChild,
    {},
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<import('vue').ExtractPropTypes<{}>>,
    {},
    {}
>;
