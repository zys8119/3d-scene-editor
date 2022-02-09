<template>
    <div :id="editorId" :style="{ minHeight: (height || 0 + 42) + `px` }" class="editor" />
</template>

<script lang="ts" setup>
import E from 'wangeditor'

const props = withDefaults(defineProps<{
    mode?: 'simple' | 'default',
    modelValue: string,
    height?: number,
    excludeMenus?: string[]
}>(), {
    mode: 'simple',
    height: 300
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void,
    (e: 'mounted'): void
}>()

const text = useVModel(props, 'modelValue', emit, {
    passive: true,
    deep: true
})

const editorId = `w-e-${Math.random().toString().slice(-5)}`
let editor: InstanceType<typeof E> | null = null

const changing = ref(false)

onMounted(() => {
    editor = new E('#' + editorId)
    editor.config.height = props.height
    editor.config.onchange = (html: string) => {
        changing.value = true
        emit('update:modelValue', html)
    }
    if (props.excludeMenus) editor.config.excludeMenus = props.excludeMenus
    editor.config.menuTooltipPosition = 'down'
    editor.create()
    editor.txt.html(props.modelValue)
    emit('mounted')
})

watch(text, () => {
    if (changing.value) {
        changing.value = false
        return
    }
    if (editor) {
        editor.txt.html(props.modelValue)
    }
})

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    if (editor == null) return
    editor.destroy()
    editor = null
})
</script>

<style lang="less" scoped>
.editor {
    flex: 1;
}
</style>