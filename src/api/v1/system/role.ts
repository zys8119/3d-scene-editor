import { Role } from '@/api/typing';

export function get(data: { search?: string }, page: PageMap) {
    return request({
        url: '/api/admin/v1/role',
        params: {
            ...data,
            page_num: page.page,
            page_size: page.size,
        },
    });
}

export function post(data: Partial<Role>) {
    return request({
        method: 'post',
        url: '/api/admin/v1/role',
        data,
    });
}

export function del(data: string[]) {
    return request({
        method: 'delete',
        url: '/api/admin/v1/role',
        data: {
            id_list: data,
        },
    });
}

export function put(id: string, data: Partial<Role>) {
    return request({
        method: 'put',
        url: `/api/admin/v1/role/${id}`,
        data,
    });
}

export function detail(id: string) {
    return request({
        url: `/api/admin/v1/role/${id}`,
    });
}

export function getRolePerms(id: string) {
    return request({
        url: `/api/admin/v1/role/get-role-perms/${id}`,
    });
}

export function getRoleUsers(id: string) {
    return request({
        url: `/api/admin/v1/role/get-role-users/${id}`,
    });
}

export function updateRolePerms(id: string, data: string[]) {
    return request({
        method: 'post',
        url: `/api/admin/v1/role/update-role-perms/${id}`,
        data: {
            menu_ids: data,
        },
    });
}
export function updateRoleUsers(id: string, data: string[]) {
    return request({
        method: 'post',
        url: `/api/admin/v1/role/update-role-users/${id}`,
        data: {
            id_list: data,
        },
    });
}
