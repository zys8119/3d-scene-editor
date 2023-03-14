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
    </div>
</template>

<script lang="ts" setup>
import { TreeNodeAddCallback, TreeNode } from 'naive-ui';

const tree = ref<TreeNode[]>([]);

function handleAdd(
    nodeList: TreeNode<{ name: string; value: string }>[],
    done: TreeNodeAddCallback
) {
    console.log(nodeList);
    console.log(done);
}

function handleEdit(node: TreeNode<{ value: string }>) {
    console.log(node);
}

function handleDelete(node: TreeNode<{ value: string }>) {
    console.log(node);
}
</script>

<style scoped></style>
