<template>
    <div class="login">
        <img :src="`./images/1.png`" alt="">
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
/**
 * dev 环境设置默认账号密码
 */
const userTemplate = import.meta.env.DEV ? {
    username: 'admin',
    password: 'zj123456,,'
} : {
    username: '',
    password: ''
}
const user = reactive(userTemplate)

/**
 * 登录
 */
import useStore from '@/store/modules/main'

const store = useStore()
const login = async(username: string, password: string) => {
    const res = await window.api.v1.user.login({
        username,
        password
    })
    await store.setToken(res.data.authorization)
    store.setUserinfo(res.data.user)
}

/**
 * 登录验证
 */
import { getUserinfo } from '@/router/permission'
import { ElMessage } from 'element-plus'
import type { ElForm } from 'element-plus'

const router = useRouter()
const form = ref<InstanceType<typeof ElForm> | null>(null)

const handleLogin = () => {
    if (!form.value) return
    form.value.validate(async(vaild) => {
        if (vaild) {
            await login(user.username, user.password)
            await getUserinfo()
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
import { commonRoutes } from '@/router'

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
