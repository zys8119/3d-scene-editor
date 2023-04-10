export default {
    index(id: string) {
        return request({
            url: '/user',
            method: 'post',
            data: { id },
        });
    },
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
