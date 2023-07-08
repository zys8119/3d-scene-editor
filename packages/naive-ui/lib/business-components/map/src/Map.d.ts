import { ExtractPropTypes, PropType } from 'vue';
export declare const mapProps: {
    readonly mapJsUrl: {
        readonly type: StringConstructor;
        readonly default: 'https://webapi.amap.com/maps?v=2.0';
    };
    readonly mapJsUrlParams: PropType<Record<string, string>>;
    readonly webServerKey: {
        readonly type: StringConstructor;
        readonly default: '410d4d222206abddd5d0fd0f24abc1ec';
    };
    readonly jsApiKey: {
        readonly type: StringConstructor;
        readonly default: '61a496760aa7ea804b0ec46d9b7bee45';
    };
    readonly jsApiSecret: {
        readonly type: StringConstructor;
        readonly default: '82df1d59e4b23a3f2d39c335b4fde725';
    };
    readonly width: {
        readonly type: StringConstructor;
        readonly default: '100%';
    };
    readonly height: {
        readonly type: StringConstructor;
        readonly default: '300px';
    };
    readonly zoom: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly center: {
        readonly type: ArrayConstructor;
        readonly default: null;
    };
    readonly selfMapStyle: {
        readonly type: StringConstructor;
        readonly default: null;
    };
    readonly mapStyle: {
        readonly type: StringConstructor;
        readonly default: 'normal';
    };
    readonly markers: {
        readonly type: ArrayConstructor;
        readonly default: () => never[];
    };
    readonly isSelect: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly pointIcon: {
        readonly type: StringConstructor;
        readonly default: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png';
    };
    readonly pointIconWidth: {
        readonly type: NumberConstructor;
        readonly default: 25;
    };
    readonly pointIconHeight: {
        readonly type: NumberConstructor;
        readonly default: 30;
    };
    readonly pointIconOffsetLeft: {
        readonly type: NumberConstructor;
        readonly default: -12;
    };
    readonly pointIconOffsetTop: {
        readonly type: NumberConstructor;
        readonly default: -15;
    };
    readonly radius: {
        readonly type: NumberConstructor;
        readonly default: 300;
    };
    readonly showLabel: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
    readonly showSearch: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly showPanel: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly modelValue: {
        readonly type: ArrayConstructor;
        readonly default: () => never[];
    };
    readonly theme: PropType<
        import('../../../_mixins').Theme<
            'Map',
            {
                padding: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Map',
                {
                    padding: string;
                },
                any
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'Map',
                {
                    padding: string;
                },
                any
            >
        >
    >;
};
export type MapProps = ExtractPropTypes<typeof mapProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly mapJsUrl: {
            readonly type: StringConstructor;
            readonly default: 'https://webapi.amap.com/maps?v=2.0';
        };
        readonly mapJsUrlParams: PropType<Record<string, string>>;
        readonly webServerKey: {
            readonly type: StringConstructor;
            readonly default: '410d4d222206abddd5d0fd0f24abc1ec';
        };
        readonly jsApiKey: {
            readonly type: StringConstructor;
            readonly default: '61a496760aa7ea804b0ec46d9b7bee45';
        };
        readonly jsApiSecret: {
            readonly type: StringConstructor;
            readonly default: '82df1d59e4b23a3f2d39c335b4fde725';
        };
        readonly width: {
            readonly type: StringConstructor;
            readonly default: '100%';
        };
        readonly height: {
            readonly type: StringConstructor;
            readonly default: '300px';
        };
        readonly zoom: {
            readonly type: NumberConstructor;
            readonly default: 15;
        };
        readonly center: {
            readonly type: ArrayConstructor;
            readonly default: null;
        };
        readonly selfMapStyle: {
            readonly type: StringConstructor;
            readonly default: null;
        };
        readonly mapStyle: {
            readonly type: StringConstructor;
            readonly default: 'normal';
        };
        readonly markers: {
            readonly type: ArrayConstructor;
            readonly default: () => never[];
        };
        readonly isSelect: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly pointIcon: {
            readonly type: StringConstructor;
            readonly default: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png';
        };
        readonly pointIconWidth: {
            readonly type: NumberConstructor;
            readonly default: 25;
        };
        readonly pointIconHeight: {
            readonly type: NumberConstructor;
            readonly default: 30;
        };
        readonly pointIconOffsetLeft: {
            readonly type: NumberConstructor;
            readonly default: -12;
        };
        readonly pointIconOffsetTop: {
            readonly type: NumberConstructor;
            readonly default: -15;
        };
        readonly radius: {
            readonly type: NumberConstructor;
            readonly default: 300;
        };
        readonly showLabel: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly default: 'div';
        };
        readonly showSearch: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly showPanel: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly modelValue: {
            readonly type: ArrayConstructor;
            readonly default: () => never[];
        };
        readonly theme: PropType<
            import('../../../_mixins').Theme<
                'Map',
                {
                    padding: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Map',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'Map',
                    {
                        padding: string;
                    },
                    any
                >
            >
        >;
    },
    {
        container: globalThis.Ref<HTMLDivElement | undefined>;
        initMap: () => void;
        cssVarsRef: globalThis.ComputedRef<{
            '--n-padding': string;
            width: string;
            height: string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        map: globalThis.Ref<any>;
        currentAddressInfo: any;
        showTipPoint: globalThis.Ref<boolean>;
        searchChange: (v: string) => Promise<void>;
        searchClick: (
            c: any,
            notSetCenter?: boolean,
            move?: boolean
        ) => Promise<any>;
        searchElRef: globalThis.Ref<any>;
        isOutside: globalThis.Ref<boolean>;
        searchChangeList: globalThis.Ref<never[]>;
        deletePanelList: (c: any, ev: MouseEvent) => void;
        panelList: globalThis.ComputedRef<any[]>;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {
        load: (map: any) => any;
        getCurrentAddress: (info: any) => any;
        move: (
            point: string[],
            info: any
        ) => {
            point: string[];
            info: any;
        };
        searchClick: (info: any) => true;
        closePanel: () => true;
        savePanel: (info: any) => true;
        'update:modelValue': (info: any) => true;
    },
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        ExtractPropTypes<{
            readonly mapJsUrl: {
                readonly type: StringConstructor;
                readonly default: 'https://webapi.amap.com/maps?v=2.0';
            };
            readonly mapJsUrlParams: PropType<Record<string, string>>;
            readonly webServerKey: {
                readonly type: StringConstructor;
                readonly default: '410d4d222206abddd5d0fd0f24abc1ec';
            };
            readonly jsApiKey: {
                readonly type: StringConstructor;
                readonly default: '61a496760aa7ea804b0ec46d9b7bee45';
            };
            readonly jsApiSecret: {
                readonly type: StringConstructor;
                readonly default: '82df1d59e4b23a3f2d39c335b4fde725';
            };
            readonly width: {
                readonly type: StringConstructor;
                readonly default: '100%';
            };
            readonly height: {
                readonly type: StringConstructor;
                readonly default: '300px';
            };
            readonly zoom: {
                readonly type: NumberConstructor;
                readonly default: 15;
            };
            readonly center: {
                readonly type: ArrayConstructor;
                readonly default: null;
            };
            readonly selfMapStyle: {
                readonly type: StringConstructor;
                readonly default: null;
            };
            readonly mapStyle: {
                readonly type: StringConstructor;
                readonly default: 'normal';
            };
            readonly markers: {
                readonly type: ArrayConstructor;
                readonly default: () => never[];
            };
            readonly isSelect: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly pointIcon: {
                readonly type: StringConstructor;
                readonly default: 'https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png';
            };
            readonly pointIconWidth: {
                readonly type: NumberConstructor;
                readonly default: 25;
            };
            readonly pointIconHeight: {
                readonly type: NumberConstructor;
                readonly default: 30;
            };
            readonly pointIconOffsetLeft: {
                readonly type: NumberConstructor;
                readonly default: -12;
            };
            readonly pointIconOffsetTop: {
                readonly type: NumberConstructor;
                readonly default: -15;
            };
            readonly radius: {
                readonly type: NumberConstructor;
                readonly default: 300;
            };
            readonly showLabel: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly tag: {
                readonly type: PropType<keyof HTMLElementTagNameMap>;
                readonly default: 'div';
            };
            readonly showSearch: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly showPanel: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly modelValue: {
                readonly type: ArrayConstructor;
                readonly default: () => never[];
            };
            readonly theme: PropType<
                import('../../../_mixins').Theme<
                    'Map',
                    {
                        padding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Map',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'Map',
                        {
                            padding: string;
                        },
                        any
                    >
                >
            >;
        }>
    > & {
        onLoad?: ((map: any) => any) | undefined;
        'onUpdate:modelValue'?: ((info: any) => any) | undefined;
        onMove?: ((point: string[], info: any) => any) | undefined;
        onGetCurrentAddress?: ((info: any) => any) | undefined;
        onSearchClick?: ((info: any) => any) | undefined;
        onClosePanel?: (() => any) | undefined;
        onSavePanel?: ((info: any) => any) | undefined;
    },
    {
        readonly tag: keyof HTMLElementTagNameMap;
        readonly center: unknown[];
        readonly markers: unknown[];
        readonly height: string;
        readonly width: string;
        readonly zoom: number;
        readonly radius: number;
        readonly showLabel: boolean;
        readonly modelValue: unknown[];
        readonly mapJsUrl: string;
        readonly webServerKey: string;
        readonly jsApiKey: string;
        readonly jsApiSecret: string;
        readonly selfMapStyle: string;
        readonly mapStyle: string;
        readonly isSelect: boolean;
        readonly pointIcon: string;
        readonly pointIconWidth: number;
        readonly pointIconHeight: number;
        readonly pointIconOffsetLeft: number;
        readonly pointIconOffsetTop: number;
        readonly showSearch: boolean;
        readonly showPanel: boolean;
    },
    {}
>;
export default _default;
