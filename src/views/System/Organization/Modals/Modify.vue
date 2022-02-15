<template>
    <wp-modal v-model="showOrgModal" :title="orgIsAdd ? '添加组织架构' : '编辑组织架构'" width="800px" :overlay="{ zIndex: 2000 }">
        <data-form
            ref="orgFormRef"
            v-model="orgFormData"
            label-width="160px"
            :schemas="orgSchemas"
            @submit="handleOrgSubmit"
        >
            <template #type>
                <el-select v-model="orgFormData.type">
                    <el-option :value="1" label="行政区域" />
                    <el-option :value="2" label="企业单位" />
                    <el-option :value="3" label="部门" />
                </el-select>
            </template>
            <template #level>
                <el-select v-model="orgFormData.level" clearable>
                    <el-option :value="1" label="国" />
                    <el-option :value="2" label="省/直辖市" />
                    <el-option :value="3" label="市" />
                    <el-option :value="4" label="县/区" />
                    <el-option :value="5" label="乡/街道" />
                    <el-option :value="6" label="村/社区" />
                </el-select>
            </template>
        </data-form>
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showOrgModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="orgFormRef?.submit()">
                    保存
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
</template>

<script lang="ts" setup>
import type { OrganizationCreate } from '@/api/v1/system/user'
import { Organization } from '@/api/v1/common'

const api = window.api.v1.user
const props = defineProps<{
    id?: string | number | symbol,
    organizations: Organization[]
}>()
const emit = defineEmits<{
    (e: 'getOrganizationList'): void,
    (e: 'refresh'): void
}>()

/**
 * 新增组织架构
 */
const showOrgModal = ref(false)
const orgFormRef = ref<DataFormInstance | null>(null)
const orgFormData = ref<Partial<OrganizationCreate>>({})
const orgIsAdd = ref(false)
const orgSchemas = computed<Schemas<OrganizationCreate>>(() => [
    {
        prop: 'name',
        label: '组织架构名称',
        component: ElInput,
        required: true
    },
    {
        prop: 'type',
        label: '企业划分类型',
        required: true
    },
    {
        prop: 'level',
        label: '行政区域'
    },
    {
        prop: 'parent_id',
        label: '父级',
        component: ElCascader,
        componentProps: {
            options: props.organizations,
            props: {
                value: 'id',
                label: 'name',
                emitPath: false,
                checkStrictly: true
            }
        }
    }
])

const handleOrgSubmit = async() => {
    if (orgIsAdd.value) {
        await api.createOrganization(orgFormData.value)
    } else {
        if (!orgFormData.value.id) return
        await api.updateOrganization(orgFormData.value.id, orgFormData.value)
    }
    ElMessage({
        message: '提交成功',
        type: 'success'
    })
    emit('getOrganizationList')
    showOrgModal.value = false
}

const open = async(id: number) => {
    if (id) {
        showOrgModal.value = true
        orgIsAdd.value = false
        const res = await api.getOrganization(id)
        orgFormData.value = res.data
    } else {
        orgFormData.value = {}
        if (props.id) {
            orgFormData.value.parent_id = Number(props.id)
        }
        showOrgModal.value = true
        orgIsAdd.value = true
    }
}

defineExpose({ open })
</script>