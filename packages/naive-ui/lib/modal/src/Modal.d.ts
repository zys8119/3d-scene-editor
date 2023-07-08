import { PropType, CSSProperties } from 'vue';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
export declare const modalProps: {
    onEsc: PropType<() => void>;
    'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
    onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
    onAfterEnter: PropType<() => void>;
    onBeforeLeave: PropType<() => void>;
    onAfterLeave: PropType<() => void>;
    onClose: PropType<() => Promise<boolean> | boolean | any>;
    onPositiveClick: PropType<() => Promise<boolean> | boolean | any>;
    onNegativeClick: PropType<() => Promise<boolean> | boolean | any>;
    onMaskClick: PropType<(e: MouseEvent) => void>;
    internalDialog: BooleanConstructor;
    internalAppear: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    overlayStyle: PropType<string | CSSProperties>;
    onBeforeHide: PropType<() => void>;
    onAfterHide: PropType<() => void>;
    onHide: PropType<(value: false) => void>;
    icon: PropType<() => import('vue').VNodeChild>;
    type: {
        readonly type: PropType<
            'default' | 'error' | 'info' | 'success' | 'warning'
        >;
        readonly default: 'default';
    };
    title: PropType<string | (() => import('vue').VNodeChild)>;
    closable: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    negativeText: StringConstructor;
    positiveText: StringConstructor;
    positiveButtonProps: PropType<import('../..').ButtonProps>;
    negativeButtonProps: PropType<import('../..').ButtonProps>;
    content: PropType<string | (() => import('vue').VNodeChild)>;
    action: PropType<() => import('vue').VNodeChild>;
    showIcon: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    loading: BooleanConstructor;
    bordered: BooleanConstructor;
    iconPlacement: PropType<import('../../dialog/src/interface').IconPlacement>;
    contentStyle: PropType<string | CSSProperties>;
    headerStyle: PropType<string | CSSProperties>;
    headerExtraStyle: PropType<string | CSSProperties>;
    footerStyle: PropType<string | CSSProperties>;
    embedded: BooleanConstructor;
    segmented: {
        readonly type: PropType<boolean | import('../..').CardSegmented>;
        readonly default: false;
    };
    size: {
        readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
        readonly default: 'medium';
    };
    hoverable: BooleanConstructor;
    role: StringConstructor;
    tag: {
        readonly type: PropType<keyof HTMLElementTagNameMap>;
        readonly default: 'div';
    };
    show: BooleanConstructor;
    unstableShowMask: {
        type: BooleanConstructor;
        default: boolean;
    };
    maskClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    preset: PropType<'dialog' | 'confirm' | 'card'>;
    to: PropType<string | HTMLElement>;
    displayDirective: {
        type: PropType<'show' | 'if'>;
        default: string;
    };
    transformOrigin: {
        type: PropType<'center' | 'mouse'>;
        default: string;
    };
    zIndex: NumberConstructor;
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    trapFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnEsc: {
        type: BooleanConstructor;
        default: boolean;
    };
    blockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    theme: PropType<
        import('../../_mixins').Theme<
            'Modal',
            {
                color: string;
                textColor: string;
                boxShadow: string;
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
                Dialog: import('../../_mixins').Theme<
                    'Dialog',
                    {
                        fontSize: string;
                        lineHeight: string;
                        border: string;
                        titleTextColor: string;
                        textColor: string;
                        color: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        closeBorderRadius: string;
                        iconColor: string;
                        iconColorInfo: string;
                        iconColorSuccess: string;
                        iconColorWarning: string;
                        iconColorError: string;
                        borderRadius: string;
                        titleFontWeight: string;
                        titleFontSize: string;
                        padding: string;
                        iconSize: string;
                        actionSpace: string;
                        contentMargin: string;
                        iconMargin: string;
                        iconMarginIconTop: string;
                        closeSize: string;
                        closeIconSize: string;
                        closeMargin: string;
                        closeMarginIconTop: string;
                    },
                    {
                        Button: import('../../_mixins').Theme<
                            'Button',
                            {
                                heightTiny: string;
                                heightSmall: string;
                                heightMedium: string;
                                heightLarge: string;
                                borderRadiusTiny: string;
                                borderRadiusSmall: string;
                                borderRadiusMedium: string;
                                borderRadiusLarge: string;
                                fontSizeTiny: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                opacityDisabled: string;
                                colorOpacitySecondary: string;
                                colorOpacitySecondaryHover: string;
                                colorOpacitySecondaryPressed: string;
                                colorSecondary: string;
                                colorSecondaryHover: string;
                                colorSecondaryPressed: string;
                                colorTertiary: string;
                                colorTertiaryHover: string;
                                colorTertiaryPressed: string;
                                colorQuaternary: string;
                                colorQuaternaryHover: string;
                                colorQuaternaryPressed: string;
                                color: string;
                                colorHover: string;
                                colorPressed: string;
                                colorFocus: string;
                                colorDisabled: string;
                                textColor: string;
                                textColorTertiary: string;
                                textColorHover: string;
                                textColorPressed: string;
                                textColorFocus: string;
                                textColorDisabled: string;
                                textColorText: string;
                                textColorTextHover: string;
                                textColorTextPressed: string;
                                textColorTextFocus: string;
                                textColorTextDisabled: string;
                                textColorGhost: string;
                                textColorGhostHover: string;
                                textColorGhostPressed: string;
                                textColorGhostFocus: string;
                                textColorGhostDisabled: string;
                                border: string;
                                borderHover: string;
                                borderPressed: string;
                                borderFocus: string;
                                borderDisabled: string;
                                rippleColor: string;
                                colorPrimary: string;
                                colorHoverPrimary: string;
                                colorPressedPrimary: string;
                                colorFocusPrimary: string;
                                colorDisabledPrimary: string;
                                textColorPrimary: string;
                                textColorHoverPrimary: string;
                                textColorPressedPrimary: string;
                                textColorFocusPrimary: string;
                                textColorDisabledPrimary: string;
                                textColorTextPrimary: string;
                                textColorTextHoverPrimary: string;
                                textColorTextPressedPrimary: string;
                                textColorTextFocusPrimary: string;
                                textColorTextDisabledPrimary: string;
                                textColorGhostPrimary: string;
                                textColorGhostHoverPrimary: string;
                                textColorGhostPressedPrimary: string;
                                textColorGhostFocusPrimary: string;
                                textColorGhostDisabledPrimary: string;
                                borderPrimary: string;
                                borderHoverPrimary: string;
                                borderPressedPrimary: string;
                                borderFocusPrimary: string;
                                borderDisabledPrimary: string;
                                rippleColorPrimary: string;
                                colorInfo: string;
                                colorHoverInfo: string;
                                colorPressedInfo: string;
                                colorFocusInfo: string;
                                colorDisabledInfo: string;
                                textColorInfo: string;
                                textColorHoverInfo: string;
                                textColorPressedInfo: string;
                                textColorFocusInfo: string;
                                textColorDisabledInfo: string;
                                textColorTextInfo: string;
                                textColorTextHoverInfo: string;
                                textColorTextPressedInfo: string;
                                textColorTextFocusInfo: string;
                                textColorTextDisabledInfo: string;
                                textColorGhostInfo: string;
                                textColorGhostHoverInfo: string;
                                textColorGhostPressedInfo: string;
                                textColorGhostFocusInfo: string;
                                textColorGhostDisabledInfo: string;
                                borderInfo: string;
                                borderHoverInfo: string;
                                borderPressedInfo: string;
                                borderFocusInfo: string;
                                borderDisabledInfo: string;
                                rippleColorInfo: string;
                                colorSuccess: string;
                                colorHoverSuccess: string;
                                colorPressedSuccess: string;
                                colorFocusSuccess: string;
                                colorDisabledSuccess: string;
                                textColorSuccess: string;
                                textColorHoverSuccess: string;
                                textColorPressedSuccess: string;
                                textColorFocusSuccess: string;
                                textColorDisabledSuccess: string;
                                textColorTextSuccess: string;
                                textColorTextHoverSuccess: string;
                                textColorTextPressedSuccess: string;
                                textColorTextFocusSuccess: string;
                                textColorTextDisabledSuccess: string;
                                textColorGhostSuccess: string;
                                textColorGhostHoverSuccess: string;
                                textColorGhostPressedSuccess: string;
                                textColorGhostFocusSuccess: string;
                                textColorGhostDisabledSuccess: string;
                                borderSuccess: string;
                                borderHoverSuccess: string;
                                borderPressedSuccess: string;
                                borderFocusSuccess: string;
                                borderDisabledSuccess: string;
                                rippleColorSuccess: string;
                                colorWarning: string;
                                colorHoverWarning: string;
                                colorPressedWarning: string;
                                colorFocusWarning: string;
                                colorDisabledWarning: string;
                                textColorWarning: string;
                                textColorHoverWarning: string;
                                textColorPressedWarning: string;
                                textColorFocusWarning: string;
                                textColorDisabledWarning: string;
                                textColorTextWarning: string;
                                textColorTextHoverWarning: string;
                                textColorTextPressedWarning: string;
                                textColorTextFocusWarning: string;
                                textColorTextDisabledWarning: string;
                                textColorGhostWarning: string;
                                textColorGhostHoverWarning: string;
                                textColorGhostPressedWarning: string;
                                textColorGhostFocusWarning: string;
                                textColorGhostDisabledWarning: string;
                                borderWarning: string;
                                borderHoverWarning: string;
                                borderPressedWarning: string;
                                borderFocusWarning: string;
                                borderDisabledWarning: string;
                                rippleColorWarning: string;
                                colorError: string;
                                colorHoverError: string;
                                colorPressedError: string;
                                colorFocusError: string;
                                colorDisabledError: string;
                                textColorError: string;
                                textColorHoverError: string;
                                textColorPressedError: string;
                                textColorFocusError: string;
                                textColorDisabledError: string;
                                textColorTextError: string;
                                textColorTextHoverError: string;
                                textColorTextPressedError: string;
                                textColorTextFocusError: string;
                                textColorTextDisabledError: string;
                                textColorGhostError: string;
                                textColorGhostHoverError: string;
                                textColorGhostPressedError: string;
                                textColorGhostFocusError: string;
                                textColorGhostDisabledError: string;
                                borderError: string;
                                borderHoverError: string;
                                borderPressedError: string;
                                borderFocusError: string;
                                borderDisabledError: string;
                                rippleColorError: string;
                                waveOpacity: string;
                                fontWeight: string;
                                fontWeightStrong: string;
                                paddingTiny: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingRoundTiny: string;
                                paddingRoundSmall: string;
                                paddingRoundMedium: string;
                                paddingRoundLarge: string;
                                iconMarginTiny: string;
                                iconMarginSmall: string;
                                iconMarginMedium: string;
                                iconMarginLarge: string;
                                iconSizeTiny: string;
                                iconSizeSmall: string;
                                iconSizeMedium: string;
                                iconSizeLarge: string;
                                rippleDuration: string;
                            },
                            any
                        >;
                    }
                >;
                Card: import('../../_mixins').Theme<
                    'Card',
                    {
                        lineHeight: string;
                        color: string;
                        colorModal: string;
                        colorPopover: string;
                        colorTarget: string;
                        colorEmbedded: string;
                        colorEmbeddedModal: string;
                        colorEmbeddedPopover: string;
                        textColor: string;
                        titleTextColor: string;
                        borderColor: string;
                        actionColor: string;
                        titleFontWeight: string;
                        closeColorHover: string;
                        closeColorPressed: string;
                        closeBorderRadius: string;
                        closeIconColor: string;
                        closeIconColorHover: string;
                        closeIconColorPressed: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        boxShadow: string;
                        borderRadius: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        paddingHuge: string;
                        titleFontSizeSmall: string;
                        titleFontSizeMedium: string;
                        titleFontSizeLarge: string;
                        titleFontSizeHuge: string;
                        closeIconSize: string;
                        closeSize: string;
                    },
                    any
                >;
            }
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Modal',
                {
                    color: string;
                    textColor: string;
                    boxShadow: string;
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
                    Dialog: import('../../_mixins').Theme<
                        'Dialog',
                        {
                            fontSize: string;
                            lineHeight: string;
                            border: string;
                            titleTextColor: string;
                            textColor: string;
                            color: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeBorderRadius: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            borderRadius: string;
                            titleFontWeight: string;
                            titleFontSize: string;
                            padding: string;
                            iconSize: string;
                            actionSpace: string;
                            contentMargin: string;
                            iconMargin: string;
                            iconMarginIconTop: string;
                            closeSize: string;
                            closeIconSize: string;
                            closeMargin: string;
                            closeMarginIconTop: string;
                        },
                        {
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                        }
                    >;
                    Card: import('../../_mixins').Theme<
                        'Card',
                        {
                            lineHeight: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                            colorTarget: string;
                            colorEmbedded: string;
                            colorEmbeddedModal: string;
                            colorEmbeddedPopover: string;
                            textColor: string;
                            titleTextColor: string;
                            borderColor: string;
                            actionColor: string;
                            titleFontWeight: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            boxShadow: string;
                            borderRadius: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            closeIconSize: string;
                            closeSize: string;
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
                'Modal',
                {
                    color: string;
                    textColor: string;
                    boxShadow: string;
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
                    Dialog: import('../../_mixins').Theme<
                        'Dialog',
                        {
                            fontSize: string;
                            lineHeight: string;
                            border: string;
                            titleTextColor: string;
                            textColor: string;
                            color: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeBorderRadius: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            borderRadius: string;
                            titleFontWeight: string;
                            titleFontSize: string;
                            padding: string;
                            iconSize: string;
                            actionSpace: string;
                            contentMargin: string;
                            iconMargin: string;
                            iconMarginIconTop: string;
                            closeSize: string;
                            closeIconSize: string;
                            closeMargin: string;
                            closeMarginIconTop: string;
                        },
                        {
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                        }
                    >;
                    Card: import('../../_mixins').Theme<
                        'Card',
                        {
                            lineHeight: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                            colorTarget: string;
                            colorEmbedded: string;
                            colorEmbeddedModal: string;
                            colorEmbeddedPopover: string;
                            textColor: string;
                            titleTextColor: string;
                            borderColor: string;
                            actionColor: string;
                            titleFontWeight: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            boxShadow: string;
                            borderRadius: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            closeIconSize: string;
                            closeSize: string;
                        },
                        any
                    >;
                }
            >
        >
    >;
};
export type ModalProps = ExtractPublicPropTypes<typeof modalProps>;
declare const _default: import('vue').DefineComponent<
    {
        onEsc: PropType<() => void>;
        'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
        onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
        onAfterEnter: PropType<() => void>;
        onBeforeLeave: PropType<() => void>;
        onAfterLeave: PropType<() => void>;
        onClose: PropType<() => any>;
        onPositiveClick: PropType<() => any>;
        onNegativeClick: PropType<() => any>;
        onMaskClick: PropType<(e: MouseEvent) => void>;
        internalDialog: BooleanConstructor;
        internalAppear: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        overlayStyle: PropType<string | CSSProperties>;
        onBeforeHide: PropType<() => void>;
        onAfterHide: PropType<() => void>;
        onHide: PropType<(value: false) => void>;
        icon: PropType<() => import('vue').VNodeChild>;
        type: {
            readonly type: PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        title: PropType<string | (() => import('vue').VNodeChild)>;
        closable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        negativeText: StringConstructor;
        positiveText: StringConstructor;
        positiveButtonProps: PropType<import('../..').ButtonProps>;
        negativeButtonProps: PropType<import('../..').ButtonProps>;
        content: PropType<string | (() => import('vue').VNodeChild)>;
        action: PropType<() => import('vue').VNodeChild>;
        showIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        loading: BooleanConstructor;
        bordered: BooleanConstructor;
        iconPlacement: PropType<
            import('../../dialog/src/interface').IconPlacement
        >;
        contentStyle: PropType<string | CSSProperties>;
        headerStyle: PropType<string | CSSProperties>;
        headerExtraStyle: PropType<string | CSSProperties>;
        footerStyle: PropType<string | CSSProperties>;
        embedded: BooleanConstructor;
        segmented: {
            readonly type: PropType<boolean | import('../..').CardSegmented>;
            readonly default: false;
        };
        size: {
            readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
            readonly default: 'medium';
        };
        hoverable: BooleanConstructor;
        role: StringConstructor;
        tag: {
            readonly type: PropType<keyof HTMLElementTagNameMap>;
            readonly default: 'div';
        };
        show: BooleanConstructor;
        unstableShowMask: {
            type: BooleanConstructor;
            default: boolean;
        };
        maskClosable: {
            type: BooleanConstructor;
            default: boolean;
        };
        preset: PropType<'dialog' | 'confirm' | 'card'>;
        to: PropType<string | HTMLElement>;
        displayDirective: {
            type: PropType<'show' | 'if'>;
            default: string;
        };
        transformOrigin: {
            type: PropType<'center' | 'mouse'>;
            default: string;
        };
        zIndex: NumberConstructor;
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        trapFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnEsc: {
            type: BooleanConstructor;
            default: boolean;
        };
        blockScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        theme: PropType<
            import('../../_mixins').Theme<
                'Modal',
                {
                    color: string;
                    textColor: string;
                    boxShadow: string;
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
                    Dialog: import('../../_mixins').Theme<
                        'Dialog',
                        {
                            fontSize: string;
                            lineHeight: string;
                            border: string;
                            titleTextColor: string;
                            textColor: string;
                            color: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            closeBorderRadius: string;
                            iconColor: string;
                            iconColorInfo: string;
                            iconColorSuccess: string;
                            iconColorWarning: string;
                            iconColorError: string;
                            borderRadius: string;
                            titleFontWeight: string;
                            titleFontSize: string;
                            padding: string;
                            iconSize: string;
                            actionSpace: string;
                            contentMargin: string;
                            iconMargin: string;
                            iconMarginIconTop: string;
                            closeSize: string;
                            closeIconSize: string;
                            closeMargin: string;
                            closeMarginIconTop: string;
                        },
                        {
                            Button: import('../../_mixins').Theme<
                                'Button',
                                {
                                    heightTiny: string;
                                    heightSmall: string;
                                    heightMedium: string;
                                    heightLarge: string;
                                    borderRadiusTiny: string;
                                    borderRadiusSmall: string;
                                    borderRadiusMedium: string;
                                    borderRadiusLarge: string;
                                    fontSizeTiny: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    opacityDisabled: string;
                                    colorOpacitySecondary: string;
                                    colorOpacitySecondaryHover: string;
                                    colorOpacitySecondaryPressed: string;
                                    colorSecondary: string;
                                    colorSecondaryHover: string;
                                    colorSecondaryPressed: string;
                                    colorTertiary: string;
                                    colorTertiaryHover: string;
                                    colorTertiaryPressed: string;
                                    colorQuaternary: string;
                                    colorQuaternaryHover: string;
                                    colorQuaternaryPressed: string;
                                    color: string;
                                    colorHover: string;
                                    colorPressed: string;
                                    colorFocus: string;
                                    colorDisabled: string;
                                    textColor: string;
                                    textColorTertiary: string;
                                    textColorHover: string;
                                    textColorPressed: string;
                                    textColorFocus: string;
                                    textColorDisabled: string;
                                    textColorText: string;
                                    textColorTextHover: string;
                                    textColorTextPressed: string;
                                    textColorTextFocus: string;
                                    textColorTextDisabled: string;
                                    textColorGhost: string;
                                    textColorGhostHover: string;
                                    textColorGhostPressed: string;
                                    textColorGhostFocus: string;
                                    textColorGhostDisabled: string;
                                    border: string;
                                    borderHover: string;
                                    borderPressed: string;
                                    borderFocus: string;
                                    borderDisabled: string;
                                    rippleColor: string;
                                    colorPrimary: string;
                                    colorHoverPrimary: string;
                                    colorPressedPrimary: string;
                                    colorFocusPrimary: string;
                                    colorDisabledPrimary: string;
                                    textColorPrimary: string;
                                    textColorHoverPrimary: string;
                                    textColorPressedPrimary: string;
                                    textColorFocusPrimary: string;
                                    textColorDisabledPrimary: string;
                                    textColorTextPrimary: string;
                                    textColorTextHoverPrimary: string;
                                    textColorTextPressedPrimary: string;
                                    textColorTextFocusPrimary: string;
                                    textColorTextDisabledPrimary: string;
                                    textColorGhostPrimary: string;
                                    textColorGhostHoverPrimary: string;
                                    textColorGhostPressedPrimary: string;
                                    textColorGhostFocusPrimary: string;
                                    textColorGhostDisabledPrimary: string;
                                    borderPrimary: string;
                                    borderHoverPrimary: string;
                                    borderPressedPrimary: string;
                                    borderFocusPrimary: string;
                                    borderDisabledPrimary: string;
                                    rippleColorPrimary: string;
                                    colorInfo: string;
                                    colorHoverInfo: string;
                                    colorPressedInfo: string;
                                    colorFocusInfo: string;
                                    colorDisabledInfo: string;
                                    textColorInfo: string;
                                    textColorHoverInfo: string;
                                    textColorPressedInfo: string;
                                    textColorFocusInfo: string;
                                    textColorDisabledInfo: string;
                                    textColorTextInfo: string;
                                    textColorTextHoverInfo: string;
                                    textColorTextPressedInfo: string;
                                    textColorTextFocusInfo: string;
                                    textColorTextDisabledInfo: string;
                                    textColorGhostInfo: string;
                                    textColorGhostHoverInfo: string;
                                    textColorGhostPressedInfo: string;
                                    textColorGhostFocusInfo: string;
                                    textColorGhostDisabledInfo: string;
                                    borderInfo: string;
                                    borderHoverInfo: string;
                                    borderPressedInfo: string;
                                    borderFocusInfo: string;
                                    borderDisabledInfo: string;
                                    rippleColorInfo: string;
                                    colorSuccess: string;
                                    colorHoverSuccess: string;
                                    colorPressedSuccess: string;
                                    colorFocusSuccess: string;
                                    colorDisabledSuccess: string;
                                    textColorSuccess: string;
                                    textColorHoverSuccess: string;
                                    textColorPressedSuccess: string;
                                    textColorFocusSuccess: string;
                                    textColorDisabledSuccess: string;
                                    textColorTextSuccess: string;
                                    textColorTextHoverSuccess: string;
                                    textColorTextPressedSuccess: string;
                                    textColorTextFocusSuccess: string;
                                    textColorTextDisabledSuccess: string;
                                    textColorGhostSuccess: string;
                                    textColorGhostHoverSuccess: string;
                                    textColorGhostPressedSuccess: string;
                                    textColorGhostFocusSuccess: string;
                                    textColorGhostDisabledSuccess: string;
                                    borderSuccess: string;
                                    borderHoverSuccess: string;
                                    borderPressedSuccess: string;
                                    borderFocusSuccess: string;
                                    borderDisabledSuccess: string;
                                    rippleColorSuccess: string;
                                    colorWarning: string;
                                    colorHoverWarning: string;
                                    colorPressedWarning: string;
                                    colorFocusWarning: string;
                                    colorDisabledWarning: string;
                                    textColorWarning: string;
                                    textColorHoverWarning: string;
                                    textColorPressedWarning: string;
                                    textColorFocusWarning: string;
                                    textColorDisabledWarning: string;
                                    textColorTextWarning: string;
                                    textColorTextHoverWarning: string;
                                    textColorTextPressedWarning: string;
                                    textColorTextFocusWarning: string;
                                    textColorTextDisabledWarning: string;
                                    textColorGhostWarning: string;
                                    textColorGhostHoverWarning: string;
                                    textColorGhostPressedWarning: string;
                                    textColorGhostFocusWarning: string;
                                    textColorGhostDisabledWarning: string;
                                    borderWarning: string;
                                    borderHoverWarning: string;
                                    borderPressedWarning: string;
                                    borderFocusWarning: string;
                                    borderDisabledWarning: string;
                                    rippleColorWarning: string;
                                    colorError: string;
                                    colorHoverError: string;
                                    colorPressedError: string;
                                    colorFocusError: string;
                                    colorDisabledError: string;
                                    textColorError: string;
                                    textColorHoverError: string;
                                    textColorPressedError: string;
                                    textColorFocusError: string;
                                    textColorDisabledError: string;
                                    textColorTextError: string;
                                    textColorTextHoverError: string;
                                    textColorTextPressedError: string;
                                    textColorTextFocusError: string;
                                    textColorTextDisabledError: string;
                                    textColorGhostError: string;
                                    textColorGhostHoverError: string;
                                    textColorGhostPressedError: string;
                                    textColorGhostFocusError: string;
                                    textColorGhostDisabledError: string;
                                    borderError: string;
                                    borderHoverError: string;
                                    borderPressedError: string;
                                    borderFocusError: string;
                                    borderDisabledError: string;
                                    rippleColorError: string;
                                    waveOpacity: string;
                                    fontWeight: string;
                                    fontWeightStrong: string;
                                    paddingTiny: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingRoundTiny: string;
                                    paddingRoundSmall: string;
                                    paddingRoundMedium: string;
                                    paddingRoundLarge: string;
                                    iconMarginTiny: string;
                                    iconMarginSmall: string;
                                    iconMarginMedium: string;
                                    iconMarginLarge: string;
                                    iconSizeTiny: string;
                                    iconSizeSmall: string;
                                    iconSizeMedium: string;
                                    iconSizeLarge: string;
                                    rippleDuration: string;
                                },
                                any
                            >;
                        }
                    >;
                    Card: import('../../_mixins').Theme<
                        'Card',
                        {
                            lineHeight: string;
                            color: string;
                            colorModal: string;
                            colorPopover: string;
                            colorTarget: string;
                            colorEmbedded: string;
                            colorEmbeddedModal: string;
                            colorEmbeddedPopover: string;
                            textColor: string;
                            titleTextColor: string;
                            borderColor: string;
                            actionColor: string;
                            titleFontWeight: string;
                            closeColorHover: string;
                            closeColorPressed: string;
                            closeBorderRadius: string;
                            closeIconColor: string;
                            closeIconColorHover: string;
                            closeIconColorPressed: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            boxShadow: string;
                            borderRadius: string;
                            paddingSmall: string;
                            paddingMedium: string;
                            paddingLarge: string;
                            paddingHuge: string;
                            titleFontSizeSmall: string;
                            titleFontSizeMedium: string;
                            titleFontSizeLarge: string;
                            titleFontSizeHuge: string;
                            closeIconSize: string;
                            closeSize: string;
                        },
                        any
                    >;
                }
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Modal',
                    {
                        color: string;
                        textColor: string;
                        boxShadow: string;
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
                        Dialog: import('../../_mixins').Theme<
                            'Dialog',
                            {
                                fontSize: string;
                                lineHeight: string;
                                border: string;
                                titleTextColor: string;
                                textColor: string;
                                color: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                closeBorderRadius: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                borderRadius: string;
                                titleFontWeight: string;
                                titleFontSize: string;
                                padding: string;
                                iconSize: string;
                                actionSpace: string;
                                contentMargin: string;
                                iconMargin: string;
                                iconMarginIconTop: string;
                                closeSize: string;
                                closeIconSize: string;
                                closeMargin: string;
                                closeMarginIconTop: string;
                            },
                            {
                                Button: import('../../_mixins').Theme<
                                    'Button',
                                    {
                                        heightTiny: string;
                                        heightSmall: string;
                                        heightMedium: string;
                                        heightLarge: string;
                                        borderRadiusTiny: string;
                                        borderRadiusSmall: string;
                                        borderRadiusMedium: string;
                                        borderRadiusLarge: string;
                                        fontSizeTiny: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        opacityDisabled: string;
                                        colorOpacitySecondary: string;
                                        colorOpacitySecondaryHover: string;
                                        colorOpacitySecondaryPressed: string;
                                        colorSecondary: string;
                                        colorSecondaryHover: string;
                                        colorSecondaryPressed: string;
                                        colorTertiary: string;
                                        colorTertiaryHover: string;
                                        colorTertiaryPressed: string;
                                        colorQuaternary: string;
                                        colorQuaternaryHover: string;
                                        colorQuaternaryPressed: string;
                                        color: string;
                                        colorHover: string;
                                        colorPressed: string;
                                        colorFocus: string;
                                        colorDisabled: string;
                                        textColor: string;
                                        textColorTertiary: string;
                                        textColorHover: string;
                                        textColorPressed: string;
                                        textColorFocus: string;
                                        textColorDisabled: string;
                                        textColorText: string;
                                        textColorTextHover: string;
                                        textColorTextPressed: string;
                                        textColorTextFocus: string;
                                        textColorTextDisabled: string;
                                        textColorGhost: string;
                                        textColorGhostHover: string;
                                        textColorGhostPressed: string;
                                        textColorGhostFocus: string;
                                        textColorGhostDisabled: string;
                                        border: string;
                                        borderHover: string;
                                        borderPressed: string;
                                        borderFocus: string;
                                        borderDisabled: string;
                                        rippleColor: string;
                                        colorPrimary: string;
                                        colorHoverPrimary: string;
                                        colorPressedPrimary: string;
                                        colorFocusPrimary: string;
                                        colorDisabledPrimary: string;
                                        textColorPrimary: string;
                                        textColorHoverPrimary: string;
                                        textColorPressedPrimary: string;
                                        textColorFocusPrimary: string;
                                        textColorDisabledPrimary: string;
                                        textColorTextPrimary: string;
                                        textColorTextHoverPrimary: string;
                                        textColorTextPressedPrimary: string;
                                        textColorTextFocusPrimary: string;
                                        textColorTextDisabledPrimary: string;
                                        textColorGhostPrimary: string;
                                        textColorGhostHoverPrimary: string;
                                        textColorGhostPressedPrimary: string;
                                        textColorGhostFocusPrimary: string;
                                        textColorGhostDisabledPrimary: string;
                                        borderPrimary: string;
                                        borderHoverPrimary: string;
                                        borderPressedPrimary: string;
                                        borderFocusPrimary: string;
                                        borderDisabledPrimary: string;
                                        rippleColorPrimary: string;
                                        colorInfo: string;
                                        colorHoverInfo: string;
                                        colorPressedInfo: string;
                                        colorFocusInfo: string;
                                        colorDisabledInfo: string;
                                        textColorInfo: string;
                                        textColorHoverInfo: string;
                                        textColorPressedInfo: string;
                                        textColorFocusInfo: string;
                                        textColorDisabledInfo: string;
                                        textColorTextInfo: string;
                                        textColorTextHoverInfo: string;
                                        textColorTextPressedInfo: string;
                                        textColorTextFocusInfo: string;
                                        textColorTextDisabledInfo: string;
                                        textColorGhostInfo: string;
                                        textColorGhostHoverInfo: string;
                                        textColorGhostPressedInfo: string;
                                        textColorGhostFocusInfo: string;
                                        textColorGhostDisabledInfo: string;
                                        borderInfo: string;
                                        borderHoverInfo: string;
                                        borderPressedInfo: string;
                                        borderFocusInfo: string;
                                        borderDisabledInfo: string;
                                        rippleColorInfo: string;
                                        colorSuccess: string;
                                        colorHoverSuccess: string;
                                        colorPressedSuccess: string;
                                        colorFocusSuccess: string;
                                        colorDisabledSuccess: string;
                                        textColorSuccess: string;
                                        textColorHoverSuccess: string;
                                        textColorPressedSuccess: string;
                                        textColorFocusSuccess: string;
                                        textColorDisabledSuccess: string;
                                        textColorTextSuccess: string;
                                        textColorTextHoverSuccess: string;
                                        textColorTextPressedSuccess: string;
                                        textColorTextFocusSuccess: string;
                                        textColorTextDisabledSuccess: string;
                                        textColorGhostSuccess: string;
                                        textColorGhostHoverSuccess: string;
                                        textColorGhostPressedSuccess: string;
                                        textColorGhostFocusSuccess: string;
                                        textColorGhostDisabledSuccess: string;
                                        borderSuccess: string;
                                        borderHoverSuccess: string;
                                        borderPressedSuccess: string;
                                        borderFocusSuccess: string;
                                        borderDisabledSuccess: string;
                                        rippleColorSuccess: string;
                                        colorWarning: string;
                                        colorHoverWarning: string;
                                        colorPressedWarning: string;
                                        colorFocusWarning: string;
                                        colorDisabledWarning: string;
                                        textColorWarning: string;
                                        textColorHoverWarning: string;
                                        textColorPressedWarning: string;
                                        textColorFocusWarning: string;
                                        textColorDisabledWarning: string;
                                        textColorTextWarning: string;
                                        textColorTextHoverWarning: string;
                                        textColorTextPressedWarning: string;
                                        textColorTextFocusWarning: string;
                                        textColorTextDisabledWarning: string;
                                        textColorGhostWarning: string;
                                        textColorGhostHoverWarning: string;
                                        textColorGhostPressedWarning: string;
                                        textColorGhostFocusWarning: string;
                                        textColorGhostDisabledWarning: string;
                                        borderWarning: string;
                                        borderHoverWarning: string;
                                        borderPressedWarning: string;
                                        borderFocusWarning: string;
                                        borderDisabledWarning: string;
                                        rippleColorWarning: string;
                                        colorError: string;
                                        colorHoverError: string;
                                        colorPressedError: string;
                                        colorFocusError: string;
                                        colorDisabledError: string;
                                        textColorError: string;
                                        textColorHoverError: string;
                                        textColorPressedError: string;
                                        textColorFocusError: string;
                                        textColorDisabledError: string;
                                        textColorTextError: string;
                                        textColorTextHoverError: string;
                                        textColorTextPressedError: string;
                                        textColorTextFocusError: string;
                                        textColorTextDisabledError: string;
                                        textColorGhostError: string;
                                        textColorGhostHoverError: string;
                                        textColorGhostPressedError: string;
                                        textColorGhostFocusError: string;
                                        textColorGhostDisabledError: string;
                                        borderError: string;
                                        borderHoverError: string;
                                        borderPressedError: string;
                                        borderFocusError: string;
                                        borderDisabledError: string;
                                        rippleColorError: string;
                                        waveOpacity: string;
                                        fontWeight: string;
                                        fontWeightStrong: string;
                                        paddingTiny: string;
                                        paddingSmall: string;
                                        paddingMedium: string;
                                        paddingLarge: string;
                                        paddingRoundTiny: string;
                                        paddingRoundSmall: string;
                                        paddingRoundMedium: string;
                                        paddingRoundLarge: string;
                                        iconMarginTiny: string;
                                        iconMarginSmall: string;
                                        iconMarginMedium: string;
                                        iconMarginLarge: string;
                                        iconSizeTiny: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        rippleDuration: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Card: import('../../_mixins').Theme<
                            'Card',
                            {
                                lineHeight: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                                colorTarget: string;
                                colorEmbedded: string;
                                colorEmbeddedModal: string;
                                colorEmbeddedPopover: string;
                                textColor: string;
                                titleTextColor: string;
                                borderColor: string;
                                actionColor: string;
                                titleFontWeight: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeBorderRadius: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                boxShadow: string;
                                borderRadius: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                titleFontSizeSmall: string;
                                titleFontSizeMedium: string;
                                titleFontSizeLarge: string;
                                titleFontSizeHuge: string;
                                closeIconSize: string;
                                closeSize: string;
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
                    'Modal',
                    {
                        color: string;
                        textColor: string;
                        boxShadow: string;
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
                        Dialog: import('../../_mixins').Theme<
                            'Dialog',
                            {
                                fontSize: string;
                                lineHeight: string;
                                border: string;
                                titleTextColor: string;
                                textColor: string;
                                color: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                closeBorderRadius: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                borderRadius: string;
                                titleFontWeight: string;
                                titleFontSize: string;
                                padding: string;
                                iconSize: string;
                                actionSpace: string;
                                contentMargin: string;
                                iconMargin: string;
                                iconMarginIconTop: string;
                                closeSize: string;
                                closeIconSize: string;
                                closeMargin: string;
                                closeMarginIconTop: string;
                            },
                            {
                                Button: import('../../_mixins').Theme<
                                    'Button',
                                    {
                                        heightTiny: string;
                                        heightSmall: string;
                                        heightMedium: string;
                                        heightLarge: string;
                                        borderRadiusTiny: string;
                                        borderRadiusSmall: string;
                                        borderRadiusMedium: string;
                                        borderRadiusLarge: string;
                                        fontSizeTiny: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        opacityDisabled: string;
                                        colorOpacitySecondary: string;
                                        colorOpacitySecondaryHover: string;
                                        colorOpacitySecondaryPressed: string;
                                        colorSecondary: string;
                                        colorSecondaryHover: string;
                                        colorSecondaryPressed: string;
                                        colorTertiary: string;
                                        colorTertiaryHover: string;
                                        colorTertiaryPressed: string;
                                        colorQuaternary: string;
                                        colorQuaternaryHover: string;
                                        colorQuaternaryPressed: string;
                                        color: string;
                                        colorHover: string;
                                        colorPressed: string;
                                        colorFocus: string;
                                        colorDisabled: string;
                                        textColor: string;
                                        textColorTertiary: string;
                                        textColorHover: string;
                                        textColorPressed: string;
                                        textColorFocus: string;
                                        textColorDisabled: string;
                                        textColorText: string;
                                        textColorTextHover: string;
                                        textColorTextPressed: string;
                                        textColorTextFocus: string;
                                        textColorTextDisabled: string;
                                        textColorGhost: string;
                                        textColorGhostHover: string;
                                        textColorGhostPressed: string;
                                        textColorGhostFocus: string;
                                        textColorGhostDisabled: string;
                                        border: string;
                                        borderHover: string;
                                        borderPressed: string;
                                        borderFocus: string;
                                        borderDisabled: string;
                                        rippleColor: string;
                                        colorPrimary: string;
                                        colorHoverPrimary: string;
                                        colorPressedPrimary: string;
                                        colorFocusPrimary: string;
                                        colorDisabledPrimary: string;
                                        textColorPrimary: string;
                                        textColorHoverPrimary: string;
                                        textColorPressedPrimary: string;
                                        textColorFocusPrimary: string;
                                        textColorDisabledPrimary: string;
                                        textColorTextPrimary: string;
                                        textColorTextHoverPrimary: string;
                                        textColorTextPressedPrimary: string;
                                        textColorTextFocusPrimary: string;
                                        textColorTextDisabledPrimary: string;
                                        textColorGhostPrimary: string;
                                        textColorGhostHoverPrimary: string;
                                        textColorGhostPressedPrimary: string;
                                        textColorGhostFocusPrimary: string;
                                        textColorGhostDisabledPrimary: string;
                                        borderPrimary: string;
                                        borderHoverPrimary: string;
                                        borderPressedPrimary: string;
                                        borderFocusPrimary: string;
                                        borderDisabledPrimary: string;
                                        rippleColorPrimary: string;
                                        colorInfo: string;
                                        colorHoverInfo: string;
                                        colorPressedInfo: string;
                                        colorFocusInfo: string;
                                        colorDisabledInfo: string;
                                        textColorInfo: string;
                                        textColorHoverInfo: string;
                                        textColorPressedInfo: string;
                                        textColorFocusInfo: string;
                                        textColorDisabledInfo: string;
                                        textColorTextInfo: string;
                                        textColorTextHoverInfo: string;
                                        textColorTextPressedInfo: string;
                                        textColorTextFocusInfo: string;
                                        textColorTextDisabledInfo: string;
                                        textColorGhostInfo: string;
                                        textColorGhostHoverInfo: string;
                                        textColorGhostPressedInfo: string;
                                        textColorGhostFocusInfo: string;
                                        textColorGhostDisabledInfo: string;
                                        borderInfo: string;
                                        borderHoverInfo: string;
                                        borderPressedInfo: string;
                                        borderFocusInfo: string;
                                        borderDisabledInfo: string;
                                        rippleColorInfo: string;
                                        colorSuccess: string;
                                        colorHoverSuccess: string;
                                        colorPressedSuccess: string;
                                        colorFocusSuccess: string;
                                        colorDisabledSuccess: string;
                                        textColorSuccess: string;
                                        textColorHoverSuccess: string;
                                        textColorPressedSuccess: string;
                                        textColorFocusSuccess: string;
                                        textColorDisabledSuccess: string;
                                        textColorTextSuccess: string;
                                        textColorTextHoverSuccess: string;
                                        textColorTextPressedSuccess: string;
                                        textColorTextFocusSuccess: string;
                                        textColorTextDisabledSuccess: string;
                                        textColorGhostSuccess: string;
                                        textColorGhostHoverSuccess: string;
                                        textColorGhostPressedSuccess: string;
                                        textColorGhostFocusSuccess: string;
                                        textColorGhostDisabledSuccess: string;
                                        borderSuccess: string;
                                        borderHoverSuccess: string;
                                        borderPressedSuccess: string;
                                        borderFocusSuccess: string;
                                        borderDisabledSuccess: string;
                                        rippleColorSuccess: string;
                                        colorWarning: string;
                                        colorHoverWarning: string;
                                        colorPressedWarning: string;
                                        colorFocusWarning: string;
                                        colorDisabledWarning: string;
                                        textColorWarning: string;
                                        textColorHoverWarning: string;
                                        textColorPressedWarning: string;
                                        textColorFocusWarning: string;
                                        textColorDisabledWarning: string;
                                        textColorTextWarning: string;
                                        textColorTextHoverWarning: string;
                                        textColorTextPressedWarning: string;
                                        textColorTextFocusWarning: string;
                                        textColorTextDisabledWarning: string;
                                        textColorGhostWarning: string;
                                        textColorGhostHoverWarning: string;
                                        textColorGhostPressedWarning: string;
                                        textColorGhostFocusWarning: string;
                                        textColorGhostDisabledWarning: string;
                                        borderWarning: string;
                                        borderHoverWarning: string;
                                        borderPressedWarning: string;
                                        borderFocusWarning: string;
                                        borderDisabledWarning: string;
                                        rippleColorWarning: string;
                                        colorError: string;
                                        colorHoverError: string;
                                        colorPressedError: string;
                                        colorFocusError: string;
                                        colorDisabledError: string;
                                        textColorError: string;
                                        textColorHoverError: string;
                                        textColorPressedError: string;
                                        textColorFocusError: string;
                                        textColorDisabledError: string;
                                        textColorTextError: string;
                                        textColorTextHoverError: string;
                                        textColorTextPressedError: string;
                                        textColorTextFocusError: string;
                                        textColorTextDisabledError: string;
                                        textColorGhostError: string;
                                        textColorGhostHoverError: string;
                                        textColorGhostPressedError: string;
                                        textColorGhostFocusError: string;
                                        textColorGhostDisabledError: string;
                                        borderError: string;
                                        borderHoverError: string;
                                        borderPressedError: string;
                                        borderFocusError: string;
                                        borderDisabledError: string;
                                        rippleColorError: string;
                                        waveOpacity: string;
                                        fontWeight: string;
                                        fontWeightStrong: string;
                                        paddingTiny: string;
                                        paddingSmall: string;
                                        paddingMedium: string;
                                        paddingLarge: string;
                                        paddingRoundTiny: string;
                                        paddingRoundSmall: string;
                                        paddingRoundMedium: string;
                                        paddingRoundLarge: string;
                                        iconMarginTiny: string;
                                        iconMarginSmall: string;
                                        iconMarginMedium: string;
                                        iconMarginLarge: string;
                                        iconSizeTiny: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        rippleDuration: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Card: import('../../_mixins').Theme<
                            'Card',
                            {
                                lineHeight: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                                colorTarget: string;
                                colorEmbedded: string;
                                colorEmbeddedModal: string;
                                colorEmbeddedPopover: string;
                                textColor: string;
                                titleTextColor: string;
                                borderColor: string;
                                actionColor: string;
                                titleFontWeight: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeBorderRadius: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                boxShadow: string;
                                borderRadius: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                titleFontSizeSmall: string;
                                titleFontSizeMedium: string;
                                titleFontSizeLarge: string;
                                titleFontSizeHuge: string;
                                closeIconSize: string;
                                closeSize: string;
                            },
                            any
                        >;
                    }
                >
            >
        >;
    },
    {
        mergedClsPrefix: globalThis.ComputedRef<string>;
        namespace: globalThis.ComputedRef<string | undefined>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        containerRef: globalThis.Ref<HTMLElement | null>;
        presetProps: globalThis.ComputedRef<any>;
        handleEsc: (e: KeyboardEvent) => void;
        handleAfterLeave: () => void;
        handleClickoutside: (e: MouseEvent) => void;
        handleBeforeLeave: () => void;
        doUpdateShow: (show: boolean) => void;
        handleNegativeClick: () => void;
        handlePositiveClick: () => void;
        handleCloseClick: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier-ease-out': string;
                  '--n-box-shadow': string;
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
            onEsc: PropType<() => void>;
            'onUpdate:show': PropType<MaybeArray<(value: boolean) => void>>;
            onUpdateShow: PropType<MaybeArray<(value: boolean) => void>>;
            onAfterEnter: PropType<() => void>;
            onBeforeLeave: PropType<() => void>;
            onAfterLeave: PropType<() => void>;
            onClose: PropType<() => any>;
            onPositiveClick: PropType<() => any>;
            onNegativeClick: PropType<() => any>;
            onMaskClick: PropType<(e: MouseEvent) => void>;
            internalDialog: BooleanConstructor;
            internalAppear: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            overlayStyle: PropType<string | CSSProperties>;
            onBeforeHide: PropType<() => void>;
            onAfterHide: PropType<() => void>;
            onHide: PropType<(value: false) => void>;
            icon: PropType<() => import('vue').VNodeChild>;
            type: {
                readonly type: PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            title: PropType<string | (() => import('vue').VNodeChild)>;
            closable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            negativeText: StringConstructor;
            positiveText: StringConstructor;
            positiveButtonProps: PropType<import('../..').ButtonProps>;
            negativeButtonProps: PropType<import('../..').ButtonProps>;
            content: PropType<string | (() => import('vue').VNodeChild)>;
            action: PropType<() => import('vue').VNodeChild>;
            showIcon: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            loading: BooleanConstructor;
            bordered: BooleanConstructor;
            iconPlacement: PropType<
                import('../../dialog/src/interface').IconPlacement
            >;
            contentStyle: PropType<string | CSSProperties>;
            headerStyle: PropType<string | CSSProperties>;
            headerExtraStyle: PropType<string | CSSProperties>;
            footerStyle: PropType<string | CSSProperties>;
            embedded: BooleanConstructor;
            segmented: {
                readonly type: PropType<
                    boolean | import('../..').CardSegmented
                >;
                readonly default: false;
            };
            size: {
                readonly type: PropType<'small' | 'medium' | 'large' | 'huge'>;
                readonly default: 'medium';
            };
            hoverable: BooleanConstructor;
            role: StringConstructor;
            tag: {
                readonly type: PropType<keyof HTMLElementTagNameMap>;
                readonly default: 'div';
            };
            show: BooleanConstructor;
            unstableShowMask: {
                type: BooleanConstructor;
                default: boolean;
            };
            maskClosable: {
                type: BooleanConstructor;
                default: boolean;
            };
            preset: PropType<'dialog' | 'confirm' | 'card'>;
            to: PropType<string | HTMLElement>;
            displayDirective: {
                type: PropType<'show' | 'if'>;
                default: string;
            };
            transformOrigin: {
                type: PropType<'center' | 'mouse'>;
                default: string;
            };
            zIndex: NumberConstructor;
            autoFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            trapFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            closeOnEsc: {
                type: BooleanConstructor;
                default: boolean;
            };
            blockScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            theme: PropType<
                import('../../_mixins').Theme<
                    'Modal',
                    {
                        color: string;
                        textColor: string;
                        boxShadow: string;
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
                        Dialog: import('../../_mixins').Theme<
                            'Dialog',
                            {
                                fontSize: string;
                                lineHeight: string;
                                border: string;
                                titleTextColor: string;
                                textColor: string;
                                color: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                closeBorderRadius: string;
                                iconColor: string;
                                iconColorInfo: string;
                                iconColorSuccess: string;
                                iconColorWarning: string;
                                iconColorError: string;
                                borderRadius: string;
                                titleFontWeight: string;
                                titleFontSize: string;
                                padding: string;
                                iconSize: string;
                                actionSpace: string;
                                contentMargin: string;
                                iconMargin: string;
                                iconMarginIconTop: string;
                                closeSize: string;
                                closeIconSize: string;
                                closeMargin: string;
                                closeMarginIconTop: string;
                            },
                            {
                                Button: import('../../_mixins').Theme<
                                    'Button',
                                    {
                                        heightTiny: string;
                                        heightSmall: string;
                                        heightMedium: string;
                                        heightLarge: string;
                                        borderRadiusTiny: string;
                                        borderRadiusSmall: string;
                                        borderRadiusMedium: string;
                                        borderRadiusLarge: string;
                                        fontSizeTiny: string;
                                        fontSizeSmall: string;
                                        fontSizeMedium: string;
                                        fontSizeLarge: string;
                                        opacityDisabled: string;
                                        colorOpacitySecondary: string;
                                        colorOpacitySecondaryHover: string;
                                        colorOpacitySecondaryPressed: string;
                                        colorSecondary: string;
                                        colorSecondaryHover: string;
                                        colorSecondaryPressed: string;
                                        colorTertiary: string;
                                        colorTertiaryHover: string;
                                        colorTertiaryPressed: string;
                                        colorQuaternary: string;
                                        colorQuaternaryHover: string;
                                        colorQuaternaryPressed: string;
                                        color: string;
                                        colorHover: string;
                                        colorPressed: string;
                                        colorFocus: string;
                                        colorDisabled: string;
                                        textColor: string;
                                        textColorTertiary: string;
                                        textColorHover: string;
                                        textColorPressed: string;
                                        textColorFocus: string;
                                        textColorDisabled: string;
                                        textColorText: string;
                                        textColorTextHover: string;
                                        textColorTextPressed: string;
                                        textColorTextFocus: string;
                                        textColorTextDisabled: string;
                                        textColorGhost: string;
                                        textColorGhostHover: string;
                                        textColorGhostPressed: string;
                                        textColorGhostFocus: string;
                                        textColorGhostDisabled: string;
                                        border: string;
                                        borderHover: string;
                                        borderPressed: string;
                                        borderFocus: string;
                                        borderDisabled: string;
                                        rippleColor: string;
                                        colorPrimary: string;
                                        colorHoverPrimary: string;
                                        colorPressedPrimary: string;
                                        colorFocusPrimary: string;
                                        colorDisabledPrimary: string;
                                        textColorPrimary: string;
                                        textColorHoverPrimary: string;
                                        textColorPressedPrimary: string;
                                        textColorFocusPrimary: string;
                                        textColorDisabledPrimary: string;
                                        textColorTextPrimary: string;
                                        textColorTextHoverPrimary: string;
                                        textColorTextPressedPrimary: string;
                                        textColorTextFocusPrimary: string;
                                        textColorTextDisabledPrimary: string;
                                        textColorGhostPrimary: string;
                                        textColorGhostHoverPrimary: string;
                                        textColorGhostPressedPrimary: string;
                                        textColorGhostFocusPrimary: string;
                                        textColorGhostDisabledPrimary: string;
                                        borderPrimary: string;
                                        borderHoverPrimary: string;
                                        borderPressedPrimary: string;
                                        borderFocusPrimary: string;
                                        borderDisabledPrimary: string;
                                        rippleColorPrimary: string;
                                        colorInfo: string;
                                        colorHoverInfo: string;
                                        colorPressedInfo: string;
                                        colorFocusInfo: string;
                                        colorDisabledInfo: string;
                                        textColorInfo: string;
                                        textColorHoverInfo: string;
                                        textColorPressedInfo: string;
                                        textColorFocusInfo: string;
                                        textColorDisabledInfo: string;
                                        textColorTextInfo: string;
                                        textColorTextHoverInfo: string;
                                        textColorTextPressedInfo: string;
                                        textColorTextFocusInfo: string;
                                        textColorTextDisabledInfo: string;
                                        textColorGhostInfo: string;
                                        textColorGhostHoverInfo: string;
                                        textColorGhostPressedInfo: string;
                                        textColorGhostFocusInfo: string;
                                        textColorGhostDisabledInfo: string;
                                        borderInfo: string;
                                        borderHoverInfo: string;
                                        borderPressedInfo: string;
                                        borderFocusInfo: string;
                                        borderDisabledInfo: string;
                                        rippleColorInfo: string;
                                        colorSuccess: string;
                                        colorHoverSuccess: string;
                                        colorPressedSuccess: string;
                                        colorFocusSuccess: string;
                                        colorDisabledSuccess: string;
                                        textColorSuccess: string;
                                        textColorHoverSuccess: string;
                                        textColorPressedSuccess: string;
                                        textColorFocusSuccess: string;
                                        textColorDisabledSuccess: string;
                                        textColorTextSuccess: string;
                                        textColorTextHoverSuccess: string;
                                        textColorTextPressedSuccess: string;
                                        textColorTextFocusSuccess: string;
                                        textColorTextDisabledSuccess: string;
                                        textColorGhostSuccess: string;
                                        textColorGhostHoverSuccess: string;
                                        textColorGhostPressedSuccess: string;
                                        textColorGhostFocusSuccess: string;
                                        textColorGhostDisabledSuccess: string;
                                        borderSuccess: string;
                                        borderHoverSuccess: string;
                                        borderPressedSuccess: string;
                                        borderFocusSuccess: string;
                                        borderDisabledSuccess: string;
                                        rippleColorSuccess: string;
                                        colorWarning: string;
                                        colorHoverWarning: string;
                                        colorPressedWarning: string;
                                        colorFocusWarning: string;
                                        colorDisabledWarning: string;
                                        textColorWarning: string;
                                        textColorHoverWarning: string;
                                        textColorPressedWarning: string;
                                        textColorFocusWarning: string;
                                        textColorDisabledWarning: string;
                                        textColorTextWarning: string;
                                        textColorTextHoverWarning: string;
                                        textColorTextPressedWarning: string;
                                        textColorTextFocusWarning: string;
                                        textColorTextDisabledWarning: string;
                                        textColorGhostWarning: string;
                                        textColorGhostHoverWarning: string;
                                        textColorGhostPressedWarning: string;
                                        textColorGhostFocusWarning: string;
                                        textColorGhostDisabledWarning: string;
                                        borderWarning: string;
                                        borderHoverWarning: string;
                                        borderPressedWarning: string;
                                        borderFocusWarning: string;
                                        borderDisabledWarning: string;
                                        rippleColorWarning: string;
                                        colorError: string;
                                        colorHoverError: string;
                                        colorPressedError: string;
                                        colorFocusError: string;
                                        colorDisabledError: string;
                                        textColorError: string;
                                        textColorHoverError: string;
                                        textColorPressedError: string;
                                        textColorFocusError: string;
                                        textColorDisabledError: string;
                                        textColorTextError: string;
                                        textColorTextHoverError: string;
                                        textColorTextPressedError: string;
                                        textColorTextFocusError: string;
                                        textColorTextDisabledError: string;
                                        textColorGhostError: string;
                                        textColorGhostHoverError: string;
                                        textColorGhostPressedError: string;
                                        textColorGhostFocusError: string;
                                        textColorGhostDisabledError: string;
                                        borderError: string;
                                        borderHoverError: string;
                                        borderPressedError: string;
                                        borderFocusError: string;
                                        borderDisabledError: string;
                                        rippleColorError: string;
                                        waveOpacity: string;
                                        fontWeight: string;
                                        fontWeightStrong: string;
                                        paddingTiny: string;
                                        paddingSmall: string;
                                        paddingMedium: string;
                                        paddingLarge: string;
                                        paddingRoundTiny: string;
                                        paddingRoundSmall: string;
                                        paddingRoundMedium: string;
                                        paddingRoundLarge: string;
                                        iconMarginTiny: string;
                                        iconMarginSmall: string;
                                        iconMarginMedium: string;
                                        iconMarginLarge: string;
                                        iconSizeTiny: string;
                                        iconSizeSmall: string;
                                        iconSizeMedium: string;
                                        iconSizeLarge: string;
                                        rippleDuration: string;
                                    },
                                    any
                                >;
                            }
                        >;
                        Card: import('../../_mixins').Theme<
                            'Card',
                            {
                                lineHeight: string;
                                color: string;
                                colorModal: string;
                                colorPopover: string;
                                colorTarget: string;
                                colorEmbedded: string;
                                colorEmbeddedModal: string;
                                colorEmbeddedPopover: string;
                                textColor: string;
                                titleTextColor: string;
                                borderColor: string;
                                actionColor: string;
                                titleFontWeight: string;
                                closeColorHover: string;
                                closeColorPressed: string;
                                closeBorderRadius: string;
                                closeIconColor: string;
                                closeIconColorHover: string;
                                closeIconColorPressed: string;
                                fontSizeSmall: string;
                                fontSizeMedium: string;
                                fontSizeLarge: string;
                                fontSizeHuge: string;
                                boxShadow: string;
                                borderRadius: string;
                                paddingSmall: string;
                                paddingMedium: string;
                                paddingLarge: string;
                                paddingHuge: string;
                                titleFontSizeSmall: string;
                                titleFontSizeMedium: string;
                                titleFontSizeLarge: string;
                                titleFontSizeHuge: string;
                                closeIconSize: string;
                                closeSize: string;
                            },
                            any
                        >;
                    }
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Modal',
                        {
                            color: string;
                            textColor: string;
                            boxShadow: string;
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
                            Dialog: import('../../_mixins').Theme<
                                'Dialog',
                                {
                                    fontSize: string;
                                    lineHeight: string;
                                    border: string;
                                    titleTextColor: string;
                                    textColor: string;
                                    color: string;
                                    closeColorHover: string;
                                    closeColorPressed: string;
                                    closeIconColor: string;
                                    closeIconColorHover: string;
                                    closeIconColorPressed: string;
                                    closeBorderRadius: string;
                                    iconColor: string;
                                    iconColorInfo: string;
                                    iconColorSuccess: string;
                                    iconColorWarning: string;
                                    iconColorError: string;
                                    borderRadius: string;
                                    titleFontWeight: string;
                                    titleFontSize: string;
                                    padding: string;
                                    iconSize: string;
                                    actionSpace: string;
                                    contentMargin: string;
                                    iconMargin: string;
                                    iconMarginIconTop: string;
                                    closeSize: string;
                                    closeIconSize: string;
                                    closeMargin: string;
                                    closeMarginIconTop: string;
                                },
                                {
                                    Button: import('../../_mixins').Theme<
                                        'Button',
                                        {
                                            heightTiny: string;
                                            heightSmall: string;
                                            heightMedium: string;
                                            heightLarge: string;
                                            borderRadiusTiny: string;
                                            borderRadiusSmall: string;
                                            borderRadiusMedium: string;
                                            borderRadiusLarge: string;
                                            fontSizeTiny: string;
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            opacityDisabled: string;
                                            colorOpacitySecondary: string;
                                            colorOpacitySecondaryHover: string;
                                            colorOpacitySecondaryPressed: string;
                                            colorSecondary: string;
                                            colorSecondaryHover: string;
                                            colorSecondaryPressed: string;
                                            colorTertiary: string;
                                            colorTertiaryHover: string;
                                            colorTertiaryPressed: string;
                                            colorQuaternary: string;
                                            colorQuaternaryHover: string;
                                            colorQuaternaryPressed: string;
                                            color: string;
                                            colorHover: string;
                                            colorPressed: string;
                                            colorFocus: string;
                                            colorDisabled: string;
                                            textColor: string;
                                            textColorTertiary: string;
                                            textColorHover: string;
                                            textColorPressed: string;
                                            textColorFocus: string;
                                            textColorDisabled: string;
                                            textColorText: string;
                                            textColorTextHover: string;
                                            textColorTextPressed: string;
                                            textColorTextFocus: string;
                                            textColorTextDisabled: string;
                                            textColorGhost: string;
                                            textColorGhostHover: string;
                                            textColorGhostPressed: string;
                                            textColorGhostFocus: string;
                                            textColorGhostDisabled: string;
                                            border: string;
                                            borderHover: string;
                                            borderPressed: string;
                                            borderFocus: string;
                                            borderDisabled: string;
                                            rippleColor: string;
                                            colorPrimary: string;
                                            colorHoverPrimary: string;
                                            colorPressedPrimary: string;
                                            colorFocusPrimary: string;
                                            colorDisabledPrimary: string;
                                            textColorPrimary: string;
                                            textColorHoverPrimary: string;
                                            textColorPressedPrimary: string;
                                            textColorFocusPrimary: string;
                                            textColorDisabledPrimary: string;
                                            textColorTextPrimary: string;
                                            textColorTextHoverPrimary: string;
                                            textColorTextPressedPrimary: string;
                                            textColorTextFocusPrimary: string;
                                            textColorTextDisabledPrimary: string;
                                            textColorGhostPrimary: string;
                                            textColorGhostHoverPrimary: string;
                                            textColorGhostPressedPrimary: string;
                                            textColorGhostFocusPrimary: string;
                                            textColorGhostDisabledPrimary: string;
                                            borderPrimary: string;
                                            borderHoverPrimary: string;
                                            borderPressedPrimary: string;
                                            borderFocusPrimary: string;
                                            borderDisabledPrimary: string;
                                            rippleColorPrimary: string;
                                            colorInfo: string;
                                            colorHoverInfo: string;
                                            colorPressedInfo: string;
                                            colorFocusInfo: string;
                                            colorDisabledInfo: string;
                                            textColorInfo: string;
                                            textColorHoverInfo: string;
                                            textColorPressedInfo: string;
                                            textColorFocusInfo: string;
                                            textColorDisabledInfo: string;
                                            textColorTextInfo: string;
                                            textColorTextHoverInfo: string;
                                            textColorTextPressedInfo: string;
                                            textColorTextFocusInfo: string;
                                            textColorTextDisabledInfo: string;
                                            textColorGhostInfo: string;
                                            textColorGhostHoverInfo: string;
                                            textColorGhostPressedInfo: string;
                                            textColorGhostFocusInfo: string;
                                            textColorGhostDisabledInfo: string;
                                            borderInfo: string;
                                            borderHoverInfo: string;
                                            borderPressedInfo: string;
                                            borderFocusInfo: string;
                                            borderDisabledInfo: string;
                                            rippleColorInfo: string;
                                            colorSuccess: string;
                                            colorHoverSuccess: string;
                                            colorPressedSuccess: string;
                                            colorFocusSuccess: string;
                                            colorDisabledSuccess: string;
                                            textColorSuccess: string;
                                            textColorHoverSuccess: string;
                                            textColorPressedSuccess: string;
                                            textColorFocusSuccess: string;
                                            textColorDisabledSuccess: string;
                                            textColorTextSuccess: string;
                                            textColorTextHoverSuccess: string;
                                            textColorTextPressedSuccess: string;
                                            textColorTextFocusSuccess: string;
                                            textColorTextDisabledSuccess: string;
                                            textColorGhostSuccess: string;
                                            textColorGhostHoverSuccess: string;
                                            textColorGhostPressedSuccess: string;
                                            textColorGhostFocusSuccess: string;
                                            textColorGhostDisabledSuccess: string;
                                            borderSuccess: string;
                                            borderHoverSuccess: string;
                                            borderPressedSuccess: string;
                                            borderFocusSuccess: string;
                                            borderDisabledSuccess: string;
                                            rippleColorSuccess: string;
                                            colorWarning: string;
                                            colorHoverWarning: string;
                                            colorPressedWarning: string;
                                            colorFocusWarning: string;
                                            colorDisabledWarning: string;
                                            textColorWarning: string;
                                            textColorHoverWarning: string;
                                            textColorPressedWarning: string;
                                            textColorFocusWarning: string;
                                            textColorDisabledWarning: string;
                                            textColorTextWarning: string;
                                            textColorTextHoverWarning: string;
                                            textColorTextPressedWarning: string;
                                            textColorTextFocusWarning: string;
                                            textColorTextDisabledWarning: string;
                                            textColorGhostWarning: string;
                                            textColorGhostHoverWarning: string;
                                            textColorGhostPressedWarning: string;
                                            textColorGhostFocusWarning: string;
                                            textColorGhostDisabledWarning: string;
                                            borderWarning: string;
                                            borderHoverWarning: string;
                                            borderPressedWarning: string;
                                            borderFocusWarning: string;
                                            borderDisabledWarning: string;
                                            rippleColorWarning: string;
                                            colorError: string;
                                            colorHoverError: string;
                                            colorPressedError: string;
                                            colorFocusError: string;
                                            colorDisabledError: string;
                                            textColorError: string;
                                            textColorHoverError: string;
                                            textColorPressedError: string;
                                            textColorFocusError: string;
                                            textColorDisabledError: string;
                                            textColorTextError: string;
                                            textColorTextHoverError: string;
                                            textColorTextPressedError: string;
                                            textColorTextFocusError: string;
                                            textColorTextDisabledError: string;
                                            textColorGhostError: string;
                                            textColorGhostHoverError: string;
                                            textColorGhostPressedError: string;
                                            textColorGhostFocusError: string;
                                            textColorGhostDisabledError: string;
                                            borderError: string;
                                            borderHoverError: string;
                                            borderPressedError: string;
                                            borderFocusError: string;
                                            borderDisabledError: string;
                                            rippleColorError: string;
                                            waveOpacity: string;
                                            fontWeight: string;
                                            fontWeightStrong: string;
                                            paddingTiny: string;
                                            paddingSmall: string;
                                            paddingMedium: string;
                                            paddingLarge: string;
                                            paddingRoundTiny: string;
                                            paddingRoundSmall: string;
                                            paddingRoundMedium: string;
                                            paddingRoundLarge: string;
                                            iconMarginTiny: string;
                                            iconMarginSmall: string;
                                            iconMarginMedium: string;
                                            iconMarginLarge: string;
                                            iconSizeTiny: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            rippleDuration: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                            Card: import('../../_mixins').Theme<
                                'Card',
                                {
                                    lineHeight: string;
                                    color: string;
                                    colorModal: string;
                                    colorPopover: string;
                                    colorTarget: string;
                                    colorEmbedded: string;
                                    colorEmbeddedModal: string;
                                    colorEmbeddedPopover: string;
                                    textColor: string;
                                    titleTextColor: string;
                                    borderColor: string;
                                    actionColor: string;
                                    titleFontWeight: string;
                                    closeColorHover: string;
                                    closeColorPressed: string;
                                    closeBorderRadius: string;
                                    closeIconColor: string;
                                    closeIconColorHover: string;
                                    closeIconColorPressed: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    boxShadow: string;
                                    borderRadius: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingHuge: string;
                                    titleFontSizeSmall: string;
                                    titleFontSizeMedium: string;
                                    titleFontSizeLarge: string;
                                    titleFontSizeHuge: string;
                                    closeIconSize: string;
                                    closeSize: string;
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
                        'Modal',
                        {
                            color: string;
                            textColor: string;
                            boxShadow: string;
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
                            Dialog: import('../../_mixins').Theme<
                                'Dialog',
                                {
                                    fontSize: string;
                                    lineHeight: string;
                                    border: string;
                                    titleTextColor: string;
                                    textColor: string;
                                    color: string;
                                    closeColorHover: string;
                                    closeColorPressed: string;
                                    closeIconColor: string;
                                    closeIconColorHover: string;
                                    closeIconColorPressed: string;
                                    closeBorderRadius: string;
                                    iconColor: string;
                                    iconColorInfo: string;
                                    iconColorSuccess: string;
                                    iconColorWarning: string;
                                    iconColorError: string;
                                    borderRadius: string;
                                    titleFontWeight: string;
                                    titleFontSize: string;
                                    padding: string;
                                    iconSize: string;
                                    actionSpace: string;
                                    contentMargin: string;
                                    iconMargin: string;
                                    iconMarginIconTop: string;
                                    closeSize: string;
                                    closeIconSize: string;
                                    closeMargin: string;
                                    closeMarginIconTop: string;
                                },
                                {
                                    Button: import('../../_mixins').Theme<
                                        'Button',
                                        {
                                            heightTiny: string;
                                            heightSmall: string;
                                            heightMedium: string;
                                            heightLarge: string;
                                            borderRadiusTiny: string;
                                            borderRadiusSmall: string;
                                            borderRadiusMedium: string;
                                            borderRadiusLarge: string;
                                            fontSizeTiny: string;
                                            fontSizeSmall: string;
                                            fontSizeMedium: string;
                                            fontSizeLarge: string;
                                            opacityDisabled: string;
                                            colorOpacitySecondary: string;
                                            colorOpacitySecondaryHover: string;
                                            colorOpacitySecondaryPressed: string;
                                            colorSecondary: string;
                                            colorSecondaryHover: string;
                                            colorSecondaryPressed: string;
                                            colorTertiary: string;
                                            colorTertiaryHover: string;
                                            colorTertiaryPressed: string;
                                            colorQuaternary: string;
                                            colorQuaternaryHover: string;
                                            colorQuaternaryPressed: string;
                                            color: string;
                                            colorHover: string;
                                            colorPressed: string;
                                            colorFocus: string;
                                            colorDisabled: string;
                                            textColor: string;
                                            textColorTertiary: string;
                                            textColorHover: string;
                                            textColorPressed: string;
                                            textColorFocus: string;
                                            textColorDisabled: string;
                                            textColorText: string;
                                            textColorTextHover: string;
                                            textColorTextPressed: string;
                                            textColorTextFocus: string;
                                            textColorTextDisabled: string;
                                            textColorGhost: string;
                                            textColorGhostHover: string;
                                            textColorGhostPressed: string;
                                            textColorGhostFocus: string;
                                            textColorGhostDisabled: string;
                                            border: string;
                                            borderHover: string;
                                            borderPressed: string;
                                            borderFocus: string;
                                            borderDisabled: string;
                                            rippleColor: string;
                                            colorPrimary: string;
                                            colorHoverPrimary: string;
                                            colorPressedPrimary: string;
                                            colorFocusPrimary: string;
                                            colorDisabledPrimary: string;
                                            textColorPrimary: string;
                                            textColorHoverPrimary: string;
                                            textColorPressedPrimary: string;
                                            textColorFocusPrimary: string;
                                            textColorDisabledPrimary: string;
                                            textColorTextPrimary: string;
                                            textColorTextHoverPrimary: string;
                                            textColorTextPressedPrimary: string;
                                            textColorTextFocusPrimary: string;
                                            textColorTextDisabledPrimary: string;
                                            textColorGhostPrimary: string;
                                            textColorGhostHoverPrimary: string;
                                            textColorGhostPressedPrimary: string;
                                            textColorGhostFocusPrimary: string;
                                            textColorGhostDisabledPrimary: string;
                                            borderPrimary: string;
                                            borderHoverPrimary: string;
                                            borderPressedPrimary: string;
                                            borderFocusPrimary: string;
                                            borderDisabledPrimary: string;
                                            rippleColorPrimary: string;
                                            colorInfo: string;
                                            colorHoverInfo: string;
                                            colorPressedInfo: string;
                                            colorFocusInfo: string;
                                            colorDisabledInfo: string;
                                            textColorInfo: string;
                                            textColorHoverInfo: string;
                                            textColorPressedInfo: string;
                                            textColorFocusInfo: string;
                                            textColorDisabledInfo: string;
                                            textColorTextInfo: string;
                                            textColorTextHoverInfo: string;
                                            textColorTextPressedInfo: string;
                                            textColorTextFocusInfo: string;
                                            textColorTextDisabledInfo: string;
                                            textColorGhostInfo: string;
                                            textColorGhostHoverInfo: string;
                                            textColorGhostPressedInfo: string;
                                            textColorGhostFocusInfo: string;
                                            textColorGhostDisabledInfo: string;
                                            borderInfo: string;
                                            borderHoverInfo: string;
                                            borderPressedInfo: string;
                                            borderFocusInfo: string;
                                            borderDisabledInfo: string;
                                            rippleColorInfo: string;
                                            colorSuccess: string;
                                            colorHoverSuccess: string;
                                            colorPressedSuccess: string;
                                            colorFocusSuccess: string;
                                            colorDisabledSuccess: string;
                                            textColorSuccess: string;
                                            textColorHoverSuccess: string;
                                            textColorPressedSuccess: string;
                                            textColorFocusSuccess: string;
                                            textColorDisabledSuccess: string;
                                            textColorTextSuccess: string;
                                            textColorTextHoverSuccess: string;
                                            textColorTextPressedSuccess: string;
                                            textColorTextFocusSuccess: string;
                                            textColorTextDisabledSuccess: string;
                                            textColorGhostSuccess: string;
                                            textColorGhostHoverSuccess: string;
                                            textColorGhostPressedSuccess: string;
                                            textColorGhostFocusSuccess: string;
                                            textColorGhostDisabledSuccess: string;
                                            borderSuccess: string;
                                            borderHoverSuccess: string;
                                            borderPressedSuccess: string;
                                            borderFocusSuccess: string;
                                            borderDisabledSuccess: string;
                                            rippleColorSuccess: string;
                                            colorWarning: string;
                                            colorHoverWarning: string;
                                            colorPressedWarning: string;
                                            colorFocusWarning: string;
                                            colorDisabledWarning: string;
                                            textColorWarning: string;
                                            textColorHoverWarning: string;
                                            textColorPressedWarning: string;
                                            textColorFocusWarning: string;
                                            textColorDisabledWarning: string;
                                            textColorTextWarning: string;
                                            textColorTextHoverWarning: string;
                                            textColorTextPressedWarning: string;
                                            textColorTextFocusWarning: string;
                                            textColorTextDisabledWarning: string;
                                            textColorGhostWarning: string;
                                            textColorGhostHoverWarning: string;
                                            textColorGhostPressedWarning: string;
                                            textColorGhostFocusWarning: string;
                                            textColorGhostDisabledWarning: string;
                                            borderWarning: string;
                                            borderHoverWarning: string;
                                            borderPressedWarning: string;
                                            borderFocusWarning: string;
                                            borderDisabledWarning: string;
                                            rippleColorWarning: string;
                                            colorError: string;
                                            colorHoverError: string;
                                            colorPressedError: string;
                                            colorFocusError: string;
                                            colorDisabledError: string;
                                            textColorError: string;
                                            textColorHoverError: string;
                                            textColorPressedError: string;
                                            textColorFocusError: string;
                                            textColorDisabledError: string;
                                            textColorTextError: string;
                                            textColorTextHoverError: string;
                                            textColorTextPressedError: string;
                                            textColorTextFocusError: string;
                                            textColorTextDisabledError: string;
                                            textColorGhostError: string;
                                            textColorGhostHoverError: string;
                                            textColorGhostPressedError: string;
                                            textColorGhostFocusError: string;
                                            textColorGhostDisabledError: string;
                                            borderError: string;
                                            borderHoverError: string;
                                            borderPressedError: string;
                                            borderFocusError: string;
                                            borderDisabledError: string;
                                            rippleColorError: string;
                                            waveOpacity: string;
                                            fontWeight: string;
                                            fontWeightStrong: string;
                                            paddingTiny: string;
                                            paddingSmall: string;
                                            paddingMedium: string;
                                            paddingLarge: string;
                                            paddingRoundTiny: string;
                                            paddingRoundSmall: string;
                                            paddingRoundMedium: string;
                                            paddingRoundLarge: string;
                                            iconMarginTiny: string;
                                            iconMarginSmall: string;
                                            iconMarginMedium: string;
                                            iconMarginLarge: string;
                                            iconSizeTiny: string;
                                            iconSizeSmall: string;
                                            iconSizeMedium: string;
                                            iconSizeLarge: string;
                                            rippleDuration: string;
                                        },
                                        any
                                    >;
                                }
                            >;
                            Card: import('../../_mixins').Theme<
                                'Card',
                                {
                                    lineHeight: string;
                                    color: string;
                                    colorModal: string;
                                    colorPopover: string;
                                    colorTarget: string;
                                    colorEmbedded: string;
                                    colorEmbeddedModal: string;
                                    colorEmbeddedPopover: string;
                                    textColor: string;
                                    titleTextColor: string;
                                    borderColor: string;
                                    actionColor: string;
                                    titleFontWeight: string;
                                    closeColorHover: string;
                                    closeColorPressed: string;
                                    closeBorderRadius: string;
                                    closeIconColor: string;
                                    closeIconColorHover: string;
                                    closeIconColorPressed: string;
                                    fontSizeSmall: string;
                                    fontSizeMedium: string;
                                    fontSizeLarge: string;
                                    fontSizeHuge: string;
                                    boxShadow: string;
                                    borderRadius: string;
                                    paddingSmall: string;
                                    paddingMedium: string;
                                    paddingLarge: string;
                                    paddingHuge: string;
                                    titleFontSizeSmall: string;
                                    titleFontSizeMedium: string;
                                    titleFontSizeLarge: string;
                                    titleFontSizeHuge: string;
                                    closeIconSize: string;
                                    closeSize: string;
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
        type: 'default' | 'error' | 'info' | 'success' | 'warning';
        tag: keyof HTMLElementTagNameMap;
        size: 'small' | 'medium' | 'large' | 'huge';
        show: boolean;
        transformOrigin: 'center' | 'mouse';
        autoFocus: boolean;
        loading: boolean;
        bordered: boolean;
        showIcon: boolean;
        closable: boolean;
        displayDirective: 'show' | 'if';
        internalAppear: boolean | undefined;
        embedded: boolean;
        segmented: boolean | import('../..').CardSegmented;
        hoverable: boolean;
        blockScroll: boolean;
        closeOnEsc: boolean;
        maskClosable: boolean;
        trapFocus: boolean;
        internalDialog: boolean;
        unstableShowMask: boolean;
    },
    {}
>;
export default _default;
