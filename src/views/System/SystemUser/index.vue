<template>
    <wp-pro-page-layout
        ref="layoutRef"
        size="medium"
        :pagination-map="{ page: 'page_num', size: 'page_size', no_page: 'disable_page' }"
        :form="{
            placeholder: '搜索姓名/手机号/用户名'
        }"
        :text="{
            batchDelete: '删除'
        }"
        :table="{ columns, props: {onEdit: edit} }"
        :apis="{
            list: (...args) => api.v1.system.user.get(...args),
            delete: api.v1.system.user.del
        }"
    >
        <template #table-avatar="{ row }">
            <wp-avatar :src="row.avatar ? row.avatar.url : ''" size="45px" border-radius="4px">
                <template #empty>
                    {{ row.name.slice(0, 1) }}
                </template>
            </wp-avatar>
        </template>
        <template #table-is_admin="{ row }">
            <el-tag v-if="row.is_admin" type="success">是</el-tag>
            <el-tag v-else type="warning">否</el-tag>
        </template>
        <template #buttons>
            <wp-button size="medium" type="primary" @click="addRef?.open()">新增用户</wp-button>
            <wp-button size="medium" type="warning" :disabled="layoutRef?.selections.length === 0" @click="resetUsersPassword">批量重置密码</wp-button>
        </template>
    </wp-pro-page-layout>

    <Add ref="addRef" @submit="layoutRef?.refresh()"/>
    <ResetPassword ref="ResetPasswordRef"/>
</template>

<script lang="ts" setup>
import Add from '@/views/System/SystemUser/Modals/Add.vue'
import {User} from '@/api/typing'
import ResetPassword from '@/views/System/SystemUser/Modals/ResetPassword.vue'

const columns = [
    {
        number: true,
        label: '序号',
        width: '65px'
    },
    {
        prop: 'username',
        label: '用户名'
    },
    {
        prop: 'name',
        label: '姓名'
    },
    {
        prop: 'avatar',
        label: '头像',
        width: '100px'
    },
    {
        prop: 'mobile',
        label: '手机'
    },
    {
        prop: 'is_admin',
        label: '是否管理员 '
    },
    {
        prop: 'created_at',
        label: '创建时间'
    },
    {label:'操作', width: '80px', fixed: 'right', btns: [
        {name: '编辑', type: 'success', emit: 'edit', size: 'mini'},
    ]},
]

// 编辑
const edit = (row: {row: User}) => {
    addRef.value.open(row.row)
}

// 批量重置密码
const resetUsersPassword = () => {
    ResetPasswordRef.value.open(layoutRef.value?.selections.map((v: User) => v.id))
}

const layoutRef = ref()
const addRef = ref()
const ResetPasswordRef = ref()
</script>

<style scoped>

</style>