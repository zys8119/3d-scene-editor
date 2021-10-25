<template>
    <div class="LayoutHeader">
        <div class="LayoutHeaderBox">
            <div class="Logo">
                <span v-if="airforce.logo">{{airforce.logo}}</span>
                {{ airforce.docTitle }}
            </div>
            <div class="LayoutHeaderContent">
                <div class="LayoutHeaderContentItem iconfont"
                     v-for="(item,key) in airforce.LayoutHeaderConfig.btns"
                     v-html="item.icon"
                     @click.stop="(e)=>typeof item.click === 'function' ? item.click.call(vm,e, item) :void (0)"
                     :title="item.name"
                     :key="key" ></div>
                <div class="LayoutHeaderContentItem iconfont" v-if="airforce.userInfo">
                    <el-dropdown>
                        <img class="img" :src="airforce.userInfo.avatar"/>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item :divided="item.divided"
                                                  v-for="(item,key) in airforce.LayoutHeaderConfig.dropdown"
                                                  :key="key"
                                                  v-if="true"
                                                  @click.stop="(e)=>typeof item.click === 'function' ? item.click.call(vm,e, item) :void (0)"
                                >{{typeof item.name === 'function' ? item.name.call(vm, item) : item.name}}</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "LayoutHeader",
    data(){
        return {
            vm:this,
        }
    },
    mounted() {
        this.axios({
            url:"/getUserInfo",
            method:"get",
            ModuleName:"userInfo",
            ModuleFilter(res) {
                sessionStorage.setItem("userInfo", JSON.stringify(res.data));
                return res.data;
            }
        })
    }
}
</script>

<style scoped lang="less">
.LayoutHeader{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: @LayoutHeader;
    overflow: hidden;
    border-bottom: 1px solid #e3e7ec;
    transition: @transition;
    .LayoutHeaderBox{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px @unit20;
        .Logo{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-weight: bold;
            color: #202D40;
            line-height: 20px;
            span{
                color: @themeColor;
                font-size: 16px;
                line-height: 19px;
                border:1px solid #A8B1BE;
                width: 32px;
                height: 32px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 8px;
            }
        }
        .LayoutHeaderContent{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            .LayoutHeaderContentItem{
                font-size: 16px;
                color:#606C80;
                cursor: pointer;
                user-select: none;
                &:hover{
                    color: @themeColor;
                }
                &+.LayoutHeaderContentItem{
                    margin-left: 34px;
                }
                .img{
                    width: 30px;
                    height: 30px;
                    background-color: #636e81;
                    object-fit:cover;
                }
            }
        }
    }

}
</style>
