import {DefineComponent, Prop, VNode} from "vue"
const LayoutSplit:DefineComponent<{
    index?:Prop<number, any>;
    lineWidth?:Prop<number | 5, any>;
    Horizontally?:Prop<boolean, any>;
    autoScroll?:Prop<boolean | true, any>;
},any,any,any, {
}, {
    left?():VNode | VNode[];
    right?():VNode | VNode[];
},any, {

},any,any,any, any> = {};
export default LayoutSplit;