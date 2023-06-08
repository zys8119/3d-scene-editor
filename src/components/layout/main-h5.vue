<template>
    <div class="main-h5 h-100% flex flex-col">
        <van-nav-bar
            :title="route.meta.title"
            v-if="config.h5Config.showTopNav"
            :left-text="isShowLeftBack ? '返回' : ''"
            :left-arrow="isShowLeftBack"
            @click-left="goBack"
        />
        <div class="p-5px flex-1 overflow-auto">
            <van-pull-refresh
                v-model="loading"
                @refresh="refreshRoute"
                :disabled="
                    route.meta.openPullRefresh === undefined
                        ? !config.h5Config.openPullRefresh
                        : !route.meta.openPullRefresh
                "
            >
                <router-view v-slot="{ Component, route }">
                    <transition
                        :name="appConfig.pageAnim + '-transform'"
                        mode="out-in"
                        appear
                    >
                        <keep-alive v-if="config.router.keepAlive">
                            <component :is="Component" :key="route.fullPath" />
                        </keep-alive>
                        <component
                            :is="Component"
                            v-else
                            :key="route.fullPath"
                        />
                    </transition>
                </router-view>
            </van-pull-refresh>
        </div>
        <div
            class="flex h-50px b-t b-t-solid b-$van-border-color"
            v-if="config.h5Config.showBottomNav && !isShowLeftBack"
        >
            <div
                class="flex-1 flex flex-col flex-items-center flex-justify-center"
                v-for="(item, key) in store.routes"
                :key="key"
                :class="{
                    active: route.fullPath.indexOf(item.path) > -1,
                }"
                @click="router.push({ name: item.name })"
            >
                <svg-icon class="m-t-5px" :name="item.meta.icon" :size="16" />
                <span v-text="item.meta.title"></span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import config from '@/config/config';
import useAppConfigStore from '@/store/modules/app-config';
import setting from '@/config/setting';
import useStore from '@/store/modules/main';

const appConfig = useAppConfigStore();
const store = useStore();

const route = useRoute();
const router = useRouter();

const isShowLeftBack = computed(() => route.meta.hidden);

const loading = ref(false);
// 刷新当前页面
const refreshRoute = () => {
    loading.value = false;
    router.replace({ path: '/redirect', query: { url: route.path } });
};

// 返回上一页
const goBack = () => {
    router.back();
};
</script>

<style scoped lang="less">
.active {
    color: v-bind('setting.themeColor');
    .svg-icon {
        fill: v-bind('setting.themeColor');
    }
}
</style>
