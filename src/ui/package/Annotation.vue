<template>
    <div class="Annotation">
        <div class="AnnotationContent"
             @mouseup="mouseup"
             @mousedown="mousedown"
             @touchstart="mousedown"
             @touchend="mouseup"
        >
            <div>
                <slot></slot>
            </div>
        </div>
        <el-popover
                ref="handle1"
                popper-class="annotation-el-popover"
                placement="top"
                trigger="manual"
                @after-enter="closeHandleBtn(true, 'handle1')"
                @after-leave="closeHandleBtn(false, 'handle1')"
                v-model:visible="visible">
            <template #reference>
                <div class="popoverBtn" :style="popoverStyles"></div>
            </template>
            <slot name="mark" :vm="_">
                <div class="content-btn">
                    <div class="list" v-for="(item, key) in btnList" :key="key" @click="mark(item.type)">
                        <img :src="item.img" alt="">
                        <div class="n" v-text="item.name"></div>
                    </div>
                </div>
            </slot>
        </el-popover>
        <el-popover
                ref="handle2"
                popper-class="annotation-el-popover"
                placement="top"
                trigger="manual"
                @after-enter="closeHandleBtn(true, 'handle2')"
                @after-leave="closeHandleBtn(false, 'handle2')"
                v-model:visible="visibleClickShow">
            <template #reference>
                <div class="popoverBtn" :style="popoverStyles"></div>
            </template>
            <slot name="display" :vm="_" :data="displayData">
                <div class="content-btn">
                    <div class="list" v-for="(item, key) in btnDelList" :key="key" @click="mark(item.type)">
                        <img :src="item.img" alt="">
                        <div class="n" v-text="item.name"></div>
                    </div>
                </div>
            </slot>
        </el-popover>
        {{slotswatchFilter($slots.default)}}
    </div>
</template>

