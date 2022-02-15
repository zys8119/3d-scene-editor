<template>
    <wp-modal
        v-model="showModal"
        :title="isAdd ? '新建角色' : '编辑角色'"
        width="600px"
        :overlay="{
            zIndex: 2000
        }"
    >
        <data-form
            ref="formRef"
            v-model="formData"
            :schemas="schemas"
            label-width="150px"
            @submit="handleSubmit"
        />
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="formRef?.submit()">
                    提交
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import type { Detail } from '@/api/v1/system/role'

const api = window.api.v1.system.role
const emit = defineEmits<{
    (e: 'refresh'): void
}>()

/**
 * 修改新增角色
 */
const showModal = ref(false)
const isAdd = ref(false)
const formData = ref<Partial<Detail>>({
    valid: true
})
const formRef = ref<DataFormInstance | null>(null)

const schemas: Schemas<Detail> = [
    {
        prop: 'name',
        label: '角色名称',
        component: ElInput,
        required: true
    },
    {
        prop: 'valid',
        label: '角色是否有效',
        component: ElSwitch,
        required: true
    }
]

const handleSubmit = async() => {
    if (isAdd.value) {
        await api.create(formData.value)
    } else {
        if (!formData.value.id) return
        await api.update(formData.value.id, formData.value)
    }
    ElMessage({ message: '提交成功！', type: 'success' })
    emit('refresh')
    showModal.value = false
}

const open = async(add = true, id?: number) => {
    if (add) {
        isAdd.value = true
        showModal.value = true
        formData.value = { valid: true }
    } else {
        try {
            if (!id) return
            isAdd.value = false
            showModal.value = true
            const res = await api.details(id)
            formData.value = res.data
        } catch {
            showModal.value = false
        }
    }
}

defineExpose({ open })
</script>