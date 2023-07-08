import { PropType } from 'vue';
import { ExtractPublicPropTypes } from '../../_utils';
export declare const watermarkProps: {
    readonly debug: BooleanConstructor;
    readonly cross: BooleanConstructor;
    readonly fullscreen: BooleanConstructor;
    readonly width: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly height: {
        readonly type: NumberConstructor;
        readonly default: 32;
    };
    readonly zIndex: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly xGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yGap: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly yOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly xOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly rotate: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly image: StringConstructor;
    readonly imageOpacity: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly imageHeight: NumberConstructor;
    readonly imageWidth: NumberConstructor;
    readonly content: StringConstructor;
    readonly remarks: StringConstructor;
    readonly reYOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly reXOffset: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly selectable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly fontSize: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly fontFamily: StringConstructor;
    readonly fontStyle: {
        readonly type: PropType<
            'normal' | 'italic' | 'oblique' | `oblique ${number}deg`
        >;
        readonly default: 'normal';
    };
    readonly fontVariant: {
        readonly type: StringConstructor;
        readonly default: '';
    };
    readonly fontWeight: {
        readonly type: NumberConstructor;
        readonly default: 400;
    };
    readonly fontColor: {
        readonly type: StringConstructor;
        readonly default: 'rgba(128, 128, 128, .3)';
    };
    readonly fontStretch: {
        readonly type: StringConstructor;
        readonly default: '';
    };
    readonly lineHeight: {
        readonly type: NumberConstructor;
        readonly default: 14;
    };
    readonly globalRotate: {
        readonly type: NumberConstructor;
        readonly default: 0;
    };
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Watermark',
            {
                fontFamily: string;
            },
            unknown
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Watermark',
                {
                    fontFamily: string;
                },
                unknown
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Watermark',
                {
                    fontFamily: string;
                },
                unknown
            >
        >
    >;
};
export type WatermarkProps = ExtractPublicPropTypes<typeof watermarkProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly debug: BooleanConstructor;
        readonly cross: BooleanConstructor;
        readonly fullscreen: BooleanConstructor;
        readonly width: {
            readonly type: NumberConstructor;
            readonly default: 32;
        };
        readonly height: {
            readonly type: NumberConstructor;
            readonly default: 32;
        };
        readonly zIndex: {
            readonly type: NumberConstructor;
            readonly default: 10;
        };
        readonly xGap: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly yGap: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly yOffset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly xOffset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly rotate: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly image: StringConstructor;
        readonly imageOpacity: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly imageHeight: NumberConstructor;
        readonly imageWidth: NumberConstructor;
        readonly content: StringConstructor;
        readonly remarks: StringConstructor;
        readonly reYOffset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly reXOffset: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly selectable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly fontSize: {
            readonly type: NumberConstructor;
            readonly default: 14;
        };
        readonly fontFamily: StringConstructor;
        readonly fontStyle: {
            readonly type: PropType<
                'normal' | 'italic' | 'oblique' | `oblique ${number}deg`
            >;
            readonly default: 'normal';
        };
        readonly fontVariant: {
            readonly type: StringConstructor;
            readonly default: '';
        };
        readonly fontWeight: {
            readonly type: NumberConstructor;
            readonly default: 400;
        };
        readonly fontColor: {
            readonly type: StringConstructor;
            readonly default: 'rgba(128, 128, 128, .3)';
        };
        readonly fontStretch: {
            readonly type: StringConstructor;
            readonly default: '';
        };
        readonly lineHeight: {
            readonly type: NumberConstructor;
            readonly default: 14;
        };
        readonly globalRotate: {
            readonly type: NumberConstructor;
            readonly default: 0;
        };
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Watermark',
                {
                    fontFamily: string;
                },
                unknown
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Watermark',
                    {
                        fontFamily: string;
                    },
                    unknown
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Watermark',
                    {
                        fontFamily: string;
                    },
                    unknown
                >
            >
        >;
    },
    () => JSX.Element,
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
            readonly debug: BooleanConstructor;
            readonly cross: BooleanConstructor;
            readonly fullscreen: BooleanConstructor;
            readonly width: {
                readonly type: NumberConstructor;
                readonly default: 32;
            };
            readonly height: {
                readonly type: NumberConstructor;
                readonly default: 32;
            };
            readonly zIndex: {
                readonly type: NumberConstructor;
                readonly default: 10;
            };
            readonly xGap: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly yGap: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly yOffset: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly xOffset: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly rotate: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly image: StringConstructor;
            readonly imageOpacity: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly imageHeight: NumberConstructor;
            readonly imageWidth: NumberConstructor;
            readonly content: StringConstructor;
            readonly remarks: StringConstructor;
            readonly reYOffset: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly reXOffset: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly selectable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly fontSize: {
                readonly type: NumberConstructor;
                readonly default: 14;
            };
            readonly fontFamily: StringConstructor;
            readonly fontStyle: {
                readonly type: PropType<
                    'normal' | 'italic' | 'oblique' | `oblique ${number}deg`
                >;
                readonly default: 'normal';
            };
            readonly fontVariant: {
                readonly type: StringConstructor;
                readonly default: '';
            };
            readonly fontWeight: {
                readonly type: NumberConstructor;
                readonly default: 400;
            };
            readonly fontColor: {
                readonly type: StringConstructor;
                readonly default: 'rgba(128, 128, 128, .3)';
            };
            readonly fontStretch: {
                readonly type: StringConstructor;
                readonly default: '';
            };
            readonly lineHeight: {
                readonly type: NumberConstructor;
                readonly default: 14;
            };
            readonly globalRotate: {
                readonly type: NumberConstructor;
                readonly default: 0;
            };
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Watermark',
                    {
                        fontFamily: string;
                    },
                    unknown
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Watermark',
                        {
                            fontFamily: string;
                        },
                        unknown
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Watermark',
                        {
                            fontFamily: string;
                        },
                        unknown
                    >
                >
            >;
        }>
    >,
    {
        readonly fontSize: number;
        readonly fontStretch: string;
        readonly fontStyle:
            | 'normal'
            | 'italic'
            | 'oblique'
            | `oblique ${number}deg`;
        readonly fontVariant: string;
        readonly fontWeight: number;
        readonly height: number;
        readonly lineHeight: number;
        readonly rotate: number;
        readonly width: number;
        readonly zIndex: number;
        readonly cross: boolean;
        readonly xGap: number;
        readonly yGap: number;
        readonly selectable: boolean;
        readonly fullscreen: boolean;
        readonly debug: boolean;
        readonly yOffset: number;
        readonly xOffset: number;
        readonly imageOpacity: number;
        readonly reYOffset: number;
        readonly reXOffset: number;
        readonly fontColor: string;
        readonly globalRotate: number;
    },
    {}
>;
export default _default;
