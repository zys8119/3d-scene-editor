import v1 from './v1';
import user from './user';
import captcha from './captcha';
import menu from './menu';
import role from './role';
import apiElse from './api';
import department from './department';
import { App } from 'vue';

export const api = {
    v1,
    user,
    captcha,
    menu,
    role,
    department,
    api: apiElse,
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
