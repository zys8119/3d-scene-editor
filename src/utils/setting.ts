import {
    AppConfigState,
    DeviceType,
    LayoutMode,
    PageAnim,
    SideTheme,
    ThemeMode,
} from '@/typings'

export default {
    theme: ThemeMode.LIGHT,
    sideTheme: SideTheme.DARK,
    themeColor: '#f00',
    layoutMode: LayoutMode.LCR,
    sideWidth: 240,
    deviceType: DeviceType.PC,
    pageAnim: PageAnim.OPACITY,
    isFixedNavBar: true,
    isCollapse: false,
    actionBar: {
        isShowSearch: true,
        isShowMessage: true,
        isShowRefresh: true,
        isShowFullScreen: true,
    },
} as AppConfigState
