<template>
    <div class="login">
        <div class="login-form">
            <el-form ref="form" label-width="70px" :model="user" :rules="{
                username: [{
                    required: true,
                    message: '请输入账号'
                }],
                password: [{
                    required: true,
                    message: '请输入密码'
                }]
            }" @keyup.enter="handleLogin">
                <el-form-item label="账号" prop="username" required>
                    <el-input v-model="user.username" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item label="密码" prop="password" required>
                    <el-input v-model="user.password" type="password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus'
import useStore from '@/store/modules/main'
import { commonRoutes } from '@/router'
import { getUserinfo } from '@/router/permission'
const store = useStore()
const user = reactive({
    username: '',
    password: ''
})

const form = ref<InstanceType<typeof ElForm> | null>(null)
const router = useRouter()

const logout = () => {
    /**
     * 删除动态路由和公共路由
     */
    store.routes.forEach(route => route.name && router.removeRoute(route.name))
    commonRoutes.forEach(route => route.name && router.removeRoute(route.name))
    /**
     * 清空 token
     */
    store.setToken()
    store.setUserinfo()
}
logout()

const login = (username: string, password: string) => {
    return window.api.v1.user.login({
        username,
        password
    })
        .then(res => {
            store.setToken(res.data.authorization)
            store.setUserinfo(res.data.user)
        })
}

const handleLogin = () => {
    if (!form.value) return
    form.value.validate(vaild => {
        if (vaild) {
            login(user.username, user.password)
                .then(() => {
                    getUserinfo()
                        .then(() => router.push('/'))
                })
        } else {
            ElMessage({
                type: 'error',
                message: '请检查表单项'
            })
        }
    })
}
</script>

<style lang="less" scoped>
.login {
    background-color: #f5f5f5;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .login-form {
        background-color: #fff;
        padding: 30px;
        width: 300px;
    }
}
</style>
