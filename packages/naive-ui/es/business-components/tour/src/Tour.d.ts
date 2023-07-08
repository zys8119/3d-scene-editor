import { ExtractPropTypes } from 'vue';
import { StepsInfo } from './interface';
import { MaybeArray } from '../../../_utils';
export declare const tourProps: {
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    steps: globalThis.PropType<StepsInfo[]>;
    stepType: {
        type: StringConstructor;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    closable: {
        type: BooleanConstructor;
        default: boolean;
    };
    preText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    finishText: {
        type: StringConstructor;
        default: string;
    };
    'onUpdate:show': globalThis.PropType<MaybeArray<(value: boolean) => void>>;
    onUpdateShow: globalThis.PropType<MaybeArray<(value: boolean) => void>>;
    internalAppear: {
        type: globalThis.PropType<boolean | undefined>;
        default: undefined;
    };
    transformOrigin: {
        type: globalThis.PropType<'center' | 'mouse'>;
        default: string;
    };
    theme: globalThis.PropType<
        import('../../../_mixins').Theme<
            'Tour',
            {
                padding: string;
                dotColor: string;
                dotSize: string;
                dotColorActive: string;
                dotColorFocus: string;
                boxColor: string;
            },
            any
        >
    >;
    themeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Tour',
                {
                    padding: string;
                    dotColor: string;
                    dotSize: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    boxColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Tour',
                {
                    padding: string;
                    dotColor: string;
                    dotSize: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    boxColor: string;
                },
                any
            >
        >
    >;
};
export type TourProps = ExtractPropTypes<typeof tourProps>;
declare const _default: import('vue').DefineComponent<
    {
        mask: {
            type: BooleanConstructor;
            default: boolean;
        };
        steps: globalThis.PropType<StepsInfo[]>;
        stepType: {
            type: StringConstructor;
            default: string;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        closable: {
            type: BooleanConstructor;
            default: boolean;
        };
        preText: {
            type: StringConstructor;
            default: string;
        };
        nextText: {
            type: StringConstructor;
            default: string;
        };
        finishText: {
            type: StringConstructor;
            default: string;
        };
        'onUpdate:show': globalThis.PropType<
            MaybeArray<(value: boolean) => void>
        >;
        onUpdateShow: globalThis.PropType<MaybeArray<(value: boolean) => void>>;
        internalAppear: {
            type: globalThis.PropType<boolean | undefined>;
            default: undefined;
        };
        transformOrigin: {
            type: globalThis.PropType<'center' | 'mouse'>;
            default: string;
        };
        theme: globalThis.PropType<
            import('../../../_mixins').Theme<
                'Tour',
                {
                    padding: string;
                    dotColor: string;
                    dotSize: string;
                    dotColorActive: string;
                    dotColorFocus: string;
                    boxColor: string;
                },
                any
            >
        >;
        themeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Tour',
                    {
                        padding: string;
                        dotColor: string;
                        dotSize: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        boxColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Tour',
                    {
                        padding: string;
                        dotColor: string;
                        dotSize: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        boxColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVars: globalThis.ComputedRef<{
            '--n-tour-bezier-out': string;
            '--n-tour-bezier-in': string;
            '--n-tour-dot-color': string;
            '--n-tour-dot-color-focus': string;
            '--n-tour-dot-color-active': string;
            '--n-tour-dot-size': string;
            '--n-tour-dot-box-color': string;
        }>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        step: globalThis.Ref<{
            title: string;
            description: string;
            placement?: string | undefined;
            x: number;
            y: number;
            boxWidth: number;
            boxHeight: number;
            boxX: number;
            boxY: number;
        }>;
        currentStep: globalThis.Ref<number>;
        totalStep: globalThis.Ref<number>;
        handlePreStep: () => void;
        handleNextStep: () => void;
        handleEndStep: () => void;
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
            mask: {
                type: BooleanConstructor;
                default: boolean;
            };
            steps: globalThis.PropType<StepsInfo[]>;
            stepType: {
                type: StringConstructor;
                default: string;
            };
            show: {
                type: BooleanConstructor;
                default: boolean;
            };
            closable: {
                type: BooleanConstructor;
                default: boolean;
            };
            preText: {
                type: StringConstructor;
                default: string;
            };
            nextText: {
                type: StringConstructor;
                default: string;
            };
            finishText: {
                type: StringConstructor;
                default: string;
            };
            'onUpdate:show': globalThis.PropType<
                MaybeArray<(value: boolean) => void>
            >;
            onUpdateShow: globalThis.PropType<
                MaybeArray<(value: boolean) => void>
            >;
            internalAppear: {
                type: globalThis.PropType<boolean | undefined>;
                default: undefined;
            };
            transformOrigin: {
                type: globalThis.PropType<'center' | 'mouse'>;
                default: string;
            };
            theme: globalThis.PropType<
                import('../../../_mixins').Theme<
                    'Tour',
                    {
                        padding: string;
                        dotColor: string;
                        dotSize: string;
                        dotColorActive: string;
                        dotColorFocus: string;
                        boxColor: string;
                    },
                    any
                >
            >;
            themeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Tour',
                        {
                            padding: string;
                            dotColor: string;
                            dotSize: string;
                            dotColorActive: string;
                            dotColorFocus: string;
                            boxColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Tour',
                        {
                            padding: string;
                            dotColor: string;
                            dotSize: string;
                            dotColorActive: string;
                            dotColorFocus: string;
                            boxColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        show: boolean;
        transformOrigin: 'center' | 'mouse';
        mask: boolean;
        closable: boolean;
        internalAppear: boolean | undefined;
        stepType: string;
        preText: string;
        nextText: string;
        finishText: string;
    },
    {}
>;
export default _default;
