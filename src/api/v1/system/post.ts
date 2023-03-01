import { Post } from '@/api/typing';

export function get(data: { search?: string }, page: PageMap, node_id: string) {
    return request({
        url: '/api/admin/v1/post',
        params: {
            ...data,
            page_num: page.page,
            page_size: page.size,
            node_id,
        },
    });
}

export function post(data: Partial<Post>) {
    return request({
        method: 'post',
        url: '/api/admin/v1/post',
        data,
    });
}

export function del(data: string[]) {
    return request({
        method: 'delete',
        url: '/api/admin/v1/post',
        data: {
            id_list: data,
        },
    });
}

export function put(id: string, data: Partial<Post>) {
    return request({
        method: 'put',
        url: `/api/admin/v1/post/${id}`,
        data,
    });
}

export function detail(id: string) {
    return request({
        url: `/api/admin/v1/post/${id}`,
    });
}

export function updatePostStaff(id: string, id_list: string[]) {
    return request({
        method: 'post',
        url: `/api/admin/v1/post/update-post-staff/${id}`,
        data: {
            id_list,
        },
    });
}

export function updatePostRoles(id: string, id_list: string[]) {
    return request({
        method: 'post',
        url: `/api/admin/v1/post/update-post-roles/${id}`,
        data: {
            id_list,
        },
    });
}

export function getPostStaff(id: string) {
    return request({
        url: `/api/admin/v1/post/get-post-staff/${id}`,
    });
}

export function getPostRoles(id: string) {
    return request({
        url: `/api/admin/v1/post/get-post-roles/${id}`,
    });
}
