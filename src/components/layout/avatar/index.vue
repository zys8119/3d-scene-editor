<template>
    <div class="vaw-avatar-container">
        <n-dropdown
            trigger="hover"
            :options="options"
            size="large"
            @select="handleSelect"
        >
            <div class="action-wrapper">
                <div class="avatar">
                    <n-avatar
                        circle
                        size="small"
                        :src="store.userinfo.avatar?.url || defaultAvatar"
                        @error="avatarError"
                    />
                </div>
                <span class="nick-name">
                    {{ store.userinfo.username || '管理员' }}
                    <n-icon class="tip">
                        <CaretDownSharp />
                    </n-icon>
                </span>
            </div>
        </n-dropdown>
        <update-password
            ref="updatePasswordRef"
            :ids="[store.userinfo.id]"
            @submit="updateSuccess"
        />
    </div>
</template>

<script lang="ts" setup>
import { NIcon, useDialog } from 'naive-ui';
import { h } from 'vue';
import {
    LogInOutline,
    CaretDownSharp,
    LockClosedOutline,
} from '@vicons/ionicons5';
import { useRouter } from 'vue-router';
import useStore from '@/store/modules/main';
import defaultAvatar from '@/assets/images/avatar.png';
import UpdatePassword from '@/views/system/organization/components/models/update-password.vue';

const store = useStore();
const router = useRouter();
const options = [
    {
        label: '密码修改',
        key: 'passwordUpdate',
        icon: () =>
            h(NIcon, null, {
                default: () => h(LockClosedOutline),
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
];

const dialog = useDialog();

const avatarError = () => {
    store.removeUserInfoAvatar();
};

function logout() {
    dialog.warning({
        title: '提示',
        content: '是否要退出当前账号？',
        positiveText: '退出',
        negativeText: '再想想',
        onPositiveClick: () => {
            router.replace({ name: 'login' });
        },
    });
}

function handleSelect(key: string) {
    switch (key) {
        case 'logout':
            logout();
            break;
        case 'passwordUpdate':
            updatePasswordRef.value?.open();
            break;
    }
}

const updateSuccess = () => {
    router.replace({ name: 'login' });
};

const updatePasswordRef = ref();
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
