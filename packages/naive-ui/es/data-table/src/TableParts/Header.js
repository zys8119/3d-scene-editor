import { h, defineComponent, inject, Fragment, ref } from 'vue';
import { happensIn, pxfy } from 'seemly';
import { formatLength } from '../../../_utils';
import { NCheckbox } from '../../../checkbox';
import { NEllipsis } from '../../../ellipsis';
import SortButton from '../HeaderButton/SortButton';
import FilterButton from '../HeaderButton/FilterButton';
import ResizeButton from '../HeaderButton/ResizeButton';
import {
    isColumnSortable,
    isColumnFilterable,
    createNextSorter,
    getColKey,
    isColumnSorting,
    isColumnResizable,
    clampValueFollowCSSRules,
} from '../utils';
import { dataTableInjectionKey } from '../interface';
import SelectionMenu from './SelectionMenu';
function renderTitle(column) {
    return typeof column.title === 'function'
        ? column.title(column)
        : column.title;
}
export default defineComponent({
    name: 'DataTableHeader',
    props: {
        discrete: {
            type: Boolean,
            default: true,
        },
    },
    setup() {
        const {
            mergedClsPrefixRef,
            scrollXRef,
            fixedColumnLeftMapRef,
            fixedColumnRightMapRef,
            mergedCurrentPageRef,
            allRowsCheckedRef,
            someRowsCheckedRef,
            rowsRef,
            colsRef,
            mergedThemeRef,
            checkOptionsRef,
            mergedSortStateRef,
            componentId,
            scrollPartRef,
            mergedTableLayoutRef,
            headerCheckboxDisabledRef,
            onUnstableColumnResize,
            doUpdateResizableWidth,
            handleTableHeaderScroll,
            deriveNextSorter,
            doUncheckAll,
            doCheckAll,
        } = inject(dataTableInjectionKey);
        const cellElsRef = ref({});
        function getCellActualWidth(key) {
            const element = cellElsRef.value[key];
            return element === null || element === void 0
                ? void 0
                : element.getBoundingClientRect().width;
        }
        function handleCheckboxUpdateChecked() {
            if (allRowsCheckedRef.value) {
                doUncheckAll();
            } else {
                doCheckAll();
            }
        }
        function handleColHeaderClick(e, column) {
            if (
                happensIn(e, 'dataTableFilter') ||
                happensIn(e, 'dataTableResizable')
            ) {
                return;
            }
            if (!isColumnSortable(column)) return;
            const activeSorter =
                mergedSortStateRef.value.find(
                    (state) => state.columnKey === column.key
                ) || null;
            const nextSorter = createNextSorter(column, activeSorter);
            deriveNextSorter(nextSorter);
        }
        function handleMouseenter() {
            scrollPartRef.value = 'head';
        }
        function handleMouseleave() {
            scrollPartRef.value = 'body';
        }
        const resizeStartWidthMap = /* @__PURE__ */ new Map();
        function handleColumnResizeStart(column) {
            resizeStartWidthMap.set(column.key, getCellActualWidth(column.key));
        }
        function handleColumnResize(column, displacementX) {
            const startWidth = resizeStartWidthMap.get(column.key);
            if (startWidth === void 0) {
                return;
            }
            const widthAfterResize = startWidth + displacementX;
            const limitWidth = clampValueFollowCSSRules(
                widthAfterResize,
                column.minWidth,
                column.maxWidth
            );
            onUnstableColumnResize(
                widthAfterResize,
                limitWidth,
                column,
                getCellActualWidth
            );
            doUpdateResizableWidth(column, limitWidth);
        }
        return {
            cellElsRef,
            componentId,
            mergedSortState: mergedSortStateRef,
            mergedClsPrefix: mergedClsPrefixRef,
            scrollX: scrollXRef,
            fixedColumnLeftMap: fixedColumnLeftMapRef,
            fixedColumnRightMap: fixedColumnRightMapRef,
            currentPage: mergedCurrentPageRef,
            allRowsChecked: allRowsCheckedRef,
            someRowsChecked: someRowsCheckedRef,
            rows: rowsRef,
            cols: colsRef,
            mergedTheme: mergedThemeRef,
            checkOptions: checkOptionsRef,
            mergedTableLayout: mergedTableLayoutRef,
            headerCheckboxDisabled: headerCheckboxDisabledRef,
            handleMouseenter,
            handleMouseleave,
            handleCheckboxUpdateChecked,
            handleColHeaderClick,
            handleTableHeaderScroll,
            handleColumnResizeStart,
            handleColumnResize,
        };
    },
    render() {
        const {
            cellElsRef,
            mergedClsPrefix,
            fixedColumnLeftMap,
            fixedColumnRightMap,
            currentPage,
            allRowsChecked,
            someRowsChecked,
            rows,
            cols,
            mergedTheme,
            checkOptions,
            componentId,
            discrete,
            mergedTableLayout,
            headerCheckboxDisabled,
            mergedSortState,
            handleColHeaderClick,
            handleCheckboxUpdateChecked,
            handleColumnResizeStart,
            handleColumnResize,
        } = this;
        let hasEllipsis = false;
        const theadVNode = h(
            'thead',
            {
                class: `${mergedClsPrefix}-data-table-thead`,
                'data-n-id': componentId,
            },
            rows.map((row) => {
                return h(
                    'tr',
                    { class: `${mergedClsPrefix}-data-table-tr` },
                    row.map(({ column, colSpan, rowSpan, isLast }) => {
                        var _a, _b;
                        const key = getColKey(column);
                        const { ellipsis } = column;
                        if (!hasEllipsis && ellipsis) hasEllipsis = true;
                        const createColumnVNode = () => {
                            if (column.type === 'selection') {
                                return column.multiple !== false
                                    ? h(
                                          Fragment,
                                          null,
                                          h(NCheckbox, {
                                              key: currentPage,
                                              privateInsideTable: true,
                                              checked: allRowsChecked,
                                              indeterminate: someRowsChecked,
                                              disabled: headerCheckboxDisabled,
                                              onUpdateChecked:
                                                  handleCheckboxUpdateChecked,
                                          }),
                                          checkOptions
                                              ? h(SelectionMenu, {
                                                    clsPrefix: mergedClsPrefix,
                                                })
                                              : null
                                      )
                                    : null;
                            }
                            return h(
                                Fragment,
                                null,
                                h(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-data-table-th__title-wrapper`,
                                    },
                                    h(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-data-table-th__title`,
                                        },
                                        ellipsis === true ||
                                            (ellipsis && !ellipsis.tooltip)
                                            ? h(
                                                  'div',
                                                  {
                                                      class: `${mergedClsPrefix}-data-table-th__ellipsis`,
                                                  },
                                                  renderTitle(column)
                                              )
                                            : ellipsis &&
                                              typeof ellipsis === 'object'
                                            ? h(
                                                  NEllipsis,
                                                  Object.assign({}, ellipsis, {
                                                      theme: mergedTheme.peers
                                                          .Ellipsis,
                                                      themeOverrides:
                                                          mergedTheme
                                                              .peerOverrides
                                                              .Ellipsis,
                                                  }),
                                                  {
                                                      default: () =>
                                                          renderTitle(column),
                                                  }
                                              )
                                            : renderTitle(column)
                                    ),
                                    isColumnSortable(column)
                                        ? h(SortButton, { column })
                                        : null
                                ),
                                isColumnFilterable(column)
                                    ? h(FilterButton, {
                                          column,
                                          options: column.filterOptions,
                                      })
                                    : null,
                                isColumnResizable(column)
                                    ? h(ResizeButton, {
                                          onResizeStart: () =>
                                              handleColumnResizeStart(column),
                                          onResize: (displacementX) =>
                                              handleColumnResize(
                                                  column,
                                                  displacementX
                                              ),
                                      })
                                    : null
                            );
                        };
                        const leftFixed = key in fixedColumnLeftMap;
                        const rightFixed = key in fixedColumnRightMap;
                        return h(
                            'th',
                            {
                                ref: (el) => (cellElsRef[key] = el),
                                key,
                                style: {
                                    textAlign:
                                        column.titleAlign || column.align,
                                    left: pxfy(
                                        (_a = fixedColumnLeftMap[key]) ===
                                            null || _a === void 0
                                            ? void 0
                                            : _a.start
                                    ),
                                    right: pxfy(
                                        (_b = fixedColumnRightMap[key]) ===
                                            null || _b === void 0
                                            ? void 0
                                            : _b.start
                                    ),
                                },
                                colspan: colSpan,
                                rowspan: rowSpan,
                                'data-col-key': key,
                                class: [
                                    `${mergedClsPrefix}-data-table-th`,
                                    (leftFixed || rightFixed) &&
                                        `${mergedClsPrefix}-data-table-th--fixed-${
                                            leftFixed ? 'left' : 'right'
                                        }`,
                                    {
                                        [`${mergedClsPrefix}-data-table-th--hover`]:
                                            isColumnSorting(
                                                column,
                                                mergedSortState
                                            ),
                                        [`${mergedClsPrefix}-data-table-th--filterable`]:
                                            isColumnFilterable(column),
                                        [`${mergedClsPrefix}-data-table-th--sortable`]:
                                            isColumnSortable(column),
                                        [`${mergedClsPrefix}-data-table-th--selection`]:
                                            column.type === 'selection',
                                        [`${mergedClsPrefix}-data-table-th--last`]:
                                            isLast,
                                    },
                                    column.className,
                                ],
                                onClick:
                                    column.type !== 'selection' &&
                                    column.type !== 'expand' &&
                                    !('children' in column)
                                        ? (e) => {
                                              handleColHeaderClick(e, column);
                                          }
                                        : void 0,
                            },
                            createColumnVNode()
                        );
                    })
                );
            })
        );
        if (!discrete) {
            return theadVNode;
        }
        const {
            handleTableHeaderScroll,
            handleMouseenter,
            handleMouseleave,
            scrollX,
        } = this;
        return h(
            'div',
            {
                class: `${mergedClsPrefix}-data-table-base-table-header`,
                onScroll: handleTableHeaderScroll,
                onMouseenter: handleMouseenter,
                onMouseleave: handleMouseleave,
            },
            h(
                'table',
                {
                    ref: 'body',
                    class: `${mergedClsPrefix}-data-table-table`,
                    style: {
                        minWidth: formatLength(scrollX),
                        tableLayout: mergedTableLayout,
                    },
                },
                h(
                    'colgroup',
                    null,
                    cols.map((col) =>
                        h('col', { key: col.key, style: col.style })
                    )
                ),
                theadVNode
            )
        );
    },
});
