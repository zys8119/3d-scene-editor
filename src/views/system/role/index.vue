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
import { TreeNode } from 'naive-ui';
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
</script>

<style scoped></style>
