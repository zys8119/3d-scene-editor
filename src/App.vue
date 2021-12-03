<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

import useStore from './store'
const store = useStore()

window.store = { index: store }
</script>

<template>
    <el-config-provider :locale="zhCn">
        <router-view v-loading="store.loading" />
    </el-config-provider>
</template>
