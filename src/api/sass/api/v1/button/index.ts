import { TableListParams } from '@/api/typing';

export default {
    create(data: ButtonForm) {
        return request({
            url: '/saas/api/v1/button/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/button/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: ButtonListData) {
        return request({
            url: '/saas/api/v1/button/update',
            method: 'post',
            data: preprocessor(data, {}),
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/button/${id}`,
            method: 'get',
        });
    },
    list(params: TableListParams & { menuId: string }) {
        return request({
            url: `/saas/api/v1/button/list`,
            method: 'get',
            params,
        });
    },
};

export interface ButtonForm {
    code: string;
    name: string;
    menuId: string;
}

export interface ButtonListData extends ButtonForm {
    id: string;
}