<script>
    import {on, off} from "element-plus/packages/utils/dom";
    import copy from "./images/Annotation/1.png";
    import line from "./images/Annotation/2.png";
    import notes from "./images/Annotation/3.png";
    import search from "./images/Annotation/4.png";
    import deleteImg from "./images/Annotation/5.png";
    export default {
        name: "Annotation",
        props:{
            /**
             * 保存标记
             * @param bodyData 请求数据
             */
            saveMark:{type:Function,default:()=>Promise.resolve()},
            /**
             * 获取标记列表
             */
            getMark:{type:Function,default:()=>Promise.resolve()},
        },
        data(){
            return {
                visible:false,
                visibleClickShow:false,
                btnList: [
                    {name: '复制', img: copy, type: 'copy'},
                    {name: '划线', img: line, type: 'line'},
                    {name: '高亮', img: notes, type: 'notes'},
                    {name: '搜索', img: search, type: 'search'},
                ],
                btnDelList: [
                    {name: '删除标记', img: deleteImg, type: 'delete'},
                    {name: '搜索', img:search, type: 'search'},
                ],
                popoverStyles:{},
                selection:{},
                startEvent:{},
                key:0,
                displayData:{},
                touchsObj:null,
            }
        },
        mounted() {
            this.initHtml();
        },
        methods:{
            slotswatchFilter(v){
                this.$nextTick(()=>{
                    let all_el = this.$el.querySelectorAll(".AnnotationContent *");
                    let dataKey_el = this.$el.querySelectorAll(".AnnotationContent *[data-key]");
                    if(all_el.length != dataKey_el.length){
                        this.initHtml();
                    }
                });
                return null;
            },
            // 显示历史标记
            showHistoryMark(){
                this.getMark().then(res=>{
                    if(res){
                        res.forEach(e=>{
                            this.selection = {
                                // 是否为单行子集
                                childNodes:[],
                                // 是否为单行子集
                                isChildNodes:false,
                                ...e,
                            };
                            this.markInit(e.id, e.type);
                        })
                    }
                })
            },
            // 初始化页面
            initHtml(){
                this.init(true);
                this.showHistoryMark();
            },
            // 初始化key
            initKeys(el){
                if(el.getAttribute("data-key")){return;}
                el.setAttribute("data-key",this.key);
                this.key ++;
                if(el.children.length > 0){
                    let childNodes = [];
                    childNodes.push.apply(childNodes,el.childNodes);
                    childNodes.forEach((e)=>{
                        if(Object.prototype.toString.call(e) === '[object Text]'){
                            let span = document.createElement("span");
                            span.innerText = e.textContent;
                            span.setAttribute("data-key",this.key);
                            el.replaceChild(span,e);
                            this.key ++;
                        }else {
                            this.initKeys(e);
                        }
                    });
                }
            },
            /**
             * 初始化文章，并绑定唯一数据及事件处理
             */
            init(bool){
                this.key = bool ? this.key : 0;
                this.$el.querySelectorAll(".AnnotationContent *").forEach((el,k)=>{
                    if(bool){
                        this.initKeys(el);
                    }else {
                        el.setAttribute("data-key",k);
                    }
                    if(el.getAttribute("data-id")){
                        el.onclick = (e)=>{
                            // 禁止冒泡
                            if(e.stopPropagation){
                                e.stopPropagation();
                            }else {
                                e.cancelBubble = true;
                                window.event.returnValue == false;
                            }
                            this.displayData = {
                                text:el.innerText,
                                key:el.getAttribute("data-key"),
                                id:el.getAttribute("data-id"),
                                type:el.getAttribute("data-type"),
                            };
                            this.visibleClickShow = true;
                            this.$emit("click",this.displayData);
                        }
                        el.ontouchend = (e)=>{
                            e.preventDefault();
                            // 禁止冒泡
                            if(e.stopPropagation){
                                e.stopPropagation();
                            }else {
                                e.cancelBubble = true;
                                window.event.returnValue == false;
                            }
                            this.visible = false;
                        }
                    }else {
                        el.ontouchstart = (e)=>{
                            if(this.touchsObj){
                                this.touchsObj.target.classList.toggle("data-key-selection");
                                this.touchsObj = null;
                            }
                            setTimeout(()=>{
                                this.touchsObj = e;
                            })
                        }
                        el.ontouchend = (e)=>{
                            e.stopPropagation();
                            e.target.classList.toggle("data-key-selection");
                        }
                    }
                });
                document.querySelectorAll("br").forEach((br)=>{
                    if(!br.getAttribute("data-key")){
                        br.remove();
                    }
                });
            },
            /**
             * 单行子集处理
             * isChildNodes
             * */
            isChildNodes(){
                // 单行子集处理
                if((this.selection.baseKey === this.selection.focusKey) && this.$el.querySelector(`[data-key="${this.selection.baseKey}"]`)){
                    this.$el.querySelector(`[data-key="${this.selection.baseKey}"]`).childNodes.forEach(e=>{
                        if(Object.prototype.toString.call(e) !== '[object Text]'){
                            this.selection.childNodes.push(e);
                            this.selection.isChildNodes = true;
                        }else {
                            let span = document.createElement("span");
                            span.innerText = e.textContent;
                            this.selection.childNodes.push(span);
                        }
                    });
                }
            },
            isPc(){
                return !(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
            },
            /**
             * 选中文字处理
             * @param e event对象
             */
            mouseup(e){
                // 重置popover操作位置
                this.popoverStyles = {
                    left:e.layerX+'px',
                    top:e.layerY+'px',
                };
                // 默认隐藏popover
                this.visible = false;
                this.visibleClickShow = false;
                // 获取选中数据
                let getSelection = window.getSelection();
                if(!this.isPc()){
                    getSelection = {
                        anchorNode:e.target.childNodes[0],
                        baseNode:e.target.childNodes[0],
                        baseOffset:0,
                        extentNode:e.target.childNodes[0],
                        focusNode:e.target.childNodes[0],
                        focusOffset:e.target.innerText.length,
                        isCollapsed: true,
                        rangeCount: 1,
                        type: "Caret",
                        toString:()=>e.target.innerText,
                    }
                }
                // 获取选中文本字符串
                let str = getSelection.toString();
                // 判断是否有被选中
                if(str){
                    // 拷贝并存储选中数据
                    this.selection = {
                        // 原始数据
                        data:getSelection,
                        // 选中的文字
                        str:str,
                        // event对象
                        endEvent:e,
                        startEvent:this.startEvent,
                        // 是否为单行子集
                        childNodes:[],
                        // 是否为单行子集
                        isChildNodes:false,
                        // baseNode
                        baseNode:getSelection.baseNode.cloneNode(true),// 开始TextNode
                        baseText:getSelection.baseNode.textContent,// 开始TextNode文本
                        baseOffset:getSelection.baseOffset,// 偏移位置
                        baseKey:getSelection.baseNode.parentNode.getAttribute("data-key"),// 对应节点的唯标识
                        // focusNode
                        focusNode:getSelection.focusNode.cloneNode(true),// 结束TextNode
                        focusText:getSelection.focusNode.textContent,// 结束TextNode文本
                        focusOffset:getSelection.focusOffset,// 偏移位置
                        focusKey:getSelection.focusNode.parentNode.getAttribute("data-key"),// 对应节点的唯标识

                        /// 以下其他请参照https://developer.mozilla.org/zh-CN/docs/Web/API/Selection
                        isCollapsed:getSelection.isCollapsed,
                        rangeCount:getSelection.rangeCount,
                        type:getSelection.type,
                    };
                    this.isChildNodes();
                    this.$nextTick(()=>{
                        // 初始数据结束后显示popover
                        this.visible = true;
                    });
                }
            },
            mousedown(e){
                this.startEvent = e;
            },
            /**
             * 标记
             * @param type 标记类型
             */
            mark(type){
                if (type === 'copy') {
                    let oInput = document.createElement('input');
                    oInput.value = this.selection.str;
                    document.body.appendChild(oInput);
                    oInput.select(); // 选择对象;
                    document.execCommand("Copy");
                    this.$message({
                        message: '复制成功',
                        type: 'success'
                    });
                    this.visible = false;
                    return;
                } else if (type === 'search') {
                    this.$emit('search', this.selection);
                    this.visible = false;
                } else if (type === 'delete') {
                    this.$emit('deleteMark', this.displayData);
                } else {
                    this.saveMark({
                        baseOffset:this.selection.baseOffset,
                        baseKey:this.selection.baseKey,
                        focusOffset:this.selection.focusOffset,
                        focusKey:this.selection.focusKey,
                        type:type,
                    }).then(res=>{
                        this.markInit((res && res.id) ? res.id : Date.now()+"---"+Math.round(Math.random()*1000000), type);
                    })
                }
            },
            /**
             * 初始化标记数据
             * */
            markInit(id, type){
                // 清除已选状态
                window.getSelection().removeAllRanges();
                // 隐藏popover
                this.visible = false;
                if(!this.isPc() && this.touchsObj){
                    this.touchsObj.target.classList.toggle("data-key-selection");
                    this.touchsObj = null;
                }
                // 开始唯一key
                let start_key = parseInt(this.selection.baseKey);
                // 结束唯一key
                let end_key =  parseInt(this.selection.focusKey);
                // 默认方向true，即true(左->右)、false(右->左)
                let direction = true;
                // if(this.selection.startEvent.layerX > this.selection.endEvent.layerX){
                // direction = false;// 纠正方向
                // }
                // 纠正key
                if(start_key > end_key){
                    let start_key_old = start_key;
                    start_key = end_key;
                    end_key = start_key_old;
                    direction = false;// 纠正方向
                }
                // 缓存选择的所有节点
                let nodes = [];
                for(let i = start_key; i <= end_key; i++){
                    nodes.push(this.$el.querySelector(`[data-key="${i}"]`))
                }
                // 单行子集
                if(this.selection.isChildNodes){
                    nodes = this.selection.childNodes;
                }
                nodes = nodes.filter(el=>el);
                // 单行选择
                if(nodes.length === 1){
                    // 绘制
                    this.draw(nodes[0],this.selection.baseOffset,this.selection.focusOffset,type, id);
                    // 初始化
                    this.init();
                }
                // 多行选择
                if(nodes.length > 1){
                    // 颠倒选择节点，便于从大到小执行，等价于由深至浅执行
                    nodes.reverse().forEach((el,k)=>{
                        if(k === 0 ){
                            // 最左边节点
                            if(direction){
                                // 正向绘制
                                this.draw(el,0,this.selection.focusOffset,type, id);
                            }else {
                                // 反向绘制
                                this.draw(el,0,this.selection.baseOffset,type, id);
                            }
                        }else if (k === nodes.length -1){
                            // 最右边节点
                            if(direction){
                                // 正向绘制
                                this.draw(el,this.selection.baseOffset,el.innerText.length,type, id);
                            }else {
                                // 反向绘制
                                this.draw(el,this.selection.focusOffset,el.innerText.length,type, id);
                            }
                        }else {
                            // 中间段节点全部标记
                            if(el && el.querySelector && !el.querySelector(`span.${type}`)){
                                el.innerHTML = `<span class="${type} annotation-bj" data-id="${id}" data-type="${type}">${el.innerHTML}</span>`
                            }
                        }
                    });
                    // 单行子集渲染
                    if(this.selection.isChildNodes){
                        let ChildNodesHtml = nodes.reverse().map(el=>el.outerHTML);
                        this.$el.querySelector(`[data-key="${this.selection.baseKey}"]`).innerHTML = ChildNodesHtml.join("");
                    }
                    // 处理完后重置文档
                    this.init();
                }
            },
            /**
             * draw 绘制效果
             * @param el 对应node节点
             * @param baseOffset 开始偏移量
             * @param focusOffset 结束偏移量
             * @param type 绘制类型，继承标记类型
             * @param id 绘制id
             */
            draw(el,baseOffset,focusOffset,type, id){
                // 纠正方向偏移量
                if(baseOffset > focusOffset){
                    let baseOffset_old = baseOffset;
                    baseOffset = focusOffset;
                    focusOffset = baseOffset_old;
                }
                // 获取(左中右)段文字
                let l_str = el.innerText.slice(0,baseOffset);
                let c_str = el.innerText.slice(baseOffset,focusOffset);
                let r_str = el.innerText.slice(focusOffset);
                // 生成(左中右)新段落innerHTML
                let l = `<span>${l_str}</span>`;
                let c = `<span class="${type} annotation-bj" data-id="${id}" data-type="${type}">${c_str}</span>`;
                let r = `<span>${r_str}</span>`;
                // 拼接新段落
                let innerHTML = "";
                if(l_str){innerHTML += l}
                if(c_str){innerHTML += c}
                if(r_str){innerHTML += r}
                // 替换成新段落
                el.innerHTML = innerHTML;
            },
            // 点击空白 关闭操作按钮
            closeHandleBtn(bool, name) {
                let _this = this.$refs[name];
                let reference = _this.referenceElm = _this.reference || _this.$refs.reference;
                if (!reference && _this.$slots.reference && _this.$slots.reference[0]) {
                    reference = _this.referenceElm = _this.$slots.reference[0].elm;
                }
                // 可访问性
                if (reference) {
                    if (bool) {
                        on(document, 'mousedown', _this.handleDocumentClick);
                        on(document, 'touchstart', _this.handleDocumentClick);
                    } else {
                        off(document, 'mousedown', _this.handleDocumentClick);
                        off(document, 'touchstart', _this.handleDocumentClick);
                    }
                }
            }
        }
    }
</script>

<style lang="less">
    .Annotation{
        position: relative;
        .popoverBtn{
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 0;
        }
        .AnnotationContent{
            line-height: 30px;
            span{
                &.line{
                    border-bottom: 1px solid @bj-color;
                    &:hover{
                        cursor: default;
                    }
                }
                &.notes{
                    background-color: @bj-color;
                    color: white;
                    &:hover{
                        cursor: pointer;
                    }
                }
            }
            *::selection{
                background-color: @bj-color;
                color: white;
            }
            *[data-key]{
                &.data-key-selection{
                    color: @bj-color;
                }
            }
        }
    }
    .el-popper.annotation-el-popover {
        @bgColor: #333333;
        background: @bgColor!important;
        border: none!important;
        min-width: 100px!important;
        .content-btn {
            z-index: 999;
            display: flex;
            border-radius: 5px;
            .list {
                cursor: pointer;
                width: 60px;
                img {
                    display: block;
                    width: 20px;
                    margin: 0 auto 10px;
                    transition: all .3s;
                }
                .n {
                    text-align: center;
                    color: #ffffff;
                    transition: all .3s;
                }
                &:hover {
                    .n, img {
                        transform: scale(1.1);
                    }
                }
            }
        }
        .popper__arrow:after {
            border-top-color: @bgColor!important;
        }
    }
</style>
