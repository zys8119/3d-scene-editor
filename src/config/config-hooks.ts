import useStore from '@/store/modules/main';
import useSideRoutes from '@/store/modules/side-routes';
import router from '../router';
import type { ConfigHooks } from './typings';
import baseConfig from './base';
import config from './config';
export const views = import.meta.glob('../views/**/**');

import { createDiscreteApi } from 'naive-ui';
import { MenuListData } from '@/api/sass/api/v1/menu';
import { RouteRecordRaw, RouterView } from 'vue-router';
import { createAsyncComponent } from '@/utils/route';
import { commonToast } from '@/utils/common';
const { message } = createDiscreteApi(['message']);

const transToRoutes = (menusMap: MenuListData[]): RouteRecordRaw[] => {
    return (
        menusMap?.map((menu) => {
            const redirect =
                menu.redirect ||
                (menu.children?.[0] && !menu.component
                    ? { name: menu.children[0].name }
                    : undefined);
            return {
                name: menu.name,
                path: menu.url,
                component: redirect
                    ? RouterView
                    : createAsyncComponent(
                          menu.name,
                          views[`../views${menu.component}`]
                      ),
                redirect,
                meta: {
                    icon: menu.icon ?? null,
                    title: menu.title || menu.name,
                    hidden: menu.hidden,
                    hiddenInTag: menu.hiddenInTab,
                    fixed: menu.fixed,
                    permissions: menu.permissions,
                },
                children: transToRoutes(menu.children),
            };
        }) || []
    );
};

export default {
    /**
     * 请求相关
     */
    request: {
        beforeEach(config) {
            if (!config) return;
            if (!config.headers) config.headers = {};
            // config.headers['unit'] = 'it is test header params'
        },
        afterEach(config) {
            if (!config) return;
        },
        errorHandle(msg) {
            if (baseConfig.isH5) commonToast(msg);
            else message.error(msg);
        },
        logout() {
            router.push({ name: 'login' });
        },
    },
    /**
     * 布局相关
     */
    layout: {
        menuSelect(route) {
            if (!route) return;
            if (route?.meta?.url) {
                const meta = route.meta;
                if (meta?.target) {
                    window.open(meta.url, meta.target);
                } else {
                    location.href = meta.url || '#';
                }
            } else {
                router.push({ name: route.name });
            }
        },
    },
    /**
     * 全局路由相关
     */
    router: {
        firstTimeEnter() {
            const storage = config.router.session
                ? sessionStorage
                : localStorage;
            const userinfo = storage.getItem(baseConfig.unique + 'userinfo');
            const token = storage.getItem(baseConfig.unique + 'token');
            if (userinfo) {
                const store = useStore();
                store.userinfo = JSON.parse(userinfo);
                store.token = token ?? '';
            }
        },
        beforeEach(to, from) {
            // 每个路由进入前发起一个请求
            const store = useSideRoutes();
            store.setHistoryRoutes(to, from);
        },
        /**
         * 用于 登录 / 第一次进入页面时获取权限
         * 可验证token是否有效及续期
         */
        async getUserinfo() {
            const store = useStore();
            if (!store.token) throw new Error('Token 不存在');
        },
        /**
         * 过滤路由，流程在 getUserinfo 之后
         */
        async routesFilter(routes) {
            const store = useStore();
            if (!config.router.needLogin || !config.router.remote) {
                return routes;
            }
            const data = (
                await window.api.sass.api.v1.menu.get_menus_by_user(
                    store.userinfo.id ?? ''
                )
            ).data.data;
            const indexName = (data.length > 0 && data?.[0].name) || 'login';
            if (indexName === 'login') {
                message.error('您没有任何页面的访问权限！');
                return [];
            }
            return [
                {
                    name: 'Index',
                    path: '/',
                    redirect: { name: indexName },
                    meta: {
                        hidden: true,
                        hiddenInTag: true,
                    },
                },
                ...transToRoutes(data),
            ];
        },
    },
    /**
     * 错误处理
     */
    error: {
        handle(error) {
            console.log(error);
        },
    },
} as ConfigHooks;
