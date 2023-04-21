<template>
    <div class="user">
        <n-search-table-page
            ref="searchTablePageRef"
            :data-table-props="{ columns: columns }"
            :data-api="api.sass.api.v1.organizationUserInfo.list"
            :params="{
                organizationId: oId,
            }"
            :search-table-space="{
                size: 20,
            }"
            @add="addUser(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_avatar="{ row }">
                <n-avatar size="small" :src="row.avatar" />
            </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '启用' : '禁用'
                }}</n-tag>
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-button size="small" @click="addUser(row)" type="success"
                        >编辑</n-button
                    >
                    <n-button size="small" @click="deleteUser(row)" type="error"
                        >删除</n-button
                    >
                </n-space>
            </template>
        </n-search-table-page>
        <user-form ref="userFormRef" @submit="init" :oId="oId" />
    </div>
</template>

<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { OrganizationUserListData } from '@/api/sass/api/v1/organization-user-info';
import UserForm from '@/views/system/organization/components/models/user-form.vue';

const dialog = useDialog();
const message = useMessage();

const props = defineProps<{
    oId: string;
}>();

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
            await window.api.sass.api.v1.organizationUserInfo.delete([row.id]);
            message.success('删除成功');
            init();
        },
    });
};

const init = () => {
    nextTick(() => searchTablePageRef.value.initData());
};

const userFormRef = ref();
const searchTablePageRef = ref();

defineExpose({ init });
</script>

<style scoped></style>
