<template>
    <div class="main-header-left" @click="router.push({ name: 'home' })">
        {{ baseConfig.title }}
    </div>
    <wp-dropdown
        :list="[
            {
                index: 'logout',
                title: '退出登录',
                click: handleLogout
            }
        ]"
        :popover="{
            arrow: false
        }"
    >
        <wp-button type="text">
            {{ store.userinfo.name || store.userinfo.username }}
            <span v-if="store.userinfo.name || store.userinfo.username">，</span>
            你好！
        </wp-button>
    </wp-dropdown>
</template>

<script lang="ts" setup>
import useStore from '@/store/modules/main'
import baseConfig from '@/config/base'

const router = useRouter()
const store = useStore()

const handleLogout = () => {
    router.push({ name: 'login' })
}
</script>

<style lang="less" scoped>
.wp-button {
    color: #fff;
}
.logout-button {
    margin-left: 10px;
    color: #fff;
}
</style>