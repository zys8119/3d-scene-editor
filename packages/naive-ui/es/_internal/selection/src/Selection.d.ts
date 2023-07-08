import { PropType, InputHTMLAttributes } from 'vue';
import type {
    RenderLabel,
    RenderLabelImpl,
} from '../../select-menu/src/interface';
import type { SelectBaseOption } from '../../../select/src/interface';
import type { FormValidationStatus } from '../../../form/src/interface';
import type { RenderTag } from './interface';
export interface InternalSelectionInst {
    isComposing: boolean;
    focus: () => void;
    focusInput: () => void;
    blur: () => void;
    $el: HTMLElement;
}
declare const _default: import('vue').DefineComponent<
    {
        clsPrefix: {
            type: StringConstructor;
            required: true;
        };
        bordered: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        active: BooleanConstructor;
        pattern: {
            type: StringConstructor;
            default: string;
        };
        placeholder: StringConstructor;
        selectedOption: {
            type: PropType<SelectBaseOption<
                string | number,
                | string
                | ((
                      option: SelectBaseOption<string | number, string | any>,
                      selected: boolean
                  ) => import('vue').VNodeChild)
            > | null>;
            default: null;
        };
        selectedOptions: {
            type: PropType<
                | SelectBaseOption<
                      string | number,
                      | string
                      | ((
                            option: SelectBaseOption<
                                string | number,
                                string | any
                            >,
                            selected: boolean
                        ) => import('vue').VNodeChild)
                  >[]
                | null
            >;
            default: null;
        };
        labelField: {
            type: StringConstructor;
            default: string;
        };
        valueField: {
            type: StringConstructor;
            default: string;
        };
        multiple: BooleanConstructor;
        filterable: BooleanConstructor;
        clearable: BooleanConstructor;
        disabled: BooleanConstructor;
        size: {
            type: PropType<'small' | 'medium' | 'large' | 'tiny'>;
            default: string;
        };
        loading: BooleanConstructor;
        autofocus: BooleanConstructor;
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        inputProps: PropType<InputHTMLAttributes>;
        focused: BooleanConstructor;
        renderTag: PropType<RenderTag>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onClick: PropType<(e: MouseEvent) => void>;
        onBlur: PropType<(e: FocusEvent) => void>;
        onFocus: PropType<(e: FocusEvent) => void>;
        onDeleteOption: PropType<(option: SelectBaseOption) => void>;
        maxTagCount: PropType<number | 'responsive'>;
        onClear: PropType<(e: MouseEvent) => void>;
        onPatternInput: PropType<(e: InputEvent) => void>;
        onPatternFocus: PropType<(e: FocusEvent) => void>;
        onPatternBlur: PropType<(e: FocusEvent) => void>;
        renderLabel: PropType<RenderLabel>;
        status: PropType<FormValidationStatus>;
        inlineThemeDisabled: BooleanConstructor;
        ignoreComposition: {
            type: BooleanConstructor;
            default: boolean;
        };
        onResize: PropType<() => void>;
        theme: PropType<
            import('../../../_mixins').Theme<
                'InternalSelection',
                {
                    fontSizeTiny: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    heightTiny: string;
                    heightSmall: string;
                    heightMedium: string;
                    heightLarge: string;
                    borderRadius: string;
                    textColor: string;
                    textColorDisabled: string;
                    placeholderColor: string;
                    placeholderColorDisabled: string;
                    color: string;
                    colorDisabled: string;
                    colorActive: string;
                    border: string;
                    borderHover: string;
                    borderActive: string;
                    borderFocus: string;
                    boxShadowHover: string;
                    boxShadowActive: string;
                    boxShadowFocus: string;
                    caretColor: string;
                    arrowColor: string;
                    arrowColorDisabled: string;
                    loadingColor: string;
                    borderWarning: string;
                    borderHoverWarning: string;
                    borderActiveWarning: string;
                    borderFocusWarning: string;
                    boxShadowHoverWarning: string;
                    boxShadowActiveWarning: string;
                    boxShadowFocusWarning: string;
                    colorActiveWarning: string;
                    caretColorWarning: string;
                    borderError: string;
                    borderHoverError: string;
                    borderActiveError: string;
                    borderFocusError: string;
                    boxShadowHoverError: string;
                    boxShadowActiveError: string;
                    boxShadowFocusError: string;
                    colorActiveError: string;
                    caretColorError: string;
                    clearColor: string;
                    clearColorHover: string;
                    clearColorPressed: string;
                    paddingSingle: string;
                    paddingMultiple: string;
                    clearSize: string;
                    arrowSize: string;
                },
                {
                    Popover: import('../../../_mixins').Theme<
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
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'InternalSelection',
                    {
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        textColor: string;
                        textColorDisabled: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        border: string;
                        borderHover: string;
                        borderActive: string;
                        borderFocus: string;
                        boxShadowHover: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        caretColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        loadingColor: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderActiveWarning: string;
                        borderFocusWarning: string;
                        boxShadowHoverWarning: string;
                        boxShadowActiveWarning: string;
                        boxShadowFocusWarning: string;
                        colorActiveWarning: string;
                        caretColorWarning: string;
                        borderError: string;
                        borderHoverError: string;
                        borderActiveError: string;
                        borderFocusError: string;
                        boxShadowHoverError: string;
                        boxShadowActiveError: string;
                        boxShadowFocusError: string;
                        colorActiveError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        paddingSingle: string;
                        paddingMultiple: string;
                        clearSize: string;
                        arrowSize: string;
                    },
                    {
                        Popover: import('../../../_mixins').Theme<
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
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'InternalSelection',
                    {
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        textColor: string;
                        textColorDisabled: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        border: string;
                        borderHover: string;
                        borderActive: string;
                        borderFocus: string;
                        boxShadowHover: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        caretColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        loadingColor: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderActiveWarning: string;
                        borderFocusWarning: string;
                        boxShadowHoverWarning: string;
                        boxShadowActiveWarning: string;
                        boxShadowFocusWarning: string;
                        colorActiveWarning: string;
                        caretColorWarning: string;
                        borderError: string;
                        borderHoverError: string;
                        borderActiveError: string;
                        borderFocusError: string;
                        boxShadowHoverError: string;
                        boxShadowActiveError: string;
                        boxShadowFocusError: string;
                        colorActiveError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        paddingSingle: string;
                        paddingMultiple: string;
                        clearSize: string;
                        arrowSize: string;
                    },
                    {
                        Popover: import('../../../_mixins').Theme<
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
                fontSizeTiny: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                heightTiny: string;
                heightSmall: string;
                heightMedium: string;
                heightLarge: string;
                borderRadius: string;
                textColor: string;
                textColorDisabled: string;
                placeholderColor: string;
                placeholderColorDisabled: string;
                color: string;
                colorDisabled: string;
                colorActive: string;
                border: string;
                borderHover: string;
                borderActive: string;
                borderFocus: string;
                boxShadowHover: string;
                boxShadowActive: string;
                boxShadowFocus: string;
                caretColor: string;
                arrowColor: string;
                arrowColorDisabled: string;
                loadingColor: string;
                borderWarning: string;
                borderHoverWarning: string;
                borderActiveWarning: string;
                borderFocusWarning: string;
                boxShadowHoverWarning: string;
                boxShadowActiveWarning: string;
                boxShadowFocusWarning: string;
                colorActiveWarning: string;
                caretColorWarning: string;
                borderError: string;
                borderHoverError: string;
                borderActiveError: string;
                borderFocusError: string;
                boxShadowHoverError: string;
                boxShadowActiveError: string;
                boxShadowFocusError: string;
                colorActiveError: string;
                caretColorError: string;
                clearColor: string;
                clearColorHover: string;
                clearColorPressed: string;
                paddingSingle: string;
                paddingMultiple: string;
                clearSize: string;
                arrowSize: string;
            };
            peers: {
                Popover: import('../../../_mixins').Theme<
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
        mergedClearable: globalThis.ComputedRef<boolean>;
        patternInputFocused: globalThis.Ref<boolean>;
        filterablePlaceholder: globalThis.ComputedRef<import('vue').VNodeChild>;
        label: globalThis.ComputedRef<unknown>;
        selected: globalThis.ComputedRef<boolean>;
        showTagsPanel: globalThis.Ref<boolean>;
        isComposing: globalThis.Ref<boolean>;
        counterRef: globalThis.Ref<{
            $el: HTMLElement;
            setTextContent: (textContent: string) => void;
        } | null>;
        counterWrapperRef: globalThis.Ref<HTMLElement | null>;
        patternInputMirrorRef: globalThis.Ref<HTMLElement | null>;
        patternInputRef: globalThis.Ref<HTMLElement | null>;
        selfRef: globalThis.Ref<HTMLElement | null>;
        multipleElRef: globalThis.Ref<HTMLElement | null>;
        singleElRef: globalThis.Ref<HTMLElement | null>;
        patternInputWrapperRef: globalThis.Ref<HTMLElement | null>;
        overflowRef: globalThis.Ref<{
            sync: () => void;
        } | null>;
        inputTagElRef: globalThis.Ref<HTMLElement | null>;
        handleMouseDown: (e: MouseEvent) => void;
        handleFocusin: (e: FocusEvent) => void;
        handleClear: (e: MouseEvent) => void;
        handleMouseEnter: () => void;
        handleMouseLeave: () => void;
        handleDeleteOption: (option: SelectBaseOption) => void;
        handlePatternKeyDown: (e: KeyboardEvent) => void;
        handlePatternInputInput: (e: InputEvent) => void;
        handlePatternInputBlur: (e: FocusEvent) => void;
        handlePatternInputFocus: (e: FocusEvent) => void;
        handleMouseEnterCounter: () => void;
        handleMouseLeaveCounter: () => void;
        handleFocusout: (e: FocusEvent) => void;
        handleCompositionEnd: () => void;
        handleCompositionStart: () => void;
        onPopoverUpdateShow: (show: boolean) => void;
        focus: () => void;
        focusInput: () => void;
        blur: () => void;
        blurInput: () => void;
        updateCounter: (count: number) => void;
        getCounter: () => HTMLElement | null;
        getTail: () => HTMLElement | null;
        renderLabel: RenderLabelImpl;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-border': string;
                  '--n-border-active': string;
                  '--n-border-focus': string;
                  '--n-border-hover': string;
                  '--n-border-radius': string;
                  '--n-box-shadow-active': string;
                  '--n-box-shadow-focus': string;
                  '--n-box-shadow-hover': string;
                  '--n-caret-color': string;
                  '--n-color': string;
                  '--n-color-active': string;
                  '--n-color-disabled': string;
                  '--n-font-size': string;
                  '--n-height': string;
                  '--n-padding-single': string;
                  '--n-padding-multiple': string;
                  '--n-placeholder-color': string;
                  '--n-placeholder-color-disabled': string;
                  '--n-text-color': string;
                  '--n-text-color-disabled': string;
                  '--n-arrow-color': string;
                  '--n-arrow-color-disabled': string;
                  '--n-loading-color': string;
                  '--n-color-active-warning': string;
                  '--n-box-shadow-focus-warning': string;
                  '--n-box-shadow-active-warning': string;
                  '--n-box-shadow-hover-warning': string;
                  '--n-border-warning': string;
                  '--n-border-focus-warning': string;
                  '--n-border-hover-warning': string;
                  '--n-border-active-warning': string;
                  '--n-color-active-error': string;
                  '--n-box-shadow-focus-error': string;
                  '--n-box-shadow-active-error': string;
                  '--n-box-shadow-hover-error': string;
                  '--n-border-error': string;
                  '--n-border-focus-error': string;
                  '--n-border-hover-error': string;
                  '--n-border-active-error': string;
                  '--n-clear-size': string;
                  '--n-clear-color': string;
                  '--n-clear-color-hover': string;
                  '--n-clear-color-pressed': string;
                  '--n-arrow-size': string;
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
            clsPrefix: {
                type: StringConstructor;
                required: true;
            };
            bordered: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            active: BooleanConstructor;
            pattern: {
                type: StringConstructor;
                default: string;
            };
            placeholder: StringConstructor;
            selectedOption: {
                type: PropType<SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                > | null>;
                default: null;
            };
            selectedOptions: {
                type: PropType<
                    | SelectBaseOption<
                          string | number,
                          | string
                          | ((
                                option: SelectBaseOption<
                                    string | number,
                                    string | any
                                >,
                                selected: boolean
                            ) => import('vue').VNodeChild)
                      >[]
                    | null
                >;
                default: null;
            };
            labelField: {
                type: StringConstructor;
                default: string;
            };
            valueField: {
                type: StringConstructor;
                default: string;
            };
            multiple: BooleanConstructor;
            filterable: BooleanConstructor;
            clearable: BooleanConstructor;
            disabled: BooleanConstructor;
            size: {
                type: PropType<'small' | 'medium' | 'large' | 'tiny'>;
                default: string;
            };
            loading: BooleanConstructor;
            autofocus: BooleanConstructor;
            showArrow: {
                type: BooleanConstructor;
                default: boolean;
            };
            inputProps: PropType<InputHTMLAttributes>;
            focused: BooleanConstructor;
            renderTag: PropType<RenderTag>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onClick: PropType<(e: MouseEvent) => void>;
            onBlur: PropType<(e: FocusEvent) => void>;
            onFocus: PropType<(e: FocusEvent) => void>;
            onDeleteOption: PropType<(option: SelectBaseOption) => void>;
            maxTagCount: PropType<number | 'responsive'>;
            onClear: PropType<(e: MouseEvent) => void>;
            onPatternInput: PropType<(e: InputEvent) => void>;
            onPatternFocus: PropType<(e: FocusEvent) => void>;
            onPatternBlur: PropType<(e: FocusEvent) => void>;
            renderLabel: PropType<RenderLabel>;
            status: PropType<FormValidationStatus>;
            inlineThemeDisabled: BooleanConstructor;
            ignoreComposition: {
                type: BooleanConstructor;
                default: boolean;
            };
            onResize: PropType<() => void>;
            theme: PropType<
                import('../../../_mixins').Theme<
                    'InternalSelection',
                    {
                        fontSizeTiny: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        heightTiny: string;
                        heightSmall: string;
                        heightMedium: string;
                        heightLarge: string;
                        borderRadius: string;
                        textColor: string;
                        textColorDisabled: string;
                        placeholderColor: string;
                        placeholderColorDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        border: string;
                        borderHover: string;
                        borderActive: string;
                        borderFocus: string;
                        boxShadowHover: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        caretColor: string;
                        arrowColor: string;
                        arrowColorDisabled: string;
                        loadingColor: string;
                        borderWarning: string;
                        borderHoverWarning: string;
                        borderActiveWarning: string;
                        borderFocusWarning: string;
                        boxShadowHoverWarning: string;
                        boxShadowActiveWarning: string;
                        boxShadowFocusWarning: string;
                        colorActiveWarning: string;
                        caretColorWarning: string;
                        borderError: string;
                        borderHoverError: string;
                        borderActiveError: string;
                        borderFocusError: string;
                        boxShadowHoverError: string;
                        boxShadowActiveError: string;
                        boxShadowFocusError: string;
                        colorActiveError: string;
                        caretColorError: string;
                        clearColor: string;
                        clearColorHover: string;
                        clearColorPressed: string;
                        paddingSingle: string;
                        paddingMultiple: string;
                        clearSize: string;
                        arrowSize: string;
                    },
                    {
                        Popover: import('../../../_mixins').Theme<
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
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'InternalSelection',
                        {
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            textColor: string;
                            textColorDisabled: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            border: string;
                            borderHover: string;
                            borderActive: string;
                            borderFocus: string;
                            boxShadowHover: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            caretColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            loadingColor: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderActiveWarning: string;
                            borderFocusWarning: string;
                            boxShadowHoverWarning: string;
                            boxShadowActiveWarning: string;
                            boxShadowFocusWarning: string;
                            colorActiveWarning: string;
                            caretColorWarning: string;
                            borderError: string;
                            borderHoverError: string;
                            borderActiveError: string;
                            borderFocusError: string;
                            boxShadowHoverError: string;
                            boxShadowActiveError: string;
                            boxShadowFocusError: string;
                            colorActiveError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            paddingSingle: string;
                            paddingMultiple: string;
                            clearSize: string;
                            arrowSize: string;
                        },
                        {
                            Popover: import('../../../_mixins').Theme<
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
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'InternalSelection',
                        {
                            fontSizeTiny: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            heightTiny: string;
                            heightSmall: string;
                            heightMedium: string;
                            heightLarge: string;
                            borderRadius: string;
                            textColor: string;
                            textColorDisabled: string;
                            placeholderColor: string;
                            placeholderColorDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            border: string;
                            borderHover: string;
                            borderActive: string;
                            borderFocus: string;
                            boxShadowHover: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            caretColor: string;
                            arrowColor: string;
                            arrowColorDisabled: string;
                            loadingColor: string;
                            borderWarning: string;
                            borderHoverWarning: string;
                            borderActiveWarning: string;
                            borderFocusWarning: string;
                            boxShadowHoverWarning: string;
                            boxShadowActiveWarning: string;
                            boxShadowFocusWarning: string;
                            colorActiveWarning: string;
                            caretColorWarning: string;
                            borderError: string;
                            borderHoverError: string;
                            borderActiveError: string;
                            borderFocusError: string;
                            boxShadowHoverError: string;
                            boxShadowActiveError: string;
                            boxShadowFocusError: string;
                            colorActiveError: string;
                            caretColorError: string;
                            clearColor: string;
                            clearColorHover: string;
                            clearColorPressed: string;
                            paddingSingle: string;
                            paddingMultiple: string;
                            clearSize: string;
                            arrowSize: string;
                        },
                        {
                            Popover: import('../../../_mixins').Theme<
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
        }>
    >,
    {
        pattern: string;
        size: 'small' | 'medium' | 'large' | 'tiny';
        multiple: boolean;
        active: boolean;
        disabled: boolean;
        autofocus: boolean;
        loading: boolean;
        bordered: boolean | undefined;
        inlineThemeDisabled: boolean;
        showArrow: boolean;
        labelField: string;
        valueField: string;
        clearable: boolean;
        filterable: boolean;
        ignoreComposition: boolean;
        selectedOption: SelectBaseOption<
            string | number,
            | string
            | ((
                  option: SelectBaseOption<string | number, string | any>,
                  selected: boolean
              ) => import('vue').VNodeChild)
        > | null;
        selectedOptions:
            | SelectBaseOption<
                  string | number,
                  | string
                  | ((
                        option: SelectBaseOption<string | number, string | any>,
                        selected: boolean
                    ) => import('vue').VNodeChild)
              >[]
            | null;
        focused: boolean;
    },
    {}
>;
export default _default;
