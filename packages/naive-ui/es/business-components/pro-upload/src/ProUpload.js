var __awaiter = function (thisArg, _arguments, P, generator) {
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
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { h, defineComponent, ref, computed } from 'vue';
import { useMessage } from '../../../message';
import { NUpload } from '../../../upload';
import { useTheme, useConfig } from '../../../_mixins';
import { call } from '../../../_utils';
import { NModal } from '../../../modal';
import { NContain } from '../../contain';
import ImgCutter from './ImgCutter';
import { NSpace } from '../../../space';
import { NButton } from '../../../button';
import { proUploadLight } from '../styles';
import style from './styles/index.cssr';
import { get } from 'lodash-es';
export const proUploadProps = Object.assign(
    Object.assign(Object.assign({}, useTheme.props), useTheme.props),
    {
        uploadProps: Object,
        value: {
            type: Array,
        },
        extra: {
            type: Object,
        },
        cut: Boolean,
        cutProps: {
            type: Object,
        },
        limitFileSize: {
            type: Boolean,
            default: false,
        },
        fileSize: {
            type: Number,
            default: 10485760,
        },
        api: {
            type: Object,
        },
        'onUpdate:value': [Function, Array],
        urlPrefix: String,
        showMessage: {
            type: Boolean,
            default: true,
        },
    }
);
const ProUpload = defineComponent({
    name: 'ProUpload',
    props: proUploadProps,
    emits: {
        success: (file) => {
            return true;
        },
    },
    setup(props, { emit }) {
        const upload = ref();
        const message = useMessage();
        const cutModal = ref(false);
        const cutterRef = ref();
        const cutPromise = ref();
        const cutResolve = ref();
        const cutReject = ref();
        const { mergedClsPrefixRef } = useConfig(props);
        const themeRef = useTheme(
            'ProUpload',
            '-pro-upload',
            style,
            proUploadLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const {
                self: { padding },
            } = themeRef.value;
            return {
                '--n-padding': padding,
            };
        });
        function handleFileList(fileList2) {
            const { 'onUpdate:value': _onUpdateValue } = props;
            if (_onUpdateValue) call(_onUpdateValue, fileList2);
        }
        function BlobToBase64(file) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        var _a;
                        return resolve(
                            (_a = event.target) === null || _a === void 0
                                ? void 0
                                : _a.result
                        );
                    };
                    reader.onerror = (error) => reject(error);
                    reader.readAsDataURL(file);
                });
            });
        }
        function handleUpload({ file, data, onFinish, onError }) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function* () {
                const formData = new FormData();
                if (data) {
                    Object.keys(data).forEach((key) => {
                        formData.append(key, data[key]);
                    });
                }
                (_b =
                    (_a = props.api) === null || _a === void 0
                        ? void 0
                        : _a.upload) === null || _b === void 0
                    ? void 0
                    : _b
                          .call(
                              _a,
                              file.file,
                              (_c = props.extra) !== null && _c !== void 0
                                  ? _c
                                  : formData,
                              (progress) => {
                                  file.percentage = progress;
                              }
                          )
                          .then((res) => {
                              message.success(
                                  '\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\uFF01'
                              );
                              const _file = Object.assign(file, res.data);
                              if (!_file.status) _file.status = 'finished';
                              if (props.urlPrefix) {
                                  _file.thumbnailUrl =
                                      props.urlPrefix +
                                      String(res.data.url_paths);
                                  _file.url =
                                      props.urlPrefix +
                                      String(res.data.url_paths);
                              } else {
                                  _file.url = res.data.url;
                                  _file.thumbnailUrl = res.data.url;
                              }
                              emit('success', _file);
                              onFinish(_file);
                          })
                          .catch((err) => {
                              onError();
                              if (props.showMessage) {
                                  return message.error(
                                      get(
                                          err,
                                          'data.message',
                                          get(
                                              err,
                                              'data.msg',
                                              '\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\uFF01'
                                          )
                                      )
                                  );
                              }
                          });
            });
        }
        const fileList = computed(() => {
            return props.value || [];
        });
        const handleBeforeUpload = (data) =>
            __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                if (
                    props.limitFileSize &&
                    ((_a = data.file.file) === null || _a === void 0
                        ? void 0
                        : _a.size) &&
                    ((_b = data.file.file) === null || _b === void 0
                        ? void 0
                        : _b.size) > props.fileSize
                ) {
                    message.error(
                        `${data.file.name}  \u6587\u4EF6\u5927\u5C0F\u8D85\u51FA\u9650\u5236\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20`
                    );
                    return false;
                }
                if (props.cut) {
                    cutModal.value = true;
                    const src = yield BlobToBase64(data.file.file);
                    (_c = cutterRef.value) === null || _c === void 0
                        ? void 0
                        : _c.handleOpen({
                              name: data.file.name,
                              src,
                          });
                    cutPromise.value = new Promise((resolve, reject) => {
                        cutReject.value = reject;
                        cutResolve.value = resolve;
                    });
                    const cutFile = yield cutPromise.value;
                    data.file.file = cutFile;
                }
                return true;
            });
        const handleClose = () => {
            var _a;
            (_a = cutterRef.value) === null || _a === void 0
                ? void 0
                : _a.handleClose();
            cutModal.value = false;
        };
        return {
            cssVarsRef,
            mergedClsPrefix: mergedClsPrefixRef,
            upload,
            fileList,
            handleUpload,
            handleFileList,
            handleBeforeUpload,
            handleClose,
            cutModal,
            cutterRef,
            cutResolve,
        };
    },
    render() {
        const ImageCutterRender = () => {
            var _a, _b, _c, _d;
            const cutHeight =
                ((_a = this.cutProps) === null || _a === void 0
                    ? void 0
                    : _a.cutHeight) || 200;
            const boxHeight =
                ((_b = this.cutProps) === null || _b === void 0
                    ? void 0
                    : _b.boxHeight) || 400;
            const scaleY = cutHeight / boxHeight;
            const cutWidth =
                ((_c = this.cutProps) === null || _c === void 0
                    ? void 0
                    : _c.cutWidth) || 200;
            const boxWidth =
                ((_d = this.cutProps) === null || _d === void 0
                    ? void 0
                    : _d.boxWidth) || 800;
            const scaleX = cutWidth / boxWidth;
            const scale = Math.max(scaleY, scaleX, 1);
            const height = boxHeight * scale;
            const width = boxWidth * scale;
            return h(
                NContain,
                { style: 'width: 800px; height: 400px', width, height },
                {
                    default: () =>
                        h(
                            ImgCutter,
                            Object.assign(
                                {
                                    ref: 'cutterRef',
                                    onCutDown: (files) => {
                                        var _a2;
                                        (_a2 = this.cutResolve) === null ||
                                        _a2 === void 0
                                            ? void 0
                                            : _a2.call(this, files.blob);
                                        this.cutModal = false;
                                    },
                                },
                                this.cutProps,
                                { boxHeight: height, boxWidth: width, scale }
                            )
                        ),
                }
            );
        };
        const { mergedClsPrefix } = this;
        return h(
            'div',
            {
                class: `${mergedClsPrefix}-pro-upload`,
                style: { display: 'inline-block', width: '100%' },
            },
            h(
                NUpload,
                Object.assign(
                    { ref: 'upload' },
                    this.$attrs,
                    this.uploadProps,
                    {
                        fileList: this.fileList,
                        onUpdateFileList: this.handleFileList,
                        customRequest: this.handleUpload,
                        onBeforeUpload: this.handleBeforeUpload,
                    }
                ),
                {
                    default: () => {
                        var _a, _b;
                        return (_b = (_a = this.$slots).default) === null ||
                            _b === void 0
                            ? void 0
                            : _b.call(_a);
                    },
                }
            ),
            this.cut &&
                h(
                    NModal,
                    {
                        show: this.cutModal,
                        preset: 'card',
                        style: { width: '850px' },
                        onClose: this.handleClose,
                        title: '\u56FE\u7247\u88C1\u526A',
                    },
                    {
                        default: ImageCutterRender,
                        footer: () =>
                            h(
                                NSpace,
                                { justify: 'center' },
                                {
                                    default: () =>
                                        h(
                                            'div',
                                            null,
                                            h(
                                                NButton,
                                                { onClick: this.handleClose },
                                                {
                                                    default: () =>
                                                        '\u53D6\u6D88',
                                                }
                                            ),
                                            h(
                                                NButton,
                                                {
                                                    type: 'primary',
                                                    style: {
                                                        marginLeft: '10px',
                                                    },
                                                    onClick: () => {
                                                        var _a;
                                                        return (_a =
                                                            this.cutterRef) ===
                                                            null ||
                                                            _a === void 0
                                                            ? void 0
                                                            : _a.cropPicture(
                                                                  false
                                                              );
                                                    },
                                                },
                                                {
                                                    default: () =>
                                                        '\u786E\u5B9A',
                                                }
                                            )
                                        ),
                                }
                            ),
                    }
                )
        );
    },
});
export default ProUpload;
