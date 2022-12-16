import { Ref, UnwrapRef } from 'vue'
import { TableProps } from 'wisdom-plus'
import {RouteRecordRaw} from 'vue-router'

export type TableColumn<T extends (string | object) = string> = ExtractProps<TableProps['columns']> & Record<string, any> & {
    prop?: T extends object ? keyof T : T
}
export type TableColumns<T extends (string | object) = string> = TableColumn<T>[]

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

export interface EditBtn {
    title: string
    index: number
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
        isShowSearch: boolean
        isShowMessage: boolean
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

export enum PageAnim {
    FADE = 'fade',
    OPACITY = 'opacity',
    DOWN = 'down',
    SCALE = 'scale',
}

export interface SplitTab {
    label: string
    iconPrefix?: string | unknown
    icon: string
    fullPath: string
    children?: Array<RouteRecordRaw>
    checked: Ref<UnwrapRef<boolean>>
}