<template>
    <router-view v-slot="{ Component, route }">
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
</template>

<script lang="ts" setup>
import useAppConfigStore from '@/store/modules/app-config';
import useSideRoutes from '@/store/modules/side-routes';

const storeSide = useSideRoutes();
const appConfig = useAppConfigStore();
</script>
