<template>
    <wp-pro-page-layout
        ref="layoutRef"
        size="medium"
        :pagination-map="{ page: 'page_num', size: 'page_size', no_page: 'disable_page' }"
        :form="{
            hideInput: true,
            hideSearch: true,
            hideReset: true,
        }"
        :showCheckedDelete="false"
        :table="{ columns, props: {onRole: role, onUsers: users, onEdit: edit, onDel: del}, hideSelection: true }"
        :apis="{
            list: (...args) => api.v1.system.post.get(...args, props.oId),
        }"
    >
        <template #buttons>
            <wp-button size="medium" type="primary" @click="postFormRef?.open(oId)">新增岗位</wp-button>
        </template>
    </wp-pro-page-layout>

    <post-form ref="postFormRef" @submit="refresh"/>
    <bind-admin ref="bindAdminRef" :isGw="true"/>
    <bind-role ref="bindRoleRef" :isGw="true"/>
</template>

<script lang="ts" setup>
import {Post} from '@/api/typing'
import {WpToast} from 'wisdom-plus'
import PostForm from '@/views/System/Organization/components/modals/PostForm.vue'
import BindAdmin from '@/views/System/Organization/Modals/BindAdmin.vue'
import BindRole from '@/views/System/Organization/Modals/BindRole.vue'

const props = defineProps<{
    oId: string
}>()
const columns = [
    {
        number: true,
        label: '序号',
        width: '60px'
    },
    {
        prop: 'name',
        label: '岗位名称'
    },
    {
        prop: 'created_at',
        label: '创建时间'
    },
    {label:'操作', width: '350px', fixed: 'right', btns: [
        {name: '绑定角色', type: 'warning', emit: 'role', size: 'mini'},
        {name: '绑定员工', type: 'warning', emit: 'users', size: 'mini'},
        {name: '编辑', type: 'success', emit: 'edit', size: 'mini'},
        {name: '删除', type: 'danger', emit: 'del', size: 'mini'},
    ]},
]

// 绑定角色
const role = (row: {row: Post}) => {
    bindRoleRef.value.open(props.oId, row.row.id)
}

// 绑定人员
const users = (row: {row: Post}) => {
    bindAdminRef.value.open(props.oId, row.row.id)
}

// 编辑
const edit = (row: {row: Post}) => {
    postFormRef.value.open(props.oId, row.row)
}

// 删除
const del = (row: {row: Post}) => {
    ElMessageBox.confirm(
        '是否删除该岗位?',
        '提示',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(async() => {
        await window.api.v1.system.post.del([row.row.id!])
        WpToast.success('删除成功')
        refresh()
    })
}

// 刷新
const refresh = () => {
    nextTick(() => layoutRef.value?.refresh())
}

const layoutRef = ref()
const postFormRef = ref()
const bindAdminRef = ref()
const bindRoleRef = ref()



defineExpose({refresh})
</script>

<style scoped lang="less">
</style>