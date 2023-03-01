import v1 from './v1';
import { App } from 'vue';

export const api = {
    v1,
};

declare global {
    interface Window {
        api: typeof api;
    }
}

// eslint-disable-next-line vue/prefer-import-from-vue
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        api: typeof api;
    }
}

export default {
    install(app: App<Element>) {
        app.config.globalProperties.api = api;
        window.api = api;
    },
};
