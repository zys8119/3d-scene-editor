import type { RowKey } from './interface';
declare const _default: import('vue').DefineComponent<
    {
        readonly onUnstableColumnResize: globalThis.PropType<
            (
                resizedWidth: number,
                limitedWidth: number,
                column: import('./interface').TableBaseColumn<
                    import('./interface').InternalRowData
                >,
                getColumnWidth: (
                    key: import('./interface').ColumnKey
                ) => number | undefined
            ) => void
        >;
        readonly pagination: {
            readonly type: globalThis.PropType<
                false | import('../../pagination').PaginationProps
            >;
            readonly default: false;
        };
        readonly paginateSinglePage: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly minHeight: globalThis.PropType<string | number>;
        readonly maxHeight: globalThis.PropType<string | number>;
        readonly columns: {
            readonly type: globalThis.PropType<
                import('./interface').TableColumns<any>
            >;
            readonly default: () => never[];
        };
        readonly rowClassName: globalThis.PropType<
            string | import('./interface').CreateRowClassName<any>
        >;
        readonly rowProps: globalThis.PropType<
            import('./interface').CreateRowProps<any>
        >;
        readonly rowKey: globalThis.PropType<
            import('./interface').CreateRowKey<any>
        >;
        readonly summary: globalThis.PropType<
            import('./interface').CreateSummary<any>
        >;
        readonly data: {
            readonly type: globalThis.PropType<import('./interface').RowData[]>;
            readonly default: () => never[];
        };
        readonly loading: BooleanConstructor;
        readonly bordered: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly bottomBordered: {
            readonly type: globalThis.PropType<boolean | undefined>;
            readonly default: undefined;
        };
        readonly striped: BooleanConstructor;
        readonly scrollX: globalThis.PropType<string | number>;
        readonly defaultCheckedRowKeys: {
            readonly type: globalThis.PropType<RowKey[]>;
            readonly default: () => never[];
        };
        readonly checkedRowKeys: globalThis.PropType<RowKey[]>;
        readonly singleLine: {
            readonly type: BooleanConstructor;
            readonly default: true;
        };
        readonly singleColumn: BooleanConstructor;
        readonly size: {
            readonly type: globalThis.PropType<'small' | 'medium' | 'large'>;
            readonly default: 'medium';
        };
        readonly remote: BooleanConstructor;
        readonly defaultExpandedRowKeys: {
            readonly type: globalThis.PropType<RowKey[]>;
            readonly default: readonly [];
        };
        readonly defaultExpandAll: BooleanConstructor;
        readonly expandedRowKeys: globalThis.PropType<RowKey[]>;
        readonly stickyExpandedRows: BooleanConstructor;
        readonly virtualScroll: BooleanConstructor;
        readonly tableLayout: {
            readonly type: globalThis.PropType<'fixed' | 'auto'>;
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
            readonly type: globalThis.PropType<'bottom' | 'top'>;
            readonly default: 'bottom';
        };
        readonly paginationBehaviorOnFilter: {
            readonly type: globalThis.PropType<'first' | 'current'>;
            readonly default: 'current';
        };
        readonly scrollbarProps: globalThis.PropType<
            import('../..').ScrollbarProps
        >;
        readonly renderCell: globalThis.PropType<
            (
                value: any,
                rowData: object,
                column: import('./interface').TableBaseColumn<
                    import('./interface').InternalRowData
                >
            ) => import('vue').VNodeChild
        >;
        readonly renderExpandIcon: globalThis.PropType<
            import('./interface').RenderExpandIcon
        >;
        readonly spinProps: {
            readonly type: globalThis.PropType<
                import('../../_internal').BaseLoadingExposedProps
            >;
            readonly default: {};
        };
        readonly onLoad: globalThis.PropType<
            import('./interface').DataTableOnLoad
        >;
        readonly 'onUpdate:page': globalThis.PropType<
            | import('../../_utils').MaybeArray<(page: number) => void>
            | undefined
        >;
        readonly onUpdatePage: globalThis.PropType<
            | import('../../_utils').MaybeArray<(page: number) => void>
            | undefined
        >;
        readonly 'onUpdate:pageSize': globalThis.PropType<
            | import('../../_utils').MaybeArray<(pageSize: number) => void>
            | undefined
        >;
        readonly onUpdatePageSize: globalThis.PropType<
            | import('../../_utils').MaybeArray<(pageSize: number) => void>
            | undefined
        >;
        readonly 'onUpdate:sorter': globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateSorter
            >
        >;
        readonly onUpdateSorter: globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateSorter
            >
        >;
        readonly 'onUpdate:filters': globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateFilters
            >
        >;
        readonly onUpdateFilters: globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateFilters
            >
        >;
        readonly 'onUpdate:checkedRowKeys': globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateCheckedRowKeys
            >
        >;
        readonly onUpdateCheckedRowKeys: globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateCheckedRowKeys
            >
        >;
        readonly 'onUpdate:expandedRowKeys': globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateExpandedRowKeys
            >
        >;
        readonly onUpdateExpandedRowKeys: globalThis.PropType<
            import('../../_utils').MaybeArray<
                import('./interface').OnUpdateExpandedRowKeys
            >
        >;
        readonly onScroll: globalThis.PropType<(e: Event) => void>;
        readonly onPageChange: globalThis.PropType<
            | import('../../_utils').MaybeArray<(page: number) => void>
            | undefined
        >;
        readonly onPageSizeChange: globalThis.PropType<
            | import('../../_utils').MaybeArray<(pageSize: number) => void>
            | undefined
        >;
        readonly onSorterChange: globalThis.PropType<
            | import('../../_utils').MaybeArray<
                  import('./interface').OnUpdateSorter
              >
            | undefined
        >;
        readonly onFiltersChange: globalThis.PropType<
            | import('../../_utils').MaybeArray<
                  import('./interface').OnUpdateFilters
              >
            | undefined
        >;
        readonly onCheckedRowKeysChange: globalThis.PropType<
            | import('../../_utils').MaybeArray<
                  import('./interface').OnUpdateCheckedRowKeys
              >
            | undefined
        >;
        readonly theme: globalThis.PropType<
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
        readonly themeOverrides: globalThis.PropType<
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
        readonly builtinThemeOverrides: globalThis.PropType<
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
    },
    {
        filter: (filters: import('./interface').FilterState | null) => void;
        filters: (filters: import('./interface').FilterState | null) => void;
        doUncheckAll: () => void;
        clearFilters: () => void;
        clearSorter: () => void;
        page: (page: number) => void;
        sort: (
            columnKey: import('./interface').ColumnKey,
            order: import('./interface').SortOrder
        ) => void;
        scrollTo: import('../../scrollbar/src/Scrollbar').ScrollTo;
        clearFilter: () => void;
        mainTableInstRef: globalThis.Ref<{
            getHeaderElement: () => HTMLElement | null;
            getBodyElement: () => HTMLElement | null;
            scrollTo: import('../../scrollbar/src/Scrollbar').ScrollTo;
        } | null>;
        mergedClsPrefix: globalThis.ComputedRef<string>;
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
            };
            peers: {
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
            };
            peerOverrides: {
                Button?:
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
                Radio?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Pagination?:
                    | {
                          peers?:
                              | {
                                    Select?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                    Input?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
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
                                        | undefined;
                                    Popselect?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                Empty?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Popover?:
                    | {
                          peers?:
                              | {
                                    [x: string]: any;
                                }
                              | undefined;
                      }
                    | undefined;
                Ellipsis?:
                    | {
                          peers?:
                              | {
                                    Tooltip?:
                                        | import('../../_mixins/use-theme').ExtractThemeOverrides<
                                              import('../../_mixins').Theme<
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
                                              >
                                          >
                                        | undefined;
                                }
                              | undefined;
                      }
                    | undefined;
                Dropdown?:
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
            };
        }>;
        paginatedData: globalThis.ComputedRef<import('./interface').TmNode[]>;
        mergedBordered: globalThis.ComputedRef<boolean>;
        mergedBottomBordered: globalThis.ComputedRef<boolean>;
        mergedPagination: globalThis.ComputedRef<
            import('../../pagination').PaginationProps
        >;
        mergedShowPagination: globalThis.ComputedRef<boolean | 0 | undefined>;
        cssVars:
            | globalThis.ComputedRef<{
                  '--n-font-size': string;
                  '--n-th-padding': string;
                  '--n-td-padding': string;
                  '--n-bezier': string;
                  '--n-border-radius': string;
                  '--n-line-height': string;
                  '--n-border-color': string;
                  '--n-border-color-modal': string;
                  '--n-border-color-popover': string;
                  '--n-th-color': string;
                  '--n-th-color-hover': string;
                  '--n-th-color-modal': string;
                  '--n-th-color-hover-modal': string;
                  '--n-th-color-popover': string;
                  '--n-th-color-hover-popover': string;
                  '--n-td-color': string;
                  '--n-td-color-hover': string;
                  '--n-td-color-modal': string;
                  '--n-td-color-hover-modal': string;
                  '--n-td-color-popover': string;
                  '--n-td-color-hover-popover': string;
                  '--n-th-text-color': string;
                  '--n-td-text-color': string;
                  '--n-th-font-weight': string;
                  '--n-th-button-color-hover': string;
                  '--n-th-icon-color': string;
                  '--n-th-icon-color-active': string;
                  '--n-filter-size': string;
                  '--n-pagination-margin': string;
                  '--n-empty-padding': string;
                  '--n-box-shadow-before': string;
                  '--n-box-shadow-after': string;
                  '--n-sorter-size': string;
                  '--n-resizable-container-size': string;
                  '--n-resizable-size': string;
                  '--n-loading-size': string;
                  '--n-loading-color': string;
                  '--n-opacity-loading': string;
                  '--n-td-color-striped': string;
                  '--n-td-color-striped-modal': string;
                  '--n-td-color-striped-popover': string;
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
            readonly onUnstableColumnResize: globalThis.PropType<
                (
                    resizedWidth: number,
                    limitedWidth: number,
                    column: import('./interface').TableBaseColumn<
                        import('./interface').InternalRowData
                    >,
                    getColumnWidth: (
                        key: import('./interface').ColumnKey
                    ) => number | undefined
                ) => void
            >;
            readonly pagination: {
                readonly type: globalThis.PropType<
                    false | import('../../pagination').PaginationProps
                >;
                readonly default: false;
            };
            readonly paginateSinglePage: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly minHeight: globalThis.PropType<string | number>;
            readonly maxHeight: globalThis.PropType<string | number>;
            readonly columns: {
                readonly type: globalThis.PropType<
                    import('./interface').TableColumns<any>
                >;
                readonly default: () => never[];
            };
            readonly rowClassName: globalThis.PropType<
                string | import('./interface').CreateRowClassName<any>
            >;
            readonly rowProps: globalThis.PropType<
                import('./interface').CreateRowProps<any>
            >;
            readonly rowKey: globalThis.PropType<
                import('./interface').CreateRowKey<any>
            >;
            readonly summary: globalThis.PropType<
                import('./interface').CreateSummary<any>
            >;
            readonly data: {
                readonly type: globalThis.PropType<
                    import('./interface').RowData[]
                >;
                readonly default: () => never[];
            };
            readonly loading: BooleanConstructor;
            readonly bordered: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly bottomBordered: {
                readonly type: globalThis.PropType<boolean | undefined>;
                readonly default: undefined;
            };
            readonly striped: BooleanConstructor;
            readonly scrollX: globalThis.PropType<string | number>;
            readonly defaultCheckedRowKeys: {
                readonly type: globalThis.PropType<RowKey[]>;
                readonly default: () => never[];
            };
            readonly checkedRowKeys: globalThis.PropType<RowKey[]>;
            readonly singleLine: {
                readonly type: BooleanConstructor;
                readonly default: true;
            };
            readonly singleColumn: BooleanConstructor;
            readonly size: {
                readonly type: globalThis.PropType<
                    'small' | 'medium' | 'large'
                >;
                readonly default: 'medium';
            };
            readonly remote: BooleanConstructor;
            readonly defaultExpandedRowKeys: {
                readonly type: globalThis.PropType<RowKey[]>;
                readonly default: readonly [];
            };
            readonly defaultExpandAll: BooleanConstructor;
            readonly expandedRowKeys: globalThis.PropType<RowKey[]>;
            readonly stickyExpandedRows: BooleanConstructor;
            readonly virtualScroll: BooleanConstructor;
            readonly tableLayout: {
                readonly type: globalThis.PropType<'fixed' | 'auto'>;
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
                readonly type: globalThis.PropType<'bottom' | 'top'>;
                readonly default: 'bottom';
            };
            readonly paginationBehaviorOnFilter: {
                readonly type: globalThis.PropType<'first' | 'current'>;
                readonly default: 'current';
            };
            readonly scrollbarProps: globalThis.PropType<
                import('../..').ScrollbarProps
            >;
            readonly renderCell: globalThis.PropType<
                (
                    value: any,
                    rowData: object,
                    column: import('./interface').TableBaseColumn<
                        import('./interface').InternalRowData
                    >
                ) => import('vue').VNodeChild
            >;
            readonly renderExpandIcon: globalThis.PropType<
                import('./interface').RenderExpandIcon
            >;
            readonly spinProps: {
                readonly type: globalThis.PropType<
                    import('../../_internal').BaseLoadingExposedProps
                >;
                readonly default: {};
            };
            readonly onLoad: globalThis.PropType<
                import('./interface').DataTableOnLoad
            >;
            readonly 'onUpdate:page': globalThis.PropType<
                | import('../../_utils').MaybeArray<(page: number) => void>
                | undefined
            >;
            readonly onUpdatePage: globalThis.PropType<
                | import('../../_utils').MaybeArray<(page: number) => void>
                | undefined
            >;
            readonly 'onUpdate:pageSize': globalThis.PropType<
                | import('../../_utils').MaybeArray<(pageSize: number) => void>
                | undefined
            >;
            readonly onUpdatePageSize: globalThis.PropType<
                | import('../../_utils').MaybeArray<(pageSize: number) => void>
                | undefined
            >;
            readonly 'onUpdate:sorter': globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateSorter
                >
            >;
            readonly onUpdateSorter: globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateSorter
                >
            >;
            readonly 'onUpdate:filters': globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateFilters
                >
            >;
            readonly onUpdateFilters: globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateFilters
                >
            >;
            readonly 'onUpdate:checkedRowKeys': globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateCheckedRowKeys
                >
            >;
            readonly onUpdateCheckedRowKeys: globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateCheckedRowKeys
                >
            >;
            readonly 'onUpdate:expandedRowKeys': globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateExpandedRowKeys
                >
            >;
            readonly onUpdateExpandedRowKeys: globalThis.PropType<
                import('../../_utils').MaybeArray<
                    import('./interface').OnUpdateExpandedRowKeys
                >
            >;
            readonly onScroll: globalThis.PropType<(e: Event) => void>;
            readonly onPageChange: globalThis.PropType<
                | import('../../_utils').MaybeArray<(page: number) => void>
                | undefined
            >;
            readonly onPageSizeChange: globalThis.PropType<
                | import('../../_utils').MaybeArray<(pageSize: number) => void>
                | undefined
            >;
            readonly onSorterChange: globalThis.PropType<
                | import('../../_utils').MaybeArray<
                      import('./interface').OnUpdateSorter
                  >
                | undefined
            >;
            readonly onFiltersChange: globalThis.PropType<
                | import('../../_utils').MaybeArray<
                      import('./interface').OnUpdateFilters
                  >
                | undefined
            >;
            readonly onCheckedRowKeysChange: globalThis.PropType<
                | import('../../_utils').MaybeArray<
                      import('./interface').OnUpdateCheckedRowKeys
                  >
                | undefined
            >;
            readonly theme: globalThis.PropType<
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
            readonly themeOverrides: globalThis.PropType<
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
            readonly builtinThemeOverrides: globalThis.PropType<
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
        }>
    >,
    {
        readonly data: import('./interface').RowData[];
        readonly size: 'small' | 'medium' | 'large';
        readonly tableLayout: 'fixed' | 'auto';
        readonly columns: import('./interface').TableColumns<any>;
        readonly loading: boolean;
        readonly bordered: boolean | undefined;
        readonly pagination: false | import('../../pagination').PaginationProps;
        readonly virtualScroll: boolean;
        readonly remote: boolean;
        readonly paginateSinglePage: boolean;
        readonly bottomBordered: boolean | undefined;
        readonly striped: boolean;
        readonly defaultCheckedRowKeys: RowKey[];
        readonly singleLine: boolean;
        readonly singleColumn: boolean;
        readonly defaultExpandedRowKeys: RowKey[];
        readonly defaultExpandAll: boolean;
        readonly stickyExpandedRows: boolean;
        readonly allowCheckingNotLoaded: boolean;
        readonly cascade: boolean;
        readonly childrenKey: string;
        readonly indent: number;
        readonly flexHeight: boolean;
        readonly summaryPlacement: 'bottom' | 'top';
        readonly paginationBehaviorOnFilter: 'first' | 'current';
        readonly spinProps: import('../../_internal').BaseLoadingExposedProps;
    },
    {}
>;
export default _default;
