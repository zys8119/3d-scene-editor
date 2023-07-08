var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const _mixins_1 = require('../../_mixins');
const _internal_1 = require('../../_internal');
const pagination_1 = require('../../pagination');
const _utils_1 = require('../../_utils');
const styles_1 = require('../styles');
const MainTable_1 = __importDefault(require('./MainTable'));
const use_check_1 = require('./use-check');
const use_table_data_1 = require('./use-table-data');
const use_scroll_1 = require('./use-scroll');
const use_resizable_1 = require('./use-resizable');
const interface_1 = require('./interface');
const use_group_header_1 = require('./use-group-header');
const use_expand_1 = require('./use-expand');
const index_cssr_1 = __importDefault(require('./styles/index.cssr'));
exports.default = (0, vue_1.defineComponent)({
    name: 'DataTable',
    alias: ['AdvancedTable'],
    props: interface_1.dataTableProps,
    setup(props, { slots }) {
        if (process.env.NODE_ENV !== 'production') {
            (0, vue_1.watchEffect)(() => {
                if (props.onPageChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'data-table',
                        '`on-page-change` is deprecated, please use `on-update:page` instead.'
                    );
                }
                if (props.onPageSizeChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'data-table',
                        '`on-page-size-change` is deprecated, please use `on-update:page-size` instead.'
                    );
                }
                if (props.onSorterChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'data-table',
                        '`on-sorter-change` is deprecated, please use `on-update:sorter` instead.'
                    );
                }
                if (props.onFiltersChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'data-table',
                        '`on-filters-change` is deprecated, please use `on-update:filters` instead.'
                    );
                }
                if (props.onCheckedRowKeysChange !== void 0) {
                    (0, _utils_1.warnOnce)(
                        'data-table',
                        '`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.'
                    );
                }
            });
        }
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled } =
            (0, _mixins_1.useConfig)(props);
        const mergedBottomBorderedRef = (0, vue_1.computed)(() => {
            const { bottomBordered } = props;
            if (mergedBorderedRef.value) return false;
            if (bottomBordered !== void 0) return bottomBordered;
            return true;
        });
        const themeRef = (0, _mixins_1.useTheme)(
            'DataTable',
            '-data-table',
            index_cssr_1.default,
            styles_1.dataTableLight,
            props,
            mergedClsPrefixRef
        );
        const bodyWidthRef = (0, vue_1.ref)(null);
        const scrollPartRef = (0, vue_1.ref)('body');
        (0, vue_1.onDeactivated)(() => {
            scrollPartRef.value = 'body';
        });
        const mainTableInstRef = (0, vue_1.ref)(null);
        const {
            getResizableWidth,
            clearResizableWidth,
            doUpdateResizableWidth,
        } = (0, use_resizable_1.useResizable)();
        const { rowsRef, colsRef, dataRelatedColsRef, hasEllipsisRef } = (0,
        use_group_header_1.useGroupHeader)(props, getResizableWidth);
        const {
            treeMateRef,
            mergedCurrentPageRef,
            paginatedDataRef,
            rawPaginatedDataRef,
            selectionColumnRef,
            hoverKeyRef,
            mergedPaginationRef,
            mergedFilterStateRef,
            mergedSortStateRef,
            childTriggerColIndexRef,
            doUpdatePage,
            doUpdateFilters,
            onUnstableColumnResize,
            deriveNextSorter,
            filter,
            filters,
            clearFilter,
            clearFilters,
            clearSorter,
            page,
            sort,
        } = (0, use_table_data_1.useTableData)(props, { dataRelatedColsRef });
        const {
            doCheckAll,
            doUncheckAll,
            doCheck,
            doUncheck,
            headerCheckboxDisabledRef,
            someRowsCheckedRef,
            allRowsCheckedRef,
            mergedCheckedRowKeySetRef,
            mergedInderminateRowKeySetRef,
        } = (0, use_check_1.useCheck)(props, {
            selectionColumnRef,
            treeMateRef,
            paginatedDataRef,
        });
        const {
            stickyExpandedRowsRef,
            mergedExpandedRowKeysRef,
            renderExpandRef,
            expandableRef,
            doUpdateExpandedRowKeys,
        } = (0, use_expand_1.useExpand)(props, treeMateRef);
        const {
            handleTableBodyScroll,
            handleTableHeaderScroll,
            syncScrollState,
            setHeaderScrollLeft,
            leftActiveFixedColKeyRef,
            leftActiveFixedChildrenColKeysRef,
            rightActiveFixedColKeyRef,
            rightActiveFixedChildrenColKeysRef,
            leftFixedColumnsRef,
            rightFixedColumnsRef,
            fixedColumnLeftMapRef,
            fixedColumnRightMapRef,
        } = (0, use_scroll_1.useScroll)(props, {
            scrollPartRef,
            bodyWidthRef,
            mainTableInstRef,
            mergedCurrentPageRef,
        });
        const { localeRef } = (0, _mixins_1.useLocale)('DataTable');
        const mergedTableLayoutRef = (0, vue_1.computed)(() => {
            if (
                props.virtualScroll ||
                props.flexHeight ||
                props.maxHeight !== void 0 ||
                hasEllipsisRef.value
            ) {
                return 'fixed';
            }
            return props.tableLayout;
        });
        (0, vue_1.provide)(interface_1.dataTableInjectionKey, {
            props,
            treeMateRef,
            renderExpandIconRef: (0, vue_1.toRef)(props, 'renderExpandIcon'),
            loadingKeySetRef: (0, vue_1.ref)(/* @__PURE__ */ new Set()),
            slots,
            indentRef: (0, vue_1.toRef)(props, 'indent'),
            childTriggerColIndexRef,
            bodyWidthRef,
            componentId: (0, seemly_1.createId)(),
            hoverKeyRef,
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            scrollXRef: (0, vue_1.computed)(() => props.scrollX),
            rowsRef,
            colsRef,
            paginatedDataRef,
            leftActiveFixedColKeyRef,
            leftActiveFixedChildrenColKeysRef,
            rightActiveFixedColKeyRef,
            rightActiveFixedChildrenColKeysRef,
            leftFixedColumnsRef,
            rightFixedColumnsRef,
            fixedColumnLeftMapRef,
            fixedColumnRightMapRef,
            mergedCurrentPageRef,
            someRowsCheckedRef,
            allRowsCheckedRef,
            mergedSortStateRef,
            mergedFilterStateRef,
            loadingRef: (0, vue_1.toRef)(props, 'loading'),
            rowClassNameRef: (0, vue_1.toRef)(props, 'rowClassName'),
            mergedCheckedRowKeySetRef,
            mergedExpandedRowKeysRef,
            mergedInderminateRowKeySetRef,
            localeRef,
            scrollPartRef,
            expandableRef,
            stickyExpandedRowsRef,
            rowKeyRef: (0, vue_1.toRef)(props, 'rowKey'),
            renderExpandRef,
            summaryRef: (0, vue_1.toRef)(props, 'summary'),
            virtualScrollRef: (0, vue_1.toRef)(props, 'virtualScroll'),
            rowPropsRef: (0, vue_1.toRef)(props, 'rowProps'),
            stripedRef: (0, vue_1.toRef)(props, 'striped'),
            checkOptionsRef: (0, vue_1.computed)(() => {
                const { value: selectionColumn } = selectionColumnRef;
                return selectionColumn === null || selectionColumn === void 0
                    ? void 0
                    : selectionColumn.options;
            }),
            rawPaginatedDataRef,
            filterMenuCssVarsRef: (0, vue_1.computed)(() => {
                const {
                    self: {
                        actionDividerColor,
                        actionPadding,
                        actionButtonMargin,
                    },
                } = themeRef.value;
                return {
                    '--n-action-padding': actionPadding,
                    '--n-action-button-margin': actionButtonMargin,
                    '--n-action-divider-color': actionDividerColor,
                };
            }),
            onLoadRef: (0, vue_1.toRef)(props, 'onLoad'),
            mergedTableLayoutRef,
            maxHeightRef: (0, vue_1.toRef)(props, 'maxHeight'),
            minHeightRef: (0, vue_1.toRef)(props, 'minHeight'),
            flexHeightRef: (0, vue_1.toRef)(props, 'flexHeight'),
            headerCheckboxDisabledRef,
            paginationBehaviorOnFilterRef: (0, vue_1.toRef)(
                props,
                'paginationBehaviorOnFilter'
            ),
            summaryPlacementRef: (0, vue_1.toRef)(props, 'summaryPlacement'),
            scrollbarPropsRef: (0, vue_1.toRef)(props, 'scrollbarProps'),
            syncScrollState,
            doUpdatePage,
            doUpdateFilters,
            getResizableWidth,
            onUnstableColumnResize,
            clearResizableWidth,
            doUpdateResizableWidth,
            deriveNextSorter,
            doCheck,
            doUncheck,
            doCheckAll,
            doUncheckAll,
            doUpdateExpandedRowKeys,
            handleTableHeaderScroll,
            handleTableBodyScroll,
            setHeaderScrollLeft,
            renderCell: (0, vue_1.toRef)(props, 'renderCell'),
        });
        const exposedMethods = {
            filter,
            filters,
            clearFilters,
            clearSorter,
            page,
            sort,
            clearFilter,
            doUncheckAll,
            scrollTo: (arg0, arg1) => {
                var _a;
                (_a = mainTableInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.scrollTo(arg0, arg1);
            },
        };
        const cssVarsRef = (0, vue_1.computed)(() => {
            const { size } = props;
            const {
                common: { cubicBezierEaseInOut },
                self: {
                    borderColor,
                    tdColorHover,
                    thColor,
                    thColorHover,
                    tdColor,
                    tdTextColor,
                    thTextColor,
                    thFontWeight,
                    thButtonColorHover,
                    thIconColor,
                    thIconColorActive,
                    filterSize,
                    borderRadius,
                    lineHeight,
                    tdColorModal,
                    thColorModal,
                    borderColorModal,
                    thColorHoverModal,
                    tdColorHoverModal,
                    borderColorPopover,
                    thColorPopover,
                    tdColorPopover,
                    tdColorHoverPopover,
                    thColorHoverPopover,
                    paginationMargin,
                    emptyPadding,
                    boxShadowAfter,
                    boxShadowBefore,
                    sorterSize,
                    resizableContainerSize,
                    resizableSize,
                    loadingColor,
                    loadingSize,
                    opacityLoading,
                    tdColorStriped,
                    tdColorStripedModal,
                    tdColorStripedPopover,
                    [(0, _utils_1.createKey)('fontSize', size)]: fontSize,
                    [(0, _utils_1.createKey)('thPadding', size)]: thPadding,
                    [(0, _utils_1.createKey)('tdPadding', size)]: tdPadding,
                },
            } = themeRef.value;
            return {
                '--n-font-size': fontSize,
                '--n-th-padding': thPadding,
                '--n-td-padding': tdPadding,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-border-radius': borderRadius,
                '--n-line-height': lineHeight,
                '--n-border-color': borderColor,
                '--n-border-color-modal': borderColorModal,
                '--n-border-color-popover': borderColorPopover,
                '--n-th-color': thColor,
                '--n-th-color-hover': thColorHover,
                '--n-th-color-modal': thColorModal,
                '--n-th-color-hover-modal': thColorHoverModal,
                '--n-th-color-popover': thColorPopover,
                '--n-th-color-hover-popover': thColorHoverPopover,
                '--n-td-color': tdColor,
                '--n-td-color-hover': tdColorHover,
                '--n-td-color-modal': tdColorModal,
                '--n-td-color-hover-modal': tdColorHoverModal,
                '--n-td-color-popover': tdColorPopover,
                '--n-td-color-hover-popover': tdColorHoverPopover,
                '--n-th-text-color': thTextColor,
                '--n-td-text-color': tdTextColor,
                '--n-th-font-weight': thFontWeight,
                '--n-th-button-color-hover': thButtonColorHover,
                '--n-th-icon-color': thIconColor,
                '--n-th-icon-color-active': thIconColorActive,
                '--n-filter-size': filterSize,
                '--n-pagination-margin': paginationMargin,
                '--n-empty-padding': emptyPadding,
                '--n-box-shadow-before': boxShadowBefore,
                '--n-box-shadow-after': boxShadowAfter,
                '--n-sorter-size': sorterSize,
                '--n-resizable-container-size': resizableContainerSize,
                '--n-resizable-size': resizableSize,
                '--n-loading-size': loadingSize,
                '--n-loading-color': loadingColor,
                '--n-opacity-loading': opacityLoading,
                '--n-td-color-striped': tdColorStriped,
                '--n-td-color-striped-modal': tdColorStripedModal,
                '--n-td-color-striped-popover': tdColorStripedPopover,
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? (0, _mixins_1.useThemeClass)(
                  'data-table',
                  (0, vue_1.computed)(() => props.size[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        const mergedShowPaginationRef = (0, vue_1.computed)(() => {
            if (!props.pagination) return false;
            if (props.paginateSinglePage) return true;
            const mergedPagination = mergedPaginationRef.value;
            const { pageCount } = mergedPagination;
            if (pageCount !== void 0) return pageCount > 1;
            return (
                mergedPagination.itemCount &&
                mergedPagination.pageSize &&
                mergedPagination.itemCount > mergedPagination.pageSize
            );
        });
        return Object.assign(
            {
                mainTableInstRef,
                mergedClsPrefix: mergedClsPrefixRef,
                mergedTheme: themeRef,
                paginatedData: paginatedDataRef,
                mergedBordered: mergedBorderedRef,
                mergedBottomBordered: mergedBottomBorderedRef,
                mergedPagination: mergedPaginationRef,
                mergedShowPagination: mergedShowPaginationRef,
                cssVars: inlineThemeDisabled ? void 0 : cssVarsRef,
                themeClass:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.themeClass,
                onRender:
                    themeClassHandle === null || themeClassHandle === void 0
                        ? void 0
                        : themeClassHandle.onRender,
            },
            exposedMethods
        );
    },
    render() {
        const { mergedClsPrefix, themeClass, onRender, $slots, spinProps } =
            this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${mergedClsPrefix}-data-table`,
                    themeClass,
                    {
                        [`${mergedClsPrefix}-data-table--bordered`]:
                            this.mergedBordered,
                        [`${mergedClsPrefix}-data-table--bottom-bordered`]:
                            this.mergedBottomBordered,
                        [`${mergedClsPrefix}-data-table--single-line`]:
                            this.singleLine,
                        [`${mergedClsPrefix}-data-table--single-column`]:
                            this.singleColumn,
                        [`${mergedClsPrefix}-data-table--loading`]:
                            this.loading,
                        [`${mergedClsPrefix}-data-table--flex-height`]:
                            this.flexHeight,
                    },
                ],
                style: this.cssVars,
            },
            (0, vue_1.h)(
                'div',
                { class: `${mergedClsPrefix}-data-table-wrapper` },
                (0, vue_1.h)(MainTable_1.default, { ref: 'mainTableInstRef' })
            ),
            this.mergedShowPagination
                ? (0, vue_1.h)(
                      'div',
                      { class: `${mergedClsPrefix}-data-table__pagination` },
                      (0, vue_1.h)(
                          pagination_1.NPagination,
                          Object.assign(
                              {
                                  theme: this.mergedTheme.peers.Pagination,
                                  themeOverrides:
                                      this.mergedTheme.peerOverrides.Pagination,
                                  disabled: this.loading,
                              },
                              this.mergedPagination
                          )
                      )
                  )
                : null,
            (0, vue_1.h)(
                vue_1.Transition,
                { name: 'fade-in-scale-up-transition' },
                {
                    default: () => {
                        return this.loading
                            ? (0, vue_1.h)(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-data-table-loading-wrapper`,
                                  },
                                  (0, _utils_1.resolveSlot)(
                                      $slots.loading,
                                      () => [
                                          (0, vue_1.h)(
                                              _internal_1.NBaseLoading,
                                              Object.assign(
                                                  {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                      strokeWidth: 20,
                                                  },
                                                  spinProps
                                              )
                                          ),
                                      ]
                                  )
                              )
                            : null;
                    },
                }
            )
        );
    },
});
