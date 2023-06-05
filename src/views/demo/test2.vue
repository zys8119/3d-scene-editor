<template>
    <n-search-table-page
        ref="searchTablePageRef"
        :data-table-props="{ columns: columns }"
        @search="a"
    >
        <template #search_form_pre>
            <n-date-picker
                v-model:value="range"
                type="datetimerange"
                clearable
            />
        </template>
        <template #table_avatar="{ row }">
            <n-avatar round size="small" :src="row.avatar" />
        </template>
        <template #table_gender="{ row }">
            <n-tag v-if="row.gender === 1" type="primary" size="small"
                >男</n-tag
            >
            <n-tag v-else type="info" size="small">女</n-tag>
        </template>
        <template #table_todo>
            <n-space justify="center">
                <n-button type="primary" size="small">编辑</n-button>
                <n-button type="error" size="small">删除</n-button>
            </n-space>
        </template>
    </n-search-table-page>
</template>

<script lang="ts" setup>
import { NSpace, NButton } from 'naive-ui';
import { onMounted } from 'vue';

window.$message.warning('this is test message');
setTimeout(() => window.$apis.test.index.xxx(), 1000);

const columns = ref([
    {
        title: '#',
        align: 'center',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '头像', key: 'avatar', align: 'center' },
    { title: '姓名', key: 'name', align: 'center' },
    { title: '邮箱', key: 'email', align: 'center' },
    { title: '性别', key: 'gender', align: 'center' },
    { title: '操作', key: 'todo', align: 'center', fixed: 'right' },
]);

const range = ref();

onMounted(() => {
    searchTablePageRef.value?.initData();
});

const a = () => {
    console.log(11);
};

const searchTablePageRef = ref();
</script>
