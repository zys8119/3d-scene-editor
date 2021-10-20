import {DefineComponent, Prop, VNode} from "vue"
const Annotation:DefineComponent<{
    props?:Prop<()=>Promise<any>, any>;
    getMark?:Prop<FunctionConstructor, any>;
},any,any,any, {
}, {
    default?():VNode | VNode[];
    display?(vm:object, data:object):VNode | VNode[];
    mark?(vm:object):VNode | VNode[];
},any, {
},any,any,any, any> = {};
export default Annotation;