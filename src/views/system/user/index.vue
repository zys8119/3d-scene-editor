<template>
    <div class="system-user">
        <n-search-table-page
            ref="searchTablePageRef"
            page-field="page_num"
            size-field="page_size"
            :data-table-props="{
                columns: columns,
            }"
            :dataApi="api.sass.api.v1.user.list"
            :search-props="{
                addText: '新增用户',
                showDeleteSelect: true,
            }"
            @deleteSelect="deleteSelect"
            @add="add(null)"
        >
            <template #table_is_admin="{ row }">
                <n-tag
                    size="small"
                    :type="row.is_admin ? 'success' : 'warning'"
                    >{{ row.is_admin ? '是' : '否' }}</n-tag
                >
            </template>
            <template #table_is_enabled="{ row }">
                <n-tag
                    size="small"
                    :type="row.is_enabled ? 'success' : 'error'"
                    >{{ row.is_enabled ? '有效' : '失效' }}</n-tag
                >
            </template>
            <template #table_avatar="{ row }">
                <n-avatar
                    size="small"
                    :src="row.avatar ? row.avatar.url : ''"
                />
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-button @click="add(row)" size="small" type="success"
                        >编辑</n-button
                    >
                    <n-button @click="deleteRow(row)" size="small" type="error"
                        >删除</n-button
                    >
                </n-space>
            </template>
        </n-search-table-page>
        <user-form ref="userFormRef" @submit="init"></user-form>
    </div>
</template>
<script lang="ts" setup>
import { useDialog, useMessage, DataTableRowKey } from 'naive-ui';
import { UserListData } from '@/api/sass/api/v1/user';

const dialog = useDialog();
const message = useMessage();

const columns = ref([
    {
        type: 'selection',
    },
    {
        title: '#',
        key: 'key',
        align: 'center',
        width: '45px',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '姓名', key: 'name', align: 'center' },
    { title: '用户名', key: 'username', align: 'center' },
    { title: '头像', key: 'avatar', align: 'center' },
    { title: '手机', key: 'mobile', align: 'center' },
    { title: '是否管理员', key: 'is_admin', align: 'center' },
    { title: '是否有效', key: 'is_enabled', align: 'center' },
    { title: '创建时间', key: 'created_at', align: 'center' },
    { title: '操作', key: 'todo', align: 'center' },
]);
const deleteRow = (row: UserListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除所选数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.user.delete([row.id]);
            message.success('删除成功');
            init();
        },
    });
};

const add = (row) => {
    userFormRef.value?.open(row);
};

const init = async () => {
    nextTick(() => searchTablePageRef.value?.initData());
};

const searchTablePageRef = ref();
const userFormRef = ref();
const resetPasswordRef = ref();
</script>
