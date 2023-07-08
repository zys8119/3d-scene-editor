Object.defineProperty(exports, '__esModule', { value: true });
exports.getPathLabel =
    exports.createSelectOptions =
    exports.getRawNodePath =
        void 0;
function getRawNodePath(tmNodes) {
    if (!tmNodes) return null;
    return tmNodes.map((tmNode) => tmNode.rawNode);
}
exports.getRawNodePath = getRawNodePath;
function createSelectOptions(
    tmNodes,
    checkStrategyIsChild,
    labelField,
    separator
) {
    const selectOptions = [];
    const path = [];
    function traverse(_tmNodes) {
        for (const tmNode of _tmNodes) {
            if (tmNode.disabled) continue;
            const { rawNode } = tmNode;
            path.push(rawNode);
            if (tmNode.isLeaf || !checkStrategyIsChild) {
                selectOptions.push({
                    label: getPathLabel(tmNode, separator, labelField),
                    value: tmNode.key,
                    rawNode: tmNode.rawNode,
                    path: Array.from(path),
                });
            }
            if (!tmNode.isLeaf && tmNode.children) {
                traverse(tmNode.children);
            }
            path.pop();
        }
    }
    traverse(tmNodes);
    return selectOptions;
}
exports.createSelectOptions = createSelectOptions;
function getPathLabel(node, separator, labelField) {
    const path = [];
    while (node) {
        path.push(node.rawNode[labelField]);
        node = node.parent;
    }
    return path.reverse().join(separator);
}
exports.getPathLabel = getPathLabel;
