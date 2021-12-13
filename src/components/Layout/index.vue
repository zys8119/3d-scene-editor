<template>
    <router-view v-if="route.meta?.isFullPage" />
    <div v-else class="main">
        <div class="main-aside">
            <layout-menu />
        </div>
        <div class="main-container">
            <div class="main-header">
                <div class="main-header-left">
                    <el-button v-if="!store.isH5" :icon="Menu" @click="store.collapse = !store.collapse" />
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item v-for="route in routeMatched" :key="route.name" :to="{ path: route.path }">{{ route.meta.title || route.name }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
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

<script lang="ts" setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import LayoutMenu from './menu/index.vue'

import useStore from '@/store/main'
import { useRoute, useRouter } from 'vue-router'
import { Menu } from '@element-plus/icons'

const store = useStore()
const route = useRoute()
const router = useRouter()

const handleLogout = () => {
    router.push({ name: 'login' })
}

const routeMatched = computed(() => {
    return route.matched.slice(1)
})

import {
    ArrowDown
} from '@element-plus/icons'
</script>

<style lang="less" scoped>
.main {
    height: 100vh;
    display: flex;
    .main-aside {
        overflow-x: hidden;
        overflow-y: auto;
        border-right: solid 1px #e6e6e6;
        :deep(.el-menu) {
            width: 200px;
            border: 0;
            &.el-menu--collapse {
                width: 64px;
            }
        }
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
        height: 55px;
        padding: 0 20px;
        .main-header-left {
            flex: 1;
            display: flex;
            align-items: center;
            .el-button {
                border: 0;
                background-color: transparent;
                padding: 0;
                margin-right: 10px;
                /deep/ .el-icon {
                    font-size: 20px;
                }
            }
        }
    }
    .main-content {
        flex: 1;
        padding: 20px;
        overflow: auto;
    }
    :deep(.el-menu) {
        height: 100%;
    }
}
</style>