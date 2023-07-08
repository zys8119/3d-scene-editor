import { computed, inject, provide, onBeforeUnmount } from 'vue';
import { createInjectionKey } from '../_utils';
export const formItemInjectionKey = createInjectionKey('n-form-item');
export default function useFormItem(
    props,
    { defaultSize = 'medium', mergedSize, mergedDisabled } = {}
) {
    const NFormItem = inject(formItemInjectionKey, null);
    provide(formItemInjectionKey, null);
    const mergedSizeRef = computed(
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
    const mergedDisabledRef = computed(
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
    const mergedStatusRef = computed(() => {
        const { status } = props;
        if (status) return status;
        return NFormItem === null || NFormItem === void 0
            ? void 0
            : NFormItem.mergedValidationStatus.value;
    });
    onBeforeUnmount(() => {
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
