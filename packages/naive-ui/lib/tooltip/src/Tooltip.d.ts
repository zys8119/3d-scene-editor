import type { PopoverInst } from '../../popover';
import type { ExtractPublicPropTypes } from '../../_utils';
export type TooltipInst = PopoverInst;
export declare const tooltipProps: {
    theme: globalThis.PropType<
        import('../../_mixins').Theme<
            'Tooltip',
            {
                borderRadius: string;
                boxShadow: string;
                color: string;
                textColor: string;
                padding: string;
            },
            {
                Popover: import('../../_mixins').Theme<
                    'Popover',
                    {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    },
                    any
                >;
            }
        >
    >;
    themeOverrides: globalThis.PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Tooltip',
                {
                    borderRadius: string;
                    boxShadow: string;
                    color: string;
                    textColor: string;
                    padding: string;
                },
                {
                    Popover: import('../../_mixins').Theme<
                        'Popover',
                        {
                            fontSize: string;
                            borderRadius: string;
                            color: string;
                            dividerColor: string;
                            textColor: string;
                            boxShadow: string;
                            space: string;
                            spaceArrow: string;
                            arrowOffset: string;
                            arrowOffsetVertical: string;
                            arrowHeight: string;
                            padding: string;
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
                'Tooltip',
                {
                    borderRadius: string;
                    boxShadow: string;
                    color: string;
                    textColor: string;
                    padding: string;
                },
                {
                    Popover: import('../../_mixins').Theme<
                        'Popover',
                        {
                            fontSize: string;
                            borderRadius: string;
                            color: string;
                            dividerColor: string;
                            textColor: string;
                            boxShadow: string;
                            space: string;
                            spaceArrow: string;
                            arrowOffset: string;
                            arrowOffsetVertical: string;
                            arrowHeight: string;
                            padding: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
    show: {
        type: globalThis.PropType<boolean | undefined>;
        default: undefined;
    };
    defaultShow: BooleanConstructor;
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    trigger: {
        type: globalThis.PropType<import('../../popover').PopoverTrigger>;
        default: string;
    };
    delay: {
        type: NumberConstructor;
        default: number;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    raw: BooleanConstructor;
    placement: {
        type: globalThis.PropType<
            import('vueuc/lib/binder/src/interface').Placement
        >;
        default: string;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    arrowPointToCenter: BooleanConstructor;
    disabled: BooleanConstructor;
    getDisabled: globalThis.PropType<() => boolean>;
    displayDirective: {
        type: globalThis.PropType<'show' | 'if'>;
        default: string;
    };
    arrowStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: globalThis.PropType<number | 'trigger'>;
        default: undefined;
    };
    overlap: BooleanConstructor;
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: NumberConstructor;
    to: {
        type: globalThis.PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    scrollable: BooleanConstructor;
    contentStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    headerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    footerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
    onClickoutside: globalThis.PropType<(e: MouseEvent) => void>;
    'onUpdate:show': globalThis.PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void>
    >;
    onUpdateShow: globalThis.PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void>
    >;
    internalDeactivateImmediately: BooleanConstructor;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: globalThis.PropType<
            import('../../popover/src/Popover').TriggerEventHandlers[]
        >;
        default: () => never[];
    };
    internalTrapFocus: BooleanConstructor;
    internalExtraClass: {
        type: globalThis.PropType<string[]>;
        default: () => never[];
    };
    onShow: globalThis.PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >;
    onHide: globalThis.PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >;
    arrow: {
        type: globalThis.PropType<boolean | undefined>;
        default: undefined;
    };
    minWidth: NumberConstructor;
    maxWidth: NumberConstructor;
};
export type TooltipProps = ExtractPublicPropTypes<typeof tooltipProps>;
declare const _default: import('vue').DefineComponent<
    {
        theme: globalThis.PropType<
            import('../../_mixins').Theme<
                'Tooltip',
                {
                    borderRadius: string;
                    boxShadow: string;
                    color: string;
                    textColor: string;
                    padding: string;
                },
                {
                    Popover: import('../../_mixins').Theme<
                        'Popover',
                        {
                            fontSize: string;
                            borderRadius: string;
                            color: string;
                            dividerColor: string;
                            textColor: string;
                            boxShadow: string;
                            space: string;
                            spaceArrow: string;
                            arrowOffset: string;
                            arrowOffsetVertical: string;
                            arrowHeight: string;
                            padding: string;
                        },
                        any
                    >;
                }
            >
        >;
        themeOverrides: globalThis.PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Tooltip',
                    {
                        borderRadius: string;
                        boxShadow: string;
                        color: string;
                        textColor: string;
                        padding: string;
                    },
                    {
                        Popover: import('../../_mixins').Theme<
                            'Popover',
                            {
                                fontSize: string;
                                borderRadius: string;
                                color: string;
                                dividerColor: string;
                                textColor: string;
                                boxShadow: string;
                                space: string;
                                spaceArrow: string;
                                arrowOffset: string;
                                arrowOffsetVertical: string;
                                arrowHeight: string;
                                padding: string;
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
                    'Tooltip',
                    {
                        borderRadius: string;
                        boxShadow: string;
                        color: string;
                        textColor: string;
                        padding: string;
                    },
                    {
                        Popover: import('../../_mixins').Theme<
                            'Popover',
                            {
                                fontSize: string;
                                borderRadius: string;
                                color: string;
                                dividerColor: string;
                                textColor: string;
                                boxShadow: string;
                                space: string;
                                spaceArrow: string;
                                arrowOffset: string;
                                arrowOffsetVertical: string;
                                arrowHeight: string;
                                padding: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
        show: {
            type: globalThis.PropType<boolean | undefined>;
            default: undefined;
        };
        defaultShow: BooleanConstructor;
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        trigger: {
            type: globalThis.PropType<import('../../popover').PopoverTrigger>;
            default: string;
        };
        delay: {
            type: NumberConstructor;
            default: number;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
        raw: BooleanConstructor;
        placement: {
            type: globalThis.PropType<
                import('vueuc/lib/binder/src/interface').Placement
            >;
            default: string;
        };
        x: NumberConstructor;
        y: NumberConstructor;
        arrowPointToCenter: BooleanConstructor;
        disabled: BooleanConstructor;
        getDisabled: globalThis.PropType<() => boolean>;
        displayDirective: {
            type: globalThis.PropType<'show' | 'if'>;
            default: string;
        };
        arrowStyle: globalThis.PropType<string | import('vue').CSSProperties>;
        flip: {
            type: BooleanConstructor;
            default: boolean;
        };
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        width: {
            type: globalThis.PropType<number | 'trigger'>;
            default: undefined;
        };
        overlap: BooleanConstructor;
        keepAliveOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: NumberConstructor;
        to: {
            type: globalThis.PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        scrollable: BooleanConstructor;
        contentStyle: globalThis.PropType<string | import('vue').CSSProperties>;
        headerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
        footerStyle: globalThis.PropType<string | import('vue').CSSProperties>;
        onClickoutside: globalThis.PropType<(e: MouseEvent) => void>;
        'onUpdate:show': globalThis.PropType<
            import('../../_utils').MaybeArray<(value: boolean) => void>
        >;
        onUpdateShow: globalThis.PropType<
            import('../../_utils').MaybeArray<(value: boolean) => void>
        >;
        internalDeactivateImmediately: BooleanConstructor;
        internalSyncTargetWithParent: BooleanConstructor;
        internalInheritedEventHandlers: {
            type: globalThis.PropType<
                import('../../popover/src/Popover').TriggerEventHandlers[]
            >;
            default: () => never[];
        };
        internalTrapFocus: BooleanConstructor;
        internalExtraClass: {
            type: globalThis.PropType<string[]>;
            default: () => never[];
        };
        onShow: globalThis.PropType<
            | import('../../_utils').MaybeArray<(value: boolean) => void>
            | undefined
        >;
        onHide: globalThis.PropType<
            | import('../../_utils').MaybeArray<(value: boolean) => void>
            | undefined
        >;
        arrow: {
            type: globalThis.PropType<boolean | undefined>;
            default: undefined;
        };
        minWidth: NumberConstructor;
        maxWidth: NumberConstructor;
    },
    {
        popoverRef: globalThis.Ref<{
            syncPosition: () => void;
            setShow: (value: boolean) => void;
        } | null>;
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
                borderRadius: string;
                boxShadow: string;
                color: string;
                textColor: string;
                padding: string;
            };
            peers: {
                Popover: import('../../_mixins').Theme<
                    'Popover',
                    {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    },
                    any
                >;
            };
            peerOverrides: {
                Popover?:
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
        popoverThemeOverrides: globalThis.ComputedRef<{
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }>;
        syncPosition: () => void;
        setShow: (value: boolean) => void;
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
            theme: globalThis.PropType<
                import('../../_mixins').Theme<
                    'Tooltip',
                    {
                        borderRadius: string;
                        boxShadow: string;
                        color: string;
                        textColor: string;
                        padding: string;
                    },
                    {
                        Popover: import('../../_mixins').Theme<
                            'Popover',
                            {
                                fontSize: string;
                                borderRadius: string;
                                color: string;
                                dividerColor: string;
                                textColor: string;
                                boxShadow: string;
                                space: string;
                                spaceArrow: string;
                                arrowOffset: string;
                                arrowOffsetVertical: string;
                                arrowHeight: string;
                                padding: string;
                            },
                            any
                        >;
                    }
                >
            >;
            themeOverrides: globalThis.PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Tooltip',
                        {
                            borderRadius: string;
                            boxShadow: string;
                            color: string;
                            textColor: string;
                            padding: string;
                        },
                        {
                            Popover: import('../../_mixins').Theme<
                                'Popover',
                                {
                                    fontSize: string;
                                    borderRadius: string;
                                    color: string;
                                    dividerColor: string;
                                    textColor: string;
                                    boxShadow: string;
                                    space: string;
                                    spaceArrow: string;
                                    arrowOffset: string;
                                    arrowOffsetVertical: string;
                                    arrowHeight: string;
                                    padding: string;
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
                        'Tooltip',
                        {
                            borderRadius: string;
                            boxShadow: string;
                            color: string;
                            textColor: string;
                            padding: string;
                        },
                        {
                            Popover: import('../../_mixins').Theme<
                                'Popover',
                                {
                                    fontSize: string;
                                    borderRadius: string;
                                    color: string;
                                    dividerColor: string;
                                    textColor: string;
                                    boxShadow: string;
                                    space: string;
                                    spaceArrow: string;
                                    arrowOffset: string;
                                    arrowOffsetVertical: string;
                                    arrowHeight: string;
                                    padding: string;
                                },
                                any
                            >;
                        }
                    >
                >
            >;
            show: {
                type: globalThis.PropType<boolean | undefined>;
                default: undefined;
            };
            defaultShow: BooleanConstructor;
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            trigger: {
                type: globalThis.PropType<
                    import('../../popover').PopoverTrigger
                >;
                default: string;
            };
            delay: {
                type: NumberConstructor;
                default: number;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
            raw: BooleanConstructor;
            placement: {
                type: globalThis.PropType<
                    import('vueuc/lib/binder/src/interface').Placement
                >;
                default: string;
            };
            x: NumberConstructor;
            y: NumberConstructor;
            arrowPointToCenter: BooleanConstructor;
            disabled: BooleanConstructor;
            getDisabled: globalThis.PropType<() => boolean>;
            displayDirective: {
                type: globalThis.PropType<'show' | 'if'>;
                default: string;
            };
            arrowStyle: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            flip: {
                type: BooleanConstructor;
                default: boolean;
            };
            animated: {
                type: BooleanConstructor;
                default: boolean;
            };
            width: {
                type: globalThis.PropType<number | 'trigger'>;
                default: undefined;
            };
            overlap: BooleanConstructor;
            keepAliveOnHover: {
                type: BooleanConstructor;
                default: boolean;
            };
            zIndex: NumberConstructor;
            to: {
                type: globalThis.PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            scrollable: BooleanConstructor;
            contentStyle: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            headerStyle: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            footerStyle: globalThis.PropType<
                string | import('vue').CSSProperties
            >;
            onClickoutside: globalThis.PropType<(e: MouseEvent) => void>;
            'onUpdate:show': globalThis.PropType<
                import('../../_utils').MaybeArray<(value: boolean) => void>
            >;
            onUpdateShow: globalThis.PropType<
                import('../../_utils').MaybeArray<(value: boolean) => void>
            >;
            internalDeactivateImmediately: BooleanConstructor;
            internalSyncTargetWithParent: BooleanConstructor;
            internalInheritedEventHandlers: {
                type: globalThis.PropType<
                    import('../../popover/src/Popover').TriggerEventHandlers[]
                >;
                default: () => never[];
            };
            internalTrapFocus: BooleanConstructor;
            internalExtraClass: {
                type: globalThis.PropType<string[]>;
                default: () => never[];
            };
            onShow: globalThis.PropType<
                | import('../../_utils').MaybeArray<(value: boolean) => void>
                | undefined
            >;
            onHide: globalThis.PropType<
                | import('../../_utils').MaybeArray<(value: boolean) => void>
                | undefined
            >;
            arrow: {
                type: globalThis.PropType<boolean | undefined>;
                default: undefined;
            };
            minWidth: NumberConstructor;
            maxWidth: NumberConstructor;
        }>
    >,
    {
        show: boolean | undefined;
        flip: boolean;
        width: number | 'trigger';
        disabled: boolean;
        duration: number;
        to: string | boolean | HTMLElement;
        raw: boolean;
        placement: import('vueuc/lib/binder/src/interface').Placement;
        overlap: boolean;
        scrollable: boolean;
        trigger: import('../../popover').PopoverTrigger;
        showArrow: boolean;
        delay: number;
        arrowPointToCenter: boolean;
        displayDirective: 'show' | 'if';
        keepAliveOnHover: boolean;
        internalDeactivateImmediately: boolean;
        animated: boolean;
        internalTrapFocus: boolean;
        defaultShow: boolean;
        internalSyncTargetWithParent: boolean;
        internalInheritedEventHandlers: import('../../popover/src/Popover').TriggerEventHandlers[];
        internalExtraClass: string[];
        arrow: boolean | undefined;
    },
    {}
>;
export default _default;
