<template>
    <div class="user" v-if="oId">
        <n-search-table-page
            ref="searchTablePageRef"
            :data-table-props="{
                columns: columns,
                rowKey: (row) => row.id,
                'onUpdate:checkedRowKeys': handleCheck,
            }"
            :data-api="api.sass.api.v1.organizationUserInfo.list"
            :params="{
                organizationId: oId,
            }"
            :search-table-space="{
                size: 20,
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
                <n-permission has="batchUpdatePassword">
                    <n-button
                        type="warning"
                        @click="updatePasswordRef?.open()"
                        :disabled="selected.length < 1"
                        >批量修改密码</n-button
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
        <user-form ref="userFormRef" @submit="init" :oId="oId" />
        <bind-users ref="bindUsersRef" @submit="init" :oId="oId" />
        <update-password ref="updatePasswordRef" :ids="selected" />
    </div>
</template>

<script lang="ts" setup>
import { DataTableRowKey, useDialog, useMessage } from 'naive-ui';
import { OrganizationUserListData } from '@/api/sass/api/v1/organization-user-info';
import UserForm from '@/views/system/organization/components/models/user-form.vue';
import useStore from '@/store/modules/main';
import BindUsers from '@/views/system/organization/components/models/bind-users.vue';
import UpdatePassword from '@/views/system/organization/components/models/update-password.vue';

const dialog = useDialog();
const message = useMessage();

const store = useStore();

const props = defineProps<{
    oId: string;
}>();

const selected = ref([]);

// 接口
const columns = ref([
    {
        type: 'selection',
    },
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
const addUser = (row: OrganizationUserListData | null) => {
    userFormRef.value.open(row);
};
const deleteUser = (row: OrganizationUserListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.organizationUserInfo.delete(
                [row.id],
                props.oId
            );
            message.success('删除成功');
            init();
        },
    });
};

const init = () => {
    nextTick(() => searchTablePageRef.value.initData());
};

// 勾选数据
const handleCheck = (row: DataTableRowKey[]) => {
    selected.value = row;
};

const userFormRef = ref();
const bindUsersRef = ref();
const searchTablePageRef = ref();
const updatePasswordRef = ref();

defineExpose({ init });
</script>

<style scoped></style>
