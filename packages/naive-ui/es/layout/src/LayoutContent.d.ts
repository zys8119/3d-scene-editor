declare const _default: import('vue').DefineComponent<
    {
        embedded: BooleanConstructor;
        position: {
            readonly type: globalThis.PropType<'static' | 'absolute'>;
            readonly default: 'static';
        };
        nativeScrollbar: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        scrollbarProps: globalThis.PropType<
            Partial<import('../../_internal').ScrollbarProps>
        >;
        onScroll: globalThis.PropType<(e: Event) => void>;
        contentStyle: {
            readonly type: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            readonly default: '';
        };
        hasSider: BooleanConstructor;
        siderPlacement: {
            readonly type: globalThis.PropType<'left' | 'right'>;
            readonly default: 'left';
        };
        theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Layout',
                {
                    textColor: string;
                    textColorInverted: string;
                    color: string;
                    colorEmbedded: string;
                    headerColor: string;
                    headerColorInverted: string;
                    footerColor: string;
                    footerColorInverted: string;
                    headerBorderColor: string;
                    headerBorderColorInverted: string;
                    footerBorderColor: string;
                    footerBorderColorInverted: string;
                    siderBorderColor: string;
                    siderBorderColorInverted: string;
                    siderColor: string;
                    siderColorInverted: string;
                    siderToggleButtonBorder: string;
                    siderToggleButtonColor: string;
                    siderToggleButtonIconColor: string;
                    siderToggleButtonIconColorInverted: string;
                    siderToggleBarColor: string;
                    siderToggleBarColorHover: string;
                    __invertScrollbar: string;
                },
                {
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                }
            >
        >;
        themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Layout',
                    {
                        textColor: string;
                        textColorInverted: string;
                        color: string;
                        colorEmbedded: string;
                        headerColor: string;
                        headerColorInverted: string;
                        footerColor: string;
                        footerColorInverted: string;
                        headerBorderColor: string;
                        headerBorderColorInverted: string;
                        footerBorderColor: string;
                        footerBorderColorInverted: string;
                        siderBorderColor: string;
                        siderBorderColorInverted: string;
                        siderColor: string;
                        siderColorInverted: string;
                        siderToggleButtonBorder: string;
                        siderToggleButtonColor: string;
                        siderToggleButtonIconColor: string;
                        siderToggleButtonIconColorInverted: string;
                        siderToggleBarColor: string;
                        siderToggleBarColorHover: string;
                        __invertScrollbar: string;
                    },
                    {
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
        builtinThemeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Layout',
                    {
                        textColor: string;
                        textColorInverted: string;
                        color: string;
                        colorEmbedded: string;
                        headerColor: string;
                        headerColorInverted: string;
                        footerColor: string;
                        footerColorInverted: string;
                        headerBorderColor: string;
                        headerBorderColorInverted: string;
                        footerBorderColor: string;
                        footerBorderColorInverted: string;
                        siderBorderColor: string;
                        siderBorderColorInverted: string;
                        siderColor: string;
                        siderColorInverted: string;
                        siderToggleButtonBorder: string;
                        siderToggleButtonColor: string;
                        siderToggleButtonIconColor: string;
                        siderToggleButtonIconColorInverted: string;
                        siderToggleBarColor: string;
                        siderToggleBarColorHover: string;
                        __invertScrollbar: string;
                    },
                    {
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
    },
    {
        scrollTo: ((options: ScrollToOptions) => void) &
            ((x: number, y: number) => void);
        mergedClsPrefix: globalThis.ComputedRef<string>;
        scrollableElRef: globalThis.Ref<HTMLElement | null>;
        scrollbarInstRef: globalThis.Ref<{
            $el: HTMLElement;
            containerRef: HTMLElement | null;
            contentRef: HTMLElement | null;
            containerScrollTop: number;
            syncUnifiedContainer: () => void;
            scrollTo: import('../../_internal/scrollbar/src/Scrollbar').ScrollTo;
            scrollBy: import('../../_internal/scrollbar/src/Scrollbar').ScrollBy;
            sync: () => void;
            handleMouseEnterWrapper: () => void;
            handleMouseLeaveWrapper: () => void;
        } | null>;
        hasSiderStyle: import('vue').CSSProperties;
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
                textColor: string;
                textColorInverted: string;
                color: string;
                colorEmbedded: string;
                headerColor: string;
                headerColorInverted: string;
                footerColor: string;
                footerColorInverted: string;
                headerBorderColor: string;
                headerBorderColorInverted: string;
                footerBorderColor: string;
                footerBorderColorInverted: string;
                siderBorderColor: string;
                siderBorderColorInverted: string;
                siderColor: string;
                siderColorInverted: string;
                siderToggleButtonBorder: string;
                siderToggleButtonColor: string;
                siderToggleButtonIconColor: string;
                siderToggleButtonIconColorInverted: string;
                siderToggleBarColor: string;
                siderToggleBarColorHover: string;
                __invertScrollbar: string;
            };
            peers: {
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
            };
            peerOverrides: {
                Scrollbar?:
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
        handleNativeElScroll: (e: Event) => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-color': string;
                  '--n-text-color': string;
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
            embedded: BooleanConstructor;
            position: {
                readonly type: globalThis.PropType<'static' | 'absolute'>;
                readonly default: 'static';
            };
            nativeScrollbar: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            scrollbarProps: globalThis.PropType<
                Partial<import('../../_internal').ScrollbarProps>
            >;
            onScroll: globalThis.PropType<(e: Event) => void>;
            contentStyle: {
                readonly type: globalThis.PropType<
                    string | import('vue').CSSProperties
                >;
                readonly default: '';
            };
            hasSider: BooleanConstructor;
            siderPlacement: {
                readonly type: globalThis.PropType<'left' | 'right'>;
                readonly default: 'left';
            };
            theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Layout',
                    {
                        textColor: string;
                        textColorInverted: string;
                        color: string;
                        colorEmbedded: string;
                        headerColor: string;
                        headerColorInverted: string;
                        footerColor: string;
                        footerColorInverted: string;
                        headerBorderColor: string;
                        headerBorderColorInverted: string;
                        footerBorderColor: string;
                        footerBorderColorInverted: string;
                        siderBorderColor: string;
                        siderBorderColorInverted: string;
                        siderColor: string;
                        siderColorInverted: string;
                        siderToggleButtonBorder: string;
                        siderToggleButtonColor: string;
                        siderToggleButtonIconColor: string;
                        siderToggleButtonIconColorInverted: string;
                        siderToggleBarColor: string;
                        siderToggleBarColorHover: string;
                        __invertScrollbar: string;
                    },
                    {
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                    }
                >
            >;
            themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Layout',
                        {
                            textColor: string;
                            textColorInverted: string;
                            color: string;
                            colorEmbedded: string;
                            headerColor: string;
                            headerColorInverted: string;
                            footerColor: string;
                            footerColorInverted: string;
                            headerBorderColor: string;
                            headerBorderColorInverted: string;
                            footerBorderColor: string;
                            footerBorderColorInverted: string;
                            siderBorderColor: string;
                            siderBorderColorInverted: string;
                            siderColor: string;
                            siderColorInverted: string;
                            siderToggleButtonBorder: string;
                            siderToggleButtonColor: string;
                            siderToggleButtonIconColor: string;
                            siderToggleButtonIconColorInverted: string;
                            siderToggleBarColor: string;
                            siderToggleBarColorHover: string;
                            __invertScrollbar: string;
                        },
                        {
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
            builtinThemeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Layout',
                        {
                            textColor: string;
                            textColorInverted: string;
                            color: string;
                            colorEmbedded: string;
                            headerColor: string;
                            headerColorInverted: string;
                            footerColor: string;
                            footerColorInverted: string;
                            headerBorderColor: string;
                            headerBorderColorInverted: string;
                            footerBorderColor: string;
                            footerBorderColorInverted: string;
                            siderBorderColor: string;
                            siderBorderColorInverted: string;
                            siderColor: string;
                            siderColorInverted: string;
                            siderToggleButtonBorder: string;
                            siderToggleButtonColor: string;
                            siderToggleButtonIconColor: string;
                            siderToggleButtonIconColorInverted: string;
                            siderToggleBarColor: string;
                            siderToggleBarColorHover: string;
                            __invertScrollbar: string;
                        },
                        {
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
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
        position: 'static' | 'absolute';
        contentStyle: string | import('vue').CSSProperties;
        embedded: boolean;
        nativeScrollbar: boolean;
        hasSider: boolean;
        siderPlacement: 'left' | 'right';
    },
    {}
>;
export default _default;
