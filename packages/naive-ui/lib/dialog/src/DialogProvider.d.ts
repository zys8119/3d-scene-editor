import { ExtractPropTypes, PropType, Ref, CSSProperties } from 'vue';
import type { ExtractPublicPropTypes, Mutable } from '../../_utils';
import { exposedDialogEnvProps } from './DialogEnvironment';
export type DialogOptions = Mutable<
    Omit<
        Partial<ExtractPropTypes<typeof exposedDialogEnvProps>>,
        'internalStyle'
    > & {
        class?: any;
        style?: string | CSSProperties;
    }
>;
export type DialogReactive = {
    readonly key: string;
    readonly destroy: () => void;
} & DialogOptions;
export interface DialogApiInjection {
    destroyAll: () => void;
    create: (options: DialogOptions) => DialogReactive;
    success: (options: DialogOptions) => DialogReactive;
    warning: (options: DialogOptions) => DialogReactive;
    error: (options: DialogOptions) => DialogReactive;
    info: (options: DialogOptions) => DialogReactive;
}
export interface DialogProviderInjection {
    clickedRef: Ref<boolean>;
    clickPositionRef: Ref<{
        x: number;
        y: number;
    } | null>;
}
export type DialogReactiveListInjection = Ref<DialogReactive[]>;
interface DialogInst {
    hide: () => void;
}
export type DialogProviderInst = DialogApiInjection;
export declare const dialogProviderProps: {
    injectionKey: StringConstructor;
    to: PropType<string | HTMLElement>;
};
export type DialogProviderProps = ExtractPublicPropTypes<
    typeof dialogProviderProps
