<template>
    <div class="Layout">
        <router-view></router-view>
        <Loading class="LayoutLoading" v-if="show"></Loading>
    </div>
</template>

<script>
export default {
    name: "Layout",
    data(){
        return {
            show:true,
        }
    },
    mounted() {
        setTimeout(()=>{
            this.show = false;
        },1500)
    }
}
</script>

<style scoped lang="less">
.Layout{
    .LayoutLoading{
        background-color: #ffffff;
    }
}
</style>