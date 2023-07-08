import { PropType } from 'vue';
import {
    IsHourDisabled,
    IsMinuteDisabled,
    IsSecondDisabled,
    ItemValue,
    Item,
} from './interface';
import { MaybeArray } from '../../_utils';
declare const _default: import('vue').DefineComponent<
    {
        actions: {
            type: PropType<('confirm' | 'now')[] | null>;
            default: () => string[];
        };
        showHour: {
            type: BooleanConstructor;
            default: boolean;
        };
        showMinute: {
            type: BooleanConstructor;
            default: boolean;
        };
        showSecond: {
            type: BooleanConstructor;
            default: boolean;
        };
        showPeriod: {
            type: BooleanConstructor;
            default: boolean;
        };
        isHourInvalid: BooleanConstructor;
        isMinuteInvalid: BooleanConstructor;
        isSecondInvalid: BooleanConstructor;
        isAmPmInvalid: BooleanConstructor;
        isValueInvalid: BooleanConstructor;
        hourValue: {
            type: PropType<number | null>;
            default: null;
        };
        minuteValue: {
            type: PropType<number | null>;
            default: null;
        };
        secondValue: {
            type: PropType<number | null>;
            default: null;
        };
        amPmValue: {
            type: PropType<'am' | 'pm' | null>;
            default: null;
        };
        isHourDisabled: PropType<IsHourDisabled>;
        isMinuteDisabled: PropType<IsMinuteDisabled>;
        isSecondDisabled: PropType<IsSecondDisabled>;
        onHourClick: {
            type: PropType<(value: ItemValue) => void>;
            required: boolean;
        };
        onMinuteClick: {
            type: PropType<(value: ItemValue) => void>;
            required: boolean;
        };
        onSecondClick: {
            type: PropType<(value: ItemValue) => void>;
            required: boolean;
        };
        onAmPmClick: {
            type: PropType<(value: ItemValue) => void>;
            required: boolean;
        };
        onNowClick: PropType<() => void>;
        nowText: StringConstructor;
        confirmText: StringConstructor;
        transitionDisabled: BooleanConstructor;
        onConfirmClick: PropType<() => void>;
        onFocusin: PropType<(e: FocusEvent) => void>;
        onFocusout: PropType<(e: FocusEvent) => void>;
        onFocusDetectorFocus: PropType<() => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        hours: PropType<MaybeArray<number>>;
        minutes: PropType<MaybeArray<number>>;
        seconds: PropType<MaybeArray<number>>;
        use12Hours: BooleanConstructor;
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
                panelColor: string;
                panelBoxShadow: string;
                panelDividerColor: string;
                itemTextColor: string;
                itemTextColorActive: string;
                itemColorHover: string;
                itemOpacityDisabled: string;
                itemBorderRadius: string;
                borderRadius: string;
                iconColor: string;
                iconColorDisabled: string;
                itemFontSize: string;
                itemHeight: string;
                itemWidth: string;
                panelActionPadding: string;
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
                Input: import('../../_mixins').Theme<
                    'Input',
                    {
                        countTextColorDisabled: string;
                        countTextColor: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        lineHeight: string;
                        lineHeightTextarea: string;
                        borderRadius: string;
                        iconSize: string;
                        groupLabelColor: string;
                        groupLabelTextColor: string;
                        textColor: string;
                        textColorDisabled: string;
                        textDecorationColor: string;
                        caretColor: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorFocus: string;
                        groupLabelBorder: string;
                        border: string;
                        borderHover: string;
                        borderDisabled: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        loadingColor: string;
                        loadingColorWarning: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        colorFocusWarning: string;
                        borderFocusWarning: string;
                        boxShadowFocusWarning: string;
                        caretColorWarning: string;
                        loadingColorError: string;
                        borderError: string;
                        borderHoverError: string;
                        colorFocusError: string;
                        borderFocusError: string;
                        boxShadowFocusError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        iconColor: string;
                        iconColorDisabled: string;
                        iconColorHover: string;
                        iconColorPressed: string;
                        suffixTextColor: string;
                        paddingTiny: string;
                        paddingSmall: string;
                        paddingMedium: string;
                        paddingLarge: string;
                        clearSize: string;
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
                Button?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Input?:
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
        mergedClsPrefix: globalThis.Ref<string>;
        hours: globalThis.ComputedRef<Item[]>;
        minutes: globalThis.ComputedRef<Item[]>;
        seconds: globalThis.ComputedRef<Item[]>;
        amPm: globalThis.ComputedRef<Item[]>;
        hourScrollRef: globalThis.Ref<null>;
        minuteScrollRef: globalThis.Ref<null>;
        secondScrollRef: globalThis.Ref<null>;
        amPmScrollRef: globalThis.Ref<null>;
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
            actions: {
                type: PropType<('confirm' | 'now')[] | null>;
                default: () => string[];
            };
            showHour: {
                type: BooleanConstructor;
                default: boolean;
            };
            showMinute: {
                type: BooleanConstructor;
                default: boolean;
            };
            showSecond: {
                type: BooleanConstructor;
                default: boolean;
            };
            showPeriod: {
                type: BooleanConstructor;
                default: boolean;
            };
            isHourInvalid: BooleanConstructor;
            isMinuteInvalid: BooleanConstructor;
            isSecondInvalid: BooleanConstructor;
            isAmPmInvalid: BooleanConstructor;
            isValueInvalid: BooleanConstructor;
            hourValue: {
                type: PropType<number | null>;
                default: null;
            };
            minuteValue: {
                type: PropType<number | null>;
                default: null;
            };
            secondValue: {
                type: PropType<number | null>;
                default: null;
            };
            amPmValue: {
                type: PropType<'am' | 'pm' | null>;
                default: null;
            };
            isHourDisabled: PropType<IsHourDisabled>;
            isMinuteDisabled: PropType<IsMinuteDisabled>;
            isSecondDisabled: PropType<IsSecondDisabled>;
            onHourClick: {
                type: PropType<(value: ItemValue) => void>;
                required: boolean;
            };
            onMinuteClick: {
                type: PropType<(value: ItemValue) => void>;
                required: boolean;
            };
            onSecondClick: {
                type: PropType<(value: ItemValue) => void>;
                required: boolean;
            };
            onAmPmClick: {
                type: PropType<(value: ItemValue) => void>;
                required: boolean;
            };
            onNowClick: PropType<() => void>;
            nowText: StringConstructor;
            confirmText: StringConstructor;
            transitionDisabled: BooleanConstructor;
            onConfirmClick: PropType<() => void>;
            onFocusin: PropType<(e: FocusEvent) => void>;
            onFocusout: PropType<(e: FocusEvent) => void>;
            onFocusDetectorFocus: PropType<() => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            hours: PropType<MaybeArray<number>>;
            minutes: PropType<MaybeArray<number>>;
            seconds: PropType<MaybeArray<number>>;
            use12Hours: BooleanConstructor;
        }>
    >,
    {
        transitionDisabled: boolean;
        actions: ('confirm' | 'now')[] | null;
        use12Hours: boolean;
        isValueInvalid: boolean;
        isHourInvalid: boolean;
        isMinuteInvalid: boolean;
        isSecondInvalid: boolean;
        hourValue: number | null;
        minuteValue: number | null;
        secondValue: number | null;
        amPmValue: 'am' | 'pm' | null;
        showHour: boolean;
        showMinute: boolean;
        showSecond: boolean;
        showPeriod: boolean;
        isAmPmInvalid: boolean;
    },
    {}
>;
export default _default;
