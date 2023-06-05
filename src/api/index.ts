import v1 from './sass/api/v1';
import auth from './sass/api/v1/auth';
import user from './sass/api/v1/user';
import organization from './sass/api/v1/organization';
import organizationUserInfo from './sass/api/v1/organization-user-info';
import menu from './sass/api/v1/menu';
import button from './sass/api/v1/button';
import role from './sass/api/v1/role';
import authority from './sass/api/v1/authority';
import apiApi from './sass/api/v1/api';
import group from './sass/api/v1/group';
import groupType from './sass/api/v1/group-type';
import position from './sass/api/v1/position';
import tenant from './sass/api/v1/tenant';
import tenantUserInfo from './sass/api/v1/tenant-user-info';
import file from './file/api/v1/file';
import apis from '@/api/apis/index';

import { App } from 'vue';
import { createDiscreteApi } from 'naive-ui';
const { message } = createDiscreteApi(['message']);

export const api = {
    sass: {
        api: {
            v1: {
                ...v1,
                auth,
                user,
                organization,
                menu,
                button,
                role,
                authority,
                api: apiApi,
                group,
                groupType,
                organizationUserInfo,
                position,
                tenant,
                tenantUserInfo,
            },
        },
    },
    file: {
        api: {
            v1: {
                file,
            },
        },
    },
};

declare global {
    interface Window {
        api: typeof api;
        $apis: typeof apis;
        $message: typeof message;
    }
}

// eslint-disable-next-line vue/prefer-import-from-vue
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        api: typeof api;
        $apis: typeof apis;
        $message: typeof message;
    }
}

export default {
    install(app: App<Element>) {
        app.config.globalProperties.api = api;
        app.config.globalProperties.$apis = apis;
        app.config.globalProperties.$message = message;
        window.api = api;
        window.$apis = apis;
        window.$message = message;
    },
};
