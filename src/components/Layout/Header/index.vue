<template>
    <div class="main-header-left" @click="router.push({ name: 'home' })">
        {{ baseConfig.title }}
    </div>
    <wp-dropdown
        :list="[
            {
                index: 'logout',
                title: '退出',
                click: handleLogout
            }
        ]"
        :popover="{
            arrow: false
        }"
    >
        <el-button type="text">
            {{ store.userinfo.name || store.userinfo.username }}，你好！
            <wp-icon>
                <arrow-down />
            </wp-icon>
        </el-button>
    </wp-dropdown>
    <el-button type="text" class="logout-button" @click="handleLogout">退出</el-button>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons'
import useStore from '@/store/modules/main'
import baseConfig from '@/config/base'

const router = useRouter()
const store = useStore()

const handleLogout = () => {
    router.push({ name: 'login' })
}
</script>

<style lang="less" scoped>
.el-button {
    color: #fff;
}
.logout-button {
    margin-left: 10px;
    color: #fff;
}
</style>