import { Menu } from '@/api/typing';

export function tree() {
    return request({
        url: '/api/admin/v1/menu/tree/',
    });
}

export function get(disable_page: boolean) {
    return request({
        url: '/api/admin/v1/menu',
        params: {
            disable_page,
        },
    });
}

export function post(data: Partial<Menu>) {
    return request({
        method: 'post',
        url: '/api/admin/v1/menu',
        data,
    });
}

export function del(id_list: string[]) {
    return request({
        method: 'delete',
        url: '/api/admin/v1/menu',
        data: {
            id_list,
        },
    });
}

export function put(id: string, data: Partial<Menu>) {
    return request({
        method: 'put',
        url: `/api/admin/v1/menu/${id}`,
        data: preprocessor(data, {
            created_at: () => void 0,
            modified_at: () => void 0,
            id: () => void 0,
            children: () => void 0,
        }),
    });
}

export function getCurrentUserMenus() {
    return request({
        url: '/api/admin/v1/get-current-user-menus/',
    });
}
