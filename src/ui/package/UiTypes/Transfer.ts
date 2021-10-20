import {DefineComponent, Prop, VNode} from "vue"
const Transfer:DefineComponent<{
    modelValue?:Prop<modelValue, any>;
    fieldName?:Prop<string | "node_name", any>;
    childrenFieldName?:Prop<string | "children", any>;
    nodeId?:Prop<string | "nodeId", any>;
    nodeType?:Prop<(node:string)=>boolean, any>;
    index?:Prop<number | 1, any>;
    single?:Prop<boolean | true, any>;
    height?:Prop<number | 500, any>;
    showSearch?:Prop<boolean, any>;
    showCheckbox?:Prop<boolean, any>;
    searchPlaceholder?:Prop<"请输入关键字", any>;
},any,any,any, {
}, {
    default?(...thisArgs:any[]):VNode | VNode[];
},any, {

},any,any,any, any> = {};
export default Transfer;

export type modelValue = modelValueItem[];
export type modelValueItem = string | string[];