import { PropType, ExtractPropTypes } from 'vue';
import type { PopoverTrigger } from '../../popover';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare const popselectProps: {
    multiple: BooleanConstructor;
    value: {
        readonly type: PropType<
            import('../../select/src/interface').Value | null
        >;
        readonly default: null;
    };
    cancelable: BooleanConstructor;
    options: {
        readonly type: PropType<
            import('../../select/src/interface').SelectMixedOption[]
        >;
        readonly default: () => never[];
    };
    size: {
        readonly type: PropType<import('./interface').PopselectSize>;
        readonly default: 'medium';
    };
    scrollable: BooleanConstructor;
    'onUpdate:value': PropType<
        import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
        >
    >;
    onUpdateValue: PropType<
        import('../../_utils').MaybeArray<
            import('../../select/src/interface').OnUpdateValue
        >
    >;
    onMouseenter: PropType<(e: MouseEvent) => void>;
    onMouseleave: PropType<(e: MouseEvent) => void>;
    renderLabel: PropType<
        import('../../_internal/select-menu/src/interface').RenderLabel
    >;
    showCheckmark: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    nodeProps: PropType<import('../..').SelectNodeProps>;
    virtualScroll: BooleanConstructor;
    onChange: PropType<
        | import('../../_utils').MaybeArray<
              import('../../select/src/interface').OnUpdateValue
          >
        | undefined
    >;
    placement: {
        default: string;
        type: PropType<import('vueuc/lib/binder/src/interface').Placement>;
    };
    trigger: {
        type: PropType<PopoverTrigger>;
        default: string;
    };
    show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    flip: {
        type: BooleanConstructor;
        default: boolean;
    };
    x: NumberConstructor;
    y: NumberConstructor;
    maxWidth: NumberConstructor;
    minWidth: NumberConstructor;
    width: {
        type: PropType<number | 'trigger'>;
        default: undefined;
    };
    zIndex: NumberConstructor;
    disabled: BooleanConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    raw: BooleanConstructor;
    overlap: BooleanConstructor;
    contentStyle: PropType<string | import('vue').CSSProperties>;
    arrowStyle: PropType<string | import('vue').CSSProperties>;
    delay: {
        type: NumberConstructor;
        default: number;
    };
    arrowPointToCenter: BooleanConstructor;
    displayDirective: {
        type: PropType<'show' | 'if'>;
        default: string;
    };
    keepAliveOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
    headerStyle: PropType<string | import('vue').CSSProperties>;
    footerStyle: PropType<string | import('vue').CSSProperties>;
    internalDeactivateImmediately: BooleanConstructor;
    animated: {
        type: BooleanConstructor;
        default: boolean;
    };
    onClickoutside: PropType<(e: MouseEvent) => void>;
    internalTrapFocus: BooleanConstructor;
    defaultShow: BooleanConstructor;
    getDisabled: PropType<() => boolean>;
    'onUpdate:show': PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void>
    >;
    onUpdateShow: PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void>
    >;
    internalSyncTargetWithParent: BooleanConstructor;
    internalInheritedEventHandlers: {
        type: PropType<
            import('../../popover/src/Popover').TriggerEventHandlers[]
        >;
        default: () => never[];
    };
    internalExtraClass: {
        type: PropType<string[]>;
        default: () => never[];
    };
    onShow: PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >;
    onHide: PropType<
        import('../../_utils').MaybeArray<(value: boolean) => void> | undefined
    >;
    theme: PropType<
        import('../../_mixins').Theme<
            'Popselect',
            {
                menuBoxShadow: string;
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
                InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                        optionFontSizeSmall: string;
                        optionFontSizeMedium: string;
                        optionFontSizeLarge: string;
                        optionFontSizeHuge: string;
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        color: string;
                        groupHeaderTextColor: string;
                        actionDividerColor: string;
                        optionTextColor: string;
                        optionTextColorPressed: string;
                        optionTextColorDisabled: string;
                        optionTextColorActive: string;
                        optionOpacityDisabled: string;
                        optionCheckColor: string;
                        optionColorPending: string;
                        optionColorActive: string;
                        optionColorActivePending: string;
                        actionTextColor: string;
                        loadingColor: string;
                        height: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        optionPaddingSmall: string;
                        optionPaddingMedium: string;
                        optionPaddingLarge: string;
                        optionPaddingHuge: string;
                        loadingSize: string;
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
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                    }
                >;
            }
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Popselect',
                {
                    menuBoxShadow: string;
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
                    InternalSelectMenu: import('../../_mixins').Theme<
                        'InternalSelectMenu',
                        {
                            optionFontSizeSmall: string;
                            optionFontSizeMedium: string;
                            optionFontSizeLarge: string;
                            optionFontSizeHuge: string;
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            color: string;
                            groupHeaderTextColor: string;
                            actionDividerColor: string;
                            optionTextColor: string;
                            optionTextColorPressed: string;
                            optionTextColorDisabled: string;
                            optionTextColorActive: string;
                            optionOpacityDisabled: string;
                            optionCheckColor: string;
                            optionColorPending: string;
                            optionColorActive: string;
                            optionColorActivePending: string;
                            actionTextColor: string;
                            loadingColor: string;
                            height: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            optionPaddingSmall: string;
                            optionPaddingMedium: string;
                            optionPaddingLarge: string;
                            optionPaddingHuge: string;
                            loadingSize: string;
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
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                }
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Popselect',
                {
                    menuBoxShadow: string;
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
                    InternalSelectMenu: import('../../_mixins').Theme<
                        'InternalSelectMenu',
                        {
                            optionFontSizeSmall: string;
                            optionFontSizeMedium: string;
                            optionFontSizeLarge: string;
                            optionFontSizeHuge: string;
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            color: string;
                            groupHeaderTextColor: string;
                            actionDividerColor: string;
                            optionTextColor: string;
                            optionTextColorPressed: string;
                            optionTextColorDisabled: string;
                            optionTextColorActive: string;
                            optionOpacityDisabled: string;
                            optionCheckColor: string;
                            optionColorPending: string;
                            optionColorActive: string;
                            optionColorActivePending: string;
                            actionTextColor: string;
                            loadingColor: string;
                            height: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            optionPaddingSmall: string;
                            optionPaddingMedium: string;
                            optionPaddingLarge: string;
                            optionPaddingHuge: string;
                            loadingSize: string;
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
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                }
            >
        >
    >;
};
export type PopselectSetupProps = ExtractPropTypes<typeof popselectProps>;
export type PopselectProps = ExtractPublicPropTypes<typeof popselectProps>;
declare const _default: import('vue').DefineComponent<
    {
        multiple: BooleanConstructor;
        value: {
            readonly type: PropType<
                import('../../select/src/interface').Value | null
            >;
            readonly default: null;
        };
        cancelable: BooleanConstructor;
        options: {
            readonly type: PropType<
                import('../../select/src/interface').SelectMixedOption[]
            >;
            readonly default: () => never[];
        };
        size: {
            readonly type: PropType<import('./interface').PopselectSize>;
            readonly default: 'medium';
        };
        scrollable: BooleanConstructor;
        'onUpdate:value': PropType<
            import('../../_utils').MaybeArray<
                import('../../select/src/interface').OnUpdateValue
            >
        >;
        onUpdateValue: PropType<
            import('../../_utils').MaybeArray<
                import('../../select/src/interface').OnUpdateValue
            >
        >;
        onMouseenter: PropType<(e: MouseEvent) => void>;
        onMouseleave: PropType<(e: MouseEvent) => void>;
        renderLabel: PropType<
            import('../../_internal/select-menu/src/interface').RenderLabel
        >;
        showCheckmark: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        nodeProps: PropType<import('../..').SelectNodeProps>;
        virtualScroll: BooleanConstructor;
        onChange: PropType<
            | import('../../_utils').MaybeArray<
                  import('../../select/src/interface').OnUpdateValue
              >
            | undefined
        >;
        placement: {
            default: string;
            type: PropType<import('vueuc/lib/binder/src/interface').Placement>;
        };
        trigger: {
            type: PropType<PopoverTrigger>;
            default: string;
        };
        show: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        flip: {
            type: BooleanConstructor;
            default: boolean;
        };
        x: NumberConstructor;
        y: NumberConstructor;
        maxWidth: NumberConstructor;
        minWidth: NumberConstructor;
        width: {
            type: PropType<number | 'trigger'>;
            default: undefined;
        };
        zIndex: NumberConstructor;
        disabled: BooleanConstructor;
        duration: {
            type: NumberConstructor;
            default: number;
        };
        to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        raw: BooleanConstructor;
        overlap: BooleanConstructor;
        contentStyle: PropType<string | import('vue').CSSProperties>;
        arrowStyle: PropType<string | import('vue').CSSProperties>;
        delay: {
            type: NumberConstructor;
            default: number;
        };
        arrowPointToCenter: BooleanConstructor;
        displayDirective: {
            type: PropType<'show' | 'if'>;
            default: string;
        };
        keepAliveOnHover: {
            type: BooleanConstructor;
            default: boolean;
        };
        headerStyle: PropType<string | import('vue').CSSProperties>;
        footerStyle: PropType<string | import('vue').CSSProperties>;
        internalDeactivateImmediately: BooleanConstructor;
        animated: {
            type: BooleanConstructor;
            default: boolean;
        };
        onClickoutside: PropType<(e: MouseEvent) => void>;
        internalTrapFocus: BooleanConstructor;
        defaultShow: BooleanConstructor;
        getDisabled: PropType<() => boolean>;
        'onUpdate:show': PropType<
            import('../../_utils').MaybeArray<(value: boolean) => void>
        >;
        onUpdateShow: PropType<
            import('../../_utils').MaybeArray<(value: boolean) => void>
        >;
        internalSyncTargetWithParent: BooleanConstructor;
        internalInheritedEventHandlers: {
            type: PropType<
                import('../../popover/src/Popover').TriggerEventHandlers[]
            >;
            default: () => never[];
        };
        internalExtraClass: {
            type: PropType<string[]>;
            default: () => never[];
        };
        onShow: PropType<
            | import('../../_utils').MaybeArray<(value: boolean) => void>
            | undefined
        >;
        onHide: PropType<
            | import('../../_utils').MaybeArray<(value: boolean) => void>
            | undefined
        >;
        theme: PropType<
            import('../../_mixins').Theme<
                'Popselect',
                {
                    menuBoxShadow: string;
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
                    InternalSelectMenu: import('../../_mixins').Theme<
                        'InternalSelectMenu',
                        {
                            optionFontSizeSmall: string;
                            optionFontSizeMedium: string;
                            optionFontSizeLarge: string;
                            optionFontSizeHuge: string;
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            color: string;
                            groupHeaderTextColor: string;
                            actionDividerColor: string;
                            optionTextColor: string;
                            optionTextColorPressed: string;
                            optionTextColorDisabled: string;
                            optionTextColorActive: string;
                            optionOpacityDisabled: string;
                            optionCheckColor: string;
                            optionColorPending: string;
                            optionColorActive: string;
                            optionColorActivePending: string;
                            actionTextColor: string;
                            loadingColor: string;
                            height: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            optionPaddingSmall: string;
                            optionPaddingMedium: string;
                            optionPaddingLarge: string;
                            optionPaddingHuge: string;
                            loadingSize: string;
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
                            Empty: import('../../_mixins').Theme<
                                'Empty',
                                {
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    textColor: string;
                                    iconColor: string;
                                    extraTextColor: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    iconSizeHuge: string;
                                },
                                any
                            >;
                        }
                    >;
                }
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Popselect',
                    {
                        menuBoxShadow: string;
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
                        InternalSelectMenu: import('../../_mixins').Theme<
                            'InternalSelectMenu',
                            {
                                optionFontSizeSmall: string;
                                optionFontSizeMedium: string;
                                optionFontSizeLarge: string;
                                optionFontSizeHuge: string;
                                optionHeightSmall: string;
                                optionHeightMedium: string;
                                optionHeightLarge: string;
                                optionHeightHuge: string;
                                borderRadius: string;
                                color: string;
                                groupHeaderTextColor: string;
                                actionDividerColor: string;
                                optionTextColor: string;
                                optionTextColorPressed: string;
                                optionTextColorDisabled: string;
                                optionTextColorActive: string;
                                optionOpacityDisabled: string;
                                optionCheckColor: string;
                                optionColorPending: string;
                                optionColorActive: string;
                                optionColorActivePending: string;
                                actionTextColor: string;
                                loadingColor: string;
                                height: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                optionPaddingSmall: string;
                                optionPaddingMedium: string;
                                optionPaddingLarge: string;
                                optionPaddingHuge: string;
                                loadingSize: string;
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
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                    }
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Popselect',
                    {
                        menuBoxShadow: string;
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
                        InternalSelectMenu: import('../../_mixins').Theme<
                            'InternalSelectMenu',
                            {
                                optionFontSizeSmall: string;
                                optionFontSizeMedium: string;
                                optionFontSizeLarge: string;
                                optionFontSizeHuge: string;
                                optionHeightSmall: string;
                                optionHeightMedium: string;
                                optionHeightLarge: string;
                                optionHeightHuge: string;
                                borderRadius: string;
                                color: string;
                                groupHeaderTextColor: string;
                                actionDividerColor: string;
                                optionTextColor: string;
                                optionTextColorPressed: string;
                                optionTextColorDisabled: string;
                                optionTextColorActive: string;
                                optionOpacityDisabled: string;
                                optionCheckColor: string;
                                optionColorPending: string;
                                optionColorActive: string;
                                optionColorActivePending: string;
                                actionTextColor: string;
                                loadingColor: string;
                                height: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                optionPaddingSmall: string;
                                optionPaddingMedium: string;
                                optionPaddingLarge: string;
                                optionPaddingHuge: string;
                                loadingSize: string;
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
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                    }
                >
            >
        >;
    },
    {
        popoverInstRef: globalThis.Ref<{
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
                menuBoxShadow: string;
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
                InternalSelectMenu: import('../../_mixins').Theme<
                    'InternalSelectMenu',
                    {
                        optionFontSizeSmall: string;
                        optionFontSizeMedium: string;
                        optionFontSizeLarge: string;
                        optionFontSizeHuge: string;
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        color: string;
                        groupHeaderTextColor: string;
                        actionDividerColor: string;
                        optionTextColor: string;
                        optionTextColorPressed: string;
                        optionTextColorDisabled: string;
                        optionTextColorActive: string;
                        optionOpacityDisabled: string;
                        optionCheckColor: string;
                        optionColorPending: string;
                        optionColorActive: string;
                        optionColorActivePending: string;
                        actionTextColor: string;
                        loadingColor: string;
                        height: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        optionPaddingSmall: string;
                        optionPaddingMedium: string;
                        optionPaddingLarge: string;
                        optionPaddingHuge: string;
                        loadingSize: string;
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
                        Empty: import('../../_mixins').Theme<
                            'Empty',
                            {
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                textColor: string;
                                iconColor: string;
                                extraTextColor: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                iconSizeHuge: string;
                            },
                            any
                        >;
                    }
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
                InternalSelectMenu?:
                    | {
                          peers?:
                              | {
                                    Scrollbar?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Scrollbar',
                                                  {
                                                      color: string;
                                                      colorHover: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                    Empty?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
                                                  'Empty',
                                                  {
                                                      fontSizeSmall: string;
                                                      fontSizeMedium: string;
                                                      fontSizeLarge: string;
                                                      fontSizeHuge: string;
                                                      textColor: string;
                                                      iconColor: string;
                                                      extraTextColor: string;
                                                      iconSizeSmall: string;
                                                      iconSizeMedium: string;
                                                      iconSizeLarge: string;
                                                      iconSizeHuge: string;
                                                  },
                                                  any
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
            };
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
        ExtractPropTypes<{
            multiple: BooleanConstructor;
            value: {
                readonly type: PropType<
                    import('../../select/src/interface').Value | null
                >;
                readonly default: null;
            };
            cancelable: BooleanConstructor;
            options: {
                readonly type: PropType<
                    import('../../select/src/interface').SelectMixedOption[]
                >;
                readonly default: () => never[];
            };
            size: {
                readonly type: PropType<import('./interface').PopselectSize>;
                readonly default: 'medium';
            };
            scrollable: BooleanConstructor;
            'onUpdate:value': PropType<
                import('../../_utils').MaybeArray<
                    import('../../select/src/interface').OnUpdateValue
                >
            >;
            onUpdateValue: PropType<
                import('../../_utils').MaybeArray<
                    import('../../select/src/interface').OnUpdateValue
                >
            >;
            onMouseenter: PropType<(e: MouseEvent) => void>;
            onMouseleave: PropType<(e: MouseEvent) => void>;
            renderLabel: PropType<
                import('../../_internal/select-menu/src/interface').RenderLabel
            >;
            showCheckmark: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            nodeProps: PropType<import('../..').SelectNodeProps>;
            virtualScroll: BooleanConstructor;
            onChange: PropType<
                | import('../../_utils').MaybeArray<
                      import('../../select/src/interface').OnUpdateValue
                  >
                | undefined
            >;
            placement: {
                default: string;
                type: PropType<
                    import('vueuc/lib/binder/src/interface').Placement
                >;
            };
            trigger: {
                type: PropType<PopoverTrigger>;
                default: string;
            };
            show: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            flip: {
                type: BooleanConstructor;
                default: boolean;
            };
            x: NumberConstructor;
            y: NumberConstructor;
            maxWidth: NumberConstructor;
            minWidth: NumberConstructor;
            width: {
                type: PropType<number | 'trigger'>;
                default: undefined;
            };
            zIndex: NumberConstructor;
            disabled: BooleanConstructor;
            duration: {
                type: NumberConstructor;
                default: number;
            };
            to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            raw: BooleanConstructor;
            overlap: BooleanConstructor;
            contentStyle: PropType<string | import('vue').CSSProperties>;
            arrowStyle: PropType<string | import('vue').CSSProperties>;
            delay: {
                type: NumberConstructor;
                default: number;
            };
            arrowPointToCenter: BooleanConstructor;
            displayDirective: {
                type: PropType<'show' | 'if'>;
                default: string;
            };
            keepAliveOnHover: {
                type: BooleanConstructor;
                default: boolean;
            };
            headerStyle: PropType<string | import('vue').CSSProperties>;
            footerStyle: PropType<string | import('vue').CSSProperties>;
            internalDeactivateImmediately: BooleanConstructor;
            animated: {
                type: BooleanConstructor;
                default: boolean;
            };
            onClickoutside: PropType<(e: MouseEvent) => void>;
            internalTrapFocus: BooleanConstructor;
            defaultShow: BooleanConstructor;
            getDisabled: PropType<() => boolean>;
            'onUpdate:show': PropType<
                import('../../_utils').MaybeArray<(value: boolean) => void>
            >;
            onUpdateShow: PropType<
                import('../../_utils').MaybeArray<(value: boolean) => void>
            >;
            internalSyncTargetWithParent: BooleanConstructor;
            internalInheritedEventHandlers: {
                type: PropType<
                    import('../../popover/src/Popover').TriggerEventHandlers[]
                >;
                default: () => never[];
            };
            internalExtraClass: {
                type: PropType<string[]>;
                default: () => never[];
            };
            onShow: PropType<
                | import('../../_utils').MaybeArray<(value: boolean) => void>
                | undefined
            >;
            onHide: PropType<
                | import('../../_utils').MaybeArray<(value: boolean) => void>
                | undefined
            >;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Popselect',
                    {
                        menuBoxShadow: string;
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
                        InternalSelectMenu: import('../../_mixins').Theme<
                            'InternalSelectMenu',
                            {
                                optionFontSizeSmall: string;
                                optionFontSizeMedium: string;
                                optionFontSizeLarge: string;
                                optionFontSizeHuge: string;
                                optionHeightSmall: string;
                                optionHeightMedium: string;
                                optionHeightLarge: string;
                                optionHeightHuge: string;
                                borderRadius: string;
                                color: string;
                                groupHeaderTextColor: string;
                                actionDividerColor: string;
                                optionTextColor: string;
                                optionTextColorPressed: string;
                                optionTextColorDisabled: string;
                                optionTextColorActive: string;
                                optionOpacityDisabled: string;
                                optionCheckColor: string;
                                optionColorPending: string;
                                optionColorActive: string;
                                optionColorActivePending: string;
                                actionTextColor: string;
                                loadingColor: string;
                                height: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                optionPaddingSmall: string;
                                optionPaddingMedium: string;
                                optionPaddingLarge: string;
                                optionPaddingHuge: string;
                                loadingSize: string;
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
                                Empty: import('../../_mixins').Theme<
                                    'Empty',
                                    {
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        fontSizeHuge: string;
                                        textColor: string;
                                        iconColor: string;
                                        extraTextColor: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        iconSizeHuge: string;
                                    },
                                    any
                                >;
                            }
                        >;
                    }
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Popselect',
                        {
                            menuBoxShadow: string;
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
                            InternalSelectMenu: import('../../_mixins').Theme<
                                'InternalSelectMenu',
                                {
                                    optionFontSizeSmall: string;
                                    optionFontSizeMedium: string;
                                    optionFontSizeLarge: string;
                                    optionFontSizeHuge: string;
                                    optionHeightSmall: string;
                                    optionHeightMedium: string;
                                    optionHeightLarge: string;
                                    optionHeightHuge: string;
                                    borderRadius: string;
                                    color: string;
                                    groupHeaderTextColor: string;
                                    actionDividerColor: string;
                                    optionTextColor: string;
                                    optionTextColorPressed: string;
                                    optionTextColorDisabled: string;
                                    optionTextColorActive: string;
                                    optionOpacityDisabled: string;
                                    optionCheckColor: string;
                                    optionColorPending: string;
                                    optionColorActive: string;
                                    optionColorActivePending: string;
                                    actionTextColor: string;
                                    loadingColor: string;
                                    height: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingHuge: string;
                                    optionPaddingSmall: string;
                                    optionPaddingMedium: string;
                                    optionPaddingLarge: string;
                                    optionPaddingHuge: string;
                                    loadingSize: string;
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
                                    Empty: import('../../_mixins').Theme<
                                        'Empty',
                                        {
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            fontSizeHuge: string;
                                            textColor: string;
                                            iconColor: string;
                                            extraTextColor: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            iconSizeHuge: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                        }
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Popselect',
                        {
                            menuBoxShadow: string;
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
                            InternalSelectMenu: import('../../_mixins').Theme<
                                'InternalSelectMenu',
                                {
                                    optionFontSizeSmall: string;
                                    optionFontSizeMedium: string;
                                    optionFontSizeLarge: string;
                                    optionFontSizeHuge: string;
                                    optionHeightSmall: string;
                                    optionHeightMedium: string;
                                    optionHeightLarge: string;
                                    optionHeightHuge: string;
                                    borderRadius: string;
                                    color: string;
                                    groupHeaderTextColor: string;
                                    actionDividerColor: string;
                                    optionTextColor: string;
                                    optionTextColorPressed: string;
                                    optionTextColorDisabled: string;
                                    optionTextColorActive: string;
                                    optionOpacityDisabled: string;
                                    optionCheckColor: string;
                                    optionColorPending: string;
                                    optionColorActive: string;
                                    optionColorActivePending: string;
                                    actionTextColor: string;
                                    loadingColor: string;
                                    height: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingHuge: string;
                                    optionPaddingSmall: string;
                                    optionPaddingMedium: string;
                                    optionPaddingLarge: string;
                                    optionPaddingHuge: string;
                                    loadingSize: string;
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
                                    Empty: import('../../_mixins').Theme<
                                        'Empty',
                                        {
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            fontSizeHuge: string;
                                            textColor: string;
                                            iconColor: string;
                                            extraTextColor: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            iconSizeHuge: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        value: import('../../select/src/interface').Value | null;
        size: import('./interface').PopselectSize;
        show: boolean | undefined;
        flip: boolean;
        width: number | 'trigger';
        multiple: boolean;
        disabled: boolean;
        duration: number;
        to: string | boolean | HTMLElement;
        options: import('../../select/src/interface').SelectMixedOption[];
        raw: boolean;
        placement: import('vueuc/lib/binder/src/interface').Placement;
        overlap: boolean;
        scrollable: boolean;
        trigger: PopoverTrigger;
        showCheckmark: boolean;
        virtualScroll: boolean;
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
        cancelable: boolean;
    },
    {}
>;
export default _default;
