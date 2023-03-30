<template>
    <div class="menu">
        <n-cascade-menu
            v-model:tree="tree"
            :editable="true"
            :config="{
                addNodeText: '新增菜单',
            }"
            @node:add="handleAdd"
            @node:edit="handleEdit"
            @node:delete="handleDelete"
        />
        <menu-form ref="menuFormRef" />
    </div>
</template>

<script lang="ts" setup>
import { TreeNodeAddCallback, TreeNode } from 'naive-ui';
import MenuForm from '@/views/system/menu/models/menu-form.vue';

const tree = ref<TreeNode[]>([]);

function handleAdd(
    nodeList: TreeNode<{ name: string; value: string }>[],
    done: TreeNodeAddCallback
) {
    console.log(nodeList);
    console.log(done);
    menuFormRef.value.open();
}

function handleEdit(node: TreeNode<{ value: string }>) {
    console.log(node);
}

function handleDelete(node: TreeNode<{ value: string }>) {
    console.log(node);
}

const menuFormRef = ref();
</script>

<style scoped></style>
