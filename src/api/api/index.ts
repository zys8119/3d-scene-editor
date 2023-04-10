export default {
    index(id: string) {
        return request({
            url: '/api',
            method: 'post',
            data: { id },
        });
    },
    create(data: ApiForm) {
        return request({
            url: '/api/create',
            method: 'post',
            data,
        });
    },
    update(data: ApiForm) {
        return request({
            url: '/api/update',
            method: 'post',
            data,
        });
    },
    delete(id: string) {
        return request({
            url: '/api/delete',
            method: 'post',
            data: { id },
        });
    },
    list() {
        return request({
            url: '/api/list',
            method: 'get',
        });
    },
    api: {
        list() {
            return request({
                url: '/api/api/list',
                method: 'get',
            });
        },
    },
};

export interface ApiForm {
    id?: string;
}
