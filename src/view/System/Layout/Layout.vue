<template>
    <div class="Layout">
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <div class="LayoutContainer">
            <div class="LayoutContainerBox">
                <div class="LayoutContainerBoxTitle">
                    <el-button v-if="airforce.breadcrumbConfig.showBack" class="goBackBtn" @click="$router.back()">返回</el-button>
                    <div v-if="airforce.breadcrumbConfig.currentPage">
                        {{($store.getters.currentRoute || {})[airforce.navMenusConfig.prop.label]}}
                    </div>
                    <el-breadcrumb class="el-breadcrumb" separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item v-for="(item,key) in airforce.routePath" :key="key" >{{ item[airforce.navMenusConfig.prop.label] }}</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
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
                display: flex;
                justify-content:flex-start;
                align-items: center;
                .goBackBtn{
                    margin-right: @unit10;
                }
                ::v-deep(.el-breadcrumb){
                    .el-breadcrumb__inner{
                        color: @themeColor;
                        font-size: 18px;
                    }
                    .el-breadcrumb__item{
                        &:last-child{
                            .el-breadcrumb__inner{
                                color: #202D40;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
