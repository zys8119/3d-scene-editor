import { PropType, CSSProperties } from 'vue';
import type { Size } from '../../avatar/src/interface';
import type { ExtractPublicPropTypes } from '../../_utils';
export interface AvatarGroupInjection {
    size?: Size | undefined;
}
export interface AvatarGroupOption {
    src: string;
}
export declare const avatarGroupProps: {
    readonly max: NumberConstructor;
    readonly maxStyle: PropType<string | CSSProperties>;
    readonly options: {
        readonly type: PropType<AvatarGroupOption[]>;
        readonly default: () => never[];
    };
    readonly vertical: BooleanConstructor;
    readonly size: PropType<Size | undefined>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'AvatarGroup',
            {
                gap: string;
            },
            {
                Avatar: import('../../_mixins').Theme<
                    'Avatar',
                    {
                        borderRadius: string;
                        fontSize: string;
                        border: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        heightHuge: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                    },
                    any
                >;
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'AvatarGroup',
                {
                    gap: string;
                },
                {
                    Avatar: import('../../_mixins').Theme<
                        'Avatar',
                        {
                            borderRadius: string;
                            fontSize: string;
                            border: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            heightHuge: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'AvatarGroup',
                {
                    gap: string;
                },
                {
                    Avatar: import('../../_mixins').Theme<
                        'Avatar',
                        {
                            borderRadius: string;
                            fontSize: string;
                            border: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            heightHuge: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
};
export type AvatarGroupProps = ExtractPublicPropTypes<typeof avatarGroupProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly max: NumberConstructor;
        readonly maxStyle: PropType<string | CSSProperties>;
        readonly options: {
            readonly type: PropType<AvatarGroupOption[]>;
            readonly default: () => never[];
        };
        readonly vertical: BooleanConstructor;
        readonly size: PropType<Size | undefined>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'AvatarGroup',
                {
                    gap: string;
                },
                {
                    Avatar: import('../../_mixins').Theme<
                        'Avatar',
                        {
                            borderRadius: string;
                            fontSize: string;
                            border: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            heightHuge: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                        },
                        any
                    >;
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'AvatarGroup',
                    {
                        gap: string;
                    },
                    {
                        Avatar: import('../../_mixins').Theme<
                            'Avatar',
                            {
                                borderRadius: string;
                                fontSize: string;
                                border: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                heightHuge: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'AvatarGroup',
                    {
                        gap: string;
                    },
                    {
                        Avatar: import('../../_mixins').Theme<
                            'Avatar',
                            {
                                borderRadius: string;
                                fontSize: string;
                                border: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                heightHuge: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
    },
    {
        mergedTheme: globalThis.ComputedRef<{
            common: {
                baseColor: string;
                primaryColor: string;
                primaryColorHover: string;
                primaryColorPressed: string;
                primaryColorSuppl: string;
                infoColor: string;
                infoColorHover: string;
                infoColorPressed: string;
                infoColorSuppl: string;
                successColor: string;
                successColorHover: string;
                successColorPressed: string;
                successColorSuppl: string;
                warningColor: string;
                warningColorHover: string;
                warningColorPressed: string;
                warningColorSuppl: string;
                errorColor: string;
                errorColorHover: string;
                errorColorPressed: string;
                errorColorSuppl: string;
                textColorBase: string;
                textColor1: string;
                textColor2: string;
                textColor3: string;
                textColor6: string;
                textColor7: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                iconColor: string;
                iconColorHover: string;
                iconColorPressed: string;
                iconColorDisabled: string;
                opacity1: string;
                opacity2: string;
                opacity3: string;
                opacity4: string;
                opacity5: string;
                dividerColor: string;
                borderColor: string;
                closeIconColor: string;
                closeIconColorHover: string;
                closeIconColorPressed: string;
                closeColorHover: string;
                closeColorPressed: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                scrollbarColor: string;
                scrollbarColorHover: string;
                scrollbarWidth: string;
                scrollbarHeight: string;
                scrollbarBorderRadius: string;
                progressRailColor: string;
                railColor: string;
                popoverColor: string;
                tableColor: string;
                cardColor: string;
                modalColor: string;
                bodyColor: string;
                tagColor: string;
                avatarColor: string;
                invertedColor: string;
                inputColor: string;
                codeColor: string;
                tabColor: string;
                actionColor: string;
                tableHeaderColor: string;
                hoverColor: string;
                tableColorHover: string;
                tableColorStriped: string;
                pressedColor: string;
                opacityDisabled: string;
                inputColorDisabled: string;
                buttonColor2: string;
                buttonColor2Hover: string;
                buttonColor2Pressed: string;
                boxShadow1: string;
                boxShadow2: string;
                boxShadow3: string;
                fontFamily: string;
                fontFamilyMono: string;
                fontWeight: string;
                fontWeightStrong: string;
                cubicBezierEaseInOut: string;
                cubicBezierEaseOut: string;
                cubicBezierEaseIn: string;
                borderRadius: string;
                borderRadiusSmall: string;
                fontSize: string;
                fontSizeMini: string;
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                fontSizeHuge: string;
                lineHeight: string;
                heightMini: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                heightHuge: string;
                name: 'common';
            };
            self: {
                gap: string;
            };
            peers: {
                Avatar: import('../../_mixins').Theme<
                    'Avatar',
                    {
                        borderRadius: string;
                        fontSize: string;
                        border: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        heightHuge: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                    },
                    any
                >;
            };
            peerOverrides: {
                Avatar?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        restOptions: globalThis.ComputedRef<AvatarGroupOption[] | undefined>;
        displayedOptions: globalThis.ComputedRef<AvatarGroupOption[]>;
        cssVars: globalThis.ComputedRef<{
            '--n-gap': string;
        }>;
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
            readonly max: NumberConstructor;
            readonly maxStyle: PropType<string | CSSProperties>;
            readonly options: {
                readonly type: PropType<AvatarGroupOption[]>;
                readonly default: () => never[];
            };
            readonly vertical: BooleanConstructor;
            readonly size: PropType<Size | undefined>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'AvatarGroup',
                    {
                        gap: string;
                    },
                    {
                        Avatar: import('../../_mixins').Theme<
                            'Avatar',
                            {
                                borderRadius: string;
                                fontSize: string;
                                border: string;
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                heightHuge: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                            },
                            any
                        >;
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'AvatarGroup',
                        {
                            gap: string;
                        },
                        {
                            Avatar: import('../../_mixins').Theme<
                                'Avatar',
                                {
                                    borderRadius: string;
                                    fontSize: string;
                                    border: string;
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    heightHuge: string;
                                    color: string;
                                    colorModal: string;
                                    colorPopover: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'AvatarGroup',
                        {
                            gap: string;
                        },
                        {
                            Avatar: import('../../_mixins').Theme<
                                'Avatar',
                                {
                                    borderRadius: string;
                                    fontSize: string;
                                    border: string;
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    heightHuge: string;
                                    color: string;
                                    colorModal: string;
                                    colorPopover: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly vertical: boolean;
        readonly options: AvatarGroupOption[];
    },
    {}
>;
export default _default;
