import {HmrContext, ModuleNode, PluginOption, TransformResult} from "vite";
import {readFileSync} from "fs";
import {resolve} from "path";
import {parse} from "@vue/compiler-sfc";
export default (options:string[])=>{
    const RelationshipFile = {};
    const getCssStr = (options)=>(options || []).map(filePath => {
            RelationshipFile[filePath] = filePath;
            return readFileSync(filePath, "utf-8");
        }).join("\n")+'\n';
    let publicCss = getCssStr(options);
    return <PluginOption>{
        enforce:"pre",
        name:"rem计算插件",
        transform(code: string, id: string, ssr?: boolean): Promise<TransformResult> | TransformResult {
            if(/\.vue$/.test(id)){
                (parse(code).descriptor.styles || []).forEach(css=>{
                    if(/less/.test(css.lang) && css.content){
                        const codeArr = code.split("\n");
                        const start = codeArr.slice(0,css.loc.start.line).join("\n")+'\n';
                        let content = codeArr.slice(css.loc.start.line, css.loc.end.line).join("\n")+'\n';
                        try {
                            content = `${publicCss}${content}`
                        }catch (e) {}
                        if(content.match(/size\([0-9.]{1,}?\)/img)){
                            RelationshipFile[id] = id.replace( resolve(__dirname,"../../").replace(/\\/g,"/"),"");
                            content = content.replace(/size\([0-9.]*?\)/img,(s)=>{
                                const fontSize = s.replace(/^size\(|\)$/img,"");
                                return `calc(v-bind(css__rem) / v-bind(css__rem__base) * ${fontSize}px)`;
                            });
                        }
                        const end = codeArr.slice(css.loc.end.line).join("\n");
                        code = start+content+end;
                    }
                });
            }
            // if(/\.vue$/.test(id) && code.match(/size\([0-9.]{1,}?\)/img)){
            //     RelationshipFile[id] = id.replace( resolve(__dirname,"../../").replace(/\\/g,"/"),"");
            //     code = code.replace(/size\([0-9.]*?\)/img,(s)=>{
            //         const fontSize = s.replace(/^size\(|\)$/img,"");
            //         return `calc(v-bind(css__rem) / v-bind(css__rem__base) * ${fontSize}px)`;
            //     });
            // }
            return {
                code,
                map:null
            }
        },
        handleHotUpdate(ctx: HmrContext): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void> {
            if((options || []).includes(ctx.file)){
                publicCss = getCssStr(options);
                const result = Object.values(RelationshipFile).map((key:string)=>ctx.server.moduleGraph.urlToModuleMap.get(key)).filter(e=>e)
                return result;
            }
            if(RelationshipFile[ctx.file]){
                ctx.server.ws.send({
                    type: 'full-reload'
                })
                return [
                    ctx.server.moduleGraph.urlToModuleMap.get(RelationshipFile[ctx.file])
                ];
            }
            return ctx.modules;
        }
    }
}