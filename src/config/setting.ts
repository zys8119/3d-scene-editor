import {
    AppConfigState,
    DeviceType,
    LayoutMode,
    PageAnim,
    SideTheme,
    ThemeMode,
    LocaleName,
} from '@/typings';

export default {
    theme: ThemeMode.LIGHT,
    sideTheme: SideTheme.DARK,
    themeColor: '#1f57ce',
    themeColorHover: '#3b6bd0',
    layoutMode: LayoutMode.LTR,
    sideWidth: 240,
    deviceType: DeviceType.PC,
    pageAnim: PageAnim.OPACITY,
    isCollapse: false,
    actionBar: {
        isShowRefresh: true,
        isShowFullScreen: true,
    },
    localeName: LocaleName.zhCN,
} as AppConfigState;
