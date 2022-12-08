<template>
    <wp-modal v-model="show" width="500px" title="新增员工">
        <wp-pro-form ref="formRef" v-model="formData" label-width="80px" :schemas="schemas" @submit="handleSubmit"/>
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
import { Staff } from '@/api/typing'
import { Toast } from 'wisdom-plus'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)
const formData = ref<Partial<Staff<false>>>({})
const formRef = ref<InstanceType<typeof WpProForm>>()
const organization = ref<Partial<Organization>>()

const schemas = computed<Schemas>(() => [
    {
        prop: 'username',
        label: '工号',
        component: WpInput,
        required: true
    },
    {
        prop: 'name',
        label: '姓名',
        component: WpInput,
        required: true
    },
    // {
    //     prop: 'company',
    //     label: '公司',
    //     component: WpInput,
    //     required: true
    // },
    {
        prop: 'department_name',
        label: '部门',
        component: WpInput,
        componentProps: {
            disabled: true,
            placeholder: ''
        }
    },
    {
        prop: 'mobile',
        label: '手机',
        component: WpInput,
        required: true
    },
    // {
    //     prop: '岗位',
    //     label: '岗位',
    //     component: WpInput
    // },
    // {
    //     prop: 'email',
    //     label: '邮箱',
    //     component: WpInput
    // },
    {
        prop: 'password',
        label: '密码',
        component: WpInput,
        required: true
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

async function open(organizationInitValue?: Partial<Organization>) {
    formData.value = {
        department_name: organizationInitValue?.name
    }
    organization.value = organizationInitValue || {}
    show.value = true
}
defineExpose({ open })

async function handleSubmit() {
    const res = await api.v1.system.staff.create(formData.value, organization.value?.id)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}
</script>