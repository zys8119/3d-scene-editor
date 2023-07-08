Object.defineProperty(exports, '__esModule', { value: true });
exports.flatten = void 0;
const vue_1 = require('vue');
function flatten(vNodes, filterCommentNode = true, result = []) {
    vNodes.forEach((vNode) => {
        if (vNode === null) return;
        if (typeof vNode !== 'object') {
            if (typeof vNode === 'string' || typeof vNode === 'number') {
                result.push((0, vue_1.createTextVNode)(String(vNode)));
            }
            return;
        }
        if (Array.isArray(vNode)) {
            flatten(vNode, filterCommentNode, result);
            return;
        }
        if (vNode.type === vue_1.Fragment) {
            if (vNode.children === null) return;
            if (Array.isArray(vNode.children)) {
                flatten(vNode.children, filterCommentNode, result);
            }
        } else if (vNode.type !== vue_1.Comment) {
            result.push(vNode);
        }
    });
    return result;
}
exports.flatten = flatten;
