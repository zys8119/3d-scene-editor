<template>
    <wp-result :message="error ?? '404 NOT FOUND'" description="你要的并不在这里">
        <template #suffix>
            <wp-button size="small" @click="refresh">刷新</wp-button>
        </template>
    </wp-result>
</template>

<script lang="ts" setup>
defineProps<{
    error?: string
}>()

const refresh = () => location.reload()
</script>

<style lang="less" scoped>
.wp-result {
    margin-top: 20vh;
}
.wp-button {
    margin-top: 20px;
}
</style>