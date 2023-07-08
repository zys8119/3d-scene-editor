import { PropType, InputHTMLAttributes, HTMLAttributes } from 'vue';
import { TreeNode } from 'treemate';
import { FollowerPlacement } from 'vueuc';
import {
    RenderOption,
    RenderLabel,
} from '../../_internal/select-menu/src/interface';
import type { FormValidationStatus } from '../../form/src/interface';
import type {
    SelectBaseOption,
    SelectGroupOption,
    SelectIgnoredOption,
} from '../../select/src/interface';
import { MaybeArray } from '../../_utils';
import type { ExtractPublicPropTypes } from '../../_utils';
import type { AutoCompleteOptions, OnUpdateValue, OnSelect } from './interface';
export declare const autoCompleteProps: {
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly menuProps: PropType<HTMLAttributes>;
    readonly bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly defaultValue: {
        readonly type: PropType<string | null>;
        readonly default: null;
    };
    readonly loading: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly placeholder: StringConstructor;
    readonly placement: {
        readonly type: PropType<FollowerPlacement>;
        readonly default: 'bottom-start';
    };
    readonly value: StringConstructor;
    readonly blurAfterSelect: BooleanConstructor;
    readonly clearAfterSelect: BooleanConstructor;
    readonly getShow: PropType<(inputValue: string) => boolean>;
    readonly inputProps: PropType<InputHTMLAttributes>;
    readonly renderOption: PropType<RenderOption>;
    readonly renderLabel: PropType<RenderLabel>;
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly options: {
        readonly type: PropType<AutoCompleteOptions>;
        readonly default: () => never[];
    };
    readonly zIndex: NumberConstructor;
    readonly status: PropType<FormValidationStatus>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly onSelect: PropType<MaybeArray<OnSelect>>;
    readonly onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
    readonly onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
    readonly onInput: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'AutoComplete',
            {
                menuBoxShadow: string;
            },
            {
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
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'AutoComplete',
                {
                    menuBoxShadow: string;
                },
                {
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
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'AutoComplete',
                {
                    menuBoxShadow: string;
                },
                {
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
                }
            >
        >
    >;
};
export type AutoCompleteProps = ExtractPublicPropTypes<
    typeof autoCompleteProps
>;
declare const _default: import('vue').DefineComponent<
    {
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly menuProps: PropType<HTMLAttributes>;
        readonly bordered: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly clearable: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly defaultValue: {
            readonly type: PropType<string | null>;
            readonly default: null;
        };
        readonly loading: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly placeholder: StringConstructor;
        readonly placement: {
            readonly type: PropType<FollowerPlacement>;
            readonly default: 'bottom-start';
        };
        readonly value: StringConstructor;
        readonly blurAfterSelect: BooleanConstructor;
        readonly clearAfterSelect: BooleanConstructor;
        readonly getShow: PropType<(inputValue: string) => boolean>;
        readonly inputProps: PropType<InputHTMLAttributes>;
        readonly renderOption: PropType<RenderOption>;
        readonly renderLabel: PropType<RenderLabel>;
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly options: {
            readonly type: PropType<AutoCompleteOptions>;
            readonly default: () => never[];
        };
        readonly zIndex: NumberConstructor;
        readonly status: PropType<FormValidationStatus>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly onSelect: PropType<MaybeArray<OnSelect>>;
        readonly onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
        readonly onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
        readonly onInput: PropType<MaybeArray<OnUpdateValue> | undefined>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'AutoComplete',
                {
                    menuBoxShadow: string;
                },
                {
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
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'AutoComplete',
                    {
                        menuBoxShadow: string;
                    },
                    {
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
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'AutoComplete',
                    {
                        menuBoxShadow: string;
                    },
                    {
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
                    }
                >
            >
        >;
    },
    {
        focus: () => void;
        blur: () => void;
        inputInstRef: globalThis.Ref<{
            wrapperElRef: HTMLElement | null;
            textareaElRef: HTMLTextAreaElement | null;
            inputElRef: HTMLInputElement | null;
            isCompositing: boolean;
            blur: () => void;
            focus: () => void;
            select: () => void;
            activate: () => void;
            deactivate: () => void;
            scrollTo: (options: ScrollToOptions) => void;
        } | null>;
        uncontrolledValue: globalThis.Ref<string | null>;
        mergedValue: globalThis.ComputedRef<string | null>;
        isMounted: Readonly<globalThis.Ref<boolean>>;
        adjustedTo: globalThis.ComputedRef<string | HTMLElement>;
        menuInstRef: globalThis.Ref<{
            selfRef: HTMLElement | null;
            getPendingTmNode: () => TreeNode<
                SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >,
                SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >,
                SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >
            > | null;
            prev: () => void;
            next: () => void;
        } | null>;
        triggerElRef: globalThis.Ref<HTMLElement | null>;
        treeMate: globalThis.ComputedRef<
            import('treemate').TreeMate<
                SelectBaseOption<
                    string | number,
                    | string
                    | ((
                          option: SelectBaseOption<
                              string | number,
                              string | any
                          >,
                          selected: boolean
                      ) => import('vue').VNodeChild)
                >,
                SelectGroupOption,
                SelectIgnoredOption
            >
        >;
        mergedSize: globalThis.ComputedRef<'small' | 'medium' | 'large'>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        active: globalThis.ComputedRef<boolean>;
        mergedStatus: globalThis.ComputedRef<FormValidationStatus | undefined>;
        handleClear: () => void;
        handleFocus: (e: FocusEvent) => void;
        handleBlur: (e: FocusEvent) => void;
        handleInput: (value: string) => void;
        handleToggle: (option: TreeNode<SelectBaseOption>) => void;
        handleClickOutsideMenu: (e: MouseEvent) => void;
        handleCompositionStart: () => void;
        handleCompositionEnd: () => void;
        handleKeyDown: (e: KeyboardEvent) => void;
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
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-menu-box-shadow': string;
                  '--n-bezier': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        mergedBordered: globalThis.ComputedRef<boolean>;
        namespace: globalThis.ComputedRef<string | undefined>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly menuProps: PropType<HTMLAttributes>;
            readonly bordered: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly clearable: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly defaultValue: {
                readonly type: PropType<string | null>;
                readonly default: null;
            };
            readonly loading: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly placeholder: StringConstructor;
            readonly placement: {
                readonly type: PropType<FollowerPlacement>;
                readonly default: 'bottom-start';
            };
            readonly value: StringConstructor;
            readonly blurAfterSelect: BooleanConstructor;
            readonly clearAfterSelect: BooleanConstructor;
            readonly getShow: PropType<(inputValue: string) => boolean>;
            readonly inputProps: PropType<InputHTMLAttributes>;
            readonly renderOption: PropType<RenderOption>;
            readonly renderLabel: PropType<RenderLabel>;
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly options: {
                readonly type: PropType<AutoCompleteOptions>;
                readonly default: () => never[];
            };
            readonly zIndex: NumberConstructor;
            readonly status: PropType<FormValidationStatus>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly onSelect: PropType<MaybeArray<OnSelect>>;
            readonly onBlur: PropType<MaybeArray<(e: FocusEvent) => void>>;
            readonly onFocus: PropType<MaybeArray<(e: FocusEvent) => void>>;
            readonly onInput: PropType<MaybeArray<OnUpdateValue> | undefined>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'AutoComplete',
                    {
                        menuBoxShadow: string;
                    },
                    {
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
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'AutoComplete',
                        {
                            menuBoxShadow: string;
                        },
                        {
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
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'AutoComplete',
                        {
                            menuBoxShadow: string;
                        },
                        {
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
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly disabled: boolean | undefined;
        readonly to: string | boolean | HTMLElement;
        readonly options: AutoCompleteOptions;
        readonly loading: boolean;
        readonly bordered: boolean | undefined;
        readonly placement: FollowerPlacement;
        readonly clearable: boolean;
        readonly defaultValue: string | null;
        readonly blurAfterSelect: boolean;
        readonly clearAfterSelect: boolean;
    },
    {}
>;
export default _default;
