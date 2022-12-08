<template>
    <wp-modal v-model="show" width="500px" title="重置密码">
        <wp-pro-form ref="formRef" v-model="formData" label-width="120px" :schemas="schemas" @submit="handleSubmit"/>
        <template #footer>
            <wp-space justify="flex-end">
                <wp-button size="medium" plain @click="show = false">
                    取消
                </wp-button>
                <wp-button type="primary" size="medium" @click="formRef?.submit()">
                    保存
                </wp-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script setup lang="ts">
import { Password } from '@/api/v1/system/staff'
import { Toast } from 'wisdom-plus'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)
const formRef = ref<InstanceType<typeof WpProForm>>()

const formData = ref<Partial<Password>>({})

const schemas = computed<Schemas>(() => [
    {
        prop: 'admin_password',
        label: '管理员密码',
        component: WpInput,
        componentProps: {
            type: 'password'
        },
        required: true
    },
    {
        prop: 'new_password',
        label: '新密码',
        component: WpInput,
        componentProps: {
            type: 'password'
        },
        required: true
    },
    {
        prop: 'confirm_password',
        label: '确认密码',
        component: WpInput,
        componentProps: {
            type: 'password'
        },
        required: true
    }
])

const idsList = ref<string[]>([])
function open(ids?: string[]) {
    if (!ids || ids.length === 0) return
    show.value = true
    idsList.value = ids
}
defineExpose({ open })

async function handleSubmit() {
    await validate(() => {
        if (formData.value?.new_password !== formData.value?.confirm_password) throw '新密码与确认密码不同'
    })
    const res = await api.v1.system.staff.resetPassword(idsList.value, formData.value)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}
</script>