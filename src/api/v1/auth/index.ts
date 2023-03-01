export default {
    manager: {
        login(data: Login) {
            return request({
                url: '/api/admin/v1/auth/manager/login',
                method: 'POST',
                data,
            });
        },
    },
    user: {
        me() {
            return request({
                url: '/api/admin/v1/auth/user/me/',
            });
        },
    },
    sendSmsCode(mobile: string) {
        return request({
            url: '/api/admin/v1/auth/send-sms-code',
            method: 'POST',
            data: {
                mobile,
            },
        });
    },
};

export interface Login {
    login_type: number; // 登录方式（1，用户名+密码）/（2，手机号+密码）/ （3，手机号+验证码）
    username?: string;
    mobile?: string;
    password?: string;
    code?: string;
}
