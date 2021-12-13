<template>
    <el-menu :default-active="route.path" :collapse="store.isCollapse">
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
import useStore from '@/store/modules/main'
import { useRoute, RouteRecordRaw } from 'vue-router'
import configHooks from '@/config/configHooks'

import LayoutMenuItem from './item.vue'

const store = useStore()
const route = useRoute()

const getPath = (path: string, url?: string) => {
    if (url) return url
    if (path.startsWith('/')) {
        return path
    } else {
        return '/' + path
    }
}

const handleSelect = (index: string, route?: RouteRecordRaw) => {
    configHooks.layout.menuSelect(index, route)
}
</script>