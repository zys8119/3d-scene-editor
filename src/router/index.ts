import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'
import { markRaw, Component } from 'vue'
import Layout from '@/components/layout/index.vue'

import {
    HomeFilled,
    Histogram
} from '@element-plus/icons'

/**
 * 使用 markRaw 为了避免原始 ref 造成的性能损耗
 * markRaw 可以使一个对象永远是原始对象
 */
export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: 'home',
        name: 'home',
        meta: {
            title: '首页',
            icon: markRaw(HomeFilled)
        },
        component: () => import('@/components/views/HelloWorld.vue')
    },
    {
        path: 'home2',
        name: 'home2',
        meta: {
            title: '被封印的首页',
            icon: markRaw(Histogram),
            disabled: true
        },
        component: () => import('@/components/views/HelloWorld.vue')
    },
    {
        path: 'home3',
        name: 'home3',
        redirect: '/home3/home4',
        meta: {
            title: '特殊页面'
        },
        component: RouterView,
        children: [
            {
                path: 'home4',
                name: 'home4',
                component: () => import('@/components/views/HelloWorld.vue'),
                meta: {
                    title: '全屏页面',
                    isFullPage: true
                }
            },
            {
                path: 'baidu',
                name: 'baidu',
                redirect: '/home3',
                meta: {
                    title: '我是个外链',
                    url: 'http://www.google.com'
                }
            },
            {
                path: 'baidu2',
                name: 'baidu2',
                redirect: '/home3',
                meta: {
                    title: '新链接打开',
                    url: 'http://www.google.com',
                    target: '_blank'
                }
            }
        ]
    }
]

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        redirect: '/home',
        component: Layout,
        children: asyncRoutes
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/views/Login.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/components/common/404.vue'),
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
