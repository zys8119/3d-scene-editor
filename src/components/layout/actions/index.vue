<template>
    <n-space
        align="center"
        :wrap-item="false"
        class="h-100 action-items-wrapper"
    >
        <n-popselect
            v-model:value="selectedValue"
            :options="options"
            trigger="click"
            @update:value="select"
            v-if="baseConfig.hasUnitChange"
        >
            <n-button @click="getUserInfo">{{ selectedLabel }}</n-button>
        </n-popselect>
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
    </n-space>
</template>

<script lang="ts" setup>
import { useMessage } from 'naive-ui';
import screenfull from 'screenfull';
import useAppConfigStore from '@/store/modules/app-config';
import { RefreshOutline, Expand, Contract } from '@vicons/ionicons5';
import { useRouter } from 'vue-router';
import { setRoutes } from '@/router/set-routes';
import useStore from '@/store/modules/main';
import baseConfig from '@/config/base';

const store = useStore();
const router = useRouter();
const route = useRoute();
const message = useMessage();

const selectedValue = ref();
const options = ref([]);

const appConfig = useAppConfigStore();

// 获取用户信息
const getUserInfo = async () => {
    const res = await window.api.sass.api.v1.user.info();
    selectedValue.value = res.data.DefaultTenantId ?? null;
    if (res.data.tenants) {
        options.value = res.data.tenants.map((v) => ({
            label: v.name,
            value: v.id,
        }));
    }
};
const selectedLabel = computed(() =>
    selectedValue.value
        ? options.value.find((v) => v.value === selectedValue.value).label
        : '默认单位'
);

// 切换租户
const select = async () => {
    const res = await window.api.sass.api.v1.auth.token_refresh(
        selectedValue.value
    );
    await store.setToken(res.data.accessToken);
    await store.setUserinfo(res.data.user);
    await setRoutes();
    await router.push('/');
};

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

onMounted(() => {
    if (baseConfig.hasUnitChange) {
        getUserInfo();
    }
});
</script>

<style lang="less" scoped>
.action-items-wrapper {
    z-index: 1;
    padding: 0 15px;

    .action-item {
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
            color: var(--primary-color-hover);
        }
    }
}
</style>
