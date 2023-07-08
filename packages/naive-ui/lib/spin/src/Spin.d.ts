import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const spinProps: {
    description: StringConstructor;
    stroke: StringConstructor;
    size: {
        type: PropType<number | 'small' | 'medium' | 'large'>;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgMaskColor: {
        type: StringConstructor;
        default: string;
    };
    opacity: {
        type: NumberConstructor;
        default: number;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeWidth: NumberConstructor;
    rotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    spinning: {
        type: BooleanConstructor;
        validator: () => boolean;
        default: undefined;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'Spin',
            {
                fontSize: string;
                textColor: string;
                sizeTiny: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                sizeHuge: string;
                color: string;
                opacitySpinning: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Spin',
                {
                    fontSize: string;
                    textColor: string;
                    sizeTiny: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    sizeHuge: string;
                    color: string;
                    opacitySpinning: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Spin',
                {
                    fontSize: string;
                    textColor: string;
                    sizeTiny: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    sizeHuge: string;
                    color: string;
                    opacitySpinning: string;
                },
                any
            >
        >
    >;
};
export type SpinProps = ExtractPublicPropTypes<typeof spinProps>;
export declare const nSpingComponent: import('vue').DefineComponent<
    {
        description: StringConstructor;
        stroke: StringConstructor;
        size: {
            type: PropType<number | 'small' | 'medium' | 'large'>;
            default: string;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        bgMaskColor: {
            type: StringConstructor;
            default: string;
        };
        opacity: {
            type: NumberConstructor;
            default: number;
        };
        fullscreen: {
            type: BooleanConstructor;
            default: boolean;
        };
        strokeWidth: NumberConstructor;
        rotate: {
            type: BooleanConstructor;
            default: boolean;
        };
        spinning: {
            type: BooleanConstructor;
            validator: () => boolean;
            default: undefined;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'Spin',
                {
                    fontSize: string;
                    textColor: string;
                    sizeTiny: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    sizeHuge: string;
                    color: string;
                    opacitySpinning: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Spin',
                    {
                        fontSize: string;
                        textColor: string;
                        sizeTiny: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        sizeHuge: string;
                        color: string;
                        opacitySpinning: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Spin',
                    {
                        fontSize: string;
                        textColor: string;
                        sizeTiny: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        sizeHuge: string;
                        color: string;
                        opacitySpinning: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        compitableShow: globalThis.ComputedRef<boolean>;
        mergedStrokeWidth: globalThis.ComputedRef<number>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-opacity-spinning': string;
                  '--n-size': string;
                  '--n-color': string;
                  '--n-text-color': string;
                  '--n-mask-color': string;
                  '--n-mask-opacity': string;
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
            description: StringConstructor;
            stroke: StringConstructor;
            size: {
                type: PropType<number | 'small' | 'medium' | 'large'>;
                default: string;
            };
            show: {
                type: BooleanConstructor;
                default: boolean;
            };
            bgMaskColor: {
                type: StringConstructor;
                default: string;
            };
            opacity: {
                type: NumberConstructor;
                default: number;
            };
            fullscreen: {
                type: BooleanConstructor;
                default: boolean;
            };
            strokeWidth: NumberConstructor;
            rotate: {
                type: BooleanConstructor;
                default: boolean;
            };
            spinning: {
                type: BooleanConstructor;
                validator: () => boolean;
                default: undefined;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'Spin',
                    {
                        fontSize: string;
                        textColor: string;
                        sizeTiny: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        sizeHuge: string;
                        color: string;
                        opacitySpinning: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Spin',
                        {
                            fontSize: string;
                            textColor: string;
                            sizeTiny: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            sizeHuge: string;
                            color: string;
                            opacitySpinning: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Spin',
                        {
                            fontSize: string;
                            textColor: string;
                            sizeTiny: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            sizeHuge: string;
                            color: string;
                            opacitySpinning: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        size: number | 'small' | 'medium' | 'large';
        show: boolean;
        opacity: number;
        rotate: boolean;
        bgMaskColor: string;
        fullscreen: boolean;
        spinning: boolean;
    },
    {}
>;
export default nSpingComponent;
