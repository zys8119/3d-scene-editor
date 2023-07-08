import { PropType, VNodeChild, HTMLAttributes } from 'vue';
import { CheckStrategy } from 'treemate';
import { FollowerPlacement } from 'vueuc';
import type { FormValidationStatus } from '../../form/src/interface';
import type { SelectBaseOption } from '../../select/src/interface';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type {
    CascaderOption,
    ExpandTrigger,
    Filter,
    OnLoad,
    OnUpdateValue,
    Value,
} from './interface';
export declare const cascaderProps: {
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly options: {
        readonly type: PropType<CascaderOption[]>;
        readonly default: () => never[];
    };
    readonly value: PropType<Value | null>;
    readonly defaultValue: {
        readonly type: PropType<Value | null>;
        readonly default: null;
    };
    readonly placeholder: StringConstructor;
    readonly multiple: BooleanConstructor;
    readonly size: PropType<'small' | 'medium' | 'large'>;
    readonly filterable: BooleanConstructor;
    readonly disabled: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly disabledField: {
        readonly type: StringConstructor;
        readonly default: 'disabled';
    };
    readonly expandTrigger: {
        readonly type: PropType<ExpandTrigger>;
        readonly default: 'click';
    };
    readonly clearable: BooleanConstructor;
    readonly clearFilterAfterSelect: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly remote: BooleanConstructor;
    readonly onLoad: PropType<OnLoad>;
    readonly separator: {
        readonly type: StringConstructor;
        readonly default: ' / ';
    };
    readonly filter: PropType<Filter>;
    readonly placement: {
        readonly type: PropType<FollowerPlacement>;
        readonly default: 'bottom-start';
    };
    readonly cascade: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly leafOnly: BooleanConstructor;
    readonly showPath: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly show: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly maxTagCount: PropType<number | 'responsive'>;
    readonly menuProps: PropType<HTMLAttributes>;
    readonly filterMenuProps: PropType<HTMLAttributes>;
    readonly virtualScroll: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly checkStrategy: {
        readonly type: PropType<CheckStrategy>;
        readonly default: 'all';
    };
    readonly valueField: {
        readonly type: StringConstructor;
        readonly default: 'value';
    };
    readonly labelField: {
        readonly type: StringConstructor;
        readonly default: 'label';
    };
    readonly childrenField: {
        readonly type: StringConstructor;
        readonly default: 'children';
    };
    readonly renderLabel: PropType<
        (option: CascaderOption, checked: boolean) => VNodeChild
    >;
    readonly status: PropType<FormValidationStatus>;
    readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
    readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
    readonly 'onUpdate:show': PropType<MaybeArray<(show: Boolean) => void>>;
    readonly onUpdateShow: PropType<MaybeArray<(show: Boolean) => void>>;
    readonly onBlur: PropType<(e: FocusEvent) => void>;
    readonly onFocus: PropType<(e: FocusEvent) => void>;
    readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Cascader',
            {
                menuBorderRadius: string;
                menuColor: string;
                menuBoxShadow: string;
                menuDividerColor: string;
                menuHeight: string;
                optionArrowColor: string;
                optionHeight: string;
                optionFontSize: string;
                optionColorHover: string;
                optionTextColor: string;
                optionTextColorActive: string;
                optionTextColorDisabled: string;
                optionCheckMarkColor: string;
                loadingColor: string;
                columnWidth: string;
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
                InternalSelection: import('../../_mixins').Theme<
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
                >;
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Checkbox: import('../../_mixins').Theme<
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
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Cascader',
                {
                    menuBorderRadius: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuDividerColor: string;
                    menuHeight: string;
                    optionArrowColor: string;
                    optionHeight: string;
                    optionFontSize: string;
                    optionColorHover: string;
                    optionTextColor: string;
                    optionTextColorActive: string;
                    optionTextColorDisabled: string;
                    optionCheckMarkColor: string;
                    loadingColor: string;
                    columnWidth: string;
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
                    InternalSelection: import('../../_mixins').Theme<
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
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Checkbox: import('../../_mixins').Theme<
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
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Cascader',
                {
                    menuBorderRadius: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuDividerColor: string;
                    menuHeight: string;
                    optionArrowColor: string;
                    optionHeight: string;
                    optionFontSize: string;
                    optionColorHover: string;
                    optionTextColor: string;
                    optionTextColorActive: string;
                    optionTextColorDisabled: string;
                    optionCheckMarkColor: string;
                    loadingColor: string;
                    columnWidth: string;
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
                    InternalSelection: import('../../_mixins').Theme<
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
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Checkbox: import('../../_mixins').Theme<
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
            >
        >
    >;
};
export type CascaderProps = ExtractPublicPropTypes<typeof cascaderProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly allowCheckingNotLoaded: BooleanConstructor;
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly bordered: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly options: {
            readonly type: PropType<CascaderOption[]>;
            readonly default: () => never[];
        };
        readonly value: PropType<Value | null>;
        readonly defaultValue: {
            readonly type: PropType<Value | null>;
            readonly default: null;
        };
        readonly placeholder: StringConstructor;
        readonly multiple: BooleanConstructor;
        readonly size: PropType<'small' | 'medium' | 'large'>;
        readonly filterable: BooleanConstructor;
        readonly disabled: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly disabledField: {
            readonly type: StringConstructor;
            readonly default: 'disabled';
        };
        readonly expandTrigger: {
            readonly type: PropType<ExpandTrigger>;
            readonly default: 'click';
        };
        readonly clearable: BooleanConstructor;
        readonly clearFilterAfterSelect: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly remote: BooleanConstructor;
        readonly onLoad: PropType<OnLoad>;
        readonly separator: {
            readonly type: StringConstructor;
            readonly default: ' / ';
        };
        readonly filter: PropType<Filter>;
        readonly placement: {
            readonly type: PropType<FollowerPlacement>;
            readonly default: 'bottom-start';
        };
        readonly cascade: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly leafOnly: BooleanConstructor;
        readonly showPath: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly show: {
            readonly type: PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly maxTagCount: PropType<number | 'responsive'>;
        readonly menuProps: PropType<HTMLAttributes>;
        readonly filterMenuProps: PropType<HTMLAttributes>;
        readonly virtualScroll: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly checkStrategy: {
            readonly type: PropType<CheckStrategy>;
            readonly default: 'all';
        };
        readonly valueField: {
            readonly type: StringConstructor;
            readonly default: 'value';
        };
        readonly labelField: {
            readonly type: StringConstructor;
            readonly default: 'label';
        };
        readonly childrenField: {
            readonly type: StringConstructor;
            readonly default: 'children';
        };
        readonly renderLabel: PropType<
            (option: CascaderOption, checked: boolean) => VNodeChild
        >;
        readonly status: PropType<FormValidationStatus>;
        readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
        readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
        readonly 'onUpdate:show': PropType<MaybeArray<(show: Boolean) => void>>;
        readonly onUpdateShow: PropType<MaybeArray<(show: Boolean) => void>>;
        readonly onBlur: PropType<(e: FocusEvent) => void>;
        readonly onFocus: PropType<(e: FocusEvent) => void>;
        readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Cascader',
                {
                    menuBorderRadius: string;
                    menuColor: string;
                    menuBoxShadow: string;
                    menuDividerColor: string;
                    menuHeight: string;
                    optionArrowColor: string;
                    optionHeight: string;
                    optionFontSize: string;
                    optionColorHover: string;
                    optionTextColor: string;
                    optionTextColorActive: string;
                    optionTextColorDisabled: string;
                    optionCheckMarkColor: string;
                    loadingColor: string;
                    columnWidth: string;
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
                    InternalSelection: import('../../_mixins').Theme<
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
                    >;
                    Scrollbar: import('../../_mixins').Theme<
                        'Scrollbar',
                        {
                            color: string;
                            colorHover: string;
                        },
                        any
                    >;
                    Checkbox: import('../../_mixins').Theme<
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
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Cascader',
                    {
                        menuBorderRadius: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuDividerColor: string;
                        menuHeight: string;
                        optionArrowColor: string;
                        optionHeight: string;
                        optionFontSize: string;
                        optionColorHover: string;
                        optionTextColor: string;
                        optionTextColorActive: string;
                        optionTextColorDisabled: string;
                        optionCheckMarkColor: string;
                        loadingColor: string;
                        columnWidth: string;
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
                        InternalSelection: import('../../_mixins').Theme<
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
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Checkbox: import('../../_mixins').Theme<
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
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Cascader',
                    {
                        menuBorderRadius: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuDividerColor: string;
                        menuHeight: string;
                        optionArrowColor: string;
                        optionHeight: string;
                        optionFontSize: string;
                        optionColorHover: string;
                        optionTextColor: string;
                        optionTextColorActive: string;
                        optionTextColorDisabled: string;
                        optionCheckMarkColor: string;
                        loadingColor: string;
                        columnWidth: string;
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
                        InternalSelection: import('../../_mixins').Theme<
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
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Checkbox: import('../../_mixins').Theme<
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
                >
            >
        >;
    },
    {
        handleTriggerResize: () => void;
        mergedStatus: globalThis.ComputedRef<FormValidationStatus | undefined>;
        selectMenuFollowerRef: globalThis.Ref<{
            syncPosition: () => void;
        } | null>;
        cascaderMenuFollowerRef: globalThis.Ref<{
            syncPosition: () => void;
        } | null>;
        triggerInstRef: globalThis.Ref<{
            isComposing: boolean;
            focus: () => void;
            focusInput: () => void;
            blur: () => void;
            $el: HTMLElement;
        } | null>;
        selectMenuInstRef: globalThis.Ref<{
            prev: () => void;
            next: () => void;
            enter: () => boolean;
        } | null>;
        cascaderMenuInstRef: globalThis.Ref<{
            $el: HTMLElement;
            scroll: (depth: number, index: number, elSize: number) => void;
            showErrorMessage: (label: string) => void;
        } | null>;
        mergedBordered: globalThis.ComputedRef<boolean>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        namespace: globalThis.ComputedRef<string | undefined>;
        mergedValue: globalThis.ComputedRef<
            | import('./interface').ValueAtom
            | import('./interface').ValueAtom[]
            | null
        >;
        mergedShow: globalThis.ComputedRef<boolean>;
        showSelectMenu: globalThis.ComputedRef<boolean>;
        pattern: globalThis.Ref<string>;
        treeMate: globalThis.ComputedRef<
            import('treemate').TreeMate<
                CascaderOption,
                CascaderOption,
                CascaderOption
            >
        >;
        mergedSize: globalThis.ComputedRef<'small' | 'medium' | 'large'>;
        mergedDisabled: globalThis.ComputedRef<boolean>;
        localizedPlaceholder: globalThis.ComputedRef<string>;
        selectedOption: globalThis.ComputedRef<{
            label: any;
            value: import('treemate').Key;
        } | null>;
        selectedOptions: globalThis.ComputedRef<
            {
                label: any;
                value: import('treemate').Key;
            }[]
        >;
        adjustedTo: globalThis.ComputedRef<string | HTMLElement>;
        menuModel: globalThis.ComputedRef<
            import('treemate').TreeNode<
                CascaderOption,
                CascaderOption,
                CascaderOption
            >[][]
        >;
        handleMenuTabout: () => void;
        handleMenuFocus: (e: FocusEvent) => void;
        handleMenuBlur: (e: FocusEvent) => void;
        handleMenuKeydown: (e: KeyboardEvent) => void;
        handleMenuMousedown: (e: MouseEvent) => void;
        handleTriggerFocus: (e: FocusEvent) => void;
        handleTriggerBlur: (e: FocusEvent) => void;
        handleTriggerClick: () => void;
        handleClear: (e: MouseEvent) => void;
        handleDeleteOption: (option: SelectBaseOption) => void;
        handlePatternInput: (e: InputEvent) => void;
        handleKeydown: (e: KeyboardEvent) => void;
        focused: globalThis.Ref<boolean>;
        optionHeight: globalThis.ComputedRef<string>;
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
                menuBorderRadius: string;
                menuColor: string;
                menuBoxShadow: string;
                menuDividerColor: string;
                menuHeight: string;
                optionArrowColor: string;
                optionHeight: string;
                optionFontSize: string;
                optionColorHover: string;
                optionTextColor: string;
                optionTextColorActive: string;
                optionTextColorDisabled: string;
                optionCheckMarkColor: string;
                loadingColor: string;
                columnWidth: string;
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
                InternalSelection: import('../../_mixins').Theme<
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
                >;
                Scrollbar: import('../../_mixins').Theme<
                    'Scrollbar',
                    {
                        color: string;
                        colorHover: string;
                    },
                    any
                >;
                Checkbox: import('../../_mixins').Theme<
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
                InternalSelection?:
                    | {
                          peers?:
                              | {
                                    Popover?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Scrollbar?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Checkbox?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Empty?:
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
                  '--n-bezier': string;
                  '--n-menu-border-radius': string;
                  '--n-menu-box-shadow': string;
                  '--n-menu-height': string;
                  '--n-column-width': string;
                  '--n-menu-color': string;
                  '--n-menu-divider-color': string;
                  '--n-option-height': string;
                  '--n-option-font-size': string;
                  '--n-option-text-color': string;
                  '--n-option-text-color-disabled': string;
                  '--n-option-text-color-active': string;
                  '--n-option-color-hover': string;
                  '--n-option-check-mark-color': string;
                  '--n-option-arrow-color': string;
                  '--n-menu-mask-color': string;
                  '--n-loading-color': string;
              }>
            | undefined;
        themeClass: globalThis.Ref<string> | undefined;
        onRender: (() => void) | undefined;
        focus: () => void;
        blur: () => void;
        getCheckedData: () => {
            keys: import('./interface').ValueAtom[];
            options: (CascaderOption | null)[];
        };
        getIndeterminateData: () => {
            keys: import('./interface').ValueAtom[];
            options: (CascaderOption | null)[];
        };
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
            readonly allowCheckingNotLoaded: BooleanConstructor;
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly bordered: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly options: {
                readonly type: PropType<CascaderOption[]>;
                readonly default: () => never[];
            };
            readonly value: PropType<Value | null>;
            readonly defaultValue: {
                readonly type: PropType<Value | null>;
                readonly default: null;
            };
            readonly placeholder: StringConstructor;
            readonly multiple: BooleanConstructor;
            readonly size: PropType<'small' | 'medium' | 'large'>;
            readonly filterable: BooleanConstructor;
            readonly disabled: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly disabledField: {
                readonly type: StringConstructor;
                readonly default: 'disabled';
            };
            readonly expandTrigger: {
                readonly type: PropType<ExpandTrigger>;
                readonly default: 'click';
            };
            readonly clearable: BooleanConstructor;
            readonly clearFilterAfterSelect: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly remote: BooleanConstructor;
            readonly onLoad: PropType<OnLoad>;
            readonly separator: {
                readonly type: StringConstructor;
                readonly default: ' / ';
            };
            readonly filter: PropType<Filter>;
            readonly placement: {
                readonly type: PropType<FollowerPlacement>;
                readonly default: 'bottom-start';
            };
            readonly cascade: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly leafOnly: BooleanConstructor;
            readonly showPath: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly show: {
                readonly type: PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly maxTagCount: PropType<number | 'responsive'>;
            readonly menuProps: PropType<HTMLAttributes>;
            readonly filterMenuProps: PropType<HTMLAttributes>;
            readonly virtualScroll: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly checkStrategy: {
                readonly type: PropType<CheckStrategy>;
                readonly default: 'all';
            };
            readonly valueField: {
                readonly type: StringConstructor;
                readonly default: 'value';
            };
            readonly labelField: {
                readonly type: StringConstructor;
                readonly default: 'label';
            };
            readonly childrenField: {
                readonly type: StringConstructor;
                readonly default: 'children';
            };
            readonly renderLabel: PropType<
                (option: CascaderOption, checked: boolean) => VNodeChild
            >;
            readonly status: PropType<FormValidationStatus>;
            readonly 'onUpdate:value': PropType<MaybeArray<OnUpdateValue>>;
            readonly onUpdateValue: PropType<MaybeArray<OnUpdateValue>>;
            readonly 'onUpdate:show': PropType<
                MaybeArray<(show: Boolean) => void>
            >;
            readonly onUpdateShow: PropType<
                MaybeArray<(show: Boolean) => void>
            >;
            readonly onBlur: PropType<(e: FocusEvent) => void>;
            readonly onFocus: PropType<(e: FocusEvent) => void>;
            readonly onChange: PropType<MaybeArray<OnUpdateValue> | undefined>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Cascader',
                    {
                        menuBorderRadius: string;
                        menuColor: string;
                        menuBoxShadow: string;
                        menuDividerColor: string;
                        menuHeight: string;
                        optionArrowColor: string;
                        optionHeight: string;
                        optionFontSize: string;
                        optionColorHover: string;
                        optionTextColor: string;
                        optionTextColorActive: string;
                        optionTextColorDisabled: string;
                        optionCheckMarkColor: string;
                        loadingColor: string;
                        columnWidth: string;
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
                        InternalSelection: import('../../_mixins').Theme<
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
                        >;
                        Scrollbar: import('../../_mixins').Theme<
                            'Scrollbar',
                            {
                                color: string;
                                colorHover: string;
                            },
                            any
                        >;
                        Checkbox: import('../../_mixins').Theme<
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
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Cascader',
                        {
                            menuBorderRadius: string;
                            menuColor: string;
                            menuBoxShadow: string;
                            menuDividerColor: string;
                            menuHeight: string;
                            optionArrowColor: string;
                            optionHeight: string;
                            optionFontSize: string;
                            optionColorHover: string;
                            optionTextColor: string;
                            optionTextColorActive: string;
                            optionTextColorDisabled: string;
                            optionCheckMarkColor: string;
                            loadingColor: string;
                            columnWidth: string;
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
                            InternalSelection: import('../../_mixins').Theme<
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
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Checkbox: import('../../_mixins').Theme<
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
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Cascader',
                        {
                            menuBorderRadius: string;
                            menuColor: string;
                            menuBoxShadow: string;
                            menuDividerColor: string;
                            menuHeight: string;
                            optionArrowColor: string;
                            optionHeight: string;
                            optionFontSize: string;
                            optionColorHover: string;
                            optionTextColor: string;
                            optionTextColorActive: string;
                            optionTextColorDisabled: string;
                            optionCheckMarkColor: string;
                            loadingColor: string;
                            columnWidth: string;
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
                            InternalSelection: import('../../_mixins').Theme<
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
                            >;
                            Scrollbar: import('../../_mixins').Theme<
                                'Scrollbar',
                                {
                                    color: string;
                                    colorHover: string;
                                },
                                any
                            >;
                            Checkbox: import('../../_mixins').Theme<
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
                    >
                >
            >;
        }>
    >,
    {
        readonly show: boolean | undefined;
        readonly separator: string;
        readonly multiple: boolean;
        readonly disabled: boolean | undefined;
        readonly to: string | boolean | HTMLElement;
        readonly options: CascaderOption[];
        readonly bordered: boolean | undefined;
        readonly placement: FollowerPlacement;
        readonly virtualScroll: boolean;
        readonly labelField: string;
        readonly valueField: string;
        readonly clearable: boolean;
        readonly clearFilterAfterSelect: boolean;
        readonly defaultValue: Value | null;
        readonly filterable: boolean;
        readonly remote: boolean;
        readonly childrenField: string;
        readonly expandTrigger: ExpandTrigger;
        readonly allowCheckingNotLoaded: boolean;
        readonly cascade: boolean;
        readonly showPath: boolean;
        readonly checkStrategy: CheckStrategy;
        readonly disabledField: string;
        readonly leafOnly: boolean;
    },
    {}
>;
export default _default;
