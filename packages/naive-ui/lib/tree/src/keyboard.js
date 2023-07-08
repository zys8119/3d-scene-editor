Object.defineProperty(exports, '__esModule', { value: true });
exports.useKeyboard = void 0;
const vue_1 = require('vue');
const interface_1 = require('../../tree-select/src/interface');
function useKeyboard({
    props,
    fNodesRef,
    mergedExpandedKeysRef,
    mergedSelectedKeysRef,
    handleSelect,
    handleSwitcherClick,
}) {
    const { value: mergedSelectedKeys } = mergedSelectedKeysRef;
    const treeSelectInjection = (0, vue_1.inject)(
        interface_1.treeSelectInjectionKey,
        null
    );
    const pendingNodeKeyRef = treeSelectInjection
        ? treeSelectInjection.pendingNodeKeyRef
        : (0, vue_1.ref)(
              mergedSelectedKeys.length
                  ? mergedSelectedKeys[mergedSelectedKeys.length - 1]
                  : null
          );
    function handleKeydown(e) {
        if (!props.keyboard) return;
        const { value: pendingNodeKey } = pendingNodeKeyRef;
        if (pendingNodeKey === null) {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
            }
            if (
                ['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(
                    e.key
                )
            ) {
                if (pendingNodeKey === null) {
                    const { value: fNodes } = fNodesRef;
                    let fIndex = 0;
                    while (fIndex < fNodes.length) {
                        if (!fNodes[fIndex].disabled) {
                            pendingNodeKeyRef.value = fNodes[fIndex].key;
                            break;
                        }
                        fIndex += 1;
                    }
                }
            }
        } else {
            const { value: fNodes } = fNodesRef;
            let fIndex = fNodes.findIndex(
                (tmNode) => tmNode.key === pendingNodeKey
            );
            if (!~fIndex) return;
            if (e.key === 'Enter') {
                handleSelect(fNodes[fIndex]);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                fIndex += 1;
                while (fIndex < fNodes.length) {
                    if (!fNodes[fIndex].disabled) {
                        pendingNodeKeyRef.value = fNodes[fIndex].key;
                        break;
                    }
                    fIndex += 1;
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                fIndex -= 1;
                while (fIndex >= 0) {
                    if (!fNodes[fIndex].disabled) {
                        pendingNodeKeyRef.value = fNodes[fIndex].key;
                        break;
                    }
                    fIndex -= 1;
                }
            } else if (e.key === 'ArrowLeft') {
                const pendingNode = fNodes[fIndex];
                if (
                    pendingNode.isLeaf ||
                    !mergedExpandedKeysRef.value.includes(pendingNodeKey)
                ) {
                    const parentTmNode = pendingNode.getParent();
                    if (parentTmNode) {
                        pendingNodeKeyRef.value = parentTmNode.key;
                    }
                } else {
                    handleSwitcherClick(pendingNode);
                }
            } else if (e.key === 'ArrowRight') {
                const pendingNode = fNodes[fIndex];
                if (pendingNode.isLeaf) return;
                if (!mergedExpandedKeysRef.value.includes(pendingNodeKey)) {
                    handleSwitcherClick(pendingNode);
                } else {
                    fIndex += 1;
                    while (fIndex < fNodes.length) {
                        if (!fNodes[fIndex].disabled) {
                            pendingNodeKeyRef.value = fNodes[fIndex].key;
                            break;
                        }
                        fIndex += 1;
                    }
                }
            }
        }
    }
    return {
        pendingNodeKeyRef,
        handleKeydown,
    };
}
exports.useKeyboard = useKeyboard;
