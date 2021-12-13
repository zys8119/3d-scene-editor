import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Component } from 'vue'
import Layout from '@/components/layout/index.vue'

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
        component: () => import('@/components/common/404.vue')
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
        component: () => import('@/components/views/Login.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

declare module 'vue-router' {
    interface RouteMeta {
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
    }
}

export default router
