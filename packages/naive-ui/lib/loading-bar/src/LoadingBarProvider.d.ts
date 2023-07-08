import { PropType, ExtractPropTypes, CSSProperties } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export interface LoadingBarInst {
    start: () => void;
    error: () => void;
    finish: () => void;
}
export type LoadingBarProviderInst = LoadingBarInst;
export type LoadingBarApiInjection = LoadingBarInst;
export declare const loadingBarProviderProps: {
    to: {
        type: PropType<string | false | HTMLElement>;
        default: undefined;
    };
    containerStyle: PropType<string | CSSProperties>;
    loadingBarStyle: {
        type: PropType<{
            loading?: string | CSSProperties | undefined;
            error?: string | CSSProperties | undefined;
        }>;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'LoadingBar',
            {
                colorError: string;
                colorLoading: string;
                height: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'LoadingBar',
                {
                    colorError: string;
                    colorLoading: string;
                    height: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'LoadingBar',
                {
                    colorError: string;
                    colorLoading: string;
                    height: string;
                },
                any
            >
        >
    >;
};
export type LoadingBarProviderProps = ExtractPublicPropTypes<
    typeof loadingBarProviderProps
>;
export type LoadingBarProviderSetupProps = ExtractPropTypes<
    typeof loadingBarProviderProps
>;
declare const _default: import('vue').DefineComponent<
    {
        to: {
            type: PropType<string | false | HTMLElement>;
            default: undefined;
        };
        containerStyle: PropType<string | CSSProperties>;
        loadingBarStyle: {
            type: PropType<{
                loading?: string | CSSProperties | undefined;
                error?: string | CSSProperties | undefined;
            }>;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'LoadingBar',
                {
                    colorError: string;
                    colorLoading: string;
                    height: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'LoadingBar',
                    {
                        colorError: string;
                        colorLoading: string;
                        height: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'LoadingBar',
                    {
                        colorError: string;
                        colorLoading: string;
                        height: string;
                    },
                    any
                >
            >
        >;
    },
    LoadingBarInst & {
        loadingBarRef: globalThis.Ref<{
            start: () => void;
            error: () => void;
            finish: () => void;
        } | null>;
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
        ExtractPropTypes<{
            to: {
                type: PropType<string | false | HTMLElement>;
                default: undefined;
            };
            containerStyle: PropType<string | CSSProperties>;
            loadingBarStyle: {
                type: PropType<{
                    loading?: string | CSSProperties | undefined;
                    error?: string | CSSProperties | undefined;
                }>;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'LoadingBar',
                    {
                        colorError: string;
                        colorLoading: string;
                        height: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'LoadingBar',
                        {
                            colorError: string;
                            colorLoading: string;
                            height: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'LoadingBar',
                        {
                            colorError: string;
                            colorLoading: string;
                            height: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        to: string | false | HTMLElement;
    },
    {}
>;
export default _default;
