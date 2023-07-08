import { PropType } from 'vue';
import { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type { OnUpdateChecked, CheckboxInst } from './interface';
export declare const checkboxProps: {
    size: PropType<'small' | 'medium' | 'large'>;
    checked: {
        type: PropType<string | number | boolean | undefined>;
        default: undefined;
    };
    defaultChecked: {
        type: PropType<string | number | boolean>;
        default: boolean;
    };
    value: PropType<string | number>;
    disabled: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    indeterminate: BooleanConstructor;
    label: StringConstructor;
    focusable: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkedValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    uncheckedValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    'onUpdate:checked': PropType<MaybeArray<OnUpdateChecked>>;
    onUpdateChecked: PropType<MaybeArray<OnUpdateChecked>>;
    privateInsideTable: BooleanConstructor;
    onChange: PropType<MaybeArray<OnUpdateChecked>>;
    theme: PropType<
        import('../../_mixins').Theme<
            'Checkbox',
            {
                labelLineHeight: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderRadius: string;
                color: string;
                colorChecked: string;
                colorDisabled: string;
                colorDisabledChecked: string;
                colorTableHeader: string;
                colorTableHeaderModal: string;
                colorTableHeaderPopover: string;
                checkMarkColor: string;
                checkMarkColorDisabled: string;
                checkMarkColorDisabledChecked: string;
                border: string;
                borderDisabled: string;
                borderDisabledChecked: string;
                borderChecked: string;
                borderFocus: string;
                boxShadowFocus: string;
                textColor: string;
                textColorDisabled: string;
                sizeSmall: string;
                sizeMedium: string;
                sizeLarge: string;
                labelPadding: string;
                labelFontWeight: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Checkbox',
                {
                    labelLineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    color: string;
                    colorChecked: string;
                    colorDisabled: string;
                    colorDisabledChecked: string;
                    colorTableHeader: string;
                    colorTableHeaderModal: string;
                    colorTableHeaderPopover: string;
                    checkMarkColor: string;
                    checkMarkColorDisabled: string;
                    checkMarkColorDisabledChecked: string;
                    border: string;
                    borderDisabled: string;
                    borderDisabledChecked: string;
                    borderChecked: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    textColor: string;
                    textColorDisabled: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Checkbox',
                {
                    labelLineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    color: string;
                    colorChecked: string;
                    colorDisabled: string;
                    colorDisabledChecked: string;
                    colorTableHeader: string;
                    colorTableHeaderModal: string;
                    colorTableHeaderPopover: string;
                    checkMarkColor: string;
                    checkMarkColorDisabled: string;
                    checkMarkColorDisabledChecked: string;
                    border: string;
                    borderDisabled: string;
                    borderDisabledChecked: string;
                    borderChecked: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    textColor: string;
                    textColorDisabled: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >
    >;
};
export type CheckboxProps = ExtractPublicPropTypes<typeof checkboxProps>;
declare const _default: import('vue').DefineComponent<
    {
        size: PropType<'small' | 'medium' | 'large'>;
        checked: {
            type: PropType<string | number | boolean | undefined>;
            default: undefined;
        };
        defaultChecked: {
            type: PropType<string | number | boolean>;
            default: boolean;
        };
        value: PropType<string | number>;
        disabled: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        indeterminate: BooleanConstructor;
        label: StringConstructor;
        focusable: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkedValue: {
            type: (
                | BooleanConstructor
                | StringConstructor
                | NumberConstructor
            )[];
            default: boolean;
        };
        uncheckedValue: {
            type: (
                | BooleanConstructor
                | StringConstructor
                | NumberConstructor
            )[];
            default: boolean;
        };
        'onUpdate:checked': PropType<MaybeArray<OnUpdateChecked>>;
        onUpdateChecked: PropType<MaybeArray<OnUpdateChecked>>;
        privateInsideTable: BooleanConstructor;
        onChange: PropType<MaybeArray<OnUpdateChecked>>;
        theme: PropType<
            import('../../_mixins').Theme<
                'Checkbox',
                {
                    labelLineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    color: string;
                    colorChecked: string;
                    colorDisabled: string;
                    colorDisabledChecked: string;
                    colorTableHeader: string;
                    colorTableHeaderModal: string;
                    colorTableHeaderPopover: string;
                    checkMarkColor: string;
                    checkMarkColorDisabled: string;
                    checkMarkColorDisabledChecked: string;
                    border: string;
                    borderDisabled: string;
                    borderDisabledChecked: string;
                    borderChecked: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    textColor: string;
                    textColorDisabled: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Checkbox',
                    {
                        labelLineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        color: string;
                        colorChecked: string;
                        colorDisabled: string;
                        colorDisabledChecked: string;
                        colorTableHeader: string;
                        colorTableHeaderModal: string;
                        colorTableHeaderPopover: string;
                        checkMarkColor: string;
                        checkMarkColorDisabled: string;
                        checkMarkColorDisabledChecked: string;
                        border: string;
                        borderDisabled: string;
                        borderDisabledChecked: string;
                        borderChecked: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        textColor: string;
                        textColorDisabled: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Checkbox',
                    {
                        labelLineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        color: string;
                        colorChecked: string;
                        colorDisabled: string;
                        colorDisabledChecked: string;
                        colorTableHeader: string;
                        colorTableHeaderModal: string;
                        colorTableHeaderPopover: string;
                        checkMarkColor: string;
                        checkMarkColorDisabled: string;
                        checkMarkColorDisabledChecked: string;
                        border: string;
                        borderDisabled: string;
                        borderDisabledChecked: string;
                        borderChecked: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        textColor: string;
                        textColorDisabled: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >
        >;
    },
    import('../../_mixins/use-form-item').UseFormItem<
        'small' | 'medium' | 'large'
    > &
        CheckboxInst & {
            rtlEnabled:
                | globalThis.Ref<
                      | import('../../config-provider/src/internal-interface').RtlItem
                      | undefined
                  >
                | undefined;
            selfRef: globalThis.Ref<HTMLDivElement | null>;
            mergedClsPrefix: globalThis.ComputedRef<string>;
            mergedDisabled: globalThis.ComputedRef<boolean>;
            renderedChecked: globalThis.ComputedRef<boolean>;
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
                    labelLineHeight: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderRadius: string;
                    color: string;
                    colorChecked: string;
                    colorDisabled: string;
                    colorDisabledChecked: string;
                    colorTableHeader: string;
                    colorTableHeaderModal: string;
                    colorTableHeaderPopover: string;
                    checkMarkColor: string;
                    checkMarkColorDisabled: string;
                    checkMarkColorDisabledChecked: string;
                    border: string;
                    borderDisabled: string;
                    borderDisabledChecked: string;
                    borderChecked: string;
                    borderFocus: string;
                    boxShadowFocus: string;
                    textColor: string;
                    textColorDisabled: string;
                    sizeSmall: string;
                    sizeMedium: string;
                    sizeLarge: string;
                    labelPadding: string;
                    labelFontWeight: string;
                };
                peers: any;
                peerOverrides: {
                    [x: string]: any;
                };
            }>;
            labelId: string;
            handleClick: (e: MouseEvent) => void;
            handleKeyUp: (e: KeyboardEvent) => void;
            handleKeyDown: (e: KeyboardEvent) => void;
            cssVars:
                | globalThis.ComputedRef<{
                      '--n-label-line-height': string;
                      '--n-label-font-weight': string;
                      '--n-size': string;
                      '--n-bezier': string;
                      '--n-border-radius': string;
                      '--n-border': string;
                      '--n-border-checked': string;
                      '--n-border-focus': string;
                      '--n-border-disabled': string;
                      '--n-border-disabled-checked': string;
                      '--n-box-shadow-focus': string;
                      '--n-color': string;
                      '--n-color-checked': string;
                      '--n-color-table': string;
                      '--n-color-table-modal': string;
                      '--n-color-table-popover': string;
                      '--n-color-disabled': string;
                      '--n-color-disabled-checked': string;
                      '--n-text-color': string;
                      '--n-text-color-disabled': string;
                      '--n-check-mark-color': string;
                      '--n-check-mark-color-disabled': string;
                      '--n-check-mark-color-disabled-checked': string;
                      '--n-font-size': string;
                      '--n-label-padding': string;
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
            size: PropType<'small' | 'medium' | 'large'>;
            checked: {
                type: PropType<string | number | boolean | undefined>;
                default: undefined;
            };
            defaultChecked: {
                type: PropType<string | number | boolean>;
                default: boolean;
            };
            value: PropType<string | number>;
            disabled: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            indeterminate: BooleanConstructor;
            label: StringConstructor;
            focusable: {
                type: BooleanConstructor;
                default: boolean;
            };
            checkedValue: {
                type: (
                    | BooleanConstructor
                    | StringConstructor
                    | NumberConstructor
                )[];
                default: boolean;
            };
            uncheckedValue: {
                type: (
                    | BooleanConstructor
                    | StringConstructor
                    | NumberConstructor
                )[];
                default: boolean;
            };
            'onUpdate:checked': PropType<MaybeArray<OnUpdateChecked>>;
            onUpdateChecked: PropType<MaybeArray<OnUpdateChecked>>;
            privateInsideTable: BooleanConstructor;
            onChange: PropType<MaybeArray<OnUpdateChecked>>;
            theme: PropType<
                import('../../_mixins').Theme<
                    'Checkbox',
                    {
                        labelLineHeight: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        borderRadius: string;
                        color: string;
                        colorChecked: string;
                        colorDisabled: string;
                        colorDisabledChecked: string;
                        colorTableHeader: string;
                        colorTableHeaderModal: string;
                        colorTableHeaderPopover: string;
                        checkMarkColor: string;
                        checkMarkColorDisabled: string;
                        checkMarkColorDisabledChecked: string;
                        border: string;
                        borderDisabled: string;
                        borderDisabledChecked: string;
                        borderChecked: string;
                        borderFocus: string;
                        boxShadowFocus: string;
                        textColor: string;
                        textColorDisabled: string;
                        sizeSmall: string;
                        sizeMedium: string;
                        sizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Checkbox',
                        {
                            labelLineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            color: string;
                            colorChecked: string;
                            colorDisabled: string;
                            colorDisabledChecked: string;
                            colorTableHeader: string;
                            colorTableHeaderModal: string;
                            colorTableHeaderPopover: string;
                            checkMarkColor: string;
                            checkMarkColorDisabled: string;
                            checkMarkColorDisabledChecked: string;
                            border: string;
                            borderDisabled: string;
                            borderDisabledChecked: string;
                            borderChecked: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            textColor: string;
                            textColorDisabled: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Checkbox',
                        {
                            labelLineHeight: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            borderRadius: string;
                            color: string;
                            colorChecked: string;
                            colorDisabled: string;
                            colorDisabledChecked: string;
                            colorTableHeader: string;
                            colorTableHeaderModal: string;
                            colorTableHeaderPopover: string;
                            checkMarkColor: string;
                            checkMarkColorDisabled: string;
                            checkMarkColorDisabledChecked: string;
                            border: string;
                            borderDisabled: string;
                            borderDisabledChecked: string;
                            borderChecked: string;
                            borderFocus: string;
                            boxShadowFocus: string;
                            textColor: string;
                            textColorDisabled: string;
                            sizeSmall: string;
                            sizeMedium: string;
                            sizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        disabled: boolean | undefined;
        checked: string | number | boolean | undefined;
        indeterminate: boolean;
        focusable: boolean;
        defaultChecked: string | number | boolean;
        checkedValue: string | number | boolean;
        uncheckedValue: string | number | boolean;
        privateInsideTable: boolean;
    },
    {}
>;
export default _default;
