<template>
    <wp-menu
        :model-value="route.name || ''"
        :list="routesMap"
        :collapse="store.isCollapse"
        :click="handleClick"
        width="250px"
        vertical
    />
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
import { RouteRecordRaw } from 'vue-router'
import configHooks from '@/config/configHooks'

import type { MenuProps, MenuRecord } from 'wisdom-plus'

const store = useStore()
const route = useRoute()

const routesMap = computed<MenuProps['list']>(() => {
    const routesMapper = (routes: RouteRecordRaw[]): MenuProps['list'] => {
        return routes.map(route => {
            return {
                index: route.name,
                title: route.meta?.title || route.name,
                children: route.children ? routesMapper(route.children) : undefined,
                info: route,
                icon: route.meta?.icon
            }
        })
    }
    return routesMapper(store.routes)
})

const handleClick = (record: MenuRecord) => {
    if (!record.children || record.children.length > 0) return
    configHooks.layout.menuSelect(record.info as RouteRecordRaw)
}
</script>

<style lang="less" scoped>
.wp-menu {
    --wp-menu-padding-left-right: 20px;
    --wp-menu-padding-top-bottom: 15px;
    :deep(.wp-collapse-item__title .wp-menu-item__text) {
        font-size: 14px;
    }
    :deep(.wp-menu-item-title) {
        font-size: 14px;
        line-height: 20px;
        &.wp-menu-item__active {
            font-size: 15px;
        }
    }
    :deep(.wp-menu-item .wp-collapse-item__title:not(.wp-menu-item__diabeld):hover),
    :deep(.wp-menu-item-title:not(.wp-menu-item__diabeld):hover) {
        color: var(--primary-color);
        background-color: initial;
    }
    &.wp-menu__collapse {
        font-size: 14px;
    }
}
</style>