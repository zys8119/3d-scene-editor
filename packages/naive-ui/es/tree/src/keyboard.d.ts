import { Ref } from 'vue';
import { TreeNode } from 'treemate';
import { Key, TmNode, TreeOption } from './interface';
export declare function useKeyboard({
    props,
    fNodesRef,
    mergedExpandedKeysRef,
    mergedSelectedKeysRef,
    handleSelect,
    handleSwitcherClick,
}: {
    props: {
        keyboard: boolean;
    };
    fNodesRef: Ref<Array<TreeNode<TreeOption>>>;
    mergedExpandedKeysRef: Ref<Key[]>;
    mergedSelectedKeysRef: Ref<Key[]>;
    handleSelect: (node: TmNode) => void;
    handleSwitcherClick: (node: TmNode) => void;
}): {
    pendingNodeKeyRef: Ref<null | Key>;
    handleKeydown: (e: KeyboardEvent) => void;
};
