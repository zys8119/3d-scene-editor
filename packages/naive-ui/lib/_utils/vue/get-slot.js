Object.defineProperty(exports, '__esModule', { value: true });
exports.getSlot = void 0;
function getSlot(instance, slotName = 'default', fallback = []) {
    const slots = instance.$slots;
    const slot = slots[slotName];
    if (slot === void 0) return fallback;
    return slot();
}
exports.getSlot = getSlot;
