<template>
    <div id="test1">
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
            <el-table-column align="center" type="index" label="序asdfas号" width="50" />
            <el-table-column align="center" prop="a" label="企业asdfasf名称"/>
            <el-table-column align="center" prop="b" label="联系人"/>
            <el-table-column align="center" prop="c" label="手机号"/>
            <el-table-column align="center" prop="d" label="企业地址" />
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
        a: '宁波智城美景控股有限公司',
        b: '李建华',
        c: '15382983892',
        d: '宁波市鄞州区前河南路8号183室'
    },
])
</script>

<style scoped>

</style>