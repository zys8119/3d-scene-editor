<template>
    <n-modal
        v-model:show="show"
        preset="card"
        title="按钮列表"
        :bordered="false"
        :style="{ width: '60%' }"
        segmented
    >
        <n-search-table-page
            v-if="mId"
            ref="searchTablePageRef"
            :data-table-props="{ columns: columns }"
            :data-api="api.sass.api.v1.button.list"
            :params="{
                menuId: mId,
            }"
            :search-table-space="{
                size: 20,
            }"
            @add="openForm(null)"
        >
            <template #prefix="{ itemCount }"> 共{{ itemCount }}项 </template>
            <template #table_todo="{ row }">
                <n-space justify="center">
                    <n-button size="small" @click="openForm(row)" type="success"
                        >编辑</n-button
                    >
                    <n-button
                        size="small"
                        @click="handleDelete(row)"
                        type="error"
                        >删除</n-button
                    >
                </n-space>
            </template>
        </n-search-table-page>
        <button-form
            ref="buttonFormRef"
            @save="searchTablePageRef.initData()"
        />
    </n-modal>
</template>

<script lang="ts" setup>
import ButtonForm from '@/views/system/menu/models/button-form.vue';
import { ButtonListData } from '@/api/sass/api/v1/button';
import { useDialog, useMessage } from 'naive-ui';

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
    { title: '操作', key: 'todo', align: 'center' },
]);

const show = ref(false);
const mId = ref('');
const open = (id: string) => {
    mId.value = id;
    show.value = true;
};

const openForm = (row: ButtonListData | null) => {
    buttonFormRef.value.open(row, mId.value);
};

function handleDelete(node: ButtonListData) {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.button.delete([node.id]);
            message.success('删除成功');
            searchTablePageRef.value?.initData();
        },
    });
}

const searchTablePageRef = ref();
const buttonFormRef = ref();

defineExpose({ open });
</script>

<style scoped></style>
