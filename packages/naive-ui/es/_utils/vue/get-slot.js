export function getSlot(instance, slotName = 'default', fallback = []) {
    const slots = instance.$slots;
    const slot = slots[slotName];
    if (slot === void 0) return fallback;
    return slot();
}
