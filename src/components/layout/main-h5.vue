<template>
    <div class="main-h5 h-100% flex flex-col">
        <van-nav-bar title="标题" v-if="config.h5Config.showTopNav" />
        <div class="main-container flex-1">
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
        </div>
        <div
            class="flex h-50px b-t b-t-solid b-$van-border-color"
            v-if="config.h5Config.showBottomNav"
        >
            <div
                class="flex-1 flex flex-col flex-items-center flex-justify-center"
                v-for="(item, key) in sideRoutesStore.getSideBarRoutes()"
                :key="key"
                :class="{
                    [`color-${setting.themeColor}`]:
                        route.fullPath.indexOf(item.info.path) > -1,
                }"
                @click="router.push({ name: item.key })"
            >
                <svg-icon
                    class="m-t-5px"
                    :name="item.info.meta.icon"
                    :size="16"
                />
                <span v-text="item.label"></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '@/config/config';
import useAppConfigStore from '@/store/modules/app-config';
import useSideRoutesStore from '@/store/modules/side-routes';
import setting from '@/config/setting';

const appConfig = useAppConfigStore();
const sideRoutesStore = useSideRoutesStore();

const route = useRoute();
const router = useRouter();

console.log(sideRoutesStore.getSideBarRoutes());
</script>

<style scoped></style>
