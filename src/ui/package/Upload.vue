<template>
    <div class="ZUpload">
        <el-upload
            class="el-upload"
            ref="upload"
            :action="action"
            :auto-upload="autoUpload"
            :disabled="disabled"
            :limit="limit"
            :headers="headers"
            :show-file-list="showFileList"
            :with-credentials="withCredentials"
            :file-list="fileList"
            :drag="drag"
            :on-exceed="onExceed"
            :on-success="onSuccess"
            :on-error="onError"
            :on-preview="onPreview"
            :http-request="httpRequest"
            :on-remove="(...args)=>$emit('on-remove',args[0],args[1],args[2])"
            :on-progress="(...args)=>$emit('on-progress',args[0],args[1],args[2])"
            :on-change="(...args)=>$emit('on-change',args[0],args[1])"
            :before-upload="beforeUploadFn"
            :before-remove="beforeRemove"
            :list-type="listType"
            :data="data"
            :name="name"
            :multiple="multiple"
            :accept="accept"
        >
            <slot>
                <i class="el-icon-upload" v-if="drag"></i>
                <div class="el-upload__text" v-if="drag">
                    <slot name="dragTitle">将文件拖到此处，或<em>点击上传</em></slot>
                </div>
                <div class="el-upload__text_msg" v-if="drag">
                    <slot name="dragMsg"></slot>
                </div>
            </slot>
            <template #trigger v-if="$slots.trigger">
                <slot name="trigger"></slot>
            </template>
            <template #tip v-if="$slots.tip">
                <slot name="tip"></slot>
            </template>
        </el-upload>
        <el-dialog v-model="dialogVisible" append-to-body>
            <img class="w-100" :src="dialogImageUrl" alt="">
        </el-dialog>
        <el-dialog :title="mediaShowTitle" v-model="mediaShow" append-to-body>
            <video v-if="mediaShow" controls autoplay name="media" class="w-100" :style="{height:mediaShowType === 'mp3' ? '50px':null}">
                <source :src="dialogImageUrl">
                您的浏览器不支持 audio 标签。无法播放该媒体，请手动复制地址打开<br>
                媒体地址：{{dialogImageUrl}}
            </video>
        </el-dialog>
        <!--    检测结果表格    -->
        <el-dialog title="敏感词检测" v-model="testingResult" append-to-body :close-on-click-modal="false">
            <div class="m-b-10">以下文件存在敏感词</div>
            <content-table
                ref="table"
                :columns="columns"
                :pageConfig="{noPage: true}"
            >
            </content-table>
            <z-alert-footer>
                <el-button type="default" @click="continueSubmit(true)">继续提交</el-button>
                <el-button type="success" @click="continueSubmit(false)">放弃提交</el-button>
            </z-alert-footer>
        </el-dialog>
    </div>
</template>

