<template>
<iframe class="iframePage" :src="$route.query.url"></iframe>
</template>

<script>
export default {
    name: "iframePage",
    mounted() {
        console.log(111)
    }
}
</script>

<style scoped lang="less">
.iframePage{
    position:absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    border:none;
}
</style>
