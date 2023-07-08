const eventSet = /* @__PURE__ */ new WeakSet();
export function markEventEffectPerformed(event) {
    eventSet.add(event);
}
export function eventEffectNotPerformed(event) {
    return !eventSet.has(event);
}
