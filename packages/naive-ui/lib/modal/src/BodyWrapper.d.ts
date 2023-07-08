import { PropType, VNode, ComponentPublicInstance, VNodeChild } from 'vue';
declare const _default: import('vue').DefineComponent<
    {
        renderMask: PropType<() => VNodeChild>;
        onClickoutside: PropType<(e: MouseEvent) => void>;
        onBeforeLeave: {
            type: FunctionConstructor;
            required: true;
        };
        onAfterLeave: {
            type: FunctionConstructor;
            required: true;
        };
        onPositiveClick: {
            type: FunctionConstructor;
            required: true;
        };
        onNegativeClick: {
            type: FunctionConstructor;
            required: true;
        };
        onClose: {
            type: FunctionConstructor;
            required: true;
        };
        onAfterEnter: PropType<() => void>;
        onEsc: PropType<(e: KeyboardEvent) => void>;
        icon: PropType<() => VNodeChild>;
        type: {
            readonly type: PropType<
                'default' | 'error' | 'info' | 'success' | 'warning'
            >;
            readonly default: 'default';
        };
        title: PropType<string | (() => VNodeChild)>;
        closable: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        negativeText: StringConstructor;
        positiveText: StringConstructor;
        positiveButtonProps: PropType<import('../..').ButtonProps>;
        negativeButtonProps: PropType<import('../..').ButtonProps>;
        content: PropType<string | (() => VNodeChild)>;
        action: PropType<() => VNodeChild>;
        showIcon: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        loading: BooleanConstructor;
        bordered: BooleanConstructor;
        iconPlacement: PropType<
            import('../../dialog/src/interface').IconPlacement
        >;
        contentStyle: PropType<string | import('vue').CSSProperties>;
        headerStyle: PropType<string | import('vue').CSSProperties>;
        headerExtraStyle: PropType<string | import('vue').CSSProperties>;
        footerStyle: PropType<string | import('vue').CSSProperties>;
        embedded: BooleanConstructor;
        segmented: {
            readonly type: PropType<
                boolean | import('../../card').CardSegmented
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
        show: {
            type: BooleanConstructor;
            required: true;
        };
        preset: PropType<'dialog' | 'confirm' | 'card'>;
        displayDirective: {
            type: PropType<'show' | 'if'>;
            required: true;
        };
        trapFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoFocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        blockScroll: BooleanConstructor;
    },
    {
        mergedTheme: globalThis.Ref<{
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
                color: string;
                textColor: string;
                boxShadow: string;
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
                Dialog?:
                    | {
                          peers?:
                              | {
                                    Button?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Card?:
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
        appear: globalThis.Ref<boolean | undefined>;
        isMounted: globalThis.Ref<boolean>;
        mergedClsPrefix: globalThis.Ref<string>;
        bodyRef: globalThis.Ref<
            | ComponentPublicInstance<
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  {},
                  false,
                  import('vue').ComponentOptionsBase<
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      any,
                      {},
                      {},
                      string,
                      {}
                  >,
                  {},
                  {}
              >
            | HTMLElement
            | null
        >;
        scrollbarRef: globalThis.Ref<{
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
        displayed: globalThis.Ref<boolean>;
        childNodeRef: globalThis.Ref<VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
                [key: string]: any;
            }
        > | null>;
        handlePositiveClick: () => void;
        handleNegativeClick: () => void;
        handleCloseClick: () => void;
        handleAfterLeave: () => void;
        handleBeforeLeave: (el: HTMLElement) => void;
        handleEnter: (el: HTMLElement) => void;
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
            renderMask: PropType<() => VNodeChild>;
            onClickoutside: PropType<(e: MouseEvent) => void>;
            onBeforeLeave: {
                type: FunctionConstructor;
                required: true;
            };
            onAfterLeave: {
                type: FunctionConstructor;
                required: true;
            };
            onPositiveClick: {
                type: FunctionConstructor;
                required: true;
            };
            onNegativeClick: {
                type: FunctionConstructor;
                required: true;
            };
            onClose: {
                type: FunctionConstructor;
                required: true;
            };
            onAfterEnter: PropType<() => void>;
            onEsc: PropType<(e: KeyboardEvent) => void>;
            icon: PropType<() => VNodeChild>;
            type: {
                readonly type: PropType<
                    'default' | 'error' | 'info' | 'success' | 'warning'
                >;
                readonly default: 'default';
            };
            title: PropType<string | (() => VNodeChild)>;
            closable: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            negativeText: StringConstructor;
            positiveText: StringConstructor;
            positiveButtonProps: PropType<import('../..').ButtonProps>;
            negativeButtonProps: PropType<import('../..').ButtonProps>;
            content: PropType<string | (() => VNodeChild)>;
            action: PropType<() => VNodeChild>;
            showIcon: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            loading: BooleanConstructor;
            bordered: BooleanConstructor;
            iconPlacement: PropType<
                import('../../dialog/src/interface').IconPlacement
            >;
            contentStyle: PropType<string | import('vue').CSSProperties>;
            headerStyle: PropType<string | import('vue').CSSProperties>;
            headerExtraStyle: PropType<string | import('vue').CSSProperties>;
            footerStyle: PropType<string | import('vue').CSSProperties>;
            embedded: BooleanConstructor;
            segmented: {
                readonly type: PropType<
                    boolean | import('../../card').CardSegmented
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
            show: {
                type: BooleanConstructor;
                required: true;
            };
            preset: PropType<'dialog' | 'confirm' | 'card'>;
            displayDirective: {
                type: PropType<'show' | 'if'>;
                required: true;
            };
            trapFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoFocus: {
                type: BooleanConstructor;
                default: boolean;
            };
            blockScroll: BooleanConstructor;
        }>
    >,
    {
        type: 'default' | 'error' | 'info' | 'success' | 'warning';
        tag: keyof HTMLElementTagNameMap;
        size: 'small' | 'medium' | 'large' | 'huge';
        autoFocus: boolean;
        loading: boolean;
        bordered: boolean;
        showIcon: boolean;
        closable: boolean;
        embedded: boolean;
        segmented: boolean | import('../../card').CardSegmented;
        hoverable: boolean;
        blockScroll: boolean;
        trapFocus: boolean;
    },
    {}
>;
export default _default;
