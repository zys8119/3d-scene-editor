import {
    h,
    computed,
    defineComponent,
    ref,
    provide,
    toRef,
    Transition,
    watchEffect,
    onDeactivated,
} from 'vue';
import { createId } from 'seemly';
import { useConfig, useLocale, useTheme, useThemeClass } from '../../_mixins';
import { NBaseLoading } from '../../_internal';
import { NPagination } from '../../pagination';
import { createKey, resolveSlot, warnOnce } from '../../_utils';
import { dataTableLight } from '../styles';
import MainTable from './MainTable';
import { useCheck } from './use-check';
import { useTableData } from './use-table-data';
import { useScroll } from './use-scroll';
import { useResizable } from './use-resizable';
import { dataTableInjectionKey, dataTableProps } from './interface';
import { useGroupHeader } from './use-group-header';
import { useExpand } from './use-expand';
import style from './styles/index.cssr';
export default defineComponent({
    name: 'DataTable',
    alias: ['AdvancedTable'],
    props: dataTableProps,
    setup(props, { slots }) {
        if (process.env.NODE_ENV !== 'production') {
            watchEffect(() => {
                if (props.onPageChange !== void 0) {
                    warnOnce(
                        'data-table',
                        '`on-page-change` is deprecated, please use `on-update:page` instead.'
                    );
                }
                if (props.onPageSizeChange !== void 0) {
                    warnOnce(
                        'data-table',
                        '`on-page-size-change` is deprecated, please use `on-update:page-size` instead.'
                    );
                }
                if (props.onSorterChange !== void 0) {
                    warnOnce(
                        'data-table',
                        '`on-sorter-change` is deprecated, please use `on-update:sorter` instead.'
                    );
                }
                if (props.onFiltersChange !== void 0) {
                    warnOnce(
                        'data-table',
                        '`on-filters-change` is deprecated, please use `on-update:filters` instead.'
                    );
                }
                if (props.onCheckedRowKeysChange !== void 0) {
                    warnOnce(
                        'data-table',
                        '`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.'
                    );
                }
            });
        }
        const { mergedBorderedRef, mergedClsPrefixRef, inlineThemeDisabled } =
            useConfig(props);
        const mergedBottomBorderedRef = computed(() => {
            const { bottomBordered } = props;
            if (mergedBorderedRef.value) return false;
            if (bottomBordered !== void 0) return bottomBordered;
            return true;
        });
        const themeRef = useTheme(
            'DataTable',
            '-data-table',
            style,
            dataTableLight,
            props,
            mergedClsPrefixRef
        );
        const bodyWidthRef = ref(null);
        const scrollPartRef = ref('body');
        onDeactivated(() => {
            scrollPartRef.value = 'body';
        });
        const mainTableInstRef = ref(null);
        const {
            getResizableWidth,
            clearResizableWidth,
            doUpdateResizableWidth,
        } = useResizable();
        const { rowsRef, colsRef, dataRelatedColsRef, hasEllipsisRef } =
            useGroupHeader(props, getResizableWidth);
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
        } = useTableData(props, { dataRelatedColsRef });
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
        } = useCheck(props, {
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
        } = useExpand(props, treeMateRef);
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
        } = useScroll(props, {
            scrollPartRef,
            bodyWidthRef,
            mainTableInstRef,
            mergedCurrentPageRef,
        });
        const { localeRef } = useLocale('DataTable');
        const mergedTableLayoutRef = computed(() => {
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
        provide(dataTableInjectionKey, {
            props,
            treeMateRef,
            renderExpandIconRef: toRef(props, 'renderExpandIcon'),
            loadingKeySetRef: ref(/* @__PURE__ */ new Set()),
            slots,
            indentRef: toRef(props, 'indent'),
            childTriggerColIndexRef,
            bodyWidthRef,
            componentId: createId(),
            hoverKeyRef,
            mergedClsPrefixRef,
            mergedThemeRef: themeRef,
            scrollXRef: computed(() => props.scrollX),
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
            loadingRef: toRef(props, 'loading'),
            rowClassNameRef: toRef(props, 'rowClassName'),
            mergedCheckedRowKeySetRef,
            mergedExpandedRowKeysRef,
            mergedInderminateRowKeySetRef,
            localeRef,
            scrollPartRef,
            expandableRef,
            stickyExpandedRowsRef,
            rowKeyRef: toRef(props, 'rowKey'),
            renderExpandRef,
            summaryRef: toRef(props, 'summary'),
            virtualScrollRef: toRef(props, 'virtualScroll'),
            rowPropsRef: toRef(props, 'rowProps'),
            stripedRef: toRef(props, 'striped'),
            checkOptionsRef: computed(() => {
                const { value: selectionColumn } = selectionColumnRef;
                return selectionColumn === null || selectionColumn === void 0
                    ? void 0
                    : selectionColumn.options;
            }),
            rawPaginatedDataRef,
            filterMenuCssVarsRef: computed(() => {
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
            onLoadRef: toRef(props, 'onLoad'),
            mergedTableLayoutRef,
            maxHeightRef: toRef(props, 'maxHeight'),
            minHeightRef: toRef(props, 'minHeight'),
            flexHeightRef: toRef(props, 'flexHeight'),
            headerCheckboxDisabledRef,
            paginationBehaviorOnFilterRef: toRef(
                props,
                'paginationBehaviorOnFilter'
            ),
            summaryPlacementRef: toRef(props, 'summaryPlacement'),
            scrollbarPropsRef: toRef(props, 'scrollbarProps'),
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
            renderCell: toRef(props, 'renderCell'),
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
        const cssVarsRef = computed(() => {
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
                    [createKey('fontSize', size)]: fontSize,
                    [createKey('thPadding', size)]: thPadding,
                    [createKey('tdPadding', size)]: tdPadding,
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
            ? useThemeClass(
                  'data-table',
                  computed(() => props.size[0]),
                  cssVarsRef,
                  props
              )
            : void 0;
        const mergedShowPaginationRef = computed(() => {
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
        return h(
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
            h(
                'div',
                { class: `${mergedClsPrefix}-data-table-wrapper` },
                h(MainTable, { ref: 'mainTableInstRef' })
            ),
            this.mergedShowPagination
                ? h(
                      'div',
                      { class: `${mergedClsPrefix}-data-table__pagination` },
                      h(
                          NPagination,
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
            h(
                Transition,
                { name: 'fade-in-scale-up-transition' },
                {
                    default: () => {
                        return this.loading
                            ? h(
                                  'div',
                                  {
                                      class: `${mergedClsPrefix}-data-table-loading-wrapper`,
                                  },
                                  resolveSlot($slots.loading, () => [
                                      h(
                                          NBaseLoading,
                                          Object.assign(
                                              {
                                                  clsPrefix: mergedClsPrefix,
                                                  strokeWidth: 20,
                                              },
                                              spinProps
                                          )
                                      ),
                                  ])
                              )
                            : null;
                    },
                }
            )
        );
    },
});
