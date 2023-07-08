import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
type Gradient =
    | string
    | {
          deg?: string | number;
          from: string;
          to: string;
      };
export declare const gradientTextProps: {
    readonly size: PropType<string | number>;
    readonly fontSize: PropType<string | number>;
    readonly type: {
        readonly type: PropType<
            'error' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
        >;
        readonly default: 'primary';
    };
    readonly color: PropType<Gradient>;
    readonly gradient: PropType<Gradient>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'GradientText',
            {
                fontWeight: string;
                rotate: string;
                colorStartPrimary: string;
                colorEndPrimary: string;
                colorStartInfo: string;
                colorEndInfo: string;
                colorStartWarning: string;
                colorEndWarning: string;
                colorStartError: string;
                colorEndError: string;
                colorStartSuccess: string;
                colorEndSuccess: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'GradientText',
                {
                    fontWeight: string;
                    rotate: string;
                    colorStartPrimary: string;
                    colorEndPrimary: string;
                    colorStartInfo: string;
                    colorEndInfo: string;
                    colorStartWarning: string;
                    colorEndWarning: string;
                    colorStartError: string;
                    colorEndError: string;
                    colorStartSuccess: string;
                    colorEndSuccess: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'GradientText',
                {
                    fontWeight: string;
                    rotate: string;
                    colorStartPrimary: string;
                    colorEndPrimary: string;
                    colorStartInfo: string;
                    colorEndInfo: string;
                    colorStartWarning: string;
                    colorEndWarning: string;
                    colorStartError: string;
                    colorEndError: string;
                    colorStartSuccess: string;
                    colorEndSuccess: string;
                },
                any
            >
        >
    >;
};
export type GradientTextProps = ExtractPublicPropTypes<
    typeof gradientTextProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly size: PropType<string | number>;
        readonly fontSize: PropType<string | number>;
        readonly type: {
            readonly type: PropType<
                'error' | 'primary' | 'info' | 'success' | 'warning' | 'danger'
            >;
            readonly default: 'primary';
        };
        readonly color: PropType<Gradient>;
        readonly gradient: PropType<Gradient>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'GradientText',
                {
                    fontWeight: string;
                    rotate: string;
                    colorStartPrimary: string;
                    colorEndPrimary: string;
                    colorStartInfo: string;
                    colorEndInfo: string;
                    colorStartWarning: string;
                    colorEndWarning: string;
                    colorStartError: string;
                    colorEndError: string;
                    colorStartSuccess: string;
                    colorEndSuccess: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'GradientText',
                    {
                        fontWeight: string;
                        rotate: string;
                        colorStartPrimary: string;
                        colorEndPrimary: string;
                        colorStartInfo: string;
                        colorEndInfo: string;
                        colorStartWarning: string;
                        colorEndWarning: string;
                        colorStartError: string;
                        colorEndError: string;
                        colorStartSuccess: string;
                        colorEndSuccess: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'GradientText',
                    {
                        fontWeight: string;
                        rotate: string;
                        colorStartPrimary: string;
                        colorEndPrimary: string;
                        colorStartInfo: string;
                        colorEndInfo: string;
                        colorStartWarning: string;
                        colorEndWarning: string;
                        colorStartError: string;
                        colorEndError: string;
                        colorStartSuccess: string;
                        colorEndSuccess: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        compatibleType: globalThis.ComputedRef<
            'error' | 'primary' | 'info' | 'success' | 'warning'
        >;
        styleFontSize: globalThis.ComputedRef<string | number | undefined>;
        styleBgImage: globalThis.ComputedRef<string | undefined>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-rotate': string;
                  '--n-color-start': string;
                  '--n-color-end': string;
                  '--n-font-weight': string;
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
            readonly size: PropType<string | number>;
            readonly fontSize: PropType<string | number>;
            readonly type: {
                readonly type: PropType<
                    | 'error'
                    | 'primary'
                    | 'info'
                    | 'success'
                    | 'warning'
                    | 'danger'
                >;
                readonly default: 'primary';
            };
            readonly color: PropType<Gradient>;
            readonly gradient: PropType<Gradient>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'GradientText',
                    {
                        fontWeight: string;
                        rotate: string;
                        colorStartPrimary: string;
                        colorEndPrimary: string;
                        colorStartInfo: string;
                        colorEndInfo: string;
                        colorStartWarning: string;
                        colorEndWarning: string;
                        colorStartError: string;
                        colorEndError: string;
                        colorStartSuccess: string;
                        colorEndSuccess: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'GradientText',
                        {
                            fontWeight: string;
                            rotate: string;
                            colorStartPrimary: string;
                            colorEndPrimary: string;
                            colorStartInfo: string;
                            colorEndInfo: string;
                            colorStartWarning: string;
                            colorEndWarning: string;
                            colorStartError: string;
                            colorEndError: string;
                            colorStartSuccess: string;
                            colorEndSuccess: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'GradientText',
                        {
                            fontWeight: string;
                            rotate: string;
                            colorStartPrimary: string;
                            colorEndPrimary: string;
                            colorStartInfo: string;
                            colorEndInfo: string;
                            colorStartWarning: string;
                            colorEndWarning: string;
                            colorStartError: string;
                            colorEndError: string;
                            colorStartSuccess: string;
                            colorEndSuccess: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly type:
            | 'error'
            | 'primary'
            | 'info'
            | 'success'
            | 'warning'
            | 'danger';
    },
    {}
>;
export default _default;
