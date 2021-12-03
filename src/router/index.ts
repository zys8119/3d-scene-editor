import { createRouter, createWebHistory, RouteRecordRaw, RouterView } from 'vue-router'
import { markRaw } from 'vue'
import Layout from '@/components/Layout/Layout.vue'

import {
    Setting,
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
            type: 'home',
            icon: markRaw(HomeFilled)
        },
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: 'home2',
        name: 'home2',
        meta: {
            type: 'home2',
            icon: markRaw(Histogram)
        },
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: 'home3',
        name: 'home3',
        redirect: '/home3/home4',
        meta: {
            type: 'home2'
        },
        component: RouterView,
        children: [
            {
                path: 'home4',
                name: 'home4',
                component: () => import('@/components/HelloWorld.vue')
            },
            {
                path: 'baidu',
                name: 'baidu',
                redirect: '/home3',
                meta: {
                    title: '我是个外链',
                    url: 'http://www.google.com'
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
        meta: {
        type: 'login',
        },
        component: () => import('@/components/Common/Login.vue'),
    },
    {
        path: '/:pathMatch(.*)*', // 注意此处 404页面匹配规则和以前不相同，得采用这种配置方式才行
        name: '404',
        component: () => import('@/components/Common/404.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
