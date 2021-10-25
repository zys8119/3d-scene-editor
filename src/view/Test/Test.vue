<template>
<div class="Test">
    测试内容
    {{$store.getters.currentRoute}}
</div>
</template>

<script>
export default {
    name: "Test",
    mounted() {
        console.log(Date.now())
    }
}
</script>

<style scoped>

</style>
