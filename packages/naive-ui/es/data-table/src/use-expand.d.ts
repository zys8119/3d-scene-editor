import { Ref } from 'vue';
import { TreeMate } from 'treemate';
import type {
    Expandable,
    InternalRowData,
    RowKey,
    DataTableSetupProps,
} from './interface';
export declare function useExpand(
    props: DataTableSetupProps,
    treeMateRef: Ref<
        TreeMate<InternalRowData, InternalRowData, InternalRowData>
    >
): {
    stickyExpandedRowsRef: Ref<boolean>;
    mergedExpandedRowKeysRef: globalThis.ComputedRef<import('treemate').Key[]>;
    renderExpandRef: globalThis.ComputedRef<
        import('./interface').RenderExpand<any> | undefined
    >;
    expandableRef: globalThis.ComputedRef<Expandable<any> | undefined>;
    doUpdateExpandedRowKeys: (expandedKeys: RowKey[]) => void;
};
