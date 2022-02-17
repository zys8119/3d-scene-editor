<template>
    <wp-upload
        v-model="fileItems"
        :multiple="multiple"
        :accept="accept"
        :limit="limit"
        :pin="!allowRemove"
        :drop="drag"
        :upload="handleUpload"
        :delete="handleDelete"
        auto-upload
    />
</template>

<script lang="ts" setup>
import type { FileItem } from '@/typings'
import { Dialog } from 'wisdom-plus'
import type { UploadFile } from 'wisdom-plus'

const props = withDefaults(defineProps<{
    drag?: boolean,
    multiple?: boolean,
    accept?: string,
    modelValue?: (FileItem & UploadFile)[],
    limit?: number,
    allowRemove?: boolean,
    extra?: Record<string, any>
}>(), {
    multiple: true,
    allowRemove: true
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: FileItem[]): void
}>()

const fileItems = useVModel(props, 'modelValue', emit, {
    passive: true,
    deep: true
})

watchEffect(() => {
    if (!fileItems.value) {
        fileItems.value = []
    }
})

const handleUpload = async(files: UploadFile[]) => {
    files.forEach(async(file) => {
        if (!file.file) return
        try {
            const res = await window.api.v1.common.upload(file.file, props.extra)
            Object.assign(file, res.data)
            file.status = 0
        } catch {
            file.status = 3
        }
    })
}

const handleDelete = async(file: UploadFile, initiative?: boolean) => {
    if (initiative) {
        await Dialog({
            content: '确定要删除这个文件吗？',
            confirmProps: {
                type: 'danger',
                size: 'small'
            },
            cancelProps: {
                size: 'small'
            }
        })
    }
    // TODO
    void file
}
</script>

<style lang="less" scoped>
.wp-upload {
    flex: 1;
}
</style>