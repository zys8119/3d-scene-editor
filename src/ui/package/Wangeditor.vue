<template>
    <div ref="editor" class="wangeditor" :style="{width:width}"></div>
</template>

<script lang="ts">
import {ConfigType} from "wangeditor/src/config"
import wangeditor from 'wangeditor'

export default {
    props: {
        // v-model
        value:{
            type:String,
            default:null
        },
        // 配置
        config:{
            type:Object,
            default:null
        },
        // 宽度
        width:{
            type:String,
            default:null
        },
        // 高度,默认500px
        height:{
            type:String,
            default:null
        },
        // 图片上传路径
        url:{
            type:String,
            default:"/v1/file/upload/"
        },
    },
    data(){
        return {
            currentBaseUrl:(<any>window).baseURL || (<any>window).common.baseURL()
        }
    },
    mounted() {
        this.editor = new wangeditor(this.$refs.editor);
        this.setConfig();
        this.editor.create();
        this.init();
        this.editor.selection.collapseRange();
        this.setHeight();
    },
    watch: {
        value() {
            // this.init(this.value);
        },
        height(){
            this.setHeight();
        }
    },
    methods: {
        init() {
            this.$nextTick(()=>{
                setTimeout(()=>{
                    this.editor.$textElem.html(this.value?`<p>${this.value}</p>`:`<div></div>`);
                },250)
            })
        },
        // 设置高度
        setHeight(){
            if(this.height){
                this.editor.$textContainerElem.attr("style",`height:${this.height};max-height:${this.height}`)
            }
        },
        // 设置配置
        setConfig: function () {
            const customConfig: Partial<ConfigType> = {
                colors: [
                    '#000000', '#eeece0', '#1c487f', '#4d80bf',
                    '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8',
                    '#f9963b', '#ffffff', '#ff0000'
                ],
                onchange: (html) => {
                    this.$emit("update:modelValue", html);
                    this.$emit("on-change", html);
                },
                // 隐藏“网络图片”tab
                showLinkImg: false,
                // 使用 base64 保存图片
                uploadImgShowBase64: false,
                // 上传图片到服务器
                uploadImgServer: `${this.currentBaseUrl}${this.url}`,
                // 文件字段
                uploadFileName: 'file',
                // 请求参数
                uploadImgParams: {
                    type: 'image',
                },
                // 上传图片的自定义header
                uploadImgHeaders: (() => {
                    try {
                        return {
                            'AUTHORIZATION': JSON.parse(sessionStorage.getItem('userInfo')).token,
                            'UNIT': sessionStorage.getItem('unit'),
                        }
                    } catch (e) {
                        return {};
                    }
                })(),
                // 上传图片 hook
                uploadImgHooks: {
                    customInsert: (insertLinkImg, result: any, editor) => {
                        // 图片上传并返回结果，自定义插入图片的事件，而不是编辑器自动插入图片
                        const {url} = result.data;
                        insertLinkImg.call(this.editor,url);
                        this.$emit("customInsert", insertLinkImg, result, editor);
                    },
                    success: (xhr, editor, result) => {
                        // 图片上传并返回结果，图片插入成功之后触发
                        this.$emit("success", xhr, editor, result);
                    },
                    error: (xhr, editor) => {
                        // 图片上传出错时触发
                        this.$emit("error", xhr, editor);
                    },
                },
                customUploadImg: (resultFiles, insertImgFn) => {
                    resultFiles.forEach(file => {
                        (<any>window).common.Axios({
                            url: this.url,
                            method: "post",
                            isFormData: true,
                            data: {
                                type: 'image',
                                file,
                            }
                        }).then(res => {
                            insertImgFn(res.data.url);
                        });
                    })
                },
                ...(this.config || {})
            };
            for (let k in customConfig) {
                this.editor.config[k] = customConfig[k];
            }
        }
    },
    components: {}
};
</script>
<style lang="less">
.wangeditor {
    background-color: #ffffff;
    overflow: hidden;
    position: relative;
    z-index: 0;
    .w-e-toolbar{
        background-color: #ffffff !important;
    }
    .w-e-text-container{
        max-height: 500px;
    }
}
</style>