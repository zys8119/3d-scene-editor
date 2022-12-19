/**
 * 挂载 store
 */
import useMainStore from './modules/main'
import usetabViewsStore from './modules/tabViews'
import useSideRoutesStore from './modules/side-routes'
import useAppConfigStore from './modules/app-config'
import { App } from 'vue'

interface Store {
    main: ReturnType<typeof useMainStore>,
    tabViews: ReturnType<typeof usetabViewsStore>
    sideRoutes: ReturnType<typeof useSideRoutesStore>
    appConfig: ReturnType<typeof useAppConfigStore>
}

/**
 * 把导入的模块放到这里
 */
function getStores(): Store {
    return {
        main: useMainStore(),
        tabViews: usetabViewsStore(),
        sideRoutes: useSideRoutesStore(),
        appConfig: useAppConfigStore(),
    }
}

/**
 * 一般情况下不需要维护这里
 */
export default {
    install(app: App<Element>) {
        app.use(createPinia())
        const stores = getStores()
        app.config.globalProperties.$store = stores
        window.store = stores
    }
}

import '@vue/runtime-core'

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $store: Store
    }
}

declare global {
    interface Window {
        store: Store
    }
}