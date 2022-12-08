<template>
    <wp-modal
        v-model="showModal"
        :title="isAdd ? '新建角色' : '编辑角色'"
        width="600px"
        :overlay="{
            zIndex: 200
        }"
    >
        <wp-pro-form
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
import type { Role } from '@/api/typing'

const api = window.api.v1.system.role
const emit = defineEmits<{
    (e: 'save'): void
}>()

/**
 * 修改新增角色
 */
const showModal = ref(false)
const isAdd = ref(false)
const formData = ref<Partial<Role>>({})
const formRef = ref<DataFormInstance | null>(null)

const schemas: Schemas<Partial<Role>> = [
    {
        prop: 'name',
        label: '角色名称',
        component: ElInput,
        required: true
    },
    {
        prop: 'code',
        label: 'CODE',
        component: ElInput,
        required: true
    },
    {
        prop: 'is_enabled',
        label: '角色是否有效',
        component: ElSwitch,
        required: true
    }
]

const handleSubmit = async() => {
    if (isAdd.value) {
        await api.post(formData.value)
    } else {
        if (!formData.value.id) return
        await api.put(formData.value.id, formData.value)
    }
    ElMessage({ message: '提交成功！', type: 'success' })
    emit('save')
    showModal.value = false
}

const open = async(add = true, id?: string) => {
    if (!id) {
        isAdd.value = true
        showModal.value = true
        formData.value = { is_enabled: true }
    } else {
        try {
            if (!id) return
            isAdd.value = false
            showModal.value = true
            const res = await api.detail(id)
            formData.value = res.data
        } catch {
            showModal.value = false
        }
    }
}

defineExpose({ open })
</script>