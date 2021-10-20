import {Component} from "vue"
export interface $ZAlert {
    [key:string]:any;
    show(options:$ZAlertOptions):number | void;
    alert(options:$ZAlertOptions):number | void;
    hide():Promise<any>;
    hideAll():Promise<any>;
    vm:Partial<any>;
    index:number;
}
export type $ZAlertOptionsComponents =  Component | Promise<Component>;
export type $ZAlertOptions = {
    [key:string]:any;
    _props?:Partial<any>;
    _event?:Partial<any>;
    content?:string;
    _components?:$ZAlertOptionsComponents;
    title?: string;
    width?: string;
    fullscreen?: boolean;
    top?: string;
    modal?: boolean;
    modalAppendToBody?: boolean;
    appendToBody?:  boolean;
    lockScroll?: boolean;
    customClass?:  string;
    closeOnClickModal?:  boolean;
    closeOnPressEscape?:  boolean;
    showClose?:  boolean;
    beforeClose?:  any;
    center?:  boolean;
    destroyOnClose?:  boolean;
    slotTitle?:any;
    slotFooter?:any;
    maxHeight?:number;
    layout?:string | "right";
    onShow?():void;
    onHide?():void;
    onOpened?():void;
    onClosed?():void;
}