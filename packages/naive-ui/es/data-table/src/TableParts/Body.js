import {
    h,
    ref,
    defineComponent,
    inject,
    watchEffect,
    onUnmounted,
    computed,
    Fragment,
} from 'vue';
import { pxfy, repeat } from 'seemly';
import { VirtualList, VResizeObserver } from 'vueuc';
import { useMemo } from 'vooks';
import { cssrAnchorMetaName } from '../../../_mixins/common';
import { c } from '../../../_utils/cssr';
import { NScrollbar } from '../../../_internal';
import { formatLength, resolveSlot, warn } from '../../../_utils';
import { NEmpty } from '../../../empty';
import { dataTableInjectionKey } from '../interface';
import { createRowClassName, getColKey, isColumnSorting } from '../utils';
import Cell from './Cell';
import ExpandTrigger from './ExpandTrigger';
import RenderSafeCheckbox from './BodyCheckbox';
import RenderSafeRadio from './BodyRadio';
import TableHeader from './Header';
function flatten(rowInfos, expandedRowKeys) {
    const fRows = [];
    function traverse(rs, rootIndex) {
        rs.forEach((r) => {
            if (r.children && expandedRowKeys.has(r.key)) {
                fRows.push({
                    tmNode: r,
                    striped: false,
                    key: r.key,
                    index: rootIndex,
                });
                traverse(r.children, rootIndex);
            } else {
                fRows.push({
                    key: r.key,
                    tmNode: r,
                    striped: false,
                    index: rootIndex,
                });
            }
        });
    }
    rowInfos.forEach((rowInfo) => {
        fRows.push(rowInfo);
        const { children } = rowInfo.tmNode;
        if (children && expandedRowKeys.has(rowInfo.key)) {
            traverse(children, rowInfo.index);
        }
    });
    return fRows;
}
const VirtualListItemWrapper = defineComponent({
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        cols: {
            type: Array,
            required: true,
        },
        onMouseenter: Function,
        onMouseleave: Function,
    },
    render() {
        const { clsPrefix, id, cols, onMouseenter, onMouseleave } = this;
        return h(
            'table',
            {
                style: { tableLayout: 'fixed' },
                class: `${clsPrefix}-data-table-table`,
                onMouseenter,
                onMouseleave,
            },
            h(
                'colgroup',
                null,
                cols.map((col) => h('col', { key: col.key, style: col.style }))
            ),
            h(
                'tbody',
                { 'data-n-id': id, class: `${clsPrefix}-data-table-tbody` },
                this.$slots
            )
        );
    },
});
export default defineComponent({
    name: 'DataTableBody',
    props: {
        onResize: Function,
        showHeader: Boolean,
        flexHeight: Boolean,
        bodyStyle: Object,
    },
    setup(props) {
        const {
            slots: dataTableSlots,
            bodyWidthRef,
            mergedExpandedRowKeysRef,
            mergedClsPrefixRef,
            mergedThemeRef,
            scrollXRef,
            colsRef,
            paginatedDataRef,
            rawPaginatedDataRef,
            fixedColumnLeftMapRef,
            fixedColumnRightMapRef,
            mergedCurrentPageRef,
            rowClassNameRef,
            leftActiveFixedColKeyRef,
            leftActiveFixedChildrenColKeysRef,
            rightActiveFixedColKeyRef,
            rightActiveFixedChildrenColKeysRef,
            renderExpandRef,
            hoverKeyRef,
            summaryRef,
            mergedSortStateRef,
            virtualScrollRef,
            componentId,
            scrollPartRef,
            mergedTableLayoutRef,
            childTriggerColIndexRef,
            indentRef,
            rowPropsRef,
            maxHeightRef,
            stripedRef,
            loadingRef,
            onLoadRef,
            loadingKeySetRef,
            expandableRef,
            stickyExpandedRowsRef,
            renderExpandIconRef,
            summaryPlacementRef,
            treeMateRef,
            scrollbarPropsRef,
            setHeaderScrollLeft,
            doUpdateExpandedRowKeys,
            handleTableBodyScroll,
            doCheck,
            doUncheck,
            renderCell,
        } = inject(dataTableInjectionKey);
        const scrollbarInstRef = ref(null);
        const virtualListRef = ref(null);
        const emptyElRef = ref(null);
        const emptyRef = useMemo(() => paginatedDataRef.value.length === 0);
        const shouldDisplaySomeTablePartRef = useMemo(
            () => props.showHeader || !emptyRef.value
        );
        const bodyShowHeaderOnlyRef = useMemo(() => {
            return props.showHeader || emptyRef.value;
        });
        let lastSelectedKey = '';
        const mergedExpandedRowKeySetRef = computed(() => {
            return new Set(mergedExpandedRowKeysRef.value);
        });
        function getRowInfo(key) {
            var _a;
            return (_a = treeMateRef.value.getNode(key)) === null ||
                _a === void 0
                ? void 0
                : _a.rawNode;
        }
        function handleCheckboxUpdateChecked(tmNode, checked, shiftKey) {
            const rowInfo = getRowInfo(tmNode.key);
            if (!rowInfo) {
                warn(
                    'data-table',
                    `fail to get row data with key ${tmNode.key}`
                );
                return;
            }
            if (shiftKey) {
                const lastIndex = paginatedDataRef.value.findIndex(
                    (item) => item.key === lastSelectedKey
                );
                if (lastIndex !== -1) {
                    const currentIndex = paginatedDataRef.value.findIndex(
                        (item) => item.key === tmNode.key
                    );
                    const start = Math.min(lastIndex, currentIndex);
                    const end = Math.max(lastIndex, currentIndex);
                    const rowKeysToCheck = [];
                    paginatedDataRef.value
                        .slice(start, end + 1)
                        .forEach((r) => {
                            if (!r.disabled) {
                                rowKeysToCheck.push(r.key);
                            }
                        });
                    if (checked) {
                        doCheck(rowKeysToCheck, false, rowInfo);
                    } else {
                        doUncheck(rowKeysToCheck, rowInfo);
                    }
                    lastSelectedKey = tmNode.key;
                    return;
                }
            }
            if (checked) {
                doCheck(tmNode.key, false, rowInfo);
            } else {
                doUncheck(tmNode.key, rowInfo);
            }
            lastSelectedKey = tmNode.key;
        }
        function handleRadioUpdateChecked(tmNode) {
            const rowInfo = getRowInfo(tmNode.key);
            if (!rowInfo) {
                warn(
                    'data-table',
                    `fail to get row data with key ${tmNode.key}`
                );
                return;
            }
            doCheck(tmNode.key, true, rowInfo);
        }
        function getScrollContainer() {
            if (!shouldDisplaySomeTablePartRef.value) {
                const { value: emptyEl } = emptyElRef;
                if (emptyEl) {
                    return emptyEl;
                } else {
                    return null;
                }
            }
            if (virtualScrollRef.value) {
                return virtualListContainer();
            }
            const { value } = scrollbarInstRef;
            if (value) return value.containerRef;
            return null;
        }
        function handleUpdateExpanded(key, tmNode) {
            var _a;
            if (loadingKeySetRef.value.has(key)) return;
            const { value: mergedExpandedRowKeys } = mergedExpandedRowKeysRef;
            const index = mergedExpandedRowKeys.indexOf(key);
            const nextExpandedKeys = Array.from(mergedExpandedRowKeys);
            if (~index) {
                nextExpandedKeys.splice(index, 1);
                doUpdateExpandedRowKeys(nextExpandedKeys);
            } else {
                if (tmNode && !tmNode.isLeaf && !tmNode.shallowLoaded) {
                    loadingKeySetRef.value.add(key);
                    void ((_a = onLoadRef.value) === null || _a === void 0
                        ? void 0
                        : _a
                              .call(onLoadRef, tmNode.rawNode)
                              .then(() => {
                                  const { value: futureMergedExpandedRowKeys } =
                                      mergedExpandedRowKeysRef;
                                  const futureNextExpandedKeys = Array.from(
                                      futureMergedExpandedRowKeys
                                  );
                                  const index2 =
                                      futureNextExpandedKeys.indexOf(key);
                                  if (!~index2) {
                                      futureNextExpandedKeys.push(key);
                                  }
                                  doUpdateExpandedRowKeys(
                                      futureNextExpandedKeys
                                  );
                              })
                              .finally(() => {
                                  loadingKeySetRef.value.delete(key);
                              }));
                } else {
                    nextExpandedKeys.push(key);
                    doUpdateExpandedRowKeys(nextExpandedKeys);
                }
            }
        }
        function handleMouseleaveTable() {
            hoverKeyRef.value = null;
        }
        function handleMouseenterTable() {
            scrollPartRef.value = 'body';
        }
        function virtualListContainer() {
            const { value } = virtualListRef;
            return value === null || value === void 0
                ? void 0
                : value.listElRef;
        }
        function virtualListContent() {
            const { value } = virtualListRef;
            return value === null || value === void 0
                ? void 0
                : value.itemsElRef;
        }
        function handleVirtualListScroll(e) {
            var _a;
            handleTableBodyScroll(e);
            (_a = scrollbarInstRef.value) === null || _a === void 0
                ? void 0
                : _a.sync();
        }
        function handleVirtualListResize(e) {
            var _a;
            const { onResize } = props;
            if (onResize) onResize(e);
            (_a = scrollbarInstRef.value) === null || _a === void 0
                ? void 0
                : _a.sync();
        }
        const exposedMethods = {
            getScrollContainer,
            scrollTo(arg0, arg1) {
                var _a, _b;
                if (virtualScrollRef.value) {
                    (_a = virtualListRef.value) === null || _a === void 0
                        ? void 0
                        : _a.scrollTo(arg0, arg1);
                } else {
                    (_b = scrollbarInstRef.value) === null || _b === void 0
                        ? void 0
                        : _b.scrollTo(arg0, arg1);
                }
            },
        };
        const style = c([
            ({ props: cProps }) => {
                const createActiveLeftFixedStyle = (leftActiveFixedColKey) => {
                    if (leftActiveFixedColKey === null) return null;
                    return c(
                        `[data-n-id="${cProps.componentId}"] [data-col-key="${leftActiveFixedColKey}"]::after`,
                        { boxShadow: 'var(--n-box-shadow-after)' }
                    );
                };
                const createActiveRightFixedStyle = (
                    rightActiveFixedColKey
                ) => {
                    if (rightActiveFixedColKey === null) return null;
                    return c(
                        `[data-n-id="${cProps.componentId}"] [data-col-key="${rightActiveFixedColKey}"]::before`,
                        { boxShadow: 'var(--n-box-shadow-before)' }
                    );
                };
                return c([
                    createActiveLeftFixedStyle(cProps.leftActiveFixedColKey),
                    createActiveRightFixedStyle(cProps.rightActiveFixedColKey),
                    cProps.leftActiveFixedChildrenColKeys.map(
                        (leftActiveFixedColKey) =>
                            createActiveLeftFixedStyle(leftActiveFixedColKey)
                    ),
                    cProps.rightActiveFixedChildrenColKeys.map(
                        (rightActiveFixedColKey) =>
                            createActiveRightFixedStyle(rightActiveFixedColKey)
                    ),
                ]);
            },
        ]);
        let fixedStyleMounted = false;
        watchEffect(() => {
            const { value: leftActiveFixedColKey } = leftActiveFixedColKeyRef;
            const { value: leftActiveFixedChildrenColKeys } =
                leftActiveFixedChildrenColKeysRef;
            const { value: rightActiveFixedColKey } = rightActiveFixedColKeyRef;
            const { value: rightActiveFixedChildrenColKeys } =
                rightActiveFixedChildrenColKeysRef;
            if (
                !fixedStyleMounted &&
                leftActiveFixedColKey === null &&
                rightActiveFixedColKey === null
            ) {
                return;
            }
            const cProps = {
                leftActiveFixedColKey,
                leftActiveFixedChildrenColKeys,
                rightActiveFixedColKey,
                rightActiveFixedChildrenColKeys,
                componentId,
            };
            style.mount({
                id: `n-${componentId}`,
                force: true,
                props: cProps,
                anchorMetaName: cssrAnchorMetaName,
            });
            fixedStyleMounted = true;
        });
        onUnmounted(() => {
            style.unmount({
                id: `n-${componentId}`,
            });
        });
        return Object.assign(
            {
                bodyWidth: bodyWidthRef,
                summaryPlacement: summaryPlacementRef,
                dataTableSlots,
                componentId,
                scrollbarInstRef,
                virtualListRef,
                emptyElRef,
                summary: summaryRef,
                mergedClsPrefix: mergedClsPrefixRef,
                mergedTheme: mergedThemeRef,
                scrollX: scrollXRef,
                cols: colsRef,
                loading: loadingRef,
                bodyShowHeaderOnly: bodyShowHeaderOnlyRef,
                shouldDisplaySomeTablePart: shouldDisplaySomeTablePartRef,
                empty: emptyRef,
                paginatedDataAndInfo: computed(() => {
                    const { value: striped } = stripedRef;
                    let hasChildren = false;
                    const data = paginatedDataRef.value.map(
                        striped
                            ? (tmNode, index) => {
                                  if (!tmNode.isLeaf) hasChildren = true;
                                  return {
                                      tmNode,
                                      key: tmNode.key,
                                      striped: index % 2 === 1,
                                      index,
                                  };
                              }
                            : (tmNode, index) => {
                                  if (!tmNode.isLeaf) hasChildren = true;
                                  return {
                                      tmNode,
                                      key: tmNode.key,
                                      striped: false,
                                      index,
                                  };
                              }
                    );
                    return {
                        data,
                        hasChildren,
                    };
                }),
                rawPaginatedData: rawPaginatedDataRef,
                fixedColumnLeftMap: fixedColumnLeftMapRef,
                fixedColumnRightMap: fixedColumnRightMapRef,
                currentPage: mergedCurrentPageRef,
                rowClassName: rowClassNameRef,
                renderExpand: renderExpandRef,
                mergedExpandedRowKeySet: mergedExpandedRowKeySetRef,
                hoverKey: hoverKeyRef,
                mergedSortState: mergedSortStateRef,
                virtualScroll: virtualScrollRef,
                mergedTableLayout: mergedTableLayoutRef,
                childTriggerColIndex: childTriggerColIndexRef,
                indent: indentRef,
                rowProps: rowPropsRef,
                maxHeight: maxHeightRef,
                loadingKeySet: loadingKeySetRef,
                expandable: expandableRef,
                stickyExpandedRows: stickyExpandedRowsRef,
                renderExpandIcon: renderExpandIconRef,
                scrollbarProps: scrollbarPropsRef,
                setHeaderScrollLeft,
                handleMouseenterTable,
                handleVirtualListScroll,
                handleVirtualListResize,
                handleMouseleaveTable,
                virtualListContainer,
                virtualListContent,
                handleTableBodyScroll,
                handleCheckboxUpdateChecked,
                handleRadioUpdateChecked,
                handleUpdateExpanded,
                renderCell,
            },
            exposedMethods
        );
    },
    render() {
        const {
            mergedTheme,
            scrollX,
            mergedClsPrefix,
            virtualScroll,
            maxHeight,
            mergedTableLayout,
            flexHeight,
            loadingKeySet,
            onResize,
            setHeaderScrollLeft,
        } = this;
        const scrollable =
            scrollX !== void 0 || maxHeight !== void 0 || flexHeight;
        const isBasicAutoLayout = !scrollable && mergedTableLayout === 'auto';
        const xScrollable = scrollX !== void 0 || isBasicAutoLayout;
        const contentStyle = {
            minWidth: formatLength(scrollX) || '100%',
        };
        if (scrollX) contentStyle.width = '100%';
        const tableNode = h(
            NScrollbar,
            Object.assign({}, this.scrollbarProps, {
                ref: 'scrollbarInstRef',
                scrollable: scrollable || isBasicAutoLayout,
                class: `${mergedClsPrefix}-data-table-base-table-body`,
                style: this.bodyStyle,
                theme: mergedTheme.peers.Scrollbar,
                themeOverrides: mergedTheme.peerOverrides.Scrollbar,
                contentStyle,
                container: virtualScroll ? this.virtualListContainer : void 0,
                content: virtualScroll ? this.virtualListContent : void 0,
                horizontalRailStyle: { zIndex: 3 },
                verticalRailStyle: { zIndex: 3 },
                xScrollable,
                onScroll: virtualScroll ? void 0 : this.handleTableBodyScroll,
                internalOnUpdateScrollLeft: setHeaderScrollLeft,
                onResize,
            }),
            {
                default: () => {
                    const cordToPass = {};
                    const cordKey = {};
                    const {
                        cols,
                        paginatedDataAndInfo,
                        mergedTheme: mergedTheme2,
                        fixedColumnLeftMap,
                        fixedColumnRightMap,
                        currentPage,
                        rowClassName,
                        mergedSortState,
                        mergedExpandedRowKeySet,
                        stickyExpandedRows,
                        componentId,
                        childTriggerColIndex,
                        expandable,
                        rowProps,
                        handleMouseenterTable,
                        handleMouseleaveTable,
                        renderExpand,
                        summary,
                        handleCheckboxUpdateChecked,
                        handleRadioUpdateChecked,
                        handleUpdateExpanded,
                    } = this;
                    const { length: colCount } = cols;
                    let mergedData;
                    const { data: paginatedData, hasChildren } =
                        paginatedDataAndInfo;
                    const mergedPaginationData = hasChildren
                        ? flatten(paginatedData, mergedExpandedRowKeySet)
                        : paginatedData;
                    if (summary) {
                        const summaryRows = summary(this.rawPaginatedData);
                        if (Array.isArray(summaryRows)) {
                            const summaryRowData = summaryRows.map(
                                (row, i) => ({
                                    isSummaryRow: true,
                                    key: `__n_summary__${i}`,
                                    tmNode: {
                                        rawNode: row,
                                        disabled: true,
                                    },
                                    index: -1,
                                })
                            );
                            mergedData =
                                this.summaryPlacement === 'top'
                                    ? [
                                          ...summaryRowData,
                                          ...mergedPaginationData,
                                      ]
                                    : [
                                          ...mergedPaginationData,
                                          ...summaryRowData,
                                      ];
                        } else {
                            const summaryRowData = {
                                isSummaryRow: true,
                                key: '__n_summary__',
                                tmNode: {
                                    rawNode: summaryRows,
                                    disabled: true,
                                },
                                index: -1,
                            };
                            mergedData =
                                this.summaryPlacement === 'top'
                                    ? [summaryRowData, ...mergedPaginationData]
                                    : [...mergedPaginationData, summaryRowData];
                        }
                    } else {
                        mergedData = mergedPaginationData;
                    }
                    const indentStyle = hasChildren
                        ? { width: pxfy(this.indent) }
                        : void 0;
                    const displayedData = [];
                    mergedData.forEach((rowInfo) => {
                        if (
                            renderExpand &&
                            mergedExpandedRowKeySet.has(rowInfo.key) &&
                            (!expandable || expandable(rowInfo.tmNode.rawNode))
                        ) {
                            displayedData.push(rowInfo, {
                                isExpandedRow: true,
                                key: `${rowInfo.key}-expand`,
                                tmNode: rowInfo.tmNode,
                                index: rowInfo.index,
                            });
                        } else {
                            displayedData.push(rowInfo);
                        }
                    });
                    const { length: rowCount } = displayedData;
                    const rowIndexToKey = {};
                    paginatedData.forEach(({ tmNode }, rowIndex) => {
                        rowIndexToKey[rowIndex] = tmNode.key;
                    });
                    const bodyWidth = stickyExpandedRows
                        ? this.bodyWidth
                        : null;
                    const bodyWidthPx =
                        bodyWidth === null ? void 0 : `${bodyWidth}px`;
                    const renderRow = (
                        rowInfo,
                        displayedRowIndex,
                        isVirtual
                    ) => {
                        const { index: actualRowIndex } = rowInfo;
                        if ('isExpandedRow' in rowInfo) {
                            const {
                                tmNode: { key, rawNode },
                            } = rowInfo;
                            return h(
                                'tr',
                                {
                                    class: `${mergedClsPrefix}-data-table-tr`,
                                    key: `${key}__expand`,
                                },
                                h(
                                    'td',
                                    {
                                        class: [
                                            `${mergedClsPrefix}-data-table-td`,
                                            `${mergedClsPrefix}-data-table-td--last-col`,
                                            displayedRowIndex + 1 ===
                                                rowCount &&
                                                `${mergedClsPrefix}-data-table-td--last-row`,
                                        ],
                                        colspan: colCount,
                                    },
                                    stickyExpandedRows
                                        ? h(
                                              'div',
                                              {
                                                  class: `${mergedClsPrefix}-data-table-expand`,
                                                  style: {
                                                      width: bodyWidthPx,
                                                  },
                                              },
                                              renderExpand(
                                                  rawNode,
                                                  actualRowIndex
                                              )
                                          )
                                        : renderExpand(rawNode, actualRowIndex)
                                )
                            );
                        }
                        const isSummary = 'isSummaryRow' in rowInfo;
                        const striped = !isSummary && rowInfo.striped;
                        const { tmNode, key: rowKey } = rowInfo;
                        const { rawNode: rowData } = tmNode;
                        const expanded = mergedExpandedRowKeySet.has(rowKey);
                        const props = rowProps
                            ? rowProps(rowData, actualRowIndex)
                            : void 0;
                        const mergedRowClassName =
                            typeof rowClassName === 'string'
                                ? rowClassName
                                : createRowClassName(
                                      rowData,
                                      actualRowIndex,
                                      rowClassName
                                  );
                        const row = h(
                            'tr',
                            Object.assign(
                                {
                                    onMouseenter: () => {
                                        this.hoverKey = rowKey;
                                    },
                                    key: rowKey,
                                    class: [
                                        `${mergedClsPrefix}-data-table-tr`,
                                        isSummary &&
                                            `${mergedClsPrefix}-data-table-tr--summary`,
                                        striped &&
                                            `${mergedClsPrefix}-data-table-tr--striped`,
                                        mergedRowClassName,
                                    ],
                                },
                                props
                            ),
                            cols.map((col, colIndex) => {
                                var _a, _b, _c, _d, _e;
                                if (displayedRowIndex in cordToPass) {
                                    const cordOfRowToPass =
                                        cordToPass[displayedRowIndex];
                                    const indexInCordOfRowToPass =
                                        cordOfRowToPass.indexOf(colIndex);
                                    if (~indexInCordOfRowToPass) {
                                        cordOfRowToPass.splice(
                                            indexInCordOfRowToPass,
                                            1
                                        );
                                        return null;
                                    }
                                }
                                const { column } = col;
                                const colKey = getColKey(col);
                                const { rowSpan, colSpan } = column;
                                const mergedColSpan = isSummary
                                    ? ((_a = rowInfo.tmNode.rawNode[colKey]) ===
                                          null || _a === void 0
                                          ? void 0
                                          : _a.colSpan) || 1
                                    : colSpan
                                    ? colSpan(rowData, actualRowIndex)
                                    : 1;
                                const mergedRowSpan = isSummary
                                    ? ((_b = rowInfo.tmNode.rawNode[colKey]) ===
                                          null || _b === void 0
                                          ? void 0
                                          : _b.rowSpan) || 1
                                    : rowSpan
                                    ? rowSpan(rowData, actualRowIndex)
                                    : 1;
                                const isLastCol =
                                    colIndex + mergedColSpan === colCount;
                                const isLastRow =
                                    displayedRowIndex + mergedRowSpan ===
                                    rowCount;
                                const isCrossRowTd = mergedRowSpan > 1;
                                if (isCrossRowTd) {
                                    cordKey[displayedRowIndex] = {
                                        [colIndex]: [],
                                    };
                                }
                                if (mergedColSpan > 1 || isCrossRowTd) {
                                    for (
                                        let i = displayedRowIndex;
                                        i < displayedRowIndex + mergedRowSpan;
                                        ++i
                                    ) {
                                        if (isCrossRowTd) {
                                            cordKey[displayedRowIndex][
                                                colIndex
                                            ].push(rowIndexToKey[i]);
                                        }
                                        for (
                                            let j = colIndex;
                                            j < colIndex + mergedColSpan;
                                            ++j
                                        ) {
                                            if (
                                                i === displayedRowIndex &&
                                                j === colIndex
                                            ) {
                                                continue;
                                            }
                                            if (!(i in cordToPass)) {
                                                cordToPass[i] = [j];
                                            } else {
                                                cordToPass[i].push(j);
                                            }
                                        }
                                    }
                                }
                                const hoverKey = isCrossRowTd
                                    ? this.hoverKey
                                    : null;
                                const { cellProps } = column;
                                const resolvedCellProps =
                                    cellProps === null || cellProps === void 0
                                        ? void 0
                                        : cellProps(rowData, actualRowIndex);
                                return h(
                                    'td',
                                    Object.assign({}, resolvedCellProps, {
                                        key: colKey,
                                        style: [
                                            {
                                                textAlign:
                                                    column.align || void 0,
                                                left: pxfy(
                                                    (_c =
                                                        fixedColumnLeftMap[
                                                            colKey
                                                        ]) === null ||
                                                        _c === void 0
                                                        ? void 0
                                                        : _c.start
                                                ),
                                                right: pxfy(
                                                    (_d =
                                                        fixedColumnRightMap[
                                                            colKey
                                                        ]) === null ||
                                                        _d === void 0
                                                        ? void 0
                                                        : _d.start
                                                ),
                                            },
                                            (resolvedCellProps === null ||
                                            resolvedCellProps === void 0
                                                ? void 0
                                                : resolvedCellProps.style) ||
                                                '',
                                        ],
                                        colspan: mergedColSpan,
                                        rowspan: isVirtual
                                            ? void 0
                                            : mergedRowSpan,
                                        'data-col-key': colKey,
                                        class: [
                                            `${mergedClsPrefix}-data-table-td`,
                                            column.className,
                                            resolvedCellProps === null ||
                                            resolvedCellProps === void 0
                                                ? void 0
                                                : resolvedCellProps.class,
                                            isSummary &&
                                                `${mergedClsPrefix}-data-table-td--summary`,
                                            ((hoverKey !== null &&
                                                cordKey[displayedRowIndex][
                                                    colIndex
                                                ].includes(hoverKey)) ||
                                                isColumnSorting(
                                                    column,
                                                    mergedSortState
                                                )) &&
                                                `${mergedClsPrefix}-data-table-td--hover`,
                                            column.fixed &&
                                                `${mergedClsPrefix}-data-table-td--fixed-${column.fixed}`,
                                            column.align &&
                                                `${mergedClsPrefix}-data-table-td--${column.align}-align`,
                                            column.type === 'selection' &&
                                                `${mergedClsPrefix}-data-table-td--selection`,
                                            column.type === 'expand' &&
                                                `${mergedClsPrefix}-data-table-td--expand`,
                                            isLastCol &&
                                                `${mergedClsPrefix}-data-table-td--last-col`,
                                            isLastRow &&
                                                `${mergedClsPrefix}-data-table-td--last-row`,
                                        ],
                                    }),
                                    hasChildren &&
                                        colIndex === childTriggerColIndex
                                        ? [
                                              repeat(
                                                  isSummary
                                                      ? 0
                                                      : rowInfo.tmNode.level,
                                                  h('div', {
                                                      class: `${mergedClsPrefix}-data-table-indent`,
                                                      style: indentStyle,
                                                  })
                                              ),
                                              isSummary || rowInfo.tmNode.isLeaf
                                                  ? h('div', {
                                                        class: `${mergedClsPrefix}-data-table-expand-placeholder`,
                                                    })
                                                  : h(ExpandTrigger, {
                                                        class: `${mergedClsPrefix}-data-table-expand-trigger`,
                                                        clsPrefix:
                                                            mergedClsPrefix,
                                                        expanded,
                                                        renderExpandIcon:
                                                            this
                                                                .renderExpandIcon,
                                                        loading:
                                                            loadingKeySet.has(
                                                                rowInfo.key
                                                            ),
                                                        onClick: () => {
                                                            handleUpdateExpanded(
                                                                rowKey,
                                                                rowInfo.tmNode
                                                            );
                                                        },
                                                    }),
                                          ]
                                        : null,
                                    column.type === 'selection'
                                        ? !isSummary
                                            ? column.multiple === false
                                                ? h(RenderSafeRadio, {
                                                      key: currentPage,
                                                      rowKey,
                                                      disabled:
                                                          rowInfo.tmNode
                                                              .disabled,
                                                      onUpdateChecked: () =>
                                                          handleRadioUpdateChecked(
                                                              rowInfo.tmNode
                                                          ),
                                                  })
                                                : h(RenderSafeCheckbox, {
                                                      key: currentPage,
                                                      rowKey,
                                                      disabled:
                                                          rowInfo.tmNode
                                                              .disabled,
                                                      onUpdateChecked: (
                                                          checked,
                                                          e
                                                      ) =>
                                                          handleCheckboxUpdateChecked(
                                                              rowInfo.tmNode,
                                                              checked,
                                                              e.shiftKey
                                                          ),
                                                  })
                                            : null
                                        : column.type === 'expand'
                                        ? !isSummary
                                            ? !column.expandable ||
                                              ((_e = column.expandable) ===
                                                  null || _e === void 0
                                                  ? void 0
                                                  : _e.call(column, rowData))
                                                ? h(ExpandTrigger, {
                                                      clsPrefix:
                                                          mergedClsPrefix,
                                                      expanded,
                                                      renderExpandIcon:
                                                          this.renderExpandIcon,
                                                      onClick: () =>
                                                          handleUpdateExpanded(
                                                              rowKey,
                                                              null
                                                          ),
                                                  })
                                                : null
                                            : null
                                        : h(Cell, {
                                              clsPrefix: mergedClsPrefix,
                                              index: actualRowIndex,
                                              row: rowData,
                                              column,
                                              isSummary,
                                              mergedTheme: mergedTheme2,
                                              renderCell: this.renderCell,
                                          })
                                );
                            })
                        );
                        return row;
                    };
                    if (!virtualScroll) {
                        return h(
                            'table',
                            {
                                class: `${mergedClsPrefix}-data-table-table`,
                                onMouseleave: handleMouseleaveTable,
                                onMouseenter: handleMouseenterTable,
                                style: {
                                    tableLayout: this.mergedTableLayout,
                                },
                            },
                            h(
                                'colgroup',
                                null,
                                cols.map((col) =>
                                    h('col', { key: col.key, style: col.style })
                                )
                            ),
                            this.showHeader
                                ? h(TableHeader, { discrete: false })
                                : null,
                            !this.empty
                                ? h(
                                      'tbody',
                                      {
                                          'data-n-id': componentId,
                                          class: `${mergedClsPrefix}-data-table-tbody`,
                                      },
                                      displayedData.map(
                                          (rowInfo, displayedRowIndex) => {
                                              return renderRow(
                                                  rowInfo,
                                                  displayedRowIndex,
                                                  false
                                              );
                                          }
                                      )
                                  )
                                : null
                        );
                    } else {
                        return h(
                            VirtualList,
                            {
                                ref: 'virtualListRef',
                                items: displayedData,
                                itemSize: 28,
                                visibleItemsTag: VirtualListItemWrapper,
                                visibleItemsProps: {
                                    clsPrefix: mergedClsPrefix,
                                    id: componentId,
                                    cols,
                                    onMouseenter: handleMouseenterTable,
                                    onMouseleave: handleMouseleaveTable,
                                },
                                showScrollbar: false,
                                onResize: this.handleVirtualListResize,
                                onScroll: this.handleVirtualListScroll,
                                itemsStyle: contentStyle,
                                itemResizable: true,
                            },
                            {
                                default: ({ item, index }) =>
                                    renderRow(item, index, true),
                            }
                        );
                    }
                },
            }
        );
        if (this.empty) {
            const createEmptyNode = () =>
                h(
                    'div',
                    {
                        class: [
                            `${mergedClsPrefix}-data-table-empty`,
                            this.loading &&
                                `${mergedClsPrefix}-data-table-empty--hide`,
                        ],
                        style: this.bodyStyle,
                        ref: 'emptyElRef',
                    },
                    resolveSlot(this.dataTableSlots.empty, () => [
                        h(NEmpty, {
                            theme: this.mergedTheme.peers.Empty,
                            themeOverrides:
                                this.mergedTheme.peerOverrides.Empty,
                        }),
                    ])
                );
            if (this.shouldDisplaySomeTablePart) {
                return h(Fragment, null, tableNode, createEmptyNode());
            } else {
                return h(
                    VResizeObserver,
                    { onResize: this.onResize },
                    { default: createEmptyNode }
                );
            }
        }
        return tableNode;
    },
});
