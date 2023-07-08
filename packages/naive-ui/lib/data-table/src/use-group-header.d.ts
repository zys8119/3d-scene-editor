import { CSSProperties, ComputedRef } from 'vue';
import type {
    TableExpandColumn,
    TableSelectionColumn,
    TableColumn,
    TableBaseColumn,
    ColumnKey,
    DataTableSetupProps,
} from './interface';
export interface RowItem {
    colSpan: number;
    rowSpan: number;
    column: TableColumn;
    isLast: boolean;
}
export interface ColItem {
    key: string | number;
    style: CSSProperties;
    column: TableSelectionColumn | TableExpandColumn | TableBaseColumn;
}
export declare function useGroupHeader(
    props: DataTableSetupProps,
    getResizableWidth: (key: ColumnKey) => number | undefined
): {
    rowsRef: ComputedRef<RowItem[][]>;
    colsRef: ComputedRef<ColItem[]>;
    hasEllipsisRef: ComputedRef<boolean>;
    dataRelatedColsRef: ComputedRef<
        Array<TableSelectionColumn | TableBaseColumn | TableExpandColumn>
    >;
};
