import { PropType } from 'vue';
import type { SelectProps } from '../../select';
import type { PageItem } from './utils';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { Size as InputSize } from '../../input/src/interface';
import type { Size as SelectSize } from '../../select/src/interface';
import {
    PaginationRenderLabel,
    PaginationSizeOption,
    RenderGoto,
    RenderPrefix,
    Size,
} from './interface';
export declare const paginationProps: {
    readonly simple: BooleanConstructor;
    readonly page: NumberConstructor;
    readonly defaultPage: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly itemCount: NumberConstructor;
    readonly pageCount: NumberConstructor;
    readonly defaultPageCount: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly showSizePicker: BooleanConstructor;
    readonly pageSize: NumberConstructor;
    readonly defaultPageSize: NumberConstructor;
    readonly pageSizes: {
        readonly type: PropType<(number | PaginationSizeOption)[]>;
        readonly default: () => number[];
    };
    readonly showQuickJumper: BooleanConstructor;
    readonly size: {
        readonly type: PropType<Size>;
        readonly default: 'medium';
    };
    readonly disabled: BooleanConstructor;
    readonly pageSlot: {
        readonly type: NumberConstructor;
        readonly default: 9;
    };
    readonly selectProps: PropType<SelectProps>;
    readonly prev: PropType<RenderPrefix>;
    readonly next: PropType<RenderPrefix>;
    readonly goto: PropType<RenderGoto>;
    readonly prefix: PropType<RenderPrefix>;
    readonly suffix: PropType<RenderPrefix>;
    readonly label: PropType<PaginationRenderLabel>;
    readonly displayOrder: {
        readonly type: PropType<('pages' | 'size-picker' | 'quick-jumper')[]>;
        readonly default: readonly ['pages', 'size-picker', 'quick-jumper'];
    };
    readonly to: {
        type: PropType<string | boolean | HTMLElement>;
        default: undefined;
    };
    readonly 'onUpdate:page': PropType<MaybeArray<(page: number) => void>>;
    readonly onUpdatePage: PropType<MaybeArray<(page: number) => void>>;
    readonly 'onUpdate:pageSize': PropType<
        MaybeArray<(pageSize: number) => void>
    >;
    readonly onUpdatePageSize: PropType<MaybeArray<(pageSize: number) => void>>;
    /** @deprecated */
    readonly onPageSizeChange: PropType<MaybeArray<(pageSize: number) => void>>;
    /** @deprecated */
    readonly onChange: PropType<MaybeArray<(page: number) => void>>;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'Pagination',
            {
                buttonColor: string;
                buttonColorHover: string;
                buttonColorPressed: string;
                buttonBorder: string;
                buttonBorderHover: string;
                buttonBorderPressed: string;
                buttonIconColor: string;
                buttonIconColorHover: string;
                buttonIconColorPressed: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorPressed: string;
                itemTextColorActive: string;
                itemTextColorDisabled: string;
                itemColor: string;
                itemColorHover: string;
                itemColorPressed: string;
                itemColorActive: string;
                itemColorActiveHover: string;
                itemColorDisabled: string;
                itemBorder: string;
                itemBorderHover: string;
                itemBorderPressed: string;
                itemBorderActive: string;
                itemBorderDisabled: string;
                itemBorderRadius: string;
                itemSizeSmall: string;
                itemSizeMedium: string;
                itemSizeLarge: string;
                itemFontSizeSmall: string;
                itemFontSizeMedium: string;
                itemFontSizeLarge: string;
                jumperFontSizeSmall: string;
                jumperFontSizeMedium: string;
                jumperFontSizeLarge: string;
                jumperTextColor: string;
                jumperTextColorDisabled: string;
                itemPaddingSmall: string;
                itemMarginSmall: string;
                itemMarginSmallRtl: string;
                itemPaddingMedium: string;
                itemMarginMedium: string;
                itemMarginMediumRtl: string;
                itemPaddingLarge: string;
                itemMarginLarge: string;
                itemMarginLargeRtl: string;
                buttonIconSizeSmall: string;
                buttonIconSizeMedium: string;
                buttonIconSizeLarge: string;
                inputWidthSmall: string;
                selectWidthSmall: string;
                inputMarginSmall: string;
                inputMarginSmallRtl: string;
                selectMarginSmall: string;
                prefixMarginSmall: string;
                suffixMarginSmall: string;
                inputWidthMedium: string;
                selectWidthMedium: string;
                inputMarginMedium: string;
                inputMarginMediumRtl: string;
                selectMarginMedium: string;
                prefixMarginMedium: string;
                suffixMarginMedium: string;
                inputWidthLarge: string;
                selectWidthLarge: string;
                inputMarginLarge: string;
                inputMarginLargeRtl: string;
                selectMarginLarge: string;
                prefixMarginLarge: string;
                suffixMarginLarge: string;
            },
            {
                Select: import('../../_mixins').Theme<
                    'Select',
                    {
                        menuBoxShadow: string;
                    },
                    {
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
                Popselect: import('../../_mixins').Theme<
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
                >;
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Pagination',
                {
                    buttonColor: string;
                    buttonColorHover: string;
                    buttonColorPressed: string;
                    buttonBorder: string;
                    buttonBorderHover: string;
                    buttonBorderPressed: string;
                    buttonIconColor: string;
                    buttonIconColorHover: string;
                    buttonIconColorPressed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemTextColorDisabled: string;
                    itemColor: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorDisabled: string;
                    itemBorder: string;
                    itemBorderHover: string;
                    itemBorderPressed: string;
                    itemBorderActive: string;
                    itemBorderDisabled: string;
                    itemBorderRadius: string;
                    itemSizeSmall: string;
                    itemSizeMedium: string;
                    itemSizeLarge: string;
                    itemFontSizeSmall: string;
                    itemFontSizeMedium: string;
                    itemFontSizeLarge: string;
                    jumperFontSizeSmall: string;
                    jumperFontSizeMedium: string;
                    jumperFontSizeLarge: string;
                    jumperTextColor: string;
                    jumperTextColorDisabled: string;
                    itemPaddingSmall: string;
                    itemMarginSmall: string;
                    itemMarginSmallRtl: string;
                    itemPaddingMedium: string;
                    itemMarginMedium: string;
                    itemMarginMediumRtl: string;
                    itemPaddingLarge: string;
                    itemMarginLarge: string;
                    itemMarginLargeRtl: string;
                    buttonIconSizeSmall: string;
                    buttonIconSizeMedium: string;
                    buttonIconSizeLarge: string;
                    inputWidthSmall: string;
                    selectWidthSmall: string;
                    inputMarginSmall: string;
                    inputMarginSmallRtl: string;
                    selectMarginSmall: string;
                    prefixMarginSmall: string;
                    suffixMarginSmall: string;
                    inputWidthMedium: string;
                    selectWidthMedium: string;
                    inputMarginMedium: string;
                    inputMarginMediumRtl: string;
                    selectMarginMedium: string;
                    prefixMarginMedium: string;
                    suffixMarginMedium: string;
                    inputWidthLarge: string;
                    selectWidthLarge: string;
                    inputMarginLarge: string;
                    inputMarginLargeRtl: string;
                    selectMarginLarge: string;
                    prefixMarginLarge: string;
                    suffixMarginLarge: string;
                },
                {
                    Select: import('../../_mixins').Theme<
                        'Select',
                        {
                            menuBoxShadow: string;
                        },
                        {
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
                    Popselect: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'Pagination',
                {
                    buttonColor: string;
                    buttonColorHover: string;
                    buttonColorPressed: string;
                    buttonBorder: string;
                    buttonBorderHover: string;
                    buttonBorderPressed: string;
                    buttonIconColor: string;
                    buttonIconColorHover: string;
                    buttonIconColorPressed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemTextColorDisabled: string;
                    itemColor: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorDisabled: string;
                    itemBorder: string;
                    itemBorderHover: string;
                    itemBorderPressed: string;
                    itemBorderActive: string;
                    itemBorderDisabled: string;
                    itemBorderRadius: string;
                    itemSizeSmall: string;
                    itemSizeMedium: string;
                    itemSizeLarge: string;
                    itemFontSizeSmall: string;
                    itemFontSizeMedium: string;
                    itemFontSizeLarge: string;
                    jumperFontSizeSmall: string;
                    jumperFontSizeMedium: string;
                    jumperFontSizeLarge: string;
                    jumperTextColor: string;
                    jumperTextColorDisabled: string;
                    itemPaddingSmall: string;
                    itemMarginSmall: string;
                    itemMarginSmallRtl: string;
                    itemPaddingMedium: string;
                    itemMarginMedium: string;
                    itemMarginMediumRtl: string;
                    itemPaddingLarge: string;
                    itemMarginLarge: string;
                    itemMarginLargeRtl: string;
                    buttonIconSizeSmall: string;
                    buttonIconSizeMedium: string;
                    buttonIconSizeLarge: string;
                    inputWidthSmall: string;
                    selectWidthSmall: string;
                    inputMarginSmall: string;
                    inputMarginSmallRtl: string;
                    selectMarginSmall: string;
                    prefixMarginSmall: string;
                    suffixMarginSmall: string;
                    inputWidthMedium: string;
                    selectWidthMedium: string;
                    inputMarginMedium: string;
                    inputMarginMediumRtl: string;
                    selectMarginMedium: string;
                    prefixMarginMedium: string;
                    suffixMarginMedium: string;
                    inputWidthLarge: string;
                    selectWidthLarge: string;
                    inputMarginLarge: string;
                    inputMarginLargeRtl: string;
                    selectMarginLarge: string;
                    prefixMarginLarge: string;
                    suffixMarginLarge: string;
                },
                {
                    Select: import('../../_mixins').Theme<
                        'Select',
                        {
                            menuBoxShadow: string;
                        },
                        {
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
                    Popselect: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >
    >;
};
export type PaginationProps = ExtractPublicPropTypes<typeof paginationProps>;
declare const _default: import('vue').DefineComponent<
    {
        readonly simple: BooleanConstructor;
        readonly page: NumberConstructor;
        readonly defaultPage: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly itemCount: NumberConstructor;
        readonly pageCount: NumberConstructor;
        readonly defaultPageCount: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly showSizePicker: BooleanConstructor;
        readonly pageSize: NumberConstructor;
        readonly defaultPageSize: NumberConstructor;
        readonly pageSizes: {
            readonly type: PropType<(number | PaginationSizeOption)[]>;
            readonly default: () => number[];
        };
        readonly showQuickJumper: BooleanConstructor;
        readonly size: {
            readonly type: PropType<Size>;
            readonly default: 'medium';
        };
        readonly disabled: BooleanConstructor;
        readonly pageSlot: {
            readonly type: NumberConstructor;
            readonly default: 9;
        };
        readonly selectProps: PropType<SelectProps>;
        readonly prev: PropType<RenderPrefix>;
        readonly next: PropType<RenderPrefix>;
        readonly goto: PropType<RenderGoto>;
        readonly prefix: PropType<RenderPrefix>;
        readonly suffix: PropType<RenderPrefix>;
        readonly label: PropType<PaginationRenderLabel>;
        readonly displayOrder: {
            readonly type: PropType<
                ('pages' | 'size-picker' | 'quick-jumper')[]
            >;
            readonly default: readonly ['pages', 'size-picker', 'quick-jumper'];
        };
        readonly to: {
            type: PropType<string | boolean | HTMLElement>;
            default: undefined;
        };
        readonly 'onUpdate:page': PropType<MaybeArray<(page: number) => void>>;
        readonly onUpdatePage: PropType<MaybeArray<(page: number) => void>>;
        readonly 'onUpdate:pageSize': PropType<
            MaybeArray<(pageSize: number) => void>
        >;
        readonly onUpdatePageSize: PropType<
            MaybeArray<(pageSize: number) => void>
        >;
        /** @deprecated */
        readonly onPageSizeChange: PropType<
            MaybeArray<(pageSize: number) => void>
        >;
        /** @deprecated */
        readonly onChange: PropType<MaybeArray<(page: number) => void>>;
        readonly theme: PropType<
            import('../../_mixins').Theme<
                'Pagination',
                {
                    buttonColor: string;
                    buttonColorHover: string;
                    buttonColorPressed: string;
                    buttonBorder: string;
                    buttonBorderHover: string;
                    buttonBorderPressed: string;
                    buttonIconColor: string;
                    buttonIconColorHover: string;
                    buttonIconColorPressed: string;
                    itemTextColor: string;
                    itemTextColorHover: string;
                    itemTextColorPressed: string;
                    itemTextColorActive: string;
                    itemTextColorDisabled: string;
                    itemColor: string;
                    itemColorHover: string;
                    itemColorPressed: string;
                    itemColorActive: string;
                    itemColorActiveHover: string;
                    itemColorDisabled: string;
                    itemBorder: string;
                    itemBorderHover: string;
                    itemBorderPressed: string;
                    itemBorderActive: string;
                    itemBorderDisabled: string;
                    itemBorderRadius: string;
                    itemSizeSmall: string;
                    itemSizeMedium: string;
                    itemSizeLarge: string;
                    itemFontSizeSmall: string;
                    itemFontSizeMedium: string;
                    itemFontSizeLarge: string;
                    jumperFontSizeSmall: string;
                    jumperFontSizeMedium: string;
                    jumperFontSizeLarge: string;
                    jumperTextColor: string;
                    jumperTextColorDisabled: string;
                    itemPaddingSmall: string;
                    itemMarginSmall: string;
                    itemMarginSmallRtl: string;
                    itemPaddingMedium: string;
                    itemMarginMedium: string;
                    itemMarginMediumRtl: string;
                    itemPaddingLarge: string;
                    itemMarginLarge: string;
                    itemMarginLargeRtl: string;
                    buttonIconSizeSmall: string;
                    buttonIconSizeMedium: string;
                    buttonIconSizeLarge: string;
                    inputWidthSmall: string;
                    selectWidthSmall: string;
                    inputMarginSmall: string;
                    inputMarginSmallRtl: string;
                    selectMarginSmall: string;
                    prefixMarginSmall: string;
                    suffixMarginSmall: string;
                    inputWidthMedium: string;
                    selectWidthMedium: string;
                    inputMarginMedium: string;
                    inputMarginMediumRtl: string;
                    selectMarginMedium: string;
                    prefixMarginMedium: string;
                    suffixMarginMedium: string;
                    inputWidthLarge: string;
                    selectWidthLarge: string;
                    inputMarginLarge: string;
                    inputMarginLargeRtl: string;
                    selectMarginLarge: string;
                    prefixMarginLarge: string;
                    suffixMarginLarge: string;
                },
                {
                    Select: import('../../_mixins').Theme<
                        'Select',
                        {
                            menuBoxShadow: string;
                        },
                        {
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
                    Popselect: import('../../_mixins').Theme<
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
                    >;
                }
            >
        >;
        readonly themeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Pagination',
                    {
                        buttonColor: string;
                        buttonColorHover: string;
                        buttonColorPressed: string;
                        buttonBorder: string;
                        buttonBorderHover: string;
                        buttonBorderPressed: string;
                        buttonIconColor: string;
                        buttonIconColorHover: string;
                        buttonIconColorPressed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemTextColorDisabled: string;
                        itemColor: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorDisabled: string;
                        itemBorder: string;
                        itemBorderHover: string;
                        itemBorderPressed: string;
                        itemBorderActive: string;
                        itemBorderDisabled: string;
                        itemBorderRadius: string;
                        itemSizeSmall: string;
                        itemSizeMedium: string;
                        itemSizeLarge: string;
                        itemFontSizeSmall: string;
                        itemFontSizeMedium: string;
                        itemFontSizeLarge: string;
                        jumperFontSizeSmall: string;
                        jumperFontSizeMedium: string;
                        jumperFontSizeLarge: string;
                        jumperTextColor: string;
                        jumperTextColorDisabled: string;
                        itemPaddingSmall: string;
                        itemMarginSmall: string;
                        itemMarginSmallRtl: string;
                        itemPaddingMedium: string;
                        itemMarginMedium: string;
                        itemMarginMediumRtl: string;
                        itemPaddingLarge: string;
                        itemMarginLarge: string;
                        itemMarginLargeRtl: string;
                        buttonIconSizeSmall: string;
                        buttonIconSizeMedium: string;
                        buttonIconSizeLarge: string;
                        inputWidthSmall: string;
                        selectWidthSmall: string;
                        inputMarginSmall: string;
                        inputMarginSmallRtl: string;
                        selectMarginSmall: string;
                        prefixMarginSmall: string;
                        suffixMarginSmall: string;
                        inputWidthMedium: string;
                        selectWidthMedium: string;
                        inputMarginMedium: string;
                        inputMarginMediumRtl: string;
                        selectMarginMedium: string;
                        prefixMarginMedium: string;
                        suffixMarginMedium: string;
                        inputWidthLarge: string;
                        selectWidthLarge: string;
                        inputMarginLarge: string;
                        inputMarginLargeRtl: string;
                        selectMarginLarge: string;
                        prefixMarginLarge: string;
                        suffixMarginLarge: string;
                    },
                    {
                        Select: import('../../_mixins').Theme<
                            'Select',
                            {
                                menuBoxShadow: string;
                            },
                            {
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
                        Popselect: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >
        >;
        readonly builtinThemeOverrides: PropType<
            import('../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../_mixins').Theme<
                    'Pagination',
                    {
                        buttonColor: string;
                        buttonColorHover: string;
                        buttonColorPressed: string;
                        buttonBorder: string;
                        buttonBorderHover: string;
                        buttonBorderPressed: string;
                        buttonIconColor: string;
                        buttonIconColorHover: string;
                        buttonIconColorPressed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemTextColorDisabled: string;
                        itemColor: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorDisabled: string;
                        itemBorder: string;
                        itemBorderHover: string;
                        itemBorderPressed: string;
                        itemBorderActive: string;
                        itemBorderDisabled: string;
                        itemBorderRadius: string;
                        itemSizeSmall: string;
                        itemSizeMedium: string;
                        itemSizeLarge: string;
                        itemFontSizeSmall: string;
                        itemFontSizeMedium: string;
                        itemFontSizeLarge: string;
                        jumperFontSizeSmall: string;
                        jumperFontSizeMedium: string;
                        jumperFontSizeLarge: string;
                        jumperTextColor: string;
                        jumperTextColorDisabled: string;
                        itemPaddingSmall: string;
                        itemMarginSmall: string;
                        itemMarginSmallRtl: string;
                        itemPaddingMedium: string;
                        itemMarginMedium: string;
                        itemMarginMediumRtl: string;
                        itemPaddingLarge: string;
                        itemMarginLarge: string;
                        itemMarginLargeRtl: string;
                        buttonIconSizeSmall: string;
                        buttonIconSizeMedium: string;
                        buttonIconSizeLarge: string;
                        inputWidthSmall: string;
                        selectWidthSmall: string;
                        inputMarginSmall: string;
                        inputMarginSmallRtl: string;
                        selectMarginSmall: string;
                        prefixMarginSmall: string;
                        suffixMarginSmall: string;
                        inputWidthMedium: string;
                        selectWidthMedium: string;
                        inputMarginMedium: string;
                        inputMarginMediumRtl: string;
                        selectMarginMedium: string;
                        prefixMarginMedium: string;
                        suffixMarginMedium: string;
                        inputWidthLarge: string;
                        selectWidthLarge: string;
                        inputMarginLarge: string;
                        inputMarginLargeRtl: string;
                        selectMarginLarge: string;
                        prefixMarginLarge: string;
                        suffixMarginLarge: string;
                    },
                    {
                        Select: import('../../_mixins').Theme<
                            'Select',
                            {
                                menuBoxShadow: string;
                            },
                            {
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
                        Popselect: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >
        >;
    },
    {
        rtlEnabled:
            | globalThis.Ref<
                  | import('../../config-provider/src/internal-interface').RtlItem
                  | undefined
              >
            | undefined;
        mergedClsPrefix: globalThis.ComputedRef<string>;
        locale: globalThis.Ref<{
            goto: string;
            selectionSuffix: string;
        }>;
        selfRef: globalThis.Ref<HTMLElement | null>;
        mergedPage: globalThis.ComputedRef<number>;
        pageItems: globalThis.ComputedRef<PageItem[]>;
        mergedItemCount: globalThis.ComputedRef<number>;
        jumperValue: globalThis.Ref<string>;
        pageSizeOptions: globalThis.ComputedRef<PaginationSizeOption[]>;
        mergedPageSize: globalThis.ComputedRef<number>;
        inputSize: globalThis.ComputedRef<InputSize>;
        selectSize: globalThis.ComputedRef<SelectSize>;
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
                buttonColor: string;
                buttonColorHover: string;
                buttonColorPressed: string;
                buttonBorder: string;
                buttonBorderHover: string;
                buttonBorderPressed: string;
                buttonIconColor: string;
                buttonIconColorHover: string;
                buttonIconColorPressed: string;
                itemTextColor: string;
                itemTextColorHover: string;
                itemTextColorPressed: string;
                itemTextColorActive: string;
                itemTextColorDisabled: string;
                itemColor: string;
                itemColorHover: string;
                itemColorPressed: string;
                itemColorActive: string;
                itemColorActiveHover: string;
                itemColorDisabled: string;
                itemBorder: string;
                itemBorderHover: string;
                itemBorderPressed: string;
                itemBorderActive: string;
                itemBorderDisabled: string;
                itemBorderRadius: string;
                itemSizeSmall: string;
                itemSizeMedium: string;
                itemSizeLarge: string;
                itemFontSizeSmall: string;
                itemFontSizeMedium: string;
                itemFontSizeLarge: string;
                jumperFontSizeSmall: string;
                jumperFontSizeMedium: string;
                jumperFontSizeLarge: string;
                jumperTextColor: string;
                jumperTextColorDisabled: string;
                itemPaddingSmall: string;
                itemMarginSmall: string;
                itemMarginSmallRtl: string;
                itemPaddingMedium: string;
                itemMarginMedium: string;
                itemMarginMediumRtl: string;
                itemPaddingLarge: string;
                itemMarginLarge: string;
                itemMarginLargeRtl: string;
                buttonIconSizeSmall: string;
                buttonIconSizeMedium: string;
                buttonIconSizeLarge: string;
                inputWidthSmall: string;
                selectWidthSmall: string;
                inputMarginSmall: string;
                inputMarginSmallRtl: string;
                selectMarginSmall: string;
                prefixMarginSmall: string;
                suffixMarginSmall: string;
                inputWidthMedium: string;
                selectWidthMedium: string;
                inputMarginMedium: string;
                inputMarginMediumRtl: string;
                selectMarginMedium: string;
                prefixMarginMedium: string;
                suffixMarginMedium: string;
                inputWidthLarge: string;
                selectWidthLarge: string;
                inputMarginLarge: string;
                inputMarginLargeRtl: string;
                selectMarginLarge: string;
                prefixMarginLarge: string;
                suffixMarginLarge: string;
            };
            peers: {
                Select: import('../../_mixins').Theme<
                    'Select',
                    {
                        menuBoxShadow: string;
                    },
                    {
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
                Popselect: import('../../_mixins').Theme<
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
                >;
            };
            peerOverrides: {
                Select?:
                    | {
                          peers?:
                              | {
                                    InternalSelection?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                    InternalSelectMenu?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                Popselect?:
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
                                    InternalSelectMenu?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
            };
        }>;
        mergedPageCount: globalThis.ComputedRef<number>;
        startIndex: globalThis.ComputedRef<number>;
        endIndex: globalThis.ComputedRef<number>;
        showFastForwardMenu: globalThis.Ref<boolean>;
        showFastBackwardMenu: globalThis.Ref<boolean>;
        fastForwardActive: globalThis.Ref<boolean>;
        fastBackwardActive: globalThis.Ref<boolean>;
        handleMenuSelect: (value: number) => void;
        handleFastForwardMouseenter: () => void;
        handleFastForwardMouseleave: () => void;
        handleFastBackwardMouseenter: () => void;
        handleFastBackwardMouseleave: () => void;
        handleJumperInput: (value: string) => void;
        handleBackwardClick: () => void;
        handleForwardClick: () => void;
        handlePageItemClick: (pageItem: PageItem) => void;
        handleSizePickerChange: (value: number) => void;
        handleQuickJumperChange: () => void;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-prefix-margin': string;
                  '--n-suffix-margin': string;
                  '--n-item-font-size': string;
                  '--n-select-width': string;
                  '--n-select-margin': string;
                  '--n-input-width': string;
                  '--n-input-margin': string;
                  '--n-input-margin-rtl': string;
                  '--n-item-size': string;
                  '--n-item-text-color': string;
                  '--n-item-text-color-disabled': string;
                  '--n-item-text-color-hover': string;
                  '--n-item-text-color-active': string;
                  '--n-item-text-color-pressed': string;
                  '--n-item-color': string;
                  '--n-item-color-hover': string;
                  '--n-item-color-disabled': string;
                  '--n-item-color-active': string;
                  '--n-item-color-active-hover': string;
                  '--n-item-color-pressed': string;
                  '--n-item-border': string;
                  '--n-item-border-hover': string;
                  '--n-item-border-disabled': string;
                  '--n-item-border-active': string;
                  '--n-item-border-pressed': string;
                  '--n-item-padding': string;
                  '--n-item-border-radius': string;
                  '--n-bezier': string;
                  '--n-jumper-font-size': string;
                  '--n-jumper-text-color': string;
                  '--n-jumper-text-color-disabled': string;
                  '--n-item-margin': string;
                  '--n-item-margin-rtl': string;
                  '--n-button-icon-size': string;
                  '--n-button-icon-color': string;
                  '--n-button-icon-color-hover': string;
                  '--n-button-icon-color-pressed': string;
                  '--n-button-color-hover': string;
                  '--n-button-color': string;
                  '--n-button-color-pressed': string;
                  '--n-button-border': string;
                  '--n-button-border-hover': string;
                  '--n-button-border-pressed': string;
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
            readonly simple: BooleanConstructor;
            readonly page: NumberConstructor;
            readonly defaultPage: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly itemCount: NumberConstructor;
            readonly pageCount: NumberConstructor;
            readonly defaultPageCount: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly showSizePicker: BooleanConstructor;
            readonly pageSize: NumberConstructor;
            readonly defaultPageSize: NumberConstructor;
            readonly pageSizes: {
                readonly type: PropType<(number | PaginationSizeOption)[]>;
                readonly default: () => number[];
            };
            readonly showQuickJumper: BooleanConstructor;
            readonly size: {
                readonly type: PropType<Size>;
                readonly default: 'medium';
            };
            readonly disabled: BooleanConstructor;
            readonly pageSlot: {
                readonly type: NumberConstructor;
                readonly default: 9;
            };
            readonly selectProps: PropType<SelectProps>;
            readonly prev: PropType<RenderPrefix>;
            readonly next: PropType<RenderPrefix>;
            readonly goto: PropType<RenderGoto>;
            readonly prefix: PropType<RenderPrefix>;
            readonly suffix: PropType<RenderPrefix>;
            readonly label: PropType<PaginationRenderLabel>;
            readonly displayOrder: {
                readonly type: PropType<
                    ('pages' | 'size-picker' | 'quick-jumper')[]
                >;
                readonly default: readonly [
                    'pages',
                    'size-picker',
                    'quick-jumper'
                ];
            };
            readonly to: {
                type: PropType<string | boolean | HTMLElement>;
                default: undefined;
            };
            readonly 'onUpdate:page': PropType<
                MaybeArray<(page: number) => void>
            >;
            readonly onUpdatePage: PropType<MaybeArray<(page: number) => void>>;
            readonly 'onUpdate:pageSize': PropType<
                MaybeArray<(pageSize: number) => void>
            >;
            readonly onUpdatePageSize: PropType<
                MaybeArray<(pageSize: number) => void>
            >;
            /** @deprecated */
            readonly onPageSizeChange: PropType<
                MaybeArray<(pageSize: number) => void>
            >;
            /** @deprecated */
            readonly onChange: PropType<MaybeArray<(page: number) => void>>;
            readonly theme: PropType<
                import('../../_mixins').Theme<
                    'Pagination',
                    {
                        buttonColor: string;
                        buttonColorHover: string;
                        buttonColorPressed: string;
                        buttonBorder: string;
                        buttonBorderHover: string;
                        buttonBorderPressed: string;
                        buttonIconColor: string;
                        buttonIconColorHover: string;
                        buttonIconColorPressed: string;
                        itemTextColor: string;
                        itemTextColorHover: string;
                        itemTextColorPressed: string;
                        itemTextColorActive: string;
                        itemTextColorDisabled: string;
                        itemColor: string;
                        itemColorHover: string;
                        itemColorPressed: string;
                        itemColorActive: string;
                        itemColorActiveHover: string;
                        itemColorDisabled: string;
                        itemBorder: string;
                        itemBorderHover: string;
                        itemBorderPressed: string;
                        itemBorderActive: string;
                        itemBorderDisabled: string;
                        itemBorderRadius: string;
                        itemSizeSmall: string;
                        itemSizeMedium: string;
                        itemSizeLarge: string;
                        itemFontSizeSmall: string;
                        itemFontSizeMedium: string;
                        itemFontSizeLarge: string;
                        jumperFontSizeSmall: string;
                        jumperFontSizeMedium: string;
                        jumperFontSizeLarge: string;
                        jumperTextColor: string;
                        jumperTextColorDisabled: string;
                        itemPaddingSmall: string;
                        itemMarginSmall: string;
                        itemMarginSmallRtl: string;
                        itemPaddingMedium: string;
                        itemMarginMedium: string;
                        itemMarginMediumRtl: string;
                        itemPaddingLarge: string;
                        itemMarginLarge: string;
                        itemMarginLargeRtl: string;
                        buttonIconSizeSmall: string;
                        buttonIconSizeMedium: string;
                        buttonIconSizeLarge: string;
                        inputWidthSmall: string;
                        selectWidthSmall: string;
                        inputMarginSmall: string;
                        inputMarginSmallRtl: string;
                        selectMarginSmall: string;
                        prefixMarginSmall: string;
                        suffixMarginSmall: string;
                        inputWidthMedium: string;
                        selectWidthMedium: string;
                        inputMarginMedium: string;
                        inputMarginMediumRtl: string;
                        selectMarginMedium: string;
                        prefixMarginMedium: string;
                        suffixMarginMedium: string;
                        inputWidthLarge: string;
                        selectWidthLarge: string;
                        inputMarginLarge: string;
                        inputMarginLargeRtl: string;
                        selectMarginLarge: string;
                        prefixMarginLarge: string;
                        suffixMarginLarge: string;
                    },
                    {
                        Select: import('../../_mixins').Theme<
                            'Select',
                            {
                                menuBoxShadow: string;
                            },
                            {
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
                        Popselect: import('../../_mixins').Theme<
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
                        >;
                    }
                >
            >;
            readonly themeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Pagination',
                        {
                            buttonColor: string;
                            buttonColorHover: string;
                            buttonColorPressed: string;
                            buttonBorder: string;
                            buttonBorderHover: string;
                            buttonBorderPressed: string;
                            buttonIconColor: string;
                            buttonIconColorHover: string;
                            buttonIconColorPressed: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorPressed: string;
                            itemTextColorActive: string;
                            itemTextColorDisabled: string;
                            itemColor: string;
                            itemColorHover: string;
                            itemColorPressed: string;
                            itemColorActive: string;
                            itemColorActiveHover: string;
                            itemColorDisabled: string;
                            itemBorder: string;
                            itemBorderHover: string;
                            itemBorderPressed: string;
                            itemBorderActive: string;
                            itemBorderDisabled: string;
                            itemBorderRadius: string;
                            itemSizeSmall: string;
                            itemSizeMedium: string;
                            itemSizeLarge: string;
                            itemFontSizeSmall: string;
                            itemFontSizeMedium: string;
                            itemFontSizeLarge: string;
                            jumperFontSizeSmall: string;
                            jumperFontSizeMedium: string;
                            jumperFontSizeLarge: string;
                            jumperTextColor: string;
                            jumperTextColorDisabled: string;
                            itemPaddingSmall: string;
                            itemMarginSmall: string;
                            itemMarginSmallRtl: string;
                            itemPaddingMedium: string;
                            itemMarginMedium: string;
                            itemMarginMediumRtl: string;
                            itemPaddingLarge: string;
                            itemMarginLarge: string;
                            itemMarginLargeRtl: string;
                            buttonIconSizeSmall: string;
                            buttonIconSizeMedium: string;
                            buttonIconSizeLarge: string;
                            inputWidthSmall: string;
                            selectWidthSmall: string;
                            inputMarginSmall: string;
                            inputMarginSmallRtl: string;
                            selectMarginSmall: string;
                            prefixMarginSmall: string;
                            suffixMarginSmall: string;
                            inputWidthMedium: string;
                            selectWidthMedium: string;
                            inputMarginMedium: string;
                            inputMarginMediumRtl: string;
                            selectMarginMedium: string;
                            prefixMarginMedium: string;
                            suffixMarginMedium: string;
                            inputWidthLarge: string;
                            selectWidthLarge: string;
                            inputMarginLarge: string;
                            inputMarginLargeRtl: string;
                            selectMarginLarge: string;
                            prefixMarginLarge: string;
                            suffixMarginLarge: string;
                        },
                        {
                            Select: import('../../_mixins').Theme<
                                'Select',
                                {
                                    menuBoxShadow: string;
                                },
                                {
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
                            Popselect: import('../../_mixins').Theme<
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
                            >;
                        }
                    >
                >
            >;
            readonly builtinThemeOverrides: PropType<
                import('../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../_mixins').Theme<
                        'Pagination',
                        {
                            buttonColor: string;
                            buttonColorHover: string;
                            buttonColorPressed: string;
                            buttonBorder: string;
                            buttonBorderHover: string;
                            buttonBorderPressed: string;
                            buttonIconColor: string;
                            buttonIconColorHover: string;
                            buttonIconColorPressed: string;
                            itemTextColor: string;
                            itemTextColorHover: string;
                            itemTextColorPressed: string;
                            itemTextColorActive: string;
                            itemTextColorDisabled: string;
                            itemColor: string;
                            itemColorHover: string;
                            itemColorPressed: string;
                            itemColorActive: string;
                            itemColorActiveHover: string;
                            itemColorDisabled: string;
                            itemBorder: string;
                            itemBorderHover: string;
                            itemBorderPressed: string;
                            itemBorderActive: string;
                            itemBorderDisabled: string;
                            itemBorderRadius: string;
                            itemSizeSmall: string;
                            itemSizeMedium: string;
                            itemSizeLarge: string;
                            itemFontSizeSmall: string;
                            itemFontSizeMedium: string;
                            itemFontSizeLarge: string;
                            jumperFontSizeSmall: string;
                            jumperFontSizeMedium: string;
                            jumperFontSizeLarge: string;
                            jumperTextColor: string;
                            jumperTextColorDisabled: string;
                            itemPaddingSmall: string;
                            itemMarginSmall: string;
                            itemMarginSmallRtl: string;
                            itemPaddingMedium: string;
                            itemMarginMedium: string;
                            itemMarginMediumRtl: string;
                            itemPaddingLarge: string;
                            itemMarginLarge: string;
                            itemMarginLargeRtl: string;
                            buttonIconSizeSmall: string;
                            buttonIconSizeMedium: string;
                            buttonIconSizeLarge: string;
                            inputWidthSmall: string;
                            selectWidthSmall: string;
                            inputMarginSmall: string;
                            inputMarginSmallRtl: string;
                            selectMarginSmall: string;
                            prefixMarginSmall: string;
                            suffixMarginSmall: string;
                            inputWidthMedium: string;
                            selectWidthMedium: string;
                            inputMarginMedium: string;
                            inputMarginMediumRtl: string;
                            selectMarginMedium: string;
                            prefixMarginMedium: string;
                            suffixMarginMedium: string;
                            inputWidthLarge: string;
                            selectWidthLarge: string;
                            inputMarginLarge: string;
                            inputMarginLargeRtl: string;
                            selectMarginLarge: string;
                            prefixMarginLarge: string;
                            suffixMarginLarge: string;
                        },
                        {
                            Select: import('../../_mixins').Theme<
                                'Select',
                                {
                                    menuBoxShadow: string;
                                },
                                {
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
                            Popselect: import('../../_mixins').Theme<
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
                            >;
                        }
                    >
                >
            >;
        }>
    >,
    {
        readonly size: Size;
        readonly disabled: boolean;
        readonly to: string | boolean | HTMLElement;
        readonly simple: boolean;
        readonly defaultPage: number;
        readonly defaultPageCount: number;
        readonly showSizePicker: boolean;
        readonly pageSizes: (number | PaginationSizeOption)[];
        readonly showQuickJumper: boolean;
        readonly pageSlot: number;
        readonly displayOrder: ('pages' | 'size-picker' | 'quick-jumper')[];
    },
    {}
>;
export default _default;
