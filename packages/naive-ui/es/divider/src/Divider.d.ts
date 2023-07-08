import { PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const dividerProps: {
    readonly titlePlacement: {
        readonly type: PropType<'left' | 'right' | 'center'>;
        readonly default: 'center';
    };
    readonly dashed: BooleanConstructor;
    readonly vertical: BooleanConstructor;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Divider',
            {
                textColor: string;
                color: string;
                fontWeight: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Divider',
                {
                    textColor: string;
                    color: string;
                    fontWeight: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Divider',
                {
                    textColor: string;
                    color: string;
                    fontWeight: string;
                },
                any
            >
        >
    >;
};
export type DividerProps = ExtractPublicPropTypes<typeof dividerProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly titlePlacement: {
            readonly type: PropType<'left' | 'right' | 'center'>;
            readonly default: 'center';
        };
        readonly dashed: BooleanConstructor;
        readonly vertical: BooleanConstructor;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Divider',
                {
                    textColor: string;
                    color: string;
                    fontWeight: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Divider',
                    {
                        textColor: string;
                        color: string;
                        fontWeight: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Divider',
                    {
                        textColor: string;
                        color: string;
                        fontWeight: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-color': string;
                  '--n-text-color': string;
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
            readonly titlePlacement: {
                readonly type: PropType<'left' | 'right' | 'center'>;
                readonly default: 'center';
            };
            readonly dashed: BooleanConstructor;
            readonly vertical: BooleanConstructor;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Divider',
                    {
                        textColor: string;
                        color: string;
                        fontWeight: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Divider',
                        {
                            textColor: string;
                            color: string;
                            fontWeight: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Divider',
                        {
                            textColor: string;
                            color: string;
                            fontWeight: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly dashed: boolean;
        readonly vertical: boolean;
        readonly titlePlacement: 'left' | 'right' | 'center';
    },
    {}
>;
export default _default;
