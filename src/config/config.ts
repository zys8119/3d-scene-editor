import type { Config } from "./typings";

export default {
    request: {
        baseURL: import.meta.env.VITE_API,
        successCode: [0, 200],
        useStore: () => window.store.main,
        trim: true,
    },
    router: {
        history: false,
        /** 是否使用远程路由 */
        remote: false,
        /**
         * 系统是否需要登录
         */
        needLogin: false,
        /**
         * 是否使用 SessionStorage 记录登录状态
         * 如果为 false 则使用 LocalStorage
         */
        session: false,
        /**
         * 白名单，用于排除不需要登录的页面
         */
        whiteList: ["login"],
        /**
         * 是否保持 alive 状态
         */
        keepAlive: false,
        /**
         * 左侧菜单是否需要 icon 图标以及页面响应式
         */
        needSideMenuIcon: true,
    },
    /**
     * 页签配置
     */
    tabbarViews: {
        disabled: false,
    },
    /**
     * 是否显示页脚
     */
    showFooter: true,
} as Config;
