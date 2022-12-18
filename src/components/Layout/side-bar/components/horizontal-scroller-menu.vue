<template>
    <n-scrollbar class="horizontal-scroller-menu" :x-scrollable="true">
        <n-menu
            mode="horizontal"
            :value="defaultPath"
            :options="menuOptions"
            :default-value="defaultPath"
            @update:value="onMenuClick"
        />
    </n-scrollbar>
</template>

<script lang="ts" setup>
import {h} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import useStore from '@/store/modules/main'
import {NIcon} from 'naive-ui'
import SvgIcon from '@/components/Layout/svg-icon/index.vue'

const router = useRouter()
const route = useRoute()
const store = useStore()

const defaultPath = computed(() => route.meta.breadcrumbs?.[0].name)
const menuOptions = store.routes.map(route => ({
    key: route.name,
    label: route.meta?.title || route.name,
    info: route,
    icon: () => h(NIcon, null, {
        default: () => h(SvgIcon, {
            prefix: 'icon',
            name: route?.meta?.icon
        }),
    })
}))
const onMenuClick = (key: string, row: any) => {
    router.push({name: row.info.name})
}
</script>

<style lang="less">
.horizontal-scroller-menu {
    margin-top: 5px;
    .n-menu-item-content__icon {
        font-size: 16px!important;
    }

    .n-menu-item-content-header {
        overflow: inherit !important;
    }
}
</style>
