<template>
    <div id="test2">
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
            <el-table-column align="center" prop="a" label="图片名称"/>
            <el-table-column align="center" prop="b" label="尺寸（PX）"/>
            <el-table-column align="center" prop="c" label="上传时间"/>
            <el-table-column align="center" prop="d" label="上传账户" />
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
        a: '树',
        b: '100*300',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '飞船',
        b: '300*300',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '宇航员',
        b: '200*300',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '藤蔓',
        b: '100*400',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '汽车',
        b: '300*200',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '酒店',
        b: '300*200',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '星空',
        b: '800*600',
        c: '2021-10-12',
        d: 'admin'
    },
    {
        a: '背景图',
        b: '1200*900',
        c: '2021-10-12',
        d: 'admin'
    },
])
</script>

<style scoped>

</style>