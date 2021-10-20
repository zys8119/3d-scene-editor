<template>
    <div class="Login">
        <Loading title="vue3的基础框架仓库-登录页面">
            <template #footer><el-button type="primary" @click="$router.push('/home')">进入系统</el-button></template>
        </Loading>
    </div>
</template>

<script>
export default {
    name: "Login"
}
</script>

<style scoped>

</style>