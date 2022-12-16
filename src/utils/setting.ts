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
    sideTheme: SideTheme.WHITE,
    themeColor: '#f00',
    layoutMode: LayoutMode.LTR,
    sideWidth: 210,
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
