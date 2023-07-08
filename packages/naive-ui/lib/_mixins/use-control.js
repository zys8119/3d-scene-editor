const { ref } = require('vue');
Object.defineProperty(exports, '__esModule', { value: true });
exports.useAutoControl = void 0;
const core_1 = require('@vueuse/core');
const vue_1 = require('vue');
function useAutoControl(ref2, props, key, emit, options) {
    const vModal = (0, core_1.useVModel)(props, key, emit, options);
    const watchOptions = {
        deep: options === null || options === void 0 ? void 0 : options.deep,
    };
    (0, vue_1.watch)(
        ref2,
        (value) => {
            if (!key || !emit) return;
            emit === null || emit === void 0
                ? void 0
                : emit(
                      (options === null || options === void 0
                          ? void 0
                          : options.eventName) || `update:${String(key)}`,
                      value
                  );
        },
        watchOptions
    );
    (0, vue_1.watch)(
        vModal,
        (value) => {
            if (value === void 0) ref2.value = void 0;
        },
        watchOptions
    );
    return (0, vue_1.computed)({
        get() {
            return vModal.value === void 0 ? ref2.value : vModal.value;
        },
        set(value) {
            if (vModal.value === void 0 || value === void 0) {
                ref2.value = value;
            } else {
                vModal.value = value;
            }
        },
    });
}
exports.useAutoControl = useAutoControl;
