import {DefineComponent, Prop, VNode} from "vue"
const Print:DefineComponent<{
    beforePrint?:Prop<FunctionConstructor, any>;
    afterPrint?:Prop<FunctionConstructor, any>;
},any,any,any, {
}, {
    default?():VNode | VNode[];
    content?():VNode | VNode[];
},any, {
},any,any,any, any> = {};
export default Print;