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
                            @editBtn="editBtn"
                        />
                    </n-space>
                </n-card>
            </n-gi>
            <n-gi :span="4">
                <n-card size="small" :title="currentInfo.name" segmented>
                    <template #header-extra>
                        <n-button type="primary" @click="add('company', '公司')"
                            >新建公司</n-button
                        >
                    </template>
                    <n-form
                        :label-width="100"
                        label-placement="left"
                        size="small"
                    >
                        <n-form-item :label="`${currentType}编码:`">{{
                            currentInfo.code
                        }}</n-form-item>
                        <n-form-item :label="`${currentType}名称:`">{{
                            currentInfo.name
                        }}</n-form-item>
                        <n-form-item label="部门负责人:">{{
                            currentInfo.managers &&
                            currentInfo.managers.length > 0
                                ? currentInfo.managers
                                      .map((v) => v.name)
                                      .join(',')
                                : '未设置'
                        }}</n-form-item>
                        <n-form-item label="角色:">{{
                            currentInfo.roles && currentInfo.roles.length > 0
                                ? currentInfo.roles.map((v) => v.name).join(',')
                                : '未设置'
                        }}</n-form-item>
                        <n-form-item label="上级:">{{
                            currentInfo.parent_name || '无'
                        }}</n-form-item>
                        <n-form-item label="全路径:">{{
                            currentInfo.total_path
                        }}</n-form-item>
                        <n-form-item label="是否启用:">
                            <n-tag v-if="currentInfo.is_enabled" type="success"
                                >有效</n-tag
                            >
                            <n-tag v-else type="error">禁用</n-tag>
                        </n-form-item>
                    </n-form>
                </n-card>
            </n-gi>
        </n-grid>
    </div>
</template>
<script lang="ts" setup>
import { useDialog, useMessage } from 'naive-ui';

const dialog = useDialog();
const message = useMessage();

const currentInfo = ref({});
const currentId = ref('');

const nodeTypeName = {
    company: '公司',
    department: '部门',
};

const selected = (k) => {
    currentId.value = k[0];
    if (gwRef.value) gwRef.value.init();
    init();
};

const editBtn = (k, row) => {
    switch (k) {
        case 1:
            add('company', '公司', row.id, null);
            break;
        case 2:
            add('department', '部门', row.id, null);
            break;
        case 3:
            bindAdminRef.value.open(row.id);
            break;
        case 4:
            bindRoleRef.value.open(row.id);
            break;
        case 5:
            add(row.node_type, nodeTypeName[row.node_type], row.parent_id, row);
            break;
        case 6:
            deleteTree(row.id);
            break;
    }
};

const add = (
    node_type: string,
    type_name: string,
    parentId?: string,
    row?: any
) => {
    organizationFormRef.value.open(node_type, type_name, parentId, row);
};

const deleteTree = (id) => {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.v1.system.organization.remove([id]);
            message.success('删除成功');
            organizationTreeRef.value.init();
        },
    });
};

const init = async () => {
    const res = await api.v1.system.organization.getDetail(currentId.value);
    currentInfo.value = { ...res.data };
    // currentType.value = nodeTypeName[currentInfo.value.node_type];
};

const organizationTreeRef = ref();
const organizationFormRef = ref();
const gwRef = ref();
const bindAdminRef = ref();
const bindRoleRef = ref();
</script>
