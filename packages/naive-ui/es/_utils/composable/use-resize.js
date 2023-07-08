import { onBeforeUnmount, onMounted } from 'vue';
import { resizeObserverManager } from 'vueuc';
export function useOnResize(elRef, onResize) {
    if (onResize) {
        onMounted(() => {
            const { value: el } = elRef;
            if (el) {
                resizeObserverManager.registerHandler(el, onResize);
            }
        });
        onBeforeUnmount(() => {
            const { value: el } = elRef;
            if (el) {
                resizeObserverManager.unregisterHandler(el);
            }
        });
    }
}
