export default {
    list(params: object) {
        return request({
            url: '/api/v1/test/list',
            method: 'get',
            params
        })
    }
}