Object.defineProperty(exports, '__esModule', { value: true });
exports.isTouchEvent = void 0;
function isTouchEvent(e) {
    return window.TouchEvent && e instanceof window.TouchEvent;
}
exports.isTouchEvent = isTouchEvent;
