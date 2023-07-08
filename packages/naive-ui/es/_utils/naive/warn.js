const warnedMessages = /* @__PURE__ */ new Set();
export function warnOnce(location, message) {
    const mergedMessage = `[naive/${location}]: ${message}`;
    if (warnedMessages.has(mergedMessage)) return;
    warnedMessages.add(mergedMessage);
    console.error(mergedMessage);
}
export function warn(location, message) {
    console.error(`[naive/${location}]: ${message}`);
}
export function throwError(location, message) {
    throw new Error(`[naive/${location}]: ${message}`);
}
