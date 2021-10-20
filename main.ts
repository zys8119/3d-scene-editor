import {createApp} from "vue"
import router from "./src/router"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import App from "./src/App.vue"
import store from "./src/store"
import airforcePlug from "./src/store/plug/airforcePlug"
import alertPlug from "./src/store/plug/alertPlug"
import uiPlug from "./src/ui"
import apiPlug from "./src/api"
createApp(<any>App)
    .use(ElementPlus,{locale})
    .use(router)
    .use(store)
    .use(airforcePlug)
    .use(alertPlug)
    .use(uiPlug)
    .use(apiPlug)
    .mount("#app")