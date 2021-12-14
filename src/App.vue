<script lang="ts" setup>
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const store = window.store.main

/**
 * 监听 resize 事件，修改 store 的 isH5 属性
 */
import { addResizeListener, removeResizeListener } from 'element-plus/lib/utils/resize-event'

const view = ref<HTMLDivElement>()
const setH5 = () => store.isH5 = window.innerWidth < store.isH5Max

watch(() => store.isH5Max, setH5, { immediate: true })
onMounted(() => view.value && addResizeListener(view.value, setH5))
onBeforeUnmount(() => view.value && removeResizeListener(view.value, setH5))
</script>

<template>
    <div id="view" ref="view" v-loading="store.loading">
        <el-config-provider :locale="zhCn">
            <router-view />
        </el-config-provider>
    </div>
</template>
