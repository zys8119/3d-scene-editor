<template>
    <div class="Home">
        首页
        <div v-for="i in 100">{{i}}</div>
        <div style="width: 110%">阿斯顿</div>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style scoped>

</style>