<template>
    <div class="LayoutHeader">
        <div class="Logo">
            <span>阅</span>
            无纸化会议系统
        </div>
        <div class="LayoutHeaderContent">
            <div class="LayoutHeaderContentItem iconfont">&#xe607;</div>
            <div class="LayoutHeaderContentItem iconfont">&#xe607;</div>
            <div class="LayoutHeaderContentItem iconfont">&#xe607;</div>
            <div class="LayoutHeaderContentItem iconfont img">牛逼</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "LayoutHeader",
    data(){
        return {
        }
    }
}
</script>

<style scoped lang="less">
.LayoutHeader{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px @unit20;
    border-bottom: 1px solid #e3e7ec;
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
            &:hover{
                color: @themeColor;
            }
            &+.LayoutHeaderContentItem{
                margin-left: 34px;
            }
            &.img{
                width: 30px;
                height: 30px;
                font-size: 12px;
                background-color: #636e81;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
            }
        }
    }
}
</style>