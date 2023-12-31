<template>
    <div
        class="vaw-main-layout-container scrollbar"
        :class="[
            !appConfig.isCollapse
                ? 'main-layout-open-status'
                : 'main-layout-close-status',
            !config.tabbarViews.disabled
                ? 'main-layout_fixed-nav-bar'
                : 'main-layout',
        ]"
    >
        <section
            :class="[
                !appConfig.isCollapse
                    ? 'nav-bar-open-status'
                    : 'nav-bar-close-status',
                !config.tabbarViews.disabled ? 'fixed-nav-bar' : '',
                !showNavBar ? 'tab-bar-top' : '',
            ]"
        >
            <NavBar v-if="showNavBar" />
            <TabBar v-if="!config.tabbarViews.disabled" />
        </section>
        <div
            class="main-base-style scrollbar"
            :class="[
                mainClass,
                config.tabbarViews.disabled ? 'no-tab-bar' : '',
            ]"
        >
            <section
                class="main-section"
                :class="{ 'main-section-no-footer': !config.showFooter }"
            >
                <Main />
            </section>
            <section v-if="config.showFooter" class="footer-wrapper">
                <Footer />
            </section>
            <n-back-top :listen-to="listenTo1" />
        </div>
        <n-back-top :listen-to="listenTo2" />
    </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/layout/navbar/index.vue';
import TabBar from '@/components/layout/tabbar/index.vue';
import Main from '@/components/layout/main.vue';
import Footer from '@/components/layout/footer/index.vue';
import useAppConfigStore from '@/store/modules/app-config';
import { ThemeMode } from '@/typings';
import { useLoadingBar } from 'naive-ui';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import config from '@/config/config';

const router = useRouter();

withDefaults(
    defineProps<{
        showNavBar?: boolean;
    }>(),
    {
        showNavBar: true,
    }
);

const appConfig = useAppConfigStore();
const listenTo1 = ref<HTMLElement | null>(null);
const listenTo2 = ref<HTMLElement | null>(null);
const mainClass = computed(() => {
    return appConfig.theme === ThemeMode.DARK
        ? 'main-base-dark-theme'
        : 'main-base-light-theme';
});
const loadingBar = useLoadingBar();

router.beforeEach(() => {
    loadingBar?.start();
});
router.afterEach(() => {
    loadingBar?.finish();
});

onMounted(() => {
    listenTo1.value = document.querySelector('.main-base-style');
    listenTo2.value = document.querySelector('.vaw-main-layout-container');
});
</script>

<style lang="less" scoped>
.scrollbar::-webkit-scrollbar {
    width: 0;
}

.main-layout-ttb-status {
    margin-left: 0;
}

.main-layout-open-status {
    margin-left: var(--menu-width);
}

.main-layout-close-status {
    margin-left: var(--min-menu-width);
}

.nav-bar-open-status.fixed-nav-bar {
    width: calc(100% - var(--menu-width));
}

.nav-bar-close-status.fixed-nav-bar {
    width: calc(100% - var(--min-menu-width));
}

.nav-bar-ttb-status {
    width: 100%;
}

.main-layout {
    padding-top: 0;
    overflow-y: auto;
}

.main-layout_fixed-nav-bar {
    padding-top: calc(var(--logo-height) + var(--tab-height));
    overflow-y: hidden;

    .main-base-style {
        overflow-y: auto;
    }
}

.vaw-main-layout-container {
    height: 100%;
    box-sizing: border-box;
    transition: margin-left var(--transition-time);

    .main-base-style {
        height: 100%;
        box-sizing: border-box;
        padding: 10px;
        &.no-tab-bar {
            height: calc(100% - var(--logo-height));
        }
    }

    .main-base-light-theme {
        background-color: #f0f2f5;
    }

    .main-base-dark-theme {
        background-color: #333333;
    }

    .main-section {
        min-height: calc(100% - var(--footer-height) - 10px);
        overflow-x: hidden;
        position: relative;
        &.main-section-no-footer {
            min-height: 100%;
        }
    }

    .fixed-nav-bar {
        position: fixed;
        top: 0;
        transition: width var(--transition-time);
        z-index: 99;
    }

    .tab-bar-top {
        padding-top: var(--logo-height);
    }
}

.footer-wrapper {
    margin-top: 6px;
}

.is-mobile {
    .main-layout-open-status,
    .main-layout-close-status {
        margin-left: 0;
        transition: none;
    }

    .nav-bar-open-status,
    .nav-bar-close-status {
        width: 100%;
    }
}
</style>
