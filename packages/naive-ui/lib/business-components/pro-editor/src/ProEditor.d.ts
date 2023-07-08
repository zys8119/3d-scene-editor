import { ExtractPublicPropTypes } from '../../../_utils';
import { PropType } from 'vue';
import { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';
import '@wangeditor/editor/dist/css/style.css';
import { CustomUpload, OnEditorUploadFile, OnUpdateValue } from './interfaces';
export declare const proEditorProps: {
    modelValue: {
        type: StringConstructor;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    upload: {
        type: PropType<OnEditorUploadFile>;
    };
    toolbarConfig: {
        type: PropType<Partial<IToolbarConfig>>;
    };
    editorConfig: {
        type: PropType<Partial<IEditorConfig>>;
    };
    toolbarProps: {
        type: PropType<Object>;
        default: () => {};
    };
    editorProps: {
        type: PropType<Object>;
        default: () => {};
    };
    'onUpdate:modelValue': PropType<OnUpdateValue>;
    theme: PropType<
        import('../../../_mixins').Theme<
            'ProEditor',
            {
                textareaBgColor: string;
                textareaColor: string;
                textareaBorderColor: string;
                textareaSlightBorderColor: string;
                textareaSlightColor: string;
                textareaSlightBgColor: string;
                textareaSelectedBorderColor: string;
                textareaHandlerBgColor: string;
                toolbarColor: string;
                toolbarBgColor: string;
                toolbarActiveColor: string;
                toolbarActiveBgColor: string;
                toolbarDisabledColor: string;
                toolbarBorderColor: string;
                modalButtonBgColor: string;
                modalButtonBorderColor: string;
            },
            any
        >
    >;
    themeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProEditor',
                {
                    textareaBgColor: string;
                    textareaColor: string;
                    textareaBorderColor: string;
                    textareaSlightBorderColor: string;
                    textareaSlightColor: string;
                    textareaSlightBgColor: string;
                    textareaSelectedBorderColor: string;
                    textareaHandlerBgColor: string;
                    toolbarColor: string;
                    toolbarBgColor: string;
                    toolbarActiveColor: string;
                    toolbarActiveBgColor: string;
                    toolbarDisabledColor: string;
                    toolbarBorderColor: string;
                    modalButtonBgColor: string;
                    modalButtonBorderColor: string;
                },
                any
            >
        >
    >;
    builtinThemeOverrides: PropType<
        import('../../../_mixins/use-theme').ExtractThemeOverrides<
            import('../../../_mixins').Theme<
                'ProEditor',
                {
                    textareaBgColor: string;
                    textareaColor: string;
                    textareaBorderColor: string;
                    textareaSlightBorderColor: string;
                    textareaSlightColor: string;
                    textareaSlightBgColor: string;
                    textareaSelectedBorderColor: string;
                    textareaHandlerBgColor: string;
                    toolbarColor: string;
                    toolbarBgColor: string;
                    toolbarActiveColor: string;
                    toolbarActiveBgColor: string;
                    toolbarDisabledColor: string;
                    toolbarBorderColor: string;
                    modalButtonBgColor: string;
                    modalButtonBorderColor: string;
                },
                any
            >
        >
    >;
};
export type ProEditorProps = ExtractPublicPropTypes<typeof proEditorProps>;
declare const ProEditor: import('vue').DefineComponent<
    {
        modelValue: {
            type: StringConstructor;
        };
        height: {
            type: StringConstructor;
            default: string;
        };
        zIndex: {
            type: NumberConstructor;
            default: number;
        };
        upload: {
            type: PropType<OnEditorUploadFile>;
        };
        toolbarConfig: {
            type: PropType<Partial<IToolbarConfig>>;
        };
        editorConfig: {
            type: PropType<Partial<IEditorConfig>>;
        };
        toolbarProps: {
            type: PropType<Object>;
            default: () => {};
        };
        editorProps: {
            type: PropType<Object>;
            default: () => {};
        };
        'onUpdate:modelValue': PropType<OnUpdateValue>;
        theme: PropType<
            import('../../../_mixins').Theme<
                'ProEditor',
                {
                    textareaBgColor: string;
                    textareaColor: string;
                    textareaBorderColor: string;
                    textareaSlightBorderColor: string;
                    textareaSlightColor: string;
                    textareaSlightBgColor: string;
                    textareaSelectedBorderColor: string;
                    textareaHandlerBgColor: string;
                    toolbarColor: string;
                    toolbarBgColor: string;
                    toolbarActiveColor: string;
                    toolbarActiveBgColor: string;
                    toolbarDisabledColor: string;
                    toolbarBorderColor: string;
                    modalButtonBgColor: string;
                    modalButtonBorderColor: string;
                },
                any
            >
        >;
        themeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProEditor',
                    {
                        textareaBgColor: string;
                        textareaColor: string;
                        textareaBorderColor: string;
                        textareaSlightBorderColor: string;
                        textareaSlightColor: string;
                        textareaSlightBgColor: string;
                        textareaSelectedBorderColor: string;
                        textareaHandlerBgColor: string;
                        toolbarColor: string;
                        toolbarBgColor: string;
                        toolbarActiveColor: string;
                        toolbarActiveBgColor: string;
                        toolbarDisabledColor: string;
                        toolbarBorderColor: string;
                        modalButtonBgColor: string;
                        modalButtonBorderColor: string;
                    },
                    any
                >
            >
        >;
        builtinThemeOverrides: PropType<
            import('../../../_mixins/use-theme').ExtractThemeOverrides<
                import('../../../_mixins').Theme<
                    'ProEditor',
                    {
                        textareaBgColor: string;
                        textareaColor: string;
                        textareaBorderColor: string;
                        textareaSlightBorderColor: string;
                        textareaSlightColor: string;
                        textareaSlightBgColor: string;
                        textareaSelectedBorderColor: string;
                        textareaHandlerBgColor: string;
                        toolbarColor: string;
                        toolbarBgColor: string;
                        toolbarActiveColor: string;
                        toolbarActiveBgColor: string;
                        toolbarDisabledColor: string;
                        toolbarBorderColor: string;
                        modalButtonBgColor: string;
                        modalButtonBorderColor: string;
                    },
                    any
                >
            >
        >;
    },
    {
        mergedClsPrefixRef: globalThis.ComputedRef<string>;
        cssVarsRef: globalThis.ComputedRef<{
            '--w-e-textarea-bg-color': string;
            '--w-e-textarea-color': string;
            '--w-e-textarea-border-color': string;
            '--w-e-textarea-slight-border-color': string;
            '--w-e-textarea-slight-color': string;
            '--w-e-textarea-slight-bg-color': string;
            '--w-e-textarea-selected-border-color': string;
            '--w-e-textarea-handler-bg-color': string;
            '--w-e-toolbar-color': string;
            '--w-e-toolbar-bg-color': string;
            '--w-e-toolbar-active-color': string;
            '--w-e-toolbar-active-bg-color': string;
            '--w-e-toolbar-disabled-color': string;
            '--w-e-toolbar-border-color': string;
            '--w-e-modal-button-bg-color': string;
            '--w-e-modal-button-border-color': string;
        }>;
        editorRef: import('vue').ShallowRef<IDomEditor | undefined>;
        withBuiltInEditorConfig: globalThis.ComputedRef<
            ProEditorProps & {
                MENU_CONF: {
                    uploadImage: {
                        customUpload: CustomUpload;
                    };
                    uploadVideo: {
                        customUpload: CustomUpload;
                    };
                };
            }
        >;
        handleCreated: (editor: IDomEditor) => void;
        handleChange: (editor: IDomEditor) => void;
    },
    unknown,
    {},
    {},
    import('vue').ComponentOptionsMixin,
    import('vue').ComponentOptionsMixin,
    {},
    string,
    import('vue').VNodeProps &
        import('vue').AllowedComponentProps &
        import('vue').ComponentCustomProps,
    Readonly<
        import('vue').ExtractPropTypes<{
            modelValue: {
                type: StringConstructor;
            };
            height: {
                type: StringConstructor;
                default: string;
            };
            zIndex: {
                type: NumberConstructor;
                default: number;
            };
            upload: {
                type: PropType<OnEditorUploadFile>;
            };
            toolbarConfig: {
                type: PropType<Partial<IToolbarConfig>>;
            };
            editorConfig: {
                type: PropType<Partial<IEditorConfig>>;
            };
            toolbarProps: {
                type: PropType<Object>;
                default: () => {};
            };
            editorProps: {
                type: PropType<Object>;
                default: () => {};
            };
            'onUpdate:modelValue': PropType<OnUpdateValue>;
            theme: PropType<
                import('../../../_mixins').Theme<
                    'ProEditor',
                    {
                        textareaBgColor: string;
                        textareaColor: string;
                        textareaBorderColor: string;
                        textareaSlightBorderColor: string;
                        textareaSlightColor: string;
                        textareaSlightBgColor: string;
                        textareaSelectedBorderColor: string;
                        textareaHandlerBgColor: string;
                        toolbarColor: string;
                        toolbarBgColor: string;
                        toolbarActiveColor: string;
                        toolbarActiveBgColor: string;
                        toolbarDisabledColor: string;
                        toolbarBorderColor: string;
                        modalButtonBgColor: string;
                        modalButtonBorderColor: string;
                    },
                    any
                >
            >;
            themeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProEditor',
                        {
                            textareaBgColor: string;
                            textareaColor: string;
                            textareaBorderColor: string;
                            textareaSlightBorderColor: string;
                            textareaSlightColor: string;
                            textareaSlightBgColor: string;
                            textareaSelectedBorderColor: string;
                            textareaHandlerBgColor: string;
                            toolbarColor: string;
                            toolbarBgColor: string;
                            toolbarActiveColor: string;
                            toolbarActiveBgColor: string;
                            toolbarDisabledColor: string;
                            toolbarBorderColor: string;
                            modalButtonBgColor: string;
                            modalButtonBorderColor: string;
                        },
                        any
                    >
                >
            >;
            builtinThemeOverrides: PropType<
                import('../../../_mixins/use-theme').ExtractThemeOverrides<
                    import('../../../_mixins').Theme<
                        'ProEditor',
                        {
                            textareaBgColor: string;
                            textareaColor: string;
                            textareaBorderColor: string;
                            textareaSlightBorderColor: string;
                            textareaSlightColor: string;
                            textareaSlightBgColor: string;
                            textareaSelectedBorderColor: string;
                            textareaHandlerBgColor: string;
                            toolbarColor: string;
                            toolbarBgColor: string;
                            toolbarActiveColor: string;
                            toolbarActiveBgColor: string;
                            toolbarDisabledColor: string;
                            toolbarBorderColor: string;
                            modalButtonBgColor: string;
                            modalButtonBorderColor: string;
                        },
                        any
                    >
                >
            >;
        }>
    >,
    {
        height: string;
        zIndex: number;
        toolbarProps: Object;
        editorProps: Object;
    },
    {}
>;
export default ProEditor;
