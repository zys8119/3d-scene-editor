import { computed } from 'vue';
import { formatLength } from '../../_utils';
import { getColKey, createCustomWidthStyle } from './utils';
function getRowsAndCols(columns, getResizableWidth) {
    const rows = [];
    const cols = [];
    const dataRelatedCols = [];
    const rowItemMap = /* @__PURE__ */ new WeakMap();
    let maxDepth = -1;
    let totalRowSpan = 0;
    let hasEllipsis = false;
    function ensureMaxDepth(columns2, currentDepth) {
        if (currentDepth > maxDepth) {
            rows[currentDepth] = [];
            maxDepth = currentDepth;
        }
        for (const column of columns2) {
            if ('children' in column) {
                ensureMaxDepth(column.children, currentDepth + 1);
            } else {
                const key = 'key' in column ? column.key : void 0;
                cols.push({
                    key: getColKey(column),
                    style: createCustomWidthStyle(
                        column,
                        key !== void 0
                            ? formatLength(getResizableWidth(key))
                            : void 0
                    ),
                    column,
                });
                totalRowSpan += 1;
                if (!hasEllipsis) {
                    hasEllipsis = !!column.ellipsis;
                }
                dataRelatedCols.push(column);
            }
        }
    }
    ensureMaxDepth(columns, 0);
    let currentLeafIndex = 0;
    function ensureColLayout(columns2, currentDepth) {
        let hideUntilIndex = 0;
        columns2.forEach((column, index) => {
            var _a;
            if ('children' in column) {
                const cachedCurrentLeafIndex = currentLeafIndex;
                const rowItem = {
                    column,
                    colSpan: 0,
                    rowSpan: 1,
                    isLast: false,
                };
                ensureColLayout(column.children, currentDepth + 1);
                column.children.forEach((childColumn) => {
                    var _a2, _b;
                    rowItem.colSpan +=
                        (_b =
                            (_a2 = rowItemMap.get(childColumn)) === null ||
                            _a2 === void 0
                                ? void 0
                                : _a2.colSpan) !== null && _b !== void 0
                            ? _b
                            : 0;
                });
                if (cachedCurrentLeafIndex + rowItem.colSpan === totalRowSpan) {
                    rowItem.isLast = true;
                }
                rowItemMap.set(column, rowItem);
                rows[currentDepth].push(rowItem);
            } else {
                if (currentLeafIndex < hideUntilIndex) {
                    currentLeafIndex += 1;
                    return;
                }
                let colSpan = 1;
                if ('titleColSpan' in column) {
                    colSpan =
                        (_a = column.titleColSpan) !== null && _a !== void 0
                            ? _a
                            : 1;
                }
                if (colSpan > 1) {
                    hideUntilIndex = currentLeafIndex + colSpan;
                }
                const isLast = currentLeafIndex + colSpan === totalRowSpan;
                const rowItem = {
                    column,
                    colSpan,
                    rowSpan: maxDepth - currentDepth + 1,
                    isLast,
                };
                rowItemMap.set(column, rowItem);
                rows[currentDepth].push(rowItem);
                currentLeafIndex += 1;
            }
        });
    }
    ensureColLayout(columns, 0);
    return {
        hasEllipsis,
        rows,
        cols,
        dataRelatedCols,
    };
}
export function useGroupHeader(props, getResizableWidth) {
    const rowsAndCols = computed(() =>
        getRowsAndCols(props.columns, getResizableWidth)
    );
    return {
        rowsRef: computed(() => rowsAndCols.value.rows),
        colsRef: computed(() => rowsAndCols.value.cols),
        hasEllipsisRef: computed(() => rowsAndCols.value.hasEllipsis),
        dataRelatedColsRef: computed(() => rowsAndCols.value.dataRelatedCols),
    };
}
