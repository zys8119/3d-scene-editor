import {
    defineComponent,
    h,
    inject,
    ref,
    watchEffect,
    onMounted,
    onBeforeUnmount,
    provide,
    toRef,
} from 'vue';
import { isImageSupportNativeLazy } from '../../_utils/env/is-native-lazy-load';
import { useConfig } from '../../_mixins';
import { imageContextKey, imagePreviewSharedProps } from './interface';
import { observeIntersection } from './utils';
import { imageGroupInjectionKey } from './ImageGroup';
import NImagePreview from './ImagePreview';
export const imageProps = Object.assign(
    {
        alt: String,
        height: [String, Number],
        imgProps: Object,
        previewedImgProps: Object,
        lazy: Boolean,
        intersectionObserverOptions: Object,
        objectFit: {
            type: String,
            default: 'fill',
        },
        previewSrc: String,
        fallbackSrc: String,
        width: [String, Number],
        src: String,
        previewDisabled: Boolean,
        loadDescription: String,
        onError: Function,
        onLoad: Function,
    },
    imagePreviewSharedProps
);
export default defineComponent({
    name: 'Image',
    props: imageProps,
    inheritAttrs: false,
    setup(props) {
        const imageRef = ref(null);
        const showErrorRef = ref(false);
        const previewInstRef = ref(null);
        const imageGroupHandle = inject(imageGroupInjectionKey, null);
        const { mergedClsPrefixRef } = imageGroupHandle || useConfig(props);
        const exposedMethods = {
            click: () => {
                if (props.previewDisabled || showErrorRef.value) return;
                const mergedPreviewSrc = props.previewSrc || props.src;
                if (imageGroupHandle) {
                    imageGroupHandle.setPreviewSrc(mergedPreviewSrc);
                    imageGroupHandle.setThumbnailEl(imageRef.value);
                    imageGroupHandle.toggleShow();
                    return;
                }
                const { value: previewInst } = previewInstRef;
                if (!previewInst) return;
                previewInst.setPreviewSrc(mergedPreviewSrc);
                previewInst.setThumbnailEl(imageRef.value);
                previewInst.toggleShow();
            },
        };
        const shouldStartLoadingRef = ref(!props.lazy);
        onMounted(() => {
            var _a;
            (_a = imageRef.value) === null || _a === void 0
                ? void 0
                : _a.setAttribute(
                      'data-group-id',
                      (imageGroupHandle === null || imageGroupHandle === void 0
                          ? void 0
                          : imageGroupHandle.groupId) || ''
                  );
        });
        onMounted(() => {
            if (isImageSupportNativeLazy) {
                return;
            }
            let unobserve;
            const stopWatchHandle = watchEffect(() => {
                unobserve === null || unobserve === void 0
                    ? void 0
                    : unobserve();
                unobserve = void 0;
                if (props.lazy) {
                    unobserve = observeIntersection(
                        imageRef.value,
                        props.intersectionObserverOptions,
                        shouldStartLoadingRef
                    );
                }
            });
            onBeforeUnmount(() => {
                stopWatchHandle();
                unobserve === null || unobserve === void 0
                    ? void 0
                    : unobserve();
            });
        });
        watchEffect(() => {
            var _a;
            void props.src;
            void ((_a = props.imgProps) === null || _a === void 0
                ? void 0
                : _a.src);
            showErrorRef.value = false;
        });
        const loadedRef = ref(false);
        provide(imageContextKey, {
            previewedImgPropsRef: toRef(props, 'previewedImgProps'),
        });
        return Object.assign(
            {
                mergedClsPrefix: mergedClsPrefixRef,
                groupId:
                    imageGroupHandle === null || imageGroupHandle === void 0
                        ? void 0
                        : imageGroupHandle.groupId,
                previewInstRef,
                imageRef,
                showError: showErrorRef,
                shouldStartLoading: shouldStartLoadingRef,
                loaded: loadedRef,
                mergedOnClick: (e) => {
                    var _a, _b;
                    exposedMethods.click();
                    (_b =
                        (_a = props.imgProps) === null || _a === void 0
                            ? void 0
                            : _a.onClick) === null || _b === void 0
                        ? void 0
                        : _b.call(_a, e);
                },
                mergedOnError: (e) => {
                    if (!shouldStartLoadingRef.value) return;
                    showErrorRef.value = true;
                    const {
                        onError,
                        imgProps: { onError: imgPropsOnError } = {},
                    } = props;
                    onError === null || onError === void 0
                        ? void 0
                        : onError(e);
                    imgPropsOnError === null || imgPropsOnError === void 0
                        ? void 0
                        : imgPropsOnError(e);
                },
                mergedOnLoad: (e) => {
                    const {
                        onLoad,
                        imgProps: { onLoad: imgPropsOnLoad } = {},
                    } = props;
                    onLoad === null || onLoad === void 0 ? void 0 : onLoad(e);
                    imgPropsOnLoad === null || imgPropsOnLoad === void 0
                        ? void 0
                        : imgPropsOnLoad(e);
                    loadedRef.value = true;
                },
            },
            exposedMethods
        );
    },
    render() {
        var _a, _b;
        const { mergedClsPrefix, imgProps = {}, loaded, $attrs, lazy } = this;
        const placeholderNode =
            (_b = (_a = this.$slots).placeholder) === null || _b === void 0
                ? void 0
                : _b.call(_a);
        const loadSrc = this.src || imgProps.src || '';
        const imgNode = h(
            'img',
            Object.assign(Object.assign({}, imgProps), {
                ref: 'imageRef',
                width: this.width || imgProps.width,
                height: this.height || imgProps.height,
                src: isImageSupportNativeLazy
                    ? loadSrc
                    : this.showError
                    ? this.fallbackSrc
                    : this.shouldStartLoading
                    ? loadSrc
                    : void 0,
                alt: this.alt || imgProps.alt,
                'aria-label': this.alt || imgProps.alt,
                onClick: this.mergedOnClick,
                onError: this.mergedOnError,
                onLoad: this.mergedOnLoad,
                loading:
                    isImageSupportNativeLazy &&
                    lazy &&
                    !this.intersectionObserverOptions
                        ? 'lazy'
                        : 'eager',
                style: [
                    imgProps.style || '',
                    placeholderNode && !loaded
                        ? { height: '0', width: '0', visibility: 'hidden' }
                        : '',
                    { objectFit: this.objectFit },
                ],
                'data-error': this.showError,
                'data-preview-src': this.previewSrc || this.src,
            })
        );
        return h(
            'div',
            Object.assign({}, $attrs, {
                role: 'none',
                class: [
                    $attrs.class,
                    `${mergedClsPrefix}-image`,
                    (this.previewDisabled || this.showError) &&
                        `${mergedClsPrefix}-image--preview-disabled`,
                ],
            }),
            this.groupId
                ? imgNode
                : h(
                      NImagePreview,
                      {
                          theme: this.theme,
                          themeOverrides: this.themeOverrides,
                          clsPrefix: mergedClsPrefix,
                          ref: 'previewInstRef',
                          showToolbar: this.showToolbar,
                          showToolbarTooltip: this.showToolbarTooltip,
                      },
                      {
                          default: () => imgNode,
                      }
                  ),
            !loaded && placeholderNode
        );
    },
});
