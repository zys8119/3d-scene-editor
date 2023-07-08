var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const vue_1 = require('vue');
const vooks_1 = require('vooks');
const icons_1 = require('../../_internal/icons');
const image_1 = require('../../image');
const button_1 = require('../../button');
const _internal_1 = require('../../_internal');
const _utils_1 = require('../../_utils');
const UploadProgress_1 = __importDefault(require('./UploadProgress'));
const interface_1 = require('./interface');
const icons_2 = require('./icons');
const modal_1 = require('../../modal');
const utils_1 = require('./utils');
const getVideoInfo_1 = require('./getVideoInfo');
const buttonThemeOverrides = {
    paddingMedium: '0 3px',
    heightMedium: '24px',
    iconSizeMedium: '18px',
};
exports.default = (0, vue_1.defineComponent)({
    name: 'UploadFile',
    props: {
        clsPrefix: {
            type: String,
            required: true,
        },
        file: {
            type: Object,
            required: true,
        },
        listType: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const NUpload = (0, vue_1.inject)(interface_1.uploadInjectionKey);
        const imageRef = (0, vue_1.ref)(null);
        const thumbnailUrlRef = (0, vue_1.ref)('');
        const progressStatusRef = (0, vue_1.computed)(() => {
            const { file } = props;
            if (file.status === 'finished') return 'success';
            if (file.status === 'error') return 'error';
            return 'info';
        });
        const buttonTypeRef = (0, vue_1.computed)(() => {
            const { file } = props;
            if (file.status === 'error') return 'error';
            return void 0;
        });
        const showProgressRef = (0, vue_1.computed)(() => {
            const { file } = props;
            return file.status === 'uploading';
        });
        const showCancelButtonRef = (0, vue_1.computed)(() => {
            if (!NUpload.showCancelButtonRef.value) return false;
            const { file } = props;
            return ['uploading', 'pending', 'error'].includes(file.status);
        });
        const showRemoveButtonRef = (0, vue_1.computed)(() => {
            if (!NUpload.showRemoveButtonRef.value) return false;
            const { file } = props;
            return ['finished'].includes(file.status);
        });
        const showDownloadButtonRef = (0, vue_1.computed)(() => {
            if (!NUpload.showDownloadButtonRef.value) return false;
            const { file } = props;
            return ['finished'].includes(file.status);
        });
        const showRetryButtonRef = (0, vue_1.computed)(() => {
            if (!NUpload.showRetryButtonRef.value) return false;
            const { file } = props;
            return ['error'].includes(file.status);
        });
        const mergedThumbnailUrlRef = (0, vooks_1.useMemo)(() => {
            return (
                thumbnailUrlRef.value ||
                props.file.thumbnailUrl ||
                props.file.url
            );
        });
        const showPreviewButtonRef = (0, vue_1.computed)(() => {
            if (!NUpload.showPreviewButtonRef.value) return false;
            const {
                file: { status },
                listType,
            } = props;
            return (
                ['finished'].includes(status) &&
                mergedThumbnailUrlRef.value &&
                listType === 'image-card'
            );
        });
        function handleRetryClick() {
            NUpload.submit(props.file.id);
        }
        function handleRemoveOrCancelClick(e) {
            e.preventDefault();
            const { file } = props;
            if (['finished', 'pending', 'error'].includes(file.status)) {
                handleRemove(file);
            } else if (['uploading'].includes(file.status)) {
                handleAbort(file);
            } else {
                (0, _utils_1.warn)(
                    'upload',
                    'The button clicked type is unknown.'
                );
            }
        }
        function handleDownloadClick(e) {
            e.preventDefault();
            handleDownload(props.file);
        }
        function handleRemove(file) {
            const {
                xhrMap,
                doChange,
                onRemoveRef: { value: onRemove },
                mergedFileListRef: { value: mergedFileList },
            } = NUpload;
            void Promise.resolve(
                onRemove
                    ? onRemove({
                          file: Object.assign({}, file),
                          fileList: mergedFileList,
                      })
                    : true
            ).then((result) => {
                if (result === false) return;
                const fileAfterChange = Object.assign({}, file, {
                    status: 'removed',
                });
                xhrMap.delete(file.id);
                doChange(fileAfterChange, void 0, {
                    remove: true,
                });
            });
        }
        function handleDownload(file) {
            const {
                onDownloadRef: { value: onDownload },
            } = NUpload;
            void Promise.resolve(
                onDownload ? onDownload(Object.assign({}, file)) : true
            ).then((res) => {
                if (res !== false) {
                    (0, utils_1.download)(file.url, file.name);
                }
            });
        }
        function handleAbort(file) {
            const { xhrMap } = NUpload;
            const xhr = xhrMap.get(file.id);
            xhr === null || xhr === void 0 ? void 0 : xhr.abort();
            handleRemove(Object.assign({}, file));
        }
        const showModal = (0, vue_1.ref)(false);
        const modalRef = (0, vue_1.ref)();
        function handlePreviewClick() {
            if (props.file.type.indexOf('video') > -1) {
                showModal.value = true;
                return;
            }
            const {
                onPreviewRef: { value: onPreview },
            } = NUpload;
            if (onPreview) {
                onPreview(props.file);
            } else if (props.listType === 'image-card') {
                const { value } = imageRef;
                if (!value) return;
                value.click();
            }
        }
        const deriveFileThumbnailUrl = () =>
            __awaiter(this, void 0, void 0, function* () {
                const { listType } = props;
                if (listType !== 'image' && listType !== 'image-card') {
                    return;
                }
                if (NUpload.shouldUseThumbnailUrlRef.value(props.file)) {
                    thumbnailUrlRef.value =
                        yield NUpload.getFileThumbnailUrlResolver(props.file);
                }
            });
        const videoCover = (0, vue_1.ref)('');
        (0, vue_1.watchEffect)(() =>
            __awaiter(this, void 0, void 0, function* () {
                void deriveFileThumbnailUrl();
                videoCover.value = yield (0, getVideoInfo_1.getVideoinfo)(
                    props.file
                );
            })
        );
        return {
            mergedTheme: NUpload.mergedThemeRef,
            progressStatus: progressStatusRef,
            buttonType: buttonTypeRef,
            showProgress: showProgressRef,
            disabled: NUpload.mergedDisabledRef,
            showCancelButton: showCancelButtonRef,
            showRemoveButton: showRemoveButtonRef,
            showDownloadButton: showDownloadButtonRef,
            showRetryButton: showRetryButtonRef,
            showPreviewButton: showPreviewButtonRef,
            mergedThumbnailUrl: mergedThumbnailUrlRef,
            shouldUseThumbnailUrl: NUpload.shouldUseThumbnailUrlRef,
            renderIcon: NUpload.renderIconRef,
            imageRef,
            handleRemoveOrCancelClick,
            handleDownloadClick,
            handleRetryClick,
            handlePreviewClick,
            showModal,
            modalRef,
            videoCover,
        };
    },
    render() {
        var _a, _b;
        const { clsPrefix, mergedTheme, listType, file, renderIcon } = this;
        let icon;
        const isImageType = listType === 'image';
        const isImageCardType = listType === 'image-card';
        if (isImageType || isImageCardType) {
            icon =
                !this.shouldUseThumbnailUrl(file) || !this.mergedThumbnailUrl
                    ? (0, vue_1.h)(
                          'span',
                          { class: `${clsPrefix}-upload-file-info__thumbnail` },
                          renderIcon
                              ? renderIcon(file)
                              : (0, utils_1.isImageFile)(file)
                              ? (0, vue_1.h)(
                                    _internal_1.NBaseIcon,
                                    { clsPrefix },
                                    { default: () => icons_2.imageIcon }
                                )
                              : (0, vue_1.h)(image_1.NImage, {
                                    src: this.videoCover,
                                    ref: 'imageRef',
                                })
                      )
                    : (0, vue_1.h)(
                          'a',
                          {
                              rel: 'noopener noreferer',
                              target: '_blank',
                              href: file.url || void 0,
                              class: `${clsPrefix}-upload-file-info__thumbnail`,
                              onClick: this.handlePreviewClick,
                          },
                          listType === 'image-card'
                              ? (0, vue_1.h)(image_1.NImage, {
                                    src: this.mergedThumbnailUrl || void 0,
                                    previewSrc: file.url || void 0,
                                    alt: file.name,
                                    ref: 'imageRef',
                                })
                              : (0, vue_1.h)('img', {
                                    src: this.mergedThumbnailUrl || void 0,
                                    alt: file.name,
                                })
                      );
        } else {
            icon = (0, vue_1.h)(
                'span',
                { class: `${clsPrefix}-upload-file-info__thumbnail` },
                renderIcon
                    ? renderIcon(file)
                    : (0, vue_1.h)(
                          _internal_1.NBaseIcon,
                          { clsPrefix },
                          {
                              default: () =>
                                  (0, vue_1.h)(icons_1.AttachIcon, null),
                          }
                      )
            );
        }
        const progress = (0, vue_1.h)(UploadProgress_1.default, {
            show: this.showProgress,
            percentage: file.percentage || 0,
            status: this.progressStatus,
        });
        const showName = listType === 'text' || listType === 'image';
        return (0, vue_1.h)(
            'div',
            {
                class: [
                    `${clsPrefix}-upload-file`,
                    `${clsPrefix}-upload-file--${this.progressStatus}-status`,
                    file.url &&
                        file.status !== 'error' &&
                        listType !== 'image-card' &&
                        `${clsPrefix}-upload-file--with-url`,
                    `${clsPrefix}-upload-file--${listType}-type`,
                ],
            },
            (0, vue_1.h)(
                'div',
                { class: `${clsPrefix}-upload-file-info` },
                icon,
                (0, vue_1.h)(
                    'div',
                    { class: `${clsPrefix}-upload-file-info__name` },
                    showName &&
                        (file.url && file.status !== 'error'
                            ? (0, vue_1.h)(
                                  'a',
                                  {
                                      rel: 'noopener noreferer',
                                      target: '_blank',
                                      href: file.url || void 0,
                                      onClick: this.handlePreviewClick,
                                  },
                                  file.name
                              )
                            : (0, vue_1.h)(
                                  'div',
                                  null,
                                  (0, vue_1.h)(
                                      'span',
                                      { onClick: this.handlePreviewClick },
                                      file.name
                                  ),
                                  (_b = (_a = this.$slots).chunkNumber) ===
                                      null || _b === void 0
                                      ? void 0
                                      : _b.call(_a)
                              )),
                    isImageType && progress
                ),
                (0, vue_1.h)(
                    'div',
                    {
                        class: [
                            `${clsPrefix}-upload-file-info__action`,
                            `${clsPrefix}-upload-file-info__action--${listType}-type`,
                        ],
                    },
                    this.showPreviewButton
                        ? (0, vue_1.h)(
                              button_1.NButton,
                              {
                                  key: 'preview',
                                  quaternary: true,
                                  type: this.buttonType,
                                  onClick: this.handlePreviewClick,
                                  theme: mergedTheme.peers.Button,
                                  themeOverrides:
                                      mergedTheme.peerOverrides.Button,
                                  builtinThemeOverrides: buttonThemeOverrides,
                              },
                              {
                                  icon: () =>
                                      (0, vue_1.h)(
                                          _internal_1.NBaseIcon,
                                          { clsPrefix },
                                          {
                                              default: () =>
                                                  (0, vue_1.h)(
                                                      icons_1.EyeIcon,
                                                      null
                                                  ),
                                          }
                                      ),
                              }
                          )
                        : null,
                    (this.showRemoveButton || this.showCancelButton) &&
                        !this.disabled &&
                        (0, vue_1.h)(
                            button_1.NButton,
                            {
                                key: 'cancelOrTrash',
                                theme: mergedTheme.peers.Button,
                                themeOverrides:
                                    mergedTheme.peerOverrides.Button,
                                quaternary: true,
                                builtinThemeOverrides: buttonThemeOverrides,
                                type: this.buttonType,
                                onClick: this.handleRemoveOrCancelClick,
                            },
                            {
                                icon: () =>
                                    (0, vue_1.h)(
                                        _internal_1.NIconSwitchTransition,
                                        null,
                                        {
                                            default: () =>
                                                this.showRemoveButton
                                                    ? (0, vue_1.h)(
                                                          _internal_1.NBaseIcon,
                                                          {
                                                              clsPrefix,
                                                              key: 'trash',
                                                          },
                                                          {
                                                              default: () =>
                                                                  (0, vue_1.h)(
                                                                      icons_1.TrashIcon,
                                                                      null
                                                                  ),
                                                          }
                                                      )
                                                    : (0, vue_1.h)(
                                                          _internal_1.NBaseIcon,
                                                          {
                                                              clsPrefix,
                                                              key: 'cancel',
                                                          },
                                                          {
                                                              default: () =>
                                                                  (0, vue_1.h)(
                                                                      icons_1.CancelIcon,
                                                                      null
                                                                  ),
                                                          }
                                                      ),
                                        }
                                    ),
                            }
                        ),
                    this.showRetryButton &&
                        !this.disabled &&
                        (0, vue_1.h)(
                            button_1.NButton,
                            {
                                key: 'retry',
                                quaternary: true,
                                type: this.buttonType,
                                onClick: this.handleRetryClick,
                                theme: mergedTheme.peers.Button,
                                themeOverrides:
                                    mergedTheme.peerOverrides.Button,
                                builtinThemeOverrides: buttonThemeOverrides,
                            },
                            {
                                icon: () =>
                                    (0, vue_1.h)(
                                        _internal_1.NBaseIcon,
                                        { clsPrefix },
                                        {
                                            default: () =>
                                                (0, vue_1.h)(
                                                    icons_1.RetryIcon,
                                                    null
                                                ),
                                        }
                                    ),
                            }
                        ),
                    this.showDownloadButton
                        ? (0, vue_1.h)(
                              button_1.NButton,
                              {
                                  key: 'download',
                                  quaternary: true,
                                  type: this.buttonType,
                                  onClick: this.handleDownloadClick,
                                  theme: mergedTheme.peers.Button,
                                  themeOverrides:
                                      mergedTheme.peerOverrides.Button,
                                  builtinThemeOverrides: buttonThemeOverrides,
                              },
                              {
                                  icon: () =>
                                      (0, vue_1.h)(
                                          _internal_1.NBaseIcon,
                                          { clsPrefix },
                                          {
                                              default: () =>
                                                  (0, vue_1.h)(
                                                      icons_1.DownloadIcon,
                                                      null
                                                  ),
                                          }
                                      ),
                              }
                          )
                        : null
                )
            ),
            !isImageType && progress,
            (0, vue_1.h)(
                modal_1.NModal,
                {
                    show: this.showModal,
                    ref: 'modalRef',
                    preset: 'card',
                    style: { width: '650px' },
                    onClose: () => {
                        this.showModal = false;
                    },
                    title: '\u89C6\u9891\u9884\u89C8',
                },
                {
                    default: () =>
                        (0, vue_1.h)('video', {
                            src: file.url,
                            controls: true,
                            style: { width: '100%' },
                        }),
                }
            )
        );
    },
});
