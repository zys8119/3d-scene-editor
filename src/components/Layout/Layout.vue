<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutMenu from './Menu/Menu.vue'

import useStore from '@/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const handleLogout = () => {
    store.logout()
    router.push({ name: 'login' })
}

import {
    Setting
} from '@element-plus/icons'
</script>

<template>
    <el-container style="height: 100vh; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <layout-menu />
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    {{ store.name }} <el-icon style="margin-right: 15px"><setting /></el-icon>
                    <template #dropdown>
                        <el-dropdown-menu>
                        <el-dropdown-item>View</el-dropdown-item>
                        <el-dropdown-item>Add</el-dropdown-item>
                        <el-dropdown-item>Delete</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <el-button size="small" @click="handleLogout">注销</el-button>
            </el-header>

            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>