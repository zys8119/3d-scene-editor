import { RouteRecordRaw } from 'vue-router';
import config from '@/config/config';
import baseConfig from '@/config/base';
import { UserInfo } from '@/typings';

export default defineStore('main', {
    state: () => {
        return {
            userinfo: {
                avatar: {
                    url: '',
                },
                username: '',
            } as UserInfo,
            /**
             * 请求相关
             */
            token: '',
            requests: new Set() as Set<Promise<any>>,
            /**
             * 有权限的路由
             */
            routes: [] as RouteRecordRaw[],
            flatRoutes: [] as RouteRecordRaw[],
        };
    },
    actions: {
        setToken(token = '') {
            const storage = config.router.session
                ? sessionStorage
                : localStorage;
            return new Promise<void>((resolve) => {
                this.token = token;
                storage.setItem(baseConfig.unique + 'token', token);
                resolve();
            });
        },
        setUserinfo(userinfo?: Record<any, string>) {
            const storage = config.router.session
                ? sessionStorage
                : localStorage;
            if (!userinfo) {
                this.userinfo = {};
                storage.removeItem(baseConfig.unique + 'userinfo');
            } else {
                this.userinfo = userinfo;
                storage.setItem(
                    baseConfig.unique + 'userinfo',
                    JSON.stringify(userinfo)
                );
            }
        },
        removeUserInfoAvatar() {
            if (this.userinfo.avatar) this.userinfo.avatar.url = null;
        },
    },
});
