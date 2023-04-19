export default {
    login(data: LoginForm) {
        return request({
            url: '/saas/api/v1/auth/login',
            method: 'post',
            data,
        });
    },
};

export interface LoginForm {
    password: string;
    username: string;
    captchaId: string;
    captcha: string;
}
