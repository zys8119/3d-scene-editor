<template>
    <span :style="`font-size: ${a}`">232323</span>
    <div id="Test2">
        <wp-pro-permission has="admin">
            权限测试，这里只有 admin 权限才可以看
        </wp-pro-permission>
        <wp-pro-permission has="test">
            权限测试，这里只有 test 权限才可以看
        </wp-pro-permission>
        demo
        <router-link v-if="has('admin')" to="/demo/test2/test3">
            <wp-button type="primary">click</wp-button>
        </router-link>
    </div>
</template>

<script lang="ts" setup>
import { fz } from '@/utils/vite/rem'
import { usePermission } from 'wisdom-plus'
const { has } = usePermission()


const a = ref(fz`20`)
</script>

<style scoped>
#Test2 {
    font-size: 100fz;
}
</style>