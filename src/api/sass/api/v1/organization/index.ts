export default {
    tree: {
        list() {
            return request({
                url: '/saas/api/v1/organization/tree/list',
                method: 'get',
            });
        },
    },
    create(data: OrganizationForm) {
        return request({
            url: '/saas/api/v1/organization/create',
            method: 'post',
            data,
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
    list() {
        return request({
            url: '/saas/api/v1/organization/list',
            method: 'get',
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
    code: string;
    email: string;
    leader: string;
    nodeType: 0 | 1; // 0 单位 1 部门
    parentId: string | null;
    phone: string;
    remark: string;
    sort: number;
    status: boolean;
    tenantId: string;
}

export interface OrganizationListData extends OrganizationForm {
    id: string;
}
