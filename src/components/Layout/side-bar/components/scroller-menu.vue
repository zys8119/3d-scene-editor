<template>
    <div class="scrollbar">
        <n-scrollbar>
            <n-menu
                mode="vertical"
                :value="activeMenu"
                :options="routes"
                :collapsed="appConfig.isCollapse"
                :collapsed-icon-size="22"
                :collapsed-width="63"
                :indent="15"
                @update:value="onMenuClick"
            />
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import useAppConfigStore from '@/store/modules/app-config'
import configHooks from '@/config/configHooks'
import useStore from '@/store/modules/main'

const store = useStore()
const route = useRoute()
const appConfig = useAppConfigStore()

const props = withDefaults(defineProps<{
    routes: any
}>(), {
    routes: []
})

// 初始化激活菜单
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

const onMenuClick = (key: string, record: any) => {
    configHooks.layout.menuSelect(record.info as any)
}
</script>

<style lang="less" scoped>
:deep(.n-menu .n-submenu .n-menu-item-content__icon) {
    font-size: 16px !important;
}

:deep(.n-menu .n-menu-item-content .n-menu-item-content__icon) {
    font-size: 16px !important;
}

:deep(.n-menu .n-menu-item) {
    margin-top: 0;
    margin-bottom: 5px;
}

:deep(.n-menu .n-menu-item::before) {
    left: 5px;
    right: 5px;
    border-radius: 5px;
}

:deep(.n-menu .n-menu-item:hover) {
    background-color: var(--item-color-active);
}

.scrollbar {
    height: calc(100vh - var(--logo-height)) !important;
}
</style>
