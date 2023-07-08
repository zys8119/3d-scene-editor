Object.defineProperty(exports, '__esModule', { value: true });
exports.getRect = exports.getScrollTop = void 0;
function getScrollTop(target) {
    return target instanceof HTMLElement ? target.scrollTop : window.scrollY;
}
exports.getScrollTop = getScrollTop;
function getRect(target) {
    return target instanceof HTMLElement
        ? target.getBoundingClientRect()
        : { top: 0, bottom: window.innerHeight };
}
exports.getRect = getRect;
