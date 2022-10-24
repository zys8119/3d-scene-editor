<template>
    <template v-if="route.meta?.isFullPage">
        <router-view v-if="config.router.keepAlive" v-slot="{ Component }">
            <keep-alive :include="keepAliveInclude" :max="config.tagViews.disabled ? undefined : config.tagViews.max">
                <component :is="Component" />
            </keep-alive>
        </router-view>
        <router-view v-else />
    </template>
    <div v-else class="main">
        <wp-layout>
            <wp-layout-aside class="main-header">
                <layout-header />
            </wp-layout-aside>
            <wp-layout-content>
                <wp-layout row>
                    <wp-layout-aside class="main-aside">
                        <layout-menu />
                    </wp-layout-aside>
                    <wp-layout-content class="main-content">
                        <tag-views v-if="!config.tagViews.disabled" />
                        <div ref="contentRef" class="main-content-in">
                            <div v-if="!route.meta?.hideBreadcrumbs" class="main-content-in-title">
                                <wp-breadcrumb :list="routeMatchedMap">
                                    <template #item="{ title, to, link }">
                                        <router-link v-if="link" :to="to">{{ title }}</router-link>
                                        <template v-else>
                                            {{ title }}
                                        </template>
                                    </template>
                                </wp-breadcrumb>
                            </div>
                            <router-view v-if="config.router.keepAlive" v-slot="{ Component }">
                                <keep-alive :include="keepAliveInclude" :max="config.tagViews.disabled ? undefined : config.tagViews.max">
                                    <component :is="Component" />
                                </keep-alive>
                            </router-view>
                            <router-view v-else />
                        </div>
                    </wp-layout-content>
                </wp-layout>
            </wp-layout-content>
        </wp-layout>
    </div>
</template>

<script lang="ts" setup>
import { onBeforeRouteUpdate, RouterView } from 'vue-router'
import LayoutMenu from './Menu/index.vue'
import LayoutHeader from './Header/index.vue'
import config from '@/config/config'

import TagViews from './TagViews/index.vue'

import useTagViewsStore from '@/store/modules/tagViews'
import type { BreadcrumbList } from 'wisdom-plus'

const tagViewsStore = useTagViewsStore()
const route = useRoute()

const keepAliveInclude = computed(() => {
    if (config.tagViews.disabled) return undefined
    return tagViewsStore.tags.filter(item => {
        return !item.meta.noCache
    }).map(tag => {
        return String(tag.name)
    })
})

const routeMatchedMap = computed(() => {
    const result: BreadcrumbList[] = route.meta.breadcrumbs?.map<BreadcrumbList>((item, index) => {
        return {
            index: item.name,
            to: item,
            title: String(item.meta?.title || item.name),
            link: index !== (route.meta.breadcrumbs?.length || 0) - 1
        }
    }) || []
    // BreadcrumbList
    return result
})

const contentRef = ref<HTMLDivElement | null>(null)
onBeforeRouteUpdate(() => {
    // 自动滚动到顶部
    if (contentRef.value) contentRef.value.scrollTop = 0
})
</script>

<style lang="less" scoped>
.main {
    height: 100vh;
    display: flex;
    .main-aside {
        flex-shrink: 0;
        overflow-x: hidden;
        overflow-y: auto;
        overflow-y: overlay;
        scrollbar-width: none;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        z-index: 1;
        :deep(.el-menu) {
            border: 0;
            width: 250px;
            --el-menu-active-color: #fff;
            --el-menu-hover-bg-color: var(--primary-color);
            --el-menu-hover-color: #fff;
            .el-menu-item {
                transition: font-size .2s;
                &.is-active {
                    font-size: 15px;
                    color: var(--primary-color);
                }
            }
            .el-sub-menu__title {
                font-size: 15px;
            }
            .el-menu-item:hover,
            .el-sub-menu__title:hover {
                color: var(--primary-color);
                background-color: transparent;
            }
            &.el-menu--collapse {
                width: 64px;
                .el-sub-menu__title {
                    justify-content: center;
                }
                .el-menu-item > div {
                    text-align: center;
                }
                .is-active .el-sub-menu__title {
                    color: var(--primary-color);
                }
            }
        }
    }
    .main-container {
        flex: 1;
        flex-basis: auto;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .main-header {
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        height: var(--menu-height);
        // padding: 0 20px;
        color: #fff;
        :deep(.main-header-left) {
            flex: 1;
            display: flex;
            align-items: center;
            overflow: hidden;
            .el-button {
                border: 0;
                background-color: transparent;
                padding: 0;
                margin-right: 10px;
                &.expand {
                    transform: rotate(-180deg);
                }
                .el-icon {
                    font-size: 20px;
                }
            }
        }
    }
    .main-content {
        flex: 1;
        overflow: auto;
        height: calc(100vh - var(--menu-height));
        display: flex;
        flex-direction: column;
        &-in {
            background-color: rgb(240, 240, 240);
            padding: 15px 20px;
            flex: 1;
            overflow: auto;
            &-title {
                color: var(--primary-color);
                padding-left: 10px;
                border-left: 5px solid;
                margin-bottom: 15px;
                font-size: 16px;
                font-weight: bold;
                overflow: hidden;
                a {
                    text-decoration: none;
                }
                :deep(.wp-breadcrumb-item) {
                    font-size: 14px;
                    font-weight: normal;
                }
            }
        }
    }
    :deep(.el-menu) {
        height: 100%;
    }
}
</style>