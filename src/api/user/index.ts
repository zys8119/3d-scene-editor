export default {
    login(data: LoginForm) {
        return request({
            url: '/user/login',
            method: 'post',
            data,
        });
    },
};

export interface LoginForm {
    password: string;
    username: string;
}
