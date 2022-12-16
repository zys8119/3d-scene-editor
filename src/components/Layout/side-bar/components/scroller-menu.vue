<template>
    <div class="scrollbar">
        <n-scrollbar>
            <n-menu
                mode="vertical"
                :options="routes"
                :collapsed-icon-size="22"
                :collapsed-width="63"
                :indent="15"
            />
        </n-scrollbar>
    </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
    routes: any
}>(), {
    routes: []

})
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
