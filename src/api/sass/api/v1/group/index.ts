import { TableListParams } from '@/api/typing';

export default {
    users: {
        get(id: string) {
            return request({
                url: `/saas/api/v1/group/users/${id}`,
                method: 'get',
            });
        },
    },
    create(data: GroupForm) {
        return request({
            url: '/saas/api/v1/group/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/group/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: GroupListData) {
        return request({
            url: '/saas/api/v1/group/update',
            method: 'post',
            data,
        });
    },
    list(params: TableListParams) {
        return request({
            url: '/saas/api/v1/group/list',
            method: 'get',
            params,
        });
    },
    update_users(groupId: string, userIds: string[]) {
        return request({
            url: '/saas/api/v1/group/update_users',
            method: 'post',
            data: {
                groupId,
                userIds,
            },
        });
    },
};

export interface GroupForm {
    code: string;
    groupTypeId: string;
    name: string;
    remark: string;
    sort: number;
    status: boolean;
    tenantId: string;
}
export interface GroupListData extends GroupForm {
    id: string;
}
