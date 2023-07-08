import { ExtractPropTypes, PropType } from 'vue';
export declare const notificationBarProps: {
    readonly text: StringConstructor;
    readonly background: {
        readonly type: StringConstructor;
        readonly default: '#fffbe8';
    };
    readonly color: {
        readonly type: StringConstructor;
        readonly default: '#ed6a0c';
    };
    readonly scrollable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly wrapable: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly leftIcon: {
        readonly type: PropType<any>;
        readonly default: JSX.Element;
    };
    readonly rightIcon: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly speed: {
        readonly type: NumberConstructor;
        readonly default: 15;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'NotificationBar',
            {
                padding: string;
            },
            any
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'NotificationBar',
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
                'NotificationBar',
                {
                    padding: string;
                },
                any
            >
        >
    >;
};
export type NotificationBarProps = ExtractPropTypes<
    typeof notificationBarProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly text: StringConstructor;
        readonly background: {
            readonly type: StringConstructor;
            readonly default: '#fffbe8';
        };
        readonly color: {
            readonly type: StringConstructor;
            readonly default: '#ed6a0c';
        };
        readonly scrollable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly wrapable: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly leftIcon: {
            readonly type: PropType<any>;
            readonly default: JSX.Element;
        };
        readonly rightIcon: {
            readonly type: BooleanConstructor;
            readonly default: false;
        };
        readonly speed: {
            readonly type: NumberConstructor;
            readonly default: 15;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'NotificationBar',
                {
                    padding: string;
                },
                any
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'NotificationBar',
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
                    'NotificationBar',
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
            '--n-notification-bar-transform-width': string;
        }>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        middleContent: any;
        rightClick: () => void;
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
            readonly text: StringConstructor;
            readonly background: {
                readonly type: StringConstructor;
                readonly default: '#fffbe8';
            };
            readonly color: {
                readonly type: StringConstructor;
                readonly default: '#ed6a0c';
            };
            readonly scrollable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly wrapable: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly leftIcon: {
                readonly type: PropType<any>;
                readonly default: JSX.Element;
            };
            readonly rightIcon: {
                readonly type: BooleanConstructor;
                readonly default: false;
            };
            readonly speed: {
                readonly type: NumberConstructor;
                readonly default: 15;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'NotificationBar',
                    {
                        padding: string;
                    },
                    any
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'NotificationBar',
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
                        'NotificationBar',
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
        readonly color: string;
        readonly background: string;
        readonly speed: number;
        readonly scrollable: boolean;
        readonly wrapable: boolean;
        readonly leftIcon: any;
        readonly rightIcon: boolean;
    },
    {}
>;
export default _default;
