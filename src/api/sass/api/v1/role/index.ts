import { TableListParams } from '@/api/typing';

export default {
    create(data: RoleForm) {
        return request({
            url: '/saas/api/v1/role/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/role/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: RoleListData) {
        return request({
            url: '/saas/api/v1/role/update',
            method: 'post',
            data,
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/role/${id}`,
            method: 'get',
        });
    },
    list(params: TableListParams) {
        return request({
            url: `/saas/api/v1/role/list`,
            method: 'get',
            params,
        });
    },
};

export interface RoleForm {
    name: string;
    code: boolean;
    status: boolean;
    remark: string;
    tenantId: string;
}

export interface RoleListData extends RoleForm {
    id: string;
}
