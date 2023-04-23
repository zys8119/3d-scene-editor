<template>
    <div class="user-group">
        <n-card>
            <n-tabs default-value="group" animated>
                <n-tab-pane name="groupType" tab="组类型">
                    <n-search-table-page
                        ref="searchTablePageGroupTypeRef"
                        :data-table-props="{ columns: columnsGroupType }"
                        :data-api="api.sass.api.v1.groupType.list"
                        :search-table-space="{
                            size: 20,
                        }"
                        @add="addGroupTypeForm(null)"
                    >
                        <template #prefix="{ itemCount }">
                            共{{ itemCount }}项
                        </template>
                        <template #table_status="{ row }">
                            <n-tag
                                size="small"
                                :type="row.status ? 'success' : 'error'"
                                >{{ row.status ? '启用' : '禁用' }}</n-tag
                            >
                        </template>
                        <template #table_todo="{ row }">
                            <n-space justify="center">
                                <n-button
                                    size="small"
                                    @click="addGroupTypeForm(row)"
                                    type="success"
                                    >编辑</n-button
                                >
                                <n-button
                                    size="small"
                                    @click="deleteGroupType(row)"
                                    type="error"
                                    >删除</n-button
                                >
                            </n-space>
                        </template>
                    </n-search-table-page>
                </n-tab-pane>
                <n-tab-pane name="group" tab="用户组">
                    <n-search-table-page
                        ref="searchTablePageGroupRef"
                        :data-table-props="{ columns: columnsGroup }"
                        :data-api="api.sass.api.v1.group.list"
                        :search-table-space="{
                            size: 20,
                        }"
                        @add="addGroupForm(null)"
                    >
                        <template #prefix="{ itemCount }">
                            共{{ itemCount }}项
                        </template>
                        <template #table_status="{ row }">
                            <n-tag
                                size="small"
                                :type="row.status ? 'success' : 'error'"
                                >{{ row.status ? '启用' : '禁用' }}</n-tag
                            >
                        </template>
                        <template #table_todo="{ row }">
                            <n-space justify="center">
                                <n-button
                                    size="small"
                                    @click="bindUsersForm(row)"
                                    type="primary"
                                    >绑定用户</n-button
                                >
                                <n-button
                                    size="small"
                                    @click="addGroupForm(row)"
                                    type="success"
                                    >编辑</n-button
                                >
                                <n-button
                                    size="small"
                                    @click="deleteGroup(row)"
                                    type="error"
                                    >删除</n-button
                                >
                            </n-space>
                        </template>
                    </n-search-table-page>
                </n-tab-pane>
            </n-tabs>
        </n-card>
        <group-type-form
            ref="groupTypeFormRef"
            @save="searchTablePageGroupTypeRef.initData()"
        />
        <group-form
            ref="groupFormRef"
            @save="searchTablePageGroupRef.initData()"
        />
        <bind-users ref="bindUsersRef" />
    </div>
</template>

<script lang="ts" setup>
import GroupTypeForm from '@/views/system/user-group/models/group-type-form.vue';
import { GroupTypeListData } from '@/api/sass/api/v1/group-type';
import { useDialog, useMessage } from 'naive-ui';
import { GroupListData } from '@/api/sass/api/v1/group';
import GroupForm from '@/views/system/user-group/models/group-form.vue';
import BindUsers from '@/views/system/user-group/models/bind-users.vue';

const dialog = useDialog();
const message = useMessage();

// 组类型
const columnsGroupType = ref([
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
const addGroupTypeForm = (row: GroupTypeListData | null) => {
    groupTypeFormRef.value.open(row);
};
const deleteGroupType = (row: GroupTypeListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.groupType.delete([row.id]);
            message.success('删除成功');
            searchTablePageGroupTypeRef.value?.initData();
        },
    });
};

// 用户组
const columnsGroup = ref([
    {
        title: '#',
        align: 'center',
        render: (_: any, index: number) => {
            return `${index + 1}`;
        },
    },
    { title: '名称', key: 'name', align: 'center' },
    { title: '类型', key: 'name', align: 'center' },
    { title: '编码', key: 'code', align: 'center' },
    { title: '状态', key: 'status', align: 'center' },
    { title: '操作', key: 'todo', align: 'center' },
]);
const addGroupForm = (row: GroupListData | null) => {
    groupFormRef.value.open(row);
};
const deleteGroup = (row: GroupListData) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.group.delete([row.id]);
            message.success('删除成功');
            searchTablePageGroupRef.value?.initData();
        },
    });
};

// 绑定用户
const bindUsersForm = (row: GroupListData) => {
    bindUsersRef.value?.open(row.id);
};

const groupTypeFormRef = ref();
const groupFormRef = ref();
const bindUsersRef = ref();
const searchTablePageGroupTypeRef = ref();
const searchTablePageGroupRef = ref();
</script>

<style scoped></style>
