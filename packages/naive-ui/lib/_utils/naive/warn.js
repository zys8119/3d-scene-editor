Object.defineProperty(exports, '__esModule', { value: true });
exports.throwError = exports.warn = exports.warnOnce = void 0;
const warnedMessages = /* @__PURE__ */ new Set();
function warnOnce(location, message) {
    const mergedMessage = `[naive/${location}]: ${message}`;
    if (warnedMessages.has(mergedMessage)) return;
    warnedMessages.add(mergedMessage);
    console.error(mergedMessage);
}
exports.warnOnce = warnOnce;
function warn(location, message) {
    console.error(`[naive/${location}]: ${message}`);
}
exports.warn = warn;
function throwError(location, message) {
    throw new Error(`[naive/${location}]: ${message}`);
}
exports.throwError = throwError;
