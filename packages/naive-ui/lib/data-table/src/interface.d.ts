import { TreeMate, TreeNode } from 'treemate';
import {
    CSSProperties,
    Ref,
    HTMLAttributes,
    Slots,
    PropType,
    ExtractPropTypes,
    VNodeChild,
} from 'vue';
import type { ScrollbarProps, ScrollTo } from '../../scrollbar/src/Scrollbar';
import type { EllipsisProps } from '../../ellipsis/src/Ellipsis';
import type { MaybeArray, ExtractPublicPropTypes } from '../../_utils';
import type { NLocale } from '../../locales';
import type { MergedTheme } from '../../_mixins';
import type { PaginationProps } from '../../pagination';
import type { DataTableTheme } from '../styles';
import type { RowItem, ColItem } from './use-group-header';
import { BaseLoadingExposedProps } from '../../_internal';
export declare const dataTableProps: {
    readonly onUnstableColumnResize: PropType<
        (
            resizedWidth: number,
            limitedWidth: number,
            column: TableBaseColumn,
            getColumnWidth: (key: ColumnKey) => number | undefined
        ) => void
    >;
    readonly pagination: {
        readonly type: PropType<false | PaginationProps>;
        readonly default: false;
    };
    readonly paginateSinglePage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly minHeight: PropType<string | number>;
    readonly maxHeight: PropType<string | number>;
    readonly columns: {
        readonly type: PropType<TableColumns<any>>;
        readonly default: () => never[];
    };
    readonly rowClassName: PropType<string | CreateRowClassName<any>>;
    readonly rowProps: PropType<CreateRowProps<any>>;
    readonly rowKey: PropType<CreateRowKey<any>>;
    readonly summary: PropType<CreateSummary<any>>;
    readonly data: {
        readonly type: PropType<RowData[]>;
        readonly default: () => never[];
    };
    readonly loading: BooleanConstructor;
    readonly bordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly bottomBordered: {
        readonly type: PropType<boolean | undefined>;
        readonly default: undefined;
    };
    readonly striped: BooleanConstructor;
    readonly scrollX: PropType<string | number>;
    readonly defaultCheckedRowKeys: {
        readonly type: PropType<RowKey[]>;
        readonly default: () => never[];
    };
    readonly checkedRowKeys: PropType<RowKey[]>;
    readonly singleLine: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly singleColumn: BooleanConstructor;
    readonly size: {
        readonly type: PropType<'small' | 'medium' | 'large'>;
        readonly default: 'medium';
    };
    readonly remote: BooleanConstructor;
    readonly defaultExpandedRowKeys: {
        readonly type: PropType<RowKey[]>;
        readonly default: readonly [];
    };
    readonly defaultExpandAll: BooleanConstructor;
    readonly expandedRowKeys: PropType<RowKey[]>;
    readonly stickyExpandedRows: BooleanConstructor;
    readonly virtualScroll: BooleanConstructor;
    readonly tableLayout: {
        readonly type: PropType<'fixed' | 'auto'>;
        readonly default: 'auto';
    };
    readonly allowCheckingNotLoaded: BooleanConstructor;
    readonly cascade: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly childrenKey: {
        readonly type: StringConstructor;
        readonly default: 'children';
    };
    readonly indent: {
        readonly type: NumberConstructor;
        readonly default: 16;
    };
    readonly flexHeight: BooleanConstructor;
    readonly summaryPlacement: {
        readonly type: PropType<'bottom' | 'top'>;
        readonly default: 'bottom';
    };
    readonly paginationBehaviorOnFilter: {
        readonly type: PropType<'first' | 'current'>;
        readonly default: 'current';
    };
    readonly scrollbarProps: PropType<ScrollbarProps>;
    readonly renderCell: PropType<
        (value: any, rowData: object, column: TableBaseColumn) => VNodeChild
    >;
    readonly renderExpandIcon: PropType<RenderExpandIcon>;
    readonly spinProps: {
        readonly type: PropType<BaseLoadingExposedProps>;
        readonly default: {};
    };
    readonly onLoad: PropType<DataTableOnLoad>;
    readonly 'onUpdate:page': PropType<
        MaybeArray<(page: number) => void> | undefined
    >;
    readonly onUpdatePage: PropType<
        MaybeArray<(page: number) => void> | undefined
    >;
    readonly 'onUpdate:pageSize': PropType<
        MaybeArray<(pageSize: number) => void> | undefined
    >;
    readonly onUpdatePageSize: PropType<
        MaybeArray<(pageSize: number) => void> | undefined
    >;
    readonly 'onUpdate:sorter': PropType<MaybeArray<OnUpdateSorter>>;
    readonly onUpdateSorter: PropType<MaybeArray<OnUpdateSorter>>;
    readonly 'onUpdate:filters': PropType<MaybeArray<OnUpdateFilters>>;
    readonly onUpdateFilters: PropType<MaybeArray<OnUpdateFilters>>;
    readonly 'onUpdate:checkedRowKeys': PropType<
        MaybeArray<OnUpdateCheckedRowKeys>
    >;
    readonly onUpdateCheckedRowKeys: PropType<
        MaybeArray<OnUpdateCheckedRowKeys>
    >;
    readonly 'onUpdate:expandedRowKeys': PropType<
        MaybeArray<OnUpdateExpandedRowKeys>
    >;
    readonly onUpdateExpandedRowKeys: PropType<
        MaybeArray<OnUpdateExpandedRowKeys>
    >;
    readonly onScroll: PropType<(e: Event) => void>;
    readonly onPageChange: PropType<
        MaybeArray<(page: number) => void> | undefined
    >;
    readonly onPageSizeChange: PropType<
        MaybeArray<(pageSize: number) => void> | undefined
    >;
    readonly onSorterChange: PropType<MaybeArray<OnUpdateSorter> | undefined>;
    readonly onFiltersChange: PropType<MaybeArray<OnUpdateFilters> | undefined>;
    readonly onCheckedRowKeysChange: PropType<
        MaybeArray<OnUpdateCheckedRowKeys> | undefined
    >;
    readonly theme: PropType<
        import('../../_mixins').Theme<
            'DataTable',
            {
                actionDividerColor: string;
                lineHeight: string;
                borderRadius: string;
                fontSizeSmall: string;
                fontSizeMedium: string;
                fontSizeLarge: string;
                borderColor: string;
                tdColorHover: string;
                tdColorStriped: string;
                thColor: string;
                thColorHover: string;
                tdColor: string;
                tdTextColor: string;
                thTextColor: string;
                thFontWeight: string;
                thButtonColorHover: string;
                thIconColor: string;
                thIconColorActive: string;
                borderColorModal: string;
                tdColorHoverModal: string;
                tdColorStripedModal: string;
                thColorModal: string;
                thColorHoverModal: string;
                tdColorModal: string;
                borderColorPopover: string;
                tdColorHoverPopover: string;
                tdColorStripedPopover: string;
                thColorPopover: string;
                thColorHoverPopover: string;
                tdColorPopover: string;
                boxShadowBefore: string;
                boxShadowAfter: string;
                loadingColor: string;
                loadingSize: string;
                opacityLoading: string;
                thPaddingSmall: string;
                thPaddingMedium: string;
                thPaddingLarge: string;
                tdPaddingSmall: string;
                tdPaddingMedium: string;
                tdPaddingLarge: string;
                sorterSize: string;
                resizableContainerSize: string;
                resizableSize: string;
                filterSize: string;
                paginationMargin: string;
                emptyPadding: string;
                actionPadding: string;
                actionButtonMargin: string;
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
                Radio: import('../../_mixins').Theme<
                    'Radio',
                    {
                        labelLineHeight: string;
                        buttonHeightSmall: string;
                        buttonHeightMedium: string;
                        buttonHeightLarge: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        boxShadow: string;
                        boxShadowActive: string;
                        boxShadowFocus: string;
                        boxShadowHover: string;
                        boxShadowDisabled: string;
                        color: string;
                        colorDisabled: string;
                        colorActive: string;
                        textColor: string;
                        textColorDisabled: string;
                        dotColorActive: string;
                        dotColorDisabled: string;
                        buttonBorderColor: string;
                        buttonBorderColorActive: string;
                        buttonBorderColorHover: string;
                        buttonColor: string;
                        buttonColorActive: string;
                        buttonTextColor: string;
                        buttonTextColorActive: string;
                        buttonTextColorHover: string;
                        opacityDisabled: string;
                        buttonBoxShadowFocus: string;
                        buttonBoxShadowHover: string;
                        buttonBoxShadow: string;
                        buttonBorderRadius: string;
                        radioSizeSmall: string;
                        radioSizeMedium: string;
                        radioSizeLarge: string;
                        labelPadding: string;
                        labelFontWeight: string;
                    },
                    any
                >;
                Pagination: import('../../_mixins').Theme<
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
                >;
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
                Ellipsis: import('../../_mixins').Theme<
                    'Ellipsis',
                    unknown,
                    {
                        Tooltip: import('../../_mixins').Theme<
                            'Tooltip',
                            {
                                borderRadius: string;
                                boxShadow: string;
                                color: string;
                                textColor: string;
                                padding: string;
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
                    }
                >;
                Dropdown: import('../../_mixins').Theme<
                    'Dropdown',
                    {
                        optionHeightSmall: string;
                        optionHeightMedium: string;
                        optionHeightLarge: string;
                        optionHeightHuge: string;
                        borderRadius: string;
                        fontSizeSmall: string;
                        fontSizeMedium: string;
                        fontSizeLarge: string;
                        fontSizeHuge: string;
                        optionTextColor: string;
                        optionTextColorHover: string;
                        optionTextColorActive: string;
                        optionTextColorChildActive: string;
                        color: string;
                        dividerColor: string;
                        suffixColor: string;
                        prefixColor: string;
                        optionColorHover: string;
                        optionColorActive: string;
                        groupHeaderTextColor: string;
                        optionTextColorInverted: string;
                        optionTextColorHoverInverted: string;
                        optionTextColorActiveInverted: string;
                        optionTextColorChildActiveInverted: string;
                        colorInverted: string;
                        dividerColorInverted: string;
                        suffixColorInverted: string;
                        prefixColorInverted: string;
                        optionColorHoverInverted: string;
                        optionColorActiveInverted: string;
                        groupHeaderTextColorInverted: string;
                        optionOpacityDisabled: string;
                        padding: string;
                        optionIconSizeSmall: string;
                        optionIconSizeMedium: string;
                        optionIconSizeLarge: string;
                        optionIconSizeHuge: string;
                        optionSuffixWidthSmall: string;
                        optionSuffixWidthMedium: string;
                        optionSuffixWidthLarge: string;
                        optionSuffixWidthHuge: string;
                        optionIconSuffixWidthSmall: string;
                        optionIconSuffixWidthMedium: string;
                        optionIconSuffixWidthLarge: string;
                        optionIconSuffixWidthHuge: string;
                        optionPrefixWidthSmall: string;
                        optionPrefixWidthMedium: string;
                        optionPrefixWidthLarge: string;
                        optionPrefixWidthHuge: string;
                        optionIconPrefixWidthSmall: string;
                        optionIconPrefixWidthMedium: string;
                        optionIconPrefixWidthLarge: string;
                        optionIconPrefixWidthHuge: string;
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
            }
        >
    >;
    readonly themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'DataTable',
                {
                    actionDividerColor: string;
                    lineHeight: string;
                    borderRadius: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderColor: string;
                    tdColorHover: string;
                    tdColorStriped: string;
                    thColor: string;
                    thColorHover: string;
                    tdColor: string;
                    tdTextColor: string;
                    thTextColor: string;
                    thFontWeight: string;
                    thButtonColorHover: string;
                    thIconColor: string;
                    thIconColorActive: string;
                    borderColorModal: string;
                    tdColorHoverModal: string;
                    tdColorStripedModal: string;
                    thColorModal: string;
                    thColorHoverModal: string;
                    tdColorModal: string;
                    borderColorPopover: string;
                    tdColorHoverPopover: string;
                    tdColorStripedPopover: string;
                    thColorPopover: string;
                    thColorHoverPopover: string;
                    tdColorPopover: string;
                    boxShadowBefore: string;
                    boxShadowAfter: string;
                    loadingColor: string;
                    loadingSize: string;
                    opacityLoading: string;
                    thPaddingSmall: string;
                    thPaddingMedium: string;
                    thPaddingLarge: string;
                    tdPaddingSmall: string;
                    tdPaddingMedium: string;
                    tdPaddingLarge: string;
                    sorterSize: string;
                    resizableContainerSize: string;
                    resizableSize: string;
                    filterSize: string;
                    paginationMargin: string;
                    emptyPadding: string;
                    actionPadding: string;
                    actionButtonMargin: string;
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
                    Radio: import('../../_mixins').Theme<
                        'Radio',
                        {
                            labelLineHeight: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            boxShadow: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            boxShadowHover: string;
                            boxShadowDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            textColor: string;
                            textColorDisabled: string;
                            dotColorActive: string;
                            dotColorDisabled: string;
                            buttonBorderColor: string;
                            buttonBorderColorActive: string;
                            buttonBorderColorHover: string;
                            buttonColor: string;
                            buttonColorActive: string;
                            buttonTextColor: string;
                            buttonTextColorActive: string;
                            buttonTextColorHover: string;
                            opacityDisabled: string;
                            buttonBoxShadowFocus: string;
                            buttonBoxShadowHover: string;
                            buttonBoxShadow: string;
                            buttonBorderRadius: string;
                            radioSizeSmall: string;
                            radioSizeMedium: string;
                            radioSizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >;
                    Pagination: import('../../_mixins').Theme<
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
                    >;
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
                    Ellipsis: import('../../_mixins').Theme<
                        'Ellipsis',
                        unknown,
                        {
                            Tooltip: import('../../_mixins').Theme<
                                'Tooltip',
                                {
                                    borderRadius: string;
                                    boxShadow: string;
                                    color: string;
                                    textColor: string;
                                    padding: string;
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
                        }
                    >;
                    Dropdown: import('../../_mixins').Theme<
                        'Dropdown',
                        {
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            optionTextColor: string;
                            optionTextColorHover: string;
                            optionTextColorActive: string;
                            optionTextColorChildActive: string;
                            color: string;
                            dividerColor: string;
                            suffixColor: string;
                            prefixColor: string;
                            optionColorHover: string;
                            optionColorActive: string;
                            groupHeaderTextColor: string;
                            optionTextColorInverted: string;
                            optionTextColorHoverInverted: string;
                            optionTextColorActiveInverted: string;
                            optionTextColorChildActiveInverted: string;
                            colorInverted: string;
                            dividerColorInverted: string;
                            suffixColorInverted: string;
                            prefixColorInverted: string;
                            optionColorHoverInverted: string;
                            optionColorActiveInverted: string;
                            groupHeaderTextColorInverted: string;
                            optionOpacityDisabled: string;
                            padding: string;
                            optionIconSizeSmall: string;
                            optionIconSizeMedium: string;
                            optionIconSizeLarge: string;
                            optionIconSizeHuge: string;
                            optionSuffixWidthSmall: string;
                            optionSuffixWidthMedium: string;
                            optionSuffixWidthLarge: string;
                            optionSuffixWidthHuge: string;
                            optionIconSuffixWidthSmall: string;
                            optionIconSuffixWidthMedium: string;
                            optionIconSuffixWidthLarge: string;
                            optionIconSuffixWidthHuge: string;
                            optionPrefixWidthSmall: string;
                            optionPrefixWidthMedium: string;
                            optionPrefixWidthLarge: string;
                            optionPrefixWidthHuge: string;
                            optionIconPrefixWidthSmall: string;
                            optionIconPrefixWidthMedium: string;
                            optionIconPrefixWidthLarge: string;
                            optionIconPrefixWidthHuge: string;
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
                }
            >
        >
    >;
    readonly builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../_mixins').Theme<
                'DataTable',
                {
                    actionDividerColor: string;
                    lineHeight: string;
                    borderRadius: string;
                    fontSizeSmall: string;
                    fontSizeMedium: string;
                    fontSizeLarge: string;
                    borderColor: string;
                    tdColorHover: string;
                    tdColorStriped: string;
                    thColor: string;
                    thColorHover: string;
                    tdColor: string;
                    tdTextColor: string;
                    thTextColor: string;
                    thFontWeight: string;
                    thButtonColorHover: string;
                    thIconColor: string;
                    thIconColorActive: string;
                    borderColorModal: string;
                    tdColorHoverModal: string;
                    tdColorStripedModal: string;
                    thColorModal: string;
                    thColorHoverModal: string;
                    tdColorModal: string;
                    borderColorPopover: string;
                    tdColorHoverPopover: string;
                    tdColorStripedPopover: string;
                    thColorPopover: string;
                    thColorHoverPopover: string;
                    tdColorPopover: string;
                    boxShadowBefore: string;
                    boxShadowAfter: string;
                    loadingColor: string;
                    loadingSize: string;
                    opacityLoading: string;
                    thPaddingSmall: string;
                    thPaddingMedium: string;
                    thPaddingLarge: string;
                    tdPaddingSmall: string;
                    tdPaddingMedium: string;
                    tdPaddingLarge: string;
                    sorterSize: string;
                    resizableContainerSize: string;
                    resizableSize: string;
                    filterSize: string;
                    paginationMargin: string;
                    emptyPadding: string;
                    actionPadding: string;
                    actionButtonMargin: string;
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
                    Radio: import('../../_mixins').Theme<
                        'Radio',
                        {
                            labelLineHeight: string;
                            buttonHeightSmall: string;
                            buttonHeightMedium: string;
                            buttonHeightLarge: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            boxShadow: string;
                            boxShadowActive: string;
                            boxShadowFocus: string;
                            boxShadowHover: string;
                            boxShadowDisabled: string;
                            color: string;
                            colorDisabled: string;
                            colorActive: string;
                            textColor: string;
                            textColorDisabled: string;
                            dotColorActive: string;
                            dotColorDisabled: string;
                            buttonBorderColor: string;
                            buttonBorderColorActive: string;
                            buttonBorderColorHover: string;
                            buttonColor: string;
                            buttonColorActive: string;
                            buttonTextColor: string;
                            buttonTextColorActive: string;
                            buttonTextColorHover: string;
                            opacityDisabled: string;
                            buttonBoxShadowFocus: string;
                            buttonBoxShadowHover: string;
                            buttonBoxShadow: string;
                            buttonBorderRadius: string;
                            radioSizeSmall: string;
                            radioSizeMedium: string;
                            radioSizeLarge: string;
                            labelPadding: string;
                            labelFontWeight: string;
                        },
                        any
                    >;
                    Pagination: import('../../_mixins').Theme<
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
                    >;
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
                    Ellipsis: import('../../_mixins').Theme<
                        'Ellipsis',
                        unknown,
                        {
                            Tooltip: import('../../_mixins').Theme<
                                'Tooltip',
                                {
                                    borderRadius: string;
                                    boxShadow: string;
                                    color: string;
                                    textColor: string;
                                    padding: string;
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
                        }
                    >;
                    Dropdown: import('../../_mixins').Theme<
                        'Dropdown',
                        {
                            optionHeightSmall: string;
                            optionHeightMedium: string;
                            optionHeightLarge: string;
                            optionHeightHuge: string;
                            borderRadius: string;
                            fontSizeSmall: string;
                            fontSizeMedium: string;
                            fontSizeLarge: string;
                            fontSizeHuge: string;
                            optionTextColor: string;
                            optionTextColorHover: string;
                            optionTextColorActive: string;
                            optionTextColorChildActive: string;
                            color: string;
                            dividerColor: string;
                            suffixColor: string;
                            prefixColor: string;
                            optionColorHover: string;
                            optionColorActive: string;
                            groupHeaderTextColor: string;
                            optionTextColorInverted: string;
                            optionTextColorHoverInverted: string;
                            optionTextColorActiveInverted: string;
                            optionTextColorChildActiveInverted: string;
                            colorInverted: string;
                            dividerColorInverted: string;
                            suffixColorInverted: string;
                            prefixColorInverted: string;
                            optionColorHoverInverted: string;
                            optionColorActiveInverted: string;
                            groupHeaderTextColorInverted: string;
                            optionOpacityDisabled: string;
                            padding: string;
                            optionIconSizeSmall: string;
                            optionIconSizeMedium: string;
                            optionIconSizeLarge: string;
                            optionIconSizeHuge: string;
                            optionSuffixWidthSmall: string;
                            optionSuffixWidthMedium: string;
                            optionSuffixWidthLarge: string;
                            optionSuffixWidthHuge: string;
                            optionIconSuffixWidthSmall: string;
                            optionIconSuffixWidthMedium: string;
                            optionIconSuffixWidthLarge: string;
                            optionIconSuffixWidthHuge: string;
                            optionPrefixWidthSmall: string;
                            optionPrefixWidthMedium: string;
                            optionPrefixWidthLarge: string;
                            optionPrefixWidthHuge: string;
                            optionIconPrefixWidthSmall: string;
                            optionIconPrefixWidthMedium: string;
                            optionIconPrefixWidthLarge: string;
                            optionIconPrefixWidthHuge: string;
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
                }
            >
        >
    >;
};
export type FilterOptionValue = string | number;
export type ColumnKey = string | number;
export type RowKey = string | number;
export type SortOrderFlag = 1 | -1 | 0;
export type RowData = Record<string, any>;
export type InternalRowData = Record<string, unknown>;
export type CreateRowKey<T = InternalRowData> = (row: T) => RowKey;
export type CreateRowClassName<T = InternalRowData> = (
    row: T,
    index: number
) => string;
export type CreateRowProps<T = InternalRowData> = (
    row: T,
    index: number
) => HTMLAttributes;
export type CreateCellProps<T = InternalRowData> = (
    row: T,
    index: number
) => HTMLAttributes;
export type CompareFn<T = InternalRowData> = (row1: T, row2: T) => number;
export type Sorter<T = InternalRowData> = CompareFn<T> | SorterMultiple<T>;
export interface SorterMultiple<T = InternalRowData> {
    multiple: number;
    compare?: CompareFn<T> | 'default';
}
export type Filter<T = InternalRowData> = (
    filterOptionValue: FilterOptionValue,
    row: T
) => boolean;
export interface FilterOption {
    label: string;
    value: FilterOptionValue;
}
export type TmNode = TreeNode<InternalRowData>;
export type SortOrder = 'ascend' | 'descend' | false;
export type Ellipsis =
    | boolean
    | (EllipsisProps & {
          style?: CSSProperties;
      });
export interface CommonColumnInfo<T = InternalRowData> {
    fixed?: 'left' | 'right';
    width?: number | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    className?: string;
    align?: 'left' | 'center' | 'right';
    titleAlign?: 'left' | 'center' | 'right';
    ellipsis?: Ellipsis;
    cellProps?: (rowData: T, rowIndex: number) => HTMLAttributes;
}
export type TableColumnTitle =
    | string
    | ((column: TableBaseColumn) => VNodeChild);
export type TableExpandColumnTitle =
    | string
    | ((column: TableExpandColumn) => VNodeChild);
export type TableColumnGroupTitle =
    | string
    | ((column: TableColumnGroup) => VNodeChild);
export type TableColumnGroup<T = InternalRowData> = {
    title?: TableColumnGroupTitle;
    type?: never;
    key: ColumnKey;
    children: Array<TableBaseColumn<T>>;
    resizable?: boolean;
    filterOptions?: never;
} & CommonColumnInfo<T>;
export type TableBaseColumn<T = InternalRowData> = {
    title?: TableColumnTitle;
    titleColSpan?: number;
    type?: never;
    key: ColumnKey;
    tree?: boolean;
    sorter?: boolean | Sorter<T> | 'default';
    defaultSortOrder?: SortOrder;
    sortOrder?: SortOrder;
    resizable?: boolean;
    minWidth?: string | number;
    maxWidth?: string | number;
    filter?: 'default' | boolean | Filter<T>;
    filterOptions?: FilterOption[];
    filterOptionValues?: FilterOptionValue[] | null;
    filterOptionValue?: FilterOptionValue | null;
    filterMode?: 'or' | 'and';
    defaultFilterOptionValues?: FilterOptionValue[] | null;
    defaultFilterOptionValue?: FilterOptionValue | null;
    filterMultiple?: boolean;
    render?: (rowData: T, rowIndex: number) => VNodeChild;
    renderFilter?: RenderFilter;
    renderFilterIcon?: RenderFilterIcon;
    renderSorter?: RenderSorter;
    renderSorterIcon?: RenderSorterIcon;
    renderFilterMenu?: RenderFilterMenu;
    colSpan?: (rowData: T, rowIndex: number) => number;
    rowSpan?: (rowData: T, rowIndex: number) => number;
} & CommonColumnInfo<T>;
export type TableSelectionColumn<T = InternalRowData> = {
    type: 'selection';
    multiple?: boolean;
    disabled?: (row: T) => boolean;
    options?: DataTableSelectionOptions<T>;
    sorter?: never;
    resizable?: boolean;
    filter?: never;
    filterOptions?: never;
    filterOptionValues?: never;
    filterOptionValue?: never;
    colSpan?: never;
    rowSpan?: never;
} & CommonColumnInfo<T>;
export type RenderExpand<T = InternalRowData> = (
    row: T,
    index: number
) => VNodeChild;
export type RenderExpandIcon = ({
    expanded,
}: {
    expanded: boolean;
}) => VNodeChild;
export type Expandable<T = InternalRowData> = (row: T) => boolean;
export interface TableExpandColumn<T = InternalRowData>
    extends Omit<TableSelectionColumn<T>, 'type'> {
    type: 'expand';
    title?: TableExpandColumnTitle;
    renderExpand: RenderExpand<T>;
    expandable?: Expandable<T>;
}
export type TableColumn<T = InternalRowData> =
    | TableColumnGroup<T>
    | TableBaseColumn<T>
    | TableSelectionColumn<T>
    | TableExpandColumn<T>;
export type TableColumns<T = InternalRowData> = Array<TableColumn<T>>;
export type DataTableSelectionOptions<T = InternalRowData> = Array<
    | DataTableSelectionOption
    | {
          label: string;
          key: string | number;
          onSelect: (pageData: T[]) => void;
      }
>;
export interface DataTableInjection {
    props: DataTableSetupProps;
    slots: Slots;
    indentRef: Ref<number>;
    childTriggerColIndexRef: Ref<number>;
    componentId: string;
    checkOptionsRef: Ref<DataTableSelectionOptions | undefined>;
    hoverKeyRef: Ref<RowKey | null>;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<DataTableTheme>>;
    scrollXRef: Ref<string | number | undefined>;
    rowsRef: Ref<RowItem[][]>;
    colsRef: Ref<ColItem[]>;
    paginatedDataRef: Ref<TmNode[]>;
    leftFixedColumnsRef: Ref<TableColumns>;
    rightFixedColumnsRef: Ref<TableColumns>;
    leftActiveFixedColKeyRef: Ref<ColumnKey | null>;
    leftActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    rightActiveFixedColKeyRef: Ref<ColumnKey | null>;
    rightActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    fixedColumnLeftMapRef: Ref<
        Record<
            ColumnKey,
            | {
                  start: number;
                  end: number;
              }
            | undefined
        >
    >;
    fixedColumnRightMapRef: Ref<
        Record<
            ColumnKey,
            | {
                  start: number;
                  end: number;
              }
            | undefined
        >
    >;
    mergedCurrentPageRef: Ref<number>;
    someRowsCheckedRef: Ref<boolean>;
    allRowsCheckedRef: Ref<boolean>;
    mergedSortStateRef: Ref<SortState[]>;
    mergedFilterStateRef: Ref<FilterState>;
    loadingRef: Ref<boolean>;
    rowClassNameRef: Ref<string | CreateRowClassName | undefined>;
    mergedCheckedRowKeySetRef: Ref<Set<RowKey>>;
    mergedInderminateRowKeySetRef: Ref<Set<RowKey>>;
    localeRef: Ref<NLocale['DataTable']>;
    filterMenuCssVarsRef: Ref<CSSProperties>;
    mergedExpandedRowKeysRef: Ref<RowKey[]>;
    rowKeyRef: Ref<CreateRowKey | undefined>;
    renderExpandRef: Ref<undefined | RenderExpand>;
    summaryRef: Ref<undefined | CreateSummary>;
    rawPaginatedDataRef: Ref<InternalRowData[]>;
    virtualScrollRef: Ref<boolean>;
    bodyWidthRef: Ref<number | null>;
    scrollPartRef: Ref<'head' | 'body'>;
    mergedTableLayoutRef: Ref<'auto' | 'fixed'>;
    maxHeightRef: Ref<string | number | undefined>;
    minHeightRef: Ref<string | number | undefined>;
    rowPropsRef: Ref<CreateRowProps | undefined>;
    flexHeightRef: Ref<boolean>;
    headerCheckboxDisabledRef: Ref<boolean>;
    stripedRef: Ref<boolean>;
    onLoadRef: Ref<DataTableOnLoad | undefined>;
    loadingKeySetRef: Ref<Set<RowKey>>;
    paginationBehaviorOnFilterRef: Ref<'current' | 'first'>;
    expandableRef: Ref<Expandable<any> | undefined>;
    stickyExpandedRowsRef: Ref<boolean>;
    renderExpandIconRef: Ref<undefined | RenderExpandIcon>;
    summaryPlacementRef: Ref<'top' | 'bottom'>;
    treeMateRef: Ref<
        TreeMate<InternalRowData, InternalRowData, InternalRowData>
    >;
    scrollbarPropsRef: Ref<ScrollbarProps | undefined>;
    doUpdatePage: (page: number) => void;
    doUpdateExpandedRowKeys: (keys: RowKey[]) => void;
    doUpdateFilters: (
        filters: FilterState,
        sourceColumn: TableBaseColumn
    ) => void;
    onUnstableColumnResize: (
        resizedWidth: number,
        limitedWidth: number,
        column: TableBaseColumn,
        getColumnWidth: (key: ColumnKey) => number | undefined
    ) => void;
    getResizableWidth: (key: ColumnKey) => number | undefined;
    clearResizableWidth: () => void;
    doUpdateResizableWidth: (column: TableColumn, width: number) => void;
    deriveNextSorter: (sorter: SortState | null) => void;
    doUncheckAll: (checkWholeTable?: boolean) => void;
    doCheckAll: (checkWholeTable?: boolean) => void;
    doCheck: (
        rowKey: RowKey | RowKey[],
        single: boolean,
        rowInfo: RowData
    ) => void;
    doUncheck: (rowKey: RowKey | RowKey[], rowInfo: RowData) => void;
    handleTableHeaderScroll: (e: Event) => void;
    handleTableBodyScroll: (e: Event) => void;
    syncScrollState: (deltaX?: number, deltaY?: number) => void;
    setHeaderScrollLeft: (scrollLeft: number) => void;
    renderCell: Ref<
        | undefined
        | ((value: any, rowData: object, column: TableBaseColumn) => VNodeChild)
    >;
}
export declare const dataTableInjectionKey: globalThis.InjectionKey<DataTableInjection>;
export interface MainTableInjection {
    leftActiveFixedColKey: ColumnKey | null;
    rightActiveFixedColKey: ColumnKey | null;
}
export type RenderFilter = (props: {
    active: boolean;
    show: boolean;
}) => VNodeChild;
export type RenderFilterIcon = RenderFilter;
export type RenderSorter = (props: { order: SortOrder }) => VNodeChild;
export type RenderSorterIcon = RenderSorter;
export type RenderFilterMenu = (actions: { hide: () => void }) => VNodeChild;
export type OnUpdateExpandedRowKeys = (keys: RowKey[]) => void;
export type OnUpdateCheckedRowKeys = (
    keys: RowKey[],
    rows: InternalRowData[],
    meta: {
        row: InternalRowData | undefined;
        action: 'check' | 'uncheck' | 'checkAll' | 'uncheckAll';
    }
) => void;
export type OnUpdateSorter = (
    sortState: SortState & SortState[] & null
) => void;
export type OnUpdateSorterImpl = (
    sortState: SortState | SortState[] | null
) => void;
export type OnUpdateFilters = (
    filterState: FilterState,
    sourceColumn: TableBaseColumn
) => void;
export interface SortState {
    columnKey: ColumnKey;
    order: SortOrder;
    sorter: Sorter | boolean | 'default';
}
export type FilterState = Record<
    string,
    FilterOptionValue[] | FilterOptionValue | null | undefined
>;
export interface MainTableRef {
    getHeaderElement: () => HTMLElement | null;
    getBodyElement: () => HTMLElement | null;
    scrollTo: ScrollTo;
}
export interface MainTableBodyRef {
    getScrollContainer: () => HTMLElement | null;
    scrollTo: ScrollTo;
}
export interface MainTableHeaderRef {
    $el: HTMLElement | null;
}
export type OnFilterMenuChange = <
    T extends FilterOptionValue[] & (FilterOptionValue | null)
>(
    value: T
) => void;
export type OnFilterMenuChangeImpl = (
    value: FilterOptionValue[] | FilterOptionValue | null
) => void;
export interface DataTableInst {
    filter: (filters: FilterState | null) => void;
    filters: (filters: FilterState | null) => void;
    doUncheckAll: () => void;
    clearFilters: () => void;
    clearSorter: () => void;
    page: (page: number) => void;
    sort: (columnKey: ColumnKey, order: SortOrder) => void;
    scrollTo: ScrollTo;
    /** @deprecated it but just leave it here, it does no harm */
    clearFilter: () => void;
}
export type CreateSummary<T = InternalRowData> = (
    pageData: T[]
) => SummaryRowData | SummaryRowData[];
export interface SummaryCell {
    value?: VNodeChild;
    colSpan?: number;
    rowSpan?: number;
}
export type SummaryRowData = Record<string, SummaryCell>;
export type DataTableOnLoad = (node: RowData) => Promise<void>;
export type DataTableSelectionOption = 'all' | 'none';
export type DataTableProps = ExtractPublicPropTypes<typeof dataTableProps>;
export type DataTableSetupProps = ExtractPropTypes<typeof dataTableProps>;
