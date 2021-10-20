import {DefineComponent, Prop, VNode} from "vue"
const InputPopover:DefineComponent<{
    placement?:Prop<string, any>;
    trigger?:Prop<string, any>;
    modelValue?:Prop<string, any>;
    verifys?:Prop<verifys[], any>;
},any,any,any, {
    message:any;
    check():boolean
}, {
    default?():VNode | VNode[]
},any, {
},any,any,any, any> = {};
export default InputPopover;

export type verifys = {
    msg?:string;
    verify?(val:any|string):boolean
}