<template>
    <el-menu :default-active="route.path">
        <layout-menu-item
            v-for="$route in store.routes"
            :key="$route.name"
            :index="getPath($route.path, $route.meta?.url)"
            :route="$route"
            @select="handleSelect"
        />
    </el-menu>
</template>

<script lang="ts" setup>
import useStore from '@/store'
import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'

import LayoutMenuItem from './item.vue'

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

const handleSelect = (index: string, route?: RouteRecordRaw) => {
    if (index.startsWith('/')) {
        router.push(index)
    } else {
        if (route) {
            const meta = route.meta
            if (meta?.target) {
                window.open(index, meta.target)
            } else {
                location.href = index
            }
        } else {
            location.href = index
        }
    }
}
</script>