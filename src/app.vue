<template>
    <n-notification-provider>
        <n-message-provider>
            <n-config-provider
                :theme-overrides="themeOverrides"
                :theme="theme"
                :locale="localeName"
                :date-locale="localeDateName"
                class="h-100%"
            >
                <n-global-style />
                <div class="loading">
                    <template v-if="store.loading">
                        <div class="loading-bg"></div>
                        <div class="animbox">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </template>
                    <van-config-provider
                        v-if="config.isH5"
                        :theme-vars="themeVars"
                        theme="light"
                        class="h-100%"
                    >
                        <router-view />
                    </van-config-provider>
                    <router-view v-else />
                </div>
            </n-config-provider>
        </n-message-provider>
    </n-notification-provider>
</template>
<script lang="ts" setup>
import config from '@/config/base';
import { LocaleName, ThemeMode } from '@/typings';
import { darkTheme, zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui';
import useAppConfigStore from '@/store/modules/app-config';
import useStore from '@/store/modules/main';
const appConfig = useAppConfigStore();

const store = useStore();

const theme = computed(() => {
    return appConfig.theme === ThemeMode.DARK ? darkTheme : null;
});
const localeName = computed(() => {
    return appConfig.localeName === LocaleName.zhCN ? zhCN : enUS;
});
const localeDateName = computed(() => {
    return appConfig.localeName === LocaleName.zhCN ? dateZhCN : dateEnUS;
});

// PC主题样式自定义
const themeOverrides = computed(() => {
    return {
        common: {
            primaryColor: appConfig.themeColor,
            primaryColorHover: appConfig.themeColorHover,
        },
        Button: {
            colorPressedPrimary: appConfig.themeColor,
            textColorPressed: appConfig.themeColor,
            borderPressedPrimary: appConfig.themeColor,
            borderPressed: `1px solid ${appConfig.themeColor}`,
        },
    };
});

// H5主题样式自定义
const themeVars = reactive({
    rateIconFullColor: appConfig.themeColor,
    sliderActiveBackground: appConfig.themeColor,
    buttonPrimaryBackground: appConfig.themeColor,
    buttonPrimaryBorderColor: appConfig.themeColor,
});
</script>
<style lang="less" scoped>
.loading {
    height: 100%;
    position: relative;

    .loading-bg {
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        pointer-events: none;
        z-index: 100000;
        position: fixed;
    }
    .animbox {
        z-index: 100000;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .animbox > div {
        background: #6a7fe5;
        width: 4px;
        height: 30px;
        border-radius: 2px;
        margin: 2px;
        animation-fill-mode: both;
        display: inline-block;
        animation: anim 0.9s 0s infinite cubic-bezier(0.11, 0.49, 0.38, 0.78);
    }

    .animbox > :nth-child(2),
    .animbox > :nth-child(4) {
        animation-delay: 0.25s !important;
    }

    .animbox > :nth-child(1),
    .animbox > :nth-child(5) {
        animation-delay: 0.5s !important;
    }

    @keyframes anim {
        0% {
            transform: scaley(1);
        }

        80% {
            transform: scaley(0.3);
        }

        90% {
            transform: scaley(1);
        }
    }
}
</style>
