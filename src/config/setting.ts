import {
    AppConfigState,
    DeviceType,
    LayoutMode,
    PageAnim,
    SideTheme,
    ThemeMode,
    LocaleName,
} from '@/typings';

const primaryColor = '#1f57ce';
const primaryHoverColor = '#3b6bd0';

document.documentElement.style.setProperty('--van-primary-color', primaryColor);

export default {
    theme: ThemeMode.LIGHT,
    sideTheme: SideTheme.DARK,
    themeColor: primaryColor,
    themeColorHover: primaryHoverColor,
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
