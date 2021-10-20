import {DefineComponent, Prop,VNode} from "vue"
const Upload:DefineComponent<{
    action?:Prop<string, any>;
    autoUpload?:Prop<boolean, any>;
    disabled?:Prop<boolean, any>;
    limit?:Prop<number, any>;
    headers?:Prop<object | any, any>;
    withCredentials?:Prop<boolean, any>;
    showFileList?:Prop<boolean, any>;
    data?:Prop<object | any, any>;
    name?:Prop<string, any>;
    multiple:Prop<boolean, any>;
    listType:Prop<string, any>;
    drag:Prop<boolean, any>;
    accept:Prop<string, any>;
    fileList:Prop<any[], any>;
    beforeUpload:Prop<FunctionConstructor, any>;
    beforeRemove:Prop<FunctionConstructor, any>;
    customizeFileType:Prop<boolean, any>;
    needTesting:Prop<FunctionConstructor, any>;
    isQueueUpload:Prop<boolean, any>;
    AxiosOtpions:Prop<object | any, any>;
},any,any,any, {
    submit():void;
}, {
    empty?():VNode[];
    trigger?():VNode[];
    tip?():VNode[];
},any, {
    "on-success"(...args:any):void
    "on-error"(...args:any):void
    "on-remove"(...args:any):void
    "on-progress"(...args:any):void
    "on-change"(...args:any):void
},any,any,any, any> = {};
export default Upload;