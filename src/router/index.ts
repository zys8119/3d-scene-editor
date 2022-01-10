import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { Component } from 'vue'
import Layout from '@/components/Layout/index.vue'
import config from '@/config/config'

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
        component: () => import('@/components/Common/404.vue'),
        meta: {
            hiddenInTag: true
        }
    }
]

export const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        redirect: '/home',
        component: Layout,
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
        meta: {
            title: '登录',
            hiddenInTag: true
        }
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: () => import('@/components/Common/Redirect.vue'),
        meta: {
            hiddenInTag: true,
            noCache: true
        }
    }
]

import baseConfig from '../config/base'

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
        /**
         * 在 keepAlive 模式下，是否禁用缓存
         */
        noCache?: boolean;
    }
}

export default router
