Object.defineProperty(exports, '__esModule', { value: true });
exports.formItemInjectionKey = void 0;
const vue_1 = require('vue');
const _utils_1 = require('../_utils');
exports.formItemInjectionKey = (0, _utils_1.createInjectionKey)('n-form-item');
function useFormItem(
    props,
    { defaultSize = 'medium', mergedSize, mergedDisabled } = {}
) {
    const NFormItem = (0, vue_1.inject)(exports.formItemInjectionKey, null);
    (0, vue_1.provide)(exports.formItemInjectionKey, null);
    const mergedSizeRef = (0, vue_1.computed)(
        mergedSize
            ? () => mergedSize(NFormItem)
            : () => {
                  const { size } = props;
                  if (size) return size;
                  if (NFormItem) {
                      const { mergedSize: mergedSize2 } = NFormItem;
                      if (mergedSize2.value !== void 0) {
                          return mergedSize2.value;
                      }
                  }
                  return defaultSize;
              }
    );
    const mergedDisabledRef = (0, vue_1.computed)(
        mergedDisabled
            ? () => mergedDisabled(NFormItem)
            : () => {
                  const { disabled } = props;
                  if (disabled !== void 0) {
                      return disabled;
                  }
                  if (NFormItem) {
                      return NFormItem.disabled.value;
                  }
                  return false;
              }
    );
    const mergedStatusRef = (0, vue_1.computed)(() => {
        const { status } = props;
        if (status) return status;
        return NFormItem === null || NFormItem === void 0
            ? void 0
            : NFormItem.mergedValidationStatus.value;
    });
    (0, vue_1.onBeforeUnmount)(() => {
        if (NFormItem) {
            NFormItem.restoreValidation();
        }
    });
    return {
        mergedSizeRef,
        mergedDisabledRef,
        mergedStatusRef,
        nTriggerFormBlur() {
            if (NFormItem) {
                NFormItem.handleContentBlur();
            }
        },
        nTriggerFormChange() {
            if (NFormItem) {
                NFormItem.handleContentChange();
            }
        },
        nTriggerFormFocus() {
            if (NFormItem) {
                NFormItem.handleContentFocus();
            }
        },
        nTriggerFormInput() {
            if (NFormItem) {
                NFormItem.handleContentInput();
            }
        },
    };
}
exports.default = useFormItem;
