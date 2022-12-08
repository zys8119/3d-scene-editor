<template>
    <wp-modal v-model="show" width="500px" title="密码重置">
        <wp-pro-form ref="formRef" v-model="formData" label-width="110px" :schemas="schemas" @submit="handleSubmit"/>
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

<script lang="ts" setup>
import {WpToast} from 'wisdom-plus'

const emit = defineEmits(['save'])

const show = ref(false)
const formData = ref()
const schemas = computed<Schemas>(() => [
    {
        prop: 'admin_password',
        label: '当前登录密码',
        component: WpInput,
        required: true,
        hide: ids.value.length < 1,
        componentProps: {
            type: 'password'
        }
    },
    {
        prop: 'old_password',
        label: '旧密码',
        component: WpInput,
        required: true,
        hide: ids.value.length > 0,
        componentProps: {
            type: 'password'
        }
    },
    {
        prop: 'new_password',
        label: '新密码',
        component: WpInput,
        required: true,
        componentProps: {
            type: 'password'
        }
    },
])

// 提交
const handleSubmit = async() => {
    if (ids.value.length > 0) {
        await window.api.v1.system.user.resetUsersPassword({
            id_list: ids.value,
            ...formData.value
        })
    } else {
        await window.api.v1.system.user.resetPassword(formData.value)
    }
    WpToast.success('密码重置成功')
    show.value = false
    emit('save')
}

const ids = ref<string[]>([])
const open = (idList?: string[]) => {
    show.value = true
    if (idList) ids.value = idList
}
const formRef = ref()

defineExpose({open})
</script>

<style scoped>

</style>