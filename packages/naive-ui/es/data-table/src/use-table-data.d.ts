import { ComputedRef } from 'vue';
import type { PaginationProps } from '../../pagination/src/Pagination';
import type {
    ColumnKey,
    FilterState,
    TableBaseColumn,
    TableSelectionColumn,
    InternalRowData,
    TmNode,
    TableExpandColumn,
    RowKey,
    DataTableSetupProps,
} from './interface';
export declare function useTableData(
    props: DataTableSetupProps,
    {
        dataRelatedColsRef,
    }: {
        dataRelatedColsRef: ComputedRef<
            Array<TableSelectionColumn | TableBaseColumn | TableExpandColumn>
        >;
    }
): {
    treeMateRef: ComputedRef<
        import('treemate').TreeMate<
            InternalRowData,
            InternalRowData,
            InternalRowData
        >
    >;
    mergedCurrentPageRef: ComputedRef<number>;
    mergedPaginationRef: ComputedRef<PaginationProps>;
    paginatedDataRef: ComputedRef<TmNode[]>;
    rawPaginatedDataRef: ComputedRef<InternalRowData[]>;
    mergedFilterStateRef: ComputedRef<FilterState>;
    mergedSortStateRef: ComputedRef<
        {
            columnKey: ColumnKey;
            order: import('./interface').SortOrder;
            sorter:
                | boolean
                | 'default'
                | import('./interface').CompareFn<InternalRowData>
                | {
                      multiple: number;
                      compare?:
                          | 'default'
                          | import('./interface').CompareFn<InternalRowData>
                          | undefined;
                  };
        }[]
    >;
    hoverKeyRef: globalThis.Ref<RowKey | null>;
    selectionColumnRef: ComputedRef<TableSelectionColumn<InternalRowData> | null>;
    childTriggerColIndexRef: ComputedRef<number>;
    doUpdateFilters: (
        filters: FilterState,
        sourceColumn: TableBaseColumn
    ) => void;
    deriveNextSorter: (
        sortState: import('./interface').SortState | null
    ) => void;
    doUpdatePageSize: (pageSize: number) => void;
    doUpdatePage: (page: number) => void;
    onUnstableColumnResize: (
        resizedWidth: number,
        limitedWidth: number,
        column: TableBaseColumn,
        getColumnWidth: (key: ColumnKey) => number | undefined
    ) => void;
    filter: (filters: FilterState | null) => void;
    filters: (filters: FilterState | null) => void;
    clearFilter: () => void;
    clearFilters: () => void;
    clearSorter: () => void;
    page: (page: number) => void;
    sort: (
        columnKey: ColumnKey,
        order?: import('./interface').SortOrder
    ) => void;
};
