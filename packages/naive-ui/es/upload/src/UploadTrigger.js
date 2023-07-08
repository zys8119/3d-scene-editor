import { h, defineComponent, inject, computed } from 'vue';
import { AddIcon } from '../../_internal/icons';
import { NBaseIcon } from '../../_internal';
import { resolveSlot, throwError } from '../../_utils';
import { uploadInjectionKey } from './interface';
import { getFilesFromEntries } from './utils';
import NUploadDragger from './UploadDragger';
export default defineComponent({
    name: 'UploadTrigger',
    props: {
        abstract: Boolean,
    },
    setup(props, { slots }) {
        const NUpload = inject(uploadInjectionKey, null);
        if (!NUpload) {
            throwError(
                'upload-trigger',
                '`n-upload-trigger` must be placed inside `n-upload`.'
            );
        }
        const {
            mergedClsPrefixRef,
            mergedDisabledRef,
            maxReachedRef,
            listTypeRef,
            dragOverRef,
            openOpenFileDialog,
            draggerInsideRef,
            handleFileAddition,
            mergedDirectoryDndRef,
            triggerStyleRef,
        } = NUpload;
        const isImageCardTypeRef = computed(
            () => listTypeRef.value === 'image-card'
        );
        function handleTriggerClick() {
            if (mergedDisabledRef.value || maxReachedRef.value) return;
            openOpenFileDialog();
        }
        function handleTriggerDragOver(e) {
            e.preventDefault();
            dragOverRef.value = true;
        }
        function handleTriggerDragEnter(e) {
            e.preventDefault();
            dragOverRef.value = true;
        }
        function handleTriggerDragLeave(e) {
            e.preventDefault();
            dragOverRef.value = false;
        }
        function handleTriggerDrop(e) {
            var _a;
            e.preventDefault();
            if (
                !draggerInsideRef.value ||
                mergedDisabledRef.value ||
                maxReachedRef.value
            ) {
                dragOverRef.value = false;
                return;
            }
            const dataTransferItems =
                (_a = e.dataTransfer) === null || _a === void 0
                    ? void 0
                    : _a.items;
            if (
                dataTransferItems === null || dataTransferItems === void 0
                    ? void 0
                    : dataTransferItems.length
            ) {
                void getFilesFromEntries(
                    Array.from(dataTransferItems).map((item) =>
                        item.webkitGetAsEntry()
                    ),
                    mergedDirectoryDndRef.value
                )
                    .then((files) => {
                        handleFileAddition(files);
                    })
                    .finally(() => {
                        dragOverRef.value = false;
                    });
            } else {
                dragOverRef.value = false;
            }
        }
        return () => {
            var _a;
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            return props.abstract
                ? (_a = slots.default) === null || _a === void 0
                    ? void 0
                    : _a.call(slots, {
                          handleClick: handleTriggerClick,
                          handleDrop: handleTriggerDrop,
                          handleDragOver: handleTriggerDragOver,
                          handleDragEnter: handleTriggerDragEnter,
                          handleDragLeave: handleTriggerDragLeave,
                      })
                : h(
                      'div',
                      {
                          class: [
                              `${mergedClsPrefix}-upload-trigger`,
                              (mergedDisabledRef.value ||
                                  maxReachedRef.value) &&
                                  `${mergedClsPrefix}-upload-trigger--disabled`,
                              isImageCardTypeRef.value &&
                                  `${mergedClsPrefix}-upload-trigger--image-card`,
                          ],
                          style: triggerStyleRef.value,
                          onClick: handleTriggerClick,
                          onDrop: handleTriggerDrop,
                          onDragover: handleTriggerDragOver,
                          onDragenter: handleTriggerDragEnter,
                          onDragleave: handleTriggerDragLeave,
                      },
                      isImageCardTypeRef.value
                          ? h(NUploadDragger, null, {
                                default: () =>
                                    resolveSlot(slots.default, () => [
                                        h(
                                            NBaseIcon,
                                            { clsPrefix: mergedClsPrefix },
                                            { default: () => h(AddIcon, null) }
                                        ),
                                    ]),
                            })
                          : slots
                  );
        };
    },
});
