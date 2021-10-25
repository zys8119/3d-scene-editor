<template>
<div class="Test">
    测试内容
    {{$store.getters.currentRoute}}
    <div v-for="i in 100">{{i}}</div>
</div>
</template>

<script>
export default {
    name: "Test",
}
</script>

<style scoped>

</style>
