export default {
    create() {
        return request({
            url: '/saas/api/v1/organization/create',
            method: 'post',
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/organization/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: OrganizationForm & { id: string }) {
        return request({
            url: '/saas/api/v1/organization/update',
            method: 'post',
            data,
        });
    },
    list(params: ListParams) {
        return request({
            url: '/saas/api/v1/organization/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/organization/${id}`,
            method: 'get',
        });
    },
};

export interface OrganizationForm {
    name: string;
}

export interface ListParams {
    page: number;
    size: number;
    search: string;
}