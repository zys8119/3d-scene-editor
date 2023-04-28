import { TableListParams } from '@/api/typing';

export default {
    create(data: OrganizationUserForm) {
        return request({
            url: '/saas/api/v1/organization_user/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[], organizationId: string) {
        return request({
            url: '/saas/api/v1/organization_user/delete',
            method: 'post',
            data: { ids, organizationId },
        });
    },
    update(data: OrganizationUserListData) {
        return request({
            url: '/saas/api/v1/organization_user/update',
            method: 'post',
            data,
        });
    },
    list(params: TableListParams & { organizationId: string }) {
        return request({
            url: '/saas/api/v1/organization_user/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
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
