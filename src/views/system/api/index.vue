<template>
    <div class="api">
        <n-search-table-page
            ref="searchTablePageApiRef"
            :data-table-props="{ columns: columnsApi }"
            :data-api="api.sass.api.v1.api.list"
            :search-table-space="{
                size: 20,
            }"
            :search-props="{
                addText: '新增接口',
                showAdd: store.permissions.indexOf('addApi') > -1,
            }"
            @add="addApi(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '启用' : '禁用'
                }}</n-tag>
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-permission has="editApi">
                        <n-button
                            size="small"
                            @click="addApi(row)"
                            type="success"
                            >编辑</n-button
                        >
                    </n-permission>
                    <n-permission has="deleteApi">
                        <n-button
                            size="small"
                            @click="deleteApi(row)"
                            type="error"
                            >删除</n-button
                        >
                    </n-permission>
                </n-space>
            </template>
        </n-search-table-page>
        <api-form ref="apiFormRef" @save="searchTablePageApiRef.initData()" />
    </div>
</template>

<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { ApiListData } from '@/api/sass/api/v1/api';
import ApiForm from '@/views/system/api/models/api-form.vue';
import useStore from '@/store/modules/main';

const store = useStore();

const dialog = useDialog();
const message = useMessage();

// 接口
const columnsApi = ref([
    {
        title: '#',
        align: 'center',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '接口地址', key: 'path', align: 'center' },
    { title: '请求方式', key: 'method', align: 'center' },
    { title: '接口组', key: 'apiGroup', align: 'center' },
    { title: '状态', key: 'status', align: 'center' },
    { title: '操作', key: 'todo', align: 'center' },
]);
const addApi = (row: ApiListData | null) => {
    apiFormRef.value.open(row);
};
const deleteApi = (row: ApiListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.api.delete([row.id]);
            message.success('删除成功');
            searchTablePageApiRef.value?.initData();
        },
    });
};

const apiFormRef = ref();
const searchTablePageApiRef = ref();
</script>

<style scoped></style>
