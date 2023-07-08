Object.defineProperty(exports, '__esModule', { value: true });
exports.defaultAllowDrop = exports.renderDropMark = void 0;
const vue_1 = require('vue');
function renderDropMark({ position, offsetLevel, indent, el }) {
    const style = {
        position: 'absolute',
        boxSizing: 'border-box',
        right: 0,
    };
    if (position === 'inside') {
        style.left = 0;
        style.top = 0;
        style.bottom = 0;
        style.borderRadius = 'inherit';
        style.boxShadow = 'inset 0 0 0 2px var(--n-drop-mark-color)';
    } else {
        const cssPosition = position === 'before' ? 'top' : 'bottom';
        style[cssPosition] = 0;
        style.left = `${el.offsetLeft + 6 - offsetLevel * indent}px`;
        style.height = '2px';
        style.backgroundColor = 'var(--n-drop-mark-color)';
        style.transformOrigin = cssPosition;
        style.borderRadius = '1px';
        style.transform =
            position === 'before' ? 'translateY(-4px)' : 'translateY(4px)';
    }
    return (0, vue_1.h)('div', { style });
}
exports.renderDropMark = renderDropMark;
function defaultAllowDrop({ dropPosition, node }) {
    if (node.isLeaf === false) return true;
    if (node.children) {
        return true;
    }
    return dropPosition !== 'inside';
}
exports.defaultAllowDrop = defaultAllowDrop;
