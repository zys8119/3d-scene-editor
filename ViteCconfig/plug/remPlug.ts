import {HmrContext, ModuleNode, PluginOption, TransformResult} from "vite";
import {resolve} from "path";

export default (options:remOptions)=>{
    const RelationshipFile = {};
    return <PluginOption>{
        enforce:"pre",
        name:"rem计算插件",
        transform(code: string, id: string, ssr?: boolean): Promise<TransformResult> | TransformResult {
            if(/\.vue$/.test(id) && code.match(/size\(?[0-9.]{1,}\)/img)){
                RelationshipFile[id] = id.replace( resolve(__dirname,"../../").replace(/\\/g,"/"),"");
                code = code.replace(/size\(?[0-9.]*\)/img,(s)=>{
                    const fontSize = s.replace(/^size\(|\)$/img,"");
                    return `calc(v-bind(__rem__) / ${options.base} * ${fontSize}px)`;
                });
            }
            return {
                code,
                map:null
            }
        },
        handleHotUpdate(ctx: HmrContext): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void> {
            if(RelationshipFile[ctx.file]){
                ctx.server.ws.send({
                    type: 'full-reload'
                })
                // return [
                //     ctx.server.moduleGraph.urlToModuleMap.get(RelationshipFile[ctx.file])
                // ];
            }
            return ctx.modules;
        }
    }
}

export interface remOptions{
    base:number;// 设计稿尺寸的基数
}