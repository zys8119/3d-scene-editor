import { TableListParams } from '@/api/typing';

export default {
    create(data: PositionForm) {
        return request({
            url: '/saas/api/v1/position/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/position/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: PositionListData) {
        return request({
            url: '/saas/api/v1/position/update',
            method: 'post',
            data,
        });
    },
    list(params: TableListParams) {
        return request({
            url: '/saas/api/v1/position/list',
            method: 'get',
            params,
        });
    },
};

export interface PositionForm {
    code: string;
    name: string;
    remark: string;
    sort: number;
    status: boolean;
    tenantId: string;
}
export interface PositionListData extends PositionForm {
    id: string;
}
