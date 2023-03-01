import { List, User } from '@/api/typing';

export function post(data: Partial<User>) {
    return request({
        method: 'post',
        url: '/api/admin/v1/user',
        data,
    });
}

export function get(data: { search?: '' }, page: PageMap) {
    return request<List<User>>({
        url: '/api/admin/v1/user',
        params: {
            ...data,
            ...page,
        },
    });
}

export function del(id_list: string[]) {
    return request({
        method: 'delete',
        url: '/api/admin/v1/user',
        data: {
            id_list,
        },
    });
}

export function put(id: string, data: Partial<User>) {
    return request({
        method: 'put',
        url: `/api/admin/v1/user/${id}`,
        data: preprocessor(data, {
            created_at: () => void 0,
            modified_at: () => void 0,
            id: () => void 0,
        }),
    });
}

export function resetPassword(data: {
    old_password: string;
    new_password: string;
}) {
    return request({
        method: 'patch',
        url: '/api/admin/v1/user/reset-password',
        data,
    });
}

export function resetUsersPassword(data: {
    id_list: string[];
    admin_password: string;
    new_password: string;
}) {
    return request({
        method: 'patch',
        url: '/api/admin/v1/user/reset-users-password',
        data,
    });
}
