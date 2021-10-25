<template>
    <div class="LayoutNav">
        <div class="LayoutNavBox">
            <div class="LayoutNavTitle">无纸化山东版本</div>
            <el-tree class="el-tree"
                     v-if="show"
                     :data="$store.getters.navMenus"
                     :props="airforce.navMenusConfig.prop"
                     v-bind="airforce.navMenusConfig.bind"
                     :default-expanded-keys="defaultExpandedKeys"
                     :current-node-key="currentNodeKey"
                     @node-click="nodeClick"
            >
                <template #default="{node,data}">
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
            show:true,
        }
    },
    computed:{
        findPath(){
            const findPath = this.$utils.findPath(this.$store.getters.navMenus,{
                path:this.$route.path
            },this.airforce.navMenusConfig.prop.children);
            this.airforce.input("routePath",findPath || []);
            return findPath;
        },
        defaultExpandedKeys(){
            return (this.findPath || []).slice(1).map(e=>e.id)
        },
        currentNodeKey(){
            return (this.findPath || []).map(e=>e.id).reverse()[0]
        },
    },
    watch:{
        findPath:{
            immediate:true,
            handler(){
                this.init();
            }
        },
    },
    methods:{
        init(){
            this.show = false;
            this.$nextTick(()=>{
                this.show = true;
            })
        },
        nodeClick(data){
            if((!data[this.airforce.navMenusConfig.prop.children] || data[this.airforce.navMenusConfig.prop.children].length === 0) && data.path){
                if(/^(http|\/\/\:)/.test(data.path)){
                    window.open(data.path)
                    return;
                }
                const conifg = {
                    path:data.path,
                    query:this.$router.resolve(data.path).query
                }
                this.$router.push(conifg).then((err)=>{
                    if(err && err.type === 16){
                        // 重复导航
                        this.airforce.input("reload", false)
                        this.$nextTick(()=>{
                            this.airforce.input("reload", true)
                        })
                    }
                });
            }
        }
    }
}
</script>

<style scoped lang="less">
.LayoutNav{
    position: fixed;
    left: 0;
    top:  @LayoutHeader + 1px;
    height: calc(100% - @LayoutHeader - 1px);
    width: @LayoutNav;
    overflow-x: hidden;
    background-color: @bj-color;
    transition: @transition;
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
