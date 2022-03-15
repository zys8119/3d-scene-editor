<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'

/**
 * 监听 resize 事件，修改 store 的 isH5 属性
 */
const store = window.store.main
const view = ref<HTMLDivElement>()
const setH5 = () => store.isH5 = window.outerWidth < store.isH5Max

watch(() => store.isH5Max, setH5, { immediate: true })
useResizeObserver(view, setH5)
</script>

<template>
    <div id="view" ref="view">
        <wp-spin :loading="store.loading" fullscreen size="36px" />
        <el-config-provider :locale="zhCn">
            <router-view />
        </el-config-provider>
    </div>
</template>
