import {UserConfig} from 'vite'
import pluginVue from '@vitejs/plugin-vue'
import lessPlug from './ViteCconfig/plug/lessPlug'
import htmlTransformPlug from './ViteCconfig/plug/htmlTransformPlug'
import {resolve} from "path"

export default <UserConfig>{
    plugins: [
        pluginVue(),
        lessPlug([
            resolve(__dirname,"./src/assets/less/constant.less"),
            resolve(__dirname,"./src/assets/less/publicFun.less"),
        ]),
        htmlTransformPlug(),
    ],
    resolve:{
        // 别名注入
        alias:{
            "@":resolve(__dirname,"./src"),
            // "assets":resolve(__dirname,"./src/assets"),
            // "view":resolve(__dirname,"./src/view"),
            // "utils":resolve(__dirname,"./src/utils"),
        }
    },
    // 全局变量注入,值必须使用JSON.stringify
    define:{
        $config:JSON.stringify({})
    },
}