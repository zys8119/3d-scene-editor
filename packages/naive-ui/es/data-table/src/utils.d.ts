import { CSSProperties } from 'vue';
import type {
    SortOrder,
    TableBaseColumn,
    InternalRowData,
    SortOrderFlag,
    SortState,
    CreateRowClassName,
    TableSelectionColumn,
    TableColumn,
    TableExpandColumn,
} from './interface';
export declare const SELECTION_COL_WIDTH = 40;
export declare const EXPAND_COL_WIDTH = 40;
export declare function getNumberColWidth(col: TableColumn): number | undefined;
export declare function getStringColWidth(col: TableColumn): string | undefined;
export declare function getColKey(col: TableColumn): string | number;
export declare function createShallowClonedObject<T>(object: T): T;
export declare function getFlagOfOrder(order: SortOrder): SortOrderFlag;
export declare function clampValueFollowCSSRules(
    value: number,
    min?: number | string,
    max?: number | string
): number;
export declare function createCustomWidthStyle(
    column: TableBaseColumn | TableSelectionColumn | TableExpandColumn,
    resizedWidth?: string
): CSSProperties;
export declare function createRowClassName(
    row: InternalRowData,
    index: number,
    rowClassName?: string | CreateRowClassName
): string;
export declare function shouldUseArrayInSingleMode(
    column: TableBaseColumn
): boolean;
export declare function isColumnSortable(column: TableColumn): boolean;
export declare function isColumnResizable(column: TableColumn): boolean;
export declare function isColumnFilterable(column: TableColumn): boolean;
export declare function createNextSorter(
    column: TableBaseColumn,
    currentSortState: SortState | null
): SortState | null;
export declare function isColumnSorting(
    column: TableColumn,
    mergedSortState: SortState[]
): boolean;
