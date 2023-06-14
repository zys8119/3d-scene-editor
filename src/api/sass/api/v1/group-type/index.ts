import { TableListParams } from '@/api/typing';

export default {
    create(data: GroupTypeForm) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/group_type/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/group_type/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: GroupTypeListData) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/group_type/update',
            method: 'post',
            data,
        });
    },
    list(params: TableListParams) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/group_type/list',
            method: 'get',
            params,
        });
    },
};

export interface GroupTypeForm {
    code: string;
    name: string;
    remark: string;
    sort: number;
    status: boolean;
    tenantId: string;
}
export interface GroupTypeListData extends GroupTypeForm {
    id: string;
}
