<template>
    <div class="ZAlertFooter" :class="{ZAlertFooterPage:page}">
        <div class="ZAlertFooterContent">
            <div class="ZAlertFooterBox" :style="{textAlign:align}">
                <div class="ZAlertFooterBoxContent">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "ZAlertFooter",
    props:{
        align:{
            type:String,
            default:"center"
        },
        page:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less">
@unit15:15px;
@ZAlertFooterHeight: 60px; // 弹窗底部高度
.ZAlertFooter{
    width: 100%;
    height: @ZAlertFooterHeight;
    .ZAlertFooterContent{
        height: @ZAlertFooterHeight;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        align-items: center;
        background: #ffffff;
        border-top: 1px solid rgba(0,0,0,0.09);
        z-index: 1;
        .ZAlertFooterBox{
            padding: 0 @unit15;
            width: 100%;
            .ZAlertFooterBoxContent{
                .el-button{
                    min-width: 120px;
                }
            }
        }
    }
    &.ZAlertFooterPage{
        .ZAlertFooterContent{
            height: @ZAlertFooterHeight;
            position: relative;
            bottom: 0;
            border: none;
            .ZAlertFooterBox{
                background-color: transparent;
                position: initial;
            }
        }
    }
}
</style>
