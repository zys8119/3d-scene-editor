<template>
    <div class="main-header-left">
        <div class="title" :style="{ width: !store.isCollapse ? 'var(--menu-width)' : '54px' }" @click="router.push({ name: 'home' })">
            <div class="title-img">
                <img>
            </div>
            <div
                v-if="!store.isCollapse"
                class="title-content"
            >
                <wp-ellipsis no-tooltip>
                    {{ base.title }}
                </wp-ellipsis>
            </div>
            <div class="title-background"/>
        </div>
        <div class="top-menus">
            <wp-x-scroll>
                <div v-if="config.router.menu.collapse" class="top-menu top-collapse-menu" @click="store.collapse = !store.collapse">
                    <wp-icon
                        :fill="false"
                        :class="{ collapse: store.isCollapse }"
                    >
                        <component :is="Arrow" />
                    </wp-icon>
                </div>
                <template v-if="config.router.menu.topMenu">
                    <template v-for="route in routesMap" :key="route.name">
                        <router-link :to="route" class="top-menu" :class="{ active: route.active }">
                            <wp-icon v-if="route.meta?.icon" :fill="false">
                                <component :is="route.meta?.icon" />
                            </wp-icon>
                            {{ route.meta?.title || route.name }}
                        </router-link>
                    </template>
                </template>
            </wp-x-scroll>
        </div>
    </div>
    <div class="options">
        <wp-dropdown :list="list" :popover="{ arrow: false }" @click="goClick">
            <wp-avatar :size="35" />
        </wp-dropdown>
    </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
import config from '@/config/config'
import base from '@/config/base'
import Arrow from './Arrow.vue'

const router = useRouter()
const store = useStore()

// 头像下拉列表
const list = ref([
    {title: '退出登录', index: 1}
])
const goClick = (row: any) => {
    if (row.index === 1) handleLogout()
}

const handleLogout = () => {
    router.push({ name: 'login' })
}

const $route = useRoute()
const routesMap = computed(() => {
    return store.routes.filter(route => !route.meta?.hidden).map(route => {
        return {
            ...route,
            active: $route.meta.breadcrumbs?.[0].name === route.name
        }
    })
})
</script>

<style lang="less" scoped>
.tip {
    cursor: default;
    font-size: 14px;
}
.title {
    width: var(--menu-width);
    height: var(--menu-height);
    font-weight: bold;
    font-size: 18px;
    display: flex;
    align-items: center;
    position: relative;
    transition: width .2s;
    overflow: hidden;
    .title-background {
        background-color: #fff;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: .2s;
    }
    .title-img {
        width: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        z-index: 1;
        > img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--primary-color);
        }
    }
    .title-content {
        z-index: 1;
        flex: 1;
        overflow: hidden;
        transition: .2s;
        color: var(--primary-color);
        &:first-child {
            margin: 0 15px;
        }
    }
}
.top-menus {
    flex: 1;
    overflow: hidden;
    --wp-x-scroll-arrow-left-bg: linear-gradient(to right, var(--primary-color), rgba(255, 255, 255, 0));
    --wp-x-scroll-arrow-right-bg: linear-gradient(to left, var(--primary-color), rgba(255, 255, 255, 0));
    --wp-x-scroll-arrow-color: #fff;
    .top-menu {
        display: inline-flex;
        font-size: 16px;
        align-items: center;
        height: 100%;
        padding: 0 25px;
        color: #F9F9F9;
        opacity: 0.5;
        cursor: pointer !important;
        vertical-align: middle;
        text-decoration: none;

        &.top-collapse-menu {
            .wp-icon {
                font-size: 20px;
                transform: rotate(180deg);
                transition: transform .2s;
                &.collapse {
                    transform: none;
                }
            }
        }
        .wp-icon {
            font-size: 16px;
            margin-right: 5px;
            &.right {
                margin-left: 5px;
                margin-right: initial;
                transition: transform .4s;
                &.active {
                    transform: rotate(180deg);
                }
            }
        }
        &:hover {
            color: #FFF;
            // font-weight: 700;
            cursor: default;
            opacity: 1;
        }
        &.active {
            color: #FFF;
            font-weight: bold;
            opacity: 1;
        }
    }
}
.options {
    font-size: 14px;
    color: #FFF;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 40px;
    .wp-icon {
        cursor: pointer;
        &.bell {
            font-size: 16px;
        }
    }
    .wp-avatar {
        margin-left: 25px;
        > :deep(.wp-icon) {
            color: #000;
        }
    }
    .wp-badge {
        --wp-badge-size: 8px;
    }
}
.tip {
    cursor: default;
    font-size: 14px;
}
</style>