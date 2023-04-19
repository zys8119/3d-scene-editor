export default {
    create() {
        return request({
            url: '/saas/api/v1/organization/create',
            method: 'post',
        });
    },
    delete(ids: number[]) {
        return request({
            url: '/saas/api/v1/organization/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: OrganizationForm & { id: number }) {
        return request({
            url: '/saas/api/v1/organization/update',
            method: 'post',
            data,
        });
    },
    list() {
        return request({
            url: '/saas/api/v1/organization/list',
            method: 'get',
        });
    },
    get(id: number) {
        return request({
            url: `/saas/api/v1/organization/${id}`,
            method: 'get',
        });
    },
};

export interface OrganizationForm {
    name: string;
}
