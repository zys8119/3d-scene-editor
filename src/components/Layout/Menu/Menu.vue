<script lang="ts" setup>
import useStore from '@/store'
import { useRoute, useRouter, RouteLocationNormalizedLoaded } from 'vue-router'

import LayoutMenuItem from './MenuItem.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const getPath = (path: string, url?: string) => {
    if (url) return url
    if (path.startsWith('/')) {
        return path
    } else {
        return '/' + path
    }
}

const handleSelect = (index: string) => {
    if (index.startsWith('/')) {
        router.push(index)
    } else {
        location.href = index
    }
}
</script>

<template>
    <el-menu :default-active="route.path" @select="index => handleSelect(index)">
        <layout-menu-item v-for="$route in store.routes" :key="$route.name" :index="getPath($route.path, $route.meta?.url ? String($route.meta.url) : '')" :route="$route" />
    </el-menu>
</template>