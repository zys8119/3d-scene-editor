import { TableListParams } from '@/api/typing';

export default {
    create(data: OrganizationUserForm) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/organization_user/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[], organizationId: string) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/organization_user/delete',
            method: 'post',
            data: { ids, organizationId },
        });
    },
    update(data: OrganizationUserListData) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/organization_user/update',
            method: 'post',
            data: preprocessor(data, {
                DefaultTenantId: () => void 0,
                avatar: () => void 0,
                Extra: () => void 0,
            }),
        });
    },
    list(params: TableListParams & { organizationId: string }) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/organization_user/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: `/saas/api/v1/organization_user/${id}`,
            method: 'get',
        });
    },
};

export interface OrganizationUserForm {
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

export interface OrganizationUserListData extends OrganizationUserForm {
    id: string;
}
