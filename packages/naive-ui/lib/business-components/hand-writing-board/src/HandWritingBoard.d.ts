import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../../_utils';
export declare const handWritingBoardProp: {
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    lineColor: {
        type: StringConstructor;
        default: string;
    };
    disabled: BooleanConstructor;
    height: {
        type: NumberConstructor;
        default: number;
    };
    wordTip: {
        type: StringConstructor;
        default: string;
    };
    exportType: {
        type: StringConstructor;
        default: string;
    };
    tag: {
        type: PropType<keyof HTMLElementTagNameMap>;
        default: string;
    };
    theme: PropType<
        import('../../../_mixins').Theme<
            'HandWritingBoard',
            {
                baseColor: string;
                borderColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'HandWritingBoard',
                {
                    baseColor: string;
                    borderColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'HandWritingBoard',
                {
                    baseColor: string;
                    borderColor: string;
                },
                any
            >
        >
    >;
};
export type HandWritingBoardProp = ExtractPublicPropTypes<
    typeof handWritingBoardProp
>;
export interface ExportCanvasContent {
    file: Blob | null;
    url: string | null;
}
declare const HandWritingBoard: import('vue').DefineComponent<
    {
        lineWidth: {
            type: NumberConstructor;
            default: number;
        };
        lineColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: BooleanConstructor;
        height: {
            type: NumberConstructor;
            default: number;
        };
        wordTip: {
            type: StringConstructor;
            default: string;
        };
        exportType: {
            type: StringConstructor;
            default: string;
        };
        tag: {
            type: PropType<keyof HTMLElementTagNameMap>;
            default: string;
        };
        theme: PropType<
            import('../../../_mixins').Theme<
                'HandWritingBoard',
                {
                    baseColor: string;
                    borderColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'HandWritingBoard',
                    {
                        baseColor: string;
                        borderColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'HandWritingBoard',
                    {
                        baseColor: string;
                        borderColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            height: string;
            cursor: string;
            '--n-background-color': string;
            '--n-border-color': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        canvas: globalThis.Ref<HTMLCanvasElement | undefined>;
        containRef: globalThis.Ref<HTMLDivElement | undefined>;
        mouseDown: (e: MouseEvent) => void;
        mouseMove: (e: MouseEvent) => void;
        mouseUp: (e: MouseEvent) => void;
        touchStart: (e: TouchEvent) => void;
        touchMove: (e: TouchEvent) => void;
        touchEnd: (e: TouchEvent) => void;
        reset: () => void;
        getCanvasContent: () => Promise<unknown>;
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
            lineWidth: {
                type: NumberConstructor;
                default: number;
            };
            lineColor: {
                type: StringConstructor;
                default: string;
            };
            disabled: BooleanConstructor;
            height: {
                type: NumberConstructor;
                default: number;
            };
            wordTip: {
                type: StringConstructor;
                default: string;
            };
            exportType: {
                type: StringConstructor;
                default: string;
            };
            tag: {
                type: PropType<keyof HTMLElementTagNameMap>;
                default: string;
            };
            theme: PropType<
                import('../../../_mixins').Theme<
                    'HandWritingBoard',
                    {
                        baseColor: string;
                        borderColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'HandWritingBoard',
                        {
                            baseColor: string;
                            borderColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'HandWritingBoard',
                        {
                            baseColor: string;
                            borderColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        tag: keyof HTMLElementTagNameMap;
        height: number;
        disabled: boolean;
        lineColor: string;
        lineWidth: number;
        wordTip: string;
        exportType: string;
    },
    {}
>;
export default HandWritingBoard;
