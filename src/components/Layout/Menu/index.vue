<template>
    <wp-menu
        :model-value="activeMenu"
        :list="routesMap"
        :collapse="store.isCollapse"
        :click="handleClick"
        width="var(--menu-width)"
        vertical
    >
        <template #title="{ title, info }">
            <router-link :to="info" @click.stop>{{ title }}</router-link>
        </template>
    </wp-menu>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
import { RouteRecordRaw } from 'vue-router'
import configHooks from '@/config/configHooks'

import type { MenuProps, MenuRecord } from 'wisdom-plus'
import config from '@/config/config'

const store = useStore()
const route = useRoute()

const activeMenu = computed(() => {
    if (!route.meta?.hidden) {
        return route.name || ''
    } else {
        if (!route.meta.breadcrumbs || route.meta.breadcrumbs.length === 0) return ''
        for (const index in route.meta.breadcrumbs) {
            const breadcrumb = route.meta.breadcrumbs[index]
            if (breadcrumb.meta?.hidden) {
                const newIndex = Number(index) - 1
                if (newIndex >= 0) {
                    return route.meta.breadcrumbs[newIndex].name || ''
                }
            }
        }
    }
})

const routesMap = computed<MenuRecord[]>(() => {
    const routesMapper = (routes: RouteRecordRaw[]): MenuRecord[] => {
        return routes.filter(route => !route.meta?.hidden).map(route => {
            return {
                index: route.name,
                title: route.meta?.title || route.name,
                children: route.children ? routesMapper(route.children) : undefined,
                info: route,
                icon: route.meta?.icon
            } as MenuRecord
        })
    }
    const currentRoute = config.router.menu.topMenu ? store.routes.find(routing => route.meta.breadcrumbs?.[0].name === routing.name)?.children || [] : store.routes
    const routes: MenuProps['list'] = routesMapper(currentRoute)
    return routes
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
    :deep(.wp-menu-item__text) {
        > a {
            text-decoration: none;
            color: inherit;
        }
    }
    :deep(.wp-collapse-item__title .wp-menu-item__text) {
        font-size: 14px;
    }
    :deep(.wp-menu-item-title) {
        font-size: 14px;
        line-height: 20px;
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