<template>
    <n-config-provider :theme-overrides="themeOverThemes">
        <n-card
            :bordered="false"
            class="vaw-tab-split-side-bar-wrapper"
            :content-style="{ padding: 0 }"
            style="border-radius: 0"
            :class="[
                !appConfig.isCollapse ? 'open-status' : 'close-status',
                appConfig.sideTheme === 'image' ? 'sidebar-bg-img' : '',
            ]"
        >
            <div
                class="tab-split-tab-wrapper"
                :style="{ backgroundColor: bgColor }"
            >
                <Logo class="tab-split-logo-wrapper" :show-title="false" />
                <div style="height: calc(100% - 48px)">
                    <n-scrollbar>
                        <div
                            id="tabSplitContentWrapper"
                            class="tab-split-content-wrapper"
                            :style="contentWrapperStyle"
                        >
                            <div
                                v-for="(item, key) of tabs"
                                :key="key"
                                class="label-item-wrapper"
                                :class="{
                                    'vaw-tab-split-item-is-active': item.active,
                                }"
                                @click="changeTab(item)"
                            >
                                <SvgIcon
                                    v-if="item.meta.icon"
                                    prefix="icon"
                                    :name="item.meta.icon"
                                />
                                <span>{{ item.meta.title }}</span>
                            </div>
                        </div>
                    </n-scrollbar>
                </div>
            </div>
            <div class="tab-split-menu-wrapper">
                <Logo class="tab-split-logo-wrapper" :show-logo="false" />
                <ScrollerMenu :routes="sideRoutesStore.getSideBarRoutes()" />
            </div>
            <div class="mobile-shadow" />
        </n-card>
    </n-config-provider>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";
import useAppConfigStore from "@/store/modules/app-config";
import { SideTheme, SystemTabbarRouteRow, ThemeMode } from "@/typings";
import Logo from "@/components/layout/logo/index.vue";
import SvgIcon from "@/components/layout/svg-icon/index.vue";
import ScrollerMenu from "@/components/layout/side-bar/components/scroller-menu.vue";
import useStore from "@/store/modules/main";
import useSideRoutesStore from "@/store/modules/side-routes";

const store = useStore();
const sideRoutesStore = useSideRoutesStore();
const route = useRoute();
const router = useRouter();

const props = withDefaults(
    defineProps<{
        showLogo?: boolean;
    }>(),
    {
        showLogo: true,
    }
);

const appConfig = useAppConfigStore();

// 主题设置
const themeOverThemes = computed(() => {
    if (appConfig.theme === ThemeMode.DARK) {
        return {};
    }
    if (appConfig.sideTheme === SideTheme.DARK)
        return {
            common: {
                cardColor: "#001428",
                textColor1: "#bbbbbb",
                textColor2: "#bbbbbb",
            },
            Menu: {
                itemColorActive: "rgba(24, 160, 88, 0.4)",
            },
        };
    if (appConfig.sideTheme === SideTheme.WHITE)
        return {
            common: {
                cardColor: "#ffffff",
            },
        };
    if (appConfig.sideTheme === SideTheme.IMAGE)
        return {
            common: {
                textColor1: "#bbbbbb",
                textColor2: "#bbbbbb",
                primaryColor: "#fff",
            },
            Menu: {
                itemColorActive: "rgba(24, 160, 88, 0.8)",
                itemTextColorHover: "#f5f5f5",
                itemIconColorHover: "#f5f5f5",
            },
        };
    return {};
});

const bgColor = computed(() => {
    if (appConfig.theme === ThemeMode.DARK) {
        return "#000000";
    }
    if (appConfig.sideTheme === SideTheme.DARK) return "#000000";
    if (appConfig.sideTheme === SideTheme.WHITE) return "#f5f5f5";
    if (appConfig.sideTheme === SideTheme.IMAGE)
        return "rgba(255,255,255, 0.1)";
    return "#ffffff";
});

const contentWrapperStyle = computed(() => {
    return `--select-text-color: ${
        appConfig.theme === "light" || appConfig.sideTheme === "white"
            ? "#fff"
            : "var(--text-color)"
    }`;
});

const routes = ref([]);
const tabs = computed(() => {
    return window.store.main.routes
        .filter((route) => !route.meta?.hidden)
        .map((r) => {
            return {
                ...r,
                active: useRoute().meta?.breadcrumbs?.[0].name === r.name,
            };
        }) as SystemTabbarRouteRow[];
});

const changeTab = (row: SystemTabbarRouteRow) => {
    router.push({ name: row.name });
};
</script>

<style scoped lang="less">
.sidebar-bg-img {
    background-image: url("../../../assets/images/side-bg.png") !important;
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

.vaw-tab-split-side-bar-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    height: 100vh;
    box-sizing: border-box;
    z-index: 999;

    .tab-split-tab-wrapper {
        position: relative;
        top: 0;
        left: 0;
        width: var(--tab-split-menu-width);
        min-width: var(--tab-split-menu-width);
        max-width: var(--tab-split-menu-width);
        overflow: hidden;
        height: 100vh;
        box-sizing: border-box;

        .tab-split-logo-wrapper {
            max-width: var(--tab-split-menu-width);
            min-width: var(--tab-split-menu-width);
        }

        .tab-split-content-wrapper {
            position: relative;
            height: 100%;
            .after() {
                content: "";
                position: absolute;
                left: 5px;
                top: 5px;
                right: 5px;
                bottom: 5px;
                border-radius: 3px;
                z-index: -1;
            }

            .label-item-wrapper {
                position: relative;
                min-height: calc(var(--logo-height) * 1.2);
                padding: 10px 0;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                color: var(--text-color);
                z-index: 1;

                & > i {
                    font-size: 16px;
                }

                & > span {
                    font-size: 12px;
                    line-height: 14px;
                    margin-top: 5px;
                }

                &:hover {
                    cursor: pointer;
                }

                &::after {
                    .after();
                }

                & svg {
                    width: 25px;
                    height: 25px;
                }
            }

            .label-item-wrapper:hover::after {
                background-color: var(--primary-color);
            }

            .vaw-tab-split-item-is-active {
                color: var(--select-text-color);
            }

            .vaw-tab-split-item-is-active::after {
                background-color: var(--primary-color);
                .after();
            }
        }
    }

    .tab-split-menu-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: var(--tab-split-menu-width);
        overflow-x: hidden;
    }

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
        transform: translateX(-var(--menu-width));
        transition: transform var(--transition-time);
        box-shadow: none;
    }
}
</style>
