export default {
    info() {
        return request({
            url: '/saas/api/v1/user/info',
            method: 'get',
        });
    },
};
