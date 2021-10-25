<template>
    <div class="Layout">
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <div class="LayoutContainer">
            <div class="LayoutContainerBox">

            </div>
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
    },
}
</script>

<style scoped lang="less">
.Layout{
    .LayoutContainer{
        position: fixed;
        top: @LayoutHeader;
        right: 0;
        width: calc(100% - @LayoutNav);
        height: calc(100% -  @LayoutHeader);
        overflow-x: hidden;
        transition: @transition;
    }
}
</style>
