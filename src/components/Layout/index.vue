<template>
    <router-view v-if="route.meta?.isFullPage" />
    <div v-else class="main">
        <div class="main-aside">
            <layout-menu />
        </div>
        <div class="main-container">
            <div class="main-header">
                <layout-header />
            </div>
            <div class="main-content">
                <tag-views v-if="!config.tagViews.disabled" />
                <div class="main-content-in">
                    <router-view v-if="config.router.keepAlive" v-slot="{ Component }">
                        <keep-alive :include="keepAliveInclude" :max="config.tagViews.disabled ? undefined : config.tagViews.max">
                            <component :is="Component" />
                        </keep-alive>
                    </router-view>
                    <router-view v-else />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import LayoutMenu from './Menu/index.vue'
import LayoutHeader from './header.vue'
import config from '@/config/config'

import TagViews from './tagViews/index.vue'

import useTagViewsStore from '@/store/modules/tagViews'
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
</script>

<style lang="less" scoped>
.main {
    height: 100vh;
    display: flex;
    .main-aside {
        overflow-x: hidden;
        overflow-y: auto;
        border-right: solid 1px #e6e6e6;
        flex-shrink: 0;
        :deep(.el-menu) {
            width: 100%;
            width: 250px;
            border: 0;
            &.el-menu--collapse {
                width: 64px;
                .el-sub-menu__title {
                    justify-content: center;
                }
                .el-menu-item > div {
                    text-align: center;
                }
                .is-active .el-sub-menu__title {
                    color: var(--el-menu-active-color);
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
        background-color: #f5f5f5;
        display: flex;
        align-items: center;
        height: 55px;
        padding: 0 20px;
        :deep(.main-header-left) {
            flex: 1;
            display: flex;
            align-items: center;
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
        padding: 20px;
        overflow: auto;
    }
    :deep(.el-menu) {
        height: 100%;
    }
}
</style>