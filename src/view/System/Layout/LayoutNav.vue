<template>
    <div class="LayoutNav">
        <div class="LayoutNavBox">
            <div class="LayoutNavTitle">无纸化山东版本</div>
            <el-tree class="el-tree"
                     :data="$store.getters.navMenus"
                     :props="airforce.navMenusConfig.prop"
                     v-bind="airforce.navMenusConfig.bind"
            >
                <template #default="{node,data}">
                    {{airforce.test(node,data)}}
                    <div class="LayoutNavItem" :style="{paddingLeft: `${(node.level - 1) * 18}px`}">
                        <div class="LayoutNavItemBox">
                            <template v-if="data.icon && airforce.navMenusConfig.showIcon">
                                <div class="iconfont LayoutNavItemIcon" v-if="/^&/.test(data.icon)" v-html="data.icon"></div>
                                <div class="LayoutNavItemIcon" v-else :style="{backgroundImage:`url(${data.icon})`}"></div>
                            </template>
                            <div class="LayoutNavItemLabel ellipsis-1">
                                {{node.label}}
                            </div>
                            <div class="LayoutNavItemArrow iconfont"
                                 v-if="!node.isLeaf && airforce.navMenusConfig.showArrow"
                                 :class="{
                                     expanded:node.expanded
                                 }"
                            >&#xe610;</div>
                        </div>
                    </div>
                </template>
            </el-tree>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "LayoutNav",
    data(){
        return {
        }
    },
}
</script>

<style scoped lang="less">
.LayoutNav{
    position: fixed;
    left: 0;
    top:  @LayoutHeader;
    height: calc(100% -  @LayoutHeader);
    width: @LayoutNav;
    overflow-x: hidden;
    background-color: @bj-color;
    .LayoutNavBox{
        .LayoutNavTitle{
            font-size: 18px;
            font-weight: 400;
            color: #202D40;
            line-height: 25px;
            padding: 0 @unit15;
            margin:@unit15 0;
        }
    }
    ::v-deep(.el-tree){
        background-color: transparent;
        @height:40px;
        *{
            user-select: none;
        }
        .el-tree-node{
            .el-tree-node__content{
                height:@height;
                padding-left: 0 !important;
                .el-tree-node__expand-icon{
                    display: none;
                }
                .LayoutNavItem{
                    width:100%;
                    .LayoutNavItemBox{
                        padding:0 @unit15;
                        line-height:@height;
                        color:#455166;
                        font-size: 14px;
                        display: flex;
                        align-items: center;
                        flex-shrink: 0;
                        .LayoutNavItemIcon{
                            margin-right: @unit5;
                            width:30px;
                            height:30px;
                            display: flex;
                            justify-content:center;
                            align-items: center;
                            font-size: 14px;
                            flex-shrink: 0;
                            background-position: center;
                            background-repeat: no-repeat;
                            background-size: 80% 80%;
                        }
                        .LayoutNavItemLabel{
                            flex: 1;
                        }
                        .LayoutNavItemArrow{
                            width: 30px;
                            margin-left: @unit10;
                            display: flex;
                            justify-content:center;
                            align-items: center;
                            font-size: 12px;
                            transition: @transition;
                            transform-origin: 50% 50%;
                            &.expanded{
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
            &.is-current{
                &>.el-tree-node__content{
                    .LayoutNavItem{
                        background-color:#E3E8F0;
                        position:relative;
                        &:before{
                            content:"";
                            position:absolute;
                            left:0;
                            top: 0;
                            height:100%;
                            width:3px;
                            background-color:@themeColor;
                        }
                        .LayoutNavItemBox{
                            font-weight: bold;
                        }
                    }
                }
            }
        }
    }
}
</style>
