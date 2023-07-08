import { ref, onBeforeUpdate } from 'vue';
export function isTouchEvent(e) {
    return window.TouchEvent && e instanceof window.TouchEvent;
}
export function useRefs() {
    const refs = ref(/* @__PURE__ */ new Map());
    const setRefs = (index) => (el) => {
        refs.value.set(index, el);
    };
    onBeforeUpdate(() => refs.value.clear());
    return [refs, setRefs];
}
