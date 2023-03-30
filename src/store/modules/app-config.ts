import defaultSetting from '@/config/setting';
import { DeviceType } from '@/typings';

export default defineStore('app-config', {
    state: () => {
        return defaultSetting;
    },
    getters: {
        getLayoutMode(state) {
            return state.layoutMode;
        },
    },
    actions: {
        changeDevice(deviceType: DeviceType) {
            this.deviceType = deviceType;
        },
        toggleCollapse(isCollapse: boolean) {
            this.isCollapse = isCollapse;
        },
    },
});
