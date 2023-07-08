import { ComputedRef } from 'vue';
import { CheckStrategy } from 'treemate';
import { Key, TmNode, TreeOption } from './interface';
export declare function useMergedCheckStrategy(props: {
    leafOnly: boolean;
    checkStrategy: CheckStrategy;
}): ComputedRef<CheckStrategy>;
export declare function isNodeDisabled(
    node: TmNode,
    disabledField: string
): boolean;
export declare function keysWithFilter(
    nodes: TreeOption[],
    pattern: string,
    keyField: string,
    childrenField: string,
    filter: (pattern: string, node: TreeOption) => boolean
): {
    expandedKeys: Key[];
    highlightKeySet: Set<Key>;
};
declare const emptyImage: HTMLImageElement | null;
export { emptyImage };
export declare function filterTree(
    tree: TreeOption[],
    filter: (pattern: string, v: TreeOption) => boolean,
    pattern: string,
    keyField: string,
    childrenField: string
): {
    filteredTree: TreeOption[];
    expandedKeys: Key[];
    highlightKeySet: Set<Key>;
};
