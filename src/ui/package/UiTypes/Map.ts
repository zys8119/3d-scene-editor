import {DefineComponent, Prop} from "vue"
const Wangeditor:DefineComponent<{
    mapCenter?:Prop<number[], any>;
    searchOption?:Prop<object, any>;
    zoom?:Prop<number, any>;
    show?:Prop<boolean, any>;
    level?:Prop<number, any>;
    modelValue?:Prop<any[], any>;
    relative?:Prop<boolean, any>;
    type?:type;
    path?:any[];
    icon?:string;
    content?:string;
    limit?:number;
    getWadiData?:Promise<any>;
    getWadiSearchData?:Promise<any>;
},any,any,any, {
}, {
    default?():void;
},any, {
    "closeMapPage"():void
    "click"(fn:FunctionConstructor):void
},any,any,any, any> = {};
export type type = string | "track" | "wadi";
export default Wangeditor;