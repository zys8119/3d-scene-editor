import { Ref } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface AnchorInjection {
    activeHref: Ref<string | null>;
    mergedClsPrefix: Ref<string>;
    updateBarPosition: (el: HTMLElement) => void;
    setActiveHref: (href: string, transition?: boolean) => void;
    collectedLinkHrefs: string[];
    titleEls: HTMLElement[];
}
export declare const anchorInjectionKey: globalThis.InjectionKey<AnchorInjection>;
export declare const anchorLinkProps: {
    readonly title: StringConstructor;
    readonly href: StringConstructor;
};
export type AnchorLinkProps = ExtractPublicPropTypes<typeof anchorLinkProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly title: StringConstructor;
        readonly href: StringConstructor;
    },
    () => JSX.Element,
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
            readonly title: StringConstructor;
            readonly href: StringConstructor;
        }>
    >,
    {},
    {}
>;
export default _default;
