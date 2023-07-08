Object.defineProperty(exports, '__esModule', { value: true });
exports.mergeEventHandlers = void 0;
function mergeEventHandlers(handlers) {
    const filteredHandlers = handlers.filter((handler) => handler !== void 0);
    if (filteredHandlers.length === 0) return void 0;
    if (filteredHandlers.length === 1) return filteredHandlers[0];
    return (e) => {
        handlers.forEach((handler) => {
            if (handler) {
                handler(e);
            }
        });
    };
}
exports.mergeEventHandlers = mergeEventHandlers;
