import {
    AppConfigState,
    DeviceType,
    LayoutMode,
    PageAnim,
    SideTheme,
    ThemeMode,
} from '@/typings';

export default {
    theme: ThemeMode.LIGHT,
    sideTheme: SideTheme.DARK,
    themeColor: '#1f57ce',
    layoutMode: LayoutMode.LCR,
    sideWidth: 240,
    deviceType: DeviceType.PC,
    pageAnim: PageAnim.OPACITY,
    isCollapse: false,
    actionBar: {
        isShowRefresh: true,
        isShowFullScreen: true,
    },
} as AppConfigState;
