<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="用户列表"
        :bordered="false"
        :style="{ width: '80%' }"
        segmented
    >
        <n-search-table-page
            v-if="tId"
            ref="searchTablePageRef"
            :data-table-props="{ columns: columns }"
            :data-api="api.sass.api.v1.tenantUserInfo.list"
            :params="{
                tenantId: tId,
                ignoreTenant: true,
            }"
            :search-table-space="{
                size: 10,
            }"
            :search-props="{
                addText: '新增用户',
                showAdd: store.permissions.indexOf('addUser') > -1,
            }"
            padding="0px"
            @add="addUser(null)"
        >
            <template #search_handle_after>
                <n-permission has="bindUser">
                    <n-button type="warning" @click="bindUsersRef?.open()"
                        >绑定用户</n-button
                    >
                </n-permission>
            </template>
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_avatar="{ row }">
                <n-avatar size="small" :src="row.avatar?.url" />
            </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '启用' : '禁用'
                }}</n-tag>
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-permission has="editUser">
                        <n-button
                            size="small"
                            @click="addUser(row)"
                            type="success"
                            >编辑</n-button
                        >
                    </n-permission>
                    <n-permission has="deleteUser">
                        <n-button
                            size="small"
                            @click="deleteUser(row)"
                            type="error"
                            >删除</n-button
                        >
                    </n-permission>
                </n-space>
            </template>
        </n-search-table-page>
        <user-form ref="userFormRef" @submit="init" :tId="tId" />
        <bind-users ref="bindUsersRef" @submit="init" :tId="tId" />
    </n-modal>
</template>

<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { TenantUserListData } from '@/api/sass/api/v1/tenant-user-info';
import UserForm from '@/views/system/tenant/models/user-form.vue';
import BindUsers from '@/views/system/tenant/models/bind-users.vue';
import useStore from '@/store/modules/main';

const dialog = useDialog();
const message = useMessage();
const store = useStore();

const show = ref(false);
const tId = ref(null);

// 接口
const columns = ref([
    {
        title: '#',
        align: 'center',
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
const addUser = (row: TenantUserListData | null) => {
    userFormRef.value.open(row);
};
const deleteUser = (row: TenantUserListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.tenantUserInfo.delete(
                [row.id],
                tId.value
            );
            message.success('删除成功');
            init();
        },
    });
};

const open = (id: string) => {
    show.value = true;
    tId.value = id;
};

const init = () => {
    nextTick(() => searchTablePageRef.value.initData());
};

const userFormRef = ref();
const bindUsersRef = ref();
const searchTablePageRef = ref();

defineExpose({ open });
</script>

<style scoped></style>
