import { Fragment, isVNode, Comment } from 'vue';
function ensureValidVNode(vnodes) {
    return vnodes.some((child) => {
        if (!isVNode(child)) {
            return true;
        }
        if (child.type === Comment) {
            return false;
        }
        if (child.type === Fragment && !ensureValidVNode(child.children)) {
            return false;
        }
        return true;
    })
        ? vnodes
        : null;
}
export function resolveSlot(slot, fallback) {
    return (slot && ensureValidVNode(slot())) || fallback();
}
export function resolveSlotWithProps(slot, props, fallback) {
    return (slot && ensureValidVNode(slot(props))) || fallback(props);
}
export function resolveWrappedSlot(slot, wrapper) {
    const children = slot && ensureValidVNode(slot());
    return wrapper(children || null);
}
export function resolveWrappedSlotWithProps(slot, props, wrapper) {
    const children = slot && ensureValidVNode(slot(props));
    return wrapper(children || null);
}
export function isSlotEmpty(slot) {
    return !(slot && ensureValidVNode(slot()));
}
