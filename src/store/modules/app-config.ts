import defaultSetting from '@/config/setting'
import {LayoutMode, PageAnim, SideTheme, ThemeMode, DeviceType} from '../../typings'

import {useChangeMenuWidth} from '../../utils/use-menu-width'
useChangeMenuWidth(defaultSetting.sideWidth)

export default defineStore('app-config', {
    state: () => {
        return defaultSetting
    },
    getters: {
        getLayoutMode(state) {
            return state.layoutMode
        },
    },
    actions: {
        changeTheme(theme: ThemeMode) {
            this.theme = theme
        },
        changeLayoutMode(mode: LayoutMode) {
            this.layoutMode = mode
        },
        changeDevice(deviceType: DeviceType) {
            this.deviceType = deviceType
        },
        changeSideBarTheme(sideTheme: SideTheme) {
            this.sideTheme = sideTheme
        },
        changePageAnim(pageAnim: PageAnim) {
            this.pageAnim = pageAnim
        },
        changePrimaryColor(color: string) {
            this.themeColor = color
        },
        changeSideWith(sideWidth: number) {
            this.sideWidth = sideWidth
            const r = document.querySelector(':root') as HTMLElement
            r.style.setProperty('--menu-width', sideWidth + 'px')
        },
        toggleCollapse(isCollapse: boolean) {
            this.isCollapse = isCollapse
        },
    },
})

