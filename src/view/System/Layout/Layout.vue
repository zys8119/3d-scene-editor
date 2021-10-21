<template>
    <div class="Layout">
        <LayoutHeader></LayoutHeader>
        <div class="LayoutContainer">
            <LayoutNav></LayoutNav>
            <router-view></router-view>
        </div>
<!--        <Loading class="LayoutLoading" v-if="show"></Loading>-->
    </div>
</template>

<script lang="ts">
import LayoutHeader from "./LayoutHeader.vue"
import LayoutNav from "./LayoutNav.vue"
export default {
    name: "Layout",
    components:{LayoutHeader, LayoutNav},
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