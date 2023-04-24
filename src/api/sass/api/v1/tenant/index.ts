import { TableListParams } from '@/api/typing';

export default {
    info() {
        return request({
            url: '/saas/api/v1/tenant/info',
            method: 'get',
        });
    },
    list(params: TableListParams) {
        return request({
            url: '/saas/api/v1/tenant/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/tenant/${id}`,
            method: 'get',
        });
    },
    create(data: TenantForm) {
        return request({
            url: '/saas/api/v1/tenant/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/tenant/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: TenantListData) {
        return request({
            url: '/saas/api/v1/tenant/update',
            method: 'post',
            data,
        });
    },
};

export interface TenantForm {
    isSuper: boolean;
    name: string;
    serviceEndAt: number;
    serviceStartAt: number;
    status: boolean;
}

export interface TenantListData extends TenantForm {
    uuid: string;
    id: string;
    key: string;
    secret: string;
}
