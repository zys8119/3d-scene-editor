import { Component, PropType } from 'vue';
import type { ExtractPublicPropTypes } from '../../_utils';
import { MaybeArray } from '../../_utils';
export type Depth = 1 | 2 | 3 | 4 | 5 | '1' | '2' | '3' | '4' | '5' | undefined;
export declare const iconProps: {
    readonly depth: PropType<Depth>;
    readonly size: PropType<string | number>;
    readonly color: StringConstructor;
    readonly onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
    readonly component: PropType<
        Component<
            any,
            any,
            any,
            import('vue').ComputedOptions,
            import('vue').MethodOptions
        >
    >;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Icon',
            {
                color: string;
                opacity1Depth: string;
                opacity2Depth: string;
                opacity3Depth: string;
                opacity4Depth: string;
                opacity5Depth: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Icon',
                {
                    color: string;
                    opacity1Depth: string;
                    opacity2Depth: string;
                    opacity3Depth: string;
                    opacity4Depth: string;
                    opacity5Depth: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Icon',
                {
                    color: string;
                    opacity1Depth: string;
                    opacity2Depth: string;
                    opacity3Depth: string;
                    opacity4Depth: string;
                    opacity5Depth: string;
                },
                any
            >
        >
    >;
};
export type IconProps = ExtractPublicPropTypes<typeof iconProps>;
export declare const NIcon: import('vue').DefineComponent<
    {
        readonly depth: PropType<Depth>;
        readonly size: PropType<string | number>;
        readonly color: StringConstructor;
        readonly onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
        readonly component: PropType<
            Component<
                any,
                any,
                any,
                import('vue').ComputedOptions,
                import('vue').MethodOptions
            >
        >;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Icon',
                {
                    color: string;
                    opacity1Depth: string;
                    opacity2Depth: string;
                    opacity3Depth: string;
                    opacity4Depth: string;
                    opacity5Depth: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Icon',
                    {
                        color: string;
                        opacity1Depth: string;
                        opacity2Depth: string;
                        opacity3Depth: string;
                        opacity4Depth: string;
                        opacity5Depth: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Icon',
                    {
                        color: string;
                        opacity1Depth: string;
                        opacity2Depth: string;
                        opacity3Depth: string;
                        opacity4Depth: string;
                        opacity5Depth: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedStyle: globalThis.ComputedRef<{
            fontSize: string | undefined;
            color: string | undefined;
        }>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-color': string;
                  '--n-opacity': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        handleClick: (e: MouseEvent) => void;
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
            readonly depth: PropType<Depth>;
            readonly size: PropType<string | number>;
            readonly color: StringConstructor;
            readonly onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
            readonly component: PropType<
                Component<
                    any,
                    any,
                    any,
                    import('vue').ComputedOptions,
                    import('vue').MethodOptions
                >
            >;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Icon',
                    {
                        color: string;
                        opacity1Depth: string;
                        opacity2Depth: string;
                        opacity3Depth: string;
                        opacity4Depth: string;
                        opacity5Depth: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Icon',
                        {
                            color: string;
                            opacity1Depth: string;
                            opacity2Depth: string;
                            opacity3Depth: string;
                            opacity4Depth: string;
                            opacity5Depth: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Icon',
                        {
                            color: string;
                            opacity1Depth: string;
                            opacity2Depth: string;
                            opacity3Depth: string;
                            opacity4Depth: string;
                            opacity5Depth: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {},
    {}
>;
