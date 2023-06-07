<template>
    <div class="scrollbar">
        <n-scrollbar>
            <n-menu
                mode="vertical"
                :value="activeMenu"
                :options="routes"
                :collapsed="appConfig.isCollapse"
                @update:value="onMenuClick"
            />
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import useAppConfigStore from '@/store/modules/app-config';
import configHooks from '@/config/config-hooks';
import { DeviceType, SystemRouteRow } from '@/typings';

const route = useRoute();
const appConfig = useAppConfigStore();

defineProps<{
    routes: SystemRouteRow[];
}>();

// 初始化激活菜单
const activeMenu = computed(() => {
    if (!route.meta?.hidden) {
        return route.name || '';
    } else {
        if (!route.meta.breadcrumbs || route.meta.breadcrumbs.length === 0)
            return '';
        for (const index in route.meta.breadcrumbs) {
            const breadcrumb = route.meta.breadcrumbs[index];
            if (breadcrumb.meta?.hidden) {
                const newIndex = Number(index) - 1;
                if (newIndex >= 0) {
                    return route.meta.breadcrumbs[newIndex].name || '';
                }
            }
        }
    }
});

const onMenuClick = (key: string, record: SystemRouteRow) => {
    configHooks.layout.menuSelect(record.info);
    if (appConfig.deviceType === DeviceType.MOBILE)
        appConfig.toggleCollapse(true);
};
</script>

<style lang="less" scoped>
.scrollbar {
    height: calc(100vh - var(--logo-height)) !important;
    :deep(.n-menu .n-menu-item) {
        margin-top: 0;
        margin-bottom: 5px;
    }
}
</style>
