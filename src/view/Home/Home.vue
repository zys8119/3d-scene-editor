<template>
    <div class="Home">
        首页
        {{$store.getters.currentRoute}}
        <div v-for="i in 100">{{i}}</div>
    </div>
</template>

<script>
export default {
    name: "Home",
}
</script>

<style scoped lang="less">
.Home{

}
</style>
