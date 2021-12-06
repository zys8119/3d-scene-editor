<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutMenu from './menu/index.vue'

import useStore from '@/store'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const handleLogout = () => {
    router.push({ name: 'login' })
}

import {
    ArrowDown
} from '@element-plus/icons'
</script>

<template>
    <router-view v-if="route.meta?.isFullPage" />
    <div v-else class="main">
        <div class="main-aside">
            <layout-menu />
        </div>
        <div class="main-container">
            <div class="main-header">
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
            </div>
            <div class="main-content">
                <router-view />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.main {
    height: 100vh;
    display: flex;
    .main-aside {
        width: 200px;
    }
    .main-container {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
    .main-header {
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: 55px;
    }
    .main-content {
        flex: 1;
        padding: 10px 20px;
    }
    :deep(.el-menu) {
        height: 100%;
    }
}
</style>