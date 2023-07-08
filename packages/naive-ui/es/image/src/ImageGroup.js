import { defineComponent, h, ref, provide, getCurrentInstance } from 'vue';
import { createId } from 'seemly';
import { createInjectionKey } from '../../_utils';
import { useConfig } from '../../_mixins';
import NImagePreview from './ImagePreview';
import { imagePreviewSharedProps } from './interface';
export const imageGroupInjectionKey = createInjectionKey('n-image-group');
export const imageGroupProps = imagePreviewSharedProps;
export default defineComponent({
    name: 'ImageGroup',
    props: imageGroupProps,
    setup(props) {
        let currentSrc;
        const { mergedClsPrefixRef } = useConfig(props);
        const groupId = `c${createId()}`;
        const vm = getCurrentInstance();
        const setPreviewSrc = (src) => {
            var _a;
            currentSrc = src;
            (_a = previewInstRef.value) === null || _a === void 0
                ? void 0
                : _a.setPreviewSrc(src);
        };
        function go(step) {
            if (!(vm === null || vm === void 0 ? void 0 : vm.proxy)) return;
            const container = vm.proxy.$el.parentElement;
            const imgs = container.querySelectorAll(
                `[data-group-id=${groupId}]:not([data-error=true])`
            );
            if (!imgs.length) return;
            const index = Array.from(imgs).findIndex(
                (img) => img.dataset.previewSrc === currentSrc
            );
            if (~index) {
                setPreviewSrc(
                    imgs[(index + step + imgs.length) % imgs.length].dataset
                        .previewSrc
                );
            } else {
                setPreviewSrc(imgs[0].dataset.previewSrc);
            }
        }
        provide(imageGroupInjectionKey, {
            mergedClsPrefixRef,
            setPreviewSrc,
            setThumbnailEl: (el) => {
                var _a;
                (_a = previewInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.setThumbnailEl(el);
            },
            toggleShow: () => {
                var _a;
                (_a = previewInstRef.value) === null || _a === void 0
                    ? void 0
                    : _a.toggleShow();
            },
            groupId,
        });
        const previewInstRef = ref(null);
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            previewInstRef,
            next: () => go(1),
            prev: () => go(-1),
        };
    },
    render() {
        return h(
            NImagePreview,
            {
                theme: this.theme,
                themeOverrides: this.themeOverrides,
                clsPrefix: this.mergedClsPrefix,
                ref: 'previewInstRef',
                onPrev: this.prev,
                onNext: this.next,
                showToolbar: this.showToolbar,
                showToolbarTooltip: this.showToolbarTooltip,
            },
            this.$slots
        );
    },
});