>;
export declare const NDialogProvider: import('vue').DefineComponent<
    {
        injectionKey: StringConstructor;
        to: PropType<string | HTMLElement>;
    },
    {
        dialogList: Ref<
            {
                readonly key: string;
                readonly destroy: () => void;
                type?:
                    | 'default'
                    | 'error'
                    | 'info'
                    | 'success'
                    | 'warning'
                    | undefined;
                content?: string | (() => import('vue').VNodeChild) | undefined;
                icon?: (() => import('vue').VNodeChild) | undefined;
                transformOrigin?: 'center' | 'mouse' | undefined;
                onAfterEnter?: (() => void) | undefined;
                onAfterLeave?: (() => void) | undefined;
                title?: string | (() => import('vue').VNodeChild) | undefined;
                action?: (() => import('vue').VNodeChild) | undefined;
                autoFocus?: boolean | undefined;
                positiveText?: string | undefined;
                negativeText?: string | undefined;
                loading?: boolean | undefined;
                bordered?: boolean | undefined;
                showIcon?: boolean | undefined;
                closable?: boolean | undefined;
                onEsc?: (() => void) | undefined;
                onClose?: (() => unknown) | undefined;
                iconPlacement?: import('./interface').IconPlacement | undefined;
                positiveButtonProps?:
                    | {
                          type?:
                              | import('../../button/src/interface').Type
                              | undefined;
                          tag?: keyof HTMLElementTagNameMap | undefined;
                          block?: boolean | undefined;
                          color?: string | undefined;
                          round?: boolean | undefined;
                          dashed?: boolean | undefined;
                          size?:
                              | import('../../button/src/interface').Size
                              | undefined;
                          text?: boolean | undefined;
                          circle?: boolean | undefined;
                          disabled?: boolean | undefined;
                          onClick?:
                              | import('../../_utils').MaybeArray<
                                    (e: MouseEvent) => void
                                >
                              | undefined;
                          focusable?: boolean | undefined;
                          strong?: boolean | undefined;
                          themeOverrides?:
                              | {
                                    heightTiny?: string | undefined;
                                    heightSmall?: string | undefined;
                                    heightMedium?: string | undefined;
                                    heightLarge?: string | undefined;
                                    borderRadiusTiny?: string | undefined;
                                    borderRadiusSmall?: string | undefined;
                                    borderRadiusMedium?: string | undefined;
                                    borderRadiusLarge?: string | undefined;
                                    fontSizeTiny?: string | undefined;
                                    fontSizeSmall?: string | undefined;
                                    fontSizeMedium?: string | undefined;
                                    fontSizeLarge?: string | undefined;
                                    opacityDisabled?: string | undefined;
                                    colorOpacitySecondary?: string | undefined;
                                    colorOpacitySecondaryHover?:
                                        | string
                                        | undefined;
                                    colorOpacitySecondaryPressed?:
                                        | string
                                        | undefined;
                                    colorSecondary?: string | undefined;
                                    colorSecondaryHover?: string | undefined;
                                    colorSecondaryPressed?: string | undefined;
                                    colorTertiary?: string | undefined;
                                    colorTertiaryHover?: string | undefined;
                                    colorTertiaryPressed?: string | undefined;
                                    colorQuaternary?: string | undefined;
                                    colorQuaternaryHover?: string | undefined;
                                    colorQuaternaryPressed?: string | undefined;
                                    color?: string | undefined;
                                    colorHover?: string | undefined;
                                    colorPressed?: string | undefined;
                                    colorFocus?: string | undefined;
                                    colorDisabled?: string | undefined;
                                    textColor?: string | undefined;
                                    textColorTertiary?: string | undefined;
                                    textColorHover?: string | undefined;
                                    textColorPressed?: string | undefined;
                                    textColorFocus?: string | undefined;
                                    textColorDisabled?: string | undefined;
                                    textColorText?: string | undefined;
                                    textColorTextHover?: string | undefined;
                                    textColorTextPressed?: string | undefined;
                                    textColorTextFocus?: string | undefined;
                                    textColorTextDisabled?: string | undefined;
                                    textColorGhost?: string | undefined;
                                    textColorGhostHover?: string | undefined;
                                    textColorGhostPressed?: string | undefined;
                                    textColorGhostFocus?: string | undefined;
                                    textColorGhostDisabled?: string | undefined;
                                    border?: string | undefined;
                                    borderHover?: string | undefined;
                                    borderPressed?: string | undefined;
                                    borderFocus?: string | undefined;
                                    borderDisabled?: string | undefined;
                                    rippleColor?: string | undefined;
                                    colorPrimary?: string | undefined;
                                    colorHoverPrimary?: string | undefined;
                                    colorPressedPrimary?: string | undefined;
                                    colorFocusPrimary?: string | undefined;
                                    colorDisabledPrimary?: string | undefined;
                                    textColorPrimary?: string | undefined;
                                    textColorHoverPrimary?: string | undefined;
                                    textColorPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorFocusPrimary?: string | undefined;
                                    textColorDisabledPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextPrimary?: string | undefined;
                                    textColorTextHoverPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextFocusPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostPrimary?: string | undefined;
                                    textColorGhostHoverPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledPrimary?:
                                        | string
                                        | undefined;
                                    borderPrimary?: string | undefined;
                                    borderHoverPrimary?: string | undefined;
                                    borderPressedPrimary?: string | undefined;
                                    borderFocusPrimary?: string | undefined;
                                    borderDisabledPrimary?: string | undefined;
                                    rippleColorPrimary?: string | undefined;
                                    colorInfo?: string | undefined;
                                    colorHoverInfo?: string | undefined;
                                    colorPressedInfo?: string | undefined;
                                    colorFocusInfo?: string | undefined;
                                    colorDisabledInfo?: string | undefined;
                                    textColorInfo?: string | undefined;
                                    textColorHoverInfo?: string | undefined;
                                    textColorPressedInfo?: string | undefined;
                                    textColorFocusInfo?: string | undefined;
                                    textColorDisabledInfo?: string | undefined;
                                    textColorTextInfo?: string | undefined;
                                    textColorTextHoverInfo?: string | undefined;
                                    textColorTextPressedInfo?:
                                        | string
                                        | undefined;
                                    textColorTextFocusInfo?: string | undefined;
                                    textColorTextDisabledInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostInfo?: string | undefined;
                                    textColorGhostHoverInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledInfo?:
                                        | string
                                        | undefined;
                                    borderInfo?: string | undefined;
                                    borderHoverInfo?: string | undefined;
                                    borderPressedInfo?: string | undefined;
                                    borderFocusInfo?: string | undefined;
                                    borderDisabledInfo?: string | undefined;
                                    rippleColorInfo?: string | undefined;
                                    colorSuccess?: string | undefined;
                                    colorHoverSuccess?: string | undefined;
                                    colorPressedSuccess?: string | undefined;
                                    colorFocusSuccess?: string | undefined;
                                    colorDisabledSuccess?: string | undefined;
                                    textColorSuccess?: string | undefined;
                                    textColorHoverSuccess?: string | undefined;
                                    textColorPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorFocusSuccess?: string | undefined;
                                    textColorDisabledSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextSuccess?: string | undefined;
                                    textColorTextHoverSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextFocusSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostSuccess?: string | undefined;
                                    textColorGhostHoverSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledSuccess?:
                                        | string
                                        | undefined;
                                    borderSuccess?: string | undefined;
                                    borderHoverSuccess?: string | undefined;
                                    borderPressedSuccess?: string | undefined;
                                    borderFocusSuccess?: string | undefined;
                                    borderDisabledSuccess?: string | undefined;
                                    rippleColorSuccess?: string | undefined;
                                    colorWarning?: string | undefined;
                                    colorHoverWarning?: string | undefined;
                                    colorPressedWarning?: string | undefined;
                                    colorFocusWarning?: string | undefined;
                                    colorDisabledWarning?: string | undefined;
                                    textColorWarning?: string | undefined;
                                    textColorHoverWarning?: string | undefined;
                                    textColorPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorFocusWarning?: string | undefined;
                                    textColorDisabledWarning?:
                                        | string
                                        | undefined;
                                    textColorTextWarning?: string | undefined;
                                    textColorTextHoverWarning?:
                                        | string
                                        | undefined;
                                    textColorTextPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorTextFocusWarning?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostWarning?: string | undefined;
                                    textColorGhostHoverWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledWarning?:
                                        | string
                                        | undefined;
                                    borderWarning?: string | undefined;
                                    borderHoverWarning?: string | undefined;
                                    borderPressedWarning?: string | undefined;
                                    borderFocusWarning?: string | undefined;
                                    borderDisabledWarning?: string | undefined;
                                    rippleColorWarning?: string | undefined;
                                    colorError?: string | undefined;
                                    colorHoverError?: string | undefined;
                                    colorPressedError?: string | undefined;
                                    colorFocusError?: string | undefined;
                                    colorDisabledError?: string | undefined;
                                    textColorError?: string | undefined;
                                    textColorHoverError?: string | undefined;
                                    textColorPressedError?: string | undefined;
                                    textColorFocusError?: string | undefined;
                                    textColorDisabledError?: string | undefined;
                                    textColorTextError?: string | undefined;
                                    textColorTextHoverError?:
                                        | string
                                        | undefined;
                                    textColorTextPressedError?:
                                        | string
                                        | undefined;
                                    textColorTextFocusError?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledError?:
                                        | string
                                        | undefined;
                                    textColorGhostError?: string | undefined;
                                    textColorGhostHoverError?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedError?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusError?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledError?:
                                        | string
                                        | undefined;
                                    borderError?: string | undefined;
                                    borderHoverError?: string | undefined;
                                    borderPressedError?: string | undefined;
                                    borderFocusError?: string | undefined;
                                    borderDisabledError?: string | undefined;
                                    rippleColorError?: string | undefined;
                                    waveOpacity?: string | undefined;
                                    fontWeight?: string | undefined;
                                    fontWeightStrong?: string | undefined;
                                    paddingTiny?: string | undefined;
                                    paddingSmall?: string | undefined;
                                    paddingMedium?: string | undefined;
                                    paddingLarge?: string | undefined;
                                    paddingRoundTiny?: string | undefined;
                                    paddingRoundSmall?: string | undefined;
                                    paddingRoundMedium?: string | undefined;
                                    paddingRoundLarge?: string | undefined;
                                    iconMarginTiny?: string | undefined;
                                    iconMarginSmall?: string | undefined;
                                    iconMarginMedium?: string | undefined;
                                    iconMarginLarge?: string | undefined;
                                    iconSizeTiny?: string | undefined;
                                    iconSizeSmall?: string | undefined;
                                    iconSizeMedium?: string | undefined;
                                    iconSizeLarge?: string | undefined;
                                    rippleDuration?: string | undefined;
                                    peers?:
                                        | {
                                              [x: string]: any;
                                          }
                                        | undefined;
                                    common?:
                                        | {
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
                                          }
                                        | undefined;
                                }
                              | undefined;
                          loading?: boolean | undefined;
                          bordered?: boolean | undefined;
                          textColor?: string | undefined;
                          renderIcon?:
                              | (() => import('vue').VNodeChild)
                              | undefined;
                          tertiary?: boolean | undefined;
                          ghost?: boolean | undefined;
                          keyboard?: boolean | undefined;
                          secondary?: boolean | undefined;
                          quaternary?: boolean | undefined;
                          iconPlacement?: 'left' | 'right' | undefined;
                          attrType?: 'button' | 'reset' | 'submit' | undefined;
                          nativeFocusBehavior?: boolean | undefined;
                      }
                    | undefined;
                negativeButtonProps?:
                    | {
                          type?:
                              | import('../../button/src/interface').Type
                              | undefined;
                          tag?: keyof HTMLElementTagNameMap | undefined;
                          block?: boolean | undefined;
                          color?: string | undefined;
                          round?: boolean | undefined;
                          dashed?: boolean | undefined;
                          size?:
                              | import('../../button/src/interface').Size
                              | undefined;
                          text?: boolean | undefined;
                          circle?: boolean | undefined;
                          disabled?: boolean | undefined;
                          onClick?:
                              | import('../../_utils').MaybeArray<
                                    (e: MouseEvent) => void
                                >
                              | undefined;
                          focusable?: boolean | undefined;
                          strong?: boolean | undefined;
                          themeOverrides?:
                              | {
                                    heightTiny?: string | undefined;
                                    heightSmall?: string | undefined;
                                    heightMedium?: string | undefined;
                                    heightLarge?: string | undefined;
                                    borderRadiusTiny?: string | undefined;
                                    borderRadiusSmall?: string | undefined;
                                    borderRadiusMedium?: string | undefined;
                                    borderRadiusLarge?: string | undefined;
                                    fontSizeTiny?: string | undefined;
                                    fontSizeSmall?: string | undefined;
                                    fontSizeMedium?: string | undefined;
                                    fontSizeLarge?: string | undefined;
                                    opacityDisabled?: string | undefined;
                                    colorOpacitySecondary?: string | undefined;
                                    colorOpacitySecondaryHover?:
                                        | string
                                        | undefined;
                                    colorOpacitySecondaryPressed?:
                                        | string
                                        | undefined;
                                    colorSecondary?: string | undefined;
                                    colorSecondaryHover?: string | undefined;
                                    colorSecondaryPressed?: string | undefined;
                                    colorTertiary?: string | undefined;
                                    colorTertiaryHover?: string | undefined;
                                    colorTertiaryPressed?: string | undefined;
                                    colorQuaternary?: string | undefined;
                                    colorQuaternaryHover?: string | undefined;
                                    colorQuaternaryPressed?: string | undefined;
                                    color?: string | undefined;
                                    colorHover?: string | undefined;
                                    colorPressed?: string | undefined;
                                    colorFocus?: string | undefined;
                                    colorDisabled?: string | undefined;
                                    textColor?: string | undefined;
                                    textColorTertiary?: string | undefined;
                                    textColorHover?: string | undefined;
                                    textColorPressed?: string | undefined;
                                    textColorFocus?: string | undefined;
                                    textColorDisabled?: string | undefined;
                                    textColorText?: string | undefined;
                                    textColorTextHover?: string | undefined;
                                    textColorTextPressed?: string | undefined;
                                    textColorTextFocus?: string | undefined;
                                    textColorTextDisabled?: string | undefined;
                                    textColorGhost?: string | undefined;
                                    textColorGhostHover?: string | undefined;
                                    textColorGhostPressed?: string | undefined;
                                    textColorGhostFocus?: string | undefined;
                                    textColorGhostDisabled?: string | undefined;
                                    border?: string | undefined;
                                    borderHover?: string | undefined;
                                    borderPressed?: string | undefined;
                                    borderFocus?: string | undefined;
                                    borderDisabled?: string | undefined;
                                    rippleColor?: string | undefined;
                                    colorPrimary?: string | undefined;
                                    colorHoverPrimary?: string | undefined;
                                    colorPressedPrimary?: string | undefined;
                                    colorFocusPrimary?: string | undefined;
                                    colorDisabledPrimary?: string | undefined;
                                    textColorPrimary?: string | undefined;
                                    textColorHoverPrimary?: string | undefined;
                                    textColorPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorFocusPrimary?: string | undefined;
                                    textColorDisabledPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextPrimary?: string | undefined;
                                    textColorTextHoverPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextFocusPrimary?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostPrimary?: string | undefined;
                                    textColorGhostHoverPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusPrimary?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledPrimary?:
                                        | string
                                        | undefined;
                                    borderPrimary?: string | undefined;
                                    borderHoverPrimary?: string | undefined;
                                    borderPressedPrimary?: string | undefined;
                                    borderFocusPrimary?: string | undefined;
                                    borderDisabledPrimary?: string | undefined;
                                    rippleColorPrimary?: string | undefined;
                                    colorInfo?: string | undefined;
                                    colorHoverInfo?: string | undefined;
                                    colorPressedInfo?: string | undefined;
                                    colorFocusInfo?: string | undefined;
                                    colorDisabledInfo?: string | undefined;
                                    textColorInfo?: string | undefined;
                                    textColorHoverInfo?: string | undefined;
                                    textColorPressedInfo?: string | undefined;
                                    textColorFocusInfo?: string | undefined;
                                    textColorDisabledInfo?: string | undefined;
                                    textColorTextInfo?: string | undefined;
                                    textColorTextHoverInfo?: string | undefined;
                                    textColorTextPressedInfo?:
                                        | string
                                        | undefined;
                                    textColorTextFocusInfo?: string | undefined;
                                    textColorTextDisabledInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostInfo?: string | undefined;
                                    textColorGhostHoverInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusInfo?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledInfo?:
                                        | string
                                        | undefined;
                                    borderInfo?: string | undefined;
                                    borderHoverInfo?: string | undefined;
                                    borderPressedInfo?: string | undefined;
                                    borderFocusInfo?: string | undefined;
                                    borderDisabledInfo?: string | undefined;
                                    rippleColorInfo?: string | undefined;
                                    colorSuccess?: string | undefined;
                                    colorHoverSuccess?: string | undefined;
                                    colorPressedSuccess?: string | undefined;
                                    colorFocusSuccess?: string | undefined;
                                    colorDisabledSuccess?: string | undefined;
                                    textColorSuccess?: string | undefined;
                                    textColorHoverSuccess?: string | undefined;
                                    textColorPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorFocusSuccess?: string | undefined;
                                    textColorDisabledSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextSuccess?: string | undefined;
                                    textColorTextHoverSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextFocusSuccess?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostSuccess?: string | undefined;
                                    textColorGhostHoverSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusSuccess?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledSuccess?:
                                        | string
                                        | undefined;
                                    borderSuccess?: string | undefined;
                                    borderHoverSuccess?: string | undefined;
                                    borderPressedSuccess?: string | undefined;
                                    borderFocusSuccess?: string | undefined;
                                    borderDisabledSuccess?: string | undefined;
                                    rippleColorSuccess?: string | undefined;
                                    colorWarning?: string | undefined;
                                    colorHoverWarning?: string | undefined;
                                    colorPressedWarning?: string | undefined;
                                    colorFocusWarning?: string | undefined;
                                    colorDisabledWarning?: string | undefined;
                                    textColorWarning?: string | undefined;
                                    textColorHoverWarning?: string | undefined;
                                    textColorPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorFocusWarning?: string | undefined;
                                    textColorDisabledWarning?:
                                        | string
                                        | undefined;
                                    textColorTextWarning?: string | undefined;
                                    textColorTextHoverWarning?:
                                        | string
                                        | undefined;
                                    textColorTextPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorTextFocusWarning?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostWarning?: string | undefined;
                                    textColorGhostHoverWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusWarning?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledWarning?:
                                        | string
                                        | undefined;
                                    borderWarning?: string | undefined;
                                    borderHoverWarning?: string | undefined;
                                    borderPressedWarning?: string | undefined;
                                    borderFocusWarning?: string | undefined;
                                    borderDisabledWarning?: string | undefined;
                                    rippleColorWarning?: string | undefined;
                                    colorError?: string | undefined;
                                    colorHoverError?: string | undefined;
                                    colorPressedError?: string | undefined;
                                    colorFocusError?: string | undefined;
                                    colorDisabledError?: string | undefined;
                                    textColorError?: string | undefined;
                                    textColorHoverError?: string | undefined;
                                    textColorPressedError?: string | undefined;
                                    textColorFocusError?: string | undefined;
                                    textColorDisabledError?: string | undefined;
                                    textColorTextError?: string | undefined;
                                    textColorTextHoverError?:
                                        | string
                                        | undefined;
                                    textColorTextPressedError?:
                                        | string
                                        | undefined;
                                    textColorTextFocusError?:
                                        | string
                                        | undefined;
                                    textColorTextDisabledError?:
                                        | string
                                        | undefined;
                                    textColorGhostError?: string | undefined;
                                    textColorGhostHoverError?:
                                        | string
                                        | undefined;
                                    textColorGhostPressedError?:
                                        | string
                                        | undefined;
                                    textColorGhostFocusError?:
                                        | string
                                        | undefined;
                                    textColorGhostDisabledError?:
                                        | string
                                        | undefined;
                                    borderError?: string | undefined;
                                    borderHoverError?: string | undefined;
                                    borderPressedError?: string | undefined;
                                    borderFocusError?: string | undefined;
                                    borderDisabledError?: string | undefined;
                                    rippleColorError?: string | undefined;
                                    waveOpacity?: string | undefined;
                                    fontWeight?: string | undefined;
                                    fontWeightStrong?: string | undefined;
                                    paddingTiny?: string | undefined;
                                    paddingSmall?: string | undefined;
                                    paddingMedium?: string | undefined;
                                    paddingLarge?: string | undefined;
                                    paddingRoundTiny?: string | undefined;
                                    paddingRoundSmall?: string | undefined;
                                    paddingRoundMedium?: string | undefined;
                                    paddingRoundLarge?: string | undefined;
                                    iconMarginTiny?: string | undefined;
                                    iconMarginSmall?: string | undefined;
                                    iconMarginMedium?: string | undefined;
                                    iconMarginLarge?: string | undefined;
                                    iconSizeTiny?: string | undefined;
                                    iconSizeSmall?: string | undefined;
                                    iconSizeMedium?: string | undefined;
                                    iconSizeLarge?: string | undefined;
                                    rippleDuration?: string | undefined;
                                    peers?:
                                        | {
                                              [x: string]: any;
                                          }
                                        | undefined;
                                    common?:
                                        | {
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
                                          }
                                        | undefined;
                                }
                              | undefined;
                          loading?: boolean | undefined;
                          bordered?: boolean | undefined;
                          textColor?: string | undefined;
                          renderIcon?:
                              | (() => import('vue').VNodeChild)
                              | undefined;
                          tertiary?: boolean | undefined;
                          ghost?: boolean | undefined;
                          keyboard?: boolean | undefined;
                          secondary?: boolean | undefined;
                          quaternary?: boolean | undefined;
                          iconPlacement?: 'left' | 'right' | undefined;
                          attrType?: 'button' | 'reset' | 'submit' | undefined;
                          nativeFocusBehavior?: boolean | undefined;
                      }
                    | undefined;
                onPositiveClick?: ((e: MouseEvent) => unknown) | undefined;
                onNegativeClick?: ((e: MouseEvent) => unknown) | undefined;
                blockScroll?: boolean | undefined;
                closeOnEsc?: boolean | undefined;
                maskClosable?: boolean | undefined;
                onMaskClick?: ((e: MouseEvent) => void) | undefined;
                class?: any;
                style?: any;
            }[]
        >;
        dialogInstRefs: Record<string, DialogInst>;
        handleAfterLeave: (key: String) => void;
        create: (options?: DialogOptions) => DialogReactive;
        destroyAll: () => void;
        info: (options: DialogOptions) => DialogReactive;
        success: (options: DialogOptions) => DialogReactive;
        warning: (options: DialogOptions) => DialogReactive;
        error: (options: DialogOptions) => DialogReactive;
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
            injectionKey: StringConstructor;
            to: PropType<string | HTMLElement>;
        }>
    >,
    {},
    {}
>;
export {};
