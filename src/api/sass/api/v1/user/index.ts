import { TableListParams } from '@/api/typing';

export default {
    info() {
        return request({
            url: '/saas/api/v1/user/info',
            method: 'get',
        });
    },
    list(params: TableListParams & { ignoreTenant?: boolean }) {
        return request({
            url: '/saas/api/v1/user/list',
            method: 'get',
            params,
        });
    },
    get(id: string) {
        return request({
            url: `/saas/api/v1/user/${id}`,
            method: 'get',
        });
    },
    create(data: UserForm) {
        return request({
            url: '/saas/api/v1/user/create',
            method: 'post',
            data,
        });
    },
    delete(ids: string[]) {
        return request({
            url: '/saas/api/v1/user/delete',
            method: 'post',
            data: { ids },
        });
    },
    update(data: UserListData) {
        return request({
            url: '/saas/api/v1/user/update',
            method: 'post',
            data: preprocessor(data, {
                DefaultTenantId: () => void 0,
                avatar: () => void 0,
            }),
        });
    },
    update_users_password(data: UserUpdatePassword) {
        return request({
            url: '/saas/api/v1/user/update_users_password',
            method: 'post',
            data,
        });
    },
};

export interface UserForm {
    avatar: string;
    nickname: string;
    username: string;
    status: boolean;
    password: string;
    mobile: string;
    email: string;
}

export interface UserListData extends UserForm {
    DefaultTenantId: string;
    id: string;
}

export interface UserUpdatePassword {
    newPass: string;
    operatorPW: string;
    userIds: string[];
}