<script>
import contentTypeJson from "./contentType.json"
export default {
    name: "Upload",
    data() {
        return {
            dialogImageUrl: '',
            dialogVisible: false,
            testingResult: false,
            bool:false,
            index:0,
            maxIndex:0,
            mediaShow:false,
            mediaShowType:null,
            mediaShowTitle:null,
            typeMap:{
                mp3:/\.(mp3|m4a|dvf|msv)$/img,
                mp4:/\.(mp4|wmv|mov)$/img,
                image:/\.(png|jpg|GIF|JPEG)$/img,
            },
            columns: [
                {label: '#', type: 'number', width: 50},
                {label:"文件名称", prop:"file.name"},
                {label:"敏感词", prop:"result"},
            ],
            testingResultData: [],
            catchFileUid: ''
        };
    },
    props:{
        action:{
            type:String,
            default:"/v1/file/upload/"
        },
        autoUpload:{
            type:Boolean,
            default:true
        },
        disabled:{
            type:Boolean,
            default:false
        },
        limit:{
            type:Number,
            default:null
        },
        headers:{
            type:Object,
            default:null
        },
        withCredentials:{
            type:Boolean,
            default:false
        },
        showFileList:{
            type:Boolean,
            default:true
        },
        data:{
            type:Object,
            default:()=>({
                type: "document"
            })
        },
        name:{
            type:String,
            default:"file"
        },
        multiple:{
            type:Boolean,
            default:false
        },
        listType:{
            type:String,
            default:"text"
        },
        drag:{
            type:Boolean,
            default:false
        },
        accept:{
            type:String,
            default:null
        },
        fileList:{
            type:Array,
            default:()=>[]
        },
        beforeUpload:{
            type:Function,
            default: () => true
        },
        beforeRemove:{
            type:Function,
            default:() => true
        },
        customizeFileType:{
            type:Boolean,
            default:false
        },
        needTesting: {
            type: Function,
            default: null
        },
        isQueueUpload: {
            type: Boolean,
            default: false
        },
        AxiosOtpions: {
            type: Object,
            default: null
        }
    },
    methods:{
        onPreview(file){
            let url = null;
            try {
                if (file.url) {
                    url = file.url
                }else {
                    url = file.response.data.url;
                }
            }catch (e){
                // 文件错误
            }
            if(url){
                this.$emit('on-preview',file);
                if(this.typeMap.mp3.test(url)){
                    this.mediaShow = true;
                    this.mediaShowType = "mp3";
                    this.dialogImageUrl = url;
                    this.mediaShowTitle = "音频播放";
                }else if(this.typeMap.mp4.test(url)){
                    this.mediaShow = true;
                    this.mediaShowType = "mp4";
                    this.dialogImageUrl = url;
                    this.mediaShowTitle = "视频播放";
                }else if(this.typeMap.image.test(url)){
                    this.dialogImageUrl = url;
                    this.dialogVisible = true;
                }else {
                    window.open(url);
                }
            }
        },
        submit(){
            this.bool = false;
            if(!this.autoUpload){
                this.$refs.upload.submit();
            }
        },
        submitAll(){
            this.bool = true;
            this.maxIndex = this.$refs.upload.uploadFiles.filter(e=>e.status === "ready").length;
            if(!this.autoUpload){
                this.$refs.upload.submit();
            }
        },
        onExceed(){
            this.$message.error(`文件超出个数,不能大于${this.limit}个文件`)
        },
        httpRequest(opts){
            if (this.needTesting) {
                let obj = {
                    username: JSON.parse(sessionStorage.getItem('userInfo')).name,
                    user_open_id: JSON.parse(sessionStorage.getItem('userInfo')).id,
                    file: opts.file
                }
                this.needTesting(obj).then(res => {
                    if (!res.data.results) this.goUpload(opts);
                    else {
                        let _obj = {
                            ...opts,
                            result: res.data.results.map(v => v.word).join(',')
                        };
                        let fileNameStr = this.testingResultData.map(v => v.file.name).join(',');
                        if (fileNameStr.indexOf(_obj.file.name) < 0) this.testingResultData.push(_obj);
                        this.testingResult = true;
                        setTimeout(() => this.$refs.table.ContentTableData = this.testingResultData);
                    }
                })
            } else this.goUpload(opts);
        },
        goUpload(opts) {
            // 进度条效果
            let s = Math.floor(Math.random()*60);// 预计60秒
            let AfterIndex = parseInt(Math.floor(Math.random()*20));// 剩余20%
            let index = 0;
            let setTime = 30;
            let time = setInterval(()=>{
                if(index >= s*1000){
                    clearInterval(time);
                }else {
                    index += setTime;
                    let percent = (index/(s*1000))*100-AfterIndex;
                    if(percent >= AfterIndex){
                        try {
                            opts.onProgress({
                                percent:percent
                            });
                        }catch (e) {
                            clearInterval(time);
                        }
                    }
                }
            },setTime);
            // 上传
            let AxiosOtpions = {
                url:opts.action,
                method:"post",
                isFormData:true,
            };
            AxiosOtpions.data = opts.data;
            if(!this.customizeFileType){
                let fileType = opts.file.type;
                if(/^audio\//.test(fileType)){
                    // 音频
                    AxiosOtpions.data.type = "voice";
                }else if(/^image\//.test(fileType)){
                    // 图片
                    AxiosOtpions.data.type = "image";
                }else if(/^video\//.test(fileType)){
                    // 视频
                    AxiosOtpions.data.type = "video";
                }else {
                    // 其他文件
                    AxiosOtpions.data.type = "document";
                }
            }
            AxiosOtpions.data[opts.filename] = opts.file;
            window.common.Axios({
                ...AxiosOtpions,
                ...(this.AxiosOtpions || {})
            }).then(res=>{
                clearInterval(time);
                opts.onProgress({
                    percent:100
                });
                this.index += 1;
                opts.onSuccess({
                    data:res.data,
                    message:`【${opts.file.name}】上传成功`
                });
            }).catch(err=>{
                this.index += 1;
                opts.onError({
                    data:err.data,
                    message:`【${opts.file.name}】上传失败`
                });
            })
        },
        onSuccess(res, file, fileList){
            this.catchFileUid = (this.$refs.upload.uploadFiles.find(v => v.status === 'ready') | {}).uid;
            if(this.bool){
                if(this.index === this.maxIndex){
                    this.$message({type:"success", message:res.message});
                    this.$emit("on-success",res.data,file,fileList);
                }
                return;
            }
            this.$message({type:"success", message:res.message});
            this.$emit("on-success",res.data,file,fileList);
        },
        onError(err, file, fileList){
            this.catchFileUid = (this.$refs.upload.uploadFiles.find(v => v.status === 'ready') | {}).uid;
            if(this.bool){
                if(this.index === this.maxIndex){
                    this.$message({type:"success", message:res.message});
                    this.$emit("on-success",res.data,file,fileList);
                }
                return;
            }
            this.$message.error(err.message);
            this.$emit("on-error",err.data,file,fileList);
        },
        continueSubmit(type) {
            if (type) this.testingResultData.forEach(v => this.goUpload(v));
            setTimeout(() => this.testingResultData = []);
            this.testingResult = false;
        },
        // 验证文件是否上传成功
        checkFileUploaded(file, resolve, reject) {
            if (this.catchFileUid || this.catchFileUid === file.uid) {
                setTimeout(() => {
                    this.checkFileUploaded(file, resolve, reject)
                })
            } else {
                this.catchFileUid = file.uid;
                resolve();
            }
        },
        beforeUploadFn(file) {
            // 自动校验文件格式，兼容容国产系统
            if(this.accept){
                let bool = false;
                let fileType = file.type.split("/")[0];
                let suffix = (file.name.match(/\..*$/) || [])[0];
                this.accept.split(",").filter(e=>e).forEach(type=>{
                    if(/^\..*/.test(type)){
                        if(new RegExp('\\'+type+"$").test(file.name)){
                            bool = true;
                        }
                    }else {
                        let typeArgs = type.split("/");
                        if(typeArgs[1] === "*"){
                            if(contentTypeJson[typeArgs[0]] && contentTypeJson[typeArgs[0]].indexOf(suffix) > -1){
                                bool = true;
                            }
                        }else {
                            if(new RegExp('\\'+contentTypeJson[type]+"$").test(file.name)){
                                bool = true;
                            }
                        }
                    }
                })
                if(!bool){
                    this.$message.error(`不允许${suffix}文件格式`);
                    return false
                }
            }
            let beforeUploadRes = this.beforeUpload(file)
            let resultType = Object.prototype.toString.call(beforeUploadRes);
            let next = bool =>bool ? (this.isQueueUpload ? new Promise((resolve, reject) => {
                this.checkFileUploaded(file, resolve, reject);
            }) : true) : false;
            if (resultType === '[object Promise]') {
                return beforeUploadRes.then(()=>{
                    return next(true)
                })
            } else return next(beforeUploadRes)
        }
    }
}
</script>

<style scoped lang="less">
.ZUpload{
    text-align: inherit;
    .el-upload{
        text-align: inherit;
        .el-upload__text_msg{
            color: #AAAAAA;
            margin-top: @unit15;
        }
        .el-upload-list__item{
            .el-icon-close-tip{
                display: none !important;
            }
        }
    }
}
</style>