<template>
    <div class="organization">
        <n-grid x-gap="15" :cols="6">
            <n-gi :span="2">
                <n-card size="small">
                    <n-space vertical>
                        <n-input-group>
                            <n-input
                                v-model:value="search"
                                placeholder="请输入名称"
                                clearable
                            />
                            <n-button
                                type="primary"
                                @click="organizationTreeRef.filter(search)"
                            >
                                搜索
                            </n-button>
                        </n-input-group>
                        <organization-tree
                            ref="organizationTreeRef"
                            @selected="selected"
                            @edit="editBtn"
                        />
                    </n-space>
                </n-card>
            </n-gi>
            <n-gi :span="4">
                <n-card
                    size="small"
                    :title="currentInfo.name ?? '暂无数据'"
                    segmented
                >
                    <template #header-extra>
                        <n-button
                            type="primary"
                            @click="add(0, nodeTypeName[0])"
                            >新建{{ nodeTypeName[0] }}</n-button
                        >
                    </template>
                    <n-form
                        :label-width="100"
                        label-placement="left"
                        size="small"
                        v-if="currentId"
                    >
                        <n-form-item :label="`${currentType}编码:`">{{
                            currentInfo.code
                        }}</n-form-item>
                        <n-form-item :label="`${currentType}名称:`">{{
                            currentInfo.name
                        }}</n-form-item>
                        <n-form-item label="负责人:">{{
                            currentInfo.leader || '未设置'
                        }}</n-form-item>
                        <n-form-item label="是否启用:">
                            <n-tag v-if="currentInfo.status" type="success"
                                >有效</n-tag
                            >
                            <n-tag v-else type="error">禁用</n-tag>
                        </n-form-item>
                    </n-form>
                </n-card>
            </n-gi>
        </n-grid>
        <organization-form
            ref="organizationFormRef"
            @submit="organizationTreeRef.init()"
        />
    </div>
</template>
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';
import { OrganizationListData } from '@/api/sass/api/v1/organization';
import OrganizationForm from '@/views/system/organization/models/organization-form.vue';

const dialog = useDialog();
const message = useMessage();

const currentInfo = ref<OrganizationListData>({});
const currentId = ref('');
const currentType = ref('');
const search = ref('');

const nodeTypeName = {
    0: '单位',
    1: '部门',
};

const selected = (keys: string[]) => {
    currentId.value = keys[0];
    init();
};

const editBtn = (k, row) => {
    switch (k) {
        case 'subUnit':
            add(0, nodeTypeName[0], row.id, null);
            break;
        case 'department':
            add(1, nodeTypeName[1], row.id, null);
            break;
        case 'edit':
            add(row.nodeType, nodeTypeName[row.nodeType], row.parentId, row);
            break;
        case 'delete':
            deleteTree(row.id);
            break;
    }
};

const deleteTree = (id: string) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.organization.delete([id]);
            message.success('删除成功');
            organizationTreeRef.value.init();
        },
    });
};

const init = async () => {
    const res = await window.api.sass.api.v1.organization.get(currentId.value);
    currentInfo.value = { ...res.data };
    currentType.value = nodeTypeName[currentInfo.value.nodeType];
};

const add = (
    nodeType: number,
    typeName: string,
    parentId?: string,
    row?: OrganizationListData | null
) => {
    organizationFormRef.value.open(nodeType, typeName, parentId, row);
};

const organizationTreeRef = ref();
const organizationFormRef = ref();
const gwRef = ref();
const bindAdminRef = ref();
const bindRoleRef = ref();
</script>
