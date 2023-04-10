export default {
    index() {
        return request({
            url: '/captcha',
            method: 'get',
        });
    },
};
