import { useVModel } from '@vueuse/core';
import { computed, watch } from 'vue';
import { ref } from 'vue';
export function useAutoControl(ref2, props, key, emit, options) {
    const vModal = useVModel(props, key, emit, options);
    const watchOptions = {
        deep: options === null || options === void 0 ? void 0 : options.deep,
    };
    watch(
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
    watch(
        vModal,
        (value) => {
            if (value === void 0) ref2.value = void 0;
        },
        watchOptions
    );
    return computed({
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
