<template>
    <router-view v-slot="{ Component, route }">
        <transition
            :name="appConfig.pageAnim + '-transform'"
            mode="out-in"
            appear
        >
            <keep-alive v-if="config.router.keepAlive">
                <component :is="Component" :key="route.fullPath" />
            </keep-alive>
            <component :is="Component" v-else :key="route.fullPath" />
        </transition>
    </router-view>
</template>

<script lang="ts" setup>
import config from "@/config/config";
import useAppConfigStore from "@/store/modules/app-config";
const appConfig = useAppConfigStore();
</script>
