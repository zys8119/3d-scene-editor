import type { Options } from 'wp-request';
import type { RouteRecordName } from 'vue-router';

export interface BaseConfig {
    /**
     * 基础地址，router和vite均会采用此项配置
     * 使用空字符串设置可以使用相对地址
     * 如果使用 history apis，可能需要配置此项
     */
    base: string;
    title: string;
    company: string;
    lang: string;
    unique?: string;
    filehash?: boolean;
    hasUnitChange?: boolean;
    isH5?: boolean;
    [x: string]: any;
}

export interface Config {
    request: Partial<Options>;
    router: {
        history: boolean;
        remote: boolean;
        needLogin: boolean;
        whiteList: RouteRecordName[];
        keepAlive: boolean;
        session: boolean;
        needSideMenuIcon: boolean;
    };
    tabbarViews: {
        disabled?: boolean;
        max?: number;
    };
    showFooter: boolean;
    h5Config: {
        showTopNav: boolean; // 是否显示头部导航
        showBottomNav: boolean; // 是否显示底部导航
        openPullRefresh: boolean; // 是否开启所有页面的下拉刷新功能
    };
}

import type { RouteRecordRaw, RouteLocationNormalized } from 'vue-router';
export interface GlobalError {
    type: 'global' | 'vue';
    msg?: string | Event;
    url?: string;
    line?: number;
    col?: number;
    error?: unknown;
    vm?: any;
}

export interface ConfigHooks {
    request: Pick<
        Options,
        'afterEach' | 'beforeEach' | 'logout' | 'errorHandle'
    >;
    layout: {
        menuSelect: (route?: RouteRecordRaw) => void;
    };
    router: {
        beforeEach: (
            to: RouteLocationNormalized,
            from: RouteLocationNormalized
        ) => void;
        routesFilter: (
            routes: RouteRecordRaw[]
        ) => RouteRecordRaw[] | Promise<RouteRecordRaw[]>;
        getUserinfo: () => Promise<any>;
        firstTimeEnter: () => void;
    };
    error: {
        handle: (error: GlobalError) => void;
    };
}
