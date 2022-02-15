<template>
    <wp-space vertical :item-style="{ 1: { width: '100%' } }">
        <el-button type="primary" @click="modifyModal?.open()">
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
                                click: () => modifyModal?.open(scope.id)
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
                    :show-checked-delete="false"
                    :apis="{
                        list: (data, page) => api.list(Number(id), page, data.search),
                        delete: (ids) => api.delete(ids.join(','))
                    }"
                >
                    <template #buttons>
                        <el-button type="primary" @click="userModal?.open(true)">新增用户</el-button>
                    </template>
                    <template #handle="{ row }">
                        <el-button size="small" type="success" @click="userModal?.open(false, row.id)">编辑</el-button>
                    </template>
                </page-layout>
                <el-empty v-else description="请选择组织架构"></el-empty>
            </div>
        </wp-space>
    </wp-space>
    <user-modal :id="id" ref="userModal" @refresh="layoutRef?.refresh()" @get-organization-list="getOrganizationList" />
    <modify-modal :id="id" ref="modifyModal" :organizations="organizations" @refresh="layoutRef?.refresh()" @get-organization-list="getOrganizationList" />
</template>

<script name="Organization" lang="ts" setup>
import type { TableColumns } from '@/typings'
import { Organization } from '@/api/v1/common'
import type { TableUser } from '@/api/v1/system/user'
import { Operation } from '@element-plus/icons'
import { Dialog } from 'wisdom-plus'

import UserModal from './Modals/User.vue'
import ModifyModal from './Modals/Modify.vue'

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

const handleDeleteOrg = async(deleteId: number) => {
    await Dialog({
        content: '确定要删除吗？',
        confirmProps: {
            type: 'danger',
            size: 'small'
        },
        cancelProps: {
            size: 'small'
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

const userModal = ref()
const modifyModal = ref()
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