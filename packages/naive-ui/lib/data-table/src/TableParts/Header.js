var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const _utils_1 = require('../../../_utils');
const checkbox_1 = require('../../../checkbox');
const ellipsis_1 = require('../../../ellipsis');
const SortButton_1 = __importDefault(require('../HeaderButton/SortButton'));
const FilterButton_1 = __importDefault(require('../HeaderButton/FilterButton'));
const ResizeButton_1 = __importDefault(require('../HeaderButton/ResizeButton'));
const utils_1 = require('../utils');
const interface_1 = require('../interface');
const SelectionMenu_1 = __importDefault(require('./SelectionMenu'));
function renderTitle(column) {
    return typeof column.title === 'function'
        ? column.title(column)
        : column.title;
}
exports.default = (0, vue_1.defineComponent)({
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
        } = (0, vue_1.inject)(interface_1.dataTableInjectionKey);
        const cellElsRef = (0, vue_1.ref)({});
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
                (0, seemly_1.happensIn)(e, 'dataTableFilter') ||
                (0, seemly_1.happensIn)(e, 'dataTableResizable')
            ) {
                return;
            }
            if (!(0, utils_1.isColumnSortable)(column)) return;
            const activeSorter =
                mergedSortStateRef.value.find(
                    (state) => state.columnKey === column.key
                ) || null;
            const nextSorter = (0, utils_1.createNextSorter)(
                column,
                activeSorter
            );
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
            const limitWidth = (0, utils_1.clampValueFollowCSSRules)(
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
        const theadVNode = (0, vue_1.h)(
            'thead',
            {
                class: `${mergedClsPrefix}-data-table-thead`,
                'data-n-id': componentId,
            },
            rows.map((row) => {
                return (0, vue_1.h)(
                    'tr',
                    { class: `${mergedClsPrefix}-data-table-tr` },
                    row.map(({ column, colSpan, rowSpan, isLast }) => {
                        var _a, _b;
                        const key = (0, utils_1.getColKey)(column);
                        const { ellipsis } = column;
                        if (!hasEllipsis && ellipsis) hasEllipsis = true;
                        const createColumnVNode = () => {
                            if (column.type === 'selection') {
                                return column.multiple !== false
                                    ? (0, vue_1.h)(
                                          vue_1.Fragment,
                                          null,
                                          (0, vue_1.h)(checkbox_1.NCheckbox, {
                                              key: currentPage,
                                              privateInsideTable: true,
                                              checked: allRowsChecked,
                                              indeterminate: someRowsChecked,
                                              disabled: headerCheckboxDisabled,
                                              onUpdateChecked:
                                                  handleCheckboxUpdateChecked,
                                          }),
                                          checkOptions
                                              ? (0, vue_1.h)(
                                                    SelectionMenu_1.default,
                                                    {
                                                        clsPrefix:
                                                            mergedClsPrefix,
                                                    }
                                                )
                                              : null
                                      )
                                    : null;
                            }
                            return (0, vue_1.h)(
                                vue_1.Fragment,
                                null,
                                (0, vue_1.h)(
                                    'div',
                                    {
                                        class: `${mergedClsPrefix}-data-table-th__title-wrapper`,
                                    },
                                    (0, vue_1.h)(
                                        'div',
                                        {
                                            class: `${mergedClsPrefix}-data-table-th__title`,
                                        },
                                        ellipsis === true ||
                                            (ellipsis && !ellipsis.tooltip)
                                            ? (0, vue_1.h)(
                                                  'div',
                                                  {
                                                      class: `${mergedClsPrefix}-data-table-th__ellipsis`,
                                                  },
                                                  renderTitle(column)
                                              )
                                            : ellipsis &&
                                              typeof ellipsis === 'object'
                                            ? (0, vue_1.h)(
                                                  ellipsis_1.NEllipsis,
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
                                    (0, utils_1.isColumnSortable)(column)
                                        ? (0, vue_1.h)(SortButton_1.default, {
                                              column,
                                          })
                                        : null
                                ),
                                (0, utils_1.isColumnFilterable)(column)
                                    ? (0, vue_1.h)(FilterButton_1.default, {
                                          column,
                                          options: column.filterOptions,
                                      })
                                    : null,
                                (0, utils_1.isColumnResizable)(column)
                                    ? (0, vue_1.h)(ResizeButton_1.default, {
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
                        return (0, vue_1.h)(
                            'th',
                            {
                                ref: (el) => (cellElsRef[key] = el),
                                key,
                                style: {
                                    textAlign:
                                        column.titleAlign || column.align,
                                    left: (0, seemly_1.pxfy)(
                                        (_a = fixedColumnLeftMap[key]) ===
                                            null || _a === void 0
                                            ? void 0
                                            : _a.start
                                    ),
                                    right: (0, seemly_1.pxfy)(
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
                                            (0, utils_1.isColumnSorting)(
                                                column,
                                                mergedSortState
                                            ),
                                        [`${mergedClsPrefix}-data-table-th--filterable`]:
                                            (0, utils_1.isColumnFilterable)(
                                                column
                                            ),
                                        [`${mergedClsPrefix}-data-table-th--sortable`]:
                                            (0, utils_1.isColumnSortable)(
                                                column
                                            ),
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
        return (0, vue_1.h)(
            'div',
            {
                class: `${mergedClsPrefix}-data-table-base-table-header`,
                onScroll: handleTableHeaderScroll,
                onMouseenter: handleMouseenter,
                onMouseleave: handleMouseleave,
            },
            (0, vue_1.h)(
                'table',
                {
                    ref: 'body',
                    class: `${mergedClsPrefix}-data-table-table`,
                    style: {
                        minWidth: (0, _utils_1.formatLength)(scrollX),
                        tableLayout: mergedTableLayout,
                    },
                },
                (0, vue_1.h)(
                    'colgroup',
                    null,
                    cols.map((col) =>
                        (0, vue_1.h)('col', { key: col.key, style: col.style })
                    )
                ),
                theadVNode
            )
        );
    },
});
