<template>
    <div id="test4">
        <div style="display: flex; justify-content: space-between">
            <el-input
                style="width: 300px"
                placeholder="请输入关键词搜索"
                class="input-with-select"
            >
                <template #append>
                    <el-button :icon="Search"></el-button>
                </template>
            </el-input>
            <el-button type="primary">新增</el-button>
        </div>
        <el-table :data="tableData"  border style="width: 100%; margin-top: 30px">
            <el-table-column align="center" type="index" label="序号" width="50" />
            <el-table-column align="center" prop="a" label="菜单名称"/>
            <el-table-column align="center" prop="b" label="创建时间"/>
            <el-table-column align="center" fixed="right" label="操作" width="200">
                <template #default>
                    <el-button type="success" size="mini">编辑</el-button>
                    <el-button type="danger" size="mini">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {Search} from '@element-plus/icons'

const tableData = reactive([
    {
        a: '平台管理',
        b: '2021-10-1',
    },
    {
        a: '客户管理',
        b: '2021-10-1',
    },
    {
        a: '模板管理',
        b: '2021-10-1',
    },
    {
        a: '素材管理',
        b: '2021-10-1',
    },
    {
        a: '系统管理',
        b: '2021-10-1',
    },
    {
        a: '用户管理',
        b: '2021-10-1',
    },
    {
        a: '菜单管理',
        b: '2021-10-1',
    },
    {
        a: '角色管理',
        b: '2021-10-1',
    },
])
</script>

<style scoped>

</style>