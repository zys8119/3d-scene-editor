<template>
    <page-layout
        ref="layoutRef"
        :form="{
            placeholder: '请输入角色关键字',
            queryAfterReset: true
        }"
        :table="{
            columns: tableColumns
        }"
        :apis="{
            list: api.list,
            delete: api.deleteSome
        }"
    >
        <template #buttons>
            <el-button type="primary" :icon="Plus" @click="modifyModal?.open(true)">新建角色</el-button>
        </template>
        <template #handle="{ row }">
            <el-button type="success" size="small" @click="modifyModal?.open(false, row.id)">编辑</el-button>
        </template>
        <template #handle-suffix="{ row }">
            <el-button type="primary" size="small" @click="bindModal?.open(row.id)">绑定人员</el-button>
            <el-button type="primary" size="small" @click="menuModal?.open(row.id)">权限设置</el-button>
        </template>
        <template #table-valid="{ row }">
            {{ row.valid ? '是' : '否' }}
        </template>
    </page-layout>
    <bind-modal ref="bindModal" @refresh="layoutRef?.refresh()" />
    <modify-modal ref="modifyModal" @refresh="layoutRef?.refresh()" />
    <menu-modal ref="menuModal"/>
</template>

<script name="Role" lang="ts" setup>
import { Plus } from '@element-plus/icons'
import type { TableData } from '@/api/v1/system/role'

import BindModal from './Modals/Bind.vue'
import ModifyModal from './Modals/Modify.vue'
import MenuModal from './Modals/Menu.vue'

const api = window.api.v1.system.role
const layoutRef = ref<PageLayoutInstance | null>(null)

const tableColumns: TableColumns<TableData> = [
    {
        prop: 'name',
        label: '角色名称'
    },
    {
        prop: 'datetime_created',
        label: '创建时间'
    },
    {
        prop: 'valid',
        label: '是否有效'
    }
]

const bindModal = ref()
const modifyModal = ref()
const menuModal = ref()
</script>