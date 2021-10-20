<template>
    <div class="signature">
        <canvas ref="canvas"></canvas>
        <div class="operate">
            <div class="operateBox">
                <span @click="reset">重置</span>
                <span @click="download">下载</span>
                <span @click="copy">复制</span>
                <span @click="save">保存</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "signature",
    props:{
        lineWidth:{type:Number,default:2},
        strokeStyle:{type:String,default:"#000000"},
        fillStyle:{type:String,default:"#ffffff"},
        downloadName:{type:String,default:"签名"},
        downloadType:{type:String,default:"png"},
        base64:{type:String,default:null},
    },
    data(){
        return {
            ctx:null,
            canvas:null,
            isStart:false,
        }
    },
    mounted() {
        this.init();
    },
    methods:{
        // 初始化
        init(){
            (<any>window.devicePixelRatio) = window.devicePixelRatio || 1;
            this.canvas = this.$refs.canvas;
            this.canvas.height = this.canvas.parentElement.clientHeight * window.devicePixelRatio;
            this.canvas.width = this.canvas.parentElement.clientWidth * window.devicePixelRatio;
            this.ctx = this.canvas.getContext("2d");
            this.reset();
            this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            this.ctx.lineWidth = this.lineWidth;
            this.ctx.strokeStyle = this.strokeStyle;
            const img = document.createElement("img");
            img.src = this.base64;
            img.onload = ()=>{
                (<CanvasRenderingContext2D>this.ctx).drawImage(img,0,0, img.width,img.height)
            }
            this.$refs.canvas.addEventListener('mousedown',(e)=>this.touchstart(e,false));
            this.$refs.canvas.addEventListener('mousemove',(e)=>this.touchmove(e,false));
            this.$refs.canvas.addEventListener('mouseup',(e)=>this.touchend(e,false));
            this.$refs.canvas.addEventListener('touchstart',(e)=>this.touchstart(e,true));
            this.$refs.canvas.addEventListener('touchmove',(e)=>this.touchmove(e,true));
            this.$refs.canvas.addEventListener('touchend',(e)=>this.touchend(e,true));
        },
        // 获取Touches
        getTouches(e){
            return e.targetTouches?e.targetTouches[0] : e;
        },
        // 获取相对坐标
        getCoordinate(e,type){
            let Touche = this.getTouches(e);
            if (type){
                return {
                    x:Touche.pageX - this.$utils.lodash.sum(e.path.map(e=>e.offsetLeft)),
                    y:Touche.pageY - this.$utils.lodash.sum(e.path.map(e=>e.offsetTop))
                }
            }
            return {
                x:Touche.layerX,
                y:Touche.layerY,
            }
        },
        // 开始
        touchstart(e,type){
            this.isStart  = true;
            if(!this.isStart){return}
            this.stopDefault(e);
            this.stopPropagation(e);
            this.ctx.beginPath();
            let ev_data = this.getCoordinate(e,type);
            this.ctx.moveTo(ev_data.x,ev_data.y);
            this.ctx.stroke();
            if(!type){
                window.onmouseup = ()=>{
                    this.isStart  = false;
                }
            }
        },
        // 移动
        touchmove(e,type){
            if(!this.isStart){return}
            this.stopDefault(e);
            this.stopPropagation(e);
            let ev_data = this.getCoordinate(e,type);
            this.ctx.lineTo(ev_data.x,ev_data.y);
            this.ctx.stroke();
        },
        // 结束
        touchend(e){
            if(!this.isStart){return}
            this.stopDefault(e);
            this.stopPropagation(e);
            this.isStart = false;
        },
        // 禁止默认行为
        stopDefault(e){
            //非IE
            if(e && e.preventDefault)
                e.preventDefault();
            //IE
            else
                window.event.returnValue = false;
        },
        // 禁止冒泡
        stopPropagation(e){
            e = e || window.event;
            if (e.stopPropagation) { //W3C阻止冒泡方法 e.stopPropagation();
                e.stopPropagation();
            } else {
                e.cancelBubble = true; //IE阻止冒泡方法
            }
        },
        // 重置
        reset(){
            this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
            this.ctx.fillStyle = this.fillStyle;
            this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)
        },
        // 转blob
        dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: mime
            })
        },
        // 下载
        download(){
            let png = this.canvas.toDataURL(`image/${this.downloadType}`);
            let data = this.dataURLtoBlob(png);
            let downloadUrl = window.URL.createObjectURL(data);
            var anchor = document.createElement("a");
            anchor.href = downloadUrl;
            anchor.download = `${this.downloadName}.${this.downloadType}`;
            anchor.click();
            window.URL.revokeObjectURL(data);
        },
        // 复制
        copy(){
            let base64 = this.canvas.toDataURL("base64");
            this.copyToClipboard(base64);
        },
        // 复制处理
        copyToClipboard(txt) {
            let transfer = document.createElement('input');
            document.body.appendChild(transfer);
            transfer.value = txt;  // 这里表示想要复制的内容
            transfer.focus();
            transfer.select();
            if (document.execCommand) {
                document.execCommand('copy');
            }
            transfer.blur();
            console.log('复制成功');
            this.$message({type:"success",message:"复制成功"});
            document.body.removeChild(transfer);
        },
        // 保存
        save(){
            let base64 = this.canvas.toDataURL("base64");
            this.$emit("save",base64);
        }
    }
}
</script>

<style scoped lang="less">
.signature {
    position: relative;
    width: 100%;
    height: 300px;
    canvas{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:100%;
        z-index: 1;
    }
    .operate{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(0,0,0,0.3);
        z-index: 2;
        user-select: none;
        .operateBox{
            padding: 15px 15px 0;
            overflow: hidden;
            text-align: center;
            span{
                color: #000000;
                background-color: #ffffff;
                margin-bottom: 15px;
                padding: 10px 15px;
                display: inline-block;
                cursor: pointer;
                &+span{
                    margin-left: 15px;
                }
                &:hover{
                    background-color: @themeColor;
                    color: #ffffff;
                    transition: background-color ease-in 0.2s,
                    color ease-in 0.2s;
                }
            }
        }
    }
}
</style>