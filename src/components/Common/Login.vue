<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessage, ElForm } from 'element-plus'
import useStore from '@/store'
import { useRouter } from 'vue-router'
const store = useStore()
const user = reactive({
    username: '',
    password: ''
})

const form = ref<null | InstanceType<typeof ElForm>>(null)
const router = useRouter()
const login = () => {
    if (!form.value) return
    form.value.validate(vaild => {
        if (vaild) {
            store.login(user.username, user.password)
                .then(() => {
                    router.push('/')
                })
                .catch(err => {
                    ElMessage({
                        type: 'error',
                        message: err
                    })
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
            }" @keyup.enter="login">
                <el-form-item label="账号" prop="username" required>
                    <el-input v-model="user.username" placeholder="请输入账号" />
                </el-form-item>
                <el-form-item label="密码" prop="password" required>
                    <el-input v-model="user.password" type="password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

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
        width: 300px;;
    }
}
</style>
