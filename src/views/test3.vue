<template>
    <div id="test3">
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
            <el-table-column align="center" prop="a" label="用户名"/>
            <el-table-column align="center" prop="b" label="手机号"/>
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
        a: '李建华',
        b: '15382983892',
    },
    {
        a: '王辉',
        b: '13098789847',
    },
    {
        a: '李小华',
        b: '15382837482',
    },
    {
        a: '徐城建',
        b: '13678723371',
    },
    {
        a: '沈力',
        b: '18388223231',
    },
    {
        a: '陈果',
        b: '13899012312',
    },
])
</script>

<style scoped>

</style>