import {
    PropType,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
    VNodeChild,
} from 'vue';
import type { FormValidationStatus } from '../../form/src/interface';
import { ExtractPublicPropTypes } from '../../_utils';
import type { MaybeArray } from '../../_utils';
import type { OnUpdateValue, Size } from './interface';
export declare const inputProps: {
    bordered: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    type: {
        type: PropType<'textarea' | 'text' | 'password'>;
        default: string;
    };
    placeholder: PropType<string | [string, string]>;
    defaultValue: {
        type: PropType<string | [string, string] | null>;
        default: null;
    };
    value: PropType<string | [string, string] | null>;
    disabled: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    size: PropType<Size>;
    rows: {
        type: PropType<string | number>;
        default: number;
    };
    round: BooleanConstructor;
    minlength: PropType<string | number>;
    maxlength: PropType<string | number>;
    clearable: BooleanConstructor;
    autosize: {
        type: PropType<
            | boolean
            | {
                  minRows?: number | undefined;
                  maxRows?: number | undefined;
              }
        >;
        default: boolean;
    };
    pair: BooleanConstructor;
    separator: StringConstructor;
    readonly: {
        type: (BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    passivelyActivated: BooleanConstructor;
    showPasswordOn: PropType<'click' | 'mousedown'>;
    stateful: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: BooleanConstructor;
    inputProps: PropType<InputHTMLAttributes | TextareaHTMLAttributes>;
    resizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showCount: BooleanConstructor;
    loading: {
        type: BooleanConstructor;
        default: undefined;
    };
    allowInput: PropType<(value: string) => boolean>;
    renderCount: PropType<(props: { value: string }) => VNodeChild>;
    onMousedown: PropType<(e: MouseEvent) => void>;
    onKeydown: PropType<(e: KeyboardEvent) => void>;
    onKeyup: PropType<(e: KeyboardEvent) => void>;
    onInput: PropType<OnUpdateValue>;
    onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
    onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
    onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
    onChange: PropType<OnUpdateValue>;
    onClear: PropType<MaybeArray<(e: MouseEvent) => void>>;
    onWheel: PropType<(e: WheelEvent) => void>;
    countGraphemes: PropType<(value: string) => number>;
    status: PropType<FormValidationStatus>;
    'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    /** private */
    textDecoration: PropType<string | [string, string]>;
    attrSize: {
        type: NumberConstructor;
        default: number;
    };
    onInputBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
    onInputFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
    onDeactivate: PropType<MaybeArray<() => void>>;
    onActivate: PropType<MaybeArray<() => void>>;
    onWrapperFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
    onWrapperBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
    internalDeactivateOnEnter: BooleanConstructor;
    internalForceFocus: BooleanConstructor;
    internalLoadingBeforeSuffix: BooleanConstructor;
    /** deprecated */
    showPasswordToggle: BooleanConstructor;
    theme: PropType<
        import('../../_mixins').Theme<
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
        >
    >;
    themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
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
            >
        >
    >;
};
export type InputProps = ExtractPublicPropTypes<typeof inputProps>;
declare const _default: import('vue').DefineComponent<
    {
        bordered: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        type: {
            type: PropType<'textarea' | 'text' | 'password'>;
            default: string;
        };
        placeholder: PropType<string | [string, string]>;
        defaultValue: {
            type: PropType<string | [string, string] | null>;
            default: null;
        };
        value: PropType<string | [string, string] | null>;
        disabled: {
            type: PropType<boolean | undefined>;
            default: undefined;
        };
        size: PropType<Size>;
        rows: {
            type: PropType<string | number>;
            default: number;
        };
        round: BooleanConstructor;
        minlength: PropType<string | number>;
        maxlength: PropType<string | number>;
        clearable: BooleanConstructor;
        autosize: {
            type: PropType<
                | boolean
                | {
                      minRows?: number | undefined;
                      maxRows?: number | undefined;
                  }
            >;
            default: boolean;
        };
        pair: BooleanConstructor;
        separator: StringConstructor;
        readonly: {
            type: (BooleanConstructor | StringConstructor)[];
            default: boolean;
        };
        passivelyActivated: BooleanConstructor;
        showPasswordOn: PropType<'click' | 'mousedown'>;
        stateful: {
            type: BooleanConstructor;
            default: boolean;
        };
        autofocus: BooleanConstructor;
        inputProps: PropType<InputHTMLAttributes | TextareaHTMLAttributes>;
        resizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        showCount: BooleanConstructor;
        loading: {
            type: BooleanConstructor;
            default: undefined;
        };
        allowInput: PropType<(value: string) => boolean>;
        renderCount: PropType<(props: { value: string }) => VNodeChild>;
        onMousedown: PropType<(e: MouseEvent) => void>;
        onKeydown: PropType<(e: KeyboardEvent) => void>;
        onKeyup: PropType<(e: KeyboardEvent) => void>;
        onInput: PropType<OnUpdateValue>;
        onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
        onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
        onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
        onChange: PropType<OnUpdateValue>;
        onClear: PropType<MaybeArray<(e: MouseEvent) => void>>;
        onWheel: PropType<(e: WheelEvent) => void>;
        countGraphemes: PropType<(value: string) => number>;
        status: PropType<FormValidationStatus>;
        'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        /** private */
        textDecoration: PropType<string | [string, string]>;
        attrSize: {
            type: NumberConstructor;
            default: number;
        };
        onInputBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
        onInputFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
        onDeactivate: PropType<MaybeArray<() => void>>;
        onActivate: PropType<MaybeArray<() => void>>;
        onWrapperFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
        onWrapperBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
        internalDeactivateOnEnter: BooleanConstructor;
        internalForceFocus: BooleanConstructor;
        internalLoadingBeforeSuffix: BooleanConstructor;
        /** deprecated */
        showPasswordToggle: BooleanConstructor;
        theme: PropType<
            import('../../_mixins').Theme<
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
            >
        >;
        themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
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
                >
            >
        >;
    },
    {
        wrapperElRef: globalThis.Ref<HTMLElement | null>;
        inputElRef: globalThis.Ref<HTMLInputElement | null>;
        inputMirrorElRef: globalThis.Ref<HTMLElement | null>;
        inputEl2Ref: globalThis.Ref<HTMLInputElement | null>;
        textareaElRef: globalThis.Ref<HTMLTextAreaElement | null>;
        textareaMirrorElRef: globalThis.Ref<HTMLElement | null>;
        textareaScrollbarInstRef: globalThis.Ref<{
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
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        uncontrolledValue: globalThis.Ref<string | [string, string] | null>;
        mergedValue: globalThis.ComputedRef<string | [string, string] | null>;
        passwordVisible: globalThis.Ref<boolean>;
        mergedPlaceholder: globalThis.ComputedRef<[string] | [string, string]>;
        showPlaceholder1: globalThis.ComputedRef<string | false>;
        showPlaceholder2: globalThis.ComputedRef<boolean | '' | undefined>;
        mergedFocus: globalThis.ComputedRef<boolean>;
        isComposing: globalThis.Ref<boolean>;
        activated: globalThis.Ref<boolean>;
        showClearButton: globalThis.ComputedRef<boolean>;
        mergedSize: globalThis.ComputedRef<
            'small' | 'medium' | 'large' | 'tiny'
        >;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        textDecorationStyle: globalThis.ComputedRef<
            | string[]
            | {
                  textDecoration: string;
              }[]
        >;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        mergedBordered: globalThis.ComputedRef<boolean>;
        mergedShowPasswordOn: globalThis.ComputedRef<
            'click' | 'mousedown' | undefined
        >;
        placeholderStyle: globalThis.Ref<{
            top: string;
        }>;
        mergedStatus: globalThis.ComputedRef<FormValidationStatus | undefined>;
        textAreaScrollContainerWidth: globalThis.Ref<number | undefined>;
        handleTextAreaScroll: (e: Event) => void;
        handleCompositionStart: () => void;
        handleCompositionEnd: (e: CompositionEvent) => void;
        handleInput: (
            e: InputEvent | CompositionEvent | Event,
            index?: 0 | 1,
            event?: string
        ) => void;
        handleInputBlur: (e: FocusEvent) => void;
        handleInputFocus: (e: FocusEvent, index: number) => void;
        handleWrapperBlur: (e: FocusEvent) => void;
        handleWrapperFocus: (e: FocusEvent) => void;
        handleMouseEnter: () => void;
        handleMouseLeave: () => void;
        handleMouseDown: (e: MouseEvent) => void;
        handleChange: (e: Event, index?: 0 | 1) => void;
        handleClick: (e: MouseEvent) => void;
        handleClear: (e: MouseEvent) => void;
        handlePasswordToggleClick: () => void;
        handlePasswordToggleMousedown: (e: MouseEvent) => void;
        handleWrapperKeydown: (e: KeyboardEvent) => void;
        handleTextAreaMirrorResize: () => void;
        getTextareaScrollContainer: () => HTMLTextAreaElement | null;
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
            };
            peers: any;
            peerOverrides: {
                [x: string]: any;
            };
        }>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-bezier': string;
                  '--n-count-text-color': string;
                  '--n-count-text-color-disabled': string;
                  '--n-color': string;
                  '--n-font-size': string;
                  '--n-border-radius': string;
                  '--n-height': string;
                  '--n-padding-left': string;
                  '--n-padding-right': string;
                  '--n-text-color': string;
                  '--n-caret-color': string;
                  '--n-text-decoration-color': string;
                  '--n-border': string;
                  '--n-border-disabled': string;
                  '--n-border-hover': string;
                  '--n-border-focus': string;
                  '--n-placeholder-color': string;
                  '--n-placeholder-color-disabled': string;
                  '--n-icon-size': string;
                  '--n-line-height-textarea': string;
                  '--n-color-disabled': string;
                  '--n-color-focus': string;
                  '--n-text-color-disabled': string;
                  '--n-box-shadow-focus': string;
                  '--n-loading-color': string;
                  '--n-caret-color-warning': string;
                  '--n-color-focus-warning': string;
                  '--n-box-shadow-focus-warning': string;
                  '--n-border-warning': string;
                  '--n-border-focus-warning': string;
                  '--n-border-hover-warning': string;
                  '--n-loading-color-warning': string;
                  '--n-caret-color-error': string;
                  '--n-color-focus-error': string;
                  '--n-box-shadow-focus-error': string;
                  '--n-border-error': string;
                  '--n-border-focus-error': string;
                  '--n-border-hover-error': string;
                  '--n-loading-color-error': string;
                  '--n-clear-color': string;
                  '--n-clear-size': string;
                  '--n-clear-color-hover': string;
                  '--n-clear-color-pressed': string;
                  '--n-icon-color': string;
                  '--n-icon-color-hover': string;
                  '--n-icon-color-pressed': string;
                  '--n-icon-color-disabled': string;
                  '--n-suffix-text-color': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        isCompositing: globalThis.Ref<boolean>;
        blur: () => void;
        focus: () => void;
        select: () => void;
        activate: () => void;
        deactivate: () => void;
        scrollTo: (options: ScrollToOptions) => void;
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
            bordered: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            type: {
                type: PropType<'textarea' | 'text' | 'password'>;
                default: string;
            };
            placeholder: PropType<string | [string, string]>;
            defaultValue: {
                type: PropType<string | [string, string] | null>;
                default: null;
            };
            value: PropType<string | [string, string] | null>;
            disabled: {
                type: PropType<boolean | undefined>;
                default: undefined;
            };
            size: PropType<Size>;
            rows: {
                type: PropType<string | number>;
                default: number;
            };
            round: BooleanConstructor;
            minlength: PropType<string | number>;
            maxlength: PropType<string | number>;
            clearable: BooleanConstructor;
            autosize: {
                type: PropType<
                    | boolean
                    | {
                          minRows?: number | undefined;
                          maxRows?: number | undefined;
                      }
                >;
                default: boolean;
            };
            pair: BooleanConstructor;
            separator: StringConstructor;
            readonly: {
                type: (BooleanConstructor | StringConstructor)[];
                default: boolean;
            };
            passivelyActivated: BooleanConstructor;
            showPasswordOn: PropType<'click' | 'mousedown'>;
            stateful: {
                type: BooleanConstructor;
                default: boolean;
            };
            autofocus: BooleanConstructor;
            inputProps: PropType<InputHTMLAttributes | TextareaHTMLAttributes>;
            resizable: {
                type: BooleanConstructor;
                default: boolean;
            };
            showCount: BooleanConstructor;
            loading: {
                type: BooleanConstructor;
                default: undefined;
            };
            allowInput: PropType<(value: string) => boolean>;
            renderCount: PropType<(props: { value: string }) => VNodeChild>;
            onMousedown: PropType<(e: MouseEvent) => void>;
            onKeydown: PropType<(e: KeyboardEvent) => void>;
            onKeyup: PropType<(e: KeyboardEvent) => void>;
            onInput: PropType<OnUpdateValue>;
            onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
            onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
            onClick: PropType<MaybeArray<(e: MouseEvent) => void>>;
            onChange: PropType<OnUpdateValue>;
            onClear: PropType<MaybeArray<(e: MouseEvent) => void>>;
            onWheel: PropType<(e: WheelEvent) => void>;
            countGraphemes: PropType<(value: string) => number>;
            status: PropType<FormValidationStatus>;
            'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            /** private */
            textDecoration: PropType<string | [string, string]>;
            attrSize: {
                type: NumberConstructor;
                default: number;
            };
            onInputBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
            onInputFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
            onDeactivate: PropType<MaybeArray<() => void>>;
            onActivate: PropType<MaybeArray<() => void>>;
            onWrapperFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
            onWrapperBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
            internalDeactivateOnEnter: BooleanConstructor;
            internalForceFocus: BooleanConstructor;
            internalLoadingBeforeSuffix: BooleanConstructor;
            /** deprecated */
            showPasswordToggle: BooleanConstructor;
            theme: PropType<
                import('../../_mixins').Theme<
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
                >
            >;
            themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
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
                    >
                >
            >;
        }>
    >,
    {
        type: 'textarea' | 'text' | 'password';
        readonly: string | boolean;
        round: boolean;
        disabled: boolean | undefined;
        autofocus: boolean;
        autosize:
            | boolean
            | {
                  minRows?: number | undefined;
                  maxRows?: number | undefined;
              };
        loading: boolean;
        bordered: boolean | undefined;
        clearable: boolean;
        defaultValue: string | [string, string] | null;
        resizable: boolean;
        pair: boolean;
        rows: string | number;
        passivelyActivated: boolean;
        stateful: boolean;
        showCount: boolean;
        attrSize: number;
        internalDeactivateOnEnter: boolean;
        internalForceFocus: boolean;
        internalLoadingBeforeSuffix: boolean;
        showPasswordToggle: boolean;
    },
    {}
>;
export default _default;
