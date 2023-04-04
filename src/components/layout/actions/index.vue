<template>
    <div class="action-items-wrapper">
        <span
            v-if="appConfig.actionBar.isShowRefresh"
            class="action-item"
            @click="refreshRoute"
        >
            <n-icon size="18">
                <RefreshOutline />
            </n-icon>
        </span>
        <span
            v-if="appConfig.actionBar.isShowFullScreen"
            class="action-item"
            @click="screenFull"
        >
            <n-icon size="18">
                <Contract v-if="isFullscreen" />
                <Expand v-else />
            </n-icon>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import screenfull from 'screenfull';
import useAppConfigStore from '@/store/modules/app-config';
import { RefreshOutline, Expand, Contract } from '@vicons/ionicons5';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const message = useMessage();

const appConfig = useAppConfigStore();

// 刷新当前页面
const refreshRoute = () => {
    router.replace({ path: '/redirect', query: { url: route.path } });
};

// 全屏
const isFullscreen = ref(false);
const screenFull = () => {
    if (!screenfull.isEnabled) {
        message.error('当前浏览器不支持全屏操作');
        return false;
    }
    isFullscreen.value = !screenfull.isFullscreen;
    screenfull.toggle();
};
</script>

<style lang="less" scoped>
.action-items-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 1;
    padding-left: 15px;

    .action-item {
        min-width: 40px;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
            color: var(--primary-color-hover);
        }
    }
}
</style>
