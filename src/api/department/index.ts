export default {
    index(id: string) {
        return request({
            url: '/department',
            method: 'post',
            data: { id },
        });
    },
    create(data: DepartmentForm) {
        return request({
            url: '/department/create',
            method: 'post',
            data,
        });
    },
    update(data: DepartmentForm) {
        return request({
            url: '/department/update',
            method: 'post',
            data,
        });
    },
    delete(id: string) {
        return request({
            url: '/department/delete',
            method: 'post',
            data: { id },
        });
    },
    list() {
        return request({
            url: '/department/list',
            method: 'get',
        });
    },
    department: {
        list() {
            return request({
                url: '/department/department/list',
                method: 'get',
            });
        },
    },
};

export interface DepartmentForm {
    id?: string;
}
