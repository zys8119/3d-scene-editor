<template>
    <div class="system-user">
        <n-search-table-page
            ref="searchTablePageRef"
            size-field="pageSize"
            :data-table-props="{
                columns: columns,
            }"
            :dataApi="api.sass.api.v1.user.list"
            :search-props="{
                addText: '新增用户',
                showAdd: store.permissions.indexOf('addUser') > -1,
            }"
            @add="add(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '有效' : '失效'
                }}</n-tag>
            </template>
            <template #table_avatar="{ row }">
                <n-avatar size="small" :src="row.avatar?.url" />
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-permission has="editUser">
                        <n-button @click="add(row)" size="small" type="success"
                            >编辑</n-button
                        >
                    </n-permission>
                    <n-permission has="deleteUser">
                        <n-button
                            @click="deleteRow(row)"
                            size="small"
                            type="error"
                            >删除</n-button
                        >
                    </n-permission>
                </n-space>
            </template>
        </n-search-table-page>
        <user-form ref="userFormRef" @submit="init"></user-form>
    </div>
</template>
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { UserListData } from '@/api/sass/api/v1/user';
import UserForm from '@/views/system/user/models/user-form.vue';
import useStore from '@/store/modules/main';

const store = useStore();

const dialog = useDialog();
const message = useMessage();

const columns = ref([
    {
        title: '#',
        key: 'key',
        align: 'center',
        width: '45px',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '用户名', key: 'username', align: 'center' },
    { title: '昵称', key: 'nickname', align: 'center' },
    { title: '头像', key: 'avatar', align: 'center' },
    { title: '手机', key: 'mobile', align: 'center' },
    { title: '是否有效', key: 'status', align: 'center' },
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
</script>
