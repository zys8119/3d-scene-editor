Object.defineProperty(exports, '__esModule', { value: true });
exports.useIsComposing = void 0;
const vue_1 = require('vue');
const is_browser_1 = require('../env/is-browser');
const isComposingRef = (0, vue_1.ref)(false);
const compositionStartHandler = () => {
    isComposingRef.value = true;
};
const compositionEndHandler = () => {
    isComposingRef.value = false;
};
let mountedCount = 0;
const useIsComposing = () => {
    if (is_browser_1.isBrowser) {
        (0, vue_1.onBeforeMount)(() => {
            if (!mountedCount) {
                window.addEventListener(
                    'compositionstart',
                    compositionStartHandler
                );
                window.addEventListener(
                    'compositionend',
                    compositionEndHandler
                );
            }
            mountedCount++;
        });
        (0, vue_1.onBeforeUnmount)(() => {
            if (mountedCount <= 1) {
                window.removeEventListener(
                    'compositionstart',
                    compositionStartHandler
                );
                window.removeEventListener(
                    'compositionend',
                    compositionEndHandler
                );
                mountedCount = 0;
            } else {
                mountedCount--;
            }
        });
    }
    return isComposingRef;
};
exports.useIsComposing = useIsComposing;
