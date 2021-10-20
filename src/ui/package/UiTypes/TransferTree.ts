import {DefineComponent, Prop, VNode} from "vue"
const TransferTree:DefineComponent<{
    transferType?:Prop<string | "left" | "right", any>;
    fieldName?:Prop<string | "name", any>;
    childrenFieldName?:Prop<string | "children", any>;
    nodeId?:Prop<string | null, any>;
    showSearch?:Prop<boolean, any>;
    showCheckbox?:Prop<boolean, any>;
    searchPlaceholder?:Prop<string | "请输入关键字", any>;
    options?:Prop<object[], any>;
    filterInit?:Prop<(node:object, item:object, key:number)=>boolean, any>;
    selectionFilter?:Prop<(nodeDate?:object, node?:object)=>boolean, any>;
    single?:Prop<()=>boolean, any>;
    height?:Prop<number | 30, any>;
},any,any,any, {
}, {
    default?(...thisArgs:any[]):VNode | VNode[];
},any, {
    nodeClick(item:object,extra:object):void;
    checkbox(item:object,extra:object):void;
    checkboxAll(item: {
        [key:string]:any;
        val:boolean
    } ):void;
},any,any,any, any> = {};
export default TransferTree;