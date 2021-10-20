import {DefineComponent, Prop, PropType, Component, Ref,VNode} from "vue"
const ContentTable:DefineComponent<{
    columns:Prop<Array<columns>, Array<any>>;
    data?:Prop<Array<any>, Array<any>>;
    url?:Prop<Array<any>, Array<any>>;
    config?:Prop<object | any, object | any>;
    pagePosition?:Prop<string | FunctionConstructor,string | FunctionConstructor>;
    pageConfig?:Prop<object | any,object | any>;
    apiPath?:Prop<object | string |  any,object| string  | any>;
},any,any,any, {
    /**
     * 初始化表格 true：不重置 false：重置
     * @param bool
     */
    init(bool:boolean):void;
}, {
    popover?(row:any,column:any,index:number,key:number):VNode[];
    switchAppend?(row:any,column:any,index:number,key:number):VNode[];
    switchEnd?(row:any,column:any,index:number,key:number):VNode[];
    custom?(row:any,column:any,index:number,key:number):VNode[];
    header?(column:any,index:number):VNode[];
    empty?():VNode[];
    append?():VNode[];
    default?():VNode[];
},any, {
    onSelection(selectionData:any[]):void
    dataChange(ContentTableData:any[]):void
    popoverShow(row:any,column:any):void
},any,any,any, any> = {};
export default ContentTable;

export interface columns {
    type?:columns_type;
    ellipsis1?:boolean;
    ellipsis2?:boolean;
    ellipsis3?:boolean;
    className?:columns_className;
    label?:string;
    prop?:string;
    emit?:string;
    width?:any;
    btns?:columns_btns[];
    show?(row:any,column:any,btnItem:any):boolean;
    filter?(value:any,row:any,column:any):any;
    classNameFilter?(row:any,column:any):any;
    applyText?:string;
    applyValue?:boolean;
    popoverComponent?:Ref<Component>;
    popover_trigger?:TriggerType;
    popover_title?:string;
    popover_placement?:Placement;
    placeholder?:string;
    selectData?:selectDataObj[];
    clearable?:boolean;
    sortable?:boolean;
    minWidth?:any;
    fixed?:string;
    align?:string;
    columns?:columns[]
}

export type columns_className = string | null
    | "default" | 'success' | 'delete' | 'primary' | 'orange' | 'black'
    | "default_link" | 'success_link' | 'delete_link' | 'primary_link' | 'orange_link' | 'black_link'
    | "default_bg_init" | 'success_bg_init' | 'delete_bg_init' | 'primary_bg_init' | 'orange_bg_init' | 'black_bg_init'
    | "default_bg" | 'success_bg' | 'delete_bg' | 'primary_bg' | 'orange_bg' | 'black_bg';

export type columns_type = string| null | 'custom' | 'switch' | "edit" | "operate" | 'tooltip' | 'number' | 'selection' | 'popover' | 'select';

export type ComponentSize = 'large' | 'medium' | 'small' | 'mini'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'
export  type AutoPlacement = "auto" | "auto-start" | "auto-end";
export  type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
export  type BasePlacement = "top" | "bottom" | "right" | "left" | "auto";
export  type Placement = AutoPlacement | BasePlacement | VariationPlacement;

export interface columns_btns {
    [key:string]:any;
    name?:string;
    ellipsis1?:boolean;
    ellipsis2?:boolean;
    ellipsis3?:boolean;
    className?:columns_className;
    type?: "primary" | "success" | "warning" | "danger" | "info" | "text" | "default";
    size?: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    icon?: {
        type: StringConstructor;
        default: string;
    };
    nativeType?: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (val: string) => boolean;
    };
    loading?: BooleanConstructor;
    disabled?: BooleanConstructor;
    plain?: BooleanConstructor;
    autofocus?: BooleanConstructor;
    round?: BooleanConstructor;
    circle?: BooleanConstructor;
}

export type selectDataObj = {
    [key:string]:any;
    label?:any;
    value?:any;
}