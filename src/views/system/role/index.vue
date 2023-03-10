<template>
    <div class="role">
        <n-button type="primary">测试权限</n-button>
        <n-cascade-menu
            v-model:tree="tree"
            :selectable="true"
            :multiple="true"
        />
    </div>
</template>

<script lang="ts" setup>
import { TreeNodeAddCallback, TreeNode } from 'naive-ui';
const route = useRoute();
console.log(route);
const tree = ref<TreeNode[]>([
    {
        name: '中国',
        value: '100000',
        children: [
            {
                name: '浙江省',
                value: '330000',
                children: [
                    {
                        name: '宁波市',
                        value: '330200',
                        children: [
                            {
                                name: '测试页面',
                                value: '330212',
                                children: [
                                    {
                                        name: '新增按钮',
                                        value: '330212',
                                    },
                                    {
                                        name: '删除按钮',
                                        value: '330212',
                                    },
                                    {
                                        name: 'api/v1/test/test',
                                        value: '330212',
                                    },
                                    {
                                        name: 'api/v1/test/test',
                                        value: '330212',
                                    },
                                ],
                            },
                            {
                                name: '海曙区',
                                value: '330203',
                            },
                        ],
                    },
                    {
                        name: '杭州市',
                        value: '330100',
                        children: [
                            {
                                name: '上城区',
                                value: '330102',
                            },
                            {
                                name: '西湖区',
                                value: '330106',
                            },
                        ],
                    },
                ],
            },
            {
                name: '上海市',
                value: '310000',
                children: [
                    {
                        name: '普陀区',
                        value: '310107',
                    },
                    {
                        name: '静安区',
                        value: '310106',
                    },
                ],
            },
        ],
    },
]);

function handleAdd(
    nodeList: TreeNode<{ name: string; value: string }>[],
    done: TreeNodeAddCallback
) {
    const name = window.prompt('请输入节点name');
    const value = window.prompt('请输入节点value');
    if (name && value) {
        done({ name, value, children: [] });
    }
    console.log(tree.value);
}

function handleEdit(node: TreeNode<{ value: string }>) {
    const name = window.prompt('请输入节点name', node.name) ?? node.name;
    const value = window.prompt('请输入节点value', node.value) ?? node.value;
    node.name = name;
    node.value = value;
    console.log(tree.value);
}

function handleDelete(node: TreeNode<{ value: string }>) {
    const targetIndex = node.parent?.children?.findIndex(
        (item) => item.__id__ === node.__id__
    );
    if (targetIndex) {
        node.parent?.children?.splice(targetIndex, 1);
    }
}

function handleExpand(node: TreeNode) {
    console.log(node);
}
</script>

<style scoped></style>
