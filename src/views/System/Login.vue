<template>
    <div class="login">
        <div class="login-form">
            <el-form ref="form" :model="user" :rules="{
                username: [{
                    required: true,
                    message: '请输入账号'
                }],
                password: [{
                    required: true,
                    message: '请输入密码'
                }]
            }" @keyup.enter="handleLogin">
                <img class="login-logo" src="/images/login/logo.png" />
                <el-form-item prop="username" required>
                    <el-input v-model="user.username" placeholder="请输入账号">
                        <template #prefix>
                            <img class="login-input-icon" src="/images/login/usericon.png" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password" required>
                    <el-input v-model="user.password" type="password" placeholder="请输入密码">
                        <template #prefix>
                            <img class="login-input-icon" src="/images/login/lockicon.png" />
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" round size="large" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
import { setRoutes } from '@/router/permission'
import { commonRoutes } from '@/router'
/**
 * dev 环境设置默认账号密码
 */
const userTemplate = import.meta.env.DEV ? {
    username: '18300000000',
    password: '000000'
} : {
    username: '',
    password: ''
}
const user = reactive(userTemplate)

/**
 * 登录
 */
const store = useStore()
const login = async(username: string, password: string) => {
    const res = await window.api.v1.user.login({
        username,
        password
    })
    await store.setToken(res.data.authorization.authorization)
    store.setUserinfo({
        ...res.data.user,
        ...res.data.authorization
    })
}

/**
 * 登录验证
 */
const router = useRouter()
const form = ref<InstanceType<typeof ElForm> | null>(null)

const handleLogin = () => {
    if (store.loading) return
    if (!form.value) return
    form.value.validate(async(vaild) => {
        if (vaild) {
            await login(user.username, user.password)
            setRoutes()
            router.push('/')
        } else {
            ElMessage({
                type: 'error',
                message: '请检查表单项'
            })
        }
    })
}

/**
 * 注销
 */
const logout = () => {
    /**
     * 删除动态路由和公共路由
     */
    store.flatRoutes.forEach(route => route.name && router.removeRoute(route.name))
    commonRoutes.forEach(route => route.name && router.removeRoute(route.name))
    store.routes = []
    store.flatRoutes = []
    /**
     * 清空 token
     */
    store.setToken()
    store.setUserinfo()
    window.store.tagViews.clear()
}
logout()
</script>

<style lang="less" scoped>
.login {
    background-color: #f5f5f5;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    background-image: url(@/assets/images/login/bg.png);
    background-size: cover;
    .login-form {
        background-color: #fff;
        padding: 80px 40px;
        width: 300px;
        border-radius: 30px;
        margin-left: 15%;
        text-align: center;
        @media (max-width: 700px) {
            margin: 0 30px;
            width: 100%;
        }
        .el-button {
            width: 100%;
            &.is-round {
                padding: 15px 23px;
            }
        }
        .el-input {
            --el-input-border-radius: 50px;
            --el-input-bg-color: #F2F6FB;
            --el-input-border: 0;
            font-size: 13px;
            &.el-input--prefix {
                :deep(.el-input__inner) {
                    padding-left: 45px;
                }
            }
            :deep(.el-input__prefix) {
                width: 35px;
            }
        }
    }
    .login-logo {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        margin-bottom: 40px;
        max-width: 300px;
    }
    .login-input-icon {
        width: 12px;
        margin-left: 10px;
        margin-right: 10px;
    }
}
</style>
