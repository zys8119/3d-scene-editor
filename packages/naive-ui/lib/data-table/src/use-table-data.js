Object.defineProperty(exports, '__esModule', { value: true });
exports.useTableData = void 0;
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const treemate_1 = require('treemate');
const _utils_1 = require('../../_utils');
const utils_1 = require('./utils');
const use_sorter_1 = require('./use-sorter');
function useTableData(props, { dataRelatedColsRef }) {
    const selectionColumnRef = (0, vue_1.computed)(() => {
        const getSelectionColumn = (cols) => {
            for (let i = 0; i < cols.length; ++i) {
                const col = cols[i];
                if ('children' in col) {
                    return getSelectionColumn(col.children);
                } else if (col.type === 'selection') {
                    return col;
                }
            }
            return null;
        };
        return getSelectionColumn(props.columns);
    });
    const treeMateRef = (0, vue_1.computed)(() => {
        const { childrenKey } = props;
        return (0, treemate_1.createTreeMate)(props.data, {
            ignoreEmptyChildren: true,
            getKey: props.rowKey,
            getChildren: (rowData) => rowData[childrenKey],
            getDisabled: (rowData) => {
                var _a, _b;
                if (
                    (_b =
                        (_a = selectionColumnRef.value) === null ||
                        _a === void 0
                            ? void 0
                            : _a.disabled) === null || _b === void 0
                        ? void 0
                        : _b.call(_a, rowData)
                ) {
                    return true;
                }
                return false;
            },
        });
    });
    const childTriggerColIndexRef = (0, vooks_1.useMemo)(() => {
        const { columns } = props;
        const { length } = columns;
        let firstContentfulColIndex = null;
        for (let i = 0; i < length; ++i) {
            const col = columns[i];
            if (!col.type && firstContentfulColIndex === null) {
                firstContentfulColIndex = i;
            }
            if ('tree' in col && col.tree) {
                return i;
            }
        }
        return firstContentfulColIndex || 0;
    });
    const uncontrolledFilterStateRef = (0, vue_1.ref)({});
    const uncontrolledCurrentPageRef = (0, vue_1.ref)(1);
    const uncontrolledPageSizeRef = (0, vue_1.ref)(10);
    const mergedFilterStateRef = (0, vue_1.computed)(() => {
        const columnsWithControlledFilter = dataRelatedColsRef.value.filter(
            (column) => {
                return (
                    column.filterOptionValues !== void 0 ||
                    column.filterOptionValue !== void 0
                );
            }
        );
        const controlledFilterState = {};
        columnsWithControlledFilter.forEach((column) => {
            var _a;
            if (column.type === 'selection' || column.type === 'expand') return;
            if (column.filterOptionValues === void 0) {
                controlledFilterState[column.key] =
                    (_a = column.filterOptionValue) !== null && _a !== void 0
                        ? _a
                        : null;
            } else {
                controlledFilterState[column.key] = column.filterOptionValues;
            }
        });
        const activeFilters = Object.assign(
            (0, utils_1.createShallowClonedObject)(
                uncontrolledFilterStateRef.value
            ),
            controlledFilterState
        );
        return activeFilters;
    });
    const filteredDataRef = (0, vue_1.computed)(() => {
        const mergedFilterState = mergedFilterStateRef.value;
        const { columns } = props;
        function createDefaultFilter(columnKey) {
            return (filterOptionValue, row) =>
                !!~String(row[columnKey]).indexOf(String(filterOptionValue));
        }
        const {
            value: { treeNodes: data },
        } = treeMateRef;
        const columnEntries = [];
        columns.forEach((column) => {
            if (
                column.type === 'selection' ||
                column.type === 'expand' ||
                'children' in column
            ) {
                return;
            }
            columnEntries.push([column.key, column]);
        });
        return data
            ? data.filter((tmNode) => {
                  const { rawNode: row } = tmNode;
                  for (const [columnKey, column] of columnEntries) {
                      let activeFilterOptionValues =
                          mergedFilterState[columnKey];
                      if (activeFilterOptionValues == null) continue;
                      if (!Array.isArray(activeFilterOptionValues)) {
                          activeFilterOptionValues = [activeFilterOptionValues];
                      }
                      if (!activeFilterOptionValues.length) continue;
                      const filter2 =
                          column.filter === 'default'
                              ? createDefaultFilter(columnKey)
                              : column.filter;
                      if (column && typeof filter2 === 'function') {
                          if (column.filterMode === 'and') {
                              if (
                                  activeFilterOptionValues.some(
                                      (filterOptionValue) =>
                                          !filter2(filterOptionValue, row)
                                  )
                              ) {
                                  return false;
                              }
                          } else {
                              if (
                                  activeFilterOptionValues.some(
                                      (filterOptionValue) =>
                                          filter2(filterOptionValue, row)
                                  )
                              ) {
                                  continue;
                              } else {
                                  return false;
                              }
                          }
                      }
                  }
                  return true;
              })
            : [];
    });
    const {
        sortedDataRef,
        deriveNextSorter,
        mergedSortStateRef,
        sort,
        clearSorter,
    } = (0, use_sorter_1.useSorter)(props, {
        dataRelatedColsRef,
        filteredDataRef,
    });
    dataRelatedColsRef.value.forEach((column) => {
        var _a;
        if (column.filter) {
            const defaultFilterOptionValues = column.defaultFilterOptionValues;
            if (column.filterMultiple) {
                uncontrolledFilterStateRef.value[column.key] =
                    defaultFilterOptionValues || [];
            } else if (defaultFilterOptionValues !== void 0) {
                uncontrolledFilterStateRef.value[column.key] =
                    defaultFilterOptionValues === null
                        ? []
                        : defaultFilterOptionValues;
            } else {
                uncontrolledFilterStateRef.value[column.key] =
                    (_a = column.defaultFilterOptionValue) !== null &&
                    _a !== void 0
                        ? _a
                        : null;
            }
        }
    });
    const controlledCurrentPageRef = (0, vue_1.computed)(() => {
        const { pagination } = props;
        if (pagination === false) return void 0;
        return pagination.page;
    });
    const controlledPageSizeRef = (0, vue_1.computed)(() => {
        const { pagination } = props;
        if (pagination === false) return void 0;
        return pagination.pageSize;
    });
    const _mergedCurrentPageRef = (0, vooks_1.useMergedState)(
        controlledCurrentPageRef,
        uncontrolledCurrentPageRef
    );
    const mergedPageSizeRef = (0, vooks_1.useMergedState)(
        controlledPageSizeRef,
        uncontrolledPageSizeRef
    );
    const boundedMergedCurrentPageRef = (0, vooks_1.useMemo)(() => {
        const page2 = _mergedCurrentPageRef.value;
        return props.remote
            ? page2
            : Math.max(
                  1,
                  Math.min(
                      Math.ceil(
                          filteredDataRef.value.length / mergedPageSizeRef.value
                      ),
                      page2
                  )
              );
    });
    const mergedPageCountRef = (0, vue_1.computed)(() => {
        const { pagination } = props;
        if (pagination) {
            const { pageCount } = pagination;
            if (pageCount !== void 0) return pageCount;
        }
        return void 0;
    });
    const paginatedDataRef = (0, vue_1.computed)(() => {
        if (props.remote) return treeMateRef.value.treeNodes;
        if (!props.pagination) return sortedDataRef.value;
        const pageSize = mergedPageSizeRef.value;
        const startIndex = (boundedMergedCurrentPageRef.value - 1) * pageSize;
        return sortedDataRef.value.slice(startIndex, startIndex + pageSize);
    });
    const rawPaginatedDataRef = (0, vue_1.computed)(() => {
        return paginatedDataRef.value.map((tmNode) => tmNode.rawNode);
    });
    function mergedOnUpdatePage(page2) {
        const { pagination } = props;
        if (pagination) {
            const {
                onChange,
                'onUpdate:page': _onUpdatePage,
                onUpdatePage,
            } = pagination;
            if (onChange) (0, _utils_1.call)(onChange, page2);
            if (onUpdatePage) (0, _utils_1.call)(onUpdatePage, page2);
            if (_onUpdatePage) (0, _utils_1.call)(_onUpdatePage, page2);
            doUpdatePage(page2);
        }
    }
    function mergedOnUpdatePageSize(pageSize) {
        const { pagination } = props;
        if (pagination) {
            const {
                onPageSizeChange,
                'onUpdate:pageSize': _onUpdatePageSize,
                onUpdatePageSize,
            } = pagination;
            if (onPageSizeChange)
                (0, _utils_1.call)(onPageSizeChange, pageSize);
            if (onUpdatePageSize)
                (0, _utils_1.call)(onUpdatePageSize, pageSize);
            if (_onUpdatePageSize)
                (0, _utils_1.call)(_onUpdatePageSize, pageSize);
            doUpdatePageSize(pageSize);
        }
    }
    const mergedItemCountRef = (0, vue_1.computed)(() => {
        if (props.remote) {
            const { pagination } = props;
            if (pagination) {
                const { itemCount } = pagination;
                if (itemCount !== void 0) return itemCount;
            }
            return void 0;
        }
        return filteredDataRef.value.length;
    });
    const mergedPaginationRef = (0, vue_1.computed)(() => {
        return Object.assign(Object.assign({}, props.pagination), {
            onChange: void 0,
            onUpdatePage: void 0,
            onUpdatePageSize: void 0,
            onPageSizeChange: void 0,
            'onUpdate:page': mergedOnUpdatePage,
            'onUpdate:pageSize': mergedOnUpdatePageSize,
            page: boundedMergedCurrentPageRef.value,
            pageSize: mergedPageSizeRef.value,
            pageCount:
                mergedItemCountRef.value === void 0
                    ? mergedPageCountRef.value
                    : void 0,
            itemCount: mergedItemCountRef.value,
        });
    });
    function doUpdatePage(page2) {
        const {
            'onUpdate:page': _onUpdatePage,
            onPageChange,
            onUpdatePage,
        } = props;
        if (onUpdatePage) (0, _utils_1.call)(onUpdatePage, page2);
        if (_onUpdatePage) (0, _utils_1.call)(_onUpdatePage, page2);
        if (onPageChange) (0, _utils_1.call)(onPageChange, page2);
        uncontrolledCurrentPageRef.value = page2;
    }
    function doUpdatePageSize(pageSize) {
        const {
            'onUpdate:pageSize': _onUpdatePageSize,
            onPageSizeChange,
            onUpdatePageSize,
        } = props;
        if (onPageSizeChange) (0, _utils_1.call)(onPageSizeChange, pageSize);
        if (onUpdatePageSize) (0, _utils_1.call)(onUpdatePageSize, pageSize);
        if (_onUpdatePageSize) (0, _utils_1.call)(_onUpdatePageSize, pageSize);
        uncontrolledPageSizeRef.value = pageSize;
    }
    function doUpdateFilters(filters2, sourceColumn) {
        const {
            onUpdateFilters,
            'onUpdate:filters': _onUpdateFilters,
            onFiltersChange,
        } = props;
        if (onUpdateFilters)
            (0, _utils_1.call)(onUpdateFilters, filters2, sourceColumn);
        if (_onUpdateFilters)
            (0, _utils_1.call)(_onUpdateFilters, filters2, sourceColumn);
        if (onFiltersChange)
            (0, _utils_1.call)(onFiltersChange, filters2, sourceColumn);
        uncontrolledFilterStateRef.value = filters2;
    }
    function onUnstableColumnResize(
        resizedWidth,
        limitedWidth,
        column,
        getColumnWidth
    ) {
        var _a;
        (_a = props.onUnstableColumnResize) === null || _a === void 0
            ? void 0
            : _a.call(
                  props,
                  resizedWidth,
                  limitedWidth,
                  column,
                  getColumnWidth
              );
    }
    function page(page2) {
        doUpdatePage(page2);
    }
    function clearFilter() {
        clearFilters();
    }
    function clearFilters() {
        filters({});
    }
    function filters(filters2) {
        filter(filters2);
    }
    function filter(filters2) {
        if (!filters2) {
            uncontrolledFilterStateRef.value = {};
        } else if (filters2) {
            uncontrolledFilterStateRef.value = (0,
            utils_1.createShallowClonedObject)(filters2);
        } else if (process.env.NODE_ENV !== 'production') {
            (0, _utils_1.warn)('data-table', '`filters` is not an object');
        }
    }
    return {
        treeMateRef,
        mergedCurrentPageRef: boundedMergedCurrentPageRef,
        mergedPaginationRef,
        paginatedDataRef,
        rawPaginatedDataRef,
        mergedFilterStateRef,
        mergedSortStateRef,
        hoverKeyRef: (0, vue_1.ref)(null),
        selectionColumnRef,
        childTriggerColIndexRef,
        doUpdateFilters,
        deriveNextSorter,
        doUpdatePageSize,
        doUpdatePage,
        onUnstableColumnResize,
        filter,
        filters,
        clearFilter,
        clearFilters,
        clearSorter,
        page,
        sort,
    };
}
exports.useTableData = useTableData;
