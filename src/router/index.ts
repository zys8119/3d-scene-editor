import {createRouter, createWebHashHistory, createWebHistory, RouteMeta, RouteRecordRaw} from 'vue-router'
import {Component} from 'vue'
import config from '@/config/config'
import baseConfig from '../config/base'

import Page404 from '@/components/Common/404.vue'
import Layout from '@/components/Layout/index.vue'
import Redirect from '@/components/Common/Redirect.vue'

/**
 * 动态路由
 */
export const asyncRoutes: RouteRecordRaw[] = []

/**
 * 添加整个文件夹的 modules
 */
const modules = import.meta.globEager('./modules/*.ts')
for (const module of Object.values(modules)) {
    if (!module.default) continue
    if (!Array.isArray(module.default)) continue
    module.default.forEach(route => {
        asyncRoutes.push(route)
    })
}

/**
 * 公共路由，例如404，要在路由动态加载完成之后再加载
 */
export const commonRoutes: RouteRecordRaw[] = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: Page404,
        meta: {
            hiddenInTag: true
        }
    }
]

export const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: Layout,
        children: []
    },
    {
        path: '/demo/test1',
        name: 'test1',
        component: () => import('@/views/Demo/Test1.vue'),
        meta: {
            title: 'Demo',
            hiddenInTag: true
        }
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: Redirect,
        meta: {
            hiddenInTag: true,
            noCache: true
        }
    }
]

const router = createRouter({
    history: config.router.history ? createWebHistory(baseConfig.base) : createWebHashHistory(),
    routes
})

declare module 'vue-router' {
    interface RouteMeta {
        /**
         * 页面标题
         */
        title?: string;
        /**
         * 是否在菜单中隐藏
         */
        hidden?: boolean;
        /**
         * 是否在菜单中禁用
         */
        disabled?: boolean;
        /**
         * 图标，要求是一个 Vue Component
         */
        icon?: Component;
        /**
         * 是否全屏
         */
        isFullPage?: boolean;
        /**
         * 是否外链，点击后会跳转到这个 url
         */
        url?: string;
        target?: string;
        /**
         * 页签标题，优先级高于 title
         */
        tagTitle?: String;
        /**
         * 面包屑，不需要手动定义
         */
        breadcrumbs?: RouteRecordRaw[];
        /**
         * 是否在页签中固定，禁止关闭
         */
        fixed?: boolean;
        /**
         * 是否在页签中隐藏
         */
        hiddenInTag?: boolean;
        /** 在 keepAlive 模式下，是否禁用缓存  */
        noCache?: boolean;
        /** 是否隐藏面包屑 */
        hideBreadcrumbs?: boolean;
        /** 按钮权限 */
        permissions?: string[];
    }
}

export default router

