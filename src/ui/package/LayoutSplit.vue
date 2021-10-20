<template>
    <div class="LayoutSplit"
         :class="{
            Horizontally:Horizontally,
            autoScroll:autoScroll,
         }"
         @mousedown.stop="mousedown"
         @mousemove.stop="mousemove"
         @mouseup.stop="mouseup"
         @mouseleave.stop="mouseup"
    >
        <div class="LayoutSplitLeft" :class="{LayoutSplitLineShow:show}" :style="styleLeft">
            <slot name="left"></slot>
        </div>
        <div class="LayoutSplitLine" ondrag="" :style="styleLine" ref="line"></div>
        <div class="LayoutSplitRight" :class="{LayoutSplitLineShow:show}" :style="styleRight">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "LayoutSplit",
    props:{
        // 边界检测阈值
        index:{type:Number,default:null},
        // 滑块线宽
        lineWidth:{type:Number,default:5},
        // 是否水平布局
        Horizontally:{type:Boolean,default:false},
        // 是否自动滚动条
        autoScroll:{type:Boolean,default:false},
    },
    data() {
        return {
            show:false,
            clientX:0,
            mousedown_clientX:0,
        }
    },
    computed:{
        styleLine(){
            if(this.Horizontally){
                return {
                    transform:`translateY(${this.clientX}px)`
                }
            }else{
                return {
                    transform:`translateX(${this.clientX}px)`
                }
            }
        },
        styleLeft(){
            if(this.Horizontally){
                return {
                    height:`calc((100% - 5px) / 2 + ${this.clientX}px)`
                }
            }else{
                return {
                    width:`calc((100% - 5px) / 2 + ${this.clientX}px)`
                }
            }
        },
        styleRight(){
            if(this.Horizontally){
                return {
                    height:`calc((100% - 5px) / 2 - ${this.clientX}px)`
                }
            }else{
                return {
                    width:`calc((100% - 5px) / 2 - ${this.clientX}px)`
                }
            }
        }
    },
    methods: {
        mousedown(e){
            if(e.target === this.$refs.line){
                if(this.Horizontally){
                    this.mousedown_clientX = e.clientY - this.clientX;
                }else{
                    this.mousedown_clientX = e.clientX - this.clientX;
                }
                this.show = true;
            }
        },
        mousemove(e){
            try{
                if(this.show){
                    let index = 0;
                    if(Object.prototype.toString.call(this.index) === "[object Number]"){
                        index = this.index;
                    }else{
                        // 边界检测阈值默认处理
                        if(this.Horizontally) {
                            index = 50;
                        }else {
                            index = 100;
                        }
                    }
                    let clientX = 0;
                    if(this.Horizontally) {
                        clientX = e.clientY - this.mousedown_clientX;
                    }else{
                        clientX = e.clientX - this.mousedown_clientX;
                    }
                    const maxWidth = (parseInt(getComputedStyle(this.$el)[this.Horizontally ? 'height' : 'width']) - 5)/2 - index;
                    if(clientX >= 0 && clientX < maxWidth){
                        this.clientX = clientX;
                    }
                    if(clientX <= 0 && clientX > -maxWidth){
                        this.clientX = clientX;
                    }
                }
            }catch(e){
                // err
            }

        },
        mouseup(){
            this.mousedown_clientX = 0;
            this.show = false;
        }
    }
}
</script>

<style scoped lang="less">
.LayoutSplit{
    position: absolute;
    left:0;
    top: 0;
    width:100%;
    height:100%;
    @LayoutSplitLine:5px;
    @width:calc((100% - @LayoutSplitLine) / 2);
    .LayoutSplitLine{
        position: absolute;
        left:@width;
        top:0;
        width:@LayoutSplitLine;
        height: 100%;
        cursor: w-resize;
        background-color:tint(#f6f6f6);
        &:hover{
            background-color: #ffffff;
        }
        z-index: 2;
    }
    .LayoutSplitLeft{
        position: absolute;
        left:0;
        top:0;
        width:@width;
        height:100%;
        overflow-x: hidden;
        z-index: 1;
    }
    .LayoutSplitRight{
        position: absolute;
        right:0;
        top:0;
        width:@width;
        height:100%;
        overflow-x: hidden;
        z-index: 1;
    }
    .LayoutSplitLeft,.LayoutSplitRight{
        &.LayoutSplitLineShow{
            user-select: none;
            *{
                user-select: none;
            }
            &:before{
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width:100%;
                height: 100%;
                z-index: 1000000;
            }
        }
    }
    &.Horizontally{
        .LayoutSplitLine{
            width: 100%;
            height: @LayoutSplitLine;
            left:0;
            top: @width;
            cursor: n-resize;
        }
        .LayoutSplitLeft{
            width:100%;
            height:@width;
        }
        .LayoutSplitRight{
            width:100%;
            height:@width;
            top: initial;
            bottom:0;
        }
    }
    &.autoScroll{
        .LayoutSplitLeft{
            overflow: auto;
        }
        .LayoutSplitRight{
            overflow: auto;
        }
    }
}
</style>