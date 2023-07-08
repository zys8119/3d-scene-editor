var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
exports.imageGroupProps = exports.imageGroupInjectionKey = void 0;
const vue_1 = require('vue');
const seemly_1 = require('seemly');
const _utils_1 = require('../../_utils');
const _mixins_1 = require('../../_mixins');
const ImagePreview_1 = __importDefault(require('./ImagePreview'));
const interface_1 = require('./interface');
exports.imageGroupInjectionKey = (0, _utils_1.createInjectionKey)(
    'n-image-group'
);
exports.imageGroupProps = interface_1.imagePreviewSharedProps;
exports.default = (0, vue_1.defineComponent)({
    name: 'ImageGroup',
    props: exports.imageGroupProps,
    setup(props) {
        let currentSrc;
        const { mergedClsPrefixRef } = (0, _mixins_1.useConfig)(props);
        const groupId = `c${(0, seemly_1.createId)()}`;
        const vm = (0, vue_1.getCurrentInstance)();
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
        (0, vue_1.provide)(exports.imageGroupInjectionKey, {
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
        const previewInstRef = (0, vue_1.ref)(null);
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            previewInstRef,
            next: () => go(1),
            prev: () => go(-1),
        };
    },
    render() {
        return (0, vue_1.h)(
            ImagePreview_1.default,
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
