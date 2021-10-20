import {
    PluginOption,
} from 'vite'
import store from "../../src/store"
export default (options = {})=>{
    return <PluginOption>{
        name:"html-transform",
        transformIndexHtml(html) {
            return html.replace(
                /<title>(.*?)<\/title>/,
                `<title>${store.state.airforce.docTitle}</title>`
            )
        }
    }
}