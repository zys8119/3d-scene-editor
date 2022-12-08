<template>
    <wp-modal v-model="show" :title="`新建${nextLevel ? '下' : '同'}级${type}`" width="500px">
        <wp-pro-form ref="formRef" v-model="formData" :schemas="schemas" label-width="100px" @submit="handleSubmit" />
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
import { Organization } from '@/api/v1/system/organization'
import { Toast } from 'wisdom-plus'
import {Orange} from '@element-plus/icons-vue'

const emit = defineEmits<{
    (e: 'submit'): void
}>()

const show = ref(false)

const formRef = ref<InstanceType<typeof WpProForm>>()
const formData = ref<Partial<Organization>>({})
const schemas = computed<Schemas>(() => [
{
        prop: 'code',
        label: `${type.value}编码`,
        component: WpInput,
        required: true
    },
    {
        prop: 'name',
        label: `${type.value}名称`,
        component: WpInput,
        required: true
    },
    {
        prop: 'is_enabled',
        label: '是否启用',
        component: WpSwitch,
    },
])

const type = ref<'公司' | '部门'>('公司')
const nextLevel = ref(false)
const currentOrganization = ref<Partial<Organization>>({})
async function open(index: keyof any = 1, parentId?: string | null | undefined, info?: Partial<Organization>) {
    /**
     * type
     * 1: '公司'
     * 2: '部门'
     */
    formData.value = {}
    show.value = true
    type.value = index === 2 ? '部门' : '公司'
    formData.value.parent_id = parentId || null
    formData.value.node_type = type.value === '公司' ? 'company' : 'department'
    formData.value.is_enabled = true
    if (info) {
        currentOrganization.value = info
        formData.value = {...info}
    }
}
defineExpose({ open })

async function handleSubmit() {
    const res = currentOrganization.value.id ?
        await api.v1.system.organization.update(currentOrganization.value.id, formData.value) :
        await api.v1.system.organization.create(formData.value)
    res.message && Toast.success(res.message)
    show.value = false
    emit('submit')
}
</script>