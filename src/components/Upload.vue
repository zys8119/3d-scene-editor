<template>
    <el-upload
        v-if="drag"
        drag
        action=""
        v-bind="uploadBind"
    >
        <el-icon class="el-icon--upload">
            <upload-filled />
        </el-icon>
        <div class="el-upload__text">
            将文件拖到此处，或<em>点击上传</em>
        </div>
    </el-upload>
    <el-upload
        v-else
        action=""
        v-bind="uploadBind"
    >
        <el-button type="primary">文件上传</el-button>
    </el-upload>
    <wp-space v-if="fileList.length > 0" :size="0" class="file-lists" vertical>
        <div v-for="item in fileList" :key="item.uid" class="file-list">
            {{ item.name }}
            <el-button v-if="allowRemove" type="text" size="small" @click="handleBeforeRemove(item)">删除</el-button>
        </div>
    </wp-space>
</template>

<script lang="ts" setup>
import { ExtractPropTypes } from 'vue'
import { UploadFilled } from '@element-plus/icons'

import type { FileItem } from '@/typings'

type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'
type UploadFile = {
    name: string;
    percentage?: number | undefined;
    status: UploadStatus;
    size: number;
    response?: unknown;
    uid: number;
    url?: string | undefined;
    raw: any;
}

const props = withDefaults(defineProps<{
    drag?: boolean,
    multiple?: boolean,
    accept?: string,
    modelValue: FileItem[],
    limit?: number,
    allowRemove?: boolean
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

const handleRequest = async({ file }: { file: File }) => {
    const res = await window.api.v1.common.upload(file)
    if (props.limit) {
        while (fileItems.value.length >= props.limit) {
            fileItems.value.shift()
            // Maybe here will remove the file
        }
    }
    fileItems.value.push(res.data)
}

const handleBeforeRemove = (file: UploadFile) => {
    return new Promise<void>((resolve, reject) => {
        if (!props.allowRemove) {
            reject()
            ElMessage({
                message: '文件不允许被删除',
                type: 'error'
            })
            return
        }
        const index = fileItems.value.findIndex(item => item.url === file.url)
        if (index < 0) return
        fileItems.value.splice(index, 1)
        resolve()
        return
    })
}

const fileList = computed(() => {
    return fileItems.value.map<UploadFile>(item => {
        return {
            name: item.origin_name || item.name || '',
            size: item.size,
            url: item.url,
            status: 'success',
            uid: item.id,
            raw: {}
        }
    })
})

const attrs = useAttrs()
const uploadBind = computed(() => {
    const propsBind: Partial<ExtractPropTypes<typeof ElUpload.props>> = {
        fileList: fileList.value,
        multipie: props.multiple,
        accept: props.accept,
        httpRequest: handleRequest,
        beforeRemove: handleBeforeRemove,
        showFileList: false,
        ...attrs
    }
    return propsBind
})
</script>

<script lang="ts">
defineComponent({
    inheritAttrs: false
})
</script>

<style lang="less" scoped>
.file-lists {
    margin-top: 10px;
}
.file-list {
    line-height: 20px;
    font-size: 13px;
    color: #666;
}
</style>