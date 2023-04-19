<template>
    <div class="menu">
        <n-cascade-menu
            ref="cascadeMenuRef"
            v-model:tree="tree"
            :load-tree="loadTree"
            :editable="true"
            :config="{
                addNodeText: '新增菜单',
            }"
            :tree-options="{
                label: 'title',
            }"
            @node:add="handleAdd"
            @node:edit="handleEdit"
            @node:delete="handleDelete"
        >
            <template #node_menu="{ node, emit }">
                <n-dropdown
                    trigger="hover"
                    :options="[
                        {
                            label: '按钮设置',
                            key: 'button',
                            props: { onClick: () => emit('node:edit', node) },
                        },
                        {
                            label: '编辑',
                            key: 'edit',
                            props: { onClick: () => emit('node:edit', node) },
                        },
                        {
                            label: '删除',
                            key: 'delete',
                            props: { onClick: () => emit('node:delete', node) },
                        },
                    ]"
                >
                    <n-icon :style="{ margin: 'auto 8px' }">
                        <SvgIcon name="svgs-qita" />
                    </n-icon>
                </n-dropdown>
            </template>
        </n-cascade-menu>
        <menu-form
            ref="menuFormRef"
            :menus="tree"
            @save="cascadeMenuRef.refresh()"
        />
    </div>
</template>

<script lang="ts" setup>
import { TreeNode, useDialog, useMessage } from 'naive-ui';
import { MenuListData } from '@/api/sass/api/v1/menu';
import MenuForm from '@/views/system/menu/models/menu-form.vue';

const dialog = useDialog();
const message = useMessage();

const tree = ref<MenuListData>([]);
function handleAdd(parent: TreeNode | undefined) {
    menuFormRef.value.open(null, parent);
}

function handleEdit(node: TreeNode<{ value: string }>) {
    menuFormRef.value.open(node, null);
}

function handleDelete(node: TreeNode<{ id: number }>) {
    dialog.warning({
        title: '警告',
        content: '确定删除该条数据么？',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: async () => {
            await window.api.sass.api.v1.menu.delete([node.id]);
            message.success('删除成功');
            cascadeMenuRef.value?.refresh();
        },
    });
}

const loadTree = async () => {
    const res = await window.api.sass.api.v1.menu.tree.list();
    return res.data.data;
};

const cascadeMenuRef = ref();
const menuFormRef = ref();
</script>

<style scoped></style>
