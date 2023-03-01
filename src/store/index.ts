/**
 * 挂载 store
 */
import useMainStore from "./modules/main";
import useTabbarStore from "./modules/tabbar";
import useSideRoutesStore from "./modules/side-routes";
import useAppConfigStore from "./modules/app-config";
import { App } from "vue";

interface Store {
    main: ReturnType<typeof useMainStore>;
    tabbar: ReturnType<typeof useTabbarStore>;
    sideRoutes: ReturnType<typeof useSideRoutesStore>;
    appConfig: ReturnType<typeof useAppConfigStore>;
}

/**
 * 把导入的模块放到这里
 */
function getStores(): Store {
    return {
        main: useMainStore(),
        tabbar: useTabbarStore(),
        sideRoutes: useSideRoutesStore(),
        appConfig: useAppConfigStore(),
    };
}

/**
 * 一般情况下不需要维护这里
 */
export default {
    install(app: App<Element>) {
        app.use(createPinia());
        const stores = getStores();
        app.config.globalProperties.$store = stores;
        window.store = stores;
    },
};

// eslint-disable-next-line vue/prefer-import-from-vue
import "@vue/runtime-core";

declare module "@vue/runtime-core" {
    export interface ComponentCustomProperties {
        $store: Store;
    }
}

declare global {
    interface Window {
        store: Store;
    }
}
