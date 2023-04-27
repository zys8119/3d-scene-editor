<template>
    <div class="login">
        <div class="con">
            <div class="title">登录</div>
            <template v-for="(item, key) in loginType" :key="key">
                <template v-if="item.isActive">
                    <div class="list">
                        <p v-text="item.tip[0]" />
                        <input
                            v-model="userForm[item.formKey[0]]"
                            type="text"
                            :placeholder="`请输入${item.tip[0]}`"
                            @keydown.enter="login"
                        />
                    </div>
                    <div class="list fixed">
                        <p v-text="item.tip[1]" />
                        <input
                            v-model="userForm[item.formKey[1]]"
                            :type="`${key === 2 ? 'text' : 'password'}`"
                            :placeholder="`请输入${item.tip[1]}`"
                            @keydown.enter="login"
                        />
                        <div
                            v-if="key === 2"
                            class="code"
                            @click="handleCountDown"
                        >
                            <template v-if="countDown > 0">
                                <n-countdown :duration="countDown" />
                            </template>
                            <template v-else> 获取验证码 </template>
                        </div>
                    </div>
                    <div class="list fixed" v-if="key === 0">
                        <p v-text="item.tip[2]" />
                        <input
                            v-model="userForm[item.formKey[2]]"
                            type="text"
                            :placeholder="`请输入${item.tip[2]}`"
                            @keydown.enter="login"
                        />
                        <div class="code img" @click="init">
                            <img :src="imgCode" alt="" />
                        </div>
                    </div>
                </template>
            </template>
            <div class="btn" @click="login">登录</div>
            <div v-if="loginType.length > 1" class="login-type">
                <template v-for="(item, key) in loginType" :key="key">
                    <span
                        v-if="!item.isActive"
                        @click="changeLoginType(key)"
                        v-text="item.name"
                    />
                </template>
            </div>
        </div>
        <p class="text">Copyright © 2019 浙江智加信息科技有限公司</p>
    </div>
</template>

<script setup lang="ts">
import useStore from '@/store/modules/main';
import { useMessage } from 'naive-ui';
import { Ref } from 'vue';
import { LoginUserInfo } from '@/typings';
import { setRoutes } from '@/router/set-routes';

const message = useMessage();
const loginType = ref<LoginType[]>([
    {
        name: '账号密码登录',
        tip: ['账号', '密码', '验证码'],
        formKey: ['username', 'password', 'captcha'],
        type: 1,
        isActive: true,
    },
    {
        name: '手机号密码登录',
        tip: ['手机号', '密码'],
        formKey: ['mobile', 'password'],
        type: 2,
        isActive: false,
    },
    {
        name: '验证码登录',
        tip: ['手机号', '验证码'],
        formKey: ['mobile', 'code'],
        type: 3,
        isActive: false,
    },
]);
const imgCode = ref('');

const store = useStore();
const router = useRouter();

/**
 * 清空 token
 */
store.setToken();
store.setUserinfo(null);

const userForm = ref<UserForm>({
    username: import.meta.env.DEV ? 'admin' : '',
    password: import.meta.env.DEV ? 'saas-admin' : '',
    mobile: '',
    code: '',
    captcha: '',
    captchaId: '',
});

const countDown = ref(0) as Ref<number>;
const handleCountDown = async () => {
    if (countDown.value === 0) {
        if (!userForm.value.mobile) return message.error('请输入正确的手机号');
        // await window.api.v1.auth.sendSmsCode(userForm.value.mobile);
        message.success('验证码已发送');
        countDown.value = 60000;
    }
};
const login = async () => {
    const currentLoginType: LoginType = loginType.value.filter(
        (v: LoginType) => v.isActive
    )[0];
    if (!userForm.value[currentLoginType.formKey[0]])
        return message.error(`请输入${currentLoginType.tip[0]}`);
    if (!userForm.value[currentLoginType.formKey[1]])
        return message.error(`请输入${currentLoginType.tip[1]}`);
    if (
        loginType.value[0].isActive &&
        !userForm.value[currentLoginType.formKey[2]]
    )
        return message.error(`请输入${currentLoginType.tip[2]}`);
    try {
        const res: LoginInfo = await window.api.sass.api.v1.auth.login(
            userForm.value
        );
        await store.setToken(res.data.accessToken);
        await store.setUserinfo(res.data.user);
        await setRoutes();
        await router.push('/');
    } catch {
        init();
    }
};

// 切换登录模式
const changeLoginType = (k: number) => {
    loginType.value.forEach((v: LoginType, key: number) => {
        v.isActive = key === k;
    });
};

// 初始化
const init = async () => {
    const res = await window.api.sass.api.v1.captcha();
    userForm.value.captchaId = res.data.captchaId;
    imgCode.value = res.data.imgPath;
};

onMounted(init);

interface LoginType {
    name: string;
    tip: string[];
    formKey: ('username' | 'mobile' | 'password' | 'code')[];
    type: number;
    isActive: boolean;
}

interface UserForm {
    username: string;
    mobile: string;
    password: string;
    code: string;
    captcha: string;
    captchaId: string;
}

interface LoginInfo {
    data: {
        accessToken: string;
        user: LoginUserInfo;
    };
}
</script>

<style scoped lang="less">
.login {
    width: 100vw;
    height: 100vh;
    background: url('@/assets/images/system/login-bg.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .con {
        background: #ffffff;
        position: relative;
        padding: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 10px;
        margin-top: -100px;
        .title {
            font-size: 20px;
            font-weight: bold;
            color: #384f8d;
            margin: 0 auto;
            text-align: center;
        }
        .list {
            width: 280px;
            background: #ffffff;
            flex-direction: column;
            display: flex;
            justify-content: space-between;
            padding: 10px;
            margin: 10px auto;
            p {
                margin: 0;
                padding: 0;
                color: #384f8d;
                font-size: 14px;
            }
            .code {
                display: inline-block;
                padding: 6px;
                background: #989fb6;
                border-radius: 5px;
                color: #fff;
                font-size: 10px;
                font-weight: bold;
                position: absolute;
                bottom: 15px;
                cursor: pointer;
                right: 10px;
                &.img {
                    width: 90px;
                    height: 40px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            input {
                flex: 1;
                border: none;
                border-bottom: 1px solid #989fb6;
                outline: none;
                margin-top: 5px;
                padding: 5px 0 10px;
                &::-webkit-input-placeholder {
                    color: #989fb6;
                    font-size: 14px;
                }
                &::-ms-input-placeholder {
                    color: #989fb6;
                    font-size: 14px;
                }
            }
        }
        .fixed {
            position: relative;
        }
        .btn {
            background: #384f8d;
            color: #ffffff;
            text-align: center;
            margin: 20px auto;
            padding: 5px 0;
            width: 280px;
            font-size: 20px;
            cursor: pointer;
        }
        .login-type {
            display: flex;
            justify-content: center;
            color: #989fb6;
            span {
                cursor: pointer;
                padding: 0 15px;
                border-right: 1px solid #989fb6;
                font-size: 14px;
                &:hover {
                    color: #2b3f79;
                }
                &:last-child {
                    border: none;
                }
            }
        }
    }
    .text {
        position: absolute;
        width: 280px;
        bottom: 5px;
        font-size: 4px;
        text-align: center;
        color: #cccccc;
    }
}
</style>
