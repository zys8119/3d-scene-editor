<template>
    <span style="font-size: 100fh;">响应式字号文字测试</span>
    <div id="Test2">
        <wp-pro-permission has="admin">
            权限测试，这里只有 admin 权限才可以看
        </wp-pro-permission>
        <wp-pro-permission has="test">
            权限测试，这里只有 test 权限才可以看
        </wp-pro-permission>
        <router-link v-if="has('admin')" to="/demo/test2/test3">
            <wp-button type="primary">内页跳转</wp-button>
        </router-link>
        <wp-space>
            <wp-button type="primary" @click="openAlert">打开确认弹框</wp-button>
            <wp-button type="primary" @click="openComponentAlert">打开组件弹框</wp-button>
        </wp-space>
        <wp-space>
            <wp-button type="primary" @click="goIconfont">
                阿里图标测试：
                <wp-icon><WpIconFontAliwangwangMti5nzuwmjk/></wp-icon>
                点击可进入阿里图标搜索页面
            </wp-button>
        </wp-space>
    </div>
</template>

<script lang="ts" setup>
import { usePermission } from 'wisdom-plus'
const { has } = usePermission()


const a = ref(fz`20`)
const openAlert = () => {
    window.$alert({
        title:'确认弹框测试',
        alert:true,
        content:'确认弹框测试？',
        hiddenCancel:true,
        hiddenConfirm:true,
        onConfirm() {
            return Promise.reject('不允许关闭')
        }
    })
}
const openComponentAlert = () => {
    window.$alert({
        title:'组件弹框测试',
        component:import('./Alert.vue'),
        modalProps:{
            width:'500px',
        },
    })
}
const goIconfont = () => {
    window.open('http://127.0.0.1:3002/')
}
</script>

<style scoped>
#Test2 {
    font-size: 100fh;
}
</style>
