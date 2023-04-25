import {
    RouteLocationNormalized,
    RouteLocationNormalizedLoaded,
    RouteLocationOptions,
    RouteRecordRaw,
} from 'vue-router';
import config from '@/config/config';
import baseConfig from '@/config/base';
import { LoginUserInfo } from '@/typings';

const useStore = defineStore('main', {
    state: () => {
        return {
            userinfo: {} as Partial<LoginUserInfo>,
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
            permissions: '' as string,
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
        setUserinfo(userinfo: LoginUserInfo | null) {
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
            if (this.userinfo.avatar) this.userinfo.avatar.url = '';
        },
        setPermissions(route: RouteLocationNormalized) {
            const _permissions = route.meta.permissions;
            if (!_permissions) return;
            if (typeof _permissions === 'string')
                this.permissions = _permissions;
            else if (_permissions?.length > 0) {
                this.permissions = _permissions
                    .map((v) => (typeof v === 'string' ? v : v.code))
                    .join(',');
            }
        },
    },
});

export default useStore;
