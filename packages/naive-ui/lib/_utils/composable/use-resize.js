Object.defineProperty(exports, '__esModule', { value: true });
exports.useOnResize = void 0;
const vue_1 = require('vue');
const vueuc_1 = require('vueuc');
function useOnResize(elRef, onResize) {
    if (onResize) {
        (0, vue_1.onMounted)(() => {
            const { value: el } = elRef;
            if (el) {
                vueuc_1.resizeObserverManager.registerHandler(el, onResize);
            }
        });
        (0, vue_1.onBeforeUnmount)(() => {
            const { value: el } = elRef;
            if (el) {
                vueuc_1.resizeObserverManager.unregisterHandler(el);
            }
        });
    }
}
exports.useOnResize = useOnResize;
