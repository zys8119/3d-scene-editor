import type { RouteRecordRaw } from "vue-router";
import type { AsyncComponentLoader } from "vue";

import Page404 from "@/components/common/404.vue";
import Loading from "@/components/common/loading.vue";

export const createAsyncComponent = (
    name: RouteRecordRaw["name"],
    component?: RouteRecordRaw["component"] | AsyncComponentLoader
) => {
    if (!component) return markRaw(Page404);
    if (typeof component !== "function") return markRaw(component);
    const result = defineAsyncComponent({
        loader: component as AsyncComponentLoader,
        errorComponent: Page404,
        loadingComponent: Loading,
        delay: 200,
    });
    return markRaw(
        defineComponent({
            name: String(name),
            render() {
                return h(result);
            },
        })
    );
};
