Object.defineProperty(exports, '__esModule', { value: true });
exports.useRefs = exports.isTouchEvent = void 0;
const vue_1 = require('vue');
function isTouchEvent(e) {
    return window.TouchEvent && e instanceof window.TouchEvent;
}
exports.isTouchEvent = isTouchEvent;
function useRefs() {
    const refs = (0, vue_1.ref)(/* @__PURE__ */ new Map());
    const setRefs = (index) => (el) => {
        refs.value.set(index, el);
    };
    (0, vue_1.onBeforeUpdate)(() => refs.value.clear());
    return [refs, setRefs];
}
exports.useRefs = useRefs;
