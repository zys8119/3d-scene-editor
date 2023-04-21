<template>
    <div class="position">
        <n-search-table-page
            ref="searchTablePageRef"
            :data-table-props="{ columns: columns }"
            :data-api="api.sass.api.v1.position.list"
            :search-table-space="{
                size: 20,
            }"
            @add="addPosition(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_status="{ row }">
                <n-tag size="small" :type="row.status ? 'success' : 'error'">{{
                    row.status ? '启用' : '禁用'
                }}</n-tag>
            </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-button
                        size="small"
                        @click="addPosition(row)"
                        type="success"
                        >编辑</n-button
                    >
                    <n-button
                        size="small"
                        @click="deletePosition(row)"
                        type="error"
                        >删除</n-button
                    >
                </n-space>
            </template>
        </n-search-table-page>
        <position-form
            ref="positionFormRef"
            @save="searchTablePageRef.initData()"
        />
    </div>
</template>

<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import PositionForm from '@/views/system/position/models/position-form.vue';
import { PositionListData } from '@/api/sass/api/v1/position';

const dialog = useDialog();
const message = useMessage();

// 接口
const columns = ref([
    {
        title: '#',
        align: 'center',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '职位名称', key: 'name', align: 'center' },
    { title: '职位编码', key: 'code', align: 'center' },
    { title: '状态', key: 'status', align: 'center' },
    { title: '操作', key: 'todo', align: 'center' },
]);
const addPosition = (row: PositionListData | null) => {
    positionFormRef.value.open(row);
};
const deletePosition = (row: PositionListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.position.delete([row.id]);
            message.success('删除成功');
            searchTablePageRef.value?.initData();
        },
    });
};

const positionFormRef = ref();
const searchTablePageRef = ref();
</script>

<style scoped></style>
