import { ExtractPropTypes, PropType } from 'vue';
import { QrCode } from './interface';
export declare const qrCodeProps: {
    readonly modelValue: {
        readonly type: StringConstructor;
        readonly default: '';
    };
    readonly qrProps: {
        readonly type: PropType<QrCode>;
        readonly default: () => {};
    };
    readonly padding: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly logo: {
        readonly type: StringConstructor;
        readonly default: '';
    };
    readonly logoSize: {
        readonly type: NumberConstructor;
        readonly default: 50;
    };
    readonly logoRound: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly downloadFileName: {
        readonly type: StringConstructor;
        readonly default: '二维码';
    };
    readonly border: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly borderSize: {
        readonly type: NumberConstructor;
        readonly default: 2;
    };
    readonly borderColor: {
        readonly type: StringConstructor;
        readonly default: '#ccc';
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'QrCode',
            {
                padding: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'QrCode',
                {
                    padding: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'QrCode',
                {
                    padding: string;
                },
                any
            >
        >
    >;
};
export type QrCodeProps = Partial<ExtractPropTypes<typeof qrCodeProps>>;
declare const _default: import('vue').DefineComponent<
    {
        readonly modelValue: {
            readonly type: StringConstructor;
            readonly default: '';
        };
        readonly qrProps: {
            readonly type: PropType<QrCode>;
            readonly default: () => {};
        };
        readonly padding: {
            readonly type: NumberConstructor;
            readonly default: 10;
        };
        readonly logo: {
            readonly type: StringConstructor;
            readonly default: '';
        };
        readonly logoSize: {
            readonly type: NumberConstructor;
            readonly default: 50;
        };
        readonly logoRound: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly downloadFileName: {
            readonly type: StringConstructor;
            readonly default: '二维码';
        };
        readonly border: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly borderSize: {
            readonly type: NumberConstructor;
            readonly default: 2;
        };
        readonly borderColor: {
            readonly type: StringConstructor;
            readonly default: '#ccc';
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'QrCode',
                {
                    padding: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'QrCode',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'QrCode',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
    },
    {
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        canvasRef: globalThis.Ref<any>;
        download: () => void;
        renderCode: () => void;
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
            readonly modelValue: {
                readonly type: StringConstructor;
                readonly default: '';
            };
            readonly qrProps: {
                readonly type: PropType<QrCode>;
                readonly default: () => {};
            };
            readonly padding: {
                readonly type: NumberConstructor;
                readonly default: 10;
            };
            readonly logo: {
                readonly type: StringConstructor;
                readonly default: '';
            };
            readonly logoSize: {
                readonly type: NumberConstructor;
                readonly default: 50;
            };
            readonly logoRound: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly downloadFileName: {
                readonly type: StringConstructor;
                readonly default: '二维码';
            };
            readonly border: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly borderSize: {
                readonly type: NumberConstructor;
                readonly default: 2;
            };
            readonly borderColor: {
                readonly type: StringConstructor;
                readonly default: '#ccc';
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'QrCode',
                    {
                        padding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'QrCode',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'QrCode',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        readonly border: boolean;
        readonly padding: number;
        readonly borderColor: string;
        readonly modelValue: string;
        readonly qrProps: QrCode;
        readonly logo: string;
        readonly logoSize: number;
        readonly logoRound: boolean;
        readonly downloadFileName: string;
        readonly borderSize: number;
    },
    {}
>;
export default _default;
