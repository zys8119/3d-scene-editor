<template>
    <div class="system-user">
        <n-search-table-page
            ref="searchTablePageRef"
            size-field="pageSize"
            :data-table-props="{
                columns: columns,
            }"
            :dataApi="api.sass.api.v1.tenant.list"
            :search-props="{
                addText: '新增租户',
            }"
            @add="add(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_isSuper="{ row }">
                <n-tag
                    size="small"
                    :type="row.isSuper ? 'success' : 'warning'"
                    >{{ row.isSuper ? '是' : '否' }}</n-tag
                >
            </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '有效' : '失效'
                }}</n-tag>
            </template>
            <template #table_avatar="{ row }">
                <n-avatar size="small" :src="row.avatar" />
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
        <tenant-form ref="tenantFormRef" @submit="init"></tenant-form>
    </div>
</template>
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { UserListData } from '@/api/sass/api/v1/user';
import TenantForm from '@/views/system/tenant/models/tenant-form.vue';

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
    { title: '姓名', key: 'name', align: 'center' },
    { title: '生效时间', key: 'serviceStartAt', align: 'center' },
    { title: '失效时间', key: 'serviceEndAt', align: 'center' },
    { title: '是否管理员', key: 'isSuper', align: 'center' },
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
            await window.api.sass.api.v1.tenant.delete([row.id]);
            message.success('删除成功');
            init();
        },
    });
};

const add = (row) => {
    tenantFormRef.value?.open(row);
};

const init = async () => {
    nextTick(() => searchTablePageRef.value?.initData());
};

const searchTablePageRef = ref();
const tenantFormRef = ref();
</script>
