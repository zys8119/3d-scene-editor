<template>
    <div class="App">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
export default {
    name: "App",
    created() {
        window._this = this;
    }
}
</script>

<style scoped lang="less">
.App{
}
</style>