<template>
    <div class="Layout">
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <div class="LayoutContainer">
            <div class="LayoutContainerBox">
                <div class="LayoutContainerBoxTitle">{{($store.getters.currentRoute || {})[airforce.navMenusConfig.prop.label]}}</div>
                <router-view v-if="airforce.reload"></router-view>
            </div>
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
        top: @LayoutHeader - 1;
        right: 0;
        width: calc(100% - @LayoutNav);
        height: calc(100% -  @LayoutHeader - 1px);
        overflow-x: hidden;
        transition: @transition;
        .LayoutContainerBox{
            padding:@unit15;
            .LayoutContainerBoxTitle{
                font-size: 18px;
                font-weight: bold;
                color: #202D40;
                line-height: 25px;
                margin-bottom: @unit15;
            }
        }
    }
}
</style>
