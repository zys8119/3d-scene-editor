const host = 'https://zhenhaizz-test.zhijiasoft.com'

export default {
    login(data: { username: string, password: string }) {
        return window.common.axios({
            url: `${host}/v1/user/login`,
            method: 'post',
            isFormData: true,
            data
        })
    }
}