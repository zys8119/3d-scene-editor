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
                <van-config-provider
                    v-if="config.isH5"
                    :theme-vars="themeVars"
                    theme="light"
                    class="h-100%"
                >
                    <router-view />
                </van-config-provider>
                <router-view v-else />
            </n-config-provider>
        </n-message-provider>
    </n-notification-provider>
</template>
<script lang="ts" setup>
import config from '@/config/base';
import { LocaleName, ThemeMode } from '@/typings';
import { darkTheme, zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui';
import useAppConfigStore from '@/store/modules/app-config';
const appConfig = useAppConfigStore();

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
