import { ExtractPropTypes } from 'vue';
export declare const scrollListProps: {
    height: {
        type: NumberConstructor;
        default: number;
    };
    scroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    count: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    animationDuration: {
        type: NumberConstructor;
        default: number;
    };
    autoUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
    space: {
        type: NumberConstructor;
        default: number;
    };
    sequence: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    hoverStop: {
        type: BooleanConstructor;
        default: boolean;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    theme: globalThis.PropType<
        import('../../../_mixins').Theme<
            'ScrollList',
            {
                padding: string;
                baseColor: string;
            },
            any
        >
    >;
    themeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ScrollList',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: globalThis.PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ScrollList',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >
    >;
};
export type ScrollListProps = ExtractPropTypes<typeof scrollListProps>;
declare const ScrollList: import('vue').DefineComponent<
    {
        height: {
            type: NumberConstructor;
            default: number;
        };
        scroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        count: {
            type: NumberConstructor;
            default: number;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        animationDuration: {
            type: NumberConstructor;
            default: number;
        };
        autoUpdate: {
            type: BooleanConstructor;
            default: boolean;
        };
        space: {
            type: NumberConstructor;
            default: number;
        };
        sequence: {
            type: BooleanConstructor;
            default: boolean;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        hoverStop: {
            type: BooleanConstructor;
            default: boolean;
        };
        tag: {
            type: StringConstructor;
            default: string;
        };
        theme: globalThis.PropType<
            import('../../../_mixins').Theme<
                'ScrollList',
                {
                    padding: string;
                    baseColor: string;
                },
                any
            >
        >;
        themeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ScrollList',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: globalThis.PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ScrollList',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
            '--n-space': string;
            '--n-height': string;
            '--n-duration': number;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        slotsElements: any;
        getStringifySlot: any;
        start: any;
        scrollListRef: globalThis.Ref<any>;
        timer: globalThis.Ref<number | null>;
        end: any;
        slotBackup: any;
        update: () => Promise<any>;
        updating: globalThis.Ref<boolean>;
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
            height: {
                type: NumberConstructor;
                default: number;
            };
            scroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            count: {
                type: NumberConstructor;
                default: number;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            animationDuration: {
                type: NumberConstructor;
                default: number;
            };
            autoUpdate: {
                type: BooleanConstructor;
                default: boolean;
            };
            space: {
                type: NumberConstructor;
                default: number;
            };
            sequence: {
                type: BooleanConstructor;
                default: boolean;
            };
            loop: {
                type: BooleanConstructor;
                default: boolean;
            };
            hoverStop: {
                type: BooleanConstructor;
                default: boolean;
            };
            tag: {
                type: StringConstructor;
                default: string;
            };
            theme: globalThis.PropType<
                import('../../../_mixins').Theme<
                    'ScrollList',
                    {
                        padding: string;
                        baseColor: string;
                    },
                    any
                >
            >;
            themeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ScrollList',
                        {
                            padding: string;
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: globalThis.PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ScrollList',
                        {
                            padding: string;
                            baseColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        tag: string;
        scroll: boolean;
        space: number;
        animationDuration: number;
        height: number;
        duration: number;
        loop: boolean;
        count: number;
        autoUpdate: boolean;
        sequence: boolean;
        hoverStop: boolean;
    },
    {}
>;
export default ScrollList;
