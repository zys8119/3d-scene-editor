import { ComputedRef } from 'vue';
import type {
    ColumnKey,
    InternalRowData,
    SortOrder,
    SortState,
    TmNode,
    TableBaseColumn,
    TableExpandColumn,
    TableSelectionColumn,
    CompareFn,
    DataTableSetupProps,
} from './interface';
export declare function useSorter(
    props: DataTableSetupProps,
    {
        dataRelatedColsRef,
        filteredDataRef,
    }: {
        dataRelatedColsRef: ComputedRef<
            Array<TableSelectionColumn | TableBaseColumn | TableExpandColumn>
        >;
        filteredDataRef: ComputedRef<TmNode[]>;
    }
): {
    clearSorter: () => void;
    sort: (columnKey: ColumnKey, order?: SortOrder) => void;
    sortedDataRef: ComputedRef<TmNode[]>;
    mergedSortStateRef: ComputedRef<
        {
            columnKey: ColumnKey;
            order: SortOrder;
            sorter:
                | boolean
                | 'default'
                | CompareFn<InternalRowData>
                | {
                      multiple: number;
                      compare?:
                          | 'default'
                          | CompareFn<InternalRowData>
                          | undefined;
                  };
        }[]
    >;
    deriveNextSorter: (sortState: SortState | null) => void;
};
