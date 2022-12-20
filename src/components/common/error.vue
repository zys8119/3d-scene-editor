<template>
    <n-result status="error" :title="error ?? '页面加载错误'">
        <template #footer>
            <n-button @click="goHome">返回首页</n-button>
        </template>
    </n-result>
</template>

<script lang="ts" setup>
defineProps<{
    error?: string
}>()
const router = useRouter()
const goHome = () => router.replace('/')
</script>

<style lang="less" scoped>
.n-result {
    margin-top: 20vh;
}
</style>