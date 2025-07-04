<template>
    <div class="editor abs-content" ref="editorRef"></div>
</template>
<script setup lang="ts">
import { editor } from 'monaco-editor';
import './MonacoEnvironment';
import 'monaco-sql-languages/esm/all.contributions';
import { completionService } from './helpers/completionService';
const editorRef = ref();
import { setupLanguageFeatures, LanguageIdEnum } from 'monaco-sql-languages';
const props = withDefaults(
    defineProps<{
        modelValue: string;
        language?: string;
    }>(),
    {
        language: LanguageIdEnum.MYSQL,
    }
);
const emit = defineEmits(['update:modelValue']);
const { modelValue } = useVModels(props, emit);
setupLanguageFeatures(LanguageIdEnum.MYSQL, {
    completionItems: {
        enable: true,
        completionService,
    },
});
const el = useCurrentElement();
const { width, height } = useElementSize(el);

onMounted(async () => {
    const editorIN = editor.create(editorRef.value, {
        language: props.language,
        theme: 'vs-dark',
        value: modelValue.value,
        suggest: {
            snippetsPreventQuickSuggestions: false,
        },
        contextmenu: false,
    } as editor.IStandaloneEditorConstructionOptions);
    editorIN.onDidChangeModelContent(() => {
        modelValue.value = editorIN.getValue();
    });
    watchEffect(() => {
        editorIN.layout({
            width: width.value,
            height: height.value,
        });
    });
});
</script>
<style scoped lang="less">
.editor {
}
</style>
