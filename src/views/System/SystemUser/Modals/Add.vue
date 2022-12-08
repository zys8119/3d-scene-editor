<template>
    <wp-modal v-model="show" width="500px" title="新增员工">
        <wp-pro-form ref="formRef" v-model="formData" label-width="100px" :schemas="schemas" @submit="handleSubmit"/>
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
import { Organization } from '@/api/v1/system/organization'
import { User } from '@/api/typing'
import { Toast } from 'wisdom-plus'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)
const formData = ref<Partial<User<false>>>({})
const formRef = ref<InstanceType<typeof WpProForm>>()
const organization = ref<Partial<Organization>>()

const schemas = computed<Schemas>(() => [
    {
        prop: 'name',
        label: '姓名',
        component: WpInput,
        required: true
    },
    {
        prop: 'username',
        label: '用户名',
        component: WpInput,
        required: true
    },
    {
        prop: 'mobile',
        label: '手机',
        component: WpInput,
        required: true
    },
    {
        prop: 'password',
        label: '密码',
        component: WpInput,
        required: true,
        hide: Boolean(info.value)
    },
    {
        prop: 'is_admin',
        label: '是否管理员',
        component: WpSwitch,
        required: true,
    },
    {
        prop: 'avatar',
        label: '头像',
        component: WpProUpload,
        componentProps: {
            api: {
                upload: api.common.upload
            },
            preset: 'card',
            accept: '.jpg,.png,.gif,.bmp',
            limit: 1
        }
    }
])

const info = ref<Partial<User> | null>()
async function open(row?: User) {
    info.value = null
    formData.value = {
        is_admin: false
    }
    show.value = true
    if (row && row.id) {
        info.value = {...row}
        formData.value = info.value
        if (info.value.avatar) formData.value.avatar = [info.value.avatar as any]
    }
}
defineExpose({ open })

async function handleSubmit() {
    const _data = {...formData.value, avatar: formData.value.avatar ? formData.value.avatar[0].id : ''}
    const res = formData.value && formData.value.id ? await api.v1.system.user.put(formData.value.id, _data) : await api.v1.system.user.post(_data)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}
</script>