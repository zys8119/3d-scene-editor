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
import { defineComponent, shallowRef, onBeforeUnmount } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import '@wangeditor/editor/dist/css/style.css';
import useTheme from '../../../_mixins/use-theme';
import { proEditorLight } from '../styles';
import { useConfig } from '../../../_mixins';
import style from './styles/index.cssr';
import { computed, h } from 'vue';
export const proEditorProps = Object.assign(Object.assign({}, useTheme.props), {
    modelValue: {
        type: String,
    },
    height: {
        type: String,
        default: '360px',
    },
    zIndex: {
        type: Number,
        default: 1,
    },
    upload: {
        type: Function,
    },
    toolbarConfig: {
        type: Object,
    },
    editorConfig: {
        type: Object,
    },
    toolbarProps: {
        type: Object,
        default: () => ({}),
    },
    editorProps: {
        type: Object,
        default: () => ({}),
    },
    'onUpdate:modelValue': [Function, Array],
});
const ProEditor = defineComponent({
    name: 'ProEditor',
    props: proEditorProps,
    emit: {
        bootstrapped: ({ editor }) => void 0,
    },
    setup(props, { emit, expose }) {
        const editorRef = shallowRef();
        const handleCreated = (editor) => {
            editorRef.value = editor;
            emit('bootstrapped', { editor: editorRef.value });
        };
        const handleChange = (editor) => {
            emit('update:modelValue', editor.getHtml());
        };
        const withBuiltInEditorConfig = computed(() => {
            const customUpload = (file, callback) =>
                __awaiter(this, void 0, void 0, function* () {
                    var _a, _b, _c;
                    const res = yield (_a = props.upload) === null ||
                    _a === void 0
                        ? void 0
                        : _a.call(props, file);
                    if (
                        (_b =
                            res === null || res === void 0
                                ? void 0
                                : res.data) === null || _b === void 0
                            ? void 0
                            : _b.url
                    ) {
                        callback(
                            res.data.url,
                            (_c =
                                res === null || res === void 0
                                    ? void 0
                                    : res.data) === null || _c === void 0
                                ? void 0
                                : _c.thumbnailUrl
                        );
                    }
                });
            return Object.assign(Object.assign({}, props.editorConfig), {
                MENU_CONF: {
                    uploadImage: { customUpload },
                    uploadVideo: { customUpload },
                },
            });
        });
        onBeforeUnmount(() => {
            var _a;
            (_a = editorRef.value) === null || _a === void 0
                ? void 0
                : _a.destroy();
        });
        expose({ editor: editorRef });
        const { mergedClsPrefixRef } = useConfig();
        const themeRef = useTheme(
            'ProEditor',
            '-pro-editor',
            style,
            proEditorLight,
            props,
            mergedClsPrefixRef
        );
        const cssVarsRef = computed(() => {
            const { self } = themeRef.value;
            return {
                '--w-e-textarea-bg-color': self.textareaBgColor,
                '--w-e-textarea-color': self.textareaColor,
                '--w-e-textarea-border-color': self.textareaBorderColor,
                '--w-e-textarea-slight-border-color':
                    self.textareaSlightBorderColor,
                '--w-e-textarea-slight-color': self.textareaSlightColor,
                '--w-e-textarea-slight-bg-color': self.textareaSlightBgColor,
                '--w-e-textarea-selected-border-color':
                    self.textareaSelectedBorderColor,
                '--w-e-textarea-handler-bg-color': self.textareaHandlerBgColor,
                '--w-e-toolbar-color': self.toolbarColor,
                '--w-e-toolbar-bg-color': self.toolbarBgColor,
                '--w-e-toolbar-active-color': self.toolbarActiveColor,
                '--w-e-toolbar-active-bg-color': self.toolbarActiveBgColor,
                '--w-e-toolbar-disabled-color': self.toolbarDisabledColor,
                '--w-e-toolbar-border-color': self.toolbarBorderColor,
                '--w-e-modal-button-bg-color': self.modalButtonBgColor,
                '--w-e-modal-button-border-color': self.modalButtonBorderColor,
            };
        });
        return {
            mergedClsPrefixRef,
            cssVarsRef,
            editorRef,
            withBuiltInEditorConfig,
            handleCreated,
            handleChange,
        };
    },
    render() {
        const { mergedClsPrefixRef, cssVarsRef } = this;
        return h(
            'div',
            {
                class: `${mergedClsPrefixRef}-pro-editor`,
                style: Object.assign(Object.assign({}, cssVarsRef), {
                    zIndex: this.$props.zIndex,
                }),
            },
            h(
                Toolbar,
                Object.assign(
                    {
                        class: `${mergedClsPrefixRef}-pro-editor-toolbar`,
                        defaultConfig: this.$props.toolbarConfig,
                        style: { border: 'solid 1px #dcdfe6' },
                        editor: this.editorRef,
                    },
                    this.$props.toolbarProps
                )
            ),
            h(
                Editor,
                Object.assign(
                    {
                        class: `${mergedClsPrefixRef}-pro-editor-editor`,
                        defaultHtml: this.modelValue,
                        'v-model': this.modelValue,
                        style: {
                            border: 'solid 1px #dcdfe6',
                            height: this.height,
                        },
                        defaultConfig: this.withBuiltInEditorConfig,
                    },
                    this.$props.editorProps,
                    {
                        onOnCreated: this.handleCreated,
                        onOnChange: this.handleChange,
                    }
                )
            )
        );
    },
});
export default ProEditor;
