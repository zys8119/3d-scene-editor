import { PropType, CSSProperties } from 'vue';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type { ScrollbarProps } from '../../_internal';
export declare const layoutSiderProps: {
    readonly position: {
        readonly type: PropType<'static' | 'absolute'>;
        readonly default: 'static';
    };
    readonly bordered: BooleanConstructor;
    readonly collapsedWidth: {
        readonly type: NumberConstructor;
        readonly default: 48;
    };
    readonly width: {
        readonly type: PropType<string | number>;
        readonly default: 272;
    };
    readonly contentStyle: {
        readonly type: PropType<string | CSSProperties>;
        readonly default: '';
    };
    readonly collapseMode: {
        readonly type: PropType<'transform' | 'width'>;
        readonly default: 'transform';
    };
    readonly collapsed: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly defaultCollapsed: BooleanConstructor;
    readonly showCollapsedContent: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly showTrigger: {
        readonly type: PropType<boolean | 'bar' | 'arrow-circle'>;
        readonly default: false;
    };
    readonly nativeScrollbar: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly inverted: BooleanConstructor;
    readonly scrollbarProps: PropType<
        Partial<ScrollbarProps> & {
            style: CSSProperties;
        }
    >;
    readonly triggerStyle: PropType<string | CSSProperties>;
    readonly collapsedTriggerStyle: PropType<string | CSSProperties>;
    readonly 'onUpdate:collapsed': PropType<
        MaybeArray<(value: boolean) => void>
    >;
    readonly onUpdateCollapsed: PropType<MaybeArray<(value: boolean) => void>>;
    readonly onAfterEnter: PropType<() => void>;
    readonly onAfterLeave: PropType<() => void>;
    readonly onExpand: PropType<MaybeArray<() => void>>;
    readonly onCollapse: PropType<MaybeArray<() => void>>;
    readonly onScroll: PropType<(e: Event) => void>;
};
export type LayoutSiderProps = ExtractPublicPropTypes<typeof layoutSiderProps>;
declare const _default: import('vue').DefineComponent<
    {
        position: {
            readonly type: PropType<'static' | 'absolute'>;
            readonly default: 'static';
        };
        bordered: BooleanConstructor;
        collapsedWidth: {
            readonly type: NumberConstructor;
            readonly default: 48;
        };
        width: {
            readonly type: PropType<string | number>;
            readonly default: 272;
        };
        contentStyle: {
            readonly type: PropType<string | CSSProperties>;
            readonly default: '';
        };
        collapseMode: {
            readonly type: PropType<'transform' | 'width'>;
            readonly default: 'transform';
        };
        collapsed: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        defaultCollapsed: BooleanConstructor;
        showCollapsedContent: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        showTrigger: {
            readonly type: PropType<boolean | 'bar' | 'arrow-circle'>;
            readonly default: false;
        };
        nativeScrollbar: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        inverted: BooleanConstructor;
        scrollbarProps: PropType<
            Partial<ScrollbarProps> & {
                style: CSSProperties;
            }
        >;
        triggerStyle: PropType<string | CSSProperties>;
        collapsedTriggerStyle: PropType<string | CSSProperties>;
        'onUpdate:collapsed': PropType<MaybeArray<(value: boolean) => void>>;
        onUpdateCollapsed: PropType<MaybeArray<(value: boolean) => void>>;
        onAfterEnter: PropType<() => void>;
        onAfterLeave: PropType<() => void>;
        onExpand: PropType<MaybeArray<() => void>>;
        onCollapse: PropType<MaybeArray<() => void>>;
        onScroll: PropType<(e: Event) => void>;
        theme: PropType<
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
        themeOverrides: PropType<
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
        builtinThemeOverrides: PropType<
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
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
        styleMaxWidth: globalThis.ComputedRef<string>;
        mergedCollapsed: globalThis.ComputedRef<boolean>;
        scrollContainerStyle: globalThis.ComputedRef<CSSProperties>;
        siderPlacement: globalThis.ComputedRef<'left' | 'right'>;
        handleNativeElScroll: (e: Event) => void;
        handleTransitionend: (e: TransitionEvent) => void;
        handleTriggerClick: () => void;
        inlineThemeDisabled: boolean | undefined;
        cssVars: globalThis.ComputedRef<any>;
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
            position: {
                readonly type: PropType<'static' | 'absolute'>;
                readonly default: 'static';
            };
            bordered: BooleanConstructor;
            collapsedWidth: {
                readonly type: NumberConstructor;
                readonly default: 48;
            };
            width: {
                readonly type: PropType<string | number>;
                readonly default: 272;
            };
            contentStyle: {
                readonly type: PropType<string | CSSProperties>;
                readonly default: '';
            };
            collapseMode: {
                readonly type: PropType<'transform' | 'width'>;
                readonly default: 'transform';
            };
            collapsed: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            defaultCollapsed: BooleanConstructor;
            showCollapsedContent: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            showTrigger: {
                readonly type: PropType<boolean | 'bar' | 'arrow-circle'>;
                readonly default: false;
            };
            nativeScrollbar: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            inverted: BooleanConstructor;
            scrollbarProps: PropType<
                Partial<ScrollbarProps> & {
                    style: CSSProperties;
                }
            >;
            triggerStyle: PropType<string | CSSProperties>;
            collapsedTriggerStyle: PropType<string | CSSProperties>;
            'onUpdate:collapsed': PropType<
                MaybeArray<(value: boolean) => void>
            >;
            onUpdateCollapsed: PropType<MaybeArray<(value: boolean) => void>>;
            onAfterEnter: PropType<() => void>;
            onAfterLeave: PropType<() => void>;
            onExpand: PropType<MaybeArray<() => void>>;
            onCollapse: PropType<MaybeArray<() => void>>;
            onScroll: PropType<(e: Event) => void>;
            theme: PropType<
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
            themeOverrides: PropType<
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
            builtinThemeOverrides: PropType<
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
        width: string | number;
        bordered: boolean;
        contentStyle: string | CSSProperties;
        inverted: boolean;
        collapsed: boolean | undefined;
        showTrigger: boolean | 'bar' | 'arrow-circle';
        nativeScrollbar: boolean;
        collapsedWidth: number;
        collapseMode: 'transform' | 'width';
        defaultCollapsed: boolean;
        showCollapsedContent: boolean;
    },
    {}
>;
export default _default;
