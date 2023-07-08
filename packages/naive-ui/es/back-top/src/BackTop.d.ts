import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const backTopProps: {
    readonly show: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly right: {
        readonly type: PropType<string | number>;
        readonly default: 40;
    };
    readonly bottom: {
        readonly type: PropType<string | number>;
        readonly default: 40;
    };
    readonly to: {
        readonly type: PropType<string | HTMLElement>;
        readonly default: 'body';
    };
    readonly visibilityHeight: {
        readonly type: NumberConstructor;
        readonly default: 180;
    };
    readonly listenTo: PropType<
        string | HTMLElement | Document | (() => HTMLElement | Document)
    >;
    readonly 'onUpdate:show': {
        readonly type: FunctionConstructor;
        readonly default: () => void;
    };
    readonly target: PropType<() => HTMLElement>;
    readonly onShow: PropType<() => void>;
    readonly onHide: PropType<() => void>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'BackTop',
            {
                color: string;
                textColor: string;
                iconColor: string;
                iconColorHover: string;
                iconColorPressed: string;
                boxShadow: string;
                boxShadowHover: string;
                boxShadowPressed: string;
                width: string;
                height: string;
                borderRadius: string;
                iconSize: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'BackTop',
                {
                    color: string;
                    textColor: string;
                    iconColor: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    boxShadow: string;
                    boxShadowHover: string;
                    boxShadowPressed: string;
                    width: string;
                    height: string;
                    borderRadius: string;
                    iconSize: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'BackTop',
                {
                    color: string;
                    textColor: string;
                    iconColor: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    boxShadow: string;
                    boxShadowHover: string;
                    boxShadowPressed: string;
                    width: string;
                    height: string;
                    borderRadius: string;
                    iconSize: string;
                },
                any
            >
        >
    >;
};
export type BackTopProps = ExtractPublicPropTypes<typeof backTopProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly show: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly right: {
            readonly type: PropType<string | number>;
            readonly default: 40;
        };
        readonly bottom: {
            readonly type: PropType<string | number>;
            readonly default: 40;
        };
        readonly to: {
            readonly type: PropType<string | HTMLElement>;
            readonly default: 'body';
        };
        readonly visibilityHeight: {
            readonly type: NumberConstructor;
            readonly default: 180;
        };
        readonly listenTo: PropType<
            string | HTMLElement | Document | (() => HTMLElement | Document)
        >;
        readonly 'onUpdate:show': {
            readonly type: FunctionConstructor;
            readonly default: () => void;
        };
        readonly target: PropType<() => HTMLElement>;
        readonly onShow: PropType<() => void>;
        readonly onHide: PropType<() => void>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'BackTop',
                {
                    color: string;
                    textColor: string;
                    iconColor: string;
                    iconColorHover: string;
                    iconColorPressed: string;
                    boxShadow: string;
                    boxShadowHover: string;
                    boxShadowPressed: string;
                    width: string;
                    height: string;
                    borderRadius: string;
                    iconSize: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'BackTop',
                    {
                        color: string;
                        textColor: string;
                        iconColor: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        boxShadow: string;
                        boxShadowHover: string;
                        boxShadowPressed: string;
                        width: string;
                        height: string;
                        borderRadius: string;
                        iconSize: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'BackTop',
                    {
                        color: string;
                        textColor: string;
                        iconColor: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        boxShadow: string;
                        boxShadowHover: string;
                        boxShadowPressed: string;
                        width: string;
                        height: string;
                        borderRadius: string;
                        iconSize: string;
                    },
                    any
                >
            >
        >;
    },
    {
        placeholderRef: globalThis.Ref<HTMLElement | null>;
        style: globalThis.ComputedRef<{
            right: string;
            bottom: string;
        }>;
        mergedShow: globalThis.ComputedRef<boolean>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        scrollElement: globalThis.Ref<null>;
        scrollTop: globalThis.Ref<number | null>;
        DomInfoReady: globalThis.Ref<boolean>;
        transitionDisabled: globalThis.Ref<boolean>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        handleAfterEnter: () => void;
        handleScroll: () => void;
        handleClick: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-border-radius': string;
                  '--n-height': string;
                  '--n-width': string;
                  '--n-box-shadow': string;
                  '--n-box-shadow-hover': string;
                  '--n-box-shadow-pressed': string;
                  '--n-color': string;
                  '--n-icon-size': string;
                  '--n-icon-color': string;
                  '--n-icon-color-hover': string;
                  '--n-icon-color-pressed': string;
                  '--n-text-color': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
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
            readonly show: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly right: {
                readonly type: PropType<string | number>;
                readonly default: 40;
            };
            readonly bottom: {
                readonly type: PropType<string | number>;
                readonly default: 40;
            };
            readonly to: {
                readonly type: PropType<string | HTMLElement>;
                readonly default: 'body';
            };
            readonly visibilityHeight: {
                readonly type: NumberConstructor;
                readonly default: 180;
            };
            readonly listenTo: PropType<
                string | HTMLElement | Document | (() => HTMLElement | Document)
            >;
            readonly 'onUpdate:show': {
                readonly type: FunctionConstructor;
                readonly default: () => void;
            };
            readonly target: PropType<() => HTMLElement>;
            readonly onShow: PropType<() => void>;
            readonly onHide: PropType<() => void>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'BackTop',
                    {
                        color: string;
                        textColor: string;
                        iconColor: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        boxShadow: string;
                        boxShadowHover: string;
                        boxShadowPressed: string;
                        width: string;
                        height: string;
                        borderRadius: string;
                        iconSize: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'BackTop',
                        {
                            color: string;
                            textColor: string;
                            iconColor: string;
                            iconColorHover: string;
                            iconColorPressed: string;
                            boxShadow: string;
                            boxShadowHover: string;
                            boxShadowPressed: string;
                            width: string;
                            height: string;
                            borderRadius: string;
                            iconSize: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'BackTop',
                        {
                            color: string;
                            textColor: string;
                            iconColor: string;
                            iconColorHover: string;
                            iconColorPressed: string;
                            boxShadow: string;
                            boxShadowHover: string;
                            boxShadowPressed: string;
                            width: string;
                            height: string;
                            borderRadius: string;
                            iconSize: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly right: string | number;
        readonly bottom: string | number;
        readonly show: boolean | undefined;
        readonly to: string | HTMLElement;
        readonly 'onUpdate:show': Function;
        readonly visibilityHeight: number;
    },
    {}
>;
export default _default;
