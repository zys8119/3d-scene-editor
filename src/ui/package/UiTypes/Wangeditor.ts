import {DefineComponent, Prop,VNode} from "vue"
import { ConfigType } from "wangeditor/src/config"
import Editor from "wangeditor/src/editor/index";
import {ResType} from "wangeditor/src/menus/img/upload-img";
const Wangeditor:DefineComponent<{
    value?:Prop<string, any>;
    config?:Prop<Partial<ConfigType>, Partial<ConfigType>>;
    width?:Prop<string, any>;
    height?:Prop<string, any>;
    url?:Prop<string, any>;
},any,any,any, {
    init():void;
}, {

},any, {
    "on-change"(html:string):void
    "customInsert"(inserImg: (this: Editor, src: string) => void,
                   result: ResType,
                   editor: Editor):void
    "success"(xhr: XMLHttpRequest, editor: Editor, result: ResType):void
    "error"(xhr: XMLHttpRequest, editor: Editor):void
},any,any,any, any> = {};
export default Wangeditor;