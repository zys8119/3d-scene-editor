<template>
    <div class="vaw-nav-bar-wrapper">
        <Humburger/>
        <Breadcrumb v-if="appConfig.deviceType !== 'mobile' && appConfig.layoutMode !== 'ttb'"/>
        <HorizontalScrollerMenu v-else/>
        <div style="flex: 1"/>
        <div v-if="appConfig.deviceType !== 'mobile'" class="right-wrapper">
            <Actions/>
        </div>
        <div class="avatar-wrapper">
            <Avatar/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Humburger from '@/components/Layout/humburger/index.vue'
import Breadcrumb from '@/components/Layout/breadcrumb/index.vue'
import Actions from '@/components/Layout/actions/index.vue'
import Avatar from '@/components/Layout/avatar/index.vue'
import useAppConfigStore from '@/store/modules/app-config'
import HorizontalScrollerMenu from '@/components/Layout/side-bar/components/horizontal-scroller-menu.vue'
const appConfig = useAppConfigStore()
</script>

<style scoped lang="less">
.vaw-nav-bar-wrapper {
    height: var(--logo-height);
    max-height: var(--logo-height);
    min-height: var(--logo-height);
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);

    .avatar-wrapper {
        padding-right: 15px;
    }

    .right-wrapper {
        height: 100%;
    }
}
</style>
