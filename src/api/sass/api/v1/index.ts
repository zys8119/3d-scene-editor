export default {
    captcha() {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/captcha',
            method: 'get',
        });
    },
};
