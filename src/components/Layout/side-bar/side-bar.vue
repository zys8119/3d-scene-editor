<template>
    <n-config-provider :theme-overrides="themeOverThemes">
        <n-card
            class="vaw-side-bar-wrapper"
            :bordered="false"
            :style="{ borderRadius: '0px', marginTop: appConfig.layoutMode === 'ttb' ? '48px' : 0 }"
            :content-style="{ padding: 0 }"
            :class="[
                !appConfig.isCollapse ? 'open-status' : 'close-status',
                appConfig.sideTheme === 'image' ? 'sidebar-bg-img' : '',
            ]"
        >
            <transition name="logo">
                <Logo v-if="showLogo"/>
            </transition>
            <ScrollerMenu :routes="[]"/>
            <div class="mobile-shadow"/>
        </n-card>
    </n-config-provider>
</template>

<script lang="ts" setup>
import Logo from '@/components/Layout/logo/index.vue'
import useAppConfigStore from '@/store/modules/app-config'
import {computed} from 'vue'
import {SideTheme, ThemeMode} from '@/typings'

const props = withDefaults(defineProps<{
    showLogo: boolean
}>(), {
    showLogo: true
})

const appConfig = useAppConfigStore()
const themeOverThemes = computed(() => {
    if (appConfig.theme === ThemeMode.DARK) {
        return {}
    }
    if (appConfig.sideTheme === SideTheme.DARK)
        return {
            common: {
                cardColor: '#001428',
                textColor1: '#bbbbbb',
                textColor2: '#bbbbbb',
                popoverColor: 'rgb(72, 72, 78)',
                hoverColor: 'rgba(255, 255, 255, 0.09)',
                itemColorActive: 'rgba(24, 160, 88, 0.4)',
            },
            Menu: {
                itemTextColorChildActive: '#ffffff',
                itemIconColorChildActive: '#ffffff',

                arrowColorChildActive: '#ffffff',
                arrowColorHover: '#ffffff',

                itemTextColorActive: '#ffffff',
                itemIconColorActive: '#ffffff',

                itemTextColorHover: '#ffffff',
                itemIconColorHover: '#ffffff',

                itemColorActive: 'var(--primary-color)',
            },
        }
    if (appConfig.sideTheme === SideTheme.WHITE) return {common: {cardColor: '#ffffff'}}
    if (appConfig.sideTheme === SideTheme.IMAGE)
        return {
            common: {
                textColor1: '#bbbbbb',
                textColor2: '#bbbbbb',
                hoverColor: 'rgba(255, 255, 255, 0.09)',
                popoverColor: 'rgb(72, 72, 78)',
            },
        }
    return {}
})
</script>

<style scoped lang="less">
.sidebar-bg-img {
    background-image: url('../../../assets/images/bg_img.webp') !important;
    background-size: cover;
}

.open-status {
    width: var(--menu-width);
    box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.12);
    transition: all var(--transition-time);
}

.close-status {
    width: var(--min-menu-width);
    box-shadow: none;
    transition: all var(--transition-time);
}

.vaw-side-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
    z-index: 999;

    .vaw-menu-wrapper {
        overflow-x: hidden;
        color: white;
    }
}

.is-mobile {
    .open-status {
        width: var(--menu-width);
        transform: translateX(0);
        transition: transform var(--transition-time);
    }

    .close-status {
        width: var(--menu-width);
        transform: translateX(calc(var(--menu-width) * -1));
        transition: transform var(--transition-time);
        box-shadow: none;
    }
}
</style>
