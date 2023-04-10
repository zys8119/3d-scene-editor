export default {
    index(id: string) {
        return request({
            url: '/role',
            method: 'post',
            data: { id },
        });
    },
    create(data: RoleForm) {
        return request({
            url: '/role/create',
            method: 'post',
            data,
        });
    },
    update(data: RoleForm) {
        return request({
            url: '/role/update',
            method: 'post',
            data,
        });
    },
    delete(id: string) {
        return request({
            url: '/role/delete',
            method: 'post',
            data: { id },
        });
    },
    list() {
        return request({
            url: '/role/list',
            method: 'get',
        });
    },
    role: {
        list() {
            return request({
                url: '/role/role/list',
                method: 'get',
            });
        },
    },
};

export interface RoleForm {
    id?: string;
}
