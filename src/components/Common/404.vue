<template>
    <wp-result message="404 NOT FOUND" description="你要的并不在这里">
        <template #suffix>
            <wp-button size="small" @click="$router.push('/')">返回首页</wp-button>
        </template>
    </wp-result>
</template>

<style lang="less" scoped>
.wp-result {
    margin-top: 20vh;
}
.wp-button {
    margin-top: 20px;
}
</style>