<template>
    <div class="vaw-nav-bar-wrapper">
        <Humburger v-if="config.router.needSideMenuIcon" />
        <div class="nav-container">
            <Breadcrumb
                v-if="
                    appConfig.deviceType !== 'mobile' &&
                    appConfig.layoutMode !== 'ttb'
                "
            />
            <HorizontalScrollerMenu v-else />
        </div>
        <div v-if="appConfig.deviceType !== 'mobile'" class="right-wrapper">
            <Actions />
        </div>
        <div class="avatar-wrapper">
            <Avatar />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Humburger from "@/components/layout/humburger/index.vue";
import Breadcrumb from "@/components/layout/breadcrumb/index.vue";
import Actions from "@/components/layout/actions/index.vue";
import Avatar from "@/components/layout/avatar/index.vue";
import useAppConfigStore from "@/store/modules/app-config";
import HorizontalScrollerMenu from "@/components/layout/side-bar/components/horizontal-scroller-menu.vue";
import config from "@/config/config";
const appConfig = useAppConfigStore();
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

    .nav-container {
        flex: 1;
        overflow: hidden;
        padding-left: 5px;
    }

    .avatar-wrapper {
        padding-right: 15px;
    }

    .right-wrapper {
        height: 100%;
    }
}
</style>
