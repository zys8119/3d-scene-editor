/**
 * 公共类型
 */
export type PageMap = Record<string, string | number | boolean>
export interface FileItem {
    id: number,
    creator_id: string
    creator_name: string,
    name?: string,
    origin_name?: string,
    size: number
    suffix: string
    url: string
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
    isFixedNavBar: boolean
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
    BLUE = 'blue',
    IMAGE = 'image',
}
// 页面切换动画类型
export enum PageAnim {
    FADE = 'fade',
    OPACITY = 'opacity',
    DOWN = 'down',
    SCALE = 'scale',
}