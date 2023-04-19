import v1 from './sass/api/v1';
import auth from './sass/api/v1/auth';
import organization from './sass/api/v1/organization';
import { App } from 'vue';

export const api = {
    sass: {
        api: {
            v1: {
                ...v1,
                auth,
                organization,
            },
        },
    },
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
