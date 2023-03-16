<template>
    <n-notification-provider>
        <n-message-provider>
            <n-config-provider
                :theme-overrides="themeOverrides"
                :theme="theme"
                :locale="zhCN"
                class="h-100"
            >
                <n-global-style />
                <router-view />
            </n-config-provider>
        </n-message-provider>
    </n-notification-provider>
</template>
<script lang="ts" setup>
import { ThemeMode } from '@/typings';
import { darkTheme, zhCN } from 'naive-ui';
import useAppConfigStore from '@/store/modules/app-config';
const appConfig = useAppConfigStore();

const theme = computed(() => {
    return appConfig.theme === ThemeMode.DARK ? darkTheme : null;
});
const themeOverrides = computed(() => {
    return {
        common: {
            primaryColor: appConfig.themeColor,
            primaryColorHover: appConfig.themeColor,
        },
        dark: {
            colorActive: 'red',
        },
    };
});
</script>
