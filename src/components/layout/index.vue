<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <main-h5 v-if="base.isH5" />
            <n-el
                v-else
                class="vaw-layout-container"
                :class="[appConfig.deviceType === 'mobile' && 'is-mobile']"
            >
                <router-view
                    v-if="routeElse.meta.isFullPage"
                    v-slot="{ Component, route }"
                >
                    <transition
                        :name="appConfig.pageAnim + '-transform'"
                        mode="out-in"
                        appear
                    >
                        <keep-alive :include="storeSide.keepAliveInclude">
                            <component :is="Component" :key="route.fullPath" />
                        </keep-alive>
                    </transition>
                </router-view>
                <template v-else>
                    <template v-if="layoutMode === 'ttb'">
                        <SideBar />
                        <MainLayout />
                    </template>
                    <template v-else-if="layoutMode === 'lcr'">
                        <TabSplitSideBar />
                        <MainLayout />
                    </template>
                    <template v-else>
                        <SideBar />
                        <MainLayout />
                    </template>
                    <div
                        v-if="appConfig.deviceType !== 'mobile'"
                        class="mobile-shadow"
                        :class="[
                            appConfig.isCollapse
                                ? 'close-shadow'
                                : 'show-shadow',
                        ]"
                        @click="closeMenu"
                    />
                </template>
            </n-el>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>

<script lang="ts" setup>
import mainH5 from '@/components/layout/main-h5.vue';
import SideBar from '@/components/layout/side-bar/side-bar.vue';
import TabSplitSideBar from '@/components/layout/side-bar/tab-split-side-bar.vue';
import MainLayout from '@/components/layout/main-layout.vue';
import useAppConfigStore from '@/store/modules/app-config';
import { DeviceType } from '@/typings';
import config from '@/config/config';
import base from '@/config/base';
import useSideRoutes from '@/store/modules/side-routes';

const storeSide = useSideRoutes();

const routeElse = useRoute();
const appConfig = useAppConfigStore();
const layoutMode = computed(() => {
    return appConfig.getLayoutMode;
});

function handleScreenResize() {
    if (!config.router.needSideMenuIcon) return;
    const width = document.body.clientWidth;
    if (width <= 768) {
        appConfig.changeDevice(DeviceType.MOBILE);
        appConfig.toggleCollapse(true);
    } else if (width < 992 && width > 768) {
        appConfig.changeDevice(DeviceType.PAD);
        appConfig.toggleCollapse(true);
    } else if (width < 1200 && width >= 992) {
        appConfig.changeDevice(DeviceType.PC);
        appConfig.toggleCollapse(false);
    } else {
        appConfig.changeDevice(DeviceType.PC);
        appConfig.toggleCollapse(false);
    }
}

function closeMenu() {
    appConfig.toggleCollapse(true);
}

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleScreenResize);
});

onMounted(() => {
    handleScreenResize();
    window.addEventListener('resize', handleScreenResize);
});
</script>

<style scoped lang="less">
.vaw-layout-container {
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;

    .mobile-shadow {
        display: none;
    }

    .layout-mode-ttb {
        margin-top: var(--logo-height);
        transition: all var(--transition-time);
    }
}

.is-mobile {
    .mobile-shadow {
        background-color: #000000;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 997;
    }

    .close-shadow {
        display: none;
    }

    .show-shadow {
        display: block;
        opacity: 0.5;
        transition: all var(--transition-time);
    }
}
</style>
