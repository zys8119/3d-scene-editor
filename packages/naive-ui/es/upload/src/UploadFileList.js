import { h, defineComponent, inject, computed } from 'vue';
import { throwError } from '../../_utils';
import { uploadInjectionKey } from './interface';
import NUploadFile from './UploadFile';
import { NImageGroup } from '../../image';
import { NFadeInExpandTransition } from '../../_internal';
import NUploadTrigger from './UploadTrigger';
export default defineComponent({
    name: 'UploadFileList',
    setup(_, { slots }) {
        const NUpload = inject(uploadInjectionKey, null);
        if (!NUpload) {
            throwError(
                'upload-file-list',
                '`n-upload-file-list` must be placed inside `n-upload`.'
            );
        }
        const {
            abstractRef,
            mergedClsPrefixRef,
            listTypeRef,
            mergedFileListRef,
            fileListStyleRef,
            cssVarsRef,
            themeClassRef,
            maxReachedRef,
            showTriggerRef,
            imageGroupPropsRef,
        } = NUpload;
        const isImageCardTypeRef = computed(
            () => listTypeRef.value === 'image-card'
        );
        const renderFileList = () =>
            mergedFileListRef.value.map((file) =>
                h(
                    NUploadFile,
                    {
                        clsPrefix: mergedClsPrefixRef.value,
                        key: file.id,
                        file,
                        listType: listTypeRef.value,
                    },
                    slots
                )
            );
        const renderUploadFileList = () =>
            isImageCardTypeRef.value
                ? h(NImageGroup, Object.assign({}, imageGroupPropsRef.value), {
                      default: renderFileList,
                  })
                : h(
                      NFadeInExpandTransition,
                      { group: true },
                      {
                          default: renderFileList,
                      }
                  );
        return () => {
            const { value: mergedClsPrefix } = mergedClsPrefixRef;
            const { value: abstract } = abstractRef;
            return h(
                'div',
                {
                    class: [
                        `${mergedClsPrefix}-upload-file-list`,
                        isImageCardTypeRef.value &&
                            `${mergedClsPrefix}-upload-file-list--grid`,
                        abstract
                            ? themeClassRef === null || themeClassRef === void 0
                                ? void 0
                                : themeClassRef.value
                            : void 0,
                    ],
                    style: [
                        abstract && cssVarsRef ? cssVarsRef.value : '',
                        fileListStyleRef.value,
                    ],
                },
                renderUploadFileList(),
                showTriggerRef.value &&
                    !maxReachedRef.value &&
                    isImageCardTypeRef.value &&
                    h(NUploadTrigger, null, slots)
            );
        };
    },
});
