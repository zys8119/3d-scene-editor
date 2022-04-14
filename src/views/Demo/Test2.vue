<template>
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
import { usePermission } from 'wisdom-plus'
const { has } = usePermission()
</script>

<style scoped>
#Test2 {
    font-size: size(100);
}
</style>