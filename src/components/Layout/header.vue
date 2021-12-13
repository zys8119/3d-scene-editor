<template>
    <div class="main-header-left">
        <el-button v-if="!store.isH5" :icon="Expand" :class="{ expand: store.collapse }" @click="store.collapse = !store.collapse" />
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
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useStore from '@/store/main'
import { Expand } from '@element-plus/icons'

const route = useRoute()
const router = useRouter()
const store = useStore()

const handleLogout = () => {
    router.push({ name: 'login' })
}

const routeMatched = computed(() => {
    return route.matched.slice(1)
})
</script>