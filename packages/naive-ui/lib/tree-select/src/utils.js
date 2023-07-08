Object.defineProperty(exports, '__esModule', { value: true });
exports.treeOption2SelectOptionWithPath = exports.treeOption2SelectOption =
    void 0;
function treeOption2SelectOption(tmNode, labelField) {
    const { rawNode } = tmNode;
    return Object.assign(Object.assign({}, rawNode), {
        label: rawNode[labelField],
        value: tmNode.key,
    });
}
exports.treeOption2SelectOption = treeOption2SelectOption;
function treeOption2SelectOptionWithPath(tmNode, path, separator, labelField) {
    const { rawNode } = tmNode;
    return Object.assign(Object.assign({}, rawNode), {
        value: tmNode.key,
        label: path.map((v) => v.rawNode[labelField]).join(separator),
    });
}
exports.treeOption2SelectOptionWithPath = treeOption2SelectOptionWithPath;
