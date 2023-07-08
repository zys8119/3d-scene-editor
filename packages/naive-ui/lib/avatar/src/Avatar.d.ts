import { PropType, VNodeChild, ImgHTMLAttributes } from 'vue';
import { IntersectionObserverOptions } from '../../image/src/utils';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { Size, ObjectFit } from './interface';
export declare const avatarProps: {
    readonly size: PropType<Size>;
    readonly src: StringConstructor;
    readonly circle: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly objectFit: PropType<ObjectFit>;
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly bordered: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly onError: PropType<(e: Event) => void>;
    readonly fallbackSrc: StringConstructor;
    readonly intersectionObserverOptions: PropType<IntersectionObserverOptions>;
    readonly lazy: BooleanConstructor;
    readonly onLoad: PropType<(e: Event) => void>;
    readonly renderPlaceholder: PropType<() => VNodeChild>;
    readonly renderFallback: PropType<() => VNodeChild>;
    readonly imgProps: PropType<ImgHTMLAttributes>;
    /** @deprecated */
    readonly color: StringConstructor;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Avatar',
            {
                borderRadius: string;
                fontSize: string;
                border: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                heightHuge: string;
                color: string;
                colorModal: string;
                colorPopover: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Avatar',
                {
                    borderRadius: string;
                    fontSize: string;
                    border: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    heightHuge: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Avatar',
                {
                    borderRadius: string;
                    fontSize: string;
                    border: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    heightHuge: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                },
                any
            >
        >
    >;
};
export type AvatarProps = ExtractPublicPropTypes<typeof avatarProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly size: PropType<Size>;
        readonly src: StringConstructor;
        readonly circle: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly objectFit: PropType<ObjectFit>;
        readonly round: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly bordered: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly onError: PropType<(e: Event) => void>;
        readonly fallbackSrc: StringConstructor;
        readonly intersectionObserverOptions: PropType<IntersectionObserverOptions>;
        readonly lazy: BooleanConstructor;
        readonly onLoad: PropType<(e: Event) => void>;
        readonly renderPlaceholder: PropType<() => VNodeChild>;
        readonly renderFallback: PropType<() => VNodeChild>;
        readonly imgProps: PropType<ImgHTMLAttributes>;
        /** @deprecated */
        readonly color: StringConstructor;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Avatar',
                {
                    borderRadius: string;
                    fontSize: string;
                    border: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    heightHuge: string;
                    color: string;
                    colorModal: string;
                    colorPopover: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Avatar',
                    {
                        borderRadius: string;
                        fontSize: string;
                        border: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        heightHuge: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Avatar',
                    {
                        borderRadius: string;
                        fontSize: string;
                        border: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        heightHuge: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                    },
                    any
                >
            >
        >;
    },
    {
        textRef: globalThis.Ref<HTMLElement | null>;
        selfRef: globalThis.Ref<HTMLElement | null>;
        mergedRoundRef: globalThis.ComputedRef<boolean | undefined>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        fitTextTransform: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-border': string;
                  '--n-border-radius': string;
                  '--n-color': string;
                  '--n-color-modal': string;
                  '--n-color-popover': string;
                  '--n-bezier': string;
                  '--n-merged-size': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        hasLoadError: globalThis.Ref<boolean>;
        handleError: (e: Event) => void;
        shouldStartLoading: globalThis.Ref<boolean>;
        loaded: globalThis.Ref<boolean>;
        mergedOnLoad: (e: Event) => void;
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
            readonly size: PropType<Size>;
            readonly src: StringConstructor;
            readonly circle: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly objectFit: PropType<ObjectFit>;
            readonly round: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly bordered: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly onError: PropType<(e: Event) => void>;
            readonly fallbackSrc: StringConstructor;
            readonly intersectionObserverOptions: PropType<IntersectionObserverOptions>;
            readonly lazy: BooleanConstructor;
            readonly onLoad: PropType<(e: Event) => void>;
            readonly renderPlaceholder: PropType<() => VNodeChild>;
            readonly renderFallback: PropType<() => VNodeChild>;
            readonly imgProps: PropType<ImgHTMLAttributes>;
            /** @deprecated */
            readonly color: StringConstructor;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Avatar',
                    {
                        borderRadius: string;
                        fontSize: string;
                        border: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        heightHuge: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Avatar',
                        {
                            borderRadius: string;
                            fontSize: string;
                            border: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            heightHuge: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Avatar',
                        {
                            borderRadius: string;
                            fontSize: string;
                            border: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            heightHuge: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly lazy: boolean;
        readonly round: boolean;
        readonly circle: boolean;
        readonly bordered: boolean;
    },
    {}
>;
export default _default;
