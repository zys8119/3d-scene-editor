<template>
    <div class="vaw-avatar-container">
        <n-dropdown trigger="hover" :options="options" size="large" @select="handleSelect">
            <div class="action-wrapper">
                <div class="avatar">
                    <n-avatar circle size="small" :src="userStore.avatar"/>
                </div>
                <span class="nick-name">
                    张三
                    <n-icon class="tip">
                        <CaretDownSharp/>
                    </n-icon>
                </span>
            </div>
        </n-dropdown>
    </div>
</template>

<script lang="ts" setup>
import {NIcon, useDialog} from 'naive-ui'
import {h} from 'vue'
import {Menu, LogInOutline, CaretDownSharp} from '@vicons/ionicons5'
import {useRouter} from 'vue-router'

const userStore = ref({})
const router = useRouter()
const options = [
    {
        label: '个人中心',
        key: 'personal-center',
        icon: () =>
            h(NIcon, null, {
                default: () => h(Menu),
            }),
    },
    {
        label: '退出登录',
        key: 'logout',
        icon: () =>
            h(NIcon, null, {
                default: () => h(LogInOutline),
            }),
    },
]

function personalCenter() {
    router.push('/personal/info')
}

const dialog = useDialog()

function logout() {
    dialog.warning({
        title: '提示',
        content: '是否要退出当前账号？',
        positiveText: '退出',
        negativeText: '再想想',
        onPositiveClick: () => {
        },
    })
}

function handleSelect(key: string) {
    switch (key) {
        case 'personal-center':
            personalCenter()
            break
        case 'logout':
            logout()
            break
    }
}
</script>

<style lang="less" scoped>
.vaw-avatar-container {
    .action-wrapper {
        display: flex;
        align-items: center;

        .avatar {
            width: calc(var(--logo-height) - 15px);
            height: calc(var(--logo-height) - 15px);
            display: flex;
            align-items: center;

            & > img {
                border: 1px solid #f6f6f6;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }

        .nick-name {
            margin: 0 5px;

            .tip {
                transform: rotate(0);
                transition: transform var(--transition-time);
                margin-left: 2px;
            }
        }
    }
}

.vaw-avatar-container:hover {
    cursor: pointer;
    color: var(--primary-color);

    .nick-name .tip {
        transform: rotate(180deg);
        transition: transform var(--transition-time);
    }
}
</style>
