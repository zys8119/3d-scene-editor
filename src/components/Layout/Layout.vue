<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutMenu from './Menu/Menu.vue'

import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const handleLogout = () => {
    store.logout()
    router.push({ name: 'login' })
}

import {
    ArrowDown
} from '@element-plus/icons'
</script>

<template>
    <router-view v-if="route.meta?.isFullPage" />
    <el-container v-else class="main">
        <!-- 侧边 -->
        <el-aside width="200px">
            <layout-menu />
        </el-aside>
        <!-- 主 -->
        <el-container>
            <!-- 头 -->
            <el-header class="main-header">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        {{ store.name }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
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
            <!-- 主 -->
            <el-main>
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="less" scoped>
.main {
    height: 100vh;
    :deep(.el-menu) {
        height: 100%;
    }
    .main-header {
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
}
</style>