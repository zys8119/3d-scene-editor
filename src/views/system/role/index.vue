<template>
    <div class="role">
        <n-search-table-page
            ref="searchTablePageRef"
            :data-table-props="{ columns: columns }"
            :data-api="api.sass.api.v1.role.list"
            :search-table-space="{
                size: 20,
            }"
            :search-props="{
                addText: '新增角色',
                showAdd: store.permissions.indexOf('addRole') > -1,
            }"
            @add="openForm(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '启用' : '禁用'
                }}</n-tag>
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-permission has="apiAuth">
                        <n-button
                            size="small"
                            @click="openAuthAuth(row)"
                            type="primary"
                            >接口权限</n-button
                        >
                    </n-permission>
                    <n-permission has="menuAuth">
                        <n-button
                            size="small"
                            @click="openMenuAuth(row)"
                            type="primary"
                            >菜单权限</n-button
                        >
                    </n-permission>
                    <n-permission has="bindUser">
                        <n-button
                            size="small"
                            @click="openBindUsers(row)"
                            type="primary"
                            >绑定人员</n-button
                        >
                    </n-permission>
                    <n-permission has="editRole">
                        <n-button
                            size="small"
                            @click="openForm(row)"
                            type="success"
                            >编辑</n-button
                        >
                    </n-permission>
                    <n-permission has="deleteRole">
                        <n-button
                            size="small"
                            @click="handleDelete(row)"
                            type="error"
                            >删除</n-button
                        >
                    </n-permission>
                </n-space>
            </template>
        </n-search-table-page>
        <bind-users ref="bindUsersRef" />
        <role-form ref="roleFormRef" @save="searchTablePageRef.initData()" />
        <menu-auth ref="menuAuthRef" />
        <api-auth ref="apiAuthRef" />
    </div>
</template>

<script lang="ts" setup>
import { RoleListData } from '@/api/sass/api/v1/role';
import { useDialog, useMessage } from 'naive-ui';
import RoleForm from '@/views/system/role/models/role-form.vue';
import MenuAuth from '@/views/system/role/models/menu-auth.vue';
import ApiAuth from '@/views/system/role/models/api-auth.vue';
import BindUsers from '@/views/system/role/models/bind-users.vue';
import useStore from '@/store/modules/main';

const store = useStore();

const dialog = useDialog();
const message = useMessage();

const columns = ref([
    {
        title: '#',
        align: 'center',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '名称', key: 'name', align: 'center' },
    { title: '编码', key: 'code', align: 'center' },
    { title: '状态', key: 'status', align: 'center' },
    { title: '操作', key: 'todo', align: 'center' },
]);

const openForm = (row: RoleListData | null) => {
    roleFormRef.value.open(row);
};

// 绑定人员
const openBindUsers = (row: RoleListData) => {
    bindUsersRef.value.open(row.id);
};

// 菜单权限
const openMenuAuth = (row: RoleListData) => {
    menuAuthRef.value.open(row.id);
};

// 接口权限
const openAuthAuth = (row: RoleListData) => {
    apiAuthRef.value.open(row.id);
};

function handleDelete(node: RoleListData) {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.role.delete([node.id]);
            message.success('删除成功');
            searchTablePageRef.value?.initData();
        },
    });
}

const searchTablePageRef = ref();
const bindUsersRef = ref();
const roleFormRef = ref();
const menuAuthRef = ref();
const apiAuthRef = ref();
</script>

<style scoped></style>
