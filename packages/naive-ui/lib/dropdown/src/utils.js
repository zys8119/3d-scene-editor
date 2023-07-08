Object.defineProperty(exports, '__esModule', { value: true });
exports.isRenderNode =
    exports.isDividerNode =
    exports.isGroupNode =
    exports.isSubmenuNode =
        void 0;
function isSubmenuNode(rawNode, childrenField) {
    return (
        rawNode.type === 'submenu' ||
        (rawNode.type === void 0 && rawNode[childrenField] !== void 0)
    );
}
exports.isSubmenuNode = isSubmenuNode;
function isGroupNode(rawNode) {
    return rawNode.type === 'group';
}
exports.isGroupNode = isGroupNode;
function isDividerNode(rawNode) {
    return rawNode.type === 'divider';
}
exports.isDividerNode = isDividerNode;
function isRenderNode(rawNode) {
    return rawNode.type === 'render';
}
exports.isRenderNode = isRenderNode;
