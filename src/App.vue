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
    },
    mounted() {
        this.axios({
            url:"/getUserInfo",
            method:"get",
            ModuleName:"userInfo"
        }).then(res=>{
            console.log(res)
        })
    }
}
</script>

<style scoped lang="less">
.App{
}
</style>
