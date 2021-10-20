import {DefineComponent, Prop, VNode} from "vue"
const Tree:DefineComponent<{
    options?:Prop<any[],any>;
    optionsAll?:Prop<any[],any>;
    isTop?:Prop<boolean,any>;
    indent?:Prop<number,any>;
    indentIndex?:Prop<number,any>;
    showNameField?:Prop<string,any>;
    childrenField?:Prop<string,any>;
    keyMap?:Prop<string,any>;
    nodeHeight?:Prop<number,any>;
    parentNode?:Prop<object,any>;
    atf?:Prop<string,any>;
    attime?:Prop<number,any>;
    checked?:Prop<string,any>;
    level?:Prop<number,any>;
    searchShow?:Prop<boolean,any>;
    search?:Prop<string,any>;
    searchChange?:Prop<(val:any,data:any)=>boolean,any>;
    placeholder?:Prop<string,any>;
    isdraggable?:Prop<boolean,any>;
    draggableFilter?:Prop<FunctionConstructor,any>;
    self?:Prop<object|any,any>;
    draggableMove?:Prop<FunctionConstructor,any>;
    lazyLoading?:Prop<boolean,any>;
},any,any,any, {

}, {
    header?():VNode | VNode[];
    expand?(vm:any):VNode | VNode[];
    default?(node:nodeType, data:nodeTypeData, self:any):VNode | VNode[];
},any, {
    draggable?(data:nodeTypeData,level:number, parentNode:nodeType, bool:boolean, ev:Event):void;
    parent?(node:nodeTypeData):void;
    child?(node:nodeTypeData):void;
    node?(node:nodeTypeData):void;
    checked?(keyMap:string):void;
},any,any,any, any> = {};
export default Tree;

export type nodeType = {
    [key:string]:any;
    data:nodeTypeData;
    key:number;
    keyMap:string;
    parent:nodeType;
    node_parent:any;
    node_child:any;
    node_top:boolean;
    node_open:boolean;
    level:number;
    checked:string;
}

export type nodeTypeData = {
    [key:string]:any;
}