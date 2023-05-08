<template>
    <n-notification-provider>
        <n-message-provider>
            <n-config-provider
                :theme-overrides="themeOverrides"
                :theme="theme"
                :locale="localeName"
                :date-locale="localeDateName"
                class="h-100"
            >
                <n-global-style />
                <router-view />
            </n-config-provider>
        </n-message-provider>
    </n-notification-provider>
</template>
<script lang="ts" setup>
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
</script>
