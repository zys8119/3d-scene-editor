import {DefineComponent, Prop, VNode} from "vue"
const Loading:DefineComponent<{
    title?:Prop<string | "vue3的基础框架仓库", any>;
    loading?:Prop<string | "加载中，请耐心等待...", any>;
},any,any,any, {
}, {
    default?():VNode | VNode[];
    footer?():VNode | VNode[];
},any, {

},any,any,any, any> = {};
export default Loading;