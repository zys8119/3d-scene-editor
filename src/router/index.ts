import {
    createRouter,
    createWebHashHistory,
    createWebHistory,
    RouteRecordRaw,
} from 'vue-router';
import config from '@/config/config';
import baseConfig from '../config/base';

import Page404 from '@/components/common/404.vue';
import Error from '@/components/common/error.vue';
import Redirect from '@/components/common/redirect.vue';

/**
 * 动态路由
 */
export const asyncRoutes: RouteRecordRaw[] = [];

/**
 * 添加整个文件夹的 modules
 */
const modules: Record<string, { default: RouteRecordRaw[] }> = import.meta.glob(
    './modules/*.ts',
    { eager: true }
);
for (const module of Object.values(modules)) {
    if (!module.default) continue;
    if (!Array.isArray(module.default)) continue;
    module.default.forEach((route) => {
        asyncRoutes.push(route);
    });
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
            hiddenInTab: true,
        },
    },
    {
        path: '/error',
        name: 'error',
        component: Error,
        meta: {
            hiddenInTab: true,
        },
    },
];

export const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: () => import('@/components/layout/index.vue'),
        redirect: '/demo/test2',
        children: [],
    },
    {
        path: '/demo/test1',
        name: 'test1',
        component: () => import('@/views/demo/test1.vue'),
        meta: {
            title: 'demo',
            hiddenInTab: true,
        },
    },
    {
        path: '/redirect',
        name: 'redirect',
        component: Redirect,
        meta: {
            hiddenInTab: true,
            noCache: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
            isFullPage: true,
        },
    },
];

const router = createRouter({
    history: config.router.history
        ? createWebHistory(baseConfig.base)
        : createWebHashHistory(),
    routes,
});

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
         * 图标
         */
        icon?: string;
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
        tabTitle?: string;
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
        hiddenInTab?: boolean;
        /** 按钮权限 */
        permissions?: string[];
        /** 是否进行扁平化路由 **/
        notFlat?: boolean;
    }
}

export default router;
