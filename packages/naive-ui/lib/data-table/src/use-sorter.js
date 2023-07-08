Object.defineProperty(exports, '__esModule', { value: true });
exports.useSorter = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../../_utils');
const utils_1 = require('./utils');
function getMultiplePriority(sorter) {
    if (typeof sorter === 'object' && typeof sorter.multiple === 'number') {
        return sorter.multiple;
    }
    return false;
}
function getSortFunction(sorter, columnKey) {
    if (
        columnKey &&
        (sorter === void 0 ||
            sorter === 'default' ||
            (typeof sorter === 'object' && sorter.compare === 'default'))
    ) {
        return getDefaultSorterFn(columnKey);
    }
    if (typeof sorter === 'function') {
        return sorter;
    }
    if (
        sorter &&
        typeof sorter === 'object' &&
        sorter.compare &&
        sorter.compare !== 'default'
    ) {
        return sorter.compare;
    }
    return false;
}
function getDefaultSorterFn(columnKey) {
    return (row1, row2) => {
        const value1 = row1[columnKey];
        const value2 = row2[columnKey];
        if (typeof value1 === 'number' && typeof value2 === 'number') {
            return value1 - value2;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
            return value1.localeCompare(value2);
        }
        return 0;
    };
}
function useSorter(props, { dataRelatedColsRef, filteredDataRef }) {
    const defaultSortState = [];
    dataRelatedColsRef.value.forEach((column) => {
        var _a;
        if (column.sorter !== void 0) {
            updateSortStatesByNewSortState(defaultSortState, {
                columnKey: column.key,
                sorter: column.sorter,
                order:
                    (_a = column.defaultSortOrder) !== null && _a !== void 0
                        ? _a
                        : false,
            });
        }
    });
    const uncontrolledSortStateRef = (0, vue_1.ref)(defaultSortState);
    const mergedSortStateRef = (0, vue_1.computed)(() => {
        const columnsWithControlledSortOrder = dataRelatedColsRef.value.filter(
            (column) =>
                column.type !== 'selection' &&
                column.sorter !== void 0 &&
                (column.sortOrder === 'ascend' ||
                    column.sortOrder === 'descend' ||
                    column.sortOrder === false)
        );
        const columnToSort = columnsWithControlledSortOrder.filter(
            (col) => col.sortOrder !== false
        );
        if (columnToSort.length) {
            return columnToSort.map((column) => {
                return {
                    columnKey: column.key,
                    order: column.sortOrder,
                    sorter: column.sorter,
                };
            });
        }
        if (columnsWithControlledSortOrder.length) return [];
        const { value: uncontrolledSortState } = uncontrolledSortStateRef;
        if (Array.isArray(uncontrolledSortState)) {
            return uncontrolledSortState;
        } else if (uncontrolledSortState) {
            return [uncontrolledSortState];
        } else {
            return [];
        }
    });
    const sortedDataRef = (0, vue_1.computed)(() => {
        const activeSorters = mergedSortStateRef.value.slice().sort((a, b) => {
            const item1Priority = getMultiplePriority(a.sorter) || 0;
            const item2Priority = getMultiplePriority(b.sorter) || 0;
            return item2Priority - item1Priority;
        });
        if (activeSorters.length) {
            const filteredData = filteredDataRef.value.slice();
            return filteredData.sort((tmNode1, tmNode2) => {
                let compareResult = 0;
                activeSorters.some((sorterState) => {
                    const { columnKey, sorter, order } = sorterState;
                    const compareFn = getSortFunction(sorter, columnKey);
                    if (compareFn && order) {
                        compareResult = compareFn(
                            tmNode1.rawNode,
                            tmNode2.rawNode
                        );
                        if (compareResult !== 0) {
                            compareResult =
                                compareResult *
                                (0, utils_1.getFlagOfOrder)(order);
                            return true;
                        }
                    }
                    return false;
                });
                return compareResult;
            });
        }
        return filteredDataRef.value;
    });
    function getUpdatedSorterState(sortState) {
        let currentSortState = mergedSortStateRef.value.slice();
        if (sortState && getMultiplePriority(sortState.sorter) !== false) {
            currentSortState = currentSortState.filter(
                (sortState2) => getMultiplePriority(sortState2.sorter) !== false
            );
            updateSortStatesByNewSortState(currentSortState, sortState);
            return currentSortState;
        } else if (sortState) {
            return sortState;
        }
        return null;
    }
    function deriveNextSorter(sortState) {
        const nextSorterState = getUpdatedSorterState(sortState);
        doUpdateSorter(nextSorterState);
    }
    function doUpdateSorter(sortState) {
        const {
            'onUpdate:sorter': _onUpdateSorter,
            onUpdateSorter,
            onSorterChange,
        } = props;
        if (_onUpdateSorter) {
            (0, _utils_1.call)(_onUpdateSorter, sortState);
        }
        if (onUpdateSorter) {
            (0, _utils_1.call)(onUpdateSorter, sortState);
        }
        if (onSorterChange) {
            (0, _utils_1.call)(onSorterChange, sortState);
        }
        uncontrolledSortStateRef.value = sortState;
    }
    function sort(columnKey, order = 'ascend') {
        if (!columnKey) {
            clearSorter();
        } else {
            const columnToSort = dataRelatedColsRef.value.find(
                (column) =>
                    column.type !== 'selection' &&
                    column.type !== 'expand' &&
                    column.key === columnKey
            );
            if (
                !(columnToSort === null || columnToSort === void 0
                    ? void 0
                    : columnToSort.sorter)
            )
                return;
            const sorter = columnToSort.sorter;
            deriveNextSorter({
                columnKey,
                sorter,
                order,
            });
        }
    }
    function clearSorter() {
        doUpdateSorter(null);
    }
    function updateSortStatesByNewSortState(sortStates, sortState) {
        const index = sortStates.findIndex(
            (state) =>
                (sortState === null || sortState === void 0
                    ? void 0
                    : sortState.columnKey) &&
                state.columnKey === sortState.columnKey
        );
        if (index !== void 0 && index >= 0) {
            sortStates[index] = sortState;
        } else {
            sortStates.push(sortState);
        }
    }
    return {
        clearSorter,
        sort,
        sortedDataRef,
        mergedSortStateRef,
        deriveNextSorter,
    };
}
exports.useSorter = useSorter;
