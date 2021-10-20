import {DefineComponent, Prop,VNode} from "vue"
const Wangeditor:DefineComponent<{
    lineWidth?:Prop<number, any>;
    strokeStyle?:Prop<string, any>;
    fillStyle?:Prop<string, any>;
    downloadName?:Prop<string, any>;
    downloadType?:Prop<string, any>;
    base64?:Prop<string, any>;
},any,any,any, {
}, {
},any, {
    save(base64:string):void
},any,any,any, any> = {};
export default Wangeditor;