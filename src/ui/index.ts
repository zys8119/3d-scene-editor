import { Plugin } from "vue"
import ContentTable from "./ContentTable"
import uiPackage from "./package/index"
import "./package/style.less"
const plug:Plugin = {
    install(vue){
        uiPackage(vue);
        vue.mixin(ContentTable);
    }
}
export default plug