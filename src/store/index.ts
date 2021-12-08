/**
 * 挂载 store
 */
import useMainStore from './main'
import { App } from 'vue'

/**
 * 把导入的模块放到这里
 */
const getStores = () => {
    const mainStore = useMainStore()
    const stores = {
        main: mainStore
    }
    return stores
}

/**
 * 一般情况下不需要维护这里
 */
export default function(app: App<Element>): void {
    const stores = getStores()
    app.config.globalProperties.$store = stores
    window.store = stores
}

declare module '@vue/runtime-core'  {
    export interface ComponentCustomProperties {
        readonly $store: ReturnType<typeof getStores>
    }
}

declare global {
    interface Window {
        store: ReturnType<typeof getStores>
    }
}