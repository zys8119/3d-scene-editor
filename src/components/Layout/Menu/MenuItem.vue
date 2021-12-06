<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MenuItem'
})
</script>

<script lang="ts" setup>
import * as MenuItemComponent from './menuItem.vue'
import type { RouteRecordRaw } from 'vue-router'

const { default: MenuItemChild } = MenuItemComponent

const props = defineProps<{
    route: RouteRecordRaw,
    index: number | string
}>()
defineEmits<{
    (e: 'select', index: string, route?: RouteRecordRaw): void
}>()

const getIndex = (path: string,  url?: string) => {
    if (url) return url
    if (path.startsWith('/')) {
        return path
    } else {
        return String(props.index) + '/' + path
    }
}
</script>

<template>
    <template v-if="!route.meta?.hidden">
        <el-sub-menu v-if="route.children && route.children.length > 0" :index="String(index)">
            <template #title>
                <el-icon v-if="route.meta?.icon"><component :is="route.meta.icon" /></el-icon>
                {{ route.meta?.title || route.name }}
            </template>
            <menu-item-child
                v-for="child in route.children"
                :key="child.name"
                :route="child"
                :index="getIndex(child.path, child.meta?.url)"
                @select="(index: string, route: RouteRecordRaw) => $emit('select', index, route)"
            />
        </el-sub-menu>
        <el-menu-item
            v-else
            :route="route"
            :index="String(index)"
            :disabled="route.meta?.disabled"
            @click="$emit('select', String(index), route)"
        >
            <el-icon v-if="route.meta?.icon"><component :is="route.meta.icon" /></el-icon>
            {{ route.meta?.title || route.name }}
        </el-menu-item>
    </template>
</template>
