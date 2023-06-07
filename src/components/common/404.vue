<template>
    <n-result
        status="404"
        :title="error ?? '404 NOT FOUND'"
        description="这里空空如也"
    >
        <template #footer>
            <n-button @click="goHome">返回首页</n-button>
        </template>
    </n-result>
</template>

<script lang="ts" setup>
defineProps<{
    error?: string;
}>();

const goHome = () => location.replace('/');
</script>

<style lang="less" scoped>
.n-result {
    margin-top: 20vh;
}
</style>
