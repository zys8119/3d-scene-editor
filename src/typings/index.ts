import {MenuOption} from 'naive-ui'
import {RouteLocationNormalized, RouteRecordRaw} from 'vue-router'

/**
 * 系统路由类型
 */
export type SystemRouteRow = MenuOption & RouteRecordRaw & {info: RouteRecordRaw}

/**
 * 系统标签页路由类型
 */
export type SystemTabbarRouteRow = (RouteLocationNormalized & RouteRecordRaw) & {active: boolean}

/**
 * 公共类型
 */
export type PageMap = Record<string, string | number | boolean>

/**
 * 登录用户信息
 */
export interface UserInfo {
    avatar?: string
    username?: string
}

// 脚手架主题类型
export interface AppConfigState {
    projectName: string
    theme: ThemeMode
    sideTheme: SideTheme
    themeColor: string
    layoutMode: LayoutMode
    deviceType: DeviceType
    sideWidth: number
    pageAnim: PageAnim
    isCollapse: boolean
    actionBar: {
        isShowRefresh: boolean
        isShowFullScreen: boolean
    }
}
export enum LayoutMode {
    LTR = 'ltr',
    LCR = 'lcr',
    TTB = 'ttb',
}
export enum DeviceType {
    PC = 'pc',
    PAD = 'pad',
    MOBILE = 'mobile',
}
export enum ThemeMode {
    LIGHT = 'light',
    DARK = 'dark',
}
export enum SideTheme {
    DARK = 'dark',
    WHITE = 'white',
    IMAGE = 'image',
}
// 页面切换动画类型
export enum PageAnim {
    FADE = 'fade',
    OPACITY = 'opacity',
    DOWN = 'down',
    SCALE = 'scale',
}