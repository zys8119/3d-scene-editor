import { TableListParams } from '@/api/typing';

export default {
    create(data: ApiForm) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/api/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/api/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: ApiListData) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/api/update',
            method: 'post',
            data,
        });
    },
    list(params: TableListParams) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/api/list',
            method: 'get',
            params,
        });
    },
};

export interface ApiForm {
    apiGroup: string;
    description: string;
    method: string;
    path: string;
    status: boolean;
}
export interface ApiListData extends ApiForm {
    id: string;
}
