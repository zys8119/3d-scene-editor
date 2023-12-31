export default {
    login(data: LoginForm) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/auth/login',
            method: 'post',
            data,
        });
    },
    token_refresh(tenantId: string) {
        return request({
            baseURL: import.meta.env.VITE_SASS_API,
            url: '/saas/api/v1/auth/token_refresh',
            method: 'post',
            data: {
                tenantId,
            },
        });
    },
};

export interface LoginForm {
    password: string;
    username: string;
    captchaId: string;
    captcha: string;
}
