export default {
    captcha() {
        return request({
            url: '/saas/api/v1/captcha',
            method: 'get',
        });
    },
};
