import router from './index';
import useStore from '@/store/modules/main';
import configHooks from '@/config/config-hooks';
import config from '@/config/config';
import baseConfig from '@/config/base';

import { setRoutes, status } from './set-routes';
import { SystemTabbarRouteRow } from '@/typings';
import useTabbarStore from '@/store/modules/tabbar';

export const getUserinfo = async () => {
    await configHooks.router.getUserinfo();
};

let firstTimeEnter = true;

router.beforeEach(async (to, from, next) => {
    try {
        const store = useStore();
        store.setPermissions(to);
        if (to.meta?.title) document.title = to.meta.title;
        if (firstTimeEnter) {
            configHooks.router.firstTimeEnter();
            firstTimeEnter = false;
        }
        configHooks.router.beforeEach(to, from);
        /**
         * 需要登录才需要判断 token 是否存在
         */
        if (config.router.needLogin) {
            /**
             * Storage 检查是否有 token
             * 有的话说明是第一次访问页面，则调用 getUserInfo 获取用户信息
             */
            if (!store.token) {
                const storage = config.router.session
                    ? sessionStorage
                    : localStorage;
                store.token =
                    storage.getItem(baseConfig.unique + 'token') || '';
            }
            /**
             * 如果仍然拿不到 token，这里排除白名单避免无限循环
             * @tip 不取名字的统统当作需要登录处理
             */
            if (
                !store.token &&
                (!to.name || !config.router.whiteList.includes(to.name))
            ) {
                return next({ name: 'login' });
            }
        }
        /**
         * 页签
         */
        if (
            !config.tabbarViews.disabled &&
            (to.meta?.title || (to.name && to.name !== 'index'))
        ) {
            const tabbarStore = useTabbarStore();
            if (
                !config.tabbarViews.max ||
                tabbarStore.tags.length < config.tabbarViews.max
            ) {
                if (!to.meta.hiddenInTab) {
                    if (typeof to.fullPath === 'string')
                        tabbarStore.push(to as SystemTabbarRouteRow);
                }
            }
            tabbarStore.active = to.fullPath;
        }
        /**
         * 第一次进入，一般会先获取权限
         */
        if (
            status.registerRouteFresh &&
            !config.router.whiteList.includes(to.name || '')
        ) {
            if (config.router.needLogin) {
                await getUserinfo();
                await setRoutes();
            } else {
                await setRoutes(false);
            }
            next({ ...to, replace: true });
        } else {
            next();
        }
    } catch {
        return next({ name: 'error' });
    }
});
