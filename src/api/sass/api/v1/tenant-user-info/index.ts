import { TableListParams } from '@/api/typing';

export default {
    create(data: TenantUserForm) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/tenant_user/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[], tenantId: string) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/tenant_user/delete',
            method: 'post',
            data: { ids, tenantId },
        });
    },
    update(data: TenantUserListData) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/tenant_user/update',
            method: 'post',
            data: preprocessor(data, {
                DefaultTenantId: () => void 0,
                avatar: () => void 0,
                Extra: () => void 0,
            }),
        });
    },
    list(params: TableListParams & { tenantId: string }) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/tenant_user/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: `/saas/api/v1/tenant_user/${id}`,
            method: 'get',
        });
    },
};

export interface TenantUserForm {
    avatar: string;
    email: string;
    mobile: string;
    nickname: string;
    organizationId: string;
    password: string;
    sort: number;
    status: boolean;
    username: string;
}

export interface TenantUserListData extends TenantUserForm {
    id: string;
}
