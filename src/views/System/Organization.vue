<template>
    <wp-space vertical :item-style="{ 1: { width: '100%' } }">
        <el-button type="primary" @click="handleAddOrg">
            添加
        </el-button>
        <wp-space :size="20" :item-style="{ 0: { width: '260px' }, 1: { flex: 1, overflow: 'auto' } }" :wrap="false">
            <div class="tree-box">
                <wp-tree
                    v-model:selecting="id"
                    :list="organizations"
                    :props="{
                        key: 'id',
                        title: 'name'
                    }"
                    height="calc(100vh - 220px)"
                    arrow-right
                    selectable
                >
                    <template #suffix="scope">
                        <wp-dropdown :list="[
                            {
                                index: 0,
                                title: '编辑',
                                click: () => handleMotifyOrg(scope.id)
                            },
                            {
                                index: 1,
                                title: '删除',
                                click: () => handleDeleteOrg(scope.id)
                            }
                        ]">
                            <el-icon :class="!scope.children || scope.children.length === 0 ? 'is-node' : null" @click.stop>
                                <Operation />
                            </el-icon>
                        </wp-dropdown>
                    </template>
                </wp-tree>
            </div>
            <div class="tree-box">
                <page-layout
                    v-if="id"
                    ref="layoutRef"
                    :form="{
                        placeholder: '请输入用户名/手机号',
                        queryAfterReset: true
                    }"
                    :table="{
                        columns,
                        hideSelection: true
                    }"
                    :space-props="{
                        size: 0
                    }"
                    :data="tableData"
                    :total="total"
                    :show-checked-delete="false"
                    :delete="handleDelete"
                    @query="query"
                >
                    <template #buttons>
                        <el-button type="primary" @click="handleAdd">新增用户</el-button>
                    </template>
                    <template #handle="{ row }">
                        <el-button size="small" type="success" @click="handleMotify(row.id)">编辑</el-button>
                    </template>
                </page-layout>
                <el-empty v-else description="请选择组织架构"></el-empty>
            </div>
        </wp-space>
    </wp-space>
    <wp-modal
        v-model="showModal"
        :title="isAdd ? '新增用户' : '修改用户'"
        width="500px"
        :overlay="{ zIndex: 2000 }"
    >
        <data-form
            ref="formRef"
            v-model="formData"
            label-width="120px"
            :schemas="schemas"
            @submit="handleSubmit"
        />
        <template #footer>
            <wp-space justify="center">
                <el-button @click="showModal = false">
                    取消
                </el-button>
                <el-button type="primary" @click="formRef?.submit()">
                    保存
                </el-button>
            </wp-space>
        </template>
    </wp-modal>
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

<script name="Organization" lang="ts" setup>
import type { TableColumns } from '@/typings'
import { Organization } from '@/api/v1/common'
import type { TableUser, OrganizationCreate, RegisterUser } from '@/api/v1/system/user'
import { hasGotten } from '@/components/Person/data'
import { Operation } from '@element-plus/icons'
import { Dialog } from 'wisdom-plus'

import { mobilePhone } from '@/utils/pattern'

const api = window.api.v1.user

const organizations = ref<Organization[]>([])
const getOrganizationList = () => {
    window.api.v1.common.organizationList()
        .then(res => {
            organizations.value = res.data
        })
}
getOrganizationList()

const layoutRef = ref<PageLayoutInstance | null>(null)

const id = ref<string | number | symbol>('')
const total = ref(0)
const tableData = ref<TableUser[]>([])
const query = async(form: {
    search?: string
}, page: { page: number, size: number }) => {
    const res = await api.list(Number(id.value), page, form?.search)
    tableData.value = res.data.list
    total.value = res.data.total
}

watch(id, (after, before) => {
    if (before === '') return
    layoutRef.value?.refresh(true)
})

const columns: TableColumns<TableUser> = [
    {
        prop: 'user_name',
        label: '姓名'
    },
    {
        prop: 'user_mobile_phone',
        label: '手机号'
    },
    {
        prop: 'role',
        label: '绑定角色'
    }
]

const handleDelete = (items: TableUser[]) => {
    return api.delete(items.map(item => item.id).join(','))
}

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
            options: organizations.value,
            props: {
                value: 'id',
                label: 'name',
                emitPath: false,
                checkStrictly: true
            }
        } as ExtractProps<typeof ElCascader>
    }
])

const handleAddOrg = () => {
    orgFormData.value = {}
    if (id.value) {
        orgFormData.value.parent_id = Number(id.value)
    }
    showOrgModal.value = true
    orgIsAdd.value = true
}

const handleMotifyOrg = async(id: number) => {
    showOrgModal.value = true
    orgIsAdd.value = false
    const res = await api.getOrganization(id)
    orgFormData.value = res.data
}

const handleDeleteOrg = async(deleteId: number) => {
    await Dialog({
        content: '确定要删除吗？',
        confirmProps: {
            type: 'danger'
        }
    })
    await api.deleteOrganization(deleteId)
    if (deleteId === id.value) id.value = 0
    ElMessage({
        message: '删除成功',
        type: 'success'
    })
    getOrganizationList()
}

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
    getOrganizationList()
    showOrgModal.value = false
}

/**
 * 新增用户
 */
const showModal = ref(false)
const formData = ref<Partial<RegisterUser | TableUser>>({})
const isAdd = ref(false)
const schemas = computed<Schemas<RegisterUser | TableUser>>(() => [
    {
        prop: isAdd.value ? 'name' : 'user_name',
        label: '姓名',
        component: ElInput,
        required: true
    },
    {
        prop: isAdd.value ? 'mobile_phone' : 'user_mobile_phone',
        label: '联系电话',
        component: ElInput,
        rules: [
            {
                required: true,
                pattern: mobilePhone,
                message: '请输入正确的联系电话'
            }
        ],
        required: true
    },
    // {
    //     prop: 'organization_id',
    //     label: '组织架构',
    //     component: ElCascader,
    //     componentProps: {
    //         options: organizations.value,
    //         props: {
    //             value: 'id',
    //             label: 'name',
    //             emitPath: false,
    //             checkStrictly: true
    //         }
    //     } as ExtractProps<typeof ElCascader>,
    //     hide: isAdd.value,
    //     required: true
    // }
])

const handleAdd = () => {
    formData.value = {}
    isAdd.value = true
    showModal.value = true
}

const handleMotify = async(id: number | string) => {
    isAdd.value = false
    showModal.value = true
    const res = await api.details(id)
    formData.value = res.data
}

/**
 * 提交表单
 */
const formRef = ref<DataFormInstance | null>(null)
const handleSubmit = async() => {
    if (isAdd.value) {
        await api.register({
            unit_id: Number(id.value),
            ...formData.value
        })
    } else {
        if (!formData.value.user_id) return
        await api.update(formData.value.user_id, formData.value)
    }
    ElMessage({
        message: '提交成功！',
        type: 'success'
    })
    getOrganizationList()
    layoutRef.value?.refresh(true)
    showModal.value = false
    hasGotten.value = new Set()
}
</script>

<style lang="less" scoped>
.tree-box {
    position: sticky;
    top: 0;
    background-color: #fff;
    --wp-tree-padding-left-right: 10px;
    :deep(.is-node) {
        margin-right: 12px;
    }
}
</style>